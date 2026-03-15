// Cross-Trade Detector
// Detects when a job requires multiple trades and generates secondary job requests

export interface SecondaryJob {
  category: string;
  title: string;
  description: string;
  reason: string;
  estimatedCost?: { min: number; max: number };
}

/**
 * Analyzes job answers and detects if other trades are needed
 */
export function detectSecondaryTrades(
  primaryCategory: string,
  answers: Record<string, any>
): SecondaryJob[] {
  const secondaryJobs: SecondaryJob[] = [];

  // ==========================================
  // VARMEPUMPE → ELEKTRIKER
  // ==========================================
  if (primaryCategory === 'varmepumpe') {
    const needsIndoorOutlet = answers.groundedOutletIndoor === 'Nei, må trekkes ny';
    const needsOutdoorOutlet = answers.groundedOutletOutdoor === 'Nei, må trekkes ny';
    const needsCapacityCheck = answers.electrical === 'Nei' || answers.electrical === 'Vet ikke';
    
    if (needsIndoorOutlet || needsOutdoorOutlet || needsCapacityCheck) {
      let description = 'ELEKTRISK ARBEID FOR VARMEPUMPE-INSTALLASJON\n\n';
      description += 'Dette elektriske arbeidet må utføres før varmepumpen kan installeres.\n\n';
      description += 'NØDVENDIG ARBEID:\n';
      
      if (needsIndoorOutlet) {
        description += '• Installere ny jordet stikkontakt for innedel (innendørs)\n';
      }
      
      if (needsOutdoorOutlet) {
        description += '• Installere ny jordet stikkontakt for utedel (utendørs)\n';
      }
      
      if (needsCapacityCheck) {
        description += '• Sjekke strømkapasitet i sikringskap\n';
        description += '• Eventuelt oppgradere sikring (typisk til 16A)\n';
      }
      
      description += '\nVARMEPUMPE-DETALJER:\n';
      description += `• Type: ${answers.pumpType || 'Ikke oppgitt'}\n`;
      description += `• Merke/modell: ${answers.brand || 'Ikke valgt ennå'}\n`;
      description += `• Oppvarmingsareal: ${answers.sqm || 'Ikke oppgitt'} kvm\n`;
      
      if (answers.distance) {
        description += `• Avstand innedel-utedel: ${answers.distance}\n`;
      }
      
      description += '\nTIDSLINJE:\n';
      description += 'Dette arbeidet må være ferdig FØR varmepumpe-installasjonen.\n';
      
      // Estimate cost
      let minCost = 0;
      let maxCost = 0;
      
      if (needsIndoorOutlet) {
        minCost += 2000;
        maxCost += 4000;
      }
      
      if (needsOutdoorOutlet) {
        minCost += 3000;
        maxCost += 6000;
      }
      
      if (needsCapacityCheck) {
        minCost += 2000;
        maxCost += 8000;
      }
      
      secondaryJobs.push({
        category: 'elektrisk',
        title: 'Elektrisk arbeid for varmepumpe-installasjon',
        description,
        reason: 'Varmepumpen krever elektrisk arbeid før installasjon',
        estimatedCost: { min: minCost, max: maxCost }
      });
    }
  }

  // ==========================================
  // BADEROMSRENOVERING → ELEKTRIKER
  // ==========================================
  if (primaryCategory === 'Baderomsrenovering') {
    const scope = answers.scope || [];
    const needsElectrical = scope.includes('Belysning') || 
                           scope.includes('Ventilasjon') ||
                           scope.includes('Varmekabler i gulv');
    
    if (needsElectrical) {
      let description = 'ELEKTRISK ARBEID FOR BADEROMSRENOVERING\n\n';
      description += 'Dette elektriske arbeidet er nødvendig for baderomsrenoveringen.\n\n';
      description += 'NØDVENDIG ARBEID:\n';
      
      if (scope.includes('Belysning')) {
        description += '• Installere ny belysning (taklampe, spots, speilbelysning)\n';
      }
      
      if (scope.includes('Ventilasjon')) {
        description += '• Installere/koble ventilasjon\n';
      }
      
      if (scope.includes('Varmekabler i gulv')) {
        description += '• Legge varmekabler i gulv\n';
        description += '• Installere termostat\n';
      }
      
      description += '\nBADEROMS-DETALJER:\n';
      description += `• Størrelse: ${answers.size || 'Ikke oppgitt'} kvm\n`;
      description += `• Type bolig: ${answers.propertyType || 'Ikke oppgitt'}\n`;
      
      secondaryJobs.push({
        category: 'elektrisk',
        title: 'Elektrisk arbeid for baderomsrenovering',
        description,
        reason: 'Baderomsrenoveringen krever elektrisk arbeid',
        estimatedCost: { min: 8000, max: 25000 }
      });
    }
  }

  // ==========================================
  // BADEROMSRENOVERING → RØRLEGGER
  // ==========================================
  if (primaryCategory === 'Baderomsrenovering') {
    const scope = answers.scope || [];
    const needsPlumber = scope.includes('Servant og toalett') || 
                        scope.includes('Dusjkabinett') ||
                        scope.includes('Badekar');
    
    if (needsPlumber) {
      let description = 'RØRLEGGERARBEID FOR BADEROMSRENOVERING\n\n';
      description += 'Dette rørleggerarbeidet er nødvendig for baderomsrenoveringen.\n\n';
      description += 'NØDVENDIG ARBEID:\n';
      
      if (scope.includes('Servant og toalett')) {
        description += '• Installere nytt servant og toalett\n';
        description += '• Koble til vann og avløp\n';
      }
      
      if (scope.includes('Dusjkabinett')) {
        description += '• Installere dusjkabinett\n';
        description += '• Membran og sluk\n';
      }
      
      if (scope.includes('Badekar')) {
        description += '• Installere badekar\n';
        description += '• Koble til vann og avløp\n';
      }
      
      description += '\nBADEROMS-DETALJER:\n';
      description += `• Størrelse: ${answers.size || 'Ikke oppgitt'} kvm\n`;
      description += `• Type bolig: ${answers.propertyType || 'Ikke oppgitt'}\n`;
      
      secondaryJobs.push({
        category: 'ror',
        title: 'Rørleggerarbeid for baderomsrenovering',
        description,
        reason: 'Baderomsrenoveringen krever rørleggerarbeid',
        estimatedCost: { min: 15000, max: 40000 }
      });
    }
  }

  // ==========================================
  // KLEDNING → MALER
  // ==========================================
  if (primaryCategory === 'trevare' && answers.workType === 'Kledning/panel (vegg/fasade)') {
    const needsPainting = answers.surfaceTreatment === 'Maling (oppgi farge)' ||
                         answers.surfaceTreatment === 'Beis/Lasur';
    
    if (needsPainting) {
      let description = 'MALERARBEID FOR KLEDNING\n\n';
      description += 'Overflatebehandling av ny kledning.\n\n';
      description += 'ARBEID:\n';
      
      if (answers.surfaceTreatment === 'Maling (oppgi farge)') {
        description += `• Maling av kledning (farge: ${answers.color || 'Ikke oppgitt'})\n`;
      } else {
        description += '• Beis/lasur av kledning\n';
      }
      
      description += '• Grunning (primer)\n';
      description += '• 2-3 strøk (avhengig av kvalitet)\n';
      
      description += '\nKLEDNINGS-DETALJER:\n';
      description += `• Type: ${answers.claddingType || 'Ikke oppgitt'}\n`;
      description += `• Størrelse: ${answers.wallSize || 'Ikke oppgitt'}\n`;
      description += `• Lokasjon: ${answers.location || 'Ikke oppgitt'}\n`;
      
      // Parse wall size for cost estimation
      let minCost = 5000;
      let maxCost = 15000;
      
      const sizeMatch = answers.wallSize?.match(/(\d+)\s*m?\s*x\s*(\d+)\s*m?/i);
      if (sizeMatch) {
        const area = parseFloat(sizeMatch[1]) * parseFloat(sizeMatch[2]);
        minCost = area * 100;  // 100 kr/kvm minimum
        maxCost = area * 250;  // 250 kr/kvm maximum
      }
      
      secondaryJobs.push({
        category: 'maling',
        title: 'Maling av ny kledning',
        description,
        reason: 'Kledningen trenger overflatebehandling',
        estimatedCost: { min: minCost, max: maxCost }
      });
    }
  }

  // ==========================================
  // GARASJEPORT → ELEKTRIKER
  // ==========================================
  if (primaryCategory === 'garasjeport') {
    const needsAutomation = answers.automation === 'Ja';
    
    if (needsAutomation) {
      let description = 'ELEKTRISK ARBEID FOR GARASJEPORT-MOTOR\n\n';
      description += 'Installasjon av strøm for garasjeport-motor.\n\n';
      description += 'ARBEID:\n';
      description += '• Trekke strøm til motor\n';
      description += '• Installere jordet stikkontakt\n';
      description += '• Eventuelt installere bryter/kontrollpanel\n';
      
      description += '\nGARASJEPORT-DETALJER:\n';
      description += `• Størrelse: ${answers.size || 'Ikke oppgitt'}\n`;
      description += `• Type port: ${answers.portType || 'Ikke oppgitt'}\n`;
      
      secondaryJobs.push({
        category: 'elektrisk',
        title: 'Elektrisk arbeid for garasjeport-motor',
        description,
        reason: 'Garasjeport-motor krever strømtilkobling',
        estimatedCost: { min: 2500, max: 6000 }
      });
    }
  }

  return secondaryJobs;
}

/**
 * Generates a user-friendly message asking if customer wants secondary job created
 */
export function generateSecondaryJobPrompt(jobs: SecondaryJob[]): string {
  if (jobs.length === 0) return '';
  
  if (jobs.length === 1) {
    const job = jobs[0];
    const categoryName = getCategoryDisplayName(job.category);
    const costRange = job.estimatedCost 
      ? `(estimert kostnad: ${job.estimatedCost.min.toLocaleString('no-NO')} - ${job.estimatedCost.max.toLocaleString('no-NO')} kr)`
      : '';
    
    return `⚠️ VIKTIG: Denne jobben krever også arbeid fra ${categoryName}!\n\n` +
           `${job.reason} ${costRange}\n\n` +
           `Ønsker du at vi genererer et separat oppdrag for ${categoryName}?`;
  }
  
  // Multiple jobs
  let message = `⚠️ VIKTIG: Denne jobben krever arbeid fra flere faggrupper!\n\n`;
  
  jobs.forEach((job, index) => {
    const categoryName = getCategoryDisplayName(job.category);
    const costRange = job.estimatedCost 
      ? `(${job.estimatedCost.min.toLocaleString('no-NO')} - ${job.estimatedCost.max.toLocaleString('no-NO')} kr)`
      : '';
    
    message += `${index + 1}. ${categoryName} ${costRange}\n`;
    message += `   ${job.reason}\n\n`;
  });
  
  message += `Ønsker du at vi genererer separate oppdrag for disse faggruppene?`;
  
  return message;
}

/**
 * Get display name for category
 */
function getCategoryDisplayName(category: string): string {
  const names: Record<string, string> = {
    'elektrisk': 'en elektriker',
    'ror': 'en rørlegger',
    'maling': 'en maler',
    'trevare': 'en tømrer/snekker',
    'varmepumpe': 'en varmepumpe-installatør',
    'Baderomsrenovering': 'baderomsrenovering',
    'entreprenor': 'en entreprenør',
    'garasjeport': 'garasjeport-installatør'
  };
  
  return names[category] || category;
}
