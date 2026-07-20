"use client";

import Link from "next/link";

import {
  Briefcase,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

import { Career } from "@/app/hooks/useCareerMatches";

interface Props {
  career: Career;
}

export default function CareerCard({
  career,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        dark:border-gray-800
        bg-white
        dark:bg-gray-900
        p-8
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
      "
    >

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Briefcase className="text-blue-600" />
          </div>

          <div>

            <h3 className="text-2xl font-bold">
              {career.title}
            </h3>

            <p className="text-gray-500">
              AI Recommended Career
            </p>

          </div>

        </div>


        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

          <TrendingUp
            size={18}
            className="text-green-600"
          />

          <span className="font-bold text-green-700">
            {career.matchPercentage}%
          </span>

        </div>

      </div>



      <div className="mt-8">

        <h4 className="font-semibold mb-4">
          Required Skills
        </h4>

        <div className="flex flex-wrap gap-2">

          {career.requiredSkills.map((skill) => (
            <span
              key={skill}
              className="
                px-3 py-1
                rounded-full
                bg-blue-100
                dark:bg-blue-900/20
                text-blue-700
                dark:text-blue-300
                text-sm
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>




      <div className="mt-8">

        <h4 className="font-semibold mb-4">
          Missing Skills
        </h4>


        <div className="space-y-2">

          {career.missingSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2"
            >

              <AlertCircle
                size={16}
                className="text-yellow-500"
              />

              <span>{skill}</span>

            </div>
          ))}


          {career.missingSkills.length === 0 && (
            <div className="flex items-center gap-2 text-green-600">

              <CheckCircle size={16} />

              <span>
                You already meet all required skills.
              </span>

            </div>
          )}

        </div>

      </div>



      {/* View Details */}
     


    </div>
  );
}