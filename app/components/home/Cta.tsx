"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 backdrop-blur">
          <Sparkles size={18} />
          <span className="font-medium">
            Start Your Career Journey Today
          </span>
        </div>

        <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
          Unlock Your Career Potential
          <br />
          with AI
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8">
          Upload your resume, receive instant AI feedback,
          discover the best career matches and build a stronger
          future with CareerPilot AI.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Get Started Free
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Upload Resume
          </Link>

        </div>

      </div>
    </section>
  );
}