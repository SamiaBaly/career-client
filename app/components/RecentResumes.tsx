"use client";

import Link from "next/link";
import { useState } from "react";
import useResumes from "@/app/hooks/useResumes";
import useAnalyzeResume from "@/app/hooks/useAnalyzeResume";
import EmptyState from "./shared/EmptyState";

export default function RecentResumes() {
  const {
    resumes,
    loading,
    error,
  } = useResumes();

  const {
    mutate: analyzeResume,
    isPending,
  } = useAnalyzeResume();

  const [analyzingId, setAnalyzingId] = useState<string | null>(null);


  const handleAnalyze = (id: string) => {
    setAnalyzingId(id);

    analyzeResume(id, {
      onSettled: () => {
        setAnalyzingId(null);
      },
    });
  };


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
        Recent Resumes
      </h2>


      {loading ? (
        <p className="mt-4 text-gray-500">
          Loading resumes...
        </p>
      ) : error ? (
        <p className="mt-4 text-red-500">
          Failed to load resumes.
        </p>
      ) : resumes.length === 0 ? (
        <EmptyState
          title="No resumes yet"
          description="Upload your first resume to get started."
        />
      ) : (
        <div className="mt-4 space-y-4">

          {resumes.slice(0, 5).map((resume) => (

            <div
              key={resume._id}
              className="
                rounded-xl
                border
                border-gray-100
                dark:border-gray-800
                p-5
                transition
                hover:shadow-md
              "
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex-1">

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {resume.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    Skills: {resume.skills?.join(", ")}
                  </p>

                  <p className="mt-3 text-xs text-gray-400">
                    {new Date(resume.createdAt).toLocaleDateString()}
                  </p>

                </div>


                <div className="flex flex-col gap-2">

                  <Link
                    href={`/dashboard/resumes/${resume._id}`}
                    className="
                      rounded-lg
                      border
                      border-gray-200
                      dark:border-gray-700
                      px-4
                      py-2
                      text-center
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                      hover:bg-gray-100
                      dark:hover:bg-gray-800
                    "
                  >
                    View
                  </Link>


                  <button
                    onClick={() => handleAnalyze(resume._id)}
                    disabled={isPending}
                    className="
                      rounded-lg
                      bg-slate-900
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-slate-800
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      dark:bg-white
                      dark:text-black
                    "
                  >
                    {
                      isPending && analyzingId === resume._id
                        ? "Analyzing..."
                        : "Analyze with AI"
                    }
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}