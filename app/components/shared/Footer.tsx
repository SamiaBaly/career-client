"use client";

import Link from "next/link";
import {
  
  Mail,
  Heart,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              CareerPilot AI
            </h2>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-7">
              AI-powered career guidance platform helping
              students and professionals build stronger
              resumes, discover career paths and improve
              their skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/career">Career</Link>
              <Link href="/dashboard">
                Dashboard
              </Link>
              <Link href="/login">Login</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Resources
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/resume">
                Resume Builder
              </Link>

              <Link href="/analysis">
                Resume Analysis
              </Link>

              <Link href="/career">
                Career Match
              </Link>

              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600 dark:text-gray-400">

              <p>
                📧 samiabaly116@gmail.com
              </p>

              <p>
                📍 Bangladesh
              </p>

              <div className="flex items-center gap-4 pt-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub
                    className="hover:text-blue-600 transition"
                  />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LiaLinkedin
                    className="hover:text-blue-600 transition"
                  />
                </a>

                <a href="mailto:samiabaly116@gmail.com">
                  <Mail
                    className="hover:text-blue-600 transition"
                  />
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {year} CareerPilot AI. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500">
            Made with
            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />
            by Samia Baly
          </p>

        </div>

      </div>
    </footer>
  );
}