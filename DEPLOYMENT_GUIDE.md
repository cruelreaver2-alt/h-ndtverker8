# 🚀 HÅNDTVERKEREN - DEPLOYMENT & ADMIN SETUP GUIDE

## 📋 INNHOLD
1. [Vercel Deployment](#vercel-deployment)
2. [Opprett Admin-Bruker](#opprett-admin-bruker)
3. [Testing](#testing)

---

## 1️⃣ VERCEL DEPLOYMENT

### **A. Hvis koblet til Git (ANBEFALT):**

```bash
# 1. Commit alle endringer
git add .
git commit -m "Lagt til email editor og admin-system"

# 2. Push til GitHub/GitLab/Bitbucket
git push origin main

# ✅ Vercel deployer AUTOMATISK!
# Se status på: https://vercel.com/dashboard
```

**Fordeler:**
- ✅ Automatisk deploy ved hver git push
- ✅ Preview deployments for branches
- ✅ Rollback til tidligere versjoner
- ✅ CI/CD pipeline

---

### **B. Hvis IKKE koblet til Git:**

```bash
# 1. Installer Vercel CLI (kun første gang)
npm install -g vercel

# 2. Logg inn
vercel login

# 3. Deploy til production
vercel --prod

# ✅ Følg instruksjonene i terminalen
```

**Output:**
```
🔍  Inspect: https://vercel.com/...
✅  Production: https://handverkeren.no
```

---

### **C. Koble til Git (BEST PRACTICE):**

```bash
# 1. Opprett GitHub repo
gh repo create handverkeren --private

# 2. Legg til remote
git remote add origin https://github.com/dittbrukernavn/handverkeren.git

# 3. Push
git branch -M main
git push -u origin main

# 4. Koble til Vercel
# Gå til: https://vercel.com/new
# → Import Git Repository
# → Velg handverkeren
# → Deploy

# ✅ NÅ: git push = auto deployment!
```

---

## 2️⃣ OPPRETT ADMIN-BRUKER

### **Metode 1: Via Backend API (ENKLEST)**

```bash
# Bruk curl eller Postman
curl -X POST https://handverkeren.no/functions/v1/make-server-8d200dba/auth/signup \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [DIN_SUPABASE_ANON_KEY]" \
  -d '{
    "email": "admin@handverkeren.no",
    "password": "DittSikre Passord123!",
    "name": "Administrator",
    "role": "admin"
  }'
```

**Svar:**
```json
{
  "user": { "id": "...", "email": "admin@handverkeren.no" },
  "message": "Admin-konto opprettet!",
  "profile": {
    "id": "...",
    "name": "Administrator",
    "email": "admin@handverkeren.no",
    "role": "admin",
    "permissions": ["all"]
  }
}
```

---

### **Metode 2: Via Node Script**

Opprett fil: `/scripts/create-admin.js`

```javascript
const SUPABASE_URL = 'https://[PROJECT_ID].supabase.co';
const ANON_KEY = '[DIN_ANON_KEY]';

async function createAdmin() {
  const response = await fetch(
    `${SUPABASE_URL}/functions/v1/make-server-8d200dba/auth/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ANON_KEY}`,
      },
      body: JSON.stringify({
        email: 'admin@handverkeren.no',
        password: 'DittSikkePassord123!',
        name: 'Administrator',
        role: 'admin',
      }),
    }
  );

  const data = await response.json();
  console.log('✅ Admin opprettet:', data);
}

createAdmin();
```

**Kjør:**
```bash
node scripts/create-admin.js
```

---

### **Metode 3: Via Supabase Dashboard**

```bash
# 1. Gå til Supabase Dashboard
# https://supabase.com/dashboard/project/[PROJECT_ID]

# 2. Gå til "Authentication" → "Users"

# 3. Klikk "Add user" → "Create new user"

# 4. Fyll ut:
Email: admin@handverkeren.no
Password: [DittPassord]
Auto Confirm User: ✅ JA

# 5. Klikk på brukeren → "Raw User Meta Data"

# 6. Legg til:
{
  "name": "Administrator",
  "role": "admin"
}

# 7. Save

# 8. Opprett admin-profil via API:
curl -X POST https://handverkeren.no/functions/v1/make-server-8d200dba/admins \
  -H "Content-Type: application/json" \
  -d '{
    "id": "[USER_ID_FRA_SUPABASE]",
    "name": "Administrator",
    "email": "admin@handverkeren.no",
    "role": "admin",
    "permissions": ["all"]
  }'
```

---

## 3️⃣ LOGG INN SOM ADMIN

```bash
# 1. Gå til:
https://handverkeren.no/logg-inn

# 2. Logg inn med:
Email: admin@handverkeren.no
Password: [DittPassord]

# 3. Du får nå tilgang til:
✅ /admin-invites - Send testpilot-invitasjoner
✅ /email-template-editor - Rediger e-post maler
✅ /admin - Admin panel

# 4. Sjekk at du er logget inn som admin:
console.log(useAuth().userRole) // Skal være "admin"
console.log(useAuth().isAdmin()) // Skal være true
```

---

## 4️⃣ TESTING

### **Test Admin-Funksjoner:**

```bash
# 1. Test Admin Invites
→ Gå til /admin-invites
→ Send invitasjon til deg selv
→ Sjekk at du mottar e-post

# 2. Test Email Template Editor
→ Gå til /email-template-editor
→ Endre hilsen-tekst
→ Klikk "Preview"
→ Send test-e-post til deg selv
→ Lagre template

# 3. Test at endret template brukes
→ Gå tilbake til /admin-invites
→ Send ny invitasjon
→ Sjekk at ny mal brukes i e-posten
```

---

## 5️⃣ SIKKERHET

### **Beskytt Admin-Routes (VIKTIG!):**

Oppdater `/src/app/routes.tsx`:

```typescript
// ENDRE FRA:
{ path: "admin-invites", Component: AdminInvites },

// TIL:
{ 
  path: "admin-invites", 
  element: <ProtectedRoute requireRole="admin"><AdminInvites /></ProtectedRoute> 
},
{ 
  path: "email-template-editor", 
  element: <ProtectedRoute requireRole="admin"><EmailTemplateEditor /></ProtectedRoute> 
},
```

---

### **Oppdater ProtectedRoute.tsx:**

```typescript
// Les /src/app/components/ProtectedRoute.tsx

// Legg til admin-støtte:
export function ProtectedRoute({ 
  children, 
  requireRole 
}: { 
  children: React.ReactNode; 
  requireRole?: "customer" | "supplier" | "admin";
}) {
  const { userRole, loading } = useAuth();

  if (loading) {
    return <div>Laster...</div>;
  }

  if (!userRole) {
    return <Navigate to="/logg-inn" replace />;
  }

  if (requireRole && userRole !== requireRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
```

---

## 6️⃣ ENVIRONMENT VARIABLES

### **Vercel Environment Variables:**

```bash
# Gå til Vercel Dashboard
→ Velg prosjekt
→ Settings → Environment Variables

# Legg til:
RESEND_API_KEY=re_xxxxxxxxxxxx
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
```

---

## 7️⃣ RESEND EMAIL SETUP

```bash
# 1. Gå til https://resend.com

# 2. Sign up / Log in

# 3. Legg til domene:
→ Domains → Add Domain
→ handverkeren.no

# 4. Verifiser domene (DNS records):
→ Kopier TXT/CNAME records
→ Legg til i DNS-leverandør
→ Vent på verifikasjon (5-30 min)

# 5. Opprett API key:
→ API Keys → Create API Key
→ Kopier key → Legg til i Vercel

# 6. Test:
→ Gå til /admin-invites
→ Send test-invitasjon
→ Sjekk at e-post kommer fram
```

---

## 8️⃣ TROUBLESHOOTING

### **Problem: E-post sendes ikke**

```bash
# Sjekk:
1. Er RESEND_API_KEY satt i Vercel?
2. Er domenet verifisert i Resend?
3. Sjekk Supabase Edge Function logs:
   → https://supabase.com/dashboard/project/[ID]/functions/make-server-8d200dba/logs

4. Test manuelt:
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "test@handverkeren.no",
    "to": "din@epost.no",
    "subject": "Test",
    "html": "<h1>Test</h1>"
  }'
```

---

### **Problem: Admin kan ikke logge inn**

```bash
# Sjekk:
1. Er brukeren opprettet i Supabase Auth?
   → Supabase Dashboard → Authentication → Users

2. Har brukeren role="admin" i user_metadata?
   → Klikk på bruker → Raw User Meta Data

3. Finnes admin-profil i database?
   → Test:
   curl https://handverkeren.no/functions/v1/make-server-8d200dba/admins/[USER_ID]
```

---

### **Problem: Deployment feiler**

```bash
# Sjekk:
1. Build logs i Vercel Dashboard
2. Syntax errors: npm run build
3. TypeScript errors: npm run type-check
4. Dependencies: npm install
```

---

## 9️⃣ VEDLIKEHOLD

### **Oppdatere appen:**

```bash
# 1. Gjør endringer lokalt
# 2. Test lokalt: npm run dev
# 3. Commit: git commit -m "Beskrivelse"
# 4. Push: git push
# ✅ Vercel deployer automatisk!
```

---

### **Rollback til tidligere versjon:**

```bash
# Via Vercel Dashboard:
1. Gå til Deployments
2. Finn fungerende deployment
3. Klikk "..." → "Promote to Production"
```

---

## 🎉 FERDIG!

**Admin-bruker opprettet:**
- ✅ Email: admin@handverkeren.no
- ✅ Rolle: admin
- ✅ Full tilgang til admin-funksjoner

**Deployment:**
- ✅ Automatisk via git push
- ✅ Production URL: https://handverkeren.no
- ✅ Preview deployments for branches

**Admin-funksjoner:**
- ✅ /admin-invites - Send invitasjoner
- ✅ /email-template-editor - Rediger e-post
- ✅ Beskyttet med ProtectedRoute

---

## 📞 SUPPORT

**Problem?**
- 📧 Email: support@handverkeren.no
- 📚 Docs: /docs
- 🔍 Logs: Vercel Dashboard → Functions → Logs

**Nyttige lenker:**
- Vercel Dashboard: https://vercel.com/dashboard
- Supabase Dashboard: https://supabase.com/dashboard
- Resend Dashboard: https://resend.com/emails

---

**Made with ❤️ by Håndtverkeren Team**
