"use client";

import {
  Award,
  BadgeCheck,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export default function AnalysisResult() {
  const resumeScore = 85;
  const atsScore = 91;

  const strengths = [
    "Strong React Knowledge",
    "TypeScript Proficiency",
    "Full Stack Experience",
    "Clean Project Structure",
  ];

  const weaknesses = [
    "Testing Experience",
    "Cloud Deployment",
    "Docker",
    "System Design",
  ];

  const suggestions = [
    "Add measurable achievements to every project.",
    "Mention Docker & deployment experience.",
    "Include testing tools like Jest or Cypress.",
    "Add cloud platforms such as AWS or Azure.",
  ];

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        dark:border-gray-800
        dark:bg-gray-900
      "
    >
      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-gray-900
          dark:text-white
        "
      >
        Resume Analysis
      </h2>

      {/* Score Cards */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            p-5
            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Resume Score
              </p>

              <h3
                className="
                  mt-2
                  text-4xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {resumeScore}%
              </h3>
            </div>

            <Award
              size={34}
              className="text-green-500"
            />
          </div>

          <div className="mt-5 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-green-500"
              style={{ width: `${resumeScore}%` }}
            />
          </div>
        </div>

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            p-5
            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                ATS Compatibility
              </p>

              <h3
                className="
                  mt-2
                  text-4xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {atsScore}%
              </h3>
            </div>

            <BadgeCheck
              size={34}
              className="text-blue-500"
            />
          </div>

          <div className="mt-5 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{ width: `${atsScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Analysis Cards */}

      <div
        className="
          mt-8
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Strengths */}

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            p-5
            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          <div className="mb-5 flex items-center gap-2">
            <BadgeCheck
              size={20}
              className="text-green-500"
            />

            <h3
              className="
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Strengths
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {strengths.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-green-100
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-green-700
                  dark:bg-green-900/30
                  dark:text-green-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Weakness */}

        <div
          className="
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            p-5
            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          <div className="mb-5 flex items-center gap-2">
            <AlertTriangle
              size={20}
              className="text-red-500"
            />

            <h3
              className="
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Areas To Improve
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {weaknesses.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-red-100
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-red-700
                  dark:bg-red-900/30
                  dark:text-red-300
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Suggestions */}

      <div
        className="
          mt-8
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          p-5
          dark:border-gray-700
          dark:bg-gray-800
        "
      >
        <div className="mb-5 flex items-center gap-2">
          <Lightbulb
            size={20}
            className="text-yellow-500"
          />

          <h3
            className="
              text-lg
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            AI Suggestions
          </h3>
        </div>

        <div className="space-y-3">
          {suggestions.map((item) => (
            <div
              key={item}
              className="
                flex
                items-start
                gap-3
                rounded-xl
                border
                border-gray-200
                bg-white
                p-4
                dark:border-gray-700
                dark:bg-gray-900
              "
            >
              <Lightbulb
                size={18}
                className="mt-0.5 text-yellow-500"
              />

              <p
                className="
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}