# ⚡ QUICK START - Send første e-post på 30 minutter

**Alt er klart! Følg disse stegene for å sende din første testpilot-invitasjon.**

---

## ⏱️ STEG 1: Sett opp e-post (10 min)

### **Opprett e-postadresse:**

1. **Logg inn** hos domeneleverandør (Domeneshop, One.com, etc.)
2. **Gå til:** Domene → handtverkeren.no → E-post
3. **Opprett:** `kundeservice@handtverkeren.no`
4. **Passord:** [Velg et sterkt passord]
5. **Noter:** Server-info (IMAP/SMTP)

### **Legg til i Outlook:**

1. **Outlook** → Fil → Legg til konto
2. **E-post:** kundeservice@handtverkeren.no
3. **Passord:** [Det du nettopp opprettet]
4. **Avanserte innstillinger** (hvis nødvendig):
   - IMAP: imap.domeneshop.no, port 993
   - SMTP: smtp.domeneshop.no, port 587
5. **Ferdig!**

---

## ⏱️ STEG 2: Personaliser HTML-mal (5 min)

### **Åpne filen:**

1. **Finn:** `/email-templates/testpilot-invitation-outlook.html`
2. **Åpne i:** Notepad, VS Code, eller annen teksteditor
3. **Finn og erstatt** (Ctrl+H):

```
Finn: [FORNAVN]
Erstatt med: Ole (eller mottakerens fornavn)

Finn: [DITT NAVN]
Erstatt med: Kari Nordmann (ditt fulle navn)

Finn: [FIRMANAVN]
Erstatt med: Hansen Rørlegger AS (mottakers firma)

Finn: +47 XXX XX XXX
Erstatt med: +47 123 45 678 (ditt telefonnummer)
```

4. **Lagre filen**

---

## ⏱️ STEG 3: Test e-posten (5 min)

### **Send test til deg selv:**

1. **Åpne** `testpilot-invitation-outlook.html` i **Chrome/Edge**
2. **Trykk** Ctrl+A (velg alt)
3. **Trykk** Ctrl+C (kopier)
4. **Outlook:** Ny e-post
5. **Trykk** Ctrl+V (lim inn)
6. **Til:** din.private@epost.com
7. **Emne:** `TEST: Testpilot-invitasjon`
8. **Send!**

### **Sjekk test-e-posten:**

- [ ] Åpne på **desktop**
- [ ] Åpne på **mobil**
- [ ] Klikk på knappen "Registrer deg som testpilot"
- [ ] Sjekk at den går til: `https://fagfolk6.vercel.app/pilot`
- [ ] Sjekk at kontaktinfo er riktig
- [ ] Alt ser bra ut? ✅ Gå videre!

---

## ⏱️ STEG 4: Send til første mottaker! (10 min)

### **Finn en mottaker:**

**Eksempel:**
- Navn: Ole Hansen
- Firma: Hansen Rørlegger AS
- E-post: ole@hansenror.no
- Telefon: +47 987 65 432

### **Personaliser mal:**

1. **Åpne** `testpilot-invitation-outlook.html` igjen
2. **Erstatt:**
   - `[FORNAVN]` → Ole
   - `[FIRMANAVN]` → Hansen Rørlegger AS
3. **Lagre**

### **Send e-post:**

1. **Åpne HTML** i Chrome/Edge
2. **Kopier** (Ctrl+A → Ctrl+C)
3. **Outlook:** Ny e-post → Lim inn (Ctrl+V)
4. **Til:** ole@hansenror.no
5. **Emne:** `Invitasjon: Bli en av de 20 første testpilotene på Håndtverkeren 🚀`
6. **Send!** 🎉

---

## 🎉 GRATULERER!

**Du har sendt din første testpilot-invitasjon!**

---

## 📞 NESTE STEG (dag 2):

### **Ring Ole i morgen:**

**Script:**
```
"Hei Ole, dette er [Ditt navn] fra Håndtverkeren.

Jeg sendte deg en e-post i går om vårt testpilot-program 
for Hansen Rørlegger AS.

Fikk du med deg den?

[Hvis ja:]
Flott! Har du noen spørsmål om programmet?

[Hvis nei:]
Kort fortalt: Vi bygger en ny plattform for håndverkere 
hvor kunder legger ut jobber og dere sender inn tilbud.

De 20 første testpilotene får:
- Gratis testing
- 40% rabatt i 6 måneder hvis dere blir kunde
- Få de første jobbene før alle andre

Interessert? Jeg kan sende lenken på SMS?

[Hvis interessert:]
Supert! Lenken er: fagfolk6.vercel.app/pilot

Du kan registrere dere der, så tar jeg kontakt 
når alt er klart!

Ha en fin dag!"
```

**→ Dette gir 10x bedre konvertering enn bare e-post!**

---

## 📊 PLAN FOR FØRSTE UKE:

### **Dag 1 (i dag):**
- ✅ Sendt test til deg selv
- ✅ Sendt til første mottaker
- 📋 Send til 4-9 mottakere til (totalt 5-10)

### **Dag 2 (i morgen):**
- 📞 Ring de 5-10 fra i går
- 📧 Send til 5-10 nye mottakere

### **Dag 3:**
- 📞 Ring de nye fra i går
- 📧 Send til 10-20 nye

### **Dag 4:**
- 📧 Send reminder til de som ikke svarte (bruk `oppfolging-reminder.txt`)

### **Dag 7:**
- 📧 Send "siste sjanse" (bruk `siste-sjanse.txt`)

---

## ⚠️ VIKTIG: SPF/DKIM/DMARC

**GJØR DETTE INNEN DAG 2-3!**

**Hvorfor?**
- Uten dette havner 50%+ av e-postene i spam
- Med dette får du 80-95% leveringsrate

**Hvordan?**
1. Les: `SPF-DKIM-OPPSETT.md`
2. Følg instruksjoner (tar 10 min)
3. Test på mxtoolbox.com

**For Domeneshop (enklest):**
```
DNS → Avansert → Legg til TXT-post:

Post 1:
Host: @
Value: v=spf1 include:_spf.domeneshop.no ~all

Post 2:
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:kundeservice@handtverkeren.no
```

**Vent 24 timer før masseutsendelse!**

---

## 💡 PRO-TIPS:

### **1. Personaliser mer:**
I stedet for:
> "Hei Ole, jeg vil invitere Hansen Rørlegger AS..."

Prøv:
> "Hei Ole, jeg la merke til at Hansen Rørlegger AS gjorde 
> et flott arbeid med [konkret prosjekt]. Jeg vil gjerne 
> invitere dere..."

**→ Mye høyere svarprosent!**

---

### **2. Send på riktig tid:**
- ✅ Tirsdag-Torsdag, kl 08:00-10:00
- ✅ Tirsdag-Torsdag, kl 13:00-14:00
- ❌ Mandager (for travelt)
- ❌ Fredager (helgefokus)
- ❌ Kvelder/helger

---

### **3. Kombiner kanaler:**
**For hver mottaker:**
1. Send e-post (dag 1)
2. Send LinkedIn-melding (dag 1-2) - bruk `linkedin-melding.txt`
3. Ring (dag 2-3)

**= 15-20% konvertering i stedet for 5-8%!**

---

### **4. Ikke send for mange samtidig:**
**Start smått:**
- Dag 1: 5-10 e-poster
- Dag 2-3: 10-20 e-poster
- Dag 4+: 20-30 e-poster/dag

**Hvorfor?**
- Varmer opp domenet
- Unngår spam-filter
- Tid til å følge opp hver enkelt

---

### **5. Dokumenter alt:**
**Lag et Excel-ark:**

| Navn | Firma | E-post | Sendt dato | Ringt | Status |
|------|-------|--------|------------|-------|--------|
| Ole Hansen | Hansen Rørlegger AS | ole@hansenror.no | 11.03.2026 | Ja | Venter svar |
| Kari Nilsen | Nilsen Elektro | kari@nilsenelektro.no | 11.03.2026 | Nei | - |

**Holder oversikt + letter oppfølging!**

---

## ✅ SJEKKLISTE:

**Oppsett:**
- [ ] `kundeservice@handtverkeren.no` opprettet
- [ ] Lagt til i Outlook
- [ ] Testet at sending funker

**Mal:**
- [ ] HTML-mal personalisert
- [ ] Sendt test til meg selv
- [ ] Sjekket på mobil og desktop
- [ ] Knappen går til riktig side

**Første utsendelse:**
- [ ] Sendt til første 5-10 mottakere
- [ ] Dokumentert i Excel
- [ ] Planlagt oppfølging (ring i morgen)

**Neste steg:**
- [ ] SPF/DKIM/DMARC innen dag 2-3
- [ ] Ring mottakere dag 2-3
- [ ] Send til 10-20 nye dag 2-3

---

## 🎯 MÅL:

**Med 100 kontakter:**
- 40 åpner (40%)
- 12 klikker (30%)
- 6-8 registrerer (50-67%)

**Med telefon-oppfølging:**
- **15-20 registrerer (15-20%)**

**→ Trenger ~100-150 kontakter for 20 testpilotene**

---

## 🆘 HJELP?

**Les:**
- `OPPDATERT-INFO.md` - Oversikt over alle endringer
- `OUTLOOK-GUIDE.md` - Detaljert Outlook-guide
- `SPF-DKIM-OPPSETT.md` - Anti-spam konfigurasjon
- `FILER-OVERSIKT.md` - Oversikt over alle filer

**Spørsmål?**
Bare si ifra! 😊

---

**Du har alt du trenger - nå er det bare å sende! 🚀**

*Lykke til med kampanjen!* 💪
