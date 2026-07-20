import CareerMatches from "@/app/components/dashboard/CareerMatches";

export default function CareerPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-950
        px-4
        py-8
        md:px-8
      "
    >

      {/* Header */}

      <div
        className="
          mb-10
          rounded-3xl
          border
          border-gray-800
          bg-gradient-to-br
          from-gray-900
          to-gray-950
          p-8
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
              text-2xl
            "
          >
            🚀
          </div>


          <div>

            <h1
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Career Recommendations
            </h1>


            <p
              className="
                mt-2
                text-gray-400
              "
            >
              AI-powered career paths based on your resume skills and experience.
            </p>

          </div>

        </div>


        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >

          <div
            className="
              rounded-2xl
              bg-gray-800/50
              p-4
            "
          >
            <p className="text-sm text-gray-400">
              AI Analysis
            </p>

            <p className="mt-1 text-xl font-bold text-white">
              Completed
            </p>

          </div>


          <div
            className="
              rounded-2xl
              bg-gray-800/50
              p-4
            "
          >
            <p className="text-sm text-gray-400">
              Matching
            </p>

            <p className="mt-1 text-xl font-bold text-blue-400">
              Smart AI
            </p>

          </div>


          <div
            className="
              rounded-2xl
              bg-gray-800/50
              p-4
            "
          >
            <p className="text-sm text-gray-400">
              Career Growth
            </p>

            <p className="mt-1 text-xl font-bold text-green-400">
              Personalized
            </p>

          </div>


        </div>


      </div>



      {/* Career Cards */}

      <CareerMatches />


    </div>
  );
}