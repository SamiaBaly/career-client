"use client";

import Link from "next/link";
import { useState } from "react";

import EmptyState from "@/app/components/shared/EmptyState";
import useResumes from "@/app/hooks/useResumes";
import useAnalyzeResume from "@/app/hooks/useAnalyzeResume";

import {
  FileText,
  Calendar,
  Sparkles,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";


export default function MyResumesPage() {
  const router = useRouter();

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

      onSuccess: () => {

        router.push(
          `/dashboard/resumes/${id}`
        );

      },

      onSettled: () => {

        setAnalyzingId(null);

      },

    });

  };



  return (
    <div className="space-y-8 pt-4 px-4">


      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1
            className="
        text-3xl
        font-bold
        text-gray-100
      "
          >
            My Resumes
          </h1>


          <p
            className="
        mt-2
        text-gray-400
      "
          >
            Manage your uploaded resumes and track AI analysis.
          </p>

        </div>



        <Link
          href="/dashboard/resumes/create"
          className="
      rounded-xl
      bg-blue-600
      px-5
      py-3
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-blue-700
    "
        >
          + Create Resume
        </Link>


      </div>



      {loading && (
        <p className="text-gray-400">
          Loading resumes...
        </p>
      )}



      {error && (
        <p className="text-red-400">
          Failed to load resumes.
        </p>
      )}




      {!loading && !error && resumes.length === 0 && (

        <EmptyState
          title="No resumes yet"
          description="Upload your first resume to get AI career insights."
        />

      )}




      {!loading && !error && resumes.length > 0 && (

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {resumes.map((resume) => (

            <div
              key={resume._id}
              className="
                rounded-2xl
                border
                border-gray-800
                bg-[#111827]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              {/* Top */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                  "
                >

                  <FileText
                    size={22}
                    className="text-blue-400"
                  />

                </div>



                <span
                  className="
                    rounded-full
                    bg-green-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-green-400
                  "
                >
                  Resume
                </span>


              </div>





              {/* Title */}

              <h2
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-gray-100
                "
              >
                {resume.title}
              </h2>




              {/* Date */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-500
                "
              >

                <Calendar size={15} />

                {new Date(
                  resume.createdAt
                ).toLocaleDateString()}

              </div>




              {/* Skills */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {resume.skills
                  ?.slice(0, 5)
                  .map((skill) => (

                    <span
                      key={skill}
                      className="
                        rounded-full
                        bg-gray-800
                        px-3
                        py-1
                        text-xs
                        text-gray-300
                      "
                    >
                      {skill}
                    </span>

                  ))}

              </div>




              {/* Actions */}

              <div
                className="
                  mt-6
                  flex
                  gap-3
                "
              >

                <Link
                  href={`/dashboard/resumes/${resume._id}`}
                  className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-700
                    px-4
                    py-2
                    text-sm
                    text-gray-300
                    hover:bg-gray-800
                  "
                >

                  <Eye size={16} />
                  View

                </Link>



                <button
                  onClick={() => handleAnalyze(resume._id)}
                  disabled={
                    isPending &&
                    analyzingId === resume._id
                  }
                  className="
    flex-1
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-blue-600
    px-4
    py-2
    text-sm
    text-white
    hover:bg-blue-700
    disabled:opacity-50
  "
                >
                  <Sparkles size={16} />

                  {isPending &&
                    analyzingId === resume._id
                    ? "Analyzing..."
                    : "AI Analyze"}
                </button>


              </div>


            </div>

          ))}


        </div>

      )}


    </div>
  );
}