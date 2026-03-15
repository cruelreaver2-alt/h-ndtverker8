import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Header } from "../components/Header";

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || "En feil oppstod";
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = "Ukjent feil";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <AlertTriangle className="w-24 h-24 mx-auto text-[#E07B3E]" />
          </div>
          
          {errorStatus && (
            <h1 className="text-6xl font-bold text-[#17384E] mb-4">{errorStatus}</h1>
          )}
          <h2 className="text-2xl font-semibold text-[#17384E] mb-4">
            Noe gikk galt
          </h2>
          <p className="text-gray-600 mb-2">
            Vi beklager ulejligheten. En feil oppstod.
          </p>
          <p className="text-sm text-gray-500 mb-8 font-mono bg-gray-100 p-4 rounded">
            {errorMessage}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#17384E] text-white rounded-lg hover:bg-[#1a4459] transition-colors font-medium"
            >
              <RefreshCw className="w-5 h-5" />
              Last siden på nytt
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#17384E] border-2 border-[#17384E] rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <Home className="w-5 h-5" />
              Gå til forsiden
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            <p>Hvis problemet vedvarer, kontakt oss på:</p>
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
