export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <span className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-blue-500/10
              text-blue-400
              text-sm
              mb-6
            ">
              🚀 AI Career Intelligence
            </span>


            <h1 className="
              text-5xl
              font-bold
              leading-tight
            ">
              Building the future of
              <span className="text-blue-500">
                {" "}career decisions
              </span>
            </h1>


            <p className="
              mt-6
              text-gray-400
              text-lg
              leading-relaxed
            ">
              CareerPilot AI analyzes your resume,
              understands your skills, and recommends
              career paths powered by artificial intelligence.
            </p>


            <div className="mt-8 flex gap-8">

              <div>
                <h3 className="text-3xl font-bold">
                  AI
                </h3>
                <p className="text-gray-400">
                  Powered Analysis
                </p>
              </div>


              <div>
                <h3 className="text-3xl font-bold">
                  100%
                </h3>
                <p className="text-gray-400">
                  Personalized
                </p>
              </div>

            </div>

          </div>



          <div className="
            relative
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-purple-700
            p-1
          ">

            <div className="
              rounded-3xl
              bg-slate-900
              p-10
            ">

              <h2 className="text-2xl font-bold mb-6">
                Why CareerPilot AI?
              </h2>


              <ul className="space-y-5 text-gray-300">

                <li>
                  ✨ Smart Resume Evaluation
                </li>

                <li>
                  🎯 Career Match Prediction
                </li>

                <li>
                  📈 Skill Gap Detection
                </li>

                <li>
                  🤖 AI Career Guidance
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}