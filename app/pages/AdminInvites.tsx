import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Mail, Eye, Send, Check, X, Clock, Settings } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Invitation {
  id: string;
  code: string;
  email: string;
  name: string;
  status: 'sent' | 'used' | 'failed';
  expiresAt: string | null;
  createdAt: string;
  usedAt: string | null;
  userId: string | null;
  error?: string;
}

export function AdminInvites() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [expiresInDays, setExpiresInDays] = useState(30);
  const [sending, setSending] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);

  // Load all invitations
  useEffect(() => {
    loadInvitations();
  }, []);

  const loadInvitations = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/invites`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setInvitations(data.invitations || []);
      }
    } catch (error) {
      console.error('Error loading invitations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendInvite = async () => {
    if (!email || !name) {
      alert('Fyll ut både e-post og navn');
      return;
    }

    setSending(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/invites/send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            email,
            name,
            expiresInDays,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(`✅ Invitasjon sendt til ${email}!\n\nInvitasjonskode: ${data.invitation.code}`);
        setEmail('');
        setName('');
        loadInvitations(); // Reload list
      } else {
        alert(`❌ Kunne ikke sende invitasjon:\n${data.error}`);
      }
    } catch (error) {
      alert(`❌ Feil: ${error}`);
    } finally {
      setSending(false);
    }
  };

  const getStatusBadge = (invitation: Invitation) => {
    if (invitation.status === 'used') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
          <Check className="w-3 h-3" />
          Brukt
        </span>
      );
    } else if (invitation.status === 'failed') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
          <X className="w-3 h-3" />
          Feilet
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
          <Clock className="w-3 h-3" />
          Sendt
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header variant="simple" title="Testpilot Invitasjoner" onBack={() => navigate('/')} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Send New Invite Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#E07B3E] rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">Send Ny Invitasjon</h2>
              <p className="text-sm text-[#6B7280]">Inviter en ny testpilot til plattformen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Navn *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="F.eks: Ola Nordmann"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                E-post *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ola@example.com"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Gyldig i (dager)
              </label>
              <input
                type="number"
                value={expiresInDays}
                onChange={(e) => setExpiresInDays(parseInt(e.target.value) || 30)}
                min="1"
                max="365"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSendInvite}
              disabled={sending || !email || !name}
              className="flex-1 h-12 bg-[#E07B3E] text-white rounded-lg font-semibold hover:bg-[#d16f35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sender...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Invitasjon
                </>
              )}
            </button>

            <button
              onClick={() => setShowPreview(true)}
              className="px-6 h-12 border-2 border-[#17384E] text-[#17384E] rounded-lg font-semibold hover:bg-[#17384E] hover:text-white transition-colors flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Forhåndsvisning
            </button>

            <button
              onClick={() => navigate('/email-template-editor')}
              className="px-6 h-12 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              title="Rediger e-post mal"
            >
              <Settings className="w-5 h-5" />
              Rediger Mal
            </button>
          </div>
        </div>

        {/* Invitations List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-[#111827] mb-6">Sendte Invitasjoner</h3>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-[#E07B3E] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : invitations.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Ingen invitasjoner sendt ennå</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">Navn</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">E-post</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">Kode</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">Sendt</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#374151]">Utløper</th>
                  </tr>
                </thead>
                <tbody>
                  {invitations.map((invitation) => (
                    <tr key={invitation.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-medium text-[#111827]">{invitation.name}</div>
                        {invitation.userId && (
                          <div className="text-xs text-green-600 mt-1">User ID: {invitation.userId.slice(0, 8)}...</div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#6B7280]">{invitation.email}</td>
                      <td className="py-4 px-4">
                        <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono text-[#E07B3E]">
                          {invitation.code}
                        </code>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(invitation)}
                        {invitation.error && (
                          <div className="text-xs text-red-600 mt-1">{invitation.error}</div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#6B7280]">
                        {new Date(invitation.createdAt).toLocaleDateString('nb-NO')}
                      </td>
                      <td className="py-4 px-4 text-sm text-[#6B7280]">
                        {invitation.expiresAt || 'Aldri'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Email Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPreview(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#111827]">📧 E-post Forhåndsvisning</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <iframe
                srcDoc={getPreviewHTML()}
                className="w-full h-[600px] border border-gray-200 rounded-lg"
                title="Email Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Generate preview HTML
function getPreviewHTML(): string {
  return `
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Preview</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #F8FAFC; font-family: Arial, sans-serif;">
  ${getEmailHTML('Ola Nordmann', 'ABC12345', '15.04.2026')}
</body>
</html>
  `;
}

// Simplified version of email template for preview
function getEmailHTML(name: string, code: string, expires: string): string {
  return `
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
  <tr>
    <td style="background: linear-gradient(135deg, #17384E 0%, #1a4459 100%); padding: 48px 40px; text-align: center;">
      <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700;">
        🔨 Håndtverkeren
      </h1>
      <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
        Norges smarteste håndverkerplattform
      </p>
    </td>
  </tr>
  <tr>
    <td style="background-color: #E07B3E; height: 8px;"></td>
  </tr>
  <tr>
    <td style="padding: 48px 40px;">
      <h2 style="margin: 0 0 24px 0; color: #111827; font-size: 28px; font-weight: 700;">
        Hei ${name}! 👋
      </h2>
      <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.6;">
        Du er invitert til å bli en av de <strong>første testpiloter</strong> for Håndtverkeren!
      </p>
      
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0; background: linear-gradient(135deg, #FEF3F2 0%, #FEE2E2 100%); border: 2px dashed #E07B3E; padding: 24px; border-radius: 12px; text-align: center;">
        <tr>
          <td>
            <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 14px; font-weight: 500; text-transform: uppercase;">
              Din personlige invitasjonskode
            </p>
            <div style="background-color: #FFFFFF; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
              <code style="font-family: monospace; font-size: 28px; font-weight: 700; color: #17384E; letter-spacing: 2px;">
                ${code}
              </code>
            </div>
            <p style="margin: 0; color: #9CA3AF; font-size: 13px;">
              ⏰ Gyldig til ${expires}
            </p>
          </td>
        </tr>
      </table>

      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 40px 0;">
        <tr>
          <td style="text-align: center;">
            <a href="https://handtverkeren.no/signup?invite=${code}" 
               style="display: inline-block; background-color: #E07B3E; color: #FFFFFF; text-decoration: none; font-size: 18px; font-weight: 600; padding: 16px 48px; border-radius: 12px;">
              🚀 Bli med som testpilot!
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="background-color: #F9FAFB; padding: 32px 40px; border-top: 1px solid #E5E7EB;">
      <p style="margin: 0; text-align: center; color: #6B7280; font-size: 14px;">
        Vi gleder oss til å ha deg med på reisen! 🎉
      </p>
    </td>
  </tr>
</table>
  `;
}