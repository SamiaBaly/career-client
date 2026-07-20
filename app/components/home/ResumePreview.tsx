"use client";

import Link from "next/link";
import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const strengths = [
  "Strong React & Next.js knowledge",
  "Well-structured project experience",
  "Good TypeScript skills",
];

const improvements = [
  "Add Docker experience",
  "Mention cloud platforms",
  "Include measurable achievements",
];

export default function ResumePreview() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-blue-600 font-semibold">
              <Brain size={18} />
              AI Resume Analysis
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Let AI Review Your Resume
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
              Upload your resume and receive a detailed AI-powered
              analysis with strengths, improvement suggestions,
              ATS score and career recommendations in seconds.
            </p>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 mt-10 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Analyze My Resume
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 shadow-xl">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Resume Score
                </p>

                <h3 className="text-5xl font-bold text-blue-600 mt-2">
                  92%
                </h3>

              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
                Excellent
              </div>

            </div>

            <div className="mt-8">

              <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">

                <div className="h-full w-[92%] rounded-full bg-blue-600" />

              </div>

            </div>

            <div className="mt-10">

              <h4 className="font-semibold text-xl mb-4">
                Strengths
              </h4>

              <div className="space-y-3">

                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-600 mt-1"
                    />

                    <p>{item}</p>
                  </div>
                ))}

              </div>

            </div>

            <div className="mt-10">

              <h4 className="font-semibold text-xl mb-4">
                Needs Improvement
              </h4>

              <div className="space-y-3">

                {improvements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle
                      size={20}
                      className="text-yellow-500 mt-1"
                    />

                    <p>{item}</p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}