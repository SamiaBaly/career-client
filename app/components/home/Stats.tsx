"use client";

import {
  Users,
  FileCheck,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    title: "Active Users",
    description: "Students and professionals using CareerPilot AI",
  },
  {
    icon: FileCheck,
    value: "25K+",
    title: "Resumes Analyzed",
    description: "AI-powered resume reviews completed",
  },
  {
    icon: Briefcase,
    value: "500+",
    title: "Career Matches",
    description: "Career paths recommended by AI",
  },
  {
    icon: TrendingUp,
    value: "95%",
    title: "Success Rate",
    description: "Users reported better resume quality",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Trusted by Thousands
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Numbers That Speak for Themselves
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            CareerPilot AI helps job seekers improve resumes,
            discover career opportunities and prepare for success.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition hover:bg-white/20"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
                  <Icon size={32} />
                </div>

                <h3 className="text-5xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-3 text-xl font-semibold">
                  {item.title}
                </p>

                <p className="mt-4 text-blue-100 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}