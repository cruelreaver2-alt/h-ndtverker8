import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Eye, Save, Send, RotateCcw, Copy } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface TemplateData {
  greeting: string;
  mainHeading: string;
  introText: string;
  benefitsList: string[];
  featuresList: Array<{ icon: string; title: string; description: string }>;
  ctaButtonText: string;
  secondaryButtonText: string;
  helpEmail: string;
  helpPhone: string;
  footerText: string;
  companyName: string;
  companyAddress: string;
  companyOrgNr: string;
}

const DEFAULT_TEMPLATE: TemplateData = {
  greeting: 'Hei {{name}}! 👋',
  mainHeading: 'Du er invitert til Håndtverkeren Testpilot',
  introText: 'Du er invitert til å bli en av de første testpiloter for Håndtverkeren - en helt ny plattform som revolusjonerer hvordan kunder og fagfolk finner hverandre!',
  benefitsList: [
    'Eksklusiv tidlig tilgang - Vær først ute!',
    'Gratis bruk - Ingen kostnader i testperioden',
    'Direkte innflytelse - Din feedback former produktet',
    'Premium-fordeler - Spesialtilbud når vi lanserer',
    'Prioritert support - Direkte kontakt med teamet'
  ],
  featuresList: [
    { icon: '🤖', title: 'AI-assistent', description: 'La AI-en hjelpe deg å beskrive jobben perfekt' },
    { icon: '✅', title: 'Verifiserte fagfolk', description: 'Kun godkjente og kvalitetssikrede håndverkere' },
    { icon: '⚡', title: 'Rask matching', description: 'Få tilbud fra relevante fagfolk innen 24 timer' }
  ],
  ctaButtonText: '🚀 Bli med som testpilot!',
  secondaryButtonText: '📖 Les mer om plattformen',
  helpEmail: 'support@handtverkeren.no',
  helpPhone: '+47 123 45 678',
  footerText: 'Vi gleder oss til å ha deg med på reisen! 🎉',
  companyName: 'Håndtverkeren AS',
  companyAddress: 'Testveien 123, 0123 Oslo, Norge',
  companyOrgNr: '123 456 789'
};

export function EmailTemplateEditor() {
  const navigate = useNavigate();
  const [template, setTemplate] = useState<TemplateData>(DEFAULT_TEMPLATE);
  const [showPreview, setShowPreview] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  const [testName, setTestName] = useState('Test Bruker');
  const [sending, setSending] = useState(false);
  const [saving, setSaving] = useState(false);

  // Load saved template
  useEffect(() => {
    loadTemplate();
  }, []);

  const loadTemplate = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/settings/email-template`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.template) {
          setTemplate(data.template);
        }
      }
    } catch (error) {
      console.error('Error loading template:', error);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/settings/email-template`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ template }),
        }
      );

      if (response.ok) {
        alert('✅ Template lagret!');
      } else {
        alert('❌ Kunne ikke lagre template');
      }
    } catch (error) {
      alert(`❌ Feil: ${error}`);
    } finally {
      setSaving(false);
    }
  };

  const handleSendTest = async () => {
    if (!testEmail) {
      alert('Fyll ut test e-post');
      return;
    }

    setSending(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/invites/send-test`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email: testEmail,
            name: testName,
            template,
          }),
        }
      );

      if (response.ok) {
        alert(`✅ Test e-post sendt til ${testEmail}!`);
      } else {
        alert('❌ Kunne ikke sende test e-post');
      }
    } catch (error) {
      alert(`❌ Feil: ${error}`);
    } finally {
      setSending(false);
    }
  };

  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...template.benefitsList];
    newBenefits[index] = value;
    setTemplate({ ...template, benefitsList: newBenefits });
  };

  const addBenefit = () => {
    setTemplate({
      ...template,
      benefitsList: [...template.benefitsList, 'Ny fordel']
    });
  };

  const removeBenefit = (index: number) => {
    setTemplate({
      ...template,
      benefitsList: template.benefitsList.filter((_, i) => i !== index)
    });
  };

  const updateFeature = (index: number, field: keyof typeof template.featuresList[0], value: string) => {
    const newFeatures = [...template.featuresList];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setTemplate({ ...template, featuresList: newFeatures });
  };

  const resetToDefault = () => {
    if (confirm('Er du sikker på at du vil tilbakestille til standard template?')) {
      setTemplate(DEFAULT_TEMPLATE);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header variant="simple" title="E-post Template Editor" onBack={() => navigate('/admin-invites')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Editor */}
          <div className="space-y-6">
            
            {/* Actions Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex gap-3">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 h-10 bg-[#E07B3E] text-white rounded-lg font-semibold hover:bg-[#d16f35] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Lagre
              </button>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="px-4 h-10 border-2 border-[#17384E] text-[#17384E] rounded-lg font-semibold hover:bg-[#17384E] hover:text-white transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Skjul' : 'Preview'}
              </button>

              <button
                onClick={resetToDefault}
                className="px-4 h-10 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {/* Basic Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">📝 Grunnleggende Tekster</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Hilsen
                  </label>
                  <input
                    type="text"
                    value={template.greeting}
                    onChange={(e) => setTemplate({ ...template, greeting: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                    placeholder="Hei {{name}}! 👋"
                  />
                  <p className="text-xs text-gray-500 mt-1">💡 Bruk {'{'}{'{'} name {'}'}{'}'}  for navn</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Hovedoverskrift
                  </label>
                  <input
                    type="text"
                    value={template.mainHeading}
                    onChange={(e) => setTemplate({ ...template, mainHeading: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Intro-tekst
                  </label>
                  <textarea
                    value={template.introText}
                    onChange={(e) => setTemplate({ ...template, introText: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#111827]">🎁 Fordeler</h3>
                <button
                  onClick={addBenefit}
                  className="text-sm text-[#E07B3E] font-semibold hover:underline"
                >
                  + Legg til
                </button>
              </div>
              
              <div className="space-y-2">
                {template.benefitsList.map((benefit, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => updateBenefit(index, e.target.value)}
                      className="flex-1 h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                    />
                    <button
                      onClick={() => removeBenefit(index)}
                      className="w-10 h-10 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">✨ Funksjoner</h3>
              
              <div className="space-y-4">
                {template.featuresList.map((feature, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={feature.icon}
                        onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                        className="h-10 px-3 border border-gray-300 rounded-lg text-center"
                        placeholder="🤖"
                      />
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => updateFeature(index, 'title', e.target.value)}
                        className="col-span-2 h-10 px-3 border border-gray-300 rounded-lg"
                        placeholder="Tittel"
                      />
                    </div>
                    <textarea
                      value={feature.description}
                      onChange={(e) => updateFeature(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Beskrivelse"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">🔘 Knapper</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Primær knapp-tekst
                  </label>
                  <input
                    type="text"
                    value={template.ctaButtonText}
                    onChange={(e) => setTemplate({ ...template, ctaButtonText: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Sekundær knapp-tekst
                  </label>
                  <input
                    type="text"
                    value={template.secondaryButtonText}
                    onChange={(e) => setTemplate({ ...template, secondaryButtonText: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">📞 Kontaktinfo</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Support e-post
                  </label>
                  <input
                    type="email"
                    value={template.helpEmail}
                    onChange={(e) => setTemplate({ ...template, helpEmail: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Support telefon
                  </label>
                  <input
                    type="tel"
                    value={template.helpPhone}
                    onChange={(e) => setTemplate({ ...template, helpPhone: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">🏢 Firmainfo</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Firmanavn
                  </label>
                  <input
                    type="text"
                    value={template.companyName}
                    onChange={(e) => setTemplate({ ...template, companyName: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={template.companyAddress}
                    onChange={(e) => setTemplate({ ...template, companyAddress: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Org.nr
                  </label>
                  <input
                    type="text"
                    value={template.companyOrgNr}
                    onChange={(e) => setTemplate({ ...template, companyOrgNr: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Footer-tekst
                  </label>
                  <input
                    type="text"
                    value={template.footerText}
                    onChange={(e) => setTemplate({ ...template, footerText: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Preview & Test */}
          <div className="lg:sticky lg:top-8 lg:self-start space-y-6">
            
            {/* Test Send */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">📨 Send Test E-post</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Test navn
                  </label>
                  <input
                    type="text"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                    placeholder="Test Bruker"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Test e-post
                  </label>
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                    placeholder="din@epost.no"
                  />
                </div>

                <button
                  onClick={handleSendTest}
                  disabled={sending || !testEmail}
                  className="w-full h-10 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  Send Test
                </button>
              </div>
            </div>

            {/* Live Preview */}
            {showPreview && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#111827] mb-4">👁️ Live Preview</h3>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    srcDoc={generatePreviewHTML(template, testName)}
                    className="w-full h-[600px]"
                    title="Email Preview"
                  />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// Generate preview HTML
function generatePreviewHTML(template: TemplateData, name: string): string {
  const greeting = template.greeting.replace('{{name}}', name);
  
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 20px; background-color: #F8FAFC; font-family: Arial, sans-serif; }
  </style>
</head>
<body>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <tr>
      <td style="background: linear-gradient(135deg, #17384E 0%, #1a4459 100%); padding: 48px 40px; text-align: center;">
        <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700;">🔨 Håndtverkeren</h1>
        <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Norges smarteste håndverkerplattform</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #E07B3E; height: 8px;"></td>
    </tr>
    <tr>
      <td style="padding: 48px 40px;">
        <h2 style="margin: 0 0 24px 0; color: #111827; font-size: 28px; font-weight: 700;">${greeting}</h2>
        <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.6;">${template.introText}</p>
        
        <div style="background-color: #F0F9FF; border-left: 4px solid #3B82F6; padding: 24px; border-radius: 8px; margin: 32px 0;">
          <h3 style="margin: 0 0 16px 0; color: #1E40AF; font-size: 18px; font-weight: 600;">🎁 Som testpilot får du:</h3>
          <ul style="margin: 0; padding: 0 0 0 20px; color: #374151; font-size: 15px; line-height: 1.8;">
            ${template.benefitsList.map(benefit => `<li style="margin-bottom: 8px;">${benefit}</li>`).join('')}
          </ul>
        </div>

        <h3 style="margin: 32px 0 20px 0; color: #111827; font-size: 20px; font-weight: 600;">✨ Hva kan du gjøre?</h3>
        
        ${template.featuresList.map(feature => `
          <div style="background-color: #FEF3F2; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
            <div style="display: flex; align-items: start;">
              <div style="width: 40px; height: 40px; background-color: #E07B3E; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-right: 16px;">${feature.icon}</div>
              <div>
                <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">${feature.title}</h4>
                <p style="margin: 0; color: #6B7280; font-size: 14px; line-height: 1.5;">${feature.description}</p>
              </div>
            </div>
          </div>
        `).join('')}

        <div style="text-align: center; margin: 40px 0;">
          <a href="#" style="display: inline-block; background-color: #E07B3E; color: #FFFFFF; text-decoration: none; font-size: 18px; font-weight: 600; padding: 16px 48px; border-radius: 12px;">${template.ctaButtonText}</a>
        </div>
        
        <div style="text-align: center; margin-top: 16px;">
          <a href="#" style="display: inline-block; color: #17384E; text-decoration: none; font-size: 15px; font-weight: 500; padding: 12px 32px; border: 2px solid #17384E; border-radius: 12px;">${template.secondaryButtonText}</a>
        </div>

        <div style="background-color: #FFFBEB; border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px; margin-top: 32px;">
          <p style="margin: 0; color: #92400E; font-size: 14px; line-height: 1.6;">
            <strong>Trenger du hjelp?</strong><br>
            Vi er her for deg! Send en e-post til <a href="mailto:${template.helpEmail}" style="color: #E07B3E; text-decoration: none; font-weight: 600;">${template.helpEmail}</a> eller ring oss på <a href="tel:${template.helpPhone}" style="color: #E07B3E; text-decoration: none; font-weight: 600;">${template.helpPhone}</a>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #F9FAFB; padding: 32px 40px; border-top: 1px solid #E5E7EB; text-align: center;">
        <p style="margin: 0 0 16px 0; color: #6B7280; font-size: 14px;">${template.footerText}</p>
        <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 1.5;">
          ${template.companyName} | Org.nr: ${template.companyOrgNr}<br>
          ${template.companyAddress}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
