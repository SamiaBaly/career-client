"use client";

import useAnalyses from "@/app/hooks/useAnalyses";
import EmptyState from "./shared/EmptyState";


export default function AnalysisHistory() {

  const {
    analyses,
    loading,
    error,
  } = useAnalyses();



  return (
    <div
      className="
        mt-8
        rounded-2xl
        border
        border-gray-200
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        p-6
        shadow-sm
      "
    >

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        AI Analysis History
      </h2>



      {loading ? (

        <p className="mt-4 text-gray-500">
          Loading analysis...
        </p>


      ) : error ? (

        <p className="mt-4 text-red-500">
          Failed to load analysis.
        </p>


      ) : analyses.length === 0 ? (

        <EmptyState
          title="No analysis found"
          description="Analyze your resume to see AI feedback here."
        />


      ) : (

        <div className="mt-4 space-y-4">

          {analyses.slice(0, 5).map((analysis) => (

            <div
              key={analysis._id}
              className="
                rounded-xl
                border
                border-gray-100
                dark:border-gray-800
                p-4
                hover:shadow-md
                transition
              "
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Resume Analysis
                </h3>


                <span
                  className="
                    rounded-full
                    bg-blue-100
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-blue-600
                  "
                >
                  {analysis.score}%
                </span>

              </div>



              <p className="mt-2 text-sm text-gray-500">
                Strengths: {analysis.strengths.length}
              </p>


              <p className="mt-1 text-sm text-gray-500">
                Suggestions: {analysis.suggestions.length}
              </p>


              <p className="mt-2 text-xs text-gray-400">
                {new Date(
                  analysis.createdAt
                ).toLocaleDateString()}
              </p>


            </div>

          ))}

        </div>

      )}

    </div>
  );
}