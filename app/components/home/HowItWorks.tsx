"use client";

import {
  Upload,
  Brain,
  Target,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Upload Your Resume",
    description:
      "Upload your latest resume securely in just a few clicks.",
    icon: Upload,
  },
  {
    id: "02",
    title: "AI Resume Analysis",
    description:
      "Our AI evaluates your resume and highlights strengths and weaknesses.",
    icon: Brain,
  },
  {
    id: "03",
    title: "Discover Career Matches",
    description:
      "Get personalized career recommendations based on your skills.",
    icon: Target,
  },
  {
    id: "04",
    title: "Improve & Get Hired",
    description:
      "Follow AI suggestions, strengthen your resume and apply confidently.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 dark:bg-slate-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Your Career Journey in Four Simple Steps
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-8">
            CareerPilot AI simplifies your career planning with
            intelligent resume analysis and personalized guidance.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <span className="absolute top-6 right-6 text-5xl font-bold text-blue-100 dark:text-slate-800">
                  {step.id}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}