"use client";

import { useParams, useRouter } from "next/navigation";

import useResume from "@/app/hooks/useResume";
import useAnalysis from "@/app/hooks/useAnalysis";
import useAnalyzeResume from "@/app/hooks/useAnalyzeResume";

import EmptyState from "@/app/components/shared/EmptyState";

import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Sparkles,
} from "lucide-react";


export default function ResumeDetailsPage() {

  const params = useParams();
  const router = useRouter();

  const resumeId = params.id as string;


  const {
    resume,
    loading: resumeLoading,
  } = useResume(resumeId);



  const {
    analysis,
    loading: analysisLoading,
  } = useAnalysis(resumeId);



  const {
    mutate: analyzeResume,
    isPending,
  } = useAnalyzeResume();



  const handleAnalyze = () => {

    analyzeResume(resumeId, {

      onSuccess: () => {

        router.refresh();

      },

    });

  };



  if (resumeLoading) {

    return (
      <p className="p-6 text-gray-400">
        Loading resume...
      </p>
    );

  }



  if (!resume) {

    return (
      <EmptyState
        title="Resume not found"
        description="This resume does not exist."
      />
    );

  }



  return (

    <div
      className="
      min-h-screen
      space-y-8
      px-6
      py-6
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-slate-950
    "
    >


      {/* Header */}

      <div
        className="
    flex
    items-center
    justify-between
  "
      >

        <div>

          <h1
            className="
        text-4xl
        font-bold
        text-white
      "
          >
            {resume.title}
          </h1>

          <p
            className="
        mt-2
        text-gray-400
      "
          >
            AI Resume Analysis Dashboard
          </p>

        </div>

      </div>





      {/* Resume Information */}

      <div
        className="
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    shadow-2xl
  "
      >


        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <FileText
            className="text-blue-400"
          />


          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Resume Information
          </h2>


        </div>




        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            text-sm
            text-gray-400
          "
        >

          <Calendar size={16} />


          {new Date(
            resume.createdAt
          ).toLocaleDateString()}


        </div>





        <div className="mt-6">

          <p className="text-gray-400">
            Skills
          </p>



          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-2
            "
          >

            {
              resume.skills?.map(
                (skill: string) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-gray-800
                      px-3
                      py-1
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                )
              )
            }


          </div>

        </div>


      </div>







      {/* AI Analysis */}


      {
        analysisLoading ? (

          <p className="text-gray-400">
            Loading AI analysis...
          </p>


        ) : analysis ? (



          <div
            className="
              rounded-2xl
              border
              border-gray-800
              bg-[#111827]
              p-6
            "
          >


            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              AI Analysis Result
            </h2>





            {/* Score */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                rounded-xl
                bg-gray-800
                p-5
              "
            >

              <span className="text-gray-400">
                Resume Score
              </span>


              <span
                className="
                  text-4xl
                  font-bold
                  text-blue-400
                "
              >
                {analysis.score}%
              </span>


            </div>






            {/* Strength */}

            <AnalysisList
              title="Strengths"
              icon={
                <CheckCircle
                  size={18}
                  className="text-green-400"
                />
              }
              items={analysis.strengths}
            />





            {/* Weakness */}

            <AnalysisList
              title="Weaknesses"
              icon={
                <AlertTriangle
                  size={18}
                  className="text-yellow-400"
                />
              }
              items={analysis.weaknesses}
            />






            {/* Suggestions */}

            <AnalysisList
              title="Suggestions"
              icon={
                <Lightbulb
                  size={18}
                  className="text-blue-400"
                />
              }
              items={analysis.suggestions}
            />



          </div>




        ) : (


          <div
            className="
              rounded-2xl
              border
              border-gray-800
              bg-[#111827]
              p-6
              text-center
            "
          >


            <h3
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              No AI Analysis Yet
            </h3>



            <p
              className="
                mt-2
                text-gray-400
              "
            >
              Analyze this resume with OpenAI to get feedback.
            </p>



            <button
              onClick={handleAnalyze}
              disabled={isPending}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-white
                hover:bg-blue-700
                disabled:opacity-50
              "
            >

              <Sparkles size={18} />


              {
                isPending
                  ? "Analyzing..."
                  : "Analyze With AI"
              }


            </button>


          </div>


        )
      }



    </div>

  );

}


function AnalysisList({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {


  return (

    <div className="mt-8">


      <div
        className="
          flex
          items-center
          gap-2
        "
      >

        {icon}


        <h3
          className="
            font-semibold
            text-white
          "
        >
          {title}
        </h3>


      </div>




      <div
        className="
          mt-3
          space-y-2
        "
      >

        {
          items?.map(
            (item) => (
              <div
                key={item}
                className="
                  rounded-lg
                  bg-gray-800
                  px-4
                  py-3
                  text-sm
                  text-gray-300
                "
              >
                {item}
              </div>
            )
          )
        }

      </div>


    </div>

  );

}