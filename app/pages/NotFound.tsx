import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { Header } from "../components/Header";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <Search className="w-24 h-24 mx-auto text-[#17384E] opacity-20" />
          </div>
          
          <h1 className="text-6xl font-bold text-[#17384E] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#17384E] mb-4">
            Siden ble ikke funnet
          </h2>
          <p className="text-gray-600 mb-8">
            Beklager, vi kunne ikke finne siden du leter etter. 
            Den kan ha blitt flyttet eller slettet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#17384E] text-white rounded-lg hover:bg-[#1a4459] transition-colors font-medium"
            >
              <Home className="w-5 h-5" />
              Gå til forsiden
            </Link>
            <Link
              to="/logg-inn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#17384E] border-2 border-[#17384E] rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Logg inn
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>Trenger du hjelp? Kontakt oss på:</p>
            <a 
              href="mailto:kontakt@handtverkeren.no" 
              className="text-[#E07B3E] hover:underline font-medium"
            >
              kontakt@handtverkeren.no
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
