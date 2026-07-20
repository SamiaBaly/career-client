import AnalysisResult from "@/app/components/dashboard/AnalysisResult";

export default function AnalysisPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        p-6
      "
    >

      <div className="mb-8">

        <h1
          className="
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          AI Resume Analysis
        </h1>

        <p
          className="
            mt-2
            text-gray-500
            dark:text-gray-400
          "
        >
          Analyze your resume and get AI powered improvement suggestions.
        </p>

      </div>


      <AnalysisResult />

    </div>
  );
}