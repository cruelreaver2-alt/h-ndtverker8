import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

/**
 * Facebook Assets Generator
 * Generates cover photo and profile picture for Håndtverkeren Facebook page
 */

export default function FacebookAssets() {
  const [selectedAsset, setSelectedAsset] = useState<'cover' | 'profile' | 'post'>('cover');

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F8FAFC',
      padding: '40px 20px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            color: '#17384E',
            margin: '0 0 8px 0'
          }}>
            🎨 Facebook Assets - Håndtverkeren
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#6B7280',
            margin: 0
          }}>
            Profesjonelle bilder for Facebook-siden din
          </p>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setSelectedAsset('cover')}
            style={{
              padding: '12px 24px',
              backgroundColor: selectedAsset === 'cover' ? '#17384E' : 'white',
              color: selectedAsset === 'cover' ? 'white' : '#17384E',
              border: '2px solid #17384E',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📸 Forsidebilde (820x312)
          </button>
          <button
            onClick={() => setSelectedAsset('profile')}
            style={{
              padding: '12px 24px',
              backgroundColor: selectedAsset === 'profile' ? '#17384E' : 'white',
              color: selectedAsset === 'profile' ? 'white' : '#17384E',
              border: '2px solid #17384E',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            👤 Profilbilde (180x180)
          </button>
          <button
            onClick={() => setSelectedAsset('post')}
            style={{
              padding: '12px 24px',
              backgroundColor: selectedAsset === 'post' ? '#17384E' : 'white',
              color: selectedAsset === 'post' ? 'white' : '#17384E',
              border: '2px solid #17384E',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📝 Innlegg (Testpilot)
          </button>
        </div>

        {/* Content */}
        {selectedAsset === 'cover' && <CoverPhoto />}
        {selectedAsset === 'profile' && <ProfilePicture />}
        {selectedAsset === 'post' && <FacebookPost />}
      </div>
    </div>
  );
}

/**
 * Facebook Cover Photo Component
 * Size: 820x312px
 */
function CoverPhoto() {
  const downloadImage = () => {
    // Instructions for downloading
    alert('For å laste ned:\n\n1. Høyreklikk på bildet\n2. Velg "Lagre bilde som..."\n3. Last opp til Facebook som forsidebilde');
  };

  return (
    <div style={{ 
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: '#17384E',
          margin: '0 0 8px 0'
        }}>
          📸 Forsidebilde
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          margin: 0
        }}>
          Anbefalt størrelse: 820x312 piksler
        </p>
      </div>

      {/* Cover Photo Design */}
      <div 
        id="facebook-cover"
        style={{ 
          width: '820px',
          height: '312px',
          maxWidth: '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          margin: '0 auto 24px auto',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
        }}
      >
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #17384E 0%, #1a4459 50%, #17384E 100%)'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1711829799900-42470ee55689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Tools"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.25
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(23,56,78,0.95) 0%, rgba(23,56,78,0.7) 100%)'
        }} />

        {/* Orange Accent Line */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #E07B3E 0%, #f59e0b 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          textAlign: 'center',
          zIndex: 1
        }}>
          {/* Logo/Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#E07B3E',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            boxShadow: '0 8px 24px rgba(224,123,62,0.4)',
            fontSize: '48px'
          }}>
            🔨
          </div>

          {/* Brand Name */}
          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'white',
            margin: '0 0 12px 0',
            letterSpacing: '-1px',
            textShadow: '0 4px 16px rgba(0,0,0,0.3)'
          }}>
            Håndtverkeren
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.95)',
            margin: '0 0 16px 0',
            fontWeight: 500,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            Norges smarteste håndverkerplattform
          </p>

          {/* Features */}
          <div style={{
            display: 'flex',
            gap: '32px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 500
          }}>
            <span>✓ Verifiserte fagfolk</span>
            <span>✓ Gratis tilbud</span>
            <span>✓ Kvalitetsgaranti</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{
        backgroundColor: '#FEF3F2',
        border: '2px solid #E07B3E',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#17384E',
          margin: '0 0 12px 0'
        }}>
          📋 Slik laster du opp til Facebook:
        </h3>
        <ol style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#374151',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <li>Høyreklikk på bildet over og velg "Lagre bilde som..."</li>
          <li>Gå til din Facebook-side</li>
          <li>Klikk på "Rediger forsidebilde" → "Last opp bilde"</li>
          <li>Velg bildet du lastet ned</li>
          <li>Juster posisjon om nødvendig og klikk "Lagre"</li>
        </ol>
      </div>

      <button
        onClick={downloadImage}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#E07B3E',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d16d35'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E07B3E'}
      >
        💾 Instruksjoner for nedlasting
      </button>
    </div>
  );
}

/**
 * Facebook Profile Picture Component
 * Size: 180x180px
 */
function ProfilePicture() {
  const downloadImage = () => {
    alert('For å laste ned:\n\n1. Høyreklikk på bildet\n2. Velg "Lagre bilde som..."\n3. Last opp til Facebook som profilbilde');
  };

  return (
    <div style={{ 
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: '#17384E',
          margin: '0 0 8px 0'
        }}>
          👤 Profilbilde
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          margin: 0
        }}>
          Anbefalt størrelse: 180x180 piksler (minimum 170x170)
        </p>
      </div>

      {/* Profile Picture Design */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <div 
          id="facebook-profile"
          style={{ 
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
            border: '6px solid white'
          }}
        >
          {/* Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #17384E 0%, #1a4459 100%)'
          }} />

          {/* Icon Container */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            {/* Hammer Icon */}
            <div style={{
              fontSize: '64px',
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
            }}>
              🔨
            </div>
            
            {/* Brand Initial or Icon */}
            <div style={{
              fontSize: '28px',
              fontWeight: 800,
              color: '#E07B3E',
              letterSpacing: '-1px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              H
            </div>
          </div>

          {/* Bottom Accent */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '12px',
            background: '#E07B3E'
          }} />
        </div>
      </div>

      {/* Preview */}
      <div style={{
        backgroundColor: '#F8FAFC',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#17384E',
          margin: '0 0 16px 0',
          textAlign: 'center'
        }}>
          👁️ Slik ser det ut på Facebook:
        </h3>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #17384E 0%, #1a4459 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            position: 'relative',
            flexShrink: 0
          }}>
            🔨
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              right: 0,
              height: '6px',
              background: '#E07B3E',
              borderRadius: '0 0 50% 50%'
            }} />
          </div>
          <div>
            <div style={{ 
              fontSize: '16px', 
              fontWeight: 700, 
              color: '#050505',
              marginBottom: '4px'
            }}>
              Håndtverkeren
            </div>
            <div style={{ 
              fontSize: '13px', 
              color: '#65676B'
            }}>
              Norges smarteste håndverkerplattform
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{
        backgroundColor: '#FEF3F2',
        border: '2px solid #E07B3E',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#17384E',
          margin: '0 0 12px 0'
        }}>
          📋 Slik laster du opp til Facebook:
        </h3>
        <ol style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#374151',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <li>Høyreklikk på bildet over (det runde) og velg "Lagre bilde som..."</li>
          <li>Gå til din Facebook-side</li>
          <li>Klikk på profilbildet → "Last opp bilde"</li>
          <li>Velg bildet du lastet ned</li>
          <li>Juster posisjon og klikk "Lagre"</li>
        </ol>
      </div>

      <button
        onClick={downloadImage}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#E07B3E',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d16d35'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E07B3E'}
      >
        💾 Instruksjoner for nedlasting
      </button>
    </div>
  );
}

/**
 * Facebook Post Component
 * Template for testpilot invitation post
 */
function FacebookPost() {
  const [copied, setCopied] = useState(false);

  const postText = `🎉 VI SØKER TESTPILOTETER! 🎉

Er du klar for å være blant de første som tester Norges smarteste håndverkerplattform? 

🔨 Håndtverkeren lanserer snart, og vi trenger DITT innspill!

✨ SOM TESTPILOT FÅR DU:
• Test plattformen helt gratis i pilotfasen
• 40% rabatt i 6 måneder når du velger å fortsette
• Eksklusiv tilgang før alle andre
• Direkte påvirkning på produktutviklingen
• Prioritert kundestøtte
• Mulighet til å forme fremtidens håndverkerplattform

💡 HVA ER HÅNDTVERKEREN?
En komplett plattform som kobler kunder med verifiserte fagfolk - raskt, enkelt og trygt.

👷 FOR HÅNDVERKERE:
• Motta kvalifiserte jobber
• Smart tilbudssystem
• Materialdatabase med 427+ produkter
• Kalkulatorer for prising
• Abonnementsstyring

🏠 FOR KUNDER:
• Match med verifiserte fagfolk
• Sammenlign tilbud
• Kvalitetsgaranti
• Chat direkte med håndverkere
• Transparent prising

📅 BEGRENSET ANTALL PLASSER!
Vi tar kun inn 50 leverandør-testpiloter (fritt antall kunder) for å sikre kvalitet og personlig oppfølging.

🚀 KLAR FOR Å BLI MED?
Send melding eller kommenter "JEG ER MED!" så sender vi deg invitasjonskode!

Eller gå direkte til: handverkeren.no/testpilot

---
#Håndtverkeren #Testpilot #Norge #Håndverker #Renovering #Bygging #Elektriker #Rørlegger #Tømrer #Maler #Taktekker #VVS #SmartBygg #NorskBedrift #Oppussing`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const postTextWithHashtags = `🎉 VI SØKER TESTPILOTETER! 🎉

Er du klar for å være blant de første som tester Norges smarteste håndverkerplattform? 

🔨 Håndtverkeren lanserer snart, og vi trenger DITT innspill!

✨ SOM TESTPILOT FÅR DU:
• Test plattformen helt gratis i pilotfasen
• 40% rabatt i 6 måneder når du velger å fortsette
• Eksklusiv tilgang før alle andre  
• Direkte påvirkning på produktutviklingen
• Prioritert kundestøtte
• Mulighet til å forme fremtidens håndverkerplattform

💡 HVA ER HÅNDTVERKEREN?
En komplett plattform som kobler kunder med verifiserte fagfolk - raskt, enkelt og trygt.

👷 FOR HÅNDVERKERE:
• Motta kvalifiserte jobber
• Smart tilbudssystem  
• Materialdatabase med 427+ produkter
• Kalkulatorer for prising
• Abonnementsstyring

🏠 FOR KUNDER:
• Match med verifiserte fagfolk
• Sammenlign tilbud
• Kvalitetsgaranti
• Chat direkte med håndverkere
• Transparent prising

📅 BEGRENSET ANTALL PLASSER!
Vi tar kun inn 50 leverandør-testpiloter (fritt antall kunder) for å sikre kvalitet og personlig oppfølging.

🚀 KLAR FOR Å BLI MED?
Send melding eller kommenter "JEG ER MED!" så sender vi deg invitasjonskode!

Eller gå direkte til: handverkeren.no/testpilot

---
#Håndtverkeren #Testpilot #Norge #Håndverker #Renovering #Bygging #Elektriker #Rørlegger #Tømrer #Maler #Taktekker #VVS #SmartBygg #NorskBedrift #Oppussing`;

  return (
    <div style={{ 
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 700, 
          color: '#17384E',
          margin: '0 0 8px 0'
        }}>
          📝 Facebook-innlegg: Testpilot-invitasjon
        </h2>
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          margin: 0
        }}>
          Klar til å kopiere og publisere på Facebook
        </p>
      </div>

      {/* Post Preview */}
      <div style={{
        backgroundColor: '#F8FAFC',
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        {/* Post Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
          paddingBottom: '16px',
          borderBottom: '1px solid #E5E7EB'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #17384E 0%, #1a4459 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            position: 'relative',
            flexShrink: 0
          }}>
            🔨
            <div style={{
              position: 'absolute',
              bottom: '-1px',
              left: 0,
              right: 0,
              height: '4px',
              background: '#E07B3E',
              borderRadius: '0 0 50% 50%'
            }} />
          </div>
          <div>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: 700, 
              color: '#050505'
            }}>
              Håndtverkeren
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: '#65676B'
            }}>
              Akkurat nå · 🌍
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#050505',
          whiteSpace: 'pre-wrap',
          marginBottom: '16px'
        }}>
          {postTextWithHashtags}
        </div>

        {/* Suggested Image */}
        <div style={{
          width: '100%',
          height: '300px',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '16px',
          position: 'relative'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1611090285001-86450e05822e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Håndverker tools"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(23,56,78,0.8) 0%, transparent 50%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '24px'
          }}>
            <div>
              <div style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'white',
                marginBottom: '8px',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}>
                Bli Testpilot! 🚀
              </div>
              <div style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 2px 4px rgba(0,0,0,0.4)'
              }}>
                Kun 50 plasser tilgjengelig
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Bar */}
        <div style={{
          borderTop: '1px solid #E5E7EB',
          paddingTop: '8px',
          display: 'flex',
          gap: '16px',
          fontSize: '13px',
          color: '#65676B'
        }}>
          <span>👍 Lik</span>
          <span>💬 Kommenter</span>
          <span>↗️ Del</span>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: copied ? '#10B981' : '#E07B3E',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginBottom: '16px'
        }}
      >
        {copied ? '✅ Kopiert!' : '📋 Kopier innlegget'}
      </button>

      {/* Tips */}
      <div style={{
        backgroundColor: '#FFFBEB',
        border: '2px solid #F59E0B',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#92400E',
          margin: '0 0 12px 0'
        }}>
          💡 Tips for beste resultater:
        </h3>
        <ul style={{ 
          margin: 0, 
          paddingLeft: '20px',
          color: '#78350F',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <li><strong>Publiser kl. 18-20:</strong> Da er folk mest aktive på Facebook</li>
          <li><strong>Fest innlegget:</strong> Hold det øverst på siden din</li>
          <li><strong>Boost innlegget:</strong> Bruk 200-500 kr for å nå flere</li>
          <li><strong>Engasjer:</strong> Svar raskt på kommentarer</li>
          <li><strong>Del i grupper:</strong> Finn relevante Facebook-grupper</li>
          <li><strong>Legg til bilde:</strong> Bruk forsidebildet eller et verktøybilde</li>
          <li><strong>Oppfordre til deling:</strong> Be folk tagge håndverkere de kjenner</li>
        </ul>
      </div>

      {/* Alternative Post Variations */}
      <div style={{
        marginTop: '24px',
        backgroundColor: '#F0F9FF',
        border: '2px solid #3B82F6',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: '#1E40AF',
          margin: '0 0 12px 0'
        }}>
          📊 Forslag til oppfølgingsinnlegg:
        </h3>
        <div style={{ 
          fontSize: '14px', 
          color: '#1E40AF',
          lineHeight: '1.8'
        }}>
          <p style={{ margin: '0 0 12px 0' }}><strong>Uke 2:</strong> "⏰ 30 plasser igjen! Har du sikret din plass som testpilot?"</p>
          <p style={{ margin: '0 0 12px 0' }}><strong>Uke 3:</strong> "🎉 Møt våre første testpiloteter [bruker-testimonial]"</p>
          <p style={{ margin: '0 0 12px 0' }}><strong>Uke 4:</strong> "🚨 Siste sjanse! Kun 10 plasser gjenstår"</p>
          <p style={{ margin: 0 }}><strong>Lansering:</strong> "✨ Vi er live! Takk til alle testpiloteter"</p>
        </div>
      </div>
    </div>
  );
}