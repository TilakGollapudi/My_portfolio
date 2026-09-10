import React from "react";
import {
  FaJava,
  FaDatabase,
  FaJs,
  FaServer,
  FaCode,
  FaProjectDiagram,
  FaRobot,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDesktop,
  FaCogs,
  FaCloud,
  FaBrain,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Skills = ({ darkMode }) => {
  const skills = {
    Languages: [
      {
        name: "Core Java",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: "SQL",
        icon: FaDatabase,
        color: "#4479A1",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
    ],

    Backend: [
      {
        name: "Servlets",
        icon: FaServer,
        color: "#F89820",
      },
      {
        name: "JSP",
        icon: FaCode,
        color: "#F89820",
      },
      {
        name: "JDBC",
        icon: FaDatabase,
        color: "#4479A1",
      },
      {
        name: "Spring",
        icon: FaCogs,
        color: "#6DB33F",
      },
      {
        name: "Spring Boot",
        icon: FaCogs,
        color: "#6DB33F",
      },
      {
        name: "Spring MVC",
        icon: FaCogs,
        color: "#6DB33F",
      },
      {
        name: "REST APIs",
        icon: FaProjectDiagram,
        color: "#FF7A00",
      },
      {
        name: "Hibernate/JPA",
        icon: FaDatabase,
        color: "#59666C",
      },
      {
        name: "Microservices",
        icon: FaProjectDiagram,
        color: "#FF7A00",
      },
    ],

    Frontend: [
      {
        name: "HTML",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "Bootstrap 5",
        icon: FaCode,
        color: "#7952B3",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
      {
        name: "jQuery",
        icon: FaCode,
        color: "#0769AD",
      },
      {
        name: "React JS",
        icon: FaCode,
        color: "#61DAFB",
      },
      {
        name: "Angular",
        icon: FaCode,
        color: "#DD0031",
      },
    ],

    Database: [
      {
        name: "MySQL",
        icon: FaDatabase,
        color: "#4479A1",
      },
    ],

    Tools: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: darkMode ? "#FFFFFF" : "#181717",
      },
      {
        name: "Eclipse",
        icon: FaDesktop,
        color: "#2C2255",
      },
      {
        name: "Visual Studio Code",
        icon: FaCode,
        color: "#007ACC",
      },
      {
        name: "IntelliJ IDEA",
        icon: FaDesktop,
        color: "#FE2857",
      },
      {
        name: "Apache Tomcat",
        icon: FaServer,
        color: "#F8DC75",
      },
      {
        name: "Apache Maven",
        icon: FaCogs,
        color: "#C71A36",
      },
      {
        name: "Postman",
        icon: FaCloud,
        color: "#FF6C37",
      },
      {
        name: "MySQL Workbench",
        icon: FaDatabase,
        color: "#4479A1",
      },
    ],

    "Generative AI": [
      {
        name: "Spring AI",
        icon: FaBrain,
        color: "#6DB33F",
      },
      {
        name: "Prompt Engineering",
        icon: FaRobot,
        color: "#FF7A00",
      },
      {
        name: "RAG",
        icon: FaProjectDiagram,
        color: "#FF7A00",
      },
      {
        name: "AI Model Integration",
        icon: FaRobot,
        color: "#FF7A00",
      },
    ],
  };

  const descriptions = {
    Languages: "Core building blocks",
    Backend: "Where I spend most of my time",
    Frontend: "Interfaces for the services I build",
    Database: "Schema design & queries",
    Tools: "Daily workflow",
    "Generative AI": "Currently exploring",
  };

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
      id="skills"
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
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <p className="text-orange-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-2">
            What I work with
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="text-orange-500">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* SKILLS GRID */}
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
          {Object.entries(skills).map(
            ([category, items]) => (
              <motion.div
                key={category}
                variants={fadeUp}
                className={`
                  rounded-2xl
                  border
                  p-5
                  min-h-[220px]
                  flex
                  flex-col
                  transition-colors
                  duration-300
                  ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                      : "bg-white border-gray-200 hover:border-orange-400"
                  }
                `}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {/* CATEGORY TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">
                  {category}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-sm mb-4 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  {descriptions[category]}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.span
                        key={skill.name}
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
                          px-2.5
                          py-1.5
                          rounded-lg
                          border
                          text-sm
                          font-medium
                          whitespace-nowrap
                          cursor-default
                          transition-colors
                          duration-200
                          hover:border-orange-500
                          hover:text-orange-500
                          ${
                            darkMode
                              ? "bg-gray-900 border-gray-700 text-gray-300"
                              : "bg-gray-50 border-gray-200 text-gray-700"
                          }
                        `}
                      >
                        <Icon
                          className="text-base shrink-0"
                          style={{
                            color: skill.color,
                          }}
                        />

                        <span>
                          {skill.name}
                        </span>
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
