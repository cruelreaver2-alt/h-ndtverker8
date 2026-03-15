# 📁 Komplett oversikt over alle filer

## 🎯 START HER

| Fil | Beskrivelse | Prioritet |
|-----|-------------|-----------|
| **`START-HER-OUTLOOK.md`** | 🌟 **Les først!** 45-minutters guide fra oppsett til første utsendelse | ⭐⭐⭐ |

---

## 📧 E-POSTMALER

### **HTML-maler (hovedmaler):**

| Fil | Beskrivelse | Når brukes |
|-----|-------------|------------|
| **`testpilot-invitation-outlook.html`** | ⭐ **Outlook-optimalisert** HTML-mal<br>✅ Best for Outlook Desktop/Web<br>✅ Responsive design<br>✅ Håndtverkeren sine farger | **Dag 1** - Første invitasjon |
| **`testpilot-invitation.html`** | Original HTML-mal<br>✅ Fungerer i alle e-postklienter<br>✅ Kan brukes som backup | Dag 1 (alternativ) |

### **Tekst-maler (backup og oppfølging):**

| Fil | Beskrivelse | Når brukes |
|-----|-------------|------------|
| **`testpilot-invitation-text.txt`** | Ren tekstversjon av invitasjonen<br>✅ Ingen HTML<br>✅ Raskere å sende<br>✅ Fungerer overalt | Dag 1 (hvis HTML ikke funker) |
| **`oppfolging-reminder.txt`** | Vennlig påminnelse<br>✅ Kort og konsist<br>✅ Ikke-påtrengende | **Dag 3-4** - Reminder til de som ikke svarte |
| **`siste-sjanse.txt`** | "Siste sjanse" melding<br>✅ Skaper urgency<br>✅ "Kun X plasser igjen" | **Dag 7** - Siste forsøk |

---

## ✍️ SIGNATURER

| Fil | Beskrivelse | Når brukes |
|-----|-------------|------------|
| **`outlook-signatur.txt`** | ⭐ Outlook-signatur<br>✅ Tekst + formatering-instruksjoner<br>✅ Profesjonell | Sett opp én gang - bruk i alle e-poster |
| **`gmail-signatur.html`** | Gmail HTML-signatur<br>✅ Backup hvis du bruker Gmail | Hvis du bruker Gmail |

---

## 📞 ANDRE KANALER

| Fil | Beskrivelse | Når brukes |
|-----|-------------|------------|
| **`linkedin-melding.txt`** | 4 LinkedIn-varianter<br>✅ Connection requests<br>✅ Direct messages<br>✅ Oppfølging | Parallelt med e-post |

---

## 📊 KONTAKTER

| Fil | Beskrivelse | Når brukes |
|-----|-------------|------------|
| **`kontakter-mal.csv`** | Excel/CSV-mal for kontakter<br>✅ Klar for Mail Merge<br>✅ Klar for Mailchimp/Brevo | Før første utsendelse |

---

## 📖 GUIDER OG DOKUMENTASJON

### **Oppsett og konfigurasjon:**

| Fil | Beskrivelse | Prioritet |
|-----|-------------|-----------|
| **`OUTLOOK-GUIDE.md`** | ⭐ Komplett Outlook-guide<br>✅ E-post oppsett<br>✅ Signatur<br>✅ Sende HTML-maler<br>✅ Mail Merge | ⭐⭐⭐ Les før utsendelse |
| **`SPF-DKIM-OPPSETT.md`** | ⭐ Anti-spam konfigurasjon<br>✅ SPF setup<br>✅ DKIM setup<br>✅ DMARC setup<br>⚠️ **KRITISK for leveringsrate!** | ⭐⭐⭐ Gjør dette først! |

### **Bruk og strategi:**

| Fil | Beskrivelse | Prioritet |
|-----|-------------|-----------|
| **`BRUKSANVISNING.md`** | Komplett bruksanvisning<br>✅ Gmail, Outlook, Mailchimp<br>✅ Steg-for-steg<br>✅ Tips og triks<br>✅ Feilsøking | ⭐⭐ Referanse |
| **`README.md`** | Oversikt over hele pakken<br>✅ Kampanjestrategi<br>✅ Verktøy<br>✅ Forventet resultat | ⭐⭐ Referanse |

### **Denne filen:**

| Fil | Beskrivelse | Prioritet |
|-----|-------------|-----------|
| **`FILER-OVERSIKT.md`** | Denne filen!<br>✅ Oversikt over alle filer | ⭐ Orientering |

---

## 🗂️ MAPPESTRUKTUR

```
/email-templates/
│
├── 🌟 START-HER-OUTLOOK.md          ← **LES FØRST!**
│
├── 📧 E-POSTMALER
│   ├── testpilot-invitation-outlook.html    ⭐ Outlook-optimalisert
│   ├── testpilot-invitation.html
│   ├── testpilot-invitation-text.txt
│   ├── oppfolging-reminder.txt
│   └── siste-sjanse.txt
│
├── ✍️ SIGNATURER
│   ├── outlook-signatur.txt         ⭐ Bruk denne
│   └── gmail-signatur.html
│
├── 📞 ANDRE KANALER
│   └── linkedin-melding.txt
│
├── 📊 KONTAKTER
│   └── kontakter-mal.csv
│
└── 📖 GUIDER
    ├── OUTLOOK-GUIDE.md              ⭐ Viktig
    ├── SPF-DKIM-OPPSETT.md           ⭐ Kritisk
    ├── BRUKSANVISNING.md
    ├── README.md
    └── FILER-OVERSIKT.md             ← Du er her
```

---

## 🚀 RASK OPPSTARTSGUIDE

### **Trinn 1-5 (45 min):**

1. **Les** `START-HER-OUTLOOK.md` (10 min)
2. **Sett opp** e-post på handtverkeren.no (10 min)
3. **Konfigurer** SPF/DKIM/DMARC - `SPF-DKIM-OPPSETT.md` (10 min)
4. **Test** HTML-mal - `testpilot-invitation-outlook.html` (10 min)
5. **Lag** kontaktliste - `kontakter-mal.csv` (5 min)

### **Dag 1 - Første utsendelse:**

1. **Personaliser** `testpilot-invitation-outlook.html`
2. **Send** til første 10 kontakter (manuelt i Outlook)
3. **Dokumenter** i Excel hvem du sendte til

### **Dag 2-3 - Oppfølging:**

1. **Ring** de 10 første (24-48 timer etter e-post)
2. **Send** til neste 10-20 kontakter
3. **Send reminder** til de som ikke svarte - `oppfolging-reminder.txt`

### **Dag 7 - Siste sjanse:**

1. **Send** `siste-sjanse.txt` til de som ikke svarte
2. **Oppdater** "[X] plasser igjen" i malen

---

## ✅ HVILKE FILER SKAL JEG BRUKE?

### **Har Outlook + handtverkeren.no domene:**
✅ **Bruk:**
- `testpilot-invitation-outlook.html` (hovedmal)
- `outlook-signatur.txt` (signatur)
- `OUTLOOK-GUIDE.md` (oppsett)
- `SPF-DKIM-OPPSETT.md` (viktig!)

❌ **Ikke bruk:**
- `gmail-signatur.html` (bare for Gmail)

---

### **Sender til 1-20 personer:**
✅ **Bruk:**
- Manuell sending i Outlook
- Personaliser hver e-post
- Ring etter 24-48 timer

❌ **Ikke bruk:**
- Mail Merge (for få mottakere)
- Mailchimp (overkill)

---

### **Sender til 20+ personer:**
✅ **Bruk:**
- Mail Merge i Outlook
- Eller Mailchimp Free
- `kontakter-mal.csv` for data

❌ **Ikke bruk:**
- Manuell copy/paste (for tidkrevende)

---

### **Trenger oppfølging:**
✅ **Bruk:**
- Dag 3-4: `oppfolging-reminder.txt`
- Dag 7: `siste-sjanse.txt`
- Telefon (best resultat!)

---

### **Vil bruke LinkedIn også:**
✅ **Bruk:**
- `linkedin-melding.txt` (4 varianter)
- Send parallelt med e-post
- Koble til først, deretter send melding

---

## 📊 ANBEFALTE KOMBINASJONER

### **🥇 BESTE KOMBINASJON (høyest konvertering):**

1. **E-post** (`testpilot-invitation-outlook.html`)
2. **+ Telefon** (24-48 timer etter)
3. **+ LinkedIn** (`linkedin-melding.txt`)
4. **= 15-20% konvertering** 🎉

---

### **🥈 GOD KOMBINASJON (medium innsats):**

1. **E-post** (`testpilot-invitation-outlook.html`)
2. **+ Reminder** (`oppfolging-reminder.txt` dag 3-4)
3. **+ Siste sjanse** (`siste-sjanse.txt` dag 7)
4. **= 8-12% konvertering**

---

### **🥉 MINIMUMS-KOMBINASJON (lavest innsats):**

1. **E-post** (`testpilot-invitation-outlook.html`)
2. **+ LinkedIn** (`linkedin-melding.txt`)
3. **= 5-8% konvertering**

---

## 🎯 BESLUTNINGSTRÆR

### **"Hvilken HTML-mal skal jeg bruke?"**

```
Bruker du Outlook?
├─ JA → testpilot-invitation-outlook.html ✅
└─ NEI
   ├─ Gmail → testpilot-invitation.html
   └─ Annet → testpilot-invitation.html
```

---

### **"Hvordan skal jeg sende?"**

```
Hvor mange mottakere?
├─ 1-20 → Manuelt i Outlook ✅
├─ 20-100 → Mail Merge i Outlook ✅
└─ 100+ → Mailchimp/Brevo ✅
```

---

### **"Trenger jeg SPF/DKIM/DMARC?"**

```
JA! ALLTID! ✅
├─ Uten: 40-60% havner i spam ❌
└─ Med: 80-95% når innboksen ✅
```

---

## 💡 PRO-TIPS

### **For raskere oppsett:**
1. Start med `START-HER-OUTLOOK.md`
2. Følg steg-for-steg
3. Ikke hopp over SPF/DKIM/DMARC!
4. Test alltid før masseutsendelse

### **For bedre konvertering:**
1. Personaliser alt (fornavn, firma)
2. Ring etter e-post (10x bedre!)
3. Bruk LinkedIn parallelt
4. Vær tilgjengelig for spørsmål

### **For å unngå problemer:**
1. Test HTML-mal på deg selv først
2. Sjekk på mobil OG desktop
3. Start med 10-20 e-poster/dag
4. Varm opp domenet gradvis

---

## 🆘 FEILSØKING

### **"Jeg vet ikke hvor jeg skal starte"**
→ Les `START-HER-OUTLOOK.md` (15 min)

### **"E-postene havner i spam"**
→ Les `SPF-DKIM-OPPSETT.md` (kritisk!)

### **"HTML-malen ser rart ut i Outlook"**
→ Bruk `testpilot-invitation-outlook.html` (Outlook-optimalisert)

### **"Jeg får ingen svar"**
→ Ring dem! 10x bedre enn bare e-post

### **"Jeg har for få kontakter"**
→ Gulesider.no, Proff.no, LinkedIn

---

## 📞 HJELP OG SUPPORT

**Spørsmål?**
- Les først: `README.md` eller `BRUKSANVISNING.md`
- Fortsatt usikker? Bare si ifra! 😊

**Tekniske problemer?**
- Outlook: `OUTLOOK-GUIDE.md` → "Vanlige problemer"
- DNS/Spam: `SPF-DKIM-OPPSETT.md` → "Vanlige problemer"

---

## 🎉 KLAR TIL Å STARTE!

**Din sjekkliste:**
- [ ] Lest `START-HER-OUTLOOK.md`
- [ ] Satt opp `pilot@handtverkeren.no`
- [ ] Konfigurert SPF/DKIM/DMARC
- [ ] Testet HTML-mal
- [ ] Har 20-100 kontakter
- [ ] Klar til å sende!

---

**Lykke til med kampanjen! 🚀**

*Du har alt du trenger i denne mappen - bruk det!* 💪

---

*Oversikt over alle filer - Mars 2026* 🔨
