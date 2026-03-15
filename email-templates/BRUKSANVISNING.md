# 📧 Bruksanvisning: Testpilot Invitasjonsmail

## 📁 Filer du har fått:
- `testpilot-invitation.html` - Profesjonell HTML e-postmal

---

## ✏️ STEG 1: Personaliser malen

Åpne `testpilot-invitation.html` i en teksteditor (Notepad, VS Code, etc.) og erstatt følgende:

### Finn og erstatt disse:
```
[FORNAVN] → Mottakerens fornavn (f.eks. "Ole")
[DITT NAVN] → Ditt navn (f.eks. "Kristian Andersen")
[FIRMANAVN] → Mottakerens firma (f.eks. "Hansen Rørlegger AS")
[DIN@EPOST.COM] → Din e-postadresse
+47 XXX XX XXX → Ditt telefonnummer
```

**Tips:** Bruk "Finn og erstatt" (Ctrl+H) i teksteditoren!

---

## 📧 STEG 2: Send e-posten

### **Metode A: Gmail (Anbefalt for enkeltmeldinger)**

1. **Åpne Gmail** → Klikk "Skriv"
2. **Åpne HTML-filen** i Chrome/Edge → Trykk `Ctrl+A` (velg alt) → `Ctrl+C` (kopier)
3. **I Gmail-vinduet:**
   - Trykk `Ctrl+Shift+V` (lim inn uten formatering) ELLER
   - Høyreklikk → "Lim inn"
4. **Fyll ut:**
   - Til: Mottakerens e-post
   - Emne: `Invitasjon: Bli en av de 20 første testpilotene på Håndtverkeren 🚀`
5. **Send!**

**⚠️ Viktig for Gmail:**
- Test først ved å sende til deg selv
- Sjekk at alt ser bra ut på mobil og desktop
- Hvis noe ser rart ut, bruk Metode B nedenfor

---

### **Metode B: Mailchimp (Anbefalt for flere mottakere)**

1. **Opprett gratis Mailchimp-konto** på mailchimp.com
2. **Lag ny kampanje:**
   - Campaigns → Create Campaign → Email
   - Velg "Regular Campaign"
3. **Design e-post:**
   - Velg "Code your own" template
   - Klikk "<> Code Editor"
   - Lim inn hele HTML-koden fra `testpilot-invitation.html`
4. **Legg til sammenslåingsfelter (Merge Tags):**
   - Erstatt `[FORNAVN]` med `*|FNAME|*`
   - Erstatt `[FIRMANAVN]` med `*|COMPANY|*`
5. **Last opp kontaktliste:**
   - Audience → Import contacts
   - Lag en CSV med: Email, First Name, Company
6. **Test og send:**
   - Send test til deg selv først
   - Deretter send til alle

**Gratis plan:**
- Opptil 500 kontakter
- 1 000 e-poster/måned
- Perfekt for testpilot-kampanjen din!

---

### **Metode C: Outlook Desktop**

1. **Åpn HTML-filen** i Chrome/Edge
2. **Velg alt** (`Ctrl+A`) og **kopier** (`Ctrl+C`)
3. **Outlook:** Ny e-post
4. **Lim inn** (`Ctrl+V`)
5. **Fyll ut** emne og mottaker
6. **Send**

---

### **Metode D: Brevo (tidligere Sendinblue)**

1. **Opprett gratis konto** på brevo.com
2. **Campaigns → Create Campaign → Email Campaign**
3. **Drag & Drop editor → Paste HTML:**
   - Dra inn en "Code" blokk
   - Lim inn HTML-koden
4. **Personaliser med variabler:**
   - `{{ contact.FIRSTNAME }}` for fornavn
   - `{{ contact.COMPANY }}` for firma
5. **Last opp kontakter og send**

**Gratis plan:**
- 300 e-poster/dag
- Ubegrenset kontakter
- God for Norge/norsk språk

---

## 🎯 STEG 3: Personalisering for masseutsendelse

Hvis du sender til mange, lag en **CSV-fil** med data:

**Eksempel: kontakter.csv**
```csv
Email,FirstName,Company
ole.hansen@example.com,Ole,Hansen Rørlegger AS
kari.nilsen@example.com,Kari,Nilsen Elektro
erik.larsen@example.com,Erik,Larsen Tømrer
```

Deretter bruk Mailchimp/Brevo for å automatisk erstatte:
- `[FORNAVN]` → Ole, Kari, Erik...
- `[FIRMANAVN]` → Hansen Rørlegger AS, Nilsen Elektro...

---

## ✅ STEG 4: Test før utsendelse

**Send TEST-mail til deg selv først!**

Sjekk:
- [ ] Ser den bra ut på **mobil**?
- [ ] Ser den bra ut på **desktop**?
- [ ] Fungerer **knappen** "Registrer deg som testpilot"?
- [ ] Er **alle [PLASSHOLDERE]** erstattet?
- [ ] Virker alle **lenker**?
- [ ] Er **kontaktinfo** riktig?

**Test i flere e-postklienter:**
- Gmail (viktigst - flest brukere)
- Outlook
- Apple Mail
- Mobil (iPhone/Android)

---

## 📊 STEG 5: Spor resultater

### **Hvis du bruker Mailchimp/Brevo:**
- Se åpningsrate
- Se klikk-rate på knappen
- Se hvem som klikket

### **Hvis du bruker Gmail:**
Lag en **bit.ly-lenke** for å spore klikk:
1. Gå til bit.ly
2. Forkorte: `https://handtverkeren.no/pilot` → `https://bit.ly/handtverkeren-pilot`
3. Erstatt lenken i HTML-malen
4. Se statistikk på bit.ly

---

## 🎨 Tilpasning av design

### **Endre farger:**
- **Mørk blå:** `#17384E` → Din farge
- **Varm brun:** `#E07B3E` → Din farge

### **Endre tekst:**
Alle tekster kan endres direkte i HTML-filen.

### **Endre emoji:**
Erstatt emoji med andre (`🚀` → `⚡`, etc.)

---

## 🚨 Vanlige problemer og løsninger

### **Problem:** E-posten ser rart ut i Gmail
**Løsning:** 
- Åpne HTML-filen i Chrome
- Kopier innholdet visuelt (ikke kildekode)
- Lim inn i Gmail

### **Problem:** Knappen fungerer ikke
**Løsning:**
- Sjekk at lenken er riktig: `https://handtverkeren.no/pilot`
- Oppdater URL når domenet er klart

### **Problem:** For stor fil/lastes tregt
**Løsning:**
- Dette er ikke et problem - HTML-en er optimalisert
- Ingen eksterne bilder = rask lasting

### **Problem:** Havner i spam
**Løsning:**
- Ikke send for mange e-poster samtidig fra Gmail (maks 50/dag)
- Bruk Mailchimp/Brevo for masseutsendelse
- Unngå spam-ord som "GRATIS!!!", "KLIKK HER NÅ!"
- Be mottakere legge deg til i kontakter

---

## 📅 Beste praksis for utsendelse

### **Timing:**
- **Best:** Tirsdag-Torsdag, 08:00-10:00 eller 13:00-14:00
- **Unngå:** Mandager (travelt), Fredager (helgefokus), helger

### **Frekvens:**
- **E-post 1** (Dag 0): Første invitasjon
- **E-post 2** (Dag 3-4): Reminder (kun til de som ikke svarte)
- **E-post 3** (Dag 7): Siste sjanse - "5 plasser igjen"

### **Oppfølging:**
- Svar raskt på spørsmål
- Vær personlig i svar
- Ring de som viser interesse

---

## 💡 Tips for høyere svarprosent

1. **Personaliser enda mer:**
   - "Jeg så at dere gjorde [konkret prosjekt]..."
   - "Jeg er imponert over [spesifikk detalj]..."

2. **Legg ved screenshot:**
   - Vis hvordan plattformen ser ut
   - Vis dashboard-eksempel

3. **Tilby demo:**
   - "Vil du ha en 15-minutters demo?"
   - Book møte med Calendly-lenke

4. **Sosial proof:**
   - "5 leverandører har allerede registrert seg"
   - "2 tømrerfirmaer og 1 rørlegger er med"

5. **Svar på spørsmål:**
   - Lag FAQ-dokument
   - Link til /pilot-siden

---

## 📞 Hjelp og support

**Trenger du hjelp?**
- Test ved å sende til deg selv
- Sjekk spam-filter
- Kontakt Mailchimp/Brevo support (gratis)

**Tekniske problemer?**
- Åpne HTML-filen i Chrome og inspiser
- Sjekk at alle <table> tags er lukket
- Valider HTML på validator.w3.org

---

## ✅ Sjekkliste før utsendelse:

- [ ] Personalisert alle [PLASSHOLDERE]
- [ ] Testet e-post til meg selv
- [ ] Sjekket på mobil og desktop  
- [ ] Verifisert at knappen fungerer
- [ ] Kontaktinfo er riktig
- [ ] Emnelinje er engasjerende
- [ ] Timing er optimal (tirsdag-torsdag formiddag)
- [ ] CSV-fil med kontakter er klar (hvis masseutsendelse)
- [ ] Oppfølgingsplan er satt

---

**Lykke til med kampanjen! 🚀**

*Hvis du har spørsmål om e-postmalen, bare si ifra!*
