// Email Templates for Håndtverkeren
// Professional HTML email templates with inline CSS for maximum compatibility

import { URLS, getSignupUrl, COMPANY_INFO } from './config.tsx';

export interface TestPilotInviteData {
  recipientName: string;
  recipientEmail: string;
  inviteCode?: string;
  expiresAt?: string;
}

/**
 * Test Pilot Invitation Email Template
 * Compatible with all major email clients (Gmail, Outlook, Apple Mail, etc.)
 */
export function getTestPilotInviteEmail(data: TestPilotInviteData): string {
  const { recipientName, inviteCode, expiresAt } = data;
  
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Du er invitert til Håndtverkeren Testpilot</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #F8FAFC; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
  
  <!-- Preheader text (hidden in email, shows in preview) -->
  <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
    🎉 Du er invitert til å bli en av de første som tester Håndtverkeren - Norges smarteste håndverkerplattform!
  </div>

  <!-- Main Container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0; padding: 0; background-color: #F8FAFC;">
    <tr>
      <td style="padding: 40px 20px;">
        
        <!-- Email Content Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden;">
          
          <!-- Header with brand colors -->
          <tr>
            <td style="background: linear-gradient(135deg, #17384E 0%, #1a4459 100%); padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; padding: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; line-height: 1.2; letter-spacing: -0.5px;">
                🔨 Håndtverkeren
              </h1>
              <p style="margin: 12px 0 0 0; padding: 0; color: rgba(255, 255, 255, 0.9); font-size: 16px; font-weight: 400;">
                Norges smarteste håndverkerplattform
              </p>
            </td>
          </tr>

          <!-- Orange accent bar -->
          <tr>
            <td style="background-color: #E07B3E; height: 8px; padding: 0;"></td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 48px 40px;">
              
              <!-- Greeting -->
              <h2 style="margin: 0 0 24px 0; padding: 0; color: #111827; font-size: 28px; font-weight: 700; line-height: 1.3;">
                Hei ${recipientName || 'der'}! 👋
              </h2>

              <!-- Introduction -->
              <p style="margin: 0 0 24px 0; padding: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                Du er invitert til å bli en av de <strong style="color: #17384E;">første testpiloter</strong> for Håndtverkeren - en helt ny plattform som revolusjonerer hvordan kunder og fagfolk finner hverandre!
              </p>

              <!-- Benefits Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                <tr>
                  <td style="background-color: #F0F9FF; border-left: 4px solid #3B82F6; padding: 24px; border-radius: 8px;">
                    <h3 style="margin: 0 0 16px 0; padding: 0; color: #1E40AF; font-size: 18px; font-weight: 600;">
                      🎁 Som testpilot får du:
                    </h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #374151; font-size: 15px; line-height: 1.8;">
                      <li style="margin-bottom: 8px;"><strong>Eksklusiv tidlig tilgang</strong> - Vær først ute!</li>
                      <li style="margin-bottom: 8px;"><strong>Gratis bruk</strong> - Ingen kostnader i testperioden</li>
                      <li style="margin-bottom: 8px;"><strong>Direkte innflytelse</strong> - Din feedback former produktet</li>
                      <li style="margin-bottom: 8px;"><strong>Premium-fordeler</strong> - Spesialtilbud når vi lanserer</li>
                      <li style="margin-bottom: 0;"><strong>Prioritert support</strong> - Direkte kontakt med teamet</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- Features Preview -->
              <h3 style="margin: 32px 0 20px 0; padding: 0; color: #111827; font-size: 20px; font-weight: 600;">
                ✨ Hva kan du gjøre?
              </h3>

              <!-- Feature Cards -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEF3F2; border-radius: 8px; padding: 16px;">
                      <tr>
                        <td style="width: 48px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #E07B3E; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                            🤖
                          </div>
                        </td>
                        <td style="padding-left: 16px;">
                          <h4 style="margin: 0 0 4px 0; padding: 0; color: #111827; font-size: 16px; font-weight: 600;">
                            AI-assistent
                          </h4>
                          <p style="margin: 0; padding: 0; color: #6B7280; font-size: 14px; line-height: 1.5;">
                            La AI-en hjelpe deg å beskrive jobben perfekt
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 12px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F0FDF4; border-radius: 8px; padding: 16px;">
                      <tr>
                        <td style="width: 48px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #10B981; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                            ✅
                          </div>
                        </td>
                        <td style="padding-left: 16px;">
                          <h4 style="margin: 0 0 4px 0; padding: 0; color: #111827; font-size: 16px; font-weight: 600;">
                            Verifiserte fagfolk
                          </h4>
                          <p style="margin: 0; padding: 0; color: #6B7280; font-size: 14px; line-height: 1.5;">
                            Kun godkjente og kvalitetssikrede håndverkere
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FEF9F3; border-radius: 8px; padding: 16px;">
                      <tr>
                        <td style="width: 48px; vertical-align: top;">
                          <div style="width: 40px; height: 40px; background-color: #F59E0B; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                            ⚡
                          </div>
                        </td>
                        <td style="padding-left: 16px;">
                          <h4 style="margin: 0 0 4px 0; padding: 0; color: #111827; font-size: 16px; font-weight: 600;">
                            Rask matching
                          </h4>
                          <p style="margin: 0; padding: 0; color: #6B7280; font-size: 14px; line-height: 1.5;">
                            Få tilbud fra relevante fagfolk innen 24 timer
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${inviteCode ? `
              <!-- Invite Code Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                <tr>
                  <td style="background: linear-gradient(135deg, #FEF3F2 0%, #FEE2E2 100%); border: 2px dashed #E07B3E; padding: 24px; border-radius: 12px; text-align: center;">
                    <p style="margin: 0 0 12px 0; padding: 0; color: #6B7280; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                      Din personlige invitasjonskode
                    </p>
                    <div style="background-color: #FFFFFF; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                      <code style="font-family: 'Courier New', monospace; font-size: 28px; font-weight: 700; color: #17384E; letter-spacing: 2px;">
                        ${inviteCode}
                      </code>
                    </div>
                    ${expiresAt ? `
                    <p style="margin: 0; padding: 0; color: #9CA3AF; font-size: 13px;">
                      ⏰ Gyldig til ${expiresAt}
                    </p>
                    ` : ''}
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Call to Action Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 40px 0 32px 0;">
                <tr>
                  <td style="text-align: center;">
                    <!-- Primary CTA Button -->
                    <a href="${getSignupUrl(inviteCode || '')}" 
                       style="display: inline-block; background-color: #E07B3E; color: #FFFFFF; text-decoration: none; font-size: 18px; font-weight: 600; padding: 16px 48px; border-radius: 12px; box-shadow: 0 4px 6px rgba(224, 123, 62, 0.3); transition: all 0.3s ease;">
                      🚀 Bli med som testpilot!
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 16px;">
                    <!-- Secondary CTA Button -->
                    <a href="${URLS.about}" 
                       style="display: inline-block; color: #17384E; text-decoration: none; font-size: 15px; font-weight: 500; padding: 12px 32px; border: 2px solid #17384E; border-radius: 12px;">
                      📖 Les mer om plattformen
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;">

              <!-- Additional Info -->
              <h3 style="margin: 0 0 16px 0; padding: 0; color: #111827; font-size: 18px; font-weight: 600;">
                💡 Hvordan fungerer det?
              </h3>
              <ol style="margin: 0; padding: 0 0 0 20px; color: #374151; font-size: 15px; line-height: 1.8;">
                <li style="margin-bottom: 12px;">
                  <strong style="color: #17384E;">Opprett konto</strong> - Bruk invitasjonskoden din
                </li>
                <li style="margin-bottom: 12px;">
                  <strong style="color: #17384E;">Beskriv jobben</strong> - La AI-assistenten hjelpe deg
                </li>
                <li style="margin-bottom: 12px;">
                  <strong style="color: #17384E;">Motta tilbud</strong> - Fra verifiserte fagfolk
                </li>
                <li style="margin-bottom: 0;">
                  <strong style="color: #17384E;">Gi feedback</strong> - Hjelp oss å forbedre plattformen
                </li>
              </ol>

              <!-- Help Section -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0 0 0;">
                <tr>
                  <td style="background-color: #FFFBEB; border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0; padding: 0; color: #92400E; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #78350F;">Trenger du hjelp?</strong><br>
                      Vi er her for deg! Send en e-post til <a href="mailto:support@handtverkeren.no" style="color: #E07B3E; text-decoration: none; font-weight: 600;">support@handtverkeren.no</a> eller ring oss på <a href="tel:+4712345678" style="color: #E07B3E; text-decoration: none; font-weight: 600;">+47 123 45 678</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 32px 40px; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 16px 0; padding: 0; color: #6B7280; font-size: 14px; line-height: 1.6; text-align: center;">
                Vi gleder oss til å ha deg med på reisen! 🎉
              </p>
              <p style="margin: 0 0 24px 0; padding: 0; color: #9CA3AF; font-size: 13px; line-height: 1.5; text-align: center;">
                Med vennlig hilsen,<br>
                <strong style="color: #17384E;">Teamet bak Håndtverkeren</strong>
              </p>

              <!-- Social Links -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center; padding-bottom: 20px;">
                    <a href="https://facebook.com/handtverkeren" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width="32" height="32" style="border-radius: 50%;">
                    </a>
                    <a href="https://instagram.com/handtverkeren" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="32" height="32" style="border-radius: 50%;">
                    </a>
                    <a href="https://linkedin.com/company/handtverkeren" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" height="32" style="border-radius: 50%;">
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Legal Text -->
              <p style="margin: 0; padding: 0; color: #9CA3AF; font-size: 12px; line-height: 1.5; text-align: center;">
                ${COMPANY_INFO.NAME} | Org.nr: ${COMPANY_INFO.ORG_NUMBER}<br>
                ${COMPANY_INFO.ADDRESS}, ${COMPANY_INFO.POSTAL_CODE} ${COMPANY_INFO.CITY}, ${COMPANY_INFO.COUNTRY}<br>
                <a href="${URLS.privacy}" style="color: #6B7280; text-decoration: none;">Personvern</a> | 
                <a href="${URLS.terms}" style="color: #6B7280; text-decoration: none;">Vilkår</a> | 
                <a href="${URLS.unsubscribe}" style="color: #6B7280; text-decoration: none;">Avslutt abonnement</a>
              </p>
            </td>
          </tr>

        </table>
        
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

/**
 * Plain text version (fallback for email clients that don't support HTML)
 */
export function getTestPilotInviteText(data: TestPilotInviteData): string {
  const { recipientName, inviteCode, expiresAt } = data;
  
  return `
Hei ${recipientName || 'der'}!

Du er invitert til å bli en av de første testpiloter for Håndtverkeren - Norges smarteste håndverkerplattform!

🎁 SOM TESTPILOT FÅR DU:
- Eksklusiv tidlig tilgang - Vær først ute!
- Gratis bruk - Ingen kostnader i testperioden
- Direkte innflytelse - Din feedback former produktet
- Premium-fordeler - Spesialtilbud når vi lanserer
- Prioritert support - Direkte kontakt med teamet

✨ HVA KAN DU GJØRE?
🤖 AI-assistent - La AI-en hjelpe deg å beskrive jobben perfekt
✅ Verifiserte fagfolk - Kun godkjente og kvalitetssikrede håndverkere
⚡ Rask matching - Få tilbud fra relevante fagfolk innen 24 timer

${inviteCode ? `
DIN PERSONLIGE INVITASJONSKODE:
${inviteCode}
${expiresAt ? `Gyldig til ${expiresAt}` : ''}
` : ''}

REGISTRER DEG NÅ:
${getSignupUrl(inviteCode || '')}

💡 HVORDAN FUNGERER DET?
1. Opprett konto - Bruk invitasjonskoden din
2. Beskriv jobben - La AI-assistenten hjelpe deg
3. Motta tilbud - Fra verifiserte fagfolk
4. Gi feedback - Hjelp oss å forbedre plattformen

Trenger du hjelp?
E-post: support@handtverkeren.no
Telefon: +47 123 45 678

Vi gleder oss til å ha deg med på reisen! 🎉

Med vennlig hilsen,
Teamet bak Håndtverkeren

---
${COMPANY_INFO.NAME} | Org.nr: ${COMPANY_INFO.ORG_NUMBER}
${COMPANY_INFO.ADDRESS}, ${COMPANY_INFO.POSTAL_CODE} ${COMPANY_INFO.CITY}, ${COMPANY_INFO.COUNTRY}

Personvern: ${URLS.privacy}
Vilkår: ${URLS.terms}
Avslutt abonnement: ${URLS.unsubscribe}
  `.trim();
}