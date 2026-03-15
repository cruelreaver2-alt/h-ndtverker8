import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Loader2, Sparkles, Check, AlertTriangle } from "lucide-react";
import { projectId, publicAnonKey } from "/utils/supabase/info";

interface Question {
  id: string;
  question: string;
  type: "text" | "checkbox" | "radio" | "number" | "select";
  options?: string[];
  required?: boolean;
  placeholder?: string;
  conditionalOn?: string;
  conditionalValue?: string;
}

export interface SecondaryJob {
  category: string;
  title: string;
  description: string;
  reason: string;
  estimatedCost?: { min: number; max: number };
}

interface AIJobAssistantProps {
  category: string;
  initialDescription: string;
  onComplete: (
    finalDescription: string, 
    budgetEstimate?: { min: number; max: number; message: string },
    secondaryJobs?: SecondaryJob[]
  ) => void;
  onBack: () => void;
}

export function AIJobAssistant({
  category,
  initialDescription,
  onComplete,
  onBack,
}: AIJobAssistantProps) {
  const [step, setStep] = useState<"loading" | "questions" | "generating" | "preview" | "secondary">("loading");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [finalDescription, setFinalDescription] = useState("");
  const [budgetEstimate, setBudgetEstimate] = useState<{ min: number; max: number; message: string } | null>(null);
  const [secondaryJobs, setSecondaryJobs] = useState<SecondaryJob[]>([]);
  const [secondaryJobPrompt, setSecondaryJobPrompt] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
  }, [category]);

  const loadQuestions = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/ai/questions/${category}`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Kunne ikke hente spørsmål");
      }

      const data = await response.json();
      setQuestions(data.questions || []);
      setStep("questions");
    } catch (err) {
      console.error("Error loading questions:", err);
      setError("Kunne ikke laste spørsmål. Prøv igjen.");
      setStep("questions"); // Show empty state
    }
  };

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Validate required fields
    if (currentQuestion.required && !answers[currentQuestion.id]) {
      alert("Dette spørsmålet er påkrevd");
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      generateDescription();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const generateDescription = async () => {
    setStep("generating");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/ai/generate-description`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            category,
            initialDescription,
            answers,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Kunne ikke generere beskrivelse");
      }

      const data = await response.json();
      console.log("🔍 AI RESPONSE DATA:", data);
      console.log("📊 Category:", category);
      console.log("🎯 Secondary Jobs:", data.secondaryJobs);
      console.log("📝 Answers:", answers);
      
      setFinalDescription(data.description);
      setBudgetEstimate(data.budgetEstimate || null);
      setSecondaryJobs(data.secondaryJobs || []);
      
      // If there are secondary jobs, show them first, otherwise go to preview
      if (data.secondaryJobs && data.secondaryJobs.length > 0) {
        console.log("✅ SHOWING SECONDARY JOBS MODAL!");
        setSecondaryJobPrompt(data.secondaryJobPrompt || "");
        setStep("secondary");
      } else {
        console.log("❌ NO SECONDARY JOBS DETECTED");
        setStep("preview");
      }
    } catch (err) {
      console.error("Error generating description:", err);
      setError("Kunne ikke generere beskrivelse. Prøv igjen.");
      setStep("questions");
    }
  };

  const handleFinish = () => {
    onComplete(finalDescription, budgetEstimate || undefined, secondaryJobs);
  };
  
  const handleSecondaryDecline = () => {
    // User declined secondary jobs, proceed without them
    setSecondaryJobs([]);
    setStep("preview");
  };
  
  const handleSecondaryAccept = () => {
    // User accepted secondary jobs, proceed to preview with them
    setStep("preview");
  };

  // Filter questions based on conditionals
  const visibleQuestions = questions.filter((q) => {
    if (!q.conditionalOn) return true;
    const conditionValue = answers[q.conditionalOn];
    if (Array.isArray(conditionValue)) {
      return conditionValue.includes(q.conditionalValue);
    }
    return conditionValue === q.conditionalValue;
  });

  const currentQuestion = visibleQuestions[currentQuestionIndex];

  if (step === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-12 h-12 text-[#17384E] animate-spin mb-4" />
        <p className="text-[#6B7280]">Laster spørsmål...</p>
      </div>
    );
  }

  if (step === "questions" && !currentQuestion) {
    return (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">
            {error || "Ingen spørsmål tilgjengelig for denne kategorien."}
          </p>
        </div>
        <Button onClick={onBack} variant="outline">
          Tilbake
        </Button>
      </div>
    );
  }

  if (step === "questions") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              🤖 AI-assistent
            </p>
            <p className="text-sm text-blue-700 mt-1">
              La meg stille noen spørsmål for å lage en god jobbeskrivelse
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-[#6B7280]">
          <span>
            Spørsmål {currentQuestionIndex + 1} av {visibleQuestions.length}
          </span>
          <span>{Math.round(((currentQuestionIndex + 1) / visibleQuestions.length) * 100)}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#17384E] transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / visibleQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="space-y-3">
          <label className="block text-base font-medium text-[#111827]">
            {currentQuestion.question}
            {currentQuestion.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {/* Text input */}
          {currentQuestion.type === "text" && (
            <input
              type="text"
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
            />
          )}

          {/* Number input */}
          {currentQuestion.type === "number" && (
            <input
              type="number"
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
            />
          )}

          {/* Radio buttons */}
          {currentQuestion.type === "radio" && (
            <div className="space-y-2">
              {currentQuestion.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#17384E] cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleAnswer(currentQuestion.id, option)}
                    className="w-5 h-5 text-[#17384E]"
                  />
                  <span className="text-sm text-[#111827]">{option}</span>
                </label>
              ))}
            </div>
          )}

          {/* Checkboxes */}
          {currentQuestion.type === "checkbox" && (
            <div className="space-y-2">
              {currentQuestion.options?.map((option) => {
                const selected = answers[currentQuestion.id] || [];
                const isChecked = selected.includes(option);

                return (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#17384E] cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        const current = answers[currentQuestion.id] || [];
                        if (e.target.checked) {
                          handleAnswer(currentQuestion.id, [...current, option]);
                        } else {
                          handleAnswer(
                            currentQuestion.id,
                            current.filter((o: string) => o !== option)
                          );
                        }
                      }}
                      className="w-5 h-5 text-[#17384E] rounded"
                    />
                    <span className="text-sm text-[#111827]">{option}</span>
                  </label>
                );
              })}
            </div>
          )}

          {/* Select dropdown */}
          {currentQuestion.type === "select" && (
            <select
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
            >
              <option value="">Velg...</option>
              {currentQuestion.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          {currentQuestionIndex > 0 ? (
            <Button onClick={handlePrevious} variant="outline" className="flex-1">
              Tilbake
            </Button>
          ) : (
            <Button onClick={onBack} variant="outline" className="flex-1">
              Avbryt
            </Button>
          )}
          
          <Button
            onClick={handleNext}
            className="flex-1 bg-[#E07B3E] hover:bg-[#d16f35]"
          >
            {currentQuestionIndex < visibleQuestions.length - 1
              ? "Neste"
              : "Generer beskrivelse"}
          </Button>
        </div>
      </div>
    );
  }

  if (step === "generating") {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-12 h-12 text-[#17384E] animate-spin mb-4" />
        <p className="text-lg font-medium text-[#111827] mb-2">
          🤖 Genererer beskrivelse...
        </p>
        <p className="text-sm text-[#6B7280]">
          AI-en analyserer dine svar og lager en profesjonell jobbeskrivelse
        </p>
      </div>
    );
  }

  if (step === "preview") {
    return (
      <div className="space-y-6">
        {/* Success header */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-green-900">
              ✅ Beskrivelse generert!
            </p>
            <p className="text-sm text-green-700 mt-1">
              Basert på dine svar har AI-en laget denne jobbeskrivelsen
            </p>
          </div>
        </div>

        {/* Description preview */}
        <div>
          <label className="block text-sm font-medium text-[#6B7280] mb-2">
            Jobbeskrivelse (du kan redigere)
          </label>
          <textarea
            value={finalDescription}
            onChange={(e) => setFinalDescription(e.target.value)}
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#17384E] font-mono text-sm"
          />
        </div>

        {/* Budget estimate */}
        {budgetEstimate && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-900 mb-2">
              💰 Estimert budsjett
            </p>
            <p className="text-lg font-semibold text-blue-800">
              {budgetEstimate.min.toLocaleString("nb-NO")} -{" "}
              {budgetEstimate.max.toLocaleString("nb-NO")} kr
            </p>
            <p className="text-sm text-blue-700 mt-1">{budgetEstimate.message}</p>
            <p className="text-xs text-blue-600 mt-2">
              Dette er kun et estimat. Faktisk pris avhenger av håndverkernes tilbud.
            </p>
          </div>
        )}

        {/* Secondary jobs */}
        {secondaryJobs.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm font-medium text-yellow-900 mb-2">
              💡 Relaterte jobber
            </p>
            <p className="text-sm text-yellow-700 mt-1">
              Basert på dine svar har AI-en foreslått noen relaterte jobber:
            </p>
            <ul className="list-disc pl-5 mt-2">
              {secondaryJobs.map((job, index) => (
                <li key={index}>
                  <strong>{job.title}</strong>: {job.description}
                  {job.estimatedCost && (
                    <p className="text-xs text-yellow-600 mt-1">
                      Estimert kostnad: {job.estimatedCost.min.toLocaleString("nb-NO")} - {job.estimatedCost.max.toLocaleString("nb-NO")} kr
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={() => setStep("questions")}
            variant="outline"
            className="flex-1"
          >
            ← Endre svar
          </Button>
          <Button
            onClick={handleFinish}
            className="flex-1 bg-[#E07B3E] hover:bg-[#d16f35]"
          >
            Bruk denne beskrivelsen →
          </Button>
        </div>
      </div>
    );
  }

  if (step === "secondary") {
    return (
      <div className="space-y-6">
        {/* Warning header */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-base font-bold text-orange-900 mb-2">
              ⚠️ VIKTIG: Andre faggrupper trengs!
            </p>
            <p className="text-sm text-orange-800 whitespace-pre-line">
              {secondaryJobPrompt}
            </p>
          </div>
        </div>

        {/* Secondary jobs list */}
        <div className="space-y-3">
          {secondaryJobs.map((job, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-[#17384E]">{job.title}</h3>
                {job.estimatedCost && (
                  <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {job.estimatedCost.min.toLocaleString("no-NO")} - {job.estimatedCost.max.toLocaleString("no-NO")} kr
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 italic mb-2">{job.reason}</p>
              <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200 whitespace-pre-line max-h-32 overflow-y-auto">
                {job.description.substring(0, 200)}{job.description.length > 200 ? '...' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>💡 Anbefaling:</strong> Hvis du godkjenner, vil vi automatisk generere separate oppdrag for hver faggruppe. 
            Dette sparer deg tid og sikrer at alle nødvendige jobber blir gjort!
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={handleSecondaryDecline}
            variant="outline"
            className="flex-1"
          >
            Nei, ordner selv
          </Button>
          <Button
            onClick={handleSecondaryAccept}
            className="flex-1 bg-[#E07B3E] hover:bg-[#d16f35]"
          >
            Ja, generer oppdrag →
          </Button>
        </div>
      </div>
    );
  }

  return null;
}