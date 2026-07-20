"use client";

import { useParams, useSearchParams } from "next/navigation";

import useCareerMatches from "@/app/hooks/useCareerMatches";
import EmptyState from "@/app/components/shared/EmptyState";


export default function CareerDetailsPage() {


  const params = useParams();
  const searchParams = useSearchParams();


  const id = params.id as string;

  const careerTitle = searchParams.get("career");



  const {
    matches,
    loading,
  } = useCareerMatches();



  if (loading) {
    return (
      <p className="p-6 text-gray-400">
        Loading...
      </p>
    );
  }



  const match = matches.find(
    (item) => item._id === id
  );



  const career = match?.careers.find(
    (item) => item.title === careerTitle
  );



  if (!career) {
    return (
      <EmptyState
        title="Career not found"
        description="Unable to find this recommendation."
      />
    );
  }



  return (

    <div className="p-6 space-y-6">


      <div
        className="
          rounded-2xl
          border
          border-gray-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-900
          p-6
        "
      >


        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <h1
            className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            {career.title}
          </h1>


          <span
            className="
              rounded-full
              bg-green-100
              px-4
              py-2
              font-bold
              text-green-700
            "
          >
            {career.matchPercentage}%
          </span>


        </div>



        {/* Skills */}

        <div className="mt-8">

          <h2 className="font-semibold">
            Required Skills
          </h2>


          <div className="mt-3 flex flex-wrap gap-2">

            {career.requiredSkills.map(skill => (

              <span
                key={skill}
                className="
                  rounded-full
                  bg-blue-100
                  px-3
                  py-1
                  text-sm
                  text-blue-700
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>




        <div className="mt-8">

          <h2 className="font-semibold">
            Missing Skills
          </h2>


          <div className="mt-3 flex flex-wrap gap-2">

            {career.missingSkills.map(skill => (

              <span
                key={skill}
                className="
                  rounded-full
                  bg-red-100
                  px-3
                  py-1
                  text-sm
                  text-red-700
                "
              >
                {skill}
              </span>

            ))}

          </div>

        </div>


      </div>


    </div>

  );
}