# 🚀 Start her - Outlook + handtverkeren.no

**Du har:**
- ✅ Domene: handtverkeren.no
- ✅ E-postklient: Microsoft Outlook

**Mål:** Sende profesjonelle testpilot-invitasjoner til 20 håndverkere

---

## 📅 KOMPLETT PLAN (45 minutter oppsett)

### **DEL 1: E-post oppsett (20 min)**

1. **Opprett e-postadresse** ⏱️ 5 min
   - Gå til domeneleverandør (Domeneshop, One.com, etc.)
   - Opprett: `pilot@handtverkeren.no`
   - Skriv ned passord

2. **Legg til i Outlook** ⏱️ 5 min
   - Les: `OUTLOOK-GUIDE.md` → Steg 2
   - Legg til kontoen i Outlook Desktop/Web

3. **Sett opp signatur** ⏱️ 3 min
   - Les: `OUTLOOK-GUIDE.md` → Steg 3
   - Bruk: `outlook-signatur.txt`
   - Personaliser med ditt navn og telefon

4. **Sett opp SPF/DKIM/DMARC** ⏱️ 7 min
   - Les: `SPF-DKIM-OPPSETT.md`
   - **VIKTIG:** Dette hindrer e-poster i å havne i spam!
   - Følg instruksjoner for din domeneleverandør

---

### **DEL 2: Test HTML-mal (10 min)**

5. **Personaliser HTML-mal** ⏱️ 5 min
   - Åpne: `testpilot-invitation-outlook.html`
   - Finn og erstatt (Ctrl+H):
     ```
     [FORNAVN] → Test
     [DITT NAVN] → Ditt navn
     [FIRMANAVN] → Test Firma AS
     [DIN@HANDTVERKEREN.NO] → pilot@handtverkeren.no
     +47 XXX XX XXX → Ditt telefonnummer
     ```
   - Lagre filen

6. **Test i Outlook** ⏱️ 5 min
   - Åpne HTML-filen i Chrome/Edge
   - Trykk Ctrl+A → Ctrl+C (kopier)
   - Outlook: Ny e-post → Ctrl+V (lim inn)
   - **Til:** Din private e-post (Gmail, etc.)
   - **Emne:** `TEST: Testpilot-invitasjon`
   - **Send!**

7. **Sjekk test-e-posten**
   - Åpne på desktop OG mobil
   - Sjekk at alt ser bra ut
   - Klikk på knappen - fungerer den?

---

### **DEL 3: Finn kontakter (15 min)**

8. **Lag kontaktliste** ⏱️ 15 min
   - Åpne: `kontakter-mal.csv` i Excel
   - Finn 20-50 håndverkere:
     - **Gulesider.no** → Søk "rørlegger [by]"
     - **Proff.no** → Firmadatabase
     - **LinkedIn** → Søk etter fagfolk
     - Ditt eget nettverk
   - Fyll inn: E-post, Fornavn, Firma, Telefon
   - Lagre filen

---

## 📧 SEND FØRSTE E-POSTER (dag 1)

### **Metode A: Manuelt (1-20 mottakere)**

**Best for personlig touch!**

1. **Åpne Outlook** → Ny e-post
2. **Lim inn HTML-mal** (fra punkt 6)
3. **Personaliser:**
   - Erstatt `[FORNAVN]` → Mottakerens fornavn
   - Erstatt `[FIRMANAVN]` → Mottakerens firma
4. **Emne:** `Invitasjon: Bli en av de 20 første testpilotene på Håndtverkeren 🚀`
5. **Send!**
6. **Gjenta** for 5-10 kontakter første dagen

**Tips:**
- Start med 5-10 første dagen
- Ring dem dagen etter (MYE bedre konvertering!)
- Øk til 20-30 neste dag

---

### **Metode B: Mail Merge (20+ mottakere)**

**For å sende til mange samtidig:**

1. **Lag Excel-fil** med kontakter (ferdig i punkt 8)
2. **Outlook Desktop:**
   - Verktøy → Send e-post → Send masseutsendelse
   - Velg Excel-filen
   - Lim inn HTML-mal
   - Sett inn felter (`[FORNAVN]` → "FirstName")
3. **Send til alle**

**Viktig:**
- Ikke send 100+ første dagen
- Start med 10-20, øk gradvis
- Varm opp domenet (unngå spam-filter)

---

## 📞 OPPFØLGING (dag 2-3)

### **Ring etter 24-48 timer:**

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

Interessert? Jeg kan sende deg lenken på SMS?

[Hvis interessert:]
Supert! Du kan registrere deg på handtverkeren.no/pilot

Ha en fin dag!
```

**Resultat:** 10x bedre konvertering enn bare e-post! 🚀

---

### **E-post reminder (dag 3-4):**

**For de som ikke svarte:**
1. Bruk: `oppfolging-reminder.txt`
2. Personaliser og send
3. Vennlig påminnelse

---

### **Siste sjanse (dag 7):**

**For de som fortsatt ikke svarte:**
1. Bruk: `siste-sjanse.txt`
2. Oppdater: "[X] plasser igjen"
3. Send som siste forsøk

---

## 📊 FORVENTET RESULTAT

**Med 100 e-poster:**
- **40 åpner** (40%)
- **12 klikker** (30% av de som åpner)
- **6-8 registrerer** (50-67% av de som klikker)

**MED oppfølging (ring + e-post):**
- **15-20 registrerer** (15-20%)

**→ Konklusjon:** Trenger ~100-150 kontakter for å få 20 testpilotene

---

## ✅ SJEKKLISTE - KLAR TIL Å SENDE?

**E-post oppsett:**
- [ ] `pilot@handtverkeren.no` er opprettet
- [ ] Lagt til i Outlook
- [ ] Signatur er satt opp
- [ ] SPF/DKIM/DMARC er konfigurert (viktig!)
- [ ] Ventet 24 timer etter DNS-endringer

**HTML-mal:**
- [ ] `testpilot-invitation-outlook.html` er personalisert
- [ ] Sendt test til meg selv
- [ ] Sjekket på mobil OG desktop
- [ ] Knappen fungerer
- [ ] Lenker virker
- [ ] Ingen formatering-feil

**Kontakter:**
- [ ] Har 20-100 kontakter i `kontakter-mal.csv`
- [ ] Har e-post, fornavn, firma for hver
- [ ] Verifisert e-postadresser (ingen skrivefeil)

**Timing:**
- [ ] Det er tirsdag, onsdag eller torsdag
- [ ] Klokken er 08:00-10:00 eller 13:00-14:00
- [ ] Klar til å svare raskt på spørsmål

---

## 🎯 FØRSTE UKES PLAN

| Dag | Handling | Antall |
|-----|----------|--------|
| **Man** | Oppsett + test | - |
| **Tir** | Send første e-poster | 10 |
| **Ons** | Ring dag 1-kontakter + send til 10 nye | 20 |
| **Tor** | Ring dag 2-kontakter + send til 10 nye | 30 |
| **Fre** | Følg opp svar | - |
| **Lør** | Send reminder til de som ikke svarte | ~15 |
| **Søn** | Pause | - |
| **Uke 2** | Siste sjanse + nye kontakter | 20+ |

---

## 📁 FILER DU TRENGER

### **Start med disse:**
1. ✅ `OUTLOOK-GUIDE.md` - Les først!
2. ✅ `SPF-DKIM-OPPSETT.md` - Viktig for leveringsrate
3. ✅ `testpilot-invitation-outlook.html` - Hovedmal (Outlook-optimalisert)
4. ✅ `outlook-signatur.txt` - Profesjonell signatur
5. ✅ `kontakter-mal.csv` - For kontaktliste

### **Bruk senere:**
- `oppfolging-reminder.txt` - Dag 3-4
- `siste-sjanse.txt` - Dag 7
- `linkedin-melding.txt` - LinkedIn-outreach
- `testpilot-invitation-text.txt` - Ren tekstversjon

### **Referanse:**
- `BRUKSANVISNING.md` - Komplett guide
- `README.md` - Oversikt

---

## 🆘 HJELP OG SUPPORT

### **Vanlige spørsmål:**

**Q: Hvor kjøper jeg domene?**
A: Domeneshop.no (norsk), one.com (billig), eller Google Domains

**Q: Hvor setter jeg opp e-post?**
A: Hos samme leverandør som domenet. Domeneshop har gratis e-post!

**Q: Hva koster det?**
A: Domene: ~150-300 kr/år. E-post: 0-180 kr/mnd (Domeneshop = gratis!)

**Q: Trenger jeg SPF/DKIM/DMARC?**
A: JA! Uten dette havner 50%+ av e-postene i spam.

**Q: Hvor lang tid tar DNS-endringer?**
A: 1-24 timer. Vent 24 timer før du sender første e-poster.

**Q: Kan jeg sende 100 e-poster med en gang?**
A: NEI! Start med 10-20 første dagene. Gradvis øk til 50-100.

**Q: Hva er best tid å sende?**
A: Tirsdag-Torsdag, kl 08:00-10:00 eller 13:00-14:00

**Q: Skal jeg ringe etter e-post?**
A: JA! 10x bedre konvertering. Ring 24-48 timer etter e-post.

**Q: Hvor finner jeg kontakter?**
A: Gulesider.no, Proff.no, LinkedIn, eget nettverk

---

## 💡 SUKSESS-TIPS

### **1. Personaliser alt:**
```
❌ "Hei,"
✅ "Hei Ole,"

❌ "Ditt firma"
✅ "Hansen Rørlegger AS"
```

### **2. Start smått:**
- Dag 1: 5-10 e-poster
- Dag 2: 10-20 e-poster
- Dag 3+: 20-30 e-poster/dag

### **3. Ring, ring, ring!**
- 10x bedre enn bare e-post
- Personlig kontakt bygger tillit
- Rask feedback

### **4. Test, test, test:**
- Send alltid test til deg selv først
- Sjekk på mobil OG desktop
- Klikk på alle lenker

### **5. Vær tilgjengelig:**
- Svar raskt på spørsmål (< 2 timer)
- Ha telefon tilgjengelig
- Vær transparent om oppstartsfase

---

## 🚀 KLAR TIL Å STARTE?

**Neste steg:**
1. Les `OUTLOOK-GUIDE.md`
2. Sett opp e-post
3. Test HTML-mal
4. Send til første 10 kontakter
5. Ring dem i morgen!

---

**Lykke til! Du klarer dette! 💪**

**Spørsmål? Usikker på noe? Bare si ifra!** 😊

---

**Bonus:**
- 📧 LinkedIn-outreach: `linkedin-melding.txt`
- 📱 SMS-mal: (Si ifra hvis du vil ha det!)
- 📞 Telefonscript: (Finnes i oppfølging-seksjonen over)

---

*Laget for Håndtverkeren testpilot-kampanje - Mars 2026* 🔨
