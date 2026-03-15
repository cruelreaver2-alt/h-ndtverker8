# 📧 Outlook Guide - Håndtverkeren E-postkampanje

Komplett guide for å bruke e-postmalene med **Microsoft Outlook** og domenet **handtverkeren.no**.

---

## 🎯 STEG 1: Sett opp e-post på handtverkeren.no

### **Hvor har du kjøpt domenet?**

#### **Alternativ A: Domeneshop**
1. **Logg inn** på domeneshop.no
2. **Gå til:** Domener → handtverkeren.no → E-post
3. **Opprett e-postadresse:**
   - `pilot@handtverkeren.no`
   - `kontakt@handtverkeren.no`
   - `[dittnavn]@handtverkeren.no`
4. **Velg passord**
5. **Koble til Outlook:**
   - IMAP-server: `imap.domeneshop.no`
   - SMTP-server: `smtp.domeneshop.no`
   - Port: 993 (IMAP), 587 (SMTP)

#### **Alternativ B: One.com**
1. **Logg inn** på one.com
2. **E-post & Office** → Opprett e-postadresse
3. **Opprett:** `pilot@handtverkeren.no`
4. **Koble til Outlook:**
   - Bruk deres setup-guide
   - Automatisk konfigurering

#### **Alternativ C: Google Workspace (hvis du har det)**
1. **Admin console** → Brukere → Legg til bruker
2. **E-post:** `pilot@handtverkeren.no`
3. **Koble til Outlook:**
   - IMAP: `imap.gmail.com`
   - SMTP: `smtp.gmail.com`

---

## 📥 STEG 2: Legg til e-postkonto i Outlook

### **Outlook Desktop (Windows/Mac):**

1. **Åpne Outlook**
2. **Fil** → **Legg til konto**
3. **Skriv inn:** `pilot@handtverkeren.no`
4. **Avanserte innstillinger** → **La meg sette opp kontoen min manuelt**
5. **Velg:** IMAP
6. **Fyll ut:**
   - **Innkommende:**
     - Server: `imap.domeneshop.no` (eller din leverandør)
     - Port: 993
     - Kryptering: SSL/TLS
   - **Utgående:**
     - Server: `smtp.domeneshop.no`
     - Port: 587
     - Kryptering: STARTTLS
7. **Skriv inn passord**
8. **Ferdig!**

### **Outlook Web (outlook.com):**

1. **Gå til:** outlook.live.com
2. **Innstillinger** (⚙️) → **Vis alle innstillinger**
3. **E-post** → **Synkroniser e-post**
4. **Andre e-postkontoer** → **Legg til**
5. **Fyll ut** IMAP/SMTP-info som over

---

## ✍️ STEG 3: Sett opp signatur i Outlook

### **Outlook Desktop:**

1. **Fil** → **Alternativer** → **E-post** → **Signaturer**
2. **Ny** → Gi navn: "Håndtverkeren Testpilot"
3. **Kopier teksten fra** `outlook-signatur.txt` (laget nedenfor)
4. **Lim inn** i signatur-editoren
5. **Formater:**
   - Navn: Fet, størrelse 14
   - Tittel: Grå, størrelse 11
   - Håndtverkeren: Blå (#17384E), størrelse 13, fet
6. **Velg standardsignatur:**
   - Nye meldinger: "Håndtverkeren Testpilot"
   - Svar/videresend: "Håndtverkeren Testpilot"
7. **OK**

### **Outlook Web:**

1. **Innstillinger** (⚙️) → **Vis alle innstillinger**
2. **E-post** → **Skriv og svar** → **E-postsignatur**
3. **Lim inn** tekst fra `outlook-signatur.txt`
4. **Formater** med verktøylinjen
5. **Lagre**

---

## 📧 STEG 4: Send HTML-mal i Outlook

### **Metode A: Kopier/lim inn (Enklest)**

1. **Åpne** `testpilot-invitation.html` i **Chrome/Edge**
2. **Trykk** `Ctrl+A` (velg alt) → `Ctrl+C` (kopier)
3. **Outlook:** Ny e-post
4. **Lim inn** (`Ctrl+V`)
5. **Skriv inn:**
   - **Til:** ole.hansen@example.com
   - **Emne:** `Invitasjon: Bli en av de 20 første testpilotene på Håndtverkeren 🚀`
6. **Send test til deg selv først!**

⚠️ **Viktig:** Outlook kan endre formatering litt. Derfor har jeg laget en Outlook-optimalisert versjon nedenfor.

---

### **Metode B: Bruk Outlook-mal (.oft-fil)**

1. **Opprett ny e-post** i Outlook
2. **Lim inn HTML** (Metode A)
3. **Fil** → **Lagre som**
4. **Filtype:** Outlook-mal (*.oft)
5. **Navn:** "Testpilot Invitasjon.oft"
6. **Lagre**

**Bruk malen:**
1. **Fil** → **Ny** → **Velg skjema**
2. **Velg:** "Testpilot Invitasjon.oft"
3. **Personaliser** for hver mottaker
4. **Send**

---

### **Metode C: Masseutsendelse (Mail Merge)**

**For å sende til mange samtidig:**

1. **Opprett Excel-fil** med kontakter:
   ```
   Email              | FirstName | Company
   ole@example.com    | Ole       | Hansen Rørlegger AS
   kari@example.com   | Kari      | Nilsen Elektro
   ```

2. **I Outlook Desktop:**
   - **Verktøy** → **Send e-post** → **Send masseutsendelse**
   - **Velg Excel-fil**
   - **Lim inn HTML-mal**
   - **Sett inn felter:**
     - `[FORNAVN]` → Velg "FirstName" fra Excel
     - `[FIRMANAVN]` → Velg "Company"

3. **Send til alle**

⚠️ **Begrensninger:**
- Outlook.com/Microsoft 365: Max 500 e-poster/dag
- Eget domene: Avhenger av leverandør (vanligvis 200-500/dag)

---

## 🎨 STEG 5: Test e-posten

### **Send test til deg selv:**

1. **Send fra:** `pilot@handtverkeren.no`
2. **Send til:** Din private e-post (Gmail, etc.)
3. **Sjekk:**
   - [ ] Ser bra ut på desktop
   - [ ] Ser bra ut på mobil
   - [ ] Knappen fungerer
   - [ ] Lenker virker
   - [ ] Farger er riktige
   - [ ] Ingen formatering-feil

### **Test i flere klienter:**

Send test til:
- [ ] Gmail (viktigst)
- [ ] Outlook
- [ ] Apple Mail (hvis mulig)
- [ ] Mobil (iOS/Android)

---

## 💡 Outlook-spesifikke tips

### **Formatering:**
- Outlook bruker **Word-rendering**, ikke nettleser
- Noen CSS-egenskaper virker ikke (f.eks. `border-radius`)
- Bruk **tabeller** for layout, ikke div/flexbox
- Test alltid i Outlook først

### **Sporing:**
- Outlook har innebygd **lesebekreftelse**
- **Alternativer** → **Be om lesebekreftelse**
- Men mange blokkerer dette

### **Tidsplanlegging:**
- Skriv e-post nå, send senere
- **Alternativer** → **Forsinket levering**
- Best tid: Tirsdag-Torsdag, 08:00-10:00

### **Kategorier:**
- Merk kontakter med kategorier
- "Testpilot - Sendt"
- "Testpilot - Venter svar"
- "Testpilot - Registrert"

---

## 🚨 Vanlige problemer

### **Problem: E-posten havner i spam**

**Løsning:**
1. **Verifiser domenet:**
   - Sett opp SPF, DKIM, DMARC (spør domeneleverandør)
   - Dette beviser at du eier domenet
2. **Ikke send for mange:**
   - Start med 10-20/dag første dagene
   - Øk gradvis til 50-100/dag
3. **Varm opp domenet:**
   - Send til folk du kjenner først
   - Be dem svare/markere som viktig
4. **Unngå spam-ord:**
   - "GRATIS!!!", "KLIKK NÅ", "GARANTERT"

### **Problem: Formateringen ser rart ut**

**Løsning:**
- Bruk **Outlook-optimalisert versjon** (laget nedenfor)
- Test i Outlook før utsendelse
- Unngå fancy CSS/animasjoner

### **Problem: Kan ikke sende mer enn X e-poster/dag**

**Løsning:**
- **Domeneshop:** Vanligvis 200-500/dag
- **Microsoft 365:** 500/dag
- **Oppgrader** til bedre plan hvis nødvendig
- **Alternativ:** Bruk Mailchimp/Brevo for masseutsendelse

### **Problem: Mottakere ser ikke bilder**

**Løsning:**
- Vår mal bruker **ingen eksterne bilder** ✅
- Kun emoji og HTML-formatering
- Virker overalt, ingen nedlasting nødvendig

---

## 📊 Sporing og oppfølging

### **Opprett oppfølgings-system i Outlook:**

1. **Kategorier:**
   - 🟦 Blå: "Invitasjon sendt"
   - 🟨 Gul: "Åpnet/lest"
   - 🟩 Grønn: "Registrert"
   - 🟥 Rød: "Ikke interessert"

2. **Oppgaver:**
   - Når du sender e-post, opprett oppgave
   - "Følg opp [Navn] - Ring om 48 timer"
   - Sett påminnelse

3. **Notater:**
   - Høyreklikk kontakt → "Legg til notat"
   - Dokumenter samtaler/interesser

---

## ✅ Sjekkliste for første utsendelse

### **Før du sender:**

- [ ] E-postkonto `pilot@handtverkeren.no` er satt opp
- [ ] Signatur er lagt til i Outlook
- [ ] HTML-mal er testet og funker
- [ ] Sendt test-e-post til meg selv
- [ ] Sjekket på mobil og desktop
- [ ] Personalisert mal for første mottaker
- [ ] Dobbeltsjekket kontaktinfo
- [ ] Klokken er mellom 08:00-10:00 eller 13:00-14:00
- [ ] Det er tirsdag, onsdag eller torsdag

### **Etter utsendelse:**

- [ ] Lagt kontakt i kategori "Invitasjon sendt"
- [ ] Opprettet oppfølgings-oppgave (48 timer)
- [ ] Notert dato for utsendelse
- [ ] Klar til å svare raskt på spørsmål

---

## 🎯 Anbefalt arbeidsflyt

### **Dag 1 (Tirsdag/Onsdag):**
1. **08:00-10:00:** Send til første 10 kontakter
2. **Bruk Outlook-mal** for raskere utsendelse
3. **Personaliser** fornavn og firma i hver e-post
4. **Legg til kategori** "Invitasjon sendt"

### **Dag 2 (Onsdag/Torsdag):**
1. **Ring** de 10 første
   - "Hei, jeg sendte deg en e-post i går om..."
   - Mye bedre konvertering!
2. **Send** til neste 10 kontakter

### **Dag 3:**
1. **Følg opp** svar fra første runde
2. **Send** til neste 10

### **Dag 4:**
1. **Send reminder** til de som ikke har svart (bruk `oppfolging-reminder.txt`)

### **Dag 7:**
1. **Send "siste sjanse"** til gjenværende (bruk `siste-sjanse.txt`)

---

## 📞 Tips for oppfølging

### **Telefonsamtale etter e-post:**

**Script:**
```
"Hei [Fornavn], dette er [Ditt navn] fra Håndtverkeren.

Jeg sendte deg en e-post i går om vårt testpilot-program.

Fikk du med deg den?

[Hvis ja:]
Flott! Har du noen spørsmål?

[Hvis nei:]
Kort fortalt: Vi bygger en ny plattform for håndverkere,
og søker 20 testpilotene som får gratis testing + 40% rabatt
i 6 måneder hvis de blir kunde ved lansering.

Kan jeg sende deg lenken på SMS/e-post?

[Hvis interessert:]
Supert! Du kan registrere deg på handtverkeren.no/pilot

Hører fra deg! Ha en fin dag!
```

---

## 🔄 Automatisering (Avansert)

### **Outlook Regler:**

1. **Automatisk kategorisering:**
   - Når svar mottas → Endre kategori til "Venter godkjenning"

2. **Automatisk viderekobling:**
   - Registreringer fra /pilot → Videresend til deg

3. **Ut-av-kontoret:**
   - Hvis du er bortreist → Automatisk svar

### **Microsoft Power Automate:**

Hvis du har Microsoft 365:
1. **Opprett flyt:**
   - Når e-post sendes → Legg til kontakt i Excel
   - Når svar mottas → Send varsel
2. **Spor alt automatisk**

---

## 💰 Kostnader

### **E-post på eget domene:**

- **Domeneshop:** Gratis med domene (opptil 5 adresser)
- **One.com:** ~30 kr/mnd per adresse
- **Google Workspace:** 180 kr/mnd per bruker
- **Microsoft 365:** ~60 kr/mnd per bruker

**Anbefaling:**
- **Start:** Domeneshop gratis e-post ✅
- **Senere:** Oppgrader til Google Workspace/M365

---

## 📧 Hvilken e-postadresse skal du bruke?

**Anbefalinger:**

1. **`pilot@handtverkeren.no`** ⭐ BEST for testpilot-kampanje
2. **`[dittnavn]@handtverkeren.no`** ⭐ Mer personlig
3. **`kontakt@handtverkeren.no`** - For generell kontakt

**Mitt forslag:**
- **Fra:** `[Ditt navn] <pilot@handtverkeren.no>`
- **Eller:** `[Ditt navn] <[dittnavn]@handtverkeren.no>`

Dette gir både **personlig touch** OG **profesjonalitet**.

---

## 🚀 Start NÅ

1. **Sett opp** `pilot@handtverkeren.no`
2. **Legg til** i Outlook
3. **Opprett signatur**
4. **Test HTML-mal**
5. **Send til første 10 kontakter**

---

**Har du spørsmål om Outlook-oppsettet?** 😊

**Trenger hjelp med:**
- SPF/DKIM/DMARC-oppsett?
- Mail merge i Outlook?
- Automatisering med Power Automate?

Bare si ifra! 🚀
