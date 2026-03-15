# 🤖 AI Jobbassistent - Intelligent jobbeskrivelse

**Komplett guide for å implementere AI-drevet jobbeskrivelsesassistent på Håndtverkeren.**

AI-en stiller automatiske oppfølgingsspørsmål basert på kundens innledende beskrivelse, og sikrer at håndverkere får all nødvendig informasjon for å lage gode tilbud.

---

## 🎯 KONSEPT

### **Slik fungerer det:**

**1. Kunde skriver initial beskrivelse**
```
"Jeg vil pusse opp badet"
```

**2. AI analyserer og stiller oppfølgingsspørsmål**
```
🤖 Jeg hjelper deg med å lage en god jobbeskrivelse!

La meg stille noen spørsmål slik at håndverkere kan gi deg 
de beste tilbudene:

1. Hvor stort er badet? (ca. antall kvm)
2. Hva ønsker du å bytte ut?
   □ Fliser (gulv/vegger)
   □ Servant og toalett
   □ Dusjkabinett/badekar
   □ Varmekabler
   □ Ventilasjon
   □ Belysning
3. Har du valgt materialer selv, eller ønsker du at håndverker 
   leverer alt?
4. Når ønsker du at arbeidet starter?
5. Er det god tilkomst til badet?
6. Bor du i leilighet eller hus?
7. Skal badet kunne brukes under arbeidet, eller har du 
   alternativ?
```

**3. Kunde svarer**

**4. AI genererer komplett jobbeskrivelse**
```
BADEROMSRENOVERING - KOMPLETT

Størrelse: 6 kvm
Leilighet, 3. etasje (heis tilgjengelig)

Ønsker å bytte:
✓ Fliser gulv og vegger (ca. 25 kvm totalt)
✓ Servant og toalett (kunde har valgt Geberit)
✓ Dusjkabinett (90x90 cm)
✓ Varmekabler i gulv
✓ Nye armaturer

Materialer: Kunde har valgt fliser og sanitær selv.
Håndverker leverer øvrige materialer (lim, fugemasse, etc.)

Tilkomst: God tilkomst, heis tilgjengelig. Søppelcontainer 
kan plasseres i gården.

Oppstart: Ønsker oppstart i april/mai, fleksibel på nøyaktig dato.

Annet: Vi har ett annet bad som kan brukes under arbeidet.
```

**5. Kunde godkjenner og publiserer**

---

## 🧠 AI-SPØRSMÅL PER JOBBKATEGORI

### **KATEGORI: BADEROMSRENOVERING**

**AI-spørsmål:**

1. **Størrelse og omfang**
   - Hvor stort er badet? (kvm)
   - Komplett renovering eller delvis?
   - Skal rør/avløp flyttes?

2. **Materialer**
   - Har du valgt fliser? (ja/nei/trenger hjelp)
   - Har du valgt sanitærutstyr? (servant, toalett, dusj)
   - Hvilken kvalitet ønsker du? (budsjett/standard/premium)

3. **Spesifikke arbeider**
   - Skal fliser rives? (ja/nei)
   - Skal varmekabler legges i gulv? (ja/nei)
   - Ny ventilasjon? (ja/nei)
   - Ny belysning? (ja/nei)
   - Maling? (ja/nei)

4. **Praktisk**
   - Leilighet eller hus?
   - Hvilken etasje? (hvis leilighet)
   - Heis tilgjengelig? (ja/nei)
   - God tilkomst? (ja/nei)
   - Hvor kan søppel plasseres?

5. **Tidslinje**
   - Ønsket oppstartsdato?
   - Hvor raskt må det ferdigstilles?
   - Kan badet være utilgjengelig under arbeid? (ja/nei)

6. **Annet**
   - Har du alternativt bad? (ja/nei)
   - Spesielle ønsker/krav?
   - Bilder av nåværende tilstand? (last opp)

---

### **KATEGORI: ELEKTRISK ARBEID**

**AI-spørsmål:**

1. **Type arbeid**
   - Hva skal gjøres?
     □ Installere nye uttak/brytere
     □ Oppgradering av sikringskap
     □ Installere belysning
     □ Feilsøking
     □ Komplett ny installasjon
     □ Annet

2. **Omfang**
   - Hvor mange uttak/brytere skal installeres?
   - Hvor mange rom berøres?
   - Skal det graves/spores i vegger? (ja/nei)

3. **Eksisterende anlegg**
   - Hvor gammelt er anlegget?
   - Er det jordet? (ja/nei/vet ikke)
   - Størrelse på sikringskap? (antall ampere)

4. **Materialer**
   - Har du kjøpt utstyr selv? (ja/nei)
   - Hvilke produkter ønsker du? (Gira, Elko, etc.)
   - Farge på uttak/brytere?

5. **Tilkomst**
   - Må møbler flyttes? (ja/nei)
   - Er det lett tilgang til sikringskap?
   - Må det arbeides i trange rom/loft? (ja/nei)

6. **Tidslinje**
   - Ønsket oppstartsdato?
   - Hastegrad? (akutt/normal/fleksibel)
   - Kan strømmen være av i perioder? (ja/nei)

7. **Spesielt**
   - Kreves det godkjenning? (nybygg/større ombygging)
   - Skal det meldes til DSB?
   - Trenger du ferdigattest?

---

### **KATEGORI: RØRLEGGERARBEID**

**AI-spørsmål:**

1. **Type arbeid**
   - Hva skal gjøres?
     □ Lekkasje (akutt)
     □ Installere nytt
     □ Bytte gammelt
     □ Oppgradering
     □ Vedlikehold
     □ Annet

2. **Spesifikk jobb**
   - Hva skal installeres/byttes?
     □ Servant/toalett
     □ Dusj/badekar
     □ Varmtvannstank
     □ Vannrør
     □ Avløpsrør
     □ Annet

3. **Omfang**
   - Hvor mange enheter?
   - Må rør trekkes gjennom vegger/gulv? (ja/nei)
   - Kreves det boring i betong? (ja/nei)

4. **Eksisterende anlegg**
   - Hvor gammelt er anlegget?
   - Type rør? (kobber/pex/galvanisert/vet ikke)
   - Er det kjent problemer? (rust, lekkasje, etc.)

5. **Materialer**
   - Har du kjøpt utstyr? (ja/nei)
   - Hvilken kvalitet ønsker du? (budsjett/standard/premium)
   - Spesifikke merker? (Geberit, Grohe, etc.)

6. **Tilkomst**
   - Hvor er arbeidet? (bad, kjøkken, kjeller, etc.)
   - Er det lett tilgang til rør? (ja/nei)
   - Må gulv/vegger åpnes? (ja/nei)

7. **Tidslinje**
   - Hastegrad? (akutt lekkasje / normal / fleksibel)
   - Kan vannet være avstengt? (ja/nei/hvor lenge)
   - Ønsket oppstartsdato?

8. **Spesielt**
   - Kreves det trykktesting?
   - Skal det meldes/godkjennes?
   - Garanti på arbeid ønskes? (standard 5 år)

---

### **KATEGORI: SNEKKERARBEID**

**AI-spørsmål:**

1. **Type arbeid**
   - Hva skal gjøres?
     □ Bygging (terrasse, bod, etc.)
     □ Reparasjon
     □ Installasjon (dører, vinduer, etc.)
     □ Tilpasning/endring
     □ Annet

2. **Omfang**
   - Størrelse på prosjekt? (kvm eller antall enheter)
   - Nybygg eller renovering?
   - Innendørs eller utendørs?

3. **Materialer**
   - Har du materialer? (ja/nei)
   - Type tre/materiale ønsket?
   - Kvalitet? (budsjett/standard/premium)
   - Overflatebehandling? (maling, beis, lakkering, etc.)

4. **Spesifikke detaljer**
   - Tegninger/målskisse tilgjengelig? (ja/nei)
   - Spesielle mål/krav?
   - Må gammelt rives først? (ja/nei)

5. **Tilkomst**
   - Hvor er arbeidet? (innendørs/utendørs)
   - Plass til verktøy/materialer?
   - Kreves det stillas? (ja/nei/vet ikke)
   - Kan materialer leveres nært arbeidssted? (ja/nei)

6. **Tidslinje**
   - Ønsket oppstartsdato?
   - Deadline? (ja/nei - når?)
   - Fleksibilitet på tidsramme?

7. **Spesielt**
   - Kreves det byggetillatelse? (ja/nei/vet ikke)
   - Skal det være ferdig inspisert/godkjent?
   - Garanti ønskes? (standard 5 år)

---

### **KATEGORI: MALERARBEID**

**AI-spørsmål:**

1. **Type arbeid**
   - Hva skal males?
     □ Veggr og tak
     □ Panel/listverk
     □ Dører og vinduer
     □ Fasade (utendørs)
     □ Annet

2. **Omfang**
   - Antall rom?
   - Total kvm vegg/tak?
   - Hvor mange strøk? (1, 2, eller 3)

3. **Forarbeid**
   - Må gammelt fjernes? (tapet, gammel maling)
   - Kreves spartling/pussing? (ja/nei)
   - Må møbler/gulv beskyttes? (ja/nei - gjør du det selv?)

4. **Materialer**
   - Har du valgt farge? (ja/nei)
   - Type maling ønsket? (matt, silkematt, blank)
   - Kvalitet? (budsjett/standard/premium - f.eks. Jotun, Flügger)

5. **Tilkomst**
   - Må møbler flyttes? (ja - av deg/maler)
   - Kreves det stillas? (fasademaling)
   - Kan rommet tømmes helt? (ja/nei)

6. **Tidslinje**
   - Ønsket oppstartsdato?
   - Hvor raskt må det tørke? (skal du flytte inn snart?)
   - Kan du bo der under arbeid? (ja/nei)

7. **Spesielt**
   - Spesielle farger/teknikker? (mønster, dekor, etc.)
   - Allergier/ønske om miljøvennlig maling?
   - Garanti på arbeid?

---

### **KATEGORI: FLISLEGGING**

**AI-spørsmål:**

1. **Type arbeid**
   - Hva skal flislegges?
     □ Gulv
     □ Vegger
     □ Både gulv og vegger
     □ Utendørs (terrasse, etc.)

2. **Omfang**
   - Antall kvm totalt?
   - Hvor er det? (bad, kjøkken, entre, etc.)
   - Må gammelt fliser rives? (ja/nei)

3. **Materialer**
   - Har du valgt fliser? (ja/nei/trenger hjelp)
   - Type fliser? (keramisk, porselens, naturstein)
   - Størrelse? (10x10, 30x60, 60x60, etc.)
   - Farge/stil?

4. **Underlag**
   - Hva er underlaget? (betong, tre, gammelt flis)
   - Er det plant? (ja/nei/vet ikke)
   - Må det planeres først? (ja/nei/vet ikke)

5. **Spesielle detaljer**
   - Varmekabler i gulv? (ja/nei)
   - Membran mot fukt? (bad/våtrom - ja)
   - Mønster/legging? (standard/diagonal/mønster)
   - Fuge-farge?

6. **Tilkomst**
   - Lett tilkomst? (ja/nei)
   - Kreves det stillas? (høye vegger)
   - Hvor skal søppel/rester plasseres?

7. **Tidslinje**
   - Ønsket oppstartsdato?
   - Hvor raskt må det ferdigstilles?
   - Kan rommet være utilgjengelig? (ja/nei)

8. **Spesielt**
   - Skal det være sluk? (gulv - ja/nei)
   - Skal det membrantestes? (våtrom - ja)
   - Garanti på arbeid? (standard 5 år)

---

## 🛠️ TEKNISK IMPLEMENTASJON

### **Metode 1: OpenAI GPT API** ⭐ ANBEFALT

**Fordeler:**
- ✅ Meget intelligent
- ✅ Forstår kontekst godt
- ✅ Kan tilpasse spørsmål dynamisk
- ✅ God norsk språkstøtte

**Kostnad:** ~0.50-2 kr per jobbeskrivelse

**Implementasjon:**

```javascript
// /supabase/functions/server/ai-assistant.tsx

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
});

export async function generateJobQuestions(initialDescription: string, category: string) {
  const systemPrompt = `
Du er en hjelpsom assistent som hjelper kunder med å lage detaljerte 
jobbeskrivelser for håndverkere.

Basert på kundens innledende beskrivelse, still 5-10 relevante 
oppfølgingsspørsmål som vil hjelpe håndverkere å lage gode tilbud.

Fokuser på:
- Omfang og størrelse
- Materialer (har kunde selv eller skal håndverker levere)
- Tilkomst og praktiske forhold
- Tidslinje og hastegrad
- Spesielle krav eller ønsker

Jobbkategori: ${category}

Vær vennlig, profesjonell og konkret.
Still kun spørsmål som er relevante for akkurat denne jobben.
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Kunde skrev: "${initialDescription}"` }
    ],
    temperature: 0.7,
    max_tokens: 800,
  });

  return response.choices[0].message.content;
}

export async function generateFinalJobDescription(
  initialDescription: string,
  questions: string,
  answers: string,
  category: string
) {
  const systemPrompt = `
Du er en assistent som lager profesjonelle jobbeskrivelser for håndverkere.

Basert på kundens svar, lag en komplett, strukturert jobbeskrivelse som 
inneholder all relevant informasjon.

Format:
- Tydelig overskrift
- Strukturert med seksjoner
- Punktliste der relevant
- Profesjonell tone
- All viktig informasjon inkludert

Kategori: ${category}
`;

  const userPrompt = `
Initial beskrivelse: "${initialDescription}"

Spørsmål stilt: 
${questions}

Kundens svar:
${answers}

Lag en komplett jobbeskrivelse:
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.5,
    max_tokens: 1000,
  });

  return response.choices[0].message.content;
}
```

**Backend route:**

```javascript
// I /supabase/functions/server/index.tsx

import { generateJobQuestions, generateFinalJobDescription } from './ai-assistant.tsx';

// Generer spørsmål basert på initial beskrivelse
app.post('/make-server-8d200dba/ai/generate-questions', async (c) => {
  const { description, category } = await c.req.json();
  
  try {
    const questions = await generateJobQuestions(description, category);
    return c.json({ success: true, questions });
  } catch (error) {
    console.error('AI error:', error);
    return c.json({ success: false, error: 'Kunne ikke generere spørsmål' }, 500);
  }
});

// Generer final jobbeskrivelse basert på svar
app.post('/make-server-8d200dba/ai/generate-description', async (c) => {
  const { initialDescription, questions, answers, category } = await c.req.json();
  
  try {
    const description = await generateFinalJobDescription(
      initialDescription,
      questions,
      answers,
      category
    );
    return c.json({ success: true, description });
  } catch (error) {
    console.error('AI error:', error);
    return c.json({ success: false, error: 'Kunne ikke generere beskrivelse' }, 500);
  }
});
```

---

### **Metode 2: Predefinerte spørsmål (billigere)** 💰

**Fordeler:**
- ✅ Ingen API-kostnad
- ✅ Raskere respons
- ✅ Full kontroll

**Ulemper:**
- ❌ Mindre fleksibelt
- ❌ Krever manuell oppdatering

**Implementasjon:**

```javascript
// /supabase/functions/server/job-questions.tsx

export const jobQuestions = {
  'Baderomsrenovering': [
    {
      id: 'size',
      question: 'Hvor stort er badet?',
      type: 'text',
      placeholder: 'F.eks. 6 kvm',
      required: true
    },
    {
      id: 'scope',
      question: 'Hva ønsker du å bytte ut?',
      type: 'checkbox',
      options: [
        'Fliser (gulv)',
        'Fliser (vegger)',
        'Servant og toalett',
        'Dusjkabinett',
        'Badekar',
        'Varmekabler',
        'Ventilasjon',
        'Belysning'
      ],
      required: true
    },
    {
      id: 'materials',
      question: 'Har du valgt materialer selv?',
      type: 'radio',
      options: [
        'Ja, har kjøpt alt',
        'Ja, har valgt noe',
        'Nei, håndverker leverer alt',
        'Trenger hjelp med å velge'
      ],
      required: true
    },
    {
      id: 'access',
      question: 'Hvordan er tilkomsten?',
      type: 'checkbox',
      options: [
        'Leilighet (oppgi etasje i neste spørsmål)',
        'Hus',
        'Heis tilgjengelig',
        'God tilkomst for materialer',
        'Kan plassere søppelcontainer'
      ]
    },
    {
      id: 'floor',
      question: 'Hvilken etasje? (hvis leilighet)',
      type: 'text',
      placeholder: 'F.eks. 3. etasje',
      conditionalOn: 'access',
      conditionalValue: 'Leilighet'
    },
    {
      id: 'timeline',
      question: 'Når ønsker du at arbeidet starter?',
      type: 'radio',
      options: [
        'Så snart som mulig',
        'Innen 2 uker',
        'Innen 1 måned',
        'Innen 3 måneder',
        'Fleksibel (oppgi dato i neste felt)'
      ],
      required: true
    },
    {
      id: 'startDate',
      question: 'Ønsket oppstartsdato (hvis du vet)',
      type: 'date',
      required: false
    },
    {
      id: 'alternative',
      question: 'Har du alternativt bad som kan brukes under arbeidet?',
      type: 'radio',
      options: ['Ja', 'Nei'],
      required: true
    }
  ],
  
  'Elektrisk arbeid': [
    // ... spørsmål for elektrisk arbeid
  ],
  
  'Rørleggerarbeid': [
    // ... spørsmål for rørleggerarbeid
  ],
  
  // ... flere kategorier
};

export function getQuestionsForCategory(category: string) {
  return jobQuestions[category] || [];
}
```

---

### **Metode 3: Hybrid (Beste av begge)** 🌟

**Kombinerer:**
- Predefinerte spørsmål (rask, strukturert)
- AI for å generere final beskrivelse (intelligent sammenstilling)

**Fordeler:**
- ✅ Strukturerte data (lett å søke/filtrere)
- ✅ Intelligent sammenstilling
- ✅ Moderat kostnad

---

## 🎨 UI/UX DESIGN

### **Flyt for kunde:**

**Steg 1: Initial beskrivelse**

```
┌─────────────────────────────────────────┐
│  Legg ut ny jobb                        │
├─────────────────────────────────────────┤
│                                         │
│  Kategori: [Baderomsrenovering ▼]      │
│                                         │
│  Beskriv jobben du ønsker utført:      │
│  ┌─────────────────────────────────┐   │
│  │ Vi vil pusse opp badet vårt.    │   │
│  │ Det er gammelt og trenger nytt  │   │
│  │ alt.                            │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Neste →]                              │
└─────────────────────────────────────────┘
```

**Steg 2: AI stiller spørsmål**

```
┌─────────────────────────────────────────┐
│  🤖 La meg hjelpe deg!                  │
├─────────────────────────────────────────┤
│                                         │
│  For å gi håndverkere best mulig        │
│  grunnlag for gode tilbud, trenger jeg  │
│  litt mer informasjon:                  │
│                                         │
│  1. Hvor stort er badet?                │
│  ┌─────────────────────────────────┐   │
│  │ Ca. 6 kvm                       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  2. Hva ønsker du å bytte ut?           │
│  ☑ Fliser (gulv og vegger)             │
│  ☑ Servant og toalett                  │
│  ☑ Dusjkabinett                        │
│  ☑ Varmekabler                         │
│  ☐ Ventilasjon                         │
│  ☐ Belysning                           │
│                                         │
│  3. Har du valgt materialer selv?       │
│  ◉ Ja, har valgt alt                   │
│  ○ Ja, har valgt noe                   │
│  ○ Nei, håndverker leverer alt         │
│  ○ Trenger hjelp med å velge           │
│                                         │
│  [Forrige] [Neste (3 av 8) →]          │
└─────────────────────────────────────────┘
```

**Steg 3: Forhåndsvisning**

```
┌─────────────────────────────────────────┐
│  Forhåndsvisning av jobbeskrivelse      │
├─────────────────────────────────────────┤
│                                         │
│  🤖 Basert på dine svar har jeg laget  │
│  denne jobbeskrivelsen:                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ BADEROMSRENOVERING - KOMPLETT   │   │
│  │                                 │   │
│  │ Størrelse: 6 kvm                │   │
│  │ Leilighet, 3. etasje (heis)     │   │
│  │                                 │   │
│  │ Ønsker å bytte:                 │   │
│  │ ✓ Fliser gulv og vegger (25kvm)│   │
│  │ ✓ Servant og toalett (Geberit) │   │
│  │ ✓ Dusjkabinett (90x90)         │   │
│  │ ✓ Varmekabler i gulv           │   │
│  │                                 │   │
│  │ Materialer: Kunde har valgt    │   │
│  │ fliser og sanitær. Håndverker  │   │
│  │ leverer øvrig.                 │   │
│  │                                 │   │
│  │ ... (mer)                       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Er denne beskrivelsen OK?              │
│  [Rediger] [Publiser jobb →]            │
└─────────────────────────────────────────┘
```

---

## 💡 SMARTE FUNKSJONER

### **1. Kontekstuell intelligens**

AI-en tilpasser spørsmål basert på tidligere svar:

**Eksempel:**
```
Kunde svarer: "Ja, har valgt materialer selv"

↓ AI hopper over spørsmål om materialkvalitet

AI stiller i stedet: 
"Kan du liste opp hvilke materialer du har valgt, 
 så håndverker vet hva som skal installeres?"
```

---

### **2. Automatisk deteksjon av mangler**

AI-en oppdager hvis viktig info mangler:

**Eksempel:**
```
🤖 Jeg la merke til at du nevnte "stillas", 
   men ikke hvor høyt arbeidet er.
   
   Kan du oppgi høyden? Dette påvirker pris og sikkerhet.
```

---

### **3. Estimat og forslag**

AI-en kan foreslå realistiske budsjett:

**Eksempel:**
```
🤖 Basert på jobbeskrivelsen din (6 kvm komplett 
   baderomrenovering), vil typiske kostnader ligge på:
   
   Budsjett: 80 000 - 120 000 kr
   Standard: 120 000 - 180 000 kr
   Premium: 180 000 - 250 000 kr
   
   Dette er kun et estimat. Faktisk pris avhenger av valg 
   av materialer og kompleksitet.
```

---

### **4. Bildeanalyse (Avansert)**

Hvis kunde laster opp bilder, kan AI analysere:

```javascript
// Krever GPT-4 Vision
const response = await openai.chat.completions.create({
  model: 'gpt-4-vision-preview',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'text', text: 'Beskriv dette badet og estimer størrelse og tilstand' },
        { type: 'image_url', image_url: { url: imageUrl } }
      ]
    }
  ]
});

// AI kan svare:
// "Dette ser ut som et ca. 5-6 kvm bad fra 1980-tallet.
//  Flisene er i dårlig stand med sprekkdannelser.
//  Sanitærutstyr er utdatert. Anbefaler komplett renovering."
```

---

## 📊 EKSEMPEL-IMPLEMENTASJON (Frontend)

### **React-komponent: AI Job Assistant**

```typescript
// /src/app/components/AIJobAssistant.tsx

import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface Question {
  id: string;
  question: string;
  type: 'text' | 'checkbox' | 'radio' | 'date';
  options?: string[];
  required?: boolean;
}

export function AIJobAssistant({ category }: { category: string }) {
  const [step, setStep] = useState<'initial' | 'questions' | 'preview'>('initial');
  const [initialDescription, setInitialDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [finalDescription, setFinalDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: initialDescription, category })
      });
      const data = await response.json();
      setQuestions(data.questions);
      setStep('questions');
    } catch (error) {
      console.error('Error generating questions:', error);
    }
    setLoading(false);
  };

  const generateFinalDescription = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          initialDescription,
          questions: JSON.stringify(questions),
          answers: JSON.stringify(answers),
          category
        })
      });
      const data = await response.json();
      setFinalDescription(data.description);
      setStep('preview');
    } catch (error) {
      console.error('Error generating description:', error);
    }
    setLoading(false);
  };

  if (step === 'initial') {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Beskriv jobben</h2>
        <p className="text-gray-600">
          Skriv en kort beskrivelse av hva du ønsker utført. 
          Vår AI-assistent vil deretter stille oppfølgingsspørsmål for å lage 
          en komplett jobbeskrivelse.
        </p>
        <Textarea
          placeholder="F.eks. 'Vi vil pusse opp badet vårt. Det er gammelt og trenger nytt alt.'"
          value={initialDescription}
          onChange={(e) => setInitialDescription(e.target.value)}
          rows={6}
        />
        <Button 
          onClick={generateQuestions} 
          disabled={!initialDescription.trim() || loading}
        >
          {loading ? '🤖 Analyserer...' : 'Neste →'}
        </Button>
      </div>
    );
  }

  if (step === 'questions') {
    return (
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-900">
            🤖 La meg stille noen spørsmål for å lage en god jobbeskrivelse
          </p>
        </div>

        {questions.map((q, index) => (
          <div key={q.id} className="space-y-2">
            <label className="font-medium">
              {index + 1}. {q.question}
              {q.required && <span className="text-red-500"> *</span>}
            </label>
            
            {q.type === 'text' && (
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                onChange={(e) => setAnswers({...answers, [q.id]: e.target.value})}
              />
            )}

            {q.type === 'checkbox' && (
              <div className="space-y-2">
                {q.options?.map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      onCheckedChange={(checked) => {
                        const current = answers[q.id] || [];
                        if (checked) {
                          setAnswers({...answers, [q.id]: [...current, option]});
                        } else {
                          setAnswers({...answers, [q.id]: current.filter((o: string) => o !== option)});
                        }
                      }}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {q.type === 'radio' && (
              <RadioGroup
                onValueChange={(value) => setAnswers({...answers, [q.id]: value})}
              >
                {q.options?.map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} id={option} />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setStep('initial')}>
            ← Tilbake
          </Button>
          <Button onClick={generateFinalDescription} disabled={loading}>
            {loading ? '🤖 Genererer beskrivelse...' : 'Generer beskrivelse →'}
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'preview') {
    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-900">
            🤖 Basert på dine svar har jeg laget denne jobbeskrivelsen:
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <pre className="whitespace-pre-wrap font-sans">{finalDescription}</pre>
        </div>

        <p className="text-sm text-gray-600">
          Du kan redigere beskrivelsen før du publiserer jobben.
        </p>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setStep('questions')}>
            ← Endre svar
          </Button>
          <Button onClick={() => {
            // Lagre og publiser jobb
            console.log('Publiser med beskrivelse:', finalDescription);
          }}>
            Publiser jobb 🚀
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
```

---

## 💰 KOSTNADSESTIMATER

### **OpenAI GPT-4:**

**Per jobbeskrivelse:**
- Generer spørsmål: ~500 tokens = 0.01 USD
- Generer beskrivelse: ~1000 tokens = 0.03 USD
- **Total:** ~0.04 USD ≈ **0.40 kr**

**1000 jobbeskrivelser/måned:** ~400 kr

**10 000 jobbeskrivelser/måned:** ~4 000 kr

→ Meget rimelig i forhold til verdien!

---

### **Alternativ: Claude 3.5 Sonnet (Anthropic):**

**Lignende priser, ofte bedre på norsk!**

---

## 🎁 BONUSFUNKSJONER

### **1. Automatisk kategorisering**

AI kan foreslå riktig kategori:

```
Kunde skriver: "Må bytte en stikkontakt"

🤖 Dette høres ut som "Elektrisk arbeid". 
   Skal jeg endre kategori? [Ja] [Nei]
```

---

### **2. Oppdagelse av flere jobber**

```
Kunde skriver: "Renovere bad og installere ny belysning"

🤖 Jeg la merke til at du nevner to typer arbeid:
   - Baderomsrenovering (rørlegger/flislegger)
   - Belysning (elektriker)
   
   Vil du opprette to separate jobber for bedre tilbud?
   [Ja, del opp] [Nei, hold samlet]
```

---

### **3. Automatisk materialberegning**

```
Kunde svarer: "6 kvm bad, fliser gulv og vegger"

🤖 Estimert materialebehov:
   - Fliser gulv: 6 kvm
   - Fliser vegger: ca. 19 kvm (2.5m høyde, 4 vegger)
   - Totalt: ca. 25 kvm fliser
   
   Dette er kun et estimat. Håndverker vil beregne nøyaktig.
```

---

### **4. Lær av data**

Over tid kan AI lære av:
- Hvilke jobber får flest tilbud?
- Hvilke jobbeskrivelser fører til godkjente jobber?
- Hvilke spørsmål er mest verdifulle?

→ Kontinuerlig forbedring!

---

## ✅ IMPLEMENTASJONSPLAN

### **Fase 1: MVP (Uke 1-2)**

- [ ] Sett opp OpenAI API-nøkkel
- [ ] Lag backend-endepunkter (`/ai/generate-questions`, `/ai/generate-description`)
- [ ] Lag enkel frontend-komponent
- [ ] Test med 1-2 kategorier (Baderomsrenovering, Elektrisk arbeid)
- [ ] Intern testing

**Estimert tid:** 10-15 timer

---

### **Fase 2: Utvidelse (Uke 3-4)**

- [ ] Legg til flere kategorier
- [ ] Forbedre prompts basert på testing
- [ ] Legg til bildeanalyse (valgfritt)
- [ ] Legg til budsjett-estimater
- [ ] Test med testpilotene

**Estimert tid:** 10-15 timer

---

### **Fase 3: Optimalisering (Måned 2)**

- [ ] Analyser brukerdata
- [ ] Forbedre spørsmål basert på feedback
- [ ] Implementer "lær av data"-funksjoner
- [ ] A/B-test forskjellige prompts
- [ ] Optimaliser kostnader

**Estimert tid:** 5-10 timer/måned

---

## 📊 SUKSESS-METRIKKER

**Måle om AI-assistenten fungerer:**

- ✅ **Fullføringsrate:** % av kunder som fullfører AI-flyten
  - Mål: >80%

- ✅ **Tilbudsrate:** % av jobber med AI-beskrivelse som får tilbud
  - Mål: >90% (vs. <70% uten AI)

- ✅ **Gjennomsnittlig antall spørsmål fra håndverkere:**
  - Mål: <2 spørsmål per jobb (vs. >5 uten AI)

- ✅ **Tid til første tilbud:**
  - Mål: <12 timer (vs. >24 timer uten AI)

- ✅ **Godkjenningsrate:**
  - Mål: >30% av tilbud godkjennes (vs. <20% uten AI)

---

## 🎉 OPPSUMMERING

**AI Jobbassistent gir:**

✅ **Bedre jobbeskrivelser** → Mer info til håndverkere
✅ **Færre spørsmål** → Raskere prosess
✅ **Bedre tilbud** → Håndverkere kan kalkulere nøyaktig
✅ **Høyere konvertering** → Flere jobber gjennomføres
✅ **Konkurransefortrinn** → Ingen andre har dette!
✅ **Lave kostnader** → ~0.40 kr per jobbeskrivelse

**ROI:**
- Kostnad: 400 kr/måned (1000 jobber)
- Verdi: Høyere konvertering = flere jobber = mer omsetning
- **Breakeven:** Hvis 1-2 ekstra jobber godkjennes per måned!

---

**Skal jeg implementere dette? 🚀**

**Ja?** → Jeg lager koden for deg nå! ✅

---

*AI Jobbassistent-guide for Håndtverkeren - Mars 2026* 🤖
