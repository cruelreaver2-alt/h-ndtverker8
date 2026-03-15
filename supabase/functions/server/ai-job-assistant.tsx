// AI Job Assistant - OpenAI Integration
// Generates intelligent follow-up questions and final job descriptions

interface Question {
  id: string;
  question: string;
  type: 'text' | 'checkbox' | 'radio' | 'number' | 'select';
  options?: string[];
  required?: boolean;
  placeholder?: string;
  conditionalOn?: string;
  conditionalValue?: string;
}

// ==========================================
// PREDEFINED QUESTIONS PER CATEGORY
// ==========================================

export const jobQuestions: Record<string, Question[]> = {
  'Baderomsrenovering': [
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
    },
    {
      id: 'size',
      question: 'Hvor stort er badet (ca. antall kvm)?',
      type: 'number',
      placeholder: 'F.eks. 6',
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
        'Varmekabler i gulv',
        'Ventilasjon',
        'Belysning',
        'Maling'
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
      id: 'materialDetails',
      question: 'Hvilke materialer har du valgt? (valgfritt)',
      type: 'text',
      placeholder: 'F.eks. Geberit servant, Porcelanosa fliser...',
      conditionalOn: 'materials',
      conditionalValue: 'Ja, har valgt noe'
    },
    {
      id: 'propertyType',
      question: 'Bor du i leilighet eller hus?',
      type: 'radio',
      options: ['Leilighet', 'Hus'],
      required: true
    },
    {
      id: 'floor',
      question: 'Hvilken etasje?',
      type: 'number',
      placeholder: 'F.eks. 3',
      conditionalOn: 'propertyType',
      conditionalValue: 'Leilighet'
    },
    {
      id: 'access',
      question: 'Tilkomst',
      type: 'checkbox',
      options: [
        'Heis tilgjengelig',
        'God tilkomst for materialer',
        'Kan plassere søppelcontainer',
        'Parkering tilgjengelig for håndverker'
      ]
    },
    {
      id: 'alternative',
      question: 'Har du alternativt bad som kan brukes under arbeidet?',
      type: 'radio',
      options: ['Ja', 'Nei'],
      required: true
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
        'Fleksibel'
      ],
      required: true
    }
  ],

  'ror': [ // Rørleggerarbeid
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 10 000 kr',
        '10 000 - 30 000 kr',
        '30 000 - 50 000 kr',
        '50 000 - 100 000 kr',
        'Over 100 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'workType',
      question: 'Hva skal gjøres?',
      type: 'radio',
      options: [
        'Lekkasje (akutt)',
        'Installere nytt',
        'Bytte gammelt',
        'Oppgradering',
        'Vedlikehold',
        'Annet'
      ],
      required: true
    },
    {
      id: 'specificJob',
      question: 'Hva skal installeres/byttes?',
      type: 'checkbox',
      options: [
        'Servant/toalett',
        'Dusj/badekar',
        'Varmtvannstank',
        'Vannrør',
        'Avløpsrør',
        'Varmekabler',
        'Annet'
      ],
      required: true
    },
    {
      id: 'age',
      question: 'Hvor gammelt er anlegget (ca. år)?',
      type: 'number',
      placeholder: 'F.eks. 30'
    },
    {
      id: 'materials',
      question: 'Har du kjøpt utstyr?',
      type: 'radio',
      options: [
        'Ja, har alt',
        'Ja, har noe',
        'Nei, håndverker leverer',
        'Usikker, trenger råd'
      ],
      required: true
    },
    {
      id: 'location',
      question: 'Hvor er arbeidet?',
      type: 'checkbox',
      options: [
        'Bad',
        'Kjøkken',
        'Kjeller',
        'Vaskerom',
        'Utvendig',
        'Annet'
      ]
    },
    {
      id: 'access',
      question: 'Tilkomst',
      type: 'checkbox',
      options: [
        'Lett tilgang til rør',
        'Må åpne gulv/vegger',
        'God adkomst for materialer',
        'Parkering tilgjengelig'
      ]
    },
    {
      id: 'urgency',
      question: 'Hastegrad',
      type: 'radio',
      options: [
        'Akutt (innen 24 timer)',
        'Haster (innen uke)',
        'Normal (innen måned)',
        'Fleksibel'
      ],
      required: true
    },
    {
      id: 'waterOff',
      question: 'Kan vannet være avstengt under arbeid?',
      type: 'radio',
      options: ['Ja', 'Nei, må ha vann'],
      required: true
    }
  ],

  'elektrisk': [ // Elektrisk arbeid
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 5 000 kr',
        '5 000 - 15 000 kr',
        '15 000 - 30 000 kr',
        '30 000 - 50 000 kr',
        'Over 50 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'workType',
      question: 'Hva skal gjøres?',
      type: 'checkbox',
      options: [
        'Installere nye uttak/brytere',
        'Oppgradering av sikringskap',
        'Installere belysning',
        'Feilsøking',
        'Komplett ny installasjon',
        'Annet'
      ],
      required: true
    },
    {
      id: 'quantity',
      question: 'Hvor mange uttak/brytere skal installeres?',
      type: 'number',
      placeholder: 'F.eks. 8'
    },
    {
      id: 'rooms',
      question: 'Hvor mange rom berøres?',
      type: 'number',
      placeholder: 'F.eks. 2'
    },
    {
      id: 'grooving',
      question: 'Skal det graves/spores i vegger?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke'],
      required: true
    },
    {
      id: 'age',
      question: 'Hvor gammelt er anlegget?',
      type: 'select',
      options: [
        'Ukjent',
        'Under 10 år',
        '10-20 år',
        '20-40 år',
        'Over 40 år'
      ]
    },
    {
      id: 'grounded',
      question: 'Er anlegget jordet?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    },
    {
      id: 'materials',
      question: 'Har du kjøpt utstyr selv?',
      type: 'radio',
      options: [
        'Ja, har alt',
        'Ja, har noe',
        'Nei, håndverker leverer',
        'Trenger råd'
      ]
    },
    {
      id: 'access',
      question: 'Tilkomst',
      type: 'checkbox',
      options: [
        'Lett tilgang til sikringskap',
        'Møbler kan flyttes',
        'Arbeid i trange rom/loft',
        'Parkering tilgjengelig'
      ]
    },
    {
      id: 'powerOff',
      question: 'Kan strømmen være av i perioder?',
      type: 'radio',
      options: ['Ja', 'Nei, må ha strøm'],
      required: true
    },
    {
      id: 'approval',
      question: 'Kreves det godkjenning/ferdigattest?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    }
  ],

  'trevare': [ // Snekkerarbeid / Tømrer
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 20 000 kr',
        '20 000 - 50 000 kr',
        '50 000 - 100 000 kr',
        '100 000 - 200 000 kr',
        'Over 200 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'workType',
      question: 'Hva skal gjøres?',
      type: 'radio',
      options: [
        'Kledning/panel (vegg/fasade)',
        'Bygging (terrasse, bod, etc.)',
        'Reparasjon',
        'Installasjon (dører, vinduer)',
        'Tilpasning/endring',
        'Annet'
      ],
      required: true
    },
    {
      id: 'claddingType',
      question: 'Type kledning?',
      type: 'radio',
      options: [
        'Liggende kledning',
        'Stående kledning',
        'Begge',
        'Vet ikke / trenger råd'
      ],
      conditionalOn: 'workType',
      conditionalValue: 'Kledning/panel (vegg/fasade)'
    },
    {
      id: 'wallSize',
      question: 'Størrelse på vegg(er)?',
      type: 'text',
      placeholder: 'F.eks. 12m lang x 8m høy, eller totalt 96 kvm',
      conditionalOn: 'workType',
      conditionalValue: 'Kledning/panel (vegg/fasade)',
      required: true
    },
    {
      id: 'claddingMaterial',
      question: 'Hvilken type kledning ønsker du?',
      type: 'checkbox',
      options: [
        'Panel (furukledning)',
        'Stående bord (vertikalt)',
        'Liggende bord (horisontalt)',
        'Trepanel (treprofil)',
        'Fiber-sement (eternit)',
        'Vinyl/plast',
        'Vet ikke / trenger råd'
      ],
      conditionalOn: 'workType',
      conditionalValue: 'Kledning/panel (vegg/fasade)'
    },
    {
      id: 'removeOld',
      question: 'Skal gammel kledning fjernes først?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke'],
      conditionalOn: 'workType',
      conditionalValue: 'Kledning/panel (vegg/fasade)'
    },
    {
      id: 'surfaceTreatment',
      question: 'Overflatebehandling?',
      type: 'radio',
      options: [
        'Maling (oppgi farge)',
        'Beis/Lasur',
        'Treolje',
        'Ubehandlet',
        'Håndverker bestemmer',
        'Vet ikke'
      ],
      conditionalOn: 'workType',
      conditionalValue: 'Kledning/panel (vegg/fasade)'
    },
    {
      id: 'color',
      question: 'Hvilken farge ønsker du? (hvis maling/beis)',
      type: 'text',
      placeholder: 'F.eks. hvit, sort, rød, naturlig tre...',
      conditionalOn: 'surfaceTreatment',
      conditionalValue: 'Maling (oppgi farge)'
    },
    {
      id: 'scope',
      question: 'Omfang',
      type: 'text',
      placeholder: 'F.eks. 20 kvm terrasse, 3 dører...',
      required: true
    },
    {
      id: 'location',
      question: 'Innendørs eller utendørs?',
      type: 'radio',
      options: ['Innendørs', 'Utendørs', 'Begge'],
      required: true
    },
    {
      id: 'materials',
      question: 'Har du materialer?',
      type: 'radio',
      options: [
        'Ja, har alt',
        'Ja, har noe',
        'Nei, håndverker leverer',
        'Trenger hjelp med valg'
      ],
      required: true
    },
    {
      id: 'woodType',
      question: 'Type tre/materiale ønsket?',
      type: 'text',
      placeholder: 'F.eks. impregnert furu, eik...'
    },
    {
      id: 'drawings',
      question: 'Har du tegninger/målskisse?',
      type: 'radio',
      options: ['Ja', 'Nei'],
      required: true
    },
    {
      id: 'demolition',
      question: 'Må gammelt rives først?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    },
    {
      id: 'access',
      question: 'Tilkomst',
      type: 'checkbox',
      options: [
        'Plass til verktøy/materialer',
        'Kreves stillas',
        'Materialer kan leveres nært',
        'Parkering tilgjengelig'
      ]
    },
    {
      id: 'deadline',
      question: 'Har du en deadline?',
      type: 'radio',
      options: ['Ja, må være ferdig til bestemt dato', 'Nei, fleksibel'],
      required: true
    },
    {
      id: 'permit',
      question: 'Kreves det byggetillatelse?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    }
  ],

  'maling': [ // Malerarbeid
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 10 000 kr',
        '10 000 - 30 000 kr',
        '30 000 - 50 000 kr',
        '50 000 - 100 000 kr',
        'Over 100 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'what',
      question: 'Hva skal males?',
      type: 'checkbox',
      options: [
        'Vegger og tak',
        'Panel/listverk',
        'Dører og vinduer',
        'Fasade (utendørs)',
        'Annet'
      ],
      required: true
    },
    {
      id: 'rooms',
      question: 'Antall rom?',
      type: 'number',
      placeholder: 'F.eks. 3',
      required: true
    },
    {
      id: 'sqm',
      question: 'Total kvm vegger/tak (ca.)?',
      type: 'number',
      placeholder: 'F.eks. 50'
    },
    {
      id: 'coats',
      question: 'Hvor mange strøk?',
      type: 'radio',
      options: ['1 strøk', '2 strøk', '3 strøk', 'Vet ikke'],
      required: true
    },
    {
      id: 'prep',
      question: 'Forarbeid',
      type: 'checkbox',
      options: [
        'Må fjerne gammelt tapet/maling',
        'Kreves spartling/pussing',
        'Jeg dekker til møbler/gulv selv'
      ]
    },
    {
      id: 'paint',
      question: 'Har du valgt farge?',
      type: 'radio',
      options: ['Ja', 'Nei, trenger hjelp'],
      required: true
    },
    {
      id: 'paintType',
      question: 'Type maling ønsket?',
      type: 'radio',
      options: [
        'Matt',
        'Silkematt',
        'Blank/semiblank',
        'Vet ikke'
      ]
    },
    {
      id: 'quality',
      question: 'Kvalitet på maling?',
      type: 'radio',
      options: [
        'Budsjett',
        'Standard (f.eks. Jotun Lady)',
        'Premium',
        'Usikker'
      ]
    },
    {
      id: 'furniture',
      question: 'Må møbler flyttes?',
      type: 'radio',
      options: [
        'Ja, av maler',
        'Ja, gjør det selv',
        'Nei, rommene er tomme'
      ]
    },
    {
      id: 'scaffolding',
      question: 'Kreves det stillas? (fasademaling)',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    },
    {
      id: 'occupancy',
      question: 'Kan du bo der under arbeid?',
      type: 'radio',
      options: ['Ja', 'Nei, flytter ut'],
      required: true
    }
  ],

  'entreprenor': [ // Entreprenørarbeid
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 30 000 kr',
        '30 000 - 75 000 kr',
        '75 000 - 150 000 kr',
        '150 000 - 300 000 kr',
        'Over 300 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'workType',
      question: 'Hva skal gjøres?',
      type: 'checkbox',
      options: [
        'Graving',
        'Planering',
        'Fundamentarbeid',
        'Drenering',
        'Asfaltering',
        'Plenarbeid',
        'Annet'
      ],
      required: true
    },
    {
      id: 'scope',
      question: 'Omfang (kvm eller meter)?',
      type: 'text',
      placeholder: 'F.eks. 50 kvm, 20 meter drenering...',
      required: true
    },
    {
      id: 'access',
      question: 'Tilkomst for maskiner?',
      type: 'radio',
      options: [
        'God tilkomst, store maskiner OK',
        'Begrenset tilkomst, små maskiner',
        'Dårlig tilkomst, manuelt arbeid',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'soil',
      question: 'Type grunn? (hvis du vet)',
      type: 'radio',
      options: [
        'Jord/gress',
        'Stein/fjell',
        'Grus/sand',
        'Vet ikke'
      ]
    },
    {
      id: 'disposal',
      question: 'Hvor skal masser kjøres?',
      type: 'radio',
      options: [
        'Håndverker ordner',
        'Kan deponeres på eiendommen',
        'Må kjøres til deponi',
        'Vet ikke'
      ]
    },
    {
      id: 'season',
      question: 'Sesong-begrensninger?',
      type: 'radio',
      options: [
        'Må gjøres i tørre forhold',
        'Kan gjøres hele året',
        'Vet ikke'
      ]
    },
    {
      id: 'permit',
      question: 'Kreves det tillatelser/søknader?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke']
    }
  ],

  'garasjeport': [ // Garasjeport
    {
      id: 'desiredBudget',
      question: 'Hva er ditt ønskede budsjett for denne jobben?',
      type: 'radio',
      options: [
        'Under 10 000 kr',
        '10 000 - 20 000 kr',
        '20 000 - 40 000 kr',
        '40 000 - 60 000 kr',
        'Over 60 000 kr',
        'Vet ikke / Ønsker pristilbud'
      ],
      required: true
    },
    {
      id: 'workType',
      question: 'Hva skal gjøres?',
      type: 'radio',
      options: [
        'Installere ny garasjeport',
        'Bytte eksisterende port',
        'Reparasjon',
        'Service/vedlikehold',
        'Automatisering (motor)'
      ],
      required: true
    },
    {
      id: 'size',
      question: 'Størrelse på port (bredde x høyde)?',
      type: 'text',
      placeholder: 'F.eks. 250 cm x 200 cm',
      required: true
    },
    {
      id: 'portType',
      question: 'Type port ønsket?',
      type: 'radio',
      options: [
        'Seksjonport',
        'Skyveport',
        'Slagport',
        'Vet ikke, trenger råd'
      ]
    },
    {
      id: 'automation',
      question: 'Ønsker du motor/automatikk?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Har allerede'],
      required: true
    },
    {
      id: 'materials',
      question: 'Har du valgt/kjøpt port?',
      type: 'radio',
      options: [
        'Ja, har kjøpt',
        'Vet hvilken jeg vil ha',
        'Nei, trenger hjelp'
      ],
      required: true
    },
    {
      id: 'demolition',
      question: 'Må gammel port fjernes?',
      type: 'radio',
      options: ['Ja', 'Nei']
    },
    {
      id: 'timeline',
      question: 'Tidslinje',
      type: 'radio',
      options: [
        'Så snart som mulig',
        'Innen måneden',
        'Fleksibel'
      ],
      required: true
    }
  ],

  'varmepumpe': [ // Varmepumpe
    {
      id: 'pumpType',
      question: 'Type varmepumpe?',
      type: 'radio',
      options: [
        'Luft til luft',
        'Luft til vann',
        'Bergvarme',
        'Vet ikke, trenger råd'
      ],
      required: true
    },
    {
      id: 'propertyAge',
      question: 'Hvor gammel er boligen?',
      type: 'radio',
      options: [
        'Nybygg (0-5 år)',
        'Relativt ny (5-15 år)',
        'Middels (15-30 år)',
        'Eldre (30-50 år)',
        'Gammel (over 50 år)',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'insulation',
      question: 'Hvor godt er boligen isolert?',
      type: 'radio',
      options: [
        'Svært godt isolert (nybygg-standard)',
        'Godt isolert (oppgradert)',
        'Moderat isolert (original)',
        'Dårlig isolert (gammel standard)',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'sqm',
      question: 'Hvor mange kvm skal oppvarmes?',
      type: 'number',
      placeholder: 'F.eks. 150',
      required: true
    },
    {
      id: 'roomSize',
      question: 'Hvor stort er rommet der innedel skal installeres? (kvm)',
      type: 'number',
      placeholder: 'F.eks. 25',
      required: true
    },
    {
      id: 'ceilingHeight',
      question: 'Hvor høyt er det fra gulv til tak i rommet?',
      type: 'radio',
      options: [
        'Standard (2,4 - 2,7 meter)',
        'Høyt (over 2,7 meter)',
        'Lavt (under 2,4 meter)',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'units',
      question: 'Hvor mange innendørsenheter?',
      type: 'number',
      placeholder: 'F.eks. 2'
    },
    {
      id: 'distance',
      question: 'Hvor lang avstand er det mellom innedel og utedel?',
      type: 'radio',
      options: [
        'Under 5 meter',
        '5-10 meter',
        '10-15 meter',
        'Over 15 meter',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'indoorWallType',
      question: 'Hvilken type vegg er det der innedel skal installeres?',
      type: 'radio',
      options: [
        'Betongvegg',
        'Trevegg',
        'Gipsvegg',
        'Murvegg (tegl)',
        'Annet',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'outdoorWallType',
      question: 'Hvilken type vegg er det der utedel skal installeres?',
      type: 'radio',
      options: [
        'Betongvegg',
        'Trevegg',
        'Murvegg (tegl)',
        'Skal stå på bakken',
        'Annet',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'outdoorPlacement',
      question: 'Hvor skal utedel plasseres?',
      type: 'radio',
      options: [
        'Henges på vegg (høyt)',
        'Henges på vegg (lavt)',
        'Skal stå på bakken',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'outdoorHeight',
      question: 'Hvor høyt på veggen skal utedel installeres? (hvis veggmontert)',
      type: 'text',
      placeholder: 'F.eks. 2 meter over bakken',
      conditionalOn: 'outdoorPlacement',
      conditionalValue: 'Henges på vegg'
    },
    {
      id: 'groundStand',
      question: 'Trenger du bakkestativ eller terrassefotter?',
      type: 'radio',
      options: [
        'Ja, bakkestativ',
        'Ja, terrassefotter',
        'Har allerede',
        'Vet ikke',
        'Ikke relevant'
      ],
      conditionalOn: 'outdoorPlacement',
      conditionalValue: 'Skal stå på bakken'
    },
    {
      id: 'groundedOutletIndoor',
      question: 'Er det jordet stikkontakt i nærheten av innedel?',
      type: 'radio',
      options: [
        'Ja, innen 2 meter',
        'Ja, men lengre unna',
        'Nei, må trekkes ny',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'groundedOutletOutdoor',
      question: 'Er det jordet stikkontakt i nærheten av utedel?',
      type: 'radio',
      options: [
        'Ja, innen 2 meter',
        'Ja, men lengre unna',
        'Nei, må trekkes ny',
        'Vet ikke'
      ],
      required: true
    },
    {
      id: 'access',
      question: 'Hvordan er tilkomsten til der utedel skal installeres?',
      type: 'checkbox',
      options: [
        'Lett tilgang fra bakken',
        'Krever stige/stillas',
        'God plass for arbeid',
        'Trange forhold',
        'Parkering tilgjengelig'
      ],
      required: true
    },
    {
      id: 'specialConsiderations',
      question: 'Er det spesielle ting det må tas høyde for ved installasjon?',
      type: 'text',
      placeholder: 'F.eks. nærhet til naboer, støy, estetikk, vindforhold...',
    },
    {
      id: 'materials',
      question: 'Har du valgt pumpe?',
      type: 'radio',
      options: [
        'Ja, har kjøpt',
        'Ja, vet hvilken (f.eks. Mitsubishi, Panasonic, Nibe)',
        'Nei, trenger hjelp med valg'
      ],
      required: true
    },
    {
      id: 'brand',
      question: 'Hvilken merke/modell har du valgt?',
      type: 'text',
      placeholder: 'F.eks. Mitsubishi MSZ-LN25VGW, Panasonic Etherea...',
      conditionalOn: 'materials',
      conditionalValue: 'Ja, vet hvilken (f.eks. Mitsubishi, Panasonic, Nibe)'
    },
    {
      id: 'drilling',
      question: 'Har du boretillatelse? (bergvarme)',
      type: 'radio',
      options: ['Ja', 'Nei', 'Ikke relevant'],
      conditionalOn: 'pumpType',
      conditionalValue: 'Bergvarme'
    },
    {
      id: 'electrical',
      question: 'Er det nok strømkapasitet i sikringsskapet?',
      type: 'radio',
      options: ['Ja', 'Nei', 'Vet ikke'],
      required: true
    },
    {
      id: 'timeline',
      question: 'Når ønsker du installasjon?',
      type: 'radio',
      options: [
        'Så snart som mulig',
        'Før vinteren',
        'Fleksibel'
      ],
      required: true
    }
  ]
};

// ==========================================
// AI DESCRIPTION GENERATOR (OpenAI)
// ==========================================

export async function generateJobDescription(
  category: string,
  initialDescription: string,
  answers: Record<string, any>
): Promise<string> {
  const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
  
  if (!openaiApiKey) {
    // Fallback: Generate description without AI
    return generateSimpleDescription(category, initialDescription, answers);
  }

  try {
    // Prepare answers as readable text
    const answersText = Object.entries(answers)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: ${value.join(', ')}`;
        }
        return `${key}: ${value}`;
      })
      .join('\n');

    const systemPrompt = `Du er en hjelpsom assistent som lager profesjonelle jobbeskrivelser for håndverkere.

Basert på kundens svar, lag en komplett, strukturert jobbeskrivelse som inneholder all relevant informasjon.

Format:
- Tydelig overskrift (VERSALER)
- Strukturert med seksjoner
- Punktliste der relevant
- Profesjonell tone
- All viktig informasjon inkludert
- Anslått budsjett-range HVIS det er nok informasjon (ikke oppgi hvis usikker)

Kategori: ${category}
Språk: Norsk (Bokmål)`;

    const userPrompt = `Initial beskrivelse fra kunde: "${initialDescription}"

Svar på oppfølgingsspørsmål:
${answersText}

Lag en komplett, profesjonell jobbeskrivelse som håndverkere kan bruke til å gi gode tilbud:`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.5,
        max_tokens: 1000,
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      // Fallback to simple description
      return generateSimpleDescription(category, initialDescription, answers);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error('AI description generation failed:', error);
    // Fallback to simple description
    return generateSimpleDescription(category, initialDescription, answers);
  }
}

// ==========================================
// SIMPLE DESCRIPTION (Fallback)
// ==========================================

function generateSimpleDescription(
  category: string,
  initialDescription: string,
  answers: Record<string, any>
): string {
  let description = `${category.toUpperCase()}\n\n`;
  description += `${initialDescription}\n\n`;
  
  // Special handling for cladding/panel work
  if (answers.workType === 'Kledning/panel (vegg/fasade)' && answers.wallSize) {
    description += `KLEDNINGSARBEID - DETALJERT BESKRIVELSE\n\n`;
    
    // Parse wall size
    const sizeMatch = answers.wallSize.match(/(\d+)\s*m?\s*x\s*(\d+)\s*m?/i);
    if (sizeMatch) {
      const length = parseFloat(sizeMatch[1]);
      const height = parseFloat(sizeMatch[2]);
      const area = length * height;
      
      description += `Veggstørrelse: ${length}m lang x ${height}m høy (${area} kvm)\n\n`;
      
      // Calculate material needed
      if (answers.claddingType?.includes('Liggende')) {
        // Horizontal cladding - calculate linear meters
        const boardWidth = 0.12; // Assume 12cm boards (standard)
        const overlap = 0.02; // 2cm overlap
        const effectiveWidth = boardWidth - overlap;
        const numberOfBoards = Math.ceil(height / effectiveWidth);
        const linearMeters = numberOfBoards * length;
        const wastePercentage = 1.15; // 15% waste
        const totalLinearMeters = Math.ceil(linearMeters * wastePercentage);
        
        description += `MATERIALBEREGNING (grov estimat):\n`;
        description += `• Type: Liggende kledning\n`;
        description += `• Antall bord som trengs: ca. ${numberOfBoards} stk à ${length}m\n`;
        description += `• Lineære meter totalt: ca. ${totalLinearMeters}m (inkl. 15% svinn)\n`;
        description += `• Areal: ${area} kvm\n\n`;
      } else if (answers.claddingType?.includes('Stående')) {
        // Vertical cladding
        const boardWidth = 0.10; // Assume 10cm boards (standard for vertical)
        const gap = 0.01; // 1cm gap
        const effectiveWidth = boardWidth + gap;
        const numberOfBoards = Math.ceil(length / effectiveWidth);
        const linearMeters = numberOfBoards * height;
        const wastePercentage = 1.15; // 15% waste
        const totalLinearMeters = Math.ceil(linearMeters * wastePercentage);
        
        description += `MATERIALBEREGNING (grov estimat):\n`;
        description += `• Type: Stående kledning\n`;
        description += `• Antall bord som trengs: ca. ${numberOfBoards} stk à ${height}m\n`;
        description += `• Lineære meter totalt: ca. ${totalLinearMeters}m (inkl. 15% svinn)\n`;
        description += `• Areal: ${area} kvm\n\n`;
      } else {
        description += `AREAL:\n`;
        description += `• ${area} kvm fasade som skal kles\n\n`;
      }
    } else {
      description += `Størrelse: ${answers.wallSize}\n\n`;
    }
    
    if (answers.claddingType) {
      description += `Type kledning: ${answers.claddingType}\n`;
    }
    
    if (answers.claddingMaterial && Array.isArray(answers.claddingMaterial)) {
      description += `Ønsket materiale: ${answers.claddingMaterial.join(', ')}\n`;
    }
    
    if (answers.removeOld === 'Ja') {
      description += `• Gammel kledning skal fjernes først\n`;
    }
    
    if (answers.surfaceTreatment) {
      description += `Overflatebehandling: ${answers.surfaceTreatment}\n`;
      if (answers.color) {
        description += `Farge: ${answers.color}\n`;
      }
    }
    
    description += `\n`;
  }
  
  description += `DETALJER:\n`;

  for (const [key, value] of Object.entries(answers)) {
    // Skip already displayed keys for cladding
    if (answers.workType === 'Kledning/panel (vegg/fasade)' && 
        ['workType', 'wallSize', 'claddingType', 'claddingMaterial', 'removeOld', 'surfaceTreatment', 'color'].includes(key)) {
      continue;
    }
    
    if (Array.isArray(value) && value.length > 0) {
      description += `• ${key}: ${value.join(', ')}\n`;
    } else if (value && typeof value === 'string') {
      description += `• ${key}: ${value}\n`;
    } else if (typeof value === 'number') {
      description += `• ${key}: ${value}\n`;
    }
  }

  return description;
}

// ==========================================
// BUDGET ESTIMATOR
// ==========================================

export function estimateBudget(
  category: string,
  answers: Record<string, any>
): { min: number; max: number; message: string } | null {
  // Simple heuristics based on category and size
  
  if (category === 'Baderomsrenovering' && answers.size) {
    const sqm = parseInt(answers.size);
    const min = sqm * 12000;
    const max = sqm * 25000;
    return {
      min,
      max,
      message: `Basert på ${sqm} kvm baderomsrenovering`
    };
  }

  if (category === 'maling' && answers.sqm) {
    const sqm = parseInt(answers.sqm);
    const min = sqm * 200;
    const max = sqm * 500;
    return {
      min,
      max,
      message: `Basert på ${sqm} kvm malerarbeid`
    };
  }

  if (category === 'varmepumpe' && answers.sqm) {
    const sqm = parseInt(answers.sqm);
    
    // Adjust based on insulation
    let insulationMultiplier = 1.0;
    if (answers.insulation === 'Svært godt isolert (nybygg-standard)') {
      insulationMultiplier = 0.8; // Less power needed
    } else if (answers.insulation === 'Godt isolert (oppgradert)') {
      insulationMultiplier = 0.9;
    } else if (answers.insulation === 'Dårlig isolert (gammel standard)') {
      insulationMultiplier = 1.3; // More power needed
    }
    
    // Adjust based on property age
    let ageMultiplier = 1.0;
    if (answers.propertyAge === 'Gammel (over 50 år)' || answers.propertyAge === 'Eldre (30-50 år)') {
      ageMultiplier = 1.2; // May need electrical upgrades
    }
    
    // Adjust based on ceiling height
    let ceilingMultiplier = 1.0;
    if (answers.ceilingHeight === 'Høyt (over 2,7 meter)') {
      ceilingMultiplier = 1.15; // More volume to heat
    }
    
    const totalMultiplier = insulationMultiplier * ageMultiplier * ceilingMultiplier;
    
    if (answers.pumpType === 'Bergvarme') {
      const min = Math.round(150000 * totalMultiplier);
      const max = Math.round(300000 * totalMultiplier);
      return { 
        min, 
        max, 
        message: 'Bergvarmepumpe (inkl. boring)' 
      };
    } else {
      const min = Math.round(30000 * totalMultiplier);
      const max = Math.round(80000 * totalMultiplier);
      
      let message = 'Luft til luft varmepumpe';
      if (answers.insulation === 'Dårlig isolert (gammel standard)') {
        message += ' - Dårlig isolasjon krever større kapasitet';
      } else if (answers.ceilingHeight === 'Høyt (over 2,7 meter)') {
        message += ' - Høyt tak krever større kapasitet';
      }
      
      return { min, max, message };
    }
  }

  return null;
}