"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does CareerPilot AI analyze my resume?",
    answer:
      "Our AI evaluates your resume by analyzing your skills, experience, education, and project history. It then provides a detailed score and personalized suggestions.",
  },
  {
    question: "Is my resume data secure?",
    answer:
      "Yes. Your resume is securely stored and only accessible to your account. We prioritize user privacy and data protection.",
  },
  {
    question: "Can I analyze multiple resumes?",
    answer:
      "Absolutely! You can upload and analyze multiple resumes to compare improvements over time.",
  },
  {
    question: "How are career recommendations generated?",
    answer:
      "Recommendations are generated based on your skills, education, work experience, and current job market trends.",
  },
  {
    question: "Is CareerPilot AI free to use?",
    answer:
      "Yes. The core features are free, and additional premium features can be added in future versions.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-blue-600 text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Find answers to the most common questions about CareerPilot AI.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${open === index
                      ? "rotate-180"
                      : ""
                    }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}