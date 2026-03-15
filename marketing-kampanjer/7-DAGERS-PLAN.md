# 🚀 7-dagers oppstartsplan - Marketing-kampanjer

**Fra null til live kampanjer på én uke!**

Komplett dag-for-dag guide for å sette opp Meta Ads og Google Ads-kampanjene dine.

---

## 📅 OVERSIKT

| Dag | Fokus | Tid | Hva du oppnår |
|-----|-------|-----|---------------|
| **Dag 1** | Forberedelser | 1 time | Kontoer opprettet, guider lest |
| **Dag 2** | Tracking | 1,5 timer | Pixel og konvertering installert |
| **Dag 3** | Design | 2 timer | 4-6 bilder designet |
| **Dag 4** | Meta Ads | 2 timer | Første kampanje live |
| **Dag 5** | Google Ads | 2,5 timer | Søkekampanje live |
| **Dag 6** | Testing | 1 time | Begge kampanjer kjører |
| **Dag 7** | Optimalisering | 1 time | Første justeringer |

**Total tid:** ~11 timer over 7 dager
**Resultat:** Fulle kampanjer live og optimalisert! 🎉

---

## 📆 DAG 1: FORBEREDELSER (1 time)

### **Mål:** Lese guider og opprette kontoer

---

### **08:00-08:30: Les guider (30 min)**

- [ ] Les `README.md` (10 min)
- [ ] Skim `META-ADS-GUIDE.md` (10 min)
- [ ] Skim `GOOGLE-ADS-GUIDE.md` (10 min)

**Hvorfor:** Få oversikt over hva som kommer

---

### **08:30-09:00: Opprett kontoer (30 min)**

**Facebook Business Manager:**
1. Gå til: business.facebook.com
2. Klikk "Opprett konto"
3. Fyll inn bedriftsinformasjon
4. Bekreft e-post
5. Legg til betalingsmetode
   - Kredittkort eller debetkort
   - Adresse og fakturainformasjon

**Google Ads:**
1. Gå til: ads.google.com
2. Klikk "Start nå"
3. Velg "Ekspertmodus" (ikke Smart-kampanje!)
4. Hopp over veiledningsmodus
5. Legg til betalingsmetode
6. Velg NOK (Norske kroner) som valuta

**Sjekkliste:**
- [ ] Facebook Business Manager-konto opprettet ✅
- [ ] Betalingsmetode lagt til Facebook ✅
- [ ] Google Ads-konto opprettet ✅
- [ ] Betalingsmetode lagt til Google ✅

---

### **Bonus (valgfritt - 15 min):**

**Google Analytics:**
1. Gå til: analytics.google.com
2. Opprett konto
3. Sett opp "property" for fagfolk6.vercel.app
4. Installer tracking-kode (eller be utvikler gjøre det)

---

## 📆 DAG 2: TRACKING (1,5 timer)

### **Mål:** Installere Facebook Pixel og Google Ads-konverteringssporing

---

### **10:00-10:45: Facebook Pixel (45 min)**

**Steg 1: Opprett Pixel (10 min)**
1. Facebook Business Manager → Hendelsesbehandler
2. Klikk "Koble til datakilde" → Nett
3. Velg "Facebook Pixel"
4. Gi navn: "Håndtverkeren Pixel"
5. Skriv inn nettside: fagfolk6.vercel.app
6. Klikk "Fortsett"

**Steg 2: Kopier Pixel-kode (5 min)**
1. Velg "Installer kode manuelt"
2. Kopier Pixel-kode (ser slik ut):
   ```html
   <!-- Facebook Pixel Code -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   ...
   </script>
   <!-- End Facebook Pixel Code -->
   ```

**Steg 3: Installer på nettside (30 min)**

**Hvis du har tilgang til koden:**
1. Åpne fagfolk6.vercel.app i kode-editor
2. Finn `<head>`-taggen
3. Lim inn Pixel-kode rett før `</head>`
4. Lagre og deploy

**Hvis du ikke har tilgang:**
1. Send koden til utvikler
2. Be dem installere i `<head>`
3. Vent på bekreftelse

**Steg 4: Test Pixel (10 min)**
1. Installer "Facebook Pixel Helper" Chrome-utvidelse
2. Besøk fagfolk6.vercel.app
3. Sjekk at utvidelsen viser grønn hake ✅
4. Tilbake til Facebook → Test hendelser
5. Besøk /pilot → Sjekk at PageView registreres

**Sjekkliste:**
- [ ] Facebook Pixel opprettet ✅
- [ ] Pixel-kode installert på nettside ✅
- [ ] Pixel testet og fungerer ✅

---

### **10:45-11:30: Google Ads-konvertering (45 min)**

**Steg 1: Opprett konvertering (15 min)**
1. Google Ads → Verktøy og innstillinger → Konverteringer
2. Klikk "+ Ny konverteringshandling"
3. Velg "Nettside"
4. Kategori: "Registrering"
5. Konverteringsnavn: "Testpilot-registrering"
6. Verdi: 200 kr (estimert verdi per registrering)
7. Tell: "Én" (hver konvertering kun én gang)
8. Klikk "Opprett og fortsett"

**Steg 2: Kopier konverteringskode (5 min)**
1. Kopier "Global site tag" (går i `<head>`)
2. Kopier "Event snippet" (går på takk-side)

**Steg 3: Installer på nettside (20 min)**

**Global site tag (på alle sider):**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXX');
</script>
```
Installer i `<head>` på fagfolk6.vercel.app

**Event snippet (kun på takk-side):**
```html
<script>
  gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXX/XXXX'});
</script>
```
Installer på fagfolk6.vercel.app/pilot/takk (eller tilsvarende)

**Steg 4: Test konvertering (5 min)**
1. Gå til fagfolk6.vercel.app/pilot
2. Fyll ut registreringsskjema
3. Send inn (går til takk-side)
4. Google Ads → Verktøy → Konverteringer
5. Sjekk "Nylige konverteringer" → skal vise 1 ✅

**Sjekkliste:**
- [ ] Google Ads-konvertering opprettet ✅
- [ ] Global site tag installert ✅
- [ ] Event snippet installert på takk-side ✅
- [ ] Konvertering testet og fungerer ✅

---

## 📆 DAG 3: DESIGN (2 timer)

### **Mål:** Lage 4-6 profesjonelle bilder for annonsene

---

### **14:00-14:20: Sett opp Canva (20 min)**

1. Gå til: canva.com
2. Opprett gratis konto
3. Bekreft e-post
4. Velg "Skip" på eventuelle oppgraderinger

**Søk etter stock-bilder:**
1. Gå til unsplash.com
2. Søk: "carpenter working", "plumber norway", "home renovation"
3. Last ned 3-4 bilder (gratis)

**Sjekkliste:**
- [ ] Canva-konto opprettet ✅
- [ ] 3-4 stock-bilder lastet ned ✅

---

### **14:20-15:20: Design bilder (1 time)**

**Bilde 1: Håndverker-rekruttering (15 min)**
1. Canva → Opprett design → Instagram Post (1080x1080)
2. Last opp bilde av håndverker
3. Legg til tekst:
   ```
   🔨 HÅNDTVERKEREN
   
   Søker 20 testpilot-håndverkere
   
   ✓ Gratis testing
   ✓ 40% rabatt i 6 mnd
   ✓ Eksklusivt merke
   
   REGISTRER DEG NÅ
   fagfolk6.vercel.app/pilot
   ```
4. Bruk farger: #17384E (blå) og #E07B3E (oransje)
5. Font: Inter Bold for overskrifter, Inter Regular for tekst
6. Eksporter som PNG (høy kvalitet)

**Bilde 2: Håndverker-rekruttering variant (15 min)**
1. Duplikat av Bilde 1
2. Endre tekst:
   ```
   VIL DU HA FLERE OPPDRAG?
   
   Bli testpilot på Håndtverkeren
   
   Kunder søker DIN tjeneste
   Gratis testing + 40% rabatt
   
   Kun 20 plasser
   ```
3. Bytt bilde (annen håndverker)
4. Eksporter som PNG

**Bilde 3: Kunde-rekruttering (15 min)**
1. Nytt design → Instagram Post (1080x1080)
2. Last opp bilde: Fornøyd familie i renovert hjem
3. Legg til tekst:
   ```
   TRENGER HÅNDVERKER?
   
   ✓ Verifiserte fagfolk
   ✓ Flere tilbud - velg beste
   ✓ Trygg betaling
   
   FINN HÅNDVERKER
   fagfolk6.vercel.app
   ```
4. Samme farger og fonts
5. Eksporter som PNG

**Bilde 4: Kunde-rekruttering variant (15 min)**
1. Duplikat av Bilde 3
2. Endre tekst:
   ```
   FÅ 3-5 TILBUD
   På 24 timer
   
   Sammenlign pris og kvalitet
   Kun verifiserte håndverkere
   
   Registrer interesse nå
   ```
3. Bytt bilde
4. Eksporter som PNG

**Sjekkliste:**
- [ ] Bilde 1 (håndverker) designet og eksportert ✅
- [ ] Bilde 2 (håndverker variant) designet ✅
- [ ] Bilde 3 (kunde) designet ✅
- [ ] Bilde 4 (kunde variant) designet ✅

---

### **15:20-16:00: Design Google bannere (40 min)**

**300x250 banner - Håndverkere (20 min)**
1. Canva → Egendefinert størrelse → 300x250 px
2. Bakgrunn: Gradient #17384E → lysere blå
3. Tekst:
   ```
   🔨 HÅNDTVERKEREN
   
   Søker 20 testpilot-
   håndverkere
   
   Gratis testing
   40% rabatt
   
   [SØKER NÅ-knapp]
   ```
4. Liten font (14-18px), men lesbar
5. Eksporter som PNG

**300x250 banner - Kunder (20 min)**
1. Duplikat layout
2. Tekst:
   ```
   Trenger håndverker?
   
   ✓ Verifiserte fagfolk
   ✓ Trygg betaling
   ✓ Flere tilbud
   
   [FINN HÅNDVERKER-knapp]
   ```
3. Eksporter som PNG

**Sjekkliste:**
- [ ] 300x250 banner (håndverker) designet ✅
- [ ] 300x250 banner (kunde) designet ✅
- [ ] Alle 6 bilder lastet ned og klar ✅

---

## 📆 DAG 4: META ADS (2 timer)

### **Mål:** Første Meta Ads-kampanje live

---

### **09:00-10:00: Opprett håndverker-kampanje (1 time)**

**Steg 1: Kampanje (10 min)**
1. Ads Manager → Opprett
2. Mål: "Trafikk" (eller "Konverteringer" hvis du har Pixel)
3. Kampanjenavn: "Håndtverkeren - Testpilot - Håndverkere"
4. Budsjett: 2 500 kr (kampanje-nivå) eller 85 kr/dag
5. Klikk "Neste"

**Steg 2: Annonsegruppe (20 min)**
1. Navn: "Oslo - Håndverkere - 25-65"
2. **Målgruppe:**
   - Lokasjon: Norge → Oslo og omegn (50 km)
   - Alder: 25-65
   - Kjønn: Alle
   - Detaljert targeting:
     - Interesser: Byggfag, Håndverk, Småbedrifter
     - Jobbroller: Rørlegger, Elektriker, Snekker
3. **Plasseringer:** Automatisk
4. **Budsjett:** 85 kr/dag
5. Klikk "Neste"

**Steg 3: Annonse (30 min)**
1. Navn: "Ekslusivitet - Bilde 1"
2. **Format:** Enkeltbilde
3. **Last opp:** Bilde 1 (håndverker)
4. **Primærtekst:**
   ```
   Er du rørlegger, elektriker, snekker eller annen fagperson?

   Vi bygger Håndtverkeren - Norges nye plattform som kobler 
   kunder med verifiserte fagfolk.

   Nå søker vi 20 testpilot-leverandører som får:

   ✅ Gratis testing - ingen kostnader
   ✅ 40% rabatt i 6 måneder ved lansering (spar opptil 3 600 kr)
   ✅ Få de første jobbene før alle andre
   ✅ Påvirk utviklingen av plattformen
   ✅ Eksklusivt testpilot-badge på profilen

   Kun 20 plasser - søk nå! 🚀
   ```
5. **Overskrift:** "Søker 20 testpilot-håndverkere 🔨"
6. **Beskrivelse:** "Gratis testing + 40% rabatt i 6 mnd"
7. **CTA-knapp:** "Registrer deg"
8. **Nettside:** https://fagfolk6.vercel.app/pilot
9. **Klikk:** "Publiser"

**Sjekkliste:**
- [ ] Håndverker-kampanje opprettet ✅
- [ ] Målgruppe definert ✅
- [ ] Annonse opprettet med bilde ✅
- [ ] Kampanje publisert (venter godkjenning) ✅

---

### **10:00-11:00: Opprett kunde-kampanje (1 time)**

**Gjenta samme prosess:**
1. Kampanje: "Håndtverkeren - Testpilot - Kunder"
2. Budsjett: 2 500 kr eller 85 kr/dag
3. **Målgruppe:**
   - Alder: 30-65
   - Interesser: Boligeier, Hjemmeforbedring, Oppussing
4. **Annonsetekst:**
   ```
   Trenger du en elektriker? Eller rørlegger? 🔨

   Med Håndtverkeren får du:

   ✅ Kun verifiserte fagfolk med godkjenninger
   ✅ Flere tilbud - velg det beste
   ✅ Anmeldelser fra ekte kunder
   ✅ Sikker betaling via escrow
   ✅ Rask respons fra fagfolk i ditt område

   Vi lanserer snart - vær blant de første! 🚀
   ```
5. Overskrift: "Trenger du håndverker? 🔨"
6. URL: https://fagfolk6.vercel.app/kunde
7. Publiser

**Sjekkliste:**
- [ ] Kunde-kampanje opprettet ✅
- [ ] Annonse publisert ✅
- [ ] Begge kampanjer venter godkjenning ✅

---

## 📆 DAG 5: GOOGLE ADS (2,5 timer)

### **Mål:** Google søkekampanje live

---

### **13:00-14:15: Opprett søkekampanje - Håndverkere (1 time 15 min)**

**Steg 1: Kampanje (10 min)**
1. Google Ads → Kampanjer → + Ny kampanje
2. Mål: "Nettsidetrafikk"
3. Kampanjetype: "Søk"
4. Navn: "Håndtverkeren - Søk - Håndverkere"
5. Nettverk: Søk + Søkepartnere (ikke Display)
6. Lokasjon: Norge (eller Oslo, Bergen, Trondheim)
7. Språk: Norsk
8. Budsjett: 85 kr/dag
9. Budsjettstrategi: "Maksimer klikk"
10. Klikk "Lagre og fortsett"

**Steg 2: Annonsegruppe (15 min)**
1. Navn: "Oppdrag + Rørlegger"
2. **Legg til søkeord:**
   ```
   +oppdrag +rørlegger
   +oppdrag +elektriker
   +finne +jobb +rørlegger
   +flere +oppdrag +håndverker
   +plattform +håndverkere
   ```
3. **Negative søkeord:**
   ```
   -jobb
   -stilling
   -ansettelse
   -lønnet
   -gratis
   ```
4. Standard-CPC: 15 kr
5. Klikk "Lagre og fortsett"

**Steg 3: Annonse (50 min)**

**Responsive Search Ad:**
1. **Overskrifter (skriv 5-10):**
   ```
   1. Søker Oppdrag Som Rørlegger?
   2. Bli Testpilot På Håndtverkeren
   3. Gratis Testing + 40% Rabatt
   4. Flere Kunder - Mer Inntekt
   5. Digital Plattform For Fagfolk
   6. Kun 20 Plasser Igjen
   7. Spar Opptil 3 600 Kr
   ```

2. **Beskrivelser (skriv 3-4):**
   ```
   1. Håndtverkeren kobler verifiserte fagfolk med kunder. Gratis testing for de 20 første testpilotene. Registrer deg i dag!
   
   2. Norges nye plattform for håndverkere. Motta jobbtilbud direkte. 40% rabatt i 6 måneder. Kun 20 plasser.
   
   3. Lovpålagte godkjenninger kreves. Eksklusivt testpilot-merke. Prioritert support. Bli en av de 20 første!
   ```

3. **URL:** https://fagfolk6.vercel.app/pilot

4. **Legg til utvidelser:**
   - **Sitelinks:**
     - "Om Testpilot-Programmet" → /pilot#om
     - "Krav For Deltakelse" → /pilot#krav
     - "Registrer Deg Nå" → /pilot#registrer
   - **Callouts:**
     - Gratis Testing
     - 40% Rabatt I 6 Måneder
     - Kun 20 Plasser
   
5. Klikk "Publiser"

**Sjekkliste:**
- [ ] Søkekampanje håndverkere opprettet ✅
- [ ] Søkeord lagt til ✅
- [ ] Responsive Search Ad opprettet ✅
- [ ] Utvidelser lagt til ✅

---

### **14:15-15:30: Opprett søkekampanje - Kunder (1 time 15 min)**

**Gjenta samme prosess:**
1. Kampanje: "Håndtverkeren - Søk - Kunder"
2. Budsjett: 85 kr/dag
3. **Søkeord:**
   ```
   [trenger rørlegger]
   [trenger elektriker]
   [finne rørlegger oslo]
   [anbefalt elektriker]
   [pålitelig håndverker]
   ```
4. **Annonse:**
   - Overskrifter: "Trenger Du Rørlegger?", "Få 3-5 Tilbud På 24 Timer", "Kun Verifiserte Fagfolk"
   - Beskrivelse: Se GOOGLE-ADS-GUIDE.md
5. URL: https://fagfolk6.vercel.app/kunde
6. Publiser

**Sjekkliste:**
- [ ] Søkekampanje kunder opprettet ✅
- [ ] Publisert og godkjent ✅

---

## 📆 DAG 6: TESTING (1 time)

### **Mål:** Sjekk at alle kampanjer kjører OK

---

### **10:00-10:30: Sjekk Meta Ads (30 min)**

1. **Gå til Ads Manager**
2. **Sjekk status:**
   - [ ] Kampanjer er "Aktiv" (ikke "Under gjennomgang")
   - [ ] Budsjett er riktig (85 kr/dag)
   - [ ] Impressions har startet (kan ta 1-2 timer)

3. **Hvis annonse ble avvist:**
   - Les avvisningsgrunn
   - Juster annonsetekst/bilde
   - Publiser på nytt

4. **Test annonsen selv:**
   - Søk etter din bedrift på Facebook
   - Sjekk at annonsen vises
   - Klikk på annonsen → skal gå til /pilot ✅

**Sjekkliste:**
- [ ] Begge Meta-kampanjer er aktive ✅
- [ ] Impressions har startet ✅
- [ ] Test-klikk går til riktig side ✅

---

### **10:30-11:00: Sjekk Google Ads (30 min)**

1. **Gå til Google Ads**
2. **Sjekk status:**
   - [ ] Kampanjer er "Kvalifisert"
   - [ ] Annonser er "Godkjent"
   - [ ] Budsjett er riktig

3. **Sjekk søkeord:**
   - [ ] Quality Score > 5 (hvis data finnes)
   - [ ] Ingen advarsler

4. **Test annonsen selv:**
   - Google-søk: "oppdrag rørlegger"
   - Sjekk om annonsen vises (kan ta timer/dager)
   - Klikk → skal gå til /pilot ✅

**Sjekkliste:**
- [ ] Begge Google-kampanjer er kvalifiserte ✅
- [ ] Annonser er godkjent ✅
- [ ] Test-klikk fungerer ✅

---

## 📆 DAG 7: OPTIMALISERING (1 time)

### **Mål:** Første datadrevne justeringer

---

### **15:00-15:30: Analyser Meta Ads (30 min)**

**Data å se på:**
1. **Impressions:** Hvor mange har sett annonsen?
2. **Klikk:** Hvor mange har klikket?
3. **CTR:** Klikkrate (klikk / impressions × 100%)
4. **CPC:** Kostnad per klikk
5. **Konverteringer:** Hvor mange registrerte seg?

**Hva gjøre:**

**Hvis CTR < 2%:**
- Pause annonsen
- Test ny overskrift/bilde

**Hvis CPC > 20 kr:**
- Reduser bud eller budsjett
- Smalere målgruppe

**Hvis konverteringsrate < 10%:**
- Sjekk landing page
- Test enklere skjema

**Hvis alt ser bra ut:**
- Fortsett som nå
- Test nye varianter

**Sjekkliste:**
- [ ] Data analysert ✅
- [ ] Underytende annonser pauset ✅
- [ ] Nye tester planlagt ✅

---

### **15:30-16:00: Analyser Google Ads (30 min)**

**Data å se på:**
1. **Impressions**
2. **Klikk**
3. **CTR**
4. **Avg. CPC**
5. **Quality Score** (per søkeord)
6. **Konverteringer**

**Hva gjøre:**

**Hvis Quality Score < 5:**
- Forbedre annonse-relevans
- Legg til søkeord i overskrift
- Forbedre landing page

**Hvis CTR < 3%:**
- Test nye annonsetekster
- Legg til utvidelser

**Hvis CPC > 30 kr:**
- Reduser bud
- Legg til flere negative søkeord

**Hvis alt ser bra ut:**
- Øk budsjett litt (+20%)
- Utvid med nye søkeord

**Sjekkliste:**
- [ ] Data analysert ✅
- [ ] Lavkvalitets-søkeord pauset ✅
- [ ] Budsjett justert ✅

---

## 🎉 GRATULERER! KAMPANJENE ER LIVE!

**Du har nå:**
✅ Meta Ads-kampanjer for håndverkere og kunder
✅ Google Ads søkekampanjer for begge
✅ Tracking installert og fungerende
✅ Første optimalisering gjennomført

---

## 📈 UKE 2: KONTINUERLIG OPTIMALISERING

### **Daglig rutine (15 min/dag):**

**Sjekk hver morgen:**
1. [ ] Budsjett brukt i går
2. [ ] Antall klikk i går
3. [ ] Antall konverteringer i går
4. [ ] CPC og CTR
5. [ ] Eventuelle advarsler/feil

**Juster om nødvendig:**
- Pause annonser med CTR < 2%
- Øk budsjett på annonser med CTR > 5%
- Legg til nye negative søkeord

---

### **Ukentlig rutine (1 time/uke):**

**Hver søndag:**
1. [ ] Analyser ukens data
2. [ ] Identifiser best-performer
3. [ ] Pause worst-performer
4. [ ] Test 1-2 nye annonser
5. [ ] Juster budsjett-fordeling
6. [ ] Planlegg neste uke

---

## 📊 FORVENTET RESULTAT (ETTER 30 DAGER)

**Med 10 000 kr budsjett:**

| Metric | Forventet |
|--------|-----------|
| Total impressions | 300 000+ |
| Total klikk | 1 500+ |
| Håndverker-registreringer | 20-30 |
| Kunde-leads | 50-100 |
| Gjennomsnittlig CPC | 8-15 kr |
| Gjennomsnittlig CTR | 3-5% |
| ROI | 1 000%+ |

---

## ✅ MASTER-SJEKKLISTE

**Dag 1:**
- [ ] Alle guider lest
- [ ] Facebook Business Manager-konto opprettet
- [ ] Google Ads-konto opprettet
- [ ] Betalingsmetoder lagt til

**Dag 2:**
- [ ] Facebook Pixel installert og testet
- [ ] Google Ads-konvertering installert og testet

**Dag 3:**
- [ ] 4 Meta-bilder (1080x1080) designet
- [ ] 2 Google-bannere (300x250) designet

**Dag 4:**
- [ ] Meta Ads håndverker-kampanje live
- [ ] Meta Ads kunde-kampanje live

**Dag 5:**
- [ ] Google Ads håndverker-kampanje live
- [ ] Google Ads kunde-kampanje live

**Dag 6:**
- [ ] Alle kampanjer verifisert aktive
- [ ] Test-klikk fungerer

**Dag 7:**
- [ ] Første optimalisering gjennomført
- [ ] Daglig/ukentlig rutine etablert

---

## 💡 BONUS-TIPS

### **Hvis du vil gå raskere:**

**3-dagers rush-plan:**
- **Dag 1:** Forberedelser + Tracking (3 timer)
- **Dag 2:** Design + Meta Ads (4 timer)
- **Dag 3:** Google Ads + Testing (3 timer)

**Total:** 10 timer over 3 dager

---

### **Hvis du vil gå langsommere:**

**14-dagers rolig plan:**
- **Uke 1:** Forberedelser, tracking, design
- **Uke 2:** Opprett kampanjer og test

**Total:** 1-2 timer/dag over 2 uker

---

## 🆘 HVIS DU STÅR FAST

**Dag 1-2 (Tracking):**
- Problem: Pixel/konvertering fungerer ikke
- Løsning: Google "Facebook Pixel troubleshooting" eller ring Google Ads support (800 68 781)

**Dag 3 (Design):**
- Problem: Designen ser dårlig ut
- Løsning: Bruk Canva-templates, søk "Facebook ad template"

**Dag 4-5 (Kampanjer):**
- Problem: Annonse blir avvist
- Løsning: Les avvisningsgrunn, fjern superlativ ("beste"), reduser tekst i bilde

**Dag 6-7 (Ingen klikk):**
- Problem: Få/ingen impressions
- Løsning: Øk budsjett, utvid målgruppe, sjekk at annonse er godkjent

---

**Du klarer dette! Følg planen steg for steg 💪**

**Spørsmål? Usikker på noe? Bare si ifra!** 😊

---

*7-dagers oppstartsplan for Håndtverkeren - Mars 2026* 🚀
