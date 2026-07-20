"use client";

import { useEffect } from "react";
import useAnalyses, {
  type Analysis,
} from "@/app/hooks/useAnalyses";
import EmptyState from "./shared/EmptyState";

export default function RecentAnalyses() {
  const {
    analyses,
    loading,
    error,
  } = useAnalyses();

  if (error) {
    return (
      <EmptyState
        title="Failed to load analyses"
        description="Please try again later."
      />
    );
  }

  return (
    <div
      className="
        mt-8
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Recent AI Analysis
      </h2>

      {loading ? (
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Loading analysis...
        </p>
      ) : analyses.length === 0 ? (
        <EmptyState
          title="No AI analysis yet"
          description="Analyze a resume to see AI feedback here."
        />
      ) : (
        <div className="mt-4 space-y-4">
              {analyses.slice(0, 5).map((analysis: Analysis) => (
            <div
              key={analysis._id}
              className="
                rounded-xl
                border
                border-gray-100
                p-4
                dark:border-gray-800
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Resume Score
                </h3>

                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-sm
                    font-medium
                    text-blue-600
                    dark:bg-blue-950
                    dark:text-blue-400
                  "
                >
                  {analysis.score}%
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Strengths:</span>{" "}
                {analysis.strengths.slice(0, 2).join(", ")}
              </p>

              <p className="mt-2 text-xs text-gray-400">
                {new Date(analysis.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}