# 🌐 CUSTOM DOMAIN SETUP - HÅNDTVERKEREN

## 📋 OVERSIKT

Denne guiden viser hvordan du kobler ditt egne domene (f.eks. **mittdomene.no**) til Håndtverkeren-appen på Vercel.

---

## ⚙️ STEG 1: LEGG TIL DOMENE I VERCEL

### **1.1 Via Vercel Dashboard:**

```bash
# 1. Gå til Vercel Dashboard
https://vercel.com/dashboard

# 2. Velg prosjektet "handverkeren"

# 3. Gå til "Settings" → "Domains"

# 4. Klikk "Add Domain"

# 5. Skriv inn domenet ditt:
mitt-domene.no

# 6. Velg:
[✓] mitt-domene.no (Apex domain - Anbefalt)
[✓] www.mitt-domene.no (Redirect to apex)

# 7. Klikk "Add"
```

**Vercel viser nå DNS-instruksjoner** 📝

---

## 🔧 STEG 2: KONFIGURER DNS

Vercel gir deg spesifikke DNS-records å legge til hos din domene-leverandør.

### **2.1 Standard DNS Records:**

#### **A Record (for apex domain):**
```
Type:  A
Name:  @ (eller rot-domenet)
Value: 76.76.21.21
TTL:   3600
```

#### **CNAME Record (for www):**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   3600
```

---

### **2.2 Eksempel - Domeneshop.no:**

```bash
# 1. Logg inn på domeneshop.no
# 2. Velg domenet
# 3. Klikk "DNS" → "Rediger DNS-sone"

# 4. SLETT eksisterende A-record for @ (hvis det finnes)

# 5. Legg til NYE records:

┌──────────────────────────────────────────┐
│ A-RECORD                                  │
├──────────────────────────────────────────┤
│ Type:  A                                  │
│ Host:  @                                  │
│ Verdi: 76.76.21.21                       │
│ TTL:   3600                              │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ CNAME-RECORD                              │
├──────────────────────────────────────────┤
│ Type:  CNAME                              │
│ Host:  www                                │
│ Verdi: cname.vercel-dns.com              │
│ TTL:   3600                              │
└──────────────────────────────────────────┘

# 6. Lagre endringer
```

---

### **2.3 Eksempel - One.com:**

```bash
# 1. Logg inn på one.com
# 2. Gå til "Kontrollpanel" → "DNS"
# 3. Klikk "Rediger DNS-innstillinger"

# 4. Legg til records:

A-record:
└─ Navn: @ (blank)
└─ Peker til: 76.76.21.21
└─ TTL: 3600

CNAME-record:
└─ Navn: www
└─ Peker til: cname.vercel-dns.com
└─ TTL: 3600

# 5. Lagre
```

---

### **2.4 Eksempel - GoDaddy:**

```bash
# 1. Logg inn på godaddy.com
# 2. Gå til "My Products" → "DNS"
# 3. Klikk "Manage DNS"

# 4. Legg til records:

A Record:
├─ Type: A
├─ Name: @
├─ Value: 76.76.21.21
└─ TTL: 1 Hour

CNAME Record:
├─ Type: CNAME
├─ Name: www
├─ Value: cname.vercel-dns.com
└─ TTL: 1 Hour

# 5. Save
```

---

### **2.5 Eksempel - Cloudflare:**

```bash
# 1. Logg inn på cloudflare.com
# 2. Velg domenet
# 3. Gå til "DNS" → "Records"

# 4. Legg til records:

A Record:
├─ Type:  A
├─ Name:  @ (eller mitt-domene.no)
├─ IPv4:  76.76.21.21
├─ Proxy: 🔴 DNS only (VIKTIG! Slå AV orange sky)
└─ TTL:   Auto

CNAME Record:
├─ Type:   CNAME
├─ Name:   www
├─ Target: cname.vercel-dns.com
├─ Proxy:  🔴 DNS only (VIKTIG! Slå AV orange sky)
└─ TTL:    Auto

# ⚠️ KRITISK: Cloudflare proxy MÅ være OFF (grå sky)
# Hvis proxy er ON (orange sky), vil SSL feile!

# 5. Save
```

---

## ⏳ STEG 3: VENT PÅ DNS-PROPAGERING

```bash
# DNS-endringer tar tid:
⏱️ Minimum: 5-15 minutter
⏱️ Maksimum: 24-48 timer
⏱️ Gjennomsnitt: 30-60 minutter

# Sjekk status i Vercel Dashboard:
→ Settings → Domains

🔴 Invalid Configuration    = Venter på DNS
🟡 Pending Verification     = Verifiserer (nesten klar!)
🟢 Valid Configuration      = Ferdig! ✅
```

---

### **3.1 Test DNS Manuelt:**

#### **Mac/Linux:**
```bash
# Test A-record:
dig mitt-domene.no +short
# Skal returnere: 76.76.21.21

# Test CNAME:
dig www.mitt-domene.no +short
# Skal returnere: cname.vercel-dns.com

# Test med Google DNS:
dig @8.8.8.8 mitt-domene.no +short
```

#### **Windows (PowerShell):**
```powershell
# Test A-record:
nslookup mitt-domene.no

# Skal vise:
# Address: 76.76.21.21

# Test CNAME:
nslookup www.mitt-domene.no

# Skal vise:
# Canonical name: cname.vercel-dns.com
```

---

## 🔒 STEG 4: SSL-SERTIFIKAT (AUTOMATISK)

```bash
# Når DNS er verifisert:

1. Vercel bestiller Let's Encrypt SSL-sertifikat
2. Installeres automatisk
3. Auto-fornyelse hver 90. dag

# Innen 5-10 minutter etter DNS-verifisering:
✅ https://mitt-domene.no - Sikker!
✅ https://www.mitt-domene.no - Sikker!

# Vercel redirect:
http://mitt-domene.no → https://mitt-domene.no
www.mitt-domene.no → https://mitt-domene.no
```

---

## 🔧 STEG 5: OPPDATER APP-KONFIGURASJON

Nå må du oppdatere appen til å bruke ditt nye domene:

### **5.1 Sett Environment Variable i Vercel:**

```bash
# 1. Gå til Vercel Dashboard
# 2. Velg prosjekt → Settings → Environment Variables

# 3. Legg til:
┌──────────────────────────────────────────┐
│ Name:  APP_DOMAIN                         │
│ Value: mitt-domene.no                     │
│ Scope: Production, Preview, Development  │
└──────────────────────────────────────────┘

# 4. Klikk "Save"

# 5. Redeploy appen:
→ Deployments → Latest → "..." → "Redeploy"
```

---

### **5.2 Oppdater E-post Konfigurasjon (Resend):**

```bash
# 1. Gå til resend.com/domains
# 2. Klikk "Add Domain"
# 3. Skriv inn: mitt-domene.no
# 4. Kopier DNS-records fra Resend

# 5. Legg til i DNS-leverandør:

TXT Record:
├─ Name:  @ (eller blank)
├─ Value: v=spf1 include:resend.com ~all
└─ TTL:   3600

DKIM Record:
├─ Name:  resend._domainkey
├─ Value: [Verdi fra Resend]
└─ TTL:   3600

# 6. Vent på verifisering (5-30 min)
# 7. Test sending fra noreply@mitt-domene.no
```

---

## 📧 STEG 6: TEST E-POST MED NYTT DOMENE

```bash
# 1. Gå til appen:
https://mitt-domene.no/admin-invites

# 2. Send test-invitasjon til deg selv

# 3. Sjekk at e-post kommer fra:
From: Håndtverkeren <noreply@mitt-domene.no>

# 4. Sjekk at lenker i e-posten peker til:
https://mitt-domene.no/signup?invite=XXXXX
```

---

## ✅ STEG 7: VERIFISER AT ALT FUNGERER

### **7.1 Sjekkliste:**

```bash
□ https://mitt-domene.no laster appen
□ https://www.mitt-domene.no redirecter til apex
□ SSL-sertifikat er gyldig (🔒 grønn hengelås)
□ E-post sendes fra @mitt-domene.no
□ Lenker i e-post peker til mitt-domene.no
□ Admin-panel fungerer
□ Email template editor fungerer
```

---

### **7.2 Test Full Workflow:**

```bash
# 1. Åpne nettleseren (Incognito mode)
# 2. Gå til: https://mitt-domene.no
# 3. Klikk "Logg inn"
# 4. Logg inn som admin
# 5. Gå til: https://mitt-domene.no/admin-invites
# 6. Send invitasjon til test@example.com
# 7. Sjekk at e-post mottas
# 8. Klikk lenke i e-post
# 9. Verifiser at det åpner: https://mitt-domene.no/signup?invite=...

✅ Hvis alt fungerer = SUCCESS!
```

---

## 🐛 TROUBLESHOOTING

### **Problem 1: "DNS Not Configured" i Vercel**

```bash
# Løsning:
1. Dobbelsjekk DNS-records hos domene-leverandør
2. Verifiser at A-record peker til: 76.76.21.21
3. Verifiser at CNAME peker til: cname.vercel-dns.com
4. Vent 15-30 minutter til
5. Klikk "Refresh" i Vercel
```

---

### **Problem 2: SSL Certificate Error**

```bash
# Løsning:
1. Vent 10-15 minutter etter DNS er verifisert
2. Sjekk at Cloudflare proxy er OFF (hvis bruker Cloudflare)
3. Gå til Vercel → Settings → Domains
4. Klikk "..." ved domenet → "Renew Certificate"
5. Vent 5-10 minutter
```

---

### **Problem 3: www Redirecter Ikke**

```bash
# Løsning:
1. Sjekk at CNAME for www eksisterer
2. Gå til Vercel → Settings → Domains
3. Klikk "..." ved www.mitt-domene.no
4. Velg "Edit" → "Redirect to mitt-domene.no"
5. Lagre
```

---

### **Problem 4: E-post Kommer Fra Feil Domene**

```bash
# Løsning:
1. Sjekk at APP_DOMAIN environment variable er satt
2. Gå til Vercel → Settings → Environment Variables
3. Legg til/oppdater: APP_DOMAIN = mitt-domene.no
4. Redeploy appen:
   → Deployments → Latest → "..." → "Redeploy"
5. Vent 2-3 minutter
6. Test igjen
```

---

### **Problem 5: E-post Går Til Spam**

```bash
# Løsning:
1. Verifiser at SPF, DKIM og DMARC er korrekt satt opp
2. Legg til DMARC record:

DMARC Record:
├─ Name:  _dmarc
├─ Value: v=DMARC1; p=none; rua=mailto:dmarc@mitt-domene.no
└─ TTL:   3600

3. Vent 24 timer på DNS propagering
4. Test med mail-tester.com
```

---

## 🔄 STEG 8: OPPDATER SOCIAL MEDIA LINKS

Hvis du har sosiale medier, oppdater profiler:

```bash
# Facebook:
→ facebook.com/settings → Website → mitt-domene.no

# Instagram:
→ instagram.com/settings → Edit Profile → Website → mitt-domene.no

# LinkedIn:
→ linkedin.com/company → Settings → Website → mitt-domene.no

# Google My Business:
→ business.google.com → Info → Website → mitt-domene.no
```

---

## 📊 STEG 9: SETT OPP ANALYTICS (VALGFRITT)

### **9.1 Google Analytics:**

```bash
# 1. Gå til: analytics.google.com
# 2. Opprett ny property for: mitt-domene.no
# 3. Kopier Tracking ID: G-XXXXXXXXXX

# 4. Legg til i Vercel Environment Variables:
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# 5. Redeploy
```

---

### **9.2 Plausible Analytics (Privacy-friendly):**

```bash
# 1. Gå til: plausible.io
# 2. Legg til site: mitt-domene.no
# 3. Kopier script snippet
# 4. Legg til i /index.html <head>
# 5. Deploy
```

---

## 🎉 FERDIG!

**Appen er nå live på ditt eget domene!**

```bash
✅ Custom domain: https://mitt-domene.no
✅ SSL aktivert (HTTPS)
✅ E-post: noreply@mitt-domene.no
✅ Automatisk redirects (www → apex)
✅ Auto-renewal av SSL
```

---

## 📞 SUPPORT

**Trenger du hjelp?**

- **Vercel Support:** vercel.com/support
- **DNS Problemer:** Kontakt din domene-leverandør
- **E-post Problemer:** resend.com/support
- **App-problemer:** support@mitt-domene.no

---

## 📚 NYTTIGE LENKER

- **Vercel Domains Docs:** vercel.com/docs/concepts/projects/domains
- **DNS Checker:** dnschecker.org
- **SSL Checker:** ssllabs.com/ssltest
- **Email Tester:** mail-tester.com
- **Resend Docs:** resend.com/docs

---

**Lykke til med lanseringen! 🚀**
