import React from "react";
import {
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Vignan Institute of Technology and Science",
      university: "",
      period: "2021 — 2025",
      score: "CGPA 6.5 / 10",
    },
    {
      degree: "Intermediate Education (XII)",
      field: "",
      institution: "Narayana Junior College",
      university: "TSBIE",
      period: "2019 — 2021",
      score: "866 Marks",
    },
    {
      degree: "Secondary Education (X)",
      field: "",
      institution: "Santhi Nikethan High School",
      university: "TSBSE",
      period: "2018 — 2019",
      score: "CGPA 8.3 / 10",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="education"
      className={`relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-[0.025]" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Orange glow */}
        <div
          className={`absolute top-[-150px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full blur-[120px] ${
            darkMode
              ? "bg-orange-500/[0.035]"
              : "bg-orange-500/[0.02]"
          }`}
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center mb-7 sm:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-7 h-px bg-orange-500" />

            <p className="text-orange-500 uppercase tracking-[0.25em] text-[11px] sm:text-xs font-semibold">
              Education
            </p>

            <span className="w-7 h-px bg-orange-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Academic{" "}
            <span className="text-orange-500">
              Background
            </span>
          </h2>

          <p
            className={`max-w-xl mx-auto mt-2 text-xs sm:text-sm leading-5 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            A snapshot of my academic journey and the
            foundation behind my technical career.
          </p>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative"
        >
          {/* TIMELINE */}
          <div className="absolute left-[13px] sm:left-[17px] top-5 bottom-5 w-px bg-gradient-to-b from-orange-500/80 via-orange-500/30 to-transparent" />

          <div className="space-y-3 sm:space-y-4">

            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative pl-9 sm:pl-11"
              >

                {/* TIMELINE DOT */}
                <div
                  className={`
                    absolute
                    left-0
                    top-6
                    w-7
                    h-7
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border
                    z-10
                    ${
                      darkMode
                        ? "bg-gray-900 border-orange-500"
                        : "bg-gray-50 border-orange-400"
                    }
                  `}
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -2,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    px-4
                    py-4
                    sm:px-6
                    sm:py-4
                    transition-all
                    duration-300
                    ${
                      darkMode
                        ? `
                          bg-gray-800/75
                          border-gray-700
                          hover:border-orange-500/50
                        `
                        : `
                          bg-white
                          border-gray-200
                          hover:border-orange-400
                          shadow-sm
                        `
                    }
                  `}
                >

                  {/* TOP ACCENT */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-orange-500 opacity-60" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    {/* LEFT CONTENT */}
                    <div className="min-w-0">

                      {/* DEGREE */}
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">

                        <h3 className="text-base sm:text-lg font-bold">
                          {item.degree}
                        </h3>

                        {item.field && (
                          <>
                            <span
                              className={
                                darkMode
                                  ? "text-gray-600"
                                  : "text-gray-300"
                              }
                            >
                              —
                            </span>

                            <p className="text-orange-500 text-xs sm:text-sm font-semibold">
                              {item.field}
                            </p>
                          </>
                        )}
                      </div>

                      {/* INSTITUTION */}
                      <div className="flex items-center gap-2 mt-2">

                        <FaUniversity
                          className="text-[11px] flex-shrink-0 text-orange-500"
                        />

                        <p
                          className={`text-xs sm:text-sm font-medium ${
                            darkMode
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          {item.institution}
                        </p>
                      </div>

                      {/* BOARD / UNIVERSITY */}
                      {item.university && (
                        <p
                          className={`text-[10px] sm:text-xs ml-4 mt-0.5 ${
                            darkMode
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          {item.university}
                        </p>
                      )}

                      {/* DATE */}
                      <div
                        className={`flex items-center gap-2 mt-2 text-[10px] ${
                          darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        <FaCalendarAlt className="text-orange-500" />

                        <span className="tracking-[0.1em]">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* SCORE BADGE */}
                    <div
                      className={`
                        self-start
                        sm:self-center
                        flex-shrink-0
                        px-3
                        py-1.5
                        rounded-md
                        border
                        ${
                          darkMode
                            ? "bg-orange-500/[0.07] border-orange-500/30"
                            : "bg-orange-50 border-orange-200"
                        }
                      `}
                    >
                      <span className="text-orange-500 text-[10px] sm:text-xs font-bold whitespace-nowrap">
                        {item.score}
                      </span>
                    </div>
                  </div>

                  {/* HOVER ACCENT */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-6
                      h-[2px]
                      w-0
                      bg-orange-500
                      group-hover:w-16
                      transition-all
                      duration-300
                    "
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center mt-5"
        >
          <p
            className={`text-[10px] ${
              darkMode
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            Continuously learning • Building • Growing
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
