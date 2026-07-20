"use client";

import {
  
  Brain,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import useAnalytics from "../hooks/useAnalytics";
import ErrorState from "../components/ErrorState";
import StatsSkeleton from "../components/StatsSkeleton";
import RecentResumes from "../components/RecentResumes";


const stats = [
  {
    title: "Total Analyses",
    key: "totalAnalyses",
    icon: Brain,
    color: "bg-purple-600",
  },
  {
    title: "Average Score",
    key: "averageScore",
    icon: TrendingUp,
    color: "bg-blue-600",
  },
  {
    title: "Latest Score",
    key: "latestScore",
    icon: Sparkles,
    color: "bg-green-600",
  },
];



export default function UserDashboard() {


  const {
    analytics,
    loading,
    error,
    refetch,
  } = useAnalytics();



  if (error) {

    return (
      <ErrorState
        title="Dashboard Error"
        description="Failed to load dashboard."
        onRetry={refetch}
      />
    );

  }



  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        p-6
      "
    >



      {/* Hero */}


      <div
        className="
          rounded-3xl
          bg-slate-900
          p-8
          text-white
          border
          border-slate-800
        "
      >

        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
            "
          >

            <Briefcase size={32} />

          </div>


          <div>

            <h1
              className="
                text-3xl
                font-bold
              "
            >
              User Dashboard
            </h1>


            <p
              className="
                mt-2
                text-slate-400
              "
            >
              Track your resume performance and AI insights.
            </p>


          </div>


        </div>


      </div>





      {/* Stats */}


      <div
        className="
          mt-8
          grid
          gap-6
          md:grid-cols-3
        "
      >


        {
          loading

            ?

            Array.from({
              length: 3
            }).map((_, i) => (
              <StatsSkeleton key={i} />
            ))

            :

            stats.map((item) => {


              const Icon = item.icon;


              const value =
                analytics?.[
                item.key as keyof typeof analytics
                ] ?? 0;



              return (

                <div
                  key={item.key}
                  className="
                  rounded-3xl
                  bg-slate-900
                  p-6
                  border
                  border-slate-800
                "
                >


                  <div
                    className="
                    flex
                    justify-between
                    items-center
                  "
                  >


                    <div>

                      <p
                        className="
                        text-sm
                        text-slate-400
                      "
                      >
                        {item.title}
                      </p>


                      <h2
                        className="
                        mt-3
                        text-4xl
                        font-bold
                        text-white
                      "
                      >
                        {
                          item.key === "totalAnalyses"
                            ?
                            value
                            :
                            `${value}%`
                        }
                      </h2>


                    </div>


                    <div
                      className={`
                      rounded-2xl
                      p-4
                      ${item.color}
                    `}
                    >

                      <Icon
                        size={25}
                        className="text-white"
                      />

                    </div>


                  </div>



                  <button
                    className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-blue-400
                  "
                  >

                    View

                    <ArrowRight size={16} />

                  </button>


                </div>

              );


            })


        }


      </div>





      {/* Quick Actions */}


      <div
        className="
          mt-8
          rounded-3xl
          bg-slate-900
          p-7
          border
          border-slate-800
        "
      >

        <h2
          className="
            text-xl
            font-bold
            text-white
          "
        >
          Quick Actions
        </h2>



        <div
          className="
            mt-5
            grid
            gap-5
            md:grid-cols-3
          "
        >

          {
            [
              "Create Resume",
              "Run AI Analysis",
              "Explore Careers",
            ].map((item) => (

              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-slate-700
                  p-5
                  text-white
                  hover:bg-slate-800
                  cursor-pointer
                "
              >

                {item}

              </div>

            ))
          }


        </div>


      </div>





      {/* Resume */}


      <div
        className="
          mt-8
          rounded-3xl
          bg-slate-900
          p-6
          border
          border-slate-800
        "
      >

        <RecentResumes />

      </div>



    </div>

  );

}