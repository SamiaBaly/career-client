"use client";

import useCareerMatches from "@/app/hooks/useCareerMatches";
import EmptyState from "../shared/EmptyState";
import CareerMatchesSkeleton from "./CareerMatchesSkeleton";
import Link from "next/link";


type Props = {
  limit?: number;
};


export default function CareerMatches({
  limit,
}: Props) {


  const {
    matches,
    loading,
    error,
  } = useCareerMatches();



  if (loading) {
    return <CareerMatchesSkeleton />;
  }



  if (error) {
    return (
      <p className="mt-5 text-red-500">
        Failed to load career matches.
      </p>
    );
  }



  if (!matches || matches.length === 0) {
    return (
      <EmptyState
        title="No career match found"
        description="Analyze your resume to get career recommendations."
      />
    );
  }



  const careers = matches.flatMap((match) =>
    match.careers.map((career) => ({
      ...career,
      id: match._id,
    }))
  );



  return (

    <div className="mt-8">


      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-gray-900
          dark:text-white
        "
      >
        Career Matches
      </h2>



      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >


        {
          careers
            .slice(0, limit)
            .map((career) => (


              <div
                key={`${career.id}-${career.title}`}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-gray-800
                  bg-white
                  dark:bg-gray-900
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >



                {/* Header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {career.title}
                  </h3>


                  <span
                    className="
                      rounded-full
                      bg-green-100
                      dark:bg-green-900/30
                      px-3
                      py-1
                      text-sm
                      font-bold
                      text-green-700
                      dark:text-green-400
                    "
                  >
                    {career.matchPercentage}%
                  </span>


                </div>





                {/* Progress */}

                <div
                  className="
                    mt-5
                    h-2
                    w-full
                    rounded-full
                    bg-gray-200
                    dark:bg-gray-700
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      h-full
                      rounded-full
                      bg-green-500
                    "
                    style={{
                      width: `${career.matchPercentage}%`,
                    }}
                  />

                </div>





                {/* Required Skills */}

                <div className="mt-6">

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Required Skills
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
                      career.requiredSkills?.map(
                        (skill) => (

                          <span
                            key={skill}
                            className="
                              rounded-full
                              bg-blue-100
                              dark:bg-blue-900/30
                              px-3
                              py-1
                              text-xs
                              text-blue-700
                              dark:text-blue-400
                            "
                          >
                            {skill}
                          </span>

                        )
                      )
                    }

                  </div>

                </div>





                {/* Missing Skills */}

                <div className="mt-6">

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Missing Skills
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
                      career.missingSkills?.map(
                        (skill) => (

                          <span
                            key={skill}
                            className="
                              rounded-full
                              bg-red-100
                              dark:bg-red-900/30
                              px-3
                              py-1
                              text-xs
                              text-red-700
                              dark:text-red-400
                            "
                          >
                            {skill}
                          </span>

                        )
                      )
                    }

                  </div>


                </div>
                {/* View Button */}

                <Link
                  href={`/dashboard/career/${career.id}?career=${encodeURIComponent(career.title)}`}
                  className="
    mt-6
    flex
    w-full
    items-center
    justify-center
    rounded-xl
    bg-blue-600
    px-4
    py-3
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-blue-700
  "
                >
                  View Details
                </Link>



              </div>


            ))
        }


      </div>


    </div>

  );

}