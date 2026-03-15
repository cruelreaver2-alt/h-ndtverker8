import { Hono } from "npm:hono@4";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
import { getTestPilotInviteEmail } from "./email-templates.tsx";
import { URLS, getSignupUrl, EMAIL_CONFIG } from './config.tsx';

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

// Health check
app.get("/make-server-8d200dba/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ==========================================
// AUTHENTICATION
// ==========================================

// Helper: Validate certifications based on category
function validateCertifications(category: string, certifications: any[]): { valid: boolean; missing: string[]; status: string } {
  const getRequiredTypes = (cat: string): string[] => {
    const base = ["insurance", "org_number"];
    
    switch (cat) {
      case "elektro":
        return [...base, "dsb_registration", "electrician_certificate"];
      case "ror":
        return [...base, "plumber_approval", "plumber_certificate"];
      case "tre":
        return [...base]; // Fagbrev optional for tømrer
      case "tak":
        return [...base, "fall_protection"]; // HMS-kort obligatorisk
      case "maling":
        return [...base]; // Fagbrev optional
      default:
        return base;
    }
  };
  
  const typeNames: Record<string, string> = {
    insurance: "Ansvarsforsikring",
    org_number: "Organisasjonsnummer",
    dsb_registration: "DSB Elvirksomhetsregistrering",
    electrician_certificate: "Fagbrev elektriker",
    plumber_approval: "Kommunal godkjenning rørlegger",
    plumber_certificate: "Fagbrev rørlegger",
    fall_protection: "HMS-kort / Fallsikring",
  };

  const requiredTypes = getRequiredTypes(category);
  const uploadedTypes = certifications
    .filter(cert => cert.status === "uploaded" || cert.status === "verified")
    .map(cert => cert.type);

  const missingTypes = requiredTypes.filter(type => !uploadedTypes.includes(type));
  const missingNames = missingTypes.map(type => typeNames[type] || type);
  
  // Auto-approve if all required certifications are uploaded
  if (missingTypes.length === 0) {
    return { valid: true, missing: [], status: "approved" };
  }
  
  // Auto-reject if critical certifications are missing
  return { valid: false, missing: missingNames, status: "rejected" };
}

app.post("/make-server-8d200dba/auth/signup", async (c) => {
  try {
    const { email, password, name, role, company, category, certifications, orgNumber, phone } = await c.req.json();
    if (!email || !password || !name || !role) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
    );

    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email, password,
      user_metadata: { name, role, company: company || null },
      email_confirm: true,
    });

    if (authError) {
      return c.json({ error: authError.message }, 400);
    }

    const userId = authData.user.id;
    
    // Admin profile (superuser)
    if (role === "admin") {
      const profile = {
        id: userId,
        name,
        email,
        role: "admin",
        permissions: ["all"], // Full access
        createdAt: new Date().toISOString(),
      };

      await kv.set(`admin-profile:${userId}`, profile);
      
      return c.json({
        user: authData.user,
        message: "Admin-konto opprettet!",
        profile,
      });
    }
    
    // Supplier profile with certification validation
    if (role === "supplier" || role === "leverandor") {
      const certsArray = certifications || [];
      const validation = validateCertifications(category || "", certsArray);
      
      const profile = {
        id: userId,
        name,
        company: company || name,
        email,
        phone: phone || "",
        orgNumber: orgNumber || "",
        category: category || "",
        verified: validation.status === "approved",
        verificationStatus: validation.status, // "approved" or "rejected"
        rejectionReason: validation.missing.length > 0 
          ? `Mangler obligatoriske sertifiseringer: ${validation.missing.join(", ")}`
          : null,
        certifications: certsArray,
        memberSince: new Date().getFullYear().toString(),
        completedJobs: 0,
        rating: 0,
        reviewCount: 0,
        responseTime: "Ny",
        responseRate: 0,
        categories: category ? [category] : [],
        createdAt: new Date().toISOString(),
        lastVerified: validation.status === "approved" ? new Date().toISOString() : null,
      };

      await kv.set(`supplier-profile:${userId}`, profile);
      
      return c.json({
        user: authData.user,
        message: validation.status === "approved" 
          ? "Kontoen er opprettet og godkjent! Du kan nå motta jobber."
          : "Kontoen er opprettet, men mangler obligatoriske sertifiseringer.",
        verificationStatus: validation.status,
        missing: validation.missing,
        profile,
      });
    }
    
    // Customer profile
    const profile = {
      id: userId, name, email, memberSince: new Date().getFullYear().toString(),
      emailVerified: true, totalRequests: 0, activeRequests: 0, completedRequests: 0,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`customer-profile:${userId}`, profile);
    return c.json({ user: authData.user, message: "User created successfully" });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.post("/make-server-8d200dba/auth/signin", async (c) => {
  try {
    const { email, password } = await c.req.json();
    if (!email || !password) {
      return c.json({ error: "Missing email or password" }, 400);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') || '',
      Deno.env.get('SUPABASE_ANON_KEY') || '',
    );

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return c.json({ error: error.message }, 401);
    }

    return c.json({ session: data.session, user: data.user });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// JOBS
// ==========================================

app.post("/make-server-8d200dba/jobs", async (c) => {
  try {
    const job = await c.req.json();
    const jobId = `job-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const newJob = { ...job, id: jobId, createdAt: new Date().toISOString(), status: "open" };
    await kv.set(`job:${jobId}`, newJob);
    return c.json({ job: newJob });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/jobs", async (c) => {
  try {
    const jobs = await kv.getByPrefix("job:");
    return c.json({ jobs });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/jobs/:id", async (c) => {
  try {
    const job = await kv.get(`job:${c.req.param("id")}`);
    if (!job) return c.json({ error: "Job not found" }, 404);
    return c.json({ job });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// Alias for /requests (legacy support)
app.post("/make-server-8d200dba/requests", async (c) => {
  try {
    const job = await c.req.json();
    const jobId = `job-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const newJob = { ...job, id: jobId, createdAt: new Date().toISOString(), status: "open" };
    await kv.set(`job:${jobId}`, newJob);
    return c.json({ request: newJob });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/requests", async (c) => {
  try {
    const jobs = await kv.getByPrefix("job:");
    
    // Filter by customerId if provided
    const customerId = c.req.query("customerId");
    if (customerId) {
      const filtered = jobs.filter((job: any) => job.customerId === customerId);
      return c.json({ requests: filtered });
    }
    
    return c.json({ requests: jobs });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/requests/:id", async (c) => {
  try {
    const job = await kv.get(`job:${c.req.param("id")}`);
    if (!job) return c.json({ error: "Request not found" }, 404);
    return c.json({ request: job });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// OFFERS
// ==========================================

app.post("/make-server-8d200dba/offers", async (c) => {
  try {
    const body = await c.req.json();
    const { jobId, supplierId, price, description, duration, customerEmail, customerName, supplierName } = body;
    if (!jobId || !supplierId || !price) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const offerId = `offer-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const newOffer = {
      id: offerId, jobId, supplierId, price,
      description: description || "", duration: duration || "",
      materials: body.materials || [], status: "pending",
      createdAt: new Date().toISOString(),
    };
    await kv.set(`offer:${offerId}`, newOffer);

    // Create notification
    if (body.customerId) {
      const notificationId = `notification-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      await kv.set(`notification:customer:${body.customerId}:${notificationId}`, {
        id: notificationId, userId: body.customerId, type: "offer_received",
        title: "Nytt tilbud mottatt",
        message: `${supplierName || "En håndverker"} har sendt deg et tilbud på ${price} kr`,
        read: false, createdAt: new Date().toISOString(), relatedId: offerId,
      });
      
      // Send email notification if customer email is provided
      if (customerEmail) {
        const emailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #17384E; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f8f9fa; padding: 30px; }
                .button { display: inline-block; background-color: #E07B3E; color: white; padding: 12px 24px; 
                          text-decoration: none; border-radius: 5px; margin-top: 20px; }
                .footer { text-align: center; padding: 20px; color: #6B7280; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 Nytt tilbud mottatt!</h1>
                </div>
                <div class="content">
                  <p>Hei ${customerName || 'der'},</p>
                  <p><strong>${supplierName || 'En håndverker'}</strong> har sendt deg et tilbud:</p>
                  <ul>
                    <li><strong>Pris:</strong> ${price.toLocaleString('nb-NO')} kr</li>
                    ${duration ? `<li><strong>Varighet:</strong> ${duration}</li>` : ''}
                    ${description ? `<li><strong>Beskrivelse:</strong> ${description}</li>` : ''}
                  </ul>
                  <p>Logg inn for å se hele tilbudet og godta eller avslå det.</p>
                  <a href="https://handverkeren.no/kundedashboard" class="button">Se tilbud</a>
                </div>
                <div class="footer">
                  <p>© 2026 Håndverkeren - Din pålitelige håndverkerplattform</p>
                </div>
              </div>
            </body>
          </html>
        `;
        
        await sendEmail(
          customerEmail,
          `Nytt tilbud fra ${supplierName || 'en håndverker'}`,
          emailHtml
        );
      }
    }

    return c.json({ offer: newOffer, success: true });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/jobs/:jobId/offers", async (c) => {
  try {
    const allOffers = await kv.getByPrefix("offer:");
    const jobOffers = allOffers.filter((o: any) => o.jobId === c.req.param("jobId"));
    return c.json({ offers: jobOffers });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// Accept or reject an offer
app.put("/make-server-8d200dba/offers/:offerId/status", async (c) => {
  try {
    const { status, customerId } = await c.req.json();
    
    if (!status || !["accepted", "rejected"].includes(status)) {
      return c.json({ error: "Invalid status. Must be 'accepted' or 'rejected'" }, 400);
    }

    const offer = await kv.get(`offer:${c.req.param("offerId")}`);
    if (!offer) {
      return c.json({ error: "Offer not found" }, 404);
    }

    // Update offer status
    offer.status = status;
    offer.updatedAt = new Date().toISOString();
    await kv.set(`offer:${c.req.param("offerId")}`, offer);

    // If accepted, update job status and notify supplier
    if (status === "accepted") {
      const job = await kv.get(`job:${offer.jobId}`);
      if (job) {
        job.status = "accepted";
        job.acceptedOfferId = offer.id;
        await kv.set(`job:${offer.jobId}`, job);
      }

      // Notify supplier
      const notificationId = `notification-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      await kv.set(`notification:${offer.supplierId}:${notificationId}`, {
        id: notificationId,
        userId: offer.supplierId,
        type: "offer_accepted",
        title: "Tilbud akseptert! 🎉",
        message: "Kunden har akseptert ditt tilbud",
        read: false,
        createdAt: new Date().toISOString(),
        relatedId: offer.id,
      });
    }

    return c.json({ offer, success: true });
  } catch (error) {
    console.error("Error updating offer status:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Mark job as completed
app.put("/make-server-8d200dba/jobs/:jobId/complete", async (c) => {
  try {
    const { customerId } = await c.req.json();
    
    const job = await kv.get(`job:${c.req.param("jobId")}`);
    if (!job) {
      return c.json({ error: "Job not found" }, 404);
    }

    // Only customer who created the job can mark it as completed
    if (job.customerId !== customerId) {
      return c.json({ error: "Unauthorized" }, 403);
    }

    // Update job status
    job.status = "completed";
    job.completedAt = new Date().toISOString();
    await kv.set(`job:${c.req.param("jobId")}`, job);

    // Get accepted offer to find supplier
    if (job.acceptedOfferId) {
      const offer = await kv.get(`offer:${job.acceptedOfferId}`);
      if (offer) {
        // Notify supplier
        const notificationId = `notification-${Date.now()}-${Math.random().toString(36).substring(7)}`;
        await kv.set(`notification:${offer.supplierId}:${notificationId}`, {
          id: notificationId,
          userId: offer.supplierId,
          type: "job_completed",
          title: "Jobb fullført ✅",
          message: "Kunden har markert jobben som fullført",
          read: false,
          createdAt: new Date().toISOString(),
          relatedId: job.id,
        });

        // Update supplier stats
        const supplier = await kv.get(`supplier-profile:${offer.supplierId}`);
        if (supplier) {
          supplier.completedJobs = (supplier.completedJobs || 0) + 1;
          await kv.set(`supplier-profile:${offer.supplierId}`, supplier);
        }
      }
    }

    return c.json({ job, success: true });
  } catch (error) {
    console.error("Error completing job:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// NOTIFICATIONS
// ==========================================

app.get("/make-server-8d200dba/notifications/:userId", async (c) => {
  try {
    const notifications = await kv.getByPrefix(`notification:customer:${c.req.param("userId")}:`);
    notifications.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json({ notifications });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.put("/make-server-8d200dba/notifications/:notificationId/read", async (c) => {
  try {
    const { userId } = await c.req.json();
    const key = `notification:customer:${userId}:${c.req.param("notificationId")}`;
    const notification = await kv.get(key);
    if (!notification) return c.json({ error: "Not found" }, 404);
    const updated = { ...notification, read: true };
    await kv.set(key, updated);
    return c.json({ notification: updated });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// PROFILES
// ==========================================

app.get("/make-server-8d200dba/suppliers/:id", async (c) => {
  try {
    const supplier = await kv.get(`supplier-profile:${c.req.param("id")}`);
    if (!supplier) return c.json({ error: "Not found" }, 404);
    return c.json({ supplier });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/customers/:id", async (c) => {
  try {
    const customer = await kv.get(`customer-profile:${c.req.param("id")}`);
    if (!customer) return c.json({ error: "Not found" }, 404);
    return c.json({ customer });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/admins/:id", async (c) => {
  try {
    const admin = await kv.get(`admin-profile:${c.req.param("id")}`);
    if (!admin) return c.json({ error: "Not found" }, 404);
    return c.json({ admin });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.put("/make-server-8d200dba/suppliers/:id", async (c) => {
  try {
    const updates = await c.req.json();
    const existing = await kv.get(`supplier-profile:${c.req.param("id")}`);
    if (!existing) return c.json({ error: "Not found" }, 404);
    const updated = { ...existing, ...updates, id: c.req.param("id") };
    await kv.set(`supplier-profile:${c.req.param("id")}`, updated);
    return c.json({ supplier: updated });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// REVIEWS
// ==========================================

app.post("/make-server-8d200dba/reviews", async (c) => {
  try {
    const { supplierId, customerId, rating, comment, jobId } = await c.req.json();
    if (!supplierId || !customerId || !rating) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const reviewId = `review:${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const review = {
      id: reviewId, supplierId, customerId, rating,
      comment: comment || "", jobId: jobId || null,
      createdAt: new Date().toISOString(),
    };
    await kv.set(reviewId, review);

    // Update supplier rating
    const allReviews = await kv.getByPrefix("review:");
    const supplierReviews = allReviews.filter((r: any) => r.supplierId === supplierId);
    const avgRating = supplierReviews.reduce((sum: number, r: any) => sum + r.rating, 0) / supplierReviews.length;
    const supplier = await kv.get(`supplier-profile:${supplierId}`);
    if (supplier) {
      supplier.rating = avgRating;
      supplier.reviewCount = supplierReviews.length;
      await kv.set(`supplier-profile:${supplierId}`, supplier);
    }

    return c.json({ review });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

app.get("/make-server-8d200dba/reviews", async (c) => {
  try {
    const supplierId = c.req.query("supplierId");
    if (!supplierId) return c.json({ error: "supplierId required" }, 400);
    const allReviews = await kv.getByPrefix("review:");
    const supplierReviews = allReviews.filter((r: any) => r.supplierId === supplierId);
    supplierReviews.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json({ reviews: supplierReviews });
  } catch (error) {
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// MESSAGES
// ==========================================

// Send a message
app.post("/make-server-8d200dba/messages", async (c) => {
  try {
    const { requestId, senderId, receiverId, content, senderRole } = await c.req.json();
    
    if (!requestId || !senderId || !receiverId || !content) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const messageId = `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const message = {
      id: messageId,
      requestId,
      senderId,
      receiverId,
      content,
      senderRole,
      createdAt: new Date().toISOString(),
      read: false,
    };

    await kv.set(`message:${requestId}:${messageId}`, message);

    // Create notification for receiver
    const notificationId = `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const senderProfile = senderRole === "supplier" 
      ? await kv.get(`supplier-profile:${senderId}`)
      : await kv.get(`customer-profile:${senderId}`);
    
    const senderName = senderProfile?.name || senderProfile?.company || "En bruker";
    
    await kv.set(`notification:${receiverId}:${notificationId}`, {
      id: notificationId,
      userId: receiverId,
      type: "new_message",
      title: "Ny melding",
      message: `${senderName} sendte deg en melding`,
      read: false,
      createdAt: new Date().toISOString(),
      relatedId: requestId,
    });

    return c.json({ message, success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get messages for a request
app.get("/make-server-8d200dba/messages/:requestId", async (c) => {
  try {
    const requestId = c.params.requestId;
    const userId = c.req.query("userId");
    
    const allMessages = await kv.getByPrefix(`message:${requestId}:`);
    
    // Sort by createdAt
    allMessages.sort((a: any, b: any) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    // Mark messages as read if userId is the receiver
    if (userId) {
      for (const msg of allMessages) {
        if (msg.receiverId === userId && !msg.read) {
          msg.read = true;
          await kv.set(`message:${requestId}:${msg.id}`, msg);
        }
      }
    }

    return c.json({ messages: allMessages });
  } catch (error) {
    console.error("Error loading messages:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get all conversations for a user
app.get("/make-server-8d200dba/conversations/:userId", async (c) => {
  try {
    const userId = c.params.userId;
    const allMessages = await kv.getByPrefix("message:");
    
    // Group messages by requestId
    const conversationsMap = new Map();
    
    for (const msg of allMessages) {
      if (msg.senderId === userId || msg.receiverId === userId) {
        if (!conversationsMap.has(msg.requestId)) {
          conversationsMap.set(msg.requestId, []);
        }
        conversationsMap.get(msg.requestId).push(msg);
      }
    }

    // Build conversation objects
    const conversations = [];
    for (const [requestId, messages] of conversationsMap.entries()) {
      const sortedMessages = messages.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      const lastMessage = sortedMessages[0];
      const unreadCount = messages.filter((m: any) => 
        m.receiverId === userId && !m.read
      ).length;

      // Get the other user's ID
      const otherUserId = lastMessage.senderId === userId 
        ? lastMessage.receiverId 
        : lastMessage.senderId;

      // Get request details
      const request = await kv.get(`job:${requestId}`);
      
      // Get other user profile
      let otherUserProfile = await kv.get(`supplier-profile:${otherUserId}`);
      if (!otherUserProfile) {
        otherUserProfile = await kv.get(`customer-profile:${otherUserId}`);
      }

      conversations.push({
        requestId,
        requestTitle: request?.title || "Untitled Request",
        otherUser: {
          id: otherUserId,
          name: otherUserProfile?.name || otherUserProfile?.company || "Unknown User",
          image: otherUserProfile?.profileImage || "",
        },
        lastMessage,
        unreadCount,
      });
    }

    // Sort by last message time
    conversations.sort((a, b) => 
      new Date(b.lastMessage.createdAt).getTime() - new Date(a.lastMessage.createdAt).getTime()
    );

    return c.json({ conversations });
  } catch (error) {
    console.error("Error loading conversations:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// EMAIL SENDING
// ==========================================

// Send email using Resend API
async function sendEmail(to: string, subject: string, html: string) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured - email not sent");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Håndverkeren <noreply@handverkeren.no>",
        to: [to],
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Email sending failed:", data);
      return { success: false, error: data.message };
    }

    console.log("Email sent successfully:", data.id);
    return { success: true, id: data.id };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: String(error) };
  }
}

// Email endpoint (for testing or manual sends)
app.post("/make-server-8d200dba/send-email", async (c) => {
  try {
    const { to, subject, html } = await c.req.json();
    
    if (!to || !subject || !html) {
      return c.json({ error: "Missing required fields: to, subject, html" }, 400);
    }

    const result = await sendEmail(to, subject, html);
    
    if (result.success) {
      return c.json({ success: true, emailId: result.id });
    } else {
      return c.json({ success: false, error: result.error }, 500);
    }
  } catch (error) {
    console.error("Error in send-email endpoint:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// TEST PILOT INVITATIONS
// ==========================================

// Generate unique invite code
function generateInviteCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Send test pilot invitation email
app.post("/make-server-8d200dba/invites/send", async (c) => {
  try {
    const { email, name, expiresInDays } = await c.req.json();
    
    if (!email || !name) {
      return c.json({ error: "Missing required fields: email, name" }, 400);
    }

    // Generate unique invite code
    const inviteCode = generateInviteCode();
    
    // Calculate expiration date
    const expiresAt = expiresInDays 
      ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000).toLocaleDateString('nb-NO')
      : null;

    // Store invitation in database
    const inviteId = `invite-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const invitation = {
      id: inviteId,
      code: inviteCode,
      email,
      name,
      status: 'sent',
      expiresAt: expiresAt,
      createdAt: new Date().toISOString(),
      usedAt: null,
      userId: null,
    };
    
    await kv.set(`testpilot-invite:${inviteCode}`, invitation);
    await kv.set(`testpilot-invite-by-email:${email}`, invitation);

    // Generate email HTML
    const emailHtml = getTestPilotInviteEmail({
      recipientName: name,
      recipientEmail: email,
      inviteCode,
      expiresAt: expiresAt || undefined,
    });

    // Send email
    const result = await sendEmail(
      email,
      "🎉 Du er invitert til Håndtverkeren Testpilot!",
      emailHtml
    );

    if (result.success) {
      return c.json({ 
        success: true, 
        invitation,
        emailId: result.id 
      });
    } else {
      // Mark as failed in database
      invitation.status = 'failed';
      invitation.error = result.error;
      await kv.set(`testpilot-invite:${inviteCode}`, invitation);
      
      return c.json({ 
        success: false, 
        error: result.error,
        invitation 
      }, 500);
    }
  } catch (error) {
    console.error("Error sending test pilot invitation:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Validate invite code
app.get("/make-server-8d200dba/invites/validate/:code", async (c) => {
  try {
    const code = c.req.param("code").toUpperCase();
    const invitation = await kv.get(`testpilot-invite:${code}`);

    if (!invitation) {
      return c.json({ valid: false, error: "Invalid invite code" }, 404);
    }

    if (invitation.status === 'used') {
      return c.json({ valid: false, error: "Invite code already used" });
    }

    if (invitation.expiresAt) {
      const expireDate = new Date(invitation.expiresAt);
      if (expireDate < new Date()) {
        return c.json({ valid: false, error: "Invite code expired" });
      }
    }

    return c.json({ 
      valid: true, 
      invitation: {
        code: invitation.code,
        name: invitation.name,
        expiresAt: invitation.expiresAt,
      }
    });
  } catch (error) {
    console.error("Error validating invite code:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Mark invite as used
app.post("/make-server-8d200dba/invites/use/:code", async (c) => {
  try {
    const code = c.req.param("code").toUpperCase();
    const { userId } = await c.req.json();

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    const invitation = await kv.get(`testpilot-invite:${code}`);

    if (!invitation) {
      return c.json({ error: "Invalid invite code" }, 404);
    }

    if (invitation.status === 'used') {
      return c.json({ error: "Invite code already used" }, 400);
    }

    // Mark as used
    invitation.status = 'used';
    invitation.usedAt = new Date().toISOString();
    invitation.userId = userId;
    
    await kv.set(`testpilot-invite:${code}`, invitation);

    return c.json({ success: true, invitation });
  } catch (error) {
    console.error("Error marking invite as used:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get all invitations (admin)
app.get("/make-server-8d200dba/invites", async (c) => {
  try {
    const invitations = await kv.getByPrefix("testpilot-invite:");
    
    // Filter out duplicate entries (by-email entries)
    const uniqueInvites = invitations.filter((inv: any) => 
      inv.id && inv.id.startsWith('invite-')
    );
    
    // Sort by creation date
    uniqueInvites.sort((a: any, b: any) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json({ invitations: uniqueInvites });
  } catch (error) {
    console.error("Error getting invitations:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// ==========================================
// EMAIL TEMPLATE MANAGEMENT
// ==========================================

// Save email template
app.post("/make-server-8d200dba/settings/email-template", async (c) => {
  try {
    const { template } = await c.req.json();
    
    if (!template) {
      return c.json({ error: "Template is required" }, 400);
    }

    // Save template with versioning
    const version = Date.now();
    await kv.set("email-template:current", { template, version, updatedAt: new Date().toISOString() });
    await kv.set(`email-template:v${version}`, { template, version, updatedAt: new Date().toISOString() });

    return c.json({ success: true, version });
  } catch (error) {
    console.error("Error saving email template:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Get current email template
app.get("/make-server-8d200dba/settings/email-template", async (c) => {
  try {
    const data = await kv.get("email-template:current");
    
    if (!data) {
      return c.json({ template: null });
    }

    return c.json({ template: data.template, version: data.version, updatedAt: data.updatedAt });
  } catch (error) {
    console.error("Error getting email template:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Send test email with custom template
app.post("/make-server-8d200dba/invites/send-test", async (c) => {
  try {
    const { email, name, template } = await c.req.json();
    
    if (!email || !name) {
      return c.json({ error: "Missing required fields: email, name" }, 400);
    }

    // Generate test invite code
    const inviteCode = "TEST" + generateInviteCode().substring(4);
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('nb-NO');

    // Use custom template or default
    const emailHtml = template 
      ? getCustomTemplateEmail({ recipientName: name, recipientEmail: email, inviteCode, expiresAt }, template)
      : getTestPilotInviteEmail({ recipientName: name, recipientEmail: email, inviteCode, expiresAt });

    // Send email
    const result = await sendEmail(
      email,
      "🎉 [TEST] Du er invitert til Håndtverkeren Testpilot!",
      emailHtml
    );

    if (result.success) {
      return c.json({ success: true, emailId: result.id, inviteCode });
    } else {
      return c.json({ success: false, error: result.error }, 500);
    }
  } catch (error) {
    console.error("Error sending test email:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Helper function to generate email from custom template
function getCustomTemplateEmail(data: any, template: any): string {
  const { recipientName, inviteCode, expiresAt } = data;
  const greeting = template.greeting.replace('{{name}}', recipientName);
  
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.mainHeading}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #F8FAFC;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0; padding: 0; background-color: #F8FAFC;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #17384E 0%, #1a4459 100%); padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700;">🔨 Håndtverkeren</h1>
              <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Norges smarteste håndverkerplattform</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #E07B3E; height: 8px;"></td>
          </tr>
          <tr>
            <td style="padding: 48px 40px;">
              <h2 style="margin: 0 0 24px 0; color: #111827; font-size: 28px; font-weight: 700;">${greeting}</h2>
              <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.6;">${template.introText}</p>
              
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                <tr>
                  <td style="background-color: #F0F9FF; border-left: 4px solid #3B82F6; padding: 24px; border-radius: 8px;">
                    <h3 style="margin: 0 0 16px 0; color: #1E40AF; font-size: 18px; font-weight: 600;">🎁 Som testpilot får du:</h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #374151; font-size: 15px; line-height: 1.8;">
                      ${template.benefitsList.map((b: string) => `<li style="margin-bottom: 8px;">${b}</li>`).join('')}
                    </ul>
                  </td>
                </tr>
              </table>

              <h3 style="margin: 32px 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">✨ Hva kan du gjøre?</h3>
              
              ${template.featuresList.map((f: any) => `
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEF3F2; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                  <tr>
                    <td style="width: 48px; vertical-align: top;">
                      <div style="width: 40px; height: 40px; background-color: #E07B3E; border-radius: 8px; text-align: center; line-height: 40px; font-size: 20px;">${f.icon}</div>
                    </td>
                    <td style="padding-left: 16px;">
                      <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">${f.title}</h4>
                      <p style="margin: 0; color: #6B7280; font-size: 14px; line-height: 1.5;">${f.description}</p>
                    </td>
                  </tr>
                </table>
              `).join('')}

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                <tr>
                  <td style="background: linear-gradient(135deg, #FEF3F2 0%, #FEE2E2 100%); border: 2px dashed #E07B3E; padding: 24px; border-radius: 12px; text-align: center;">
                    <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 14px; font-weight: 500; text-transform: uppercase;">Din personlige invitasjonskode</p>
                    <div style="background-color: #FFFFFF; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                      <code style="font-family: monospace; font-size: 28px; font-weight: 700; color: #17384E; letter-spacing: 2px;">${inviteCode}</code>
                    </div>
                    ${expiresAt ? `<p style="margin: 0; color: #9CA3AF; font-size: 13px;">⏰ Gyldig til ${expiresAt}</p>` : ''}
                  </td>
                </tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 40px 0;">
                <tr>
                  <td style="text-align: center;">
                    <a href="${getSignupUrl(inviteCode)}" style="display: inline-block; background-color: #E07B3E; color: #FFFFFF; text-decoration: none; font-size: 18px; font-weight: 600; padding: 16px 48px; border-radius: 12px;">${template.ctaButtonText}</a>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 16px;">
                    <a href="${URLS.about}" style="display: inline-block; color: #17384E; text-decoration: none; font-size: 15px; font-weight: 500; padding: 12px 32px; border: 2px solid #17384E; border-radius: 12px;">${template.secondaryButtonText}</a>
                  </td>
                </tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0 0 0;">
                <tr>
                  <td style="background-color: #FFFBEB; border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0; color: #92400E; font-size: 14px; line-height: 1.6;">
                      <strong>Trenger du hjelp?</strong><br>
                      Vi er her for deg! Send en e-post til <a href="mailto:${template.helpEmail}" style="color: #E07B3E; text-decoration: none; font-weight: 600;">${template.helpEmail}</a> eller ring oss på <a href="tel:${template.helpPhone}" style="color: #E07B3E; text-decoration: none; font-weight: 600;">${template.helpPhone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #F9FAFB; padding: 32px 40px; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 16px 0; text-align: center; color: #6B7280; font-size: 14px;">${template.footerText}</p>
              <p style="margin: 0; text-align: center; color: #9CA3AF; font-size: 12px; line-height: 1.5;">
                ${template.companyName} | Org.nr: ${template.companyOrgNr}<br>
                ${template.companyAddress}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ==========================================
// AI JOB ASSISTANT
// ==========================================

// Get predefined questions for a category
app.get("/make-server-8d200dba/ai/questions/:category", async (c) => {
  try {
    const category = c.req.param("category");
    const questions = jobQuestions[category];
    
    if (!questions) {
      return c.json({ error: "Category not found", questions: [] }, 404);
    }

    return c.json({ success: true, questions, category });
  } catch (error) {
    console.error("Error getting questions:", error);
    return c.json({ error: String(error) }, 500);
  }
});

// Generate AI job description
app.post("/make-server-8d200dba/ai/generate-description", async (c) => {
  try {
    const { category, initialDescription, answers } = await c.req.json();
    
    console.log("🔍 GENERATE DESCRIPTION REQUEST:");
    console.log("📊 Category:", category);
    console.log("📝 Answers:", JSON.stringify(answers, null, 2));
    
    if (!category || !initialDescription || !answers) {
      return c.json({ error: "Missing required fields: category, initialDescription, answers" }, 400);
    }

    // Generate description using AI
    const description = await generateJobDescription(category, initialDescription, answers);
    
    // Estimate budget if possible
    const budgetEstimate = estimateBudget(category, answers);
    
    // Detect secondary trades needed
    console.log("🔍 CALLING detectSecondaryTrades...");
    const secondaryJobs = detectSecondaryTrades(category, answers);
    console.log("🎯 DETECTED SECONDARY JOBS:", secondaryJobs.length);
    console.log("📋 Secondary Jobs Details:", JSON.stringify(secondaryJobs, null, 2));
    
    const secondaryJobPrompt = secondaryJobs.length > 0 
      ? generateSecondaryJobPrompt(secondaryJobs)
      : null;

    console.log("✅ RESPONSE DATA:", { 
      hasDescription: !!description,
      hasBudgetEstimate: !!budgetEstimate,
      secondaryJobsCount: secondaryJobs.length,
      hasPrompt: !!secondaryJobPrompt
    });

    return c.json({ 
      success: true, 
      description,
      budgetEstimate,
      secondaryJobs,
      secondaryJobPrompt,
      category
    });
  } catch (error) {
    console.error("Error generating description:", error);
    return c.json({ error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);