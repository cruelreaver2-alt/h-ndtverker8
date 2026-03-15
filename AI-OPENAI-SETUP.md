# 🔑 OpenAI API Setup - AI Jobbassistent

**Guide for å sette opp OpenAI API-nøkkel for AI-funksjonen i Håndtverkeren.**

---

## ✅ **HVA DU FÅR:**

AI-assistenten stiller intelligente oppfølgingsspørsmål basert på kundens innledende beskrivelse, og genererer profesjonelle jobbeskrivelser som gir håndverkere all info de trenger.

**Fordeler:**
- ✅ Bedre jobbeskrivelser (mer komplett info)
- ✅ Færre spørsmål fra håndverkere (raskere prosess)
- ✅ Bedre tilbud (håndverkere kan kalkulere nøyaktig)
- ✅ Høyere konverteringsrate (flere jobber godkjennes)

**Kostnad:** ~0.40 kr per jobbeskrivelse (~400 kr/måned for 1000 jobber)

---

## 🚀 **RASK OPPSETT (10 minutter)**

### **Steg 1: Opprett OpenAI-konto**

1. **Gå til:** https://platform.openai.com/signup
2. **Registrer deg** med e-post eller Google
3. **Bekreft e-posten** din
4. **Logg inn**

---

### **Steg 2: Legg til betalingsmetode**

**VIKTIG:** OpenAI krever betalingsmetode før API kan brukes.

1. **Gå til:** https://platform.openai.com/account/billing/overview
2. **Klikk:** "Add payment method"
3. **Legg til:** Kredittkort eller debetkort
4. **Sett budsjett** (anbefalt):
   - Klikk "Usage limits"
   - Sett "Hard limit": 100 kr/måned (justeres etter behov)
   - Dette beskytter mot uventede kostnader

---

### **Steg 3: Opprett API-nøkkel**

1. **Gå til:** https://platform.openai.com/api-keys
2. **Klikk:** "Create new secret key"
3. **Navn:** "Handtverkeren - Production" (eller valgfritt navn)
4. **Permissions:** "All" (standard)
5. **Klikk:** "Create secret key"
6. **VIKTIG:** Kopier nøkkelen NÅ! Den vises kun én gang!
   ```
   sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
7. **Lagre** den et trygt sted (f.eks. passordbehandler)

---

### **Steg 4: Legg til nøkkel i Supabase**

**I Supabase Dashboard:**

1. **Gå til:** https://supabase.com/dashboard
2. **Velg prosjekt:** Ditt Håndterkeren-prosjekt
3. **Gå til:** Settings (⚙️ nederst til venstre)
4. **Velg:** "Edge Functions"
5. **Scroll ned til:** "Secrets"
6. **Klikk:** "New secret"
7. **Name:** `OPENAI_API_KEY`
8. **Value:** Lim inn API-nøkkelen din (sk-proj-...)
9. **Klikk:** "Save"

**Ferdig! AI-funksjonen er nå aktiv! ✅**

---

## 💰 **KOSTNADER OG BUDSJETT**

### **OpenAI GPT-4 Pricing (Mars 2026):**

- **Input:** $0.03 per 1K tokens
- **Output:** $0.06 per 1K tokens

### **Per jobbeskrivelse:**

**Estimat:**
- Input: ~500 tokens (spørsmål + svar)
- Output: ~500 tokens (generert beskrivelse)
- **Total kostnad:** ~$0.045 ≈ **0.45 kr**

### **Månedlige kostnader (estimat):**

| Antall jobber | Kostnad/måned |
|---------------|---------------|
| 100 jobber | 45 kr |
| 500 jobber | 225 kr |
| 1 000 jobber | 450 kr |
| 5 000 jobber | 2 250 kr |

**ROI:** Hvis AI øker konvertering med bare 5%, betaler den seg selv mange ganger over!

---

## 🔒 **SIKKERHET OG BESTE PRAKSIS**

### **✅ GJØR:**

1. **Sett budsjettsgrenser:**
   - OpenAI Dashboard → Billing → Usage limits
   - Sett "Hard limit" (f.eks. 100 kr/måned)

2. **Overvåk bruk:**
   - Sjekk https://platform.openai.com/usage månedlig
   - Sett opp e-postvarsler for høy bruk

3. **Roter nøkler periodisk:**
   - Lag ny nøkkel hver 3-6 måneder
   - Slett gamle nøkler

4. **Bruk miljøvariabler:**
   - ALDRI hardkode API-nøkkel i kode
   - Alltid bruk `Deno.env.get('OPENAI_API_KEY')`

### **❌ IKKE GJØR:**

1. **Ikke del nøkkelen:**
   - Hold den hemmelig
   - Ikke commit til Git

2. **Ikke bruk i frontend:**
   - Kun i backend (Supabase Edge Functions)
   - Aldri send til klienten

3. **Ikke ignorer kostnader:**
   - Overvåk bruk månedlig
   - Sett varsler

---

## 🧪 **TEST AT DET FUNGERER**

### **1. Test i nettleseren:**

1. Gå til https://fagfolk6.vercel.app
2. Klikk "Legg ut jobb"
3. Velg kategori (f.eks. "Rørlegger")
4. Fyll inn tittel og beskrivelse
5. **Klikk:** "🤖 Bruk AI-assistent"

**Forventet resultat:**
- AI stiller oppfølgingsspørsmål
- Du svarer på 6-10 spørsmål
- AI genererer komplett jobbeskrivelse
- ✅ Det fungerer!

### **2. Test i backend (valgfritt):**

**Sjekk backend-logger:**

1. Gå til Supabase Dashboard
2. Velg "Edge Functions" → "Logs"
3. Se etter API-kall til OpenAI
4. Ingen feil = det fungerer! ✅

---

## ⚠️ **FEILSØKING**

### **Problem: "AI-assistent laster ikke spørsmål"**

**Årsak:** API-nøkkel ikke satt opp eller feil.

**Løsning:**
1. Sjekk at `OPENAI_API_KEY` er lagt til i Supabase Secrets
2. Verifiser at nøkkelen starter med `sk-proj-` eller `sk-`
3. Prøv å lage en ny nøkkel
4. Restart Edge Functions (redeploy)

---

### **Problem: "AI genererer ingen beskrivelse"**

**Årsak:** Ingen kredit på OpenAI-kontoen.

**Løsning:**
1. Gå til https://platform.openai.com/account/billing
2. Sjekk "Credit balance"
3. Legg til betalingsmetode hvis mangler
4. Øk budsjettgrense hvis nådd

---

### **Problem: "Kode-feil i konsollen"**

**Årsak:** Ugyldig API-nøkkel format.

**Løsning:**
1. Sjekk at nøkkelen er kopiert helt (ingen ekstra mellomrom)
2. Opprett ny nøkkel i OpenAI Dashboard
3. Erstatt i Supabase Secrets

---

## 🎛️ **AVANSERTE INNSTILLINGER**

### **Juster AI-temperatur:**

I `/supabase/functions/server/ai-job-assistant.tsx`:

```typescript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  // ...
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [...],
    temperature: 0.5, // <--- Juster her (0.0 - 1.0)
    max_tokens: 1000,
  })
});
```

**Temperatur:**
- `0.0-0.3`: Meget konsistent, men mindre kreativ
- `0.4-0.7`: Balansert (anbefalt: 0.5)
- `0.8-1.0`: Mer kreativ, men mindre konsistent

---

### **Bytt modell:**

**Tilgjengelige modeller:**
- `gpt-4`: Best kvalitet, men dyrere (~0.45 kr/beskrivelse)
- `gpt-4-turbo`: Raskere og billigere (~0.30 kr/beskrivelse)
- `gpt-3.5-turbo`: Billigst (~0.05 kr/beskrivelse), men lavere kvalitet

**Endre i koden:**
```typescript
model: 'gpt-4-turbo', // <--- Bytt her
```

**Anbefaling:** Start med `gpt-4`, bytt til `gpt-4-turbo` når du skalerer.

---

## 📊 **OVERVÅKING OG ANALYSE**

### **Se bruksstatistikk:**

1. **OpenAI Dashboard:**
   - https://platform.openai.com/usage
   - Se daglig/månedlig bruk
   - Kostnader per modell

2. **Supabase Logs:**
   - Edge Functions → Logs
   - Filtrer på "ai-assistant"
   - Se antall AI-kall

3. **Egne metrics (valgfritt):**
   - Logg hver AI-generering i KV store
   - Analyser konverteringsrate (AI vs. manuell)

---

## ✅ **SJEKKLISTE**

**Før du går live:**

- [ ] OpenAI-konto opprettet
- [ ] Betalingsmetode lagt til
- [ ] Budsjettsgrense satt (anbefalt: 100 kr/måned)
- [ ] API-nøkkel opprettet
- [ ] API-nøkkel lagt til i Supabase Secrets
- [ ] Testet AI-assistent i nettleseren
- [ ] Verifisert at beskrivelse genereres
- [ ] Satt opp bruksvarsler i OpenAI

**Alt ferdig? Gratulerer! AI-funksjonen er live! 🎉**

---

## 💡 **TIPS FOR Å SPARE PENGER**

### **1. Bruk fallback til predefinerte spørsmål:**

Hvis OpenAI API feiler, bruker systemet automatisk predefinerte spørsmål (ingen AI-kostnad).

→ Dette er allerede implementert! ✅

### **2. Cache vanlige beskrivelser:**

For repeterende jobber (f.eks. "Bytte stikkontakt"), cache AI-genererte beskrivelser.

**Implementasjon (valgfritt):**
```typescript
// Sjekk om lignende jobb finnes i cache
const cacheKey = `ai-description:${category}:${hashOfAnswers}`;
const cached = await kv.get(cacheKey);
if (cached) {
  return cached.description; // Gratis!
}

// Generer med AI
const description = await generateWithAI(...);

// Lagre i cache (30 dager)
await kv.set(cacheKey, { description }, { expiresIn: 30 * 24 * 60 * 60 });
```

→ Kan redusere kostnader med 30-50%!

### **3. Bruk GPT-3.5 for enkle jobber:**

Detekter kompleksitet, bruk billigere modell for enkle jobber.

**Eksempel:**
```typescript
const isComplex = answers.scope?.length > 5 || description.length > 500;
const model = isComplex ? 'gpt-4' : 'gpt-3.5-turbo';
```

---

## 📞 **SUPPORT**

### **OpenAI Support:**
- **Dokumentasjon:** https://platform.openai.com/docs
- **Community:** https://community.openai.com
- **Status:** https://status.openai.com

### **Håndtverkeren Support:**
- Hvis du har problemer med implementasjonen, sjekk `/AI-JOBBASSISTENT-GUIDE.md`

---

## 🎉 **NESTE STEG**

**Etter oppsett:**

1. **Test grundig:**
   - Prøv alle kategorier
   - Test med ulike beskrivelser
   - Verifiser kvalitet på AI-genererte beskrivelser

2. **Overvåk kostnader:**
   - Sjekk OpenAI Usage første uke
   - Juster budsjettsgrense om nødvendig

3. **Samle feedback:**
   - Be kunder om tilbakemelding på AI-beskrivelser
   - Iterer på prompts basert på feedback

4. **Optimaliser:**
   - Test GPT-3.5 vs GPT-4
   - Implementer caching for vanlige jobber
   - Juster temperature for bedre resultater

---

**Gratulerer! Du har nå full AI-funksjonalitet! 🚀**

**Total implementeringstid:** 10-15 minutter
**Månedlig kostnad:** ~400 kr for 1000 jobber
**ROI:** 10-20x (høyere konvertering + bedre brukeropplevelse)

**Lykke til! 💪**

---

*OpenAI API Setup Guide for Håndtverkeren - Mars 2026* 🤖
