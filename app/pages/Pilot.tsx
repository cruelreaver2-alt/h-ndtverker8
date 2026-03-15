import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { 
  Rocket, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  Check
} from "lucide-react";

export function Pilot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For nå, bare vis suksessmelding - senere kan dette kobles til backend
    setSubmitted(true);
    
    // Naviger til registrering etter 2 sekunder
    setTimeout(() => {
      navigate("/registrering");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#17384E] mb-4">
              Takk for din interesse! 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              Vi sender deg videre til registreringssiden. Du vil bli kontaktet av oss innen 24 timer
              for å bekrefte din plass som testpilot.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#E07B3E] border-t-transparent"></div>
              Videresender...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#17384E] via-[#1a4459] to-[#17384E] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-12 h-12 text-[#E07B3E]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Bli Testpilot
            </h1>
          </div>
          <p className="text-xl text-center text-gray-200 max-w-3xl mx-auto mb-4">
            Test Håndtverkeren <strong className="text-[#E07B3E]">helt gratis</strong> som en av de 50 første leverandørene!
          </p>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-8">
            Hvis du velger å bli kunde etter testperioden, får du <strong className="text-[#E07B3E]">40% rabatt i 6 måneder</strong>
          </p>
          
          {/* Countdown/Status */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Testpilot-plasser igjen:</span>
              <span className="text-2xl font-bold text-[#E07B3E]">50</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-gradient-to-r from-[#E07B3E] to-[#d16f35] h-3 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <p className="text-center text-sm text-gray-300 mt-3">
              ✅ Helt kostnadsfritt å delta i testperioden
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#17384E] mb-4">
          Hvorfor bli testpilot?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Som testpilot får du eksklusive fordeler og muligheten til å påvirke utviklingen av plattformen
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              40% rabatt i 6 måneder
            </h3>
            <p className="text-gray-600">
              Spar tusenvis av kroner på abonnementet ditt som en av de første medlemmene
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              Få jobber tidligere
            </h3>
            <p className="text-gray-600">
              Etabler deg på plattformen før dine konkurrenter og bygg opp anmeldelser tidlig
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              Påvirk utviklingen
            </h3>
            <p className="text-gray-600">
              Dine tilbakemeldinger former plattformen og nye funksjoner utvikles basert på dine behov
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              Kostnadsfri pilot-fase
            </h3>
            <p className="text-gray-600">
              Test plattformen helt gratis i pilot-fasen før abonnementet starter
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              Prioritert support
            </h3>
            <p className="text-gray-600">
              Få raskere respons og personlig oppfølging fra vårt team
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#E07B3E]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#E07B3E]" />
            </div>
            <h3 className="text-xl font-semibold text-[#17384E] mb-2">
              Eksklusivt testpilot-badge
            </h3>
            <p className="text-gray-600">
              Få et synlig merke på profilen din som viser at du er pionér på plattformen
            </p>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-green-900 mb-2 text-lg">
                  💯 Testperioden er 100% kostnadsfri
                </h4>
                <p className="text-green-800 text-sm">
                  Du tester plattformen helt gratis uten noen forpliktelser. 
                  Rabattene nedenfor gjelder <strong>kun hvis</strong> du velger å bli betalende kunde 
                  når appen lanseres offisielt.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-[#17384E] mb-3">
            Fremtidig rabatt ved lansering
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Når du velger å bli kunde etter testperioden, får du disse eksklusive testpilot-rabattene:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Light Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-[#17384E] mb-2">Fagfolk Light</h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-400 line-through">499 kr</span>
                </div>
                <div className="text-4xl font-bold text-[#E07B3E] mb-1">299 kr</div>
                <div className="text-sm text-gray-600">per måned i 6 mnd</div>
                <div className="text-xs text-gray-500 mt-1">(ved lansering)</div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Spar 1 200 kr totalt</span>
                </div>
              </div>
            </div>

            {/* Medium Plan - Most Popular */}
            <div className="border-2 border-[#E07B3E] rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E07B3E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mest populær
              </div>
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-[#17384E] mb-2">Fagfolk Medium</h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-400 line-through">799 kr</span>
                </div>
                <div className="text-4xl font-bold text-[#E07B3E] mb-1">479 kr</div>
                <div className="text-sm text-gray-600">per måned i 6 mnd</div>
                <div className="text-xs text-gray-500 mt-1">(ved lansering)</div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Spar 1 920 kr totalt</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-[#17384E] mb-2">Fagfolk Pro</h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-400 line-through">1 499 kr</span>
                </div>
                <div className="text-4xl font-bold text-[#E07B3E] mb-1">899 kr</div>
                <div className="text-sm text-gray-600">per måned i 6 mnd</div>
                <div className="text-xs text-gray-500 mt-1">(ved lansering)</div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Spar 3 600 kr totalt</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-[#17384E] mb-2 text-center">
            Sikre din plass nå!
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Fyll inn e-posten din for å komme i gang med registreringen
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-postadresse
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="din@epost.no"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07B3E] focus:border-transparent"
              />
            </div>

            <div className="bg-[#E07B3E]/5 border border-[#E07B3E]/20 rounded-lg p-4">
              <h4 className="font-semibold text-[#17384E] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E07B3E]" />
                Hva skjer etter registrering?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E07B3E] mt-1">1.</span>
                  <span>Du fullfører registreringen med alle nødvendige detaljer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07B3E] mt-1">2.</span>
                  <span>Vi verifiserer dine godkjenninger og sertifiseringer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07B3E] mt-1">3.</span>
                  <span>Du blir kontaktet innen 24 timer for bekreftelse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E07B3E] mt-1">4.</span>
                  <span>Testpilot-rabatten aktiveres automatisk når du godkjennes</span>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E07B3E] text-white py-4 rounded-lg font-semibold hover:bg-[#d16f35] transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Registrer meg som testpilot
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-500 text-center">
              Ved å registrere deg aksepterer du våre{" "}
              <Link to="/pris" className="text-[#E07B3E] hover:underline">
                vilkår og betingelser
              </Link>
            </p>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-[#17384E] mb-8">
            Ofte stilte spørsmål
          </h3>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 group" open>
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Koster det noe å delta i testperioden?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                <strong>Nei, testperioden er 100% gratis!</strong> Det koster ingenting å delta som testpilot. 
                Du tester plattformen uten noen betalingsforpliktelser. Rabattene gjelder kun hvis du 
                velger å bli betalende kunde når appen lanseres offisielt.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Må jeg ha alle godkjenninger for å bli testpilot?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Ja, alle leverandører må inneha de lovpålagte godkjenningene og sertifiseringene som kreves for deres fagområde. Dette er et krav for å sikre kvalitet og trygghet for kundene.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Er jeg forpliktet til å bli kunde etter testperioden?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Nei, det er ingen forpliktelse. Du kan teste plattformen gratis og deretter velge om 
                du vil fortsette som betalende kunde eller ikke. Det er helt frivillig.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Hva skjer etter de første 6 månedene med rabatt?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Etter 6 måneder går du over til vanlig pris for din valgte plan. Du kan når som helst endre eller avslutte abonnementet ditt.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Kan jeg bytte plan underveis?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Ja, du kan oppgradere eller nedgradere planen din når som helst. Testpilot-rabatten gjelder uansett hvilken plan du velger.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 group">
              <summary className="font-semibold text-[#17384E] cursor-pointer list-none flex items-center justify-between">
                Hvor lang tid tar godkjenningsprosessen?
                <span className="text-[#E07B3E] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Vi streber etter å behandle alle søknader innen 24 timer. Som testpilot får du prioritert behandling.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}