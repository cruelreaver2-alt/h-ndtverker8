# 🔒 SPF, DKIM og DMARC Oppsett for handtverkeren.no

**Hvorfor er dette viktig?**
- ✅ Unngå at e-poster havner i spam
- ✅ Bevise at du eier domenet
- ✅ Beskytte mot phishing/spoofing
- ✅ Bedre leveringsrate (80-95% vs 40-60%)

**Hva er det?**
- **SPF:** Lister opp hvilke servere som kan sende e-post på vegne av ditt domene
- **DKIM:** Digital signatur som beviser at e-posten kommer fra deg
- **DMARC:** Instruksjoner til mottakere om hva de skal gjøre hvis SPF/DKIM feiler

---

## 📋 Domeneshop (mest vanlig i Norge)

### **STEG 1: Logg inn**
1. Gå til: domeneshop.no
2. Logg inn
3. Velg domenet: **handtverkeren.no**

---

### **STEG 2: Sett opp SPF**

1. **Gå til:** DNS → Avansert
2. **Legg til ny post:**
   - **Type:** TXT
   - **Host:** @ (eller tomt felt)
   - **Verdi:** `v=spf1 include:_spf.domeneshop.no ~all`
   - **TTL:** 3600

3. **Klikk:** Lagre

**Hva betyr dette?**
- `v=spf1` = SPF versjon 1
- `include:_spf.domeneshop.no` = Tillat Domeneshop sine servere
- `~all` = Soft fail (merk suspekte e-poster, men ikke avvis)

---

### **STEG 3: Sett opp DKIM**

**Domeneshop setter opp DKIM automatisk!** ✅

1. **Sjekk at det er aktivert:**
   - DNS → Avansert
   - Se etter post: `default._domainkey`
2. **Hvis ikke:**
   - Kontakt Domeneshop support
   - De aktiverer det for deg

---

### **STEG 4: Sett opp DMARC**

1. **Gå til:** DNS → Avansert
2. **Legg til ny post:**
   - **Type:** TXT
   - **Host:** `_dmarc`
   - **Verdi:** `v=DMARC1; p=none; rua=mailto:pilot@handtverkeren.no; pct=100`
   - **TTL:** 3600

3. **Klikk:** Lagre

**Hva betyr dette?**
- `v=DMARC1` = DMARC versjon 1
- `p=none` = Ikke avvis e-poster (kun overvåk foreløpig)
- `rua=mailto:pilot@handtverkeren.no` = Send rapporter hit
- `pct=100` = Sjekk 100% av e-postene

**Senere (etter 30 dager):**
- Endre `p=none` til `p=quarantine` (spam-mappe)
- Eller `p=reject` (avvis helt) når du er sikker

---

## 📋 One.com

### **SPF:**
1. **Logg inn** på one.com
2. **Kontrollpanel** → **E-post** → **DNS-innstillinger**
3. **Legg til TXT-post:**
   - **Host:** @
   - **Verdi:** `v=spf1 include:spf.one.com ~all`

### **DKIM:**
- One.com aktiverer DKIM automatisk
- Ingen handling nødvendig

### **DMARC:**
1. **DNS-innstillinger**
2. **Legg til TXT-post:**
   - **Host:** `_dmarc`
   - **Verdi:** `v=DMARC1; p=none; rua=mailto:pilot@handtverkeren.no`

---

## 📋 Google Workspace

### **SPF:**
1. **Admin console** → **Domener**
2. **Legg til TXT-post:**
   - **Host:** @
   - **Verdi:** `v=spf1 include:_spf.google.com ~all`

### **DKIM:**
1. **Admin console** → **Apps** → **Google Workspace** → **Gmail** → **Autentiser e-post**
2. **Generer ny post**
3. **Kopier DNS-verdien**
4. **Legg til i DNS:**
   - **Type:** TXT
   - **Host:** `google._domainkey`
   - **Verdi:** (verdien fra Google)

### **DMARC:**
- Samme som over

---

## 📋 Microsoft 365

### **SPF:**
1. **Admin center** → **Innstillinger** → **Domener**
2. **Legg til TXT-post:**
   - **Host:** @
   - **Verdi:** `v=spf1 include:spf.protection.outlook.com ~all`

### **DKIM:**
1. **Admin center** → **Exchange** → **DKIM**
2. **Aktiver DKIM** for handtverkeren.no
3. **Kopier de to CNAME-postene**
4. **Legg til i DNS**

### **DMARC:**
- Samme som over

---

## ✅ Test at alt fungerer

### **1. Test SPF:**
- Gå til: mxtoolbox.com/spf.aspx
- Skriv inn: `handtverkeren.no`
- Klikk: "SPF Record Lookup"
- **Resultat:** Grønt hake ✅

### **2. Test DKIM:**
- Send en test-e-post til: check-auth@verifier.port25.com
- Du får svar med DKIM-status
- **Resultat:** "DKIM check: pass" ✅

### **3. Test DMARC:**
- Gå til: mxtoolbox.com/dmarc.aspx
- Skriv inn: `handtverkeren.no`
- Klikk: "DMARC Lookup"
- **Resultat:** Grønt hake ✅

### **4. Send test-e-post:**
1. Send fra: `pilot@handtverkeren.no`
2. Send til: Din private Gmail
3. **Åpne e-posten i Gmail**
4. **Klikk:** ... (tre prikker) → "Vis opprinnelig"
5. **Sjekk:**
   - `SPF: PASS` ✅
   - `DKIM: PASS` ✅
   - `DMARC: PASS` ✅

---

## 🚨 Vanlige problemer

### **Problem: SPF-post finnes ikke**
**Løsning:**
- DNS-endringer tar 1-24 timer
- Vent og test igjen
- Sjekk at du har skrevet riktig (ingen mellomrom)

### **Problem: "Too many DNS lookups"**
**Løsning:**
- SPF har maks 10 DNS-oppslag
- Hvis du bruker flere e-posttjenester, kombiner:
  ```
  v=spf1 include:_spf.domeneshop.no include:_spf.google.com ~all
  ```

### **Problem: DMARC-rapporter er vanskelige å lese**
**Løsning:**
- Bruk gratis verktøy:
  - dmarcian.com (gratis plan)
  - postmarkapp.com/dmarc (gratis)
- De konverterer rapporter til lesbart format

### **Problem: E-poster havner fortsatt i spam**
**Løsning:**
1. **Sjekk at SPF/DKIM/DMARC er riktig** (se tester over)
2. **Varm opp domenet:**
   - Send til folk du kjenner først (dag 1-3)
   - Gradvis øk antall (10 → 20 → 50)
   - Ikke send 100+ første dagen
3. **Unngå spam-ord:**
   - "GRATIS!!!", "KLIKK NÅ", etc.
4. **Be mottakere:**
   - Markere som "Ikke spam"
   - Legge deg til i kontakter

---

## 📊 Anbefalt oppsett for handtverkeren.no

### **DNS-poster du bør ha:**

```
# SPF (Domeneshop)
Type: TXT
Host: @
Value: v=spf1 include:_spf.domeneshop.no ~all

# DMARC
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:pilot@handtverkeren.no; pct=100

# DKIM (settes opp automatisk av Domeneshop)
# Ingen handling nødvendig
```

---

## 🎯 Tidsplan for oppsett

### **Uke 1: Overvåk**
- `p=none` i DMARC
- Motta rapporter
- Se om alt fungerer

### **Uke 2-4: Fortsatt overvåk**
- Sjekk DMARC-rapporter
- Se om noen e-poster feiler SPF/DKIM
- Fiks eventuelle problemer

### **Uke 5+: Strengere regler**
- Endre til `p=quarantine` (e-poster som feiler → spam)
- Eller `p=reject` (e-poster som feiler → avvist)

**Anbefalt DMARC etter 30 dager:**
```
v=DMARC1; p=quarantine; rua=mailto:pilot@handtverkeren.no; pct=100; adkim=r; aspf=r
```

---

## 💡 Ekstra tips

### **1. Reverse DNS (PTR):**
- Kontakt Domeneshop/leverandør
- Be dem sette opp PTR-post
- Ekstra legitimitet

### **2. BIMI (Brand Indicators for Message Identification):**
- Vis logo i innboks (Gmail, Yahoo, Apple Mail)
- Krever DMARC p=quarantine/reject
- Krever SVG-logo på HTTPS
- Mer avansert - gjør dette senere

### **3. MTA-STS:**
- Ekstra sikkerhet for e-post-transport
- Krever HTTPS og DNS-post
- Gjør dette senere hvis nødvendig

---

## ✅ Sjekkliste

**Før du sender første e-postkampanje:**

- [ ] SPF er satt opp
- [ ] DKIM er aktivert
- [ ] DMARC er satt opp
- [ ] Testet SPF på mxtoolbox.com
- [ ] Testet DKIM (send til check-auth@verifier.port25.com)
- [ ] Testet DMARC på mxtoolbox.com
- [ ] Sendt test-e-post til Gmail og sjekket header
- [ ] Alt viser "PASS" ✅
- [ ] Ventet 24 timer etter DNS-endringer

---

## 🆘 Trenger hjelp?

### **Domeneshop support:**
- Telefon: 73 55 29 29
- E-post: support@domeneshop.no
- Chat: domeneshop.no (bunntekst)

### **Gratis verktøy:**
- **MXToolbox:** mxtoolbox.com (test alt)
- **DMARC Analyzer:** dmarcian.com
- **Mail Tester:** mail-tester.com (sender en total score 0-10)

### **Mail Tester - Komplett test:**
1. Gå til: mail-tester.com
2. Kopier e-postadressen de viser
3. Send en test-e-post fra `pilot@handtverkeren.no`
4. Gå tilbake til mail-tester.com
5. Klikk: "Then check your score"
6. **Mål:** 9-10/10 poeng

---

**Oppsett tar ca 30 minutter, men øker e-post leveringsrate med 30-50%!** 🚀

**Spørsmål? Bare si ifra!** 😊
