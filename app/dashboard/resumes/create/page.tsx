"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Sparkles } from "lucide-react";

import useCreateResume from "@/app/hooks/useCreateResume";


export default function CreateResumePage() {

  const router = useRouter();

  const {
    mutate: createResume,
    isPending,
  } = useCreateResume();


  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");



  const handleSubmit = () => {

    createResume(
      {
        title,
        summary,
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      },
      {
        onSuccess: () => {
          router.push("/dashboard/resumes");
        },
      }
    );

  };



  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
      "
    >

      <div
        className="
          w-full
          max-w-xl
          rounded-3xl
          border
          border-gray-800
          bg-[#111827]
          p-8
          shadow-xl
        "
      >


        {/* Header */}

        <div className="text-center">

          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
            "
          >

            <FileText
              size={28}
              className="text-blue-400"
            />

          </div>



          <h1
            className="
              mt-5
              text-3xl
              font-bold
              text-white
            "
          >
            Create Resume
          </h1>


          <p
            className="
              mt-2
              text-sm
              text-gray-400
            "
          >
            Add your resume details and get AI career insights.
          </p>


        </div>





        {/* Form */}

        <div className="mt-8 space-y-5">


          {/* Title */}

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-300
              "
            >
              Resume Title
            </label>


            <input

              value={title}

              onChange={(e) =>
                setTitle(e.target.value)
              }

              placeholder="Full Stack Developer Resume"

              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-gray-900
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "

            />

          </div>





          {/* Summary */}

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-300
              "
            >
              Resume Summary
            </label>


            <textarea

              value={summary}

              onChange={(e) =>
                setSummary(e.target.value)
              }

              placeholder="Experienced full stack developer with React and Node.js expertise."

              rows={4}

              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-gray-900
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "

            />

          </div>





          {/* Skills */}

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-300
              "
            >
              Skills
            </label>


            <input

              value={skills}

              onChange={(e) =>
                setSkills(e.target.value)
              }

              placeholder="React, Node.js, MongoDB"

              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-gray-900
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "

            />


            <p
              className="
                mt-2
                text-xs
                text-gray-500
              "
            >
              Separate skills with commas
            </p>


          </div>






          {/* Submit */}

          <button

            onClick={handleSubmit}

            disabled={isPending}

            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              disabled:opacity-50
            "

          >

            <Sparkles size={18} />

            {
              isPending
                ? "Creating..."
                : "Create Resume"
            }

          </button>



        </div>


      </div>


    </div>

  );

}