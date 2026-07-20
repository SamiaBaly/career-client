"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="
      w-full
      min-h-screen
      relative
      overflow-hidden
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      dark:from-gray-950
      dark:via-gray-900
      dark:to-gray-950
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-24
        lg:py-32
      ">

        <div className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">


          {/* LEFT CONTENT */}

          <motion.div

            initial={{
              opacity: 0,
              x: -60,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

          >


            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-700
              dark:bg-blue-900/30
              dark:text-blue-300
              mb-6
            ">

              <Sparkles size={18} />

              <span className="text-sm font-medium">
                AI Powered Career Guidance
              </span>

            </div>



            <h1 className="
              text-5xl
              lg:text-7xl
              font-extrabold
              leading-tight
              text-gray-900
              dark:text-white
            ">

              Build Your

              <span className="text-blue-600">
                {" "}Dream Career{" "}
              </span>

              with AI

            </h1>



            <p className="
              mt-8
              text-lg
              text-gray-600
              dark:text-gray-300
              max-w-xl
              leading-8
            ">

              Upload your resume, receive an AI-powered analysis,
              discover matching careers, identify skill gaps,
              and accelerate your professional journey.

            </p>



            <div className="
              flex
              flex-wrap
              gap-5
              mt-10
            ">


              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-4
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >

                Get Started

                <ArrowRight size={18} />

              </Link>



              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-600
                  px-7
                  py-4
                  text-blue-600
                  font-semibold
                  hover:bg-blue-50
                  dark:hover:bg-gray-800
                  transition
                "
              >

                <FileText size={18} />

                Analyze Resume

              </Link>


            </div>



            {/* STATS */}

            <motion.div

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.5,
                duration: 0.7,
              }}

              className="
                flex
                flex-wrap
                gap-10
                mt-14
              "

            >


              <div>

                <h2 className="
                  text-3xl
                  font-bold
                  text-blue-600
                ">
                  10K+
                </h2>

                <p className="
                  text-gray-600
                  dark:text-gray-400
                ">
                  Resumes Reviewed
                </p>

              </div>



              <div>

                <h2 className="
                  text-3xl
                  font-bold
                  text-blue-600
                ">
                  500+
                </h2>

                <p className="
                  text-gray-600
                  dark:text-gray-400
                ">
                  Career Matches
                </p>

              </div>



              <div>

                <h2 className="
                  text-3xl
                  font-bold
                  text-blue-600
                ">
                  95%
                </h2>

                <p className="
                  text-gray-600
                  dark:text-gray-400
                ">
                  Satisfaction
                </p>

              </div>


            </motion.div>


          </motion.div>






          {/* RIGHT AI CARD */}


          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            transition={{
              duration: 0.9,
              delay: 0.2,
            }}

            className="relative"

          >


            <motion.div

              animate={{
                y: [0, -12, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
                rounded-3xl
                bg-white
                dark:bg-gray-900
                shadow-2xl
                border
                border-gray-200
                dark:border-gray-800
                p-8
              "

            >



              <div className="
                flex
                justify-between
                items-center
                mb-8
              ">


                <h3 className="text-xl font-bold">
                  Resume Analysis
                </h3>



                <span className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-700
                  font-semibold
                ">
                  Score 92%
                </span>


              </div>



              <div className="space-y-5">


                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    rounded-xl
                    bg-blue-50
                    dark:bg-gray-800
                    p-4
                  "
                >
                  ✅ Strong React & Next.js Skills
                </motion.div>



                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    rounded-xl
                    bg-blue-50
                    dark:bg-gray-800
                    p-4
                  "
                >
                  ✅ Excellent Project Experience
                </motion.div>



                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    rounded-xl
                    bg-yellow-50
                    dark:bg-yellow-900/20
                    p-4
                  "
                >
                  ⚠ Add Docker & AWS Skills
                </motion.div>



                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    rounded-xl
                    bg-green-50
                    dark:bg-green-900/20
                    p-4
                  "
                >
                  🎯 Best Match: Full Stack Developer
                </motion.div>


              </div>


            </motion.div>


          </motion.div>



        </div>

      </div>


    </section>
  );
}