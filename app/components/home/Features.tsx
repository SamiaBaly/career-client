"use client";

import {
  Brain,
  FileText,
  Target,
  TrendingUp,
  Sparkles,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description:
      "Get an instant AI-powered evaluation of your resume with actionable suggestions.",
  },
  {
    icon: Target,
    title: "Career Matching",
    description:
      "Discover careers that best match your skills, education and experience.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Detection",
    description:
      "Identify missing skills and receive personalized recommendations.",
  },
  {
    icon: FileText,
    title: "ATS Resume Score",
    description:
      "Check how well your resume performs against modern ATS systems.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description:
      "Receive AI-generated improvements to strengthen your resume.",
  },
  {
    icon: Briefcase,
    title: "Career Roadmap",
    description:
      "Follow a personalized roadmap to reach your dream career.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium">
            Features
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need to Grow Your Career
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
            CareerPilot AI combines artificial intelligence with
            career insights to help you build a stronger resume,
            discover opportunities and prepare for your future.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-gray-800
                  bg-white
                  dark:bg-gray-900
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-100
                    dark:bg-blue-900/30
                    flex
                    items-center
                    justify-center
                    text-blue-600
                    mb-6
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}