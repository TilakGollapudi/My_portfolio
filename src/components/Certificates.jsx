import React from "react";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaTrophy,
  FaMedal,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Certificates = ({ darkMode }) => {
  const certificates = [
    {
      title: "Full-Stack Java Development",
      issuer: "Simplilearn SkillUp",
      type: "Certification",
      color: "#F89820",
      link: "https://drive.google.com/file/d/1Sq2LV4ZQSeDlr2tuS_itDzst8XdTtCgB/view?usp=sharing",
    },
    {
      title: "Structured Query Language (SQL)",
      issuer: "HackerRank",
      type: "Certification",
      color: "#4479A1",
      link: "https://www.hackerrank.com/certificates/4f8d34bbf3ee",
    },
    {
      title: "JavaScript Essentials 1 (JSE)",
      issuer: "Cisco",
      type: "Certification",
      color: "#1BA0D7",
      link: "https://drive.google.com/file/d/1zYFU6QvDzeizrPOxf6BBceuiFKMa1B7r/view?usp=sharing",
    },
    {
      title: "Programming Essentials in Python (PSAP)",
      issuer: "Cisco",
      type: "Certification",
      color: "#3776AB",
      link: "https://drive.google.com/file/d/1UJF-uBvng0sRYJdVwGhvF_vB8Tm_4JWm/view?usp=sharing",
    },
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      type: "Verified Role",
      color: "#00A67E",
      link: "https://www.hackerrank.com/certificates/b41a550a9e9a",
    },
  ];

  const badges = [
    {
      title: "Problem Solving",
      level: "Gold Level",
      color: "#FFD700",
    },
    {
      title: "Java",
      level: "Bronze Level",
      color: "#CD7F32",
    },
    {
      title: "SQL",
      level: "Silver Level",
      color: "#C0C0C0",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="certificates"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-20 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-2">
            Credentials & Achievements
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="text-orange-500">
              Certifications
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-4 text-sm sm:text-base ${
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            Certifications, verified achievements, and
            technical badges that showcase my continuous
            learning and problem-solving skills.
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                p-6
                transition-colors
                duration-300
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                    : "bg-white border-gray-200 hover:border-orange-400"
                }
              `}
            >
              {/* TOP ACCENT */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  backgroundColor: certificate.color,
                }}
              />

              {/* ICON */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${
                      darkMode
                        ? "bg-gray-900"
                        : "bg-gray-50"
                    }
                  `}
                >
                  <FaCertificate
                    className="text-2xl"
                    style={{
                      color: certificate.color,
                    }}
                  />
                </div>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${
                      darkMode
                        ? "bg-gray-900 text-gray-400"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {certificate.type}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-2">
                {certificate.title}
              </h3>

              {/* ISSUER */}
              <p
                className="text-sm font-semibold mb-5"
                style={{
                  color: certificate.color,
                }}
              >
                {certificate.issuer}
              </p>

              {/* VIEW */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  hover:gap-3
                  ${
                    darkMode
                      ? "text-gray-300 hover:text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }
                `}
              >
                View Certificate
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* HACKERRANK BADGES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="text-center mt-24 mb-10"
        >
          <p className="text-orange-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-2">
            Coding Achievements
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            HackerRank{" "}
            <span className="text-orange-500">
              Badges
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.2,
                },
              }}
              className={`
                rounded-2xl
                border
                p-6
                text-center
                transition-colors
                duration-300
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                    : "bg-white border-gray-200 hover:border-orange-400"
                }
              `}
            >
              <div
                className={`
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-4
                  ${
                    darkMode
                      ? "bg-gray-900"
                      : "bg-gray-50"
                  }
                `}
              >
                <FaTrophy
                  className="text-2xl"
                  style={{
                    color: badge.color,
                  }}
                />
              </div>

              <h3 className="text-lg font-bold mb-1">
                {badge.title}
              </h3>

              <p
                className="text-sm font-semibold"
                style={{
                  color: badge.color,
                }}
              >
                {badge.level}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
