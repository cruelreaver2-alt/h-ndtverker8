# ⚡ QUICK START - CUSTOM DOMAIN

## 🎯 5-MINUTTERS OPPSETT

### **1. LEGG TIL DOMENE I VERCEL** (2 min)
```bash
1. vercel.com/dashboard → Velg prosjekt
2. Settings → Domains → Add Domain
3. Skriv: ditt-domene.no
4. Klikk "Add"
```

---

### **2. OPPDATER DNS** (2 min)
```bash
Logg inn hos din domene-leverandør og legg til:

A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

---

### **3. SETT ENVIRONMENT VARIABLE** (1 min)
```bash
Vercel → Settings → Environment Variables

Legg til:
  APP_DOMAIN = ditt-domene.no

Redeploy appen
```

---

### **4. VENT** (15-30 min)
```bash
☕ DNS propagering tar tid...

Sjekk status:
  Vercel → Settings → Domains
  
  🟢 Valid Configuration = FERDIG!
```

---

### **5. TEST**
```bash
✅ https://ditt-domene.no - Skal vise appen
✅ https://www.ditt-domene.no - Skal redirecte
✅ Grønn hengelås 🔒 - SSL aktivt
```

---

## 📧 E-POST SETUP (Valgfritt - 10 min)

### **1. Legg til domene i Resend**
```bash
1. resend.com/domains → Add Domain
2. Skriv: ditt-domene.no
3. Kopier DNS-records
```

### **2. Legg til DNS-records**
```bash
SPF Record:
  Type: TXT
  Name: @
  Value: v=spf1 include:resend.com ~all

DKIM Record:
  Type: TXT
  Name: resend._domainkey
  Value: [Fra Resend]
```

### **3. Vent på verifisering** (5-30 min)
```bash
Resend viser status:
  🟢 Verified = Ferdig!
```

---

## 🆘 VANLIGE FEIL

### **"DNS Not Configured"**
```bash
→ Vent 15-30 minutter til
→ Sjekk at DNS-records er riktige
```

### **SSL Error**
```bash
→ Vent 10 minutter etter DNS er verifisert
→ Vercel installerer SSL automatisk
```

### **E-post fra feil domene**
```bash
→ Sjekk at APP_DOMAIN er satt
→ Redeploy appen
```

---

## ✅ FERDIG!

**Appen er live på:** `https://ditt-domene.no` 🎉

**Les full guide:** `/CUSTOM_DOMAIN_SETUP.md`
