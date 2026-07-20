"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const careers = [
  {
    title: "Full Stack Developer",
    match: 92,
    salary: "$80k - $130k",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    match: 89,
    salary: "$70k - $120k",
    skills: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend Developer",
    match: 86,
    salary: "$75k - $125k",
    skills: ["Node.js", "Express", "PostgreSQL"],
  },
];

export default function CareerPreview() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-blue-600 font-semibold">
            <TrendingUp size={18} />
            Career Matches
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Discover Your Best Career Path
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
            Based on your resume and skills, CareerPilot AI
            recommends the most suitable career opportunities
            with match percentages and required skills.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {careers.map((career) => (
            <div
              key={career.title}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                  <Briefcase size={28} />
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
                  {career.match}% Match
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {career.title}
              </h3>

              <p className="mt-3 text-blue-600 font-semibold">
                {career.salary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {career.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/career"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore Careers
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}