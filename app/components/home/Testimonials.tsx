"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "SJ",
    review:
      "CareerPilot AI helped me improve my resume and identify missing skills. Within a month I landed multiple interviews.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "MC",
    review:
      "The AI resume analysis was incredibly accurate. The career match suggestions gave me a clear direction.",
  },
  {
    name: "Emily Davis",
    role: "Computer Science Student",
    image: "ED",
    review:
      "The platform is easy to use and the personalized recommendations made my resume much stronger.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Loved by Students & Professionals
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
            Thousands of users rely on CareerPilot AI to improve
            their resumes and confidently pursue their dream careers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {item.image}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7">
                &ldquo;{item.review}&rdquo;
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}