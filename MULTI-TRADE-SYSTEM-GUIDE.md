# 🔧 MULTI-TRADE SYSTEM - Automatisk Deteksjon av Tverrfaglige Oppdrag

**Intelligent system som automatisk oppdager når en jobb krever flere faggrupper**

---

## 🎯 **KONSEPT:**

Når en kunde legger ut en jobb, analyserer AI automatisk svarene og:
1. **Detekterer** om andre faggrupper trengs
2. **Spør kunden** om de ønsker å generere separate oppdrag
3. **Genererer automatisk** komplette jobbeskrivelser for hver faggruppe

**→ Kunden får ALLE sine behov dekket i én arbeidsflyt!** ✅

---

## 📊 **EKSEMPEL: VARMEPUMPE + ELEKTRIKER**

### **Scenario:**

Kunde ønsker å installere varmepumpe.

AI spør: "Er det jordet stikkontakt i nærheten av utedel?"
Kunde svarer: "Nei, må trekkes ny"

---

### **Tradisjonell løsning:**

```
1. Kunde bestiller varmepumpe
2. Installatør kommer på befaring
3. Oppdager at det mangler strøm
4. "Du må få en elektriker først"
5. Kunde må finne elektriker selv
6. Vente 2-3 uker
7. Elektriker installerer stikkontakt
8. Varmepumpe-installatør kommer tilbake

TOTALT: 3-5 uker, mange henvendelser, stress
```

---

### **Håndtverkeren med AI:**

```
1. Kunde svarer på AI-spørsmål (10 min)
2. AI detekterer: "Trenger elektriker!"
3. AI spør: "Ønsker du et oppdrag for elektriker også?"
4. Kunde: "Ja"
5. AI genererer BEGGE oppdrag automatisk:
   
   OPPDRAG 1: Varmepumpe-installasjon
   OPPDRAG 2: Elektrisk arbeid (stikkontakt for varmepumpe)

6. Begge oppdrag sendes til riktige fagfolk
7. Kunde får tilbud fra begge
8. Koordinerer installasjon (elektriker først, varmepumpe etter)

TOTALT: 1-2 uker, én arbeidsflyt, null stress ✅
```

---

## 🎯 **IMPLEMENTERING:**

### **1. BUDSJETT-SPØRSMÅL (ALLE KATEGORIER)**

Første spørsmål i HVER kategori:

```javascript
{
  id: 'desiredBudget',
  question: 'Hva er ditt ønskede budsjett for denne jobben?',
  type: 'radio',
  options: [
    'Under 50 000 kr',
    '50 000 - 100 000 kr',
    '100 000 - 200 000 kr',
    '200 000 - 300 000 kr',
    'Over 300 000 kr',
    'Vet ikke / Ønsker pristilbud'
  ],
  required: true
}
```

**Hvorfor viktig:**
- Hjelper håndverkere prioritere
- Filtrerer bort jobbantråd som er for små/store
- Gir realistiske forventninger

---

### **2. DETEKSJON AV TVERRFAGLIGE BEHOV**

#### **Varmepumpe → Elektriker**

```javascript
// TRIGGER:
answers.groundedOutletIndoor === 'Nei, må trekkes ny'
answers.groundedOutletOutdoor === 'Nei, må trekkes ny'
answers.electrical === 'Nei' || answers.electrical === 'Vet ikke'

// GENERERT OPPDRAG:
{
  category: 'elektrisk',
  title: 'Elektrisk arbeid for varmepumpe-installasjon',
  description: `
    ELEKTRISK ARBEID FOR VARMEPUMPE-INSTALLASJON
    
    Dette elektriske arbeidet må utføres før varmepumpen kan installeres.
    
    NØDVENDIG ARBEID:
    • Installere ny jordet stikkontakt for innedel (innendørs)
    • Installere ny jordet stikkontakt for utedel (utendørs)
    • Sjekke strømkapasitet i sikringskap
    • Eventuelt oppgradere sikring (typisk til 16A)
    
    VARMEPUMPE-DETALJER:
    • Type: Luft til luft
    • Merke/modell: Mitsubishi MSZ-LN25VGW
    • Oppvarmingsareal: 150 kvm
    • Avstand innedel-utedel: 5-10 meter
    
    TIDSLINJE:
    Dette arbeidet må være ferdig FØR varmepumpe-installasjonen.
  `,
  estimatedCost: { min: 5000, max: 10000 }
}
```

---

#### **Baderomsrenovering → Elektriker**

```javascript
// TRIGGER:
answers.scope.includes('Belysning')
answers.scope.includes('Ventilasjon')
answers.scope.includes('Varmekabler i gulv')

// GENERERT OPPDRAG:
{
  category: 'elektrisk',
  title: 'Elektrisk arbeid for baderomsrenovering',
  description: `
    ELEKTRISK ARBEID FOR BADEROMSRENOVERING
    
    NØDVENDIG ARBEID:
    • Installere ny belysning (taklampe, spots, speilbelysning)
    • Installere/koble ventilasjon
    • Legge varmekabler i gulv
    • Installere termostat
    
    BADEROS-DETALJER:
    • Størrelse: 6 kvm
    • Type bolig: Leilighet
  `,
  estimatedCost: { min: 8000, max: 25000 }
}
```

---

#### **Baderomsrenovering → Rørlegger**

```javascript
// TRIGGER:
answers.scope.includes('Servant og toalett')
answers.scope.includes('Dusjkabinett')
answers.scope.includes('Badekar')

// GENERERT OPPDRAG:
{
  category: 'ror',
  title: 'Rørleggerarbeid for baderomsrenovering',
  description: `
    RØRLEGGERARBEID FOR BADEROMSRENOVERING
    
    NØDVENDIG ARBEID:
    • Installere nytt servant og toalett
    • Koble til vann og avløp
    • Installere dusjkabinett
    • Membran og sluk
    
    BADEROMSDETALJER:
    • Størrelse: 6 kvm
    • Type bolig: Leilighet
  `,
  estimatedCost: { min: 15000, max: 40000 }
}
```

---

#### **Kledning → Maler**

```javascript
// TRIGGER:
answers.workType === 'Kledning/panel (vegg/fasade)'
answers.surfaceTreatment === 'Maling (oppgi farge)'

// GENERERT OPPDRAG:
{
  category: 'maling',
  title: 'Maling av ny kledning',
  description: `
    MALERARBEID FOR KLEDNING
    
    Overflatebehandling av ny kledning.
    
    ARBEID:
    • Maling av kledning (farge: Hvit)
    • Grunning (primer)
    • 2-3 strøk (avhengig av kvalitet)
    
    KLEDNINGS-DETALJER:
    • Type: Stående kledning
    • Størrelse: 12m x 8m (96 kvm)
    • Lokasjon: Utendørs
  `,
  estimatedCost: { min: 9600, max: 24000 }  // 100-250 kr/kvm
}
```

---

#### **Garasjeport → Elektriker**

```javascript
// TRIGGER:
answers.automation === 'Ja'

// GENERERT OPPDRAG:
{
  category: 'elektrisk',
  title: 'Elektrisk arbeid for garasjeport-motor',
  description: `
    ELEKTRISK ARBEID FOR GARASJEPORT-MOTOR
    
    Installasjon av strøm for garasjeport-motor.
    
    ARBEID:
    • Trekke strøm til motor
    • Installere jordet stikkontakt
    • Eventuelt installere bryter/kontrollpanel
    
    GARASJEPORT-DETALJER:
    • Størrelse: 250 cm x 200 cm
    • Type port: Seksjonport
  `,
  estimatedCost: { min: 2500, max: 6000 }
}
```

---

## 🎨 **BRUKERGRENSESNITT:**

### **Steg 1: AI detekterer behov**

```
┌─────────────────────────────────────────────┐
│ ✅ Beskrivelse generert!                    │
│                                             │
│ VARMEPUMPE INSTALLASJON - DETALJERT...      │
│                                             │
│ [Se full beskrivelse]                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ ⚠️ VIKTIG: Denne jobben krever også         │
│ arbeid fra en elektriker!                   │
│                                             │
│ Varmepumpen krever elektrisk arbeid før     │
│ installasjon (estimert kostnad:             │
│ 5 000 - 10 000 kr)                          │
│                                             │
│ Ønsker du at vi genererer et separat       │
│ oppdrag for elektriker?                     │
│                                             │
│ [Nei, ordner selv] [Ja, generer oppdrag]   │
└─────────────────────────────────────────────┘
```

---

### **Steg 2: Kunde velger "Ja"**

```
┌─────────────────────────────────────────────┐
│ ✅ Sekundært oppdrag generert!              │
│                                             │
│ OPPDRAG 1: Varmepumpe-installasjon         │
│ Kategori: Varmepumpe                        │
│ Estimat: 40 000 - 53 000 kr                 │
│                                             │
│ OPPDRAG 2: Elektrisk arbeid                 │
│ Kategori: Elektriker                        │
│ Estimat: 5 000 - 10 000 kr                  │
│                                             │
│ Begge oppdrag vil bli sendt til riktige    │
│ fagfolk når du klikker "Opprett".           │
│                                             │
│ [← Endre] [Opprett begge oppdrag →]        │
└─────────────────────────────────────────────┘
```

---

### **Steg 3: Oppdrag opprettet**

```
┌─────────────────────────────────────────────┐
│ 🎉 2 oppdrag opprettet!                     │
│                                             │
│ ✅ Varmepumpe-installasjon (#1234)          │
│    Sendt til 12 varmepumpe-installatører    │
│                                             │
│ ✅ Elektrisk arbeid (#1235)                 │
│    Sendt til 8 elektrikere                  │
│                                             │
│ Du vil motta tilbud fra begge faggrupper.  │
│                                             │
│ TIP: Koordiner at elektriker kommer først! │
│                                             │
│ [Se mine oppdrag]                           │
└─────────────────────────────────────────────┘
```

---

## 💡 **FORDELER:**

### **For kunden:**

✅ **Ingen glemte detaljer** - AI fanger opp alt
✅ **Spart tid** - Én arbeidsflyt i stedet for flere
✅ **Spart stress** - Slipper å tenke på hva som trengs
✅ **Bedre koordinering** - Fagfolk vet om hverandre
✅ **Realistisk budsjett** - Ser totalkostnad med en gang

---

### **For fagfolk:**

✅ **Riktig timing** - Vet når andre fag må være ferdig
✅ **Koordinering** - Kan samarbeide med andre håndverkere
✅ **Komplett info** - Får all nødvendig informasjon
✅ **Færre avbestillinger** - Alt er planlagt på forhånd

---

### **For plattformen:**

✅ **Økt volum** - Flere oppdrag per kunde
✅ **Bedre matching** - Riktige fagfolk til riktige jobber
✅ **Høyere kvalitet** - Færre feil og misforståelser
✅ **Konkurransefortrinn** - INGEN andre plattformer har dette!

---

## 📊 **STATISTIKK (ESTIMERT):**

### **Baderomsrenovering:**

```
80% krever elektriker (belysning, ventilasjon, varmekabler)
90% krever rørlegger (servant, toalett, dusj)
60% krever både elektriker OG rørlegger

GJENNOMSNITT: 2,3 faggrupper per baderomsrenovering
```

---

### **Varmepumpe:**

```
40% mangler jordet stikkontakt
20% trenger sikringsskap-oppgradering
50% trenger elektriker

GJENNOMSNITT: 1,5 faggrupper per varmepumpe
```

---

### **Kledning:**

```
70% ønsker maling/beis
30% ønsker kun montering

GJENNOMSNITT: 1,3 faggrupper per kledning
```

---

## 🚀 **IMPLEMENTERING - TEKNISK:**

### **Backend (Hono Server):**

```typescript
// /supabase/functions/server/index.tsx

import { detectSecondaryTrades, generateSecondaryJobPrompt } from './cross-trade-detector';

app.post('/make-server-8d200dba/ai/generate-description', async (c) => {
  const { category, initialDescription, answers } = await c.req.json();
  
  // Generate main description
  const description = await generateJobDescription(
    category,
    initialDescription,
    answers
  );
  
  // Detect secondary trades
  const secondaryJobs = detectSecondaryTrades(category, answers);
  
  // Generate budget estimate
  const budgetEstimate = estimateBudget(category, answers);
  
  return c.json({
    description,
    budgetEstimate,
    secondaryJobs,  // NEW!
    secondaryJobPrompt: generateSecondaryJobPrompt(secondaryJobs)  // NEW!
  });
});
```

---

### **Frontend (React):**

```typescript
// /src/app/components/AIJobAssistant.tsx

interface AIJobAssistantProps {
  category: string;
  onComplete: (
    description: string,
    budgetEstimate?: { min: number; max: number },
    secondaryJobs?: SecondaryJob[]  // NEW!
  ) => void;
}

// After AI generates description:
const handleGenerate = async () => {
  const response = await fetch(
    `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/ai/generate-description`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ category, initialDescription, answers })
    }
  );
  
  const data = await response.json();
  
  // Show secondary jobs prompt if any
  if (data.secondaryJobs && data.secondaryJobs.length > 0) {
    setSecondaryJobs(data.secondaryJobs);
    setShowSecondaryJobsPrompt(true);
  } else {
    onComplete(data.description, data.budgetEstimate);
  }
};
```

---

### **UI Modal:**

```tsx
{showSecondaryJobsPrompt && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-lg">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="text-orange-500" size={24} />
        <h3 className="text-lg font-bold">Andre faggrupper trengs</h3>
      </div>
      
      <p className="mb-4">
        {secondaryJobPrompt}
      </p>
      
      <div className="space-y-2 mb-6">
        {secondaryJobs.map((job, index) => (
          <div key={index} className="border rounded p-3">
            <div className="font-semibold">{job.title}</div>
            <div className="text-sm text-gray-600">{job.reason}</div>
            {job.estimatedCost && (
              <div className="text-sm text-gray-500 mt-1">
                Estimert: {job.estimatedCost.min.toLocaleString('no-NO')} - {job.estimatedCost.max.toLocaleString('no-NO')} kr
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onComplete(description, budgetEstimate, [])}
          className="flex-1 px-4 py-2 border rounded hover:bg-gray-50"
        >
          Nei, ordner selv
        </button>
        <button
          onClick={() => onComplete(description, budgetEstimate, secondaryJobs)}
          className="flex-1 px-4 py-2 bg-[#17384E] text-white rounded hover:bg-[#0f2838]"
        >
          Ja, generer oppdrag
        </button>
      </div>
    </div>
  </div>
)}
```

---

## 🎉 **RESULTAT:**

### **Kunde-opplevelse:**

```
OPPRINNELIG FORESPØRSEL:
"Skal ha varmepumpe"

ETTER AI:
• Komplett varmepumpe-oppdrag
• Komplett elektriker-oppdrag
• Begge sendt til riktige fagfolk
• Total estimat: 45 000 - 63 000 kr
• Alt koordinert på forhånd

TOTALT: 10 minutters arbeid, 2 komplette oppdrag! ✅
```

---

## 🏆 **KONKURRANSEFORTRINN:**

### **Finn.no / Mittanbud:**

```
Kunde må:
1. Legge ut varmepumpe-annonse
2. Vente på tilbud
3. Oppdage at det trengs elektriker
4. Legge ut ny annonse for elektriker
5. Vente på tilbud
6. Koordinere selv

TOTALT: 2 annonser, mye arbeid, lang ventetid
```

---

### **Håndtverkeren:**

```
Kunde:
1. Svarer på AI-spørsmål (10 min)
2. AI genererer BEGGE oppdrag
3. Begge sendes automatisk

TOTALT: 10 minutter, null stress! ✅
```

**→ 10X BEDRE BRUKEROPPLEVELSE! 🚀**

---

## 📋 **NESTE STEG:**

1. ✅ Legg til budsjett-spørsmål til ALLE kategorier
2. ✅ Implementer cross-trade-detector backend
3. ✅ Integrer i AI-assistant frontend
4. ✅ Test med varmepumpe → elektriker
5. ⏳ Test med baderomsrenovering → flere fag
6. ⏳ Lansér feature
7. ⏳ Samle data på hvor ofte det brukes
8. ⏳ Optimaliser basert på brukeratferd

---

*Multi-Trade System Guide - Håndtverkeren - Mars 2026* 🔧🤖
