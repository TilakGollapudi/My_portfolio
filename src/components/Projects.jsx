import { useState } from "react";

import {
  FaJava,
  FaDatabase,
  FaJs,
  FaServer,
  FaCode,
  FaProjectDiagram,
  FaBrain,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
  FaTerminal,
  FaCalculator,
  FaShoppingCart,
  FaUserGraduate,
  FaTicketAlt,
  FaPhone,
  FaUniversity,
  FaReceipt,
  FaCogs,
  FaArrowLeft,
} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  /*
   * ============================================================
   * MAIN PROJECTS
   * These appear when your portfolio is opened normally.
   * ============================================================
   */

  const mainProjects = [
    {
      number: "01",
      title: "Savora",
      subtitle: "Restaurant Management System",

      description:
        "Java-based restaurant management system for menu management, order processing, billing, customer records, inventory tracking, and staff administration.",

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "JDBC",
          icon: FaDatabase,
          color: "#4479A1",
        },
        {
          name: "MySQL",
          icon: FaDatabase,
          color: "#4479A1",
        },
        {
          name: "MVC",
          icon: FaProjectDiagram,
          color: "#FF7A00",
        },
        {
          name: "DAO Pattern",
          icon: FaCode,
          color: "#6DB33F",
        },
        {
          name: "SQL",
          icon: FaDatabase,
          color: "#4479A1",
        },
      ],

      features: [
        "Menu management",
        "Order processing",
        "Billing & customer records",
        "Inventory tracking",
        "Role-based authentication",
      ],

      github:
        "https://github.com/TilakGollapudi/Savora-Restaurant",

      demo: null,
    },

    {
      number: "02",
      title: "The Foundation School",
      subtitle: "Java Web Application",

      description:
        "Java-based web application built with JSP, HTML, CSS, and MySQL, featuring structured navigation, reusable UI components, server-side functionality, and database integration.",

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "JSP",
          icon: FaServer,
          color: "#F89820",
        },
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "#1572B6",
        },
        {
          name: "MySQL",
          icon: FaDatabase,
          color: "#4479A1",
        },
      ],

      features: [
        "JSP-based web application",
        "Server-side functionality",
        "MySQL database integration",
        "Reusable UI components",
        "Responsive web pages",
      ],

      github:
        "https://github.com/TilakGollapudi/The-Foundation-School",

      demo:
        "https://the-foundation-school-4bt7.onrender.com/",
    },

    {
      number: "03",
      title: "Food Cave",
      subtitle: "Food Pre-Ordering System",

      description:
        "Responsive food pre-ordering application with user authentication, menu management, cart operations, order processing, and relational database integration.",

      technologies: [
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          color: "#F7DF1E",
        },
        {
          name: "PHP",
          icon: FaServer,
          color: "#777BB4",
        },
        {
          name: "MySQL",
          icon: FaDatabase,
          color: "#4479A1",
        },
      ],

      features: [
        "User authentication",
        "Menu management",
        "Cart operations",
        "Order processing",
        "Responsive user interface",
      ],

      github:
        "https://github.com/TilakGollapudi/FOODCAVE",

      demo: "",
    },

    {
      number: "04",
      title: "Financial Behavior Prediction",
      subtitle: "Deep Learning & Machine Learning",

      description:
        "Deep learning-based prediction system developed to analyze financial behavior patterns using Python, TensorFlow, Keras, and machine-learning techniques.",

      technologies: [
        {
          name: "Python",
          icon: FaCode,
          color: "#3776AB",
        },
        {
          name: "TensorFlow",
          icon: FaBrain,
          color: "#FF6F00",
        },
        {
          name: "Keras",
          icon: FaBrain,
          color: "#D00000",
        },
        {
          name: "Machine Learning",
          icon: FaBrain,
          color: "#FF7A00",
        },
      ],

      features: [
        "Data preprocessing",
        "Feature engineering",
        "Model training",
        "Model evaluation",
        "Parameter experimentation",
      ],

      github:
        "https://github.com/TilakGollapudi/An-Integrated-Framework-For-Predicting-Financial-Behaviour-Using-Deep-Learning",

      demo:
        "https://smart-financial-analyzer.streamlit.app/",
    },
  ];

  /*
   * ============================================================
   * CORE JAVA CONSOLE PROJECTS
   * These appear when "Console Based Projects" is clicked.
   * ============================================================
   */

  const consoleProjects = [
    {
      number: "01",
      title: "Banking System",
      subtitle: "Core Java Console Application",

      description:
        "Console-based banking application developed using Core Java to simulate common banking operations including account creation, PIN authentication, balance checking, deposits, and withdrawals.",

      icon: FaUniversity,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Scanner",
          icon: FaCode,
          color: "#6DB33F",
        },
        {
          name: "Control Flow",
          icon: FaCode,
          color: "#4479A1",
        },
      ],

      features: [
        "Account creation",
        "PIN authentication",
        "Balance checking",
        "Deposit & withdrawal",
        "Input validation",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "02",
      title: "DMart",
      subtitle: "Supermarket Billing System",

      description:
        "Console-based supermarket application that allows users to select products and quantities from different categories and generates a final purchase bill.",

      icon: FaShoppingCart,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Switch",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "StringBuilder",
          icon: FaCode,
          color: "#6DB33F",
        },
      ],

      features: [
        "Product categories",
        "Product selection",
        "Quantity-based pricing",
        "Shopping flow",
        "Bill generation",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "03",
      title: "Supermarket",
      subtitle: "Console Billing Application",

      description:
        "Core Java supermarket application that simulates a shopping experience with product selection, category-based menus, billing calculations, and purchase summaries.",

      icon: FaReceipt,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "Collections",
          icon: FaDatabase,
          color: "#4479A1",
        },
        {
          name: "Scanner",
          icon: FaCode,
          color: "#6DB33F",
        },
        {
          name: "Control Flow",
          icon: FaCogs,
          color: "#FF7A00",
        },
      ],

      features: [
        "Product category selection",
        "Shopping cart flow",
        "Bill calculation",
        "Purchase summary",
        "Interactive console menus",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "04",
      title: "Ticket Booking System",
      subtitle: "Core Java Booking Application",

      description:
        "Console-based ticket booking application developed using Core Java with interactive menus for movie and bus ticket booking.",

      icon: FaTicketAlt,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Switch",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "Scanner",
          icon: FaCode,
          color: "#6DB33F",
        },
      ],

      features: [
        "Movie ticket booking",
        "Bus ticket booking",
        "Category-based menus",
        "Interactive input",
        "Booking calculations",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "05",
      title: "Student Result System",
      subtitle: "Core Java Result Management",

      description:
        "Core Java console application for processing student academic information, calculating total and average marks, determining results, and generating grades.",

      icon: FaUserGraduate,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Methods",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "Constructors",
          icon: FaCode,
          color: "#6DB33F",
        },
      ],

      features: [
        "Student information",
        "Marks calculation",
        "Average calculation",
        "Pass / fail evaluation",
        "Grade generation",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "06",
      title: "Student",
      subtitle: "Object-Oriented Java Application",

      description:
        "Object-oriented Core Java application that models students using classes and constructors, stores subject marks, and generates student result summaries.",

      icon: FaUserGraduate,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Classes & Objects",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "Arrays",
          icon: FaDatabase,
          color: "#6DB33F",
        },
      ],

      features: [
        "Student objects",
        "Constructor initialization",
        "Subject-wise marks",
        "Multiple students",
        "Result calculation",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "07",
      title: "Electricity Bill Calculator",
      subtitle: "Core Java Utility Application",

      description:
        "Core Java console application that calculates electricity bills based on customer type and units consumed using conditional logic and billing slabs.",

      icon: FaCalculator,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "Conditional Logic",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "Switch",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "Scanner",
          icon: FaCode,
          color: "#6DB33F",
        },
      ],

      features: [
        "Domestic billing",
        "Commercial billing",
        "Unit-based calculation",
        "Billing slab logic",
        "Interactive input",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },

    {
      number: "08",
      title: "HR Call Simulation",
      subtitle: "Interactive Core Java Application",

      description:
        "Interactive Core Java console application that simulates an HR screening call using user responses, conditional branching, and a structured conversation flow.",

      icon: FaPhone,

      technologies: [
        {
          name: "Java",
          icon: FaJava,
          color: "#F89820",
        },
        {
          name: "OOP",
          icon: FaCogs,
          color: "#FF7A00",
        },
        {
          name: "String Handling",
          icon: FaCode,
          color: "#4479A1",
        },
        {
          name: "Conditional Logic",
          icon: FaCode,
          color: "#6DB33F",
        },
      ],

      features: [
        "HR conversation flow",
        "Candidate response handling",
        "Conditional branching",
        "Interactive console",
        "Input processing",
      ],

      github:
        "https://github.com/TilakGollapudi/Console-Based-Projects",
    },
  ];

  /*
   * ============================================================
   * STATE
   * ============================================================
   */

  const [showConsoleProjects, setShowConsoleProjects] = useState(false);

  const projects = showConsoleProjects
    ? consoleProjects
    : mainProjects;

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <section
      id="projects"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-16 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center mb-10">

          <p className="text-orange-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-2">
            What I've Built
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="text-orange-500">
              Projects
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            {showConsoleProjects
              ? "A collection of Core Java console applications demonstrating object-oriented programming, problem solving, and application logic."
              : "A selection of projects showcasing my experience in Java development, web technologies, databases, and machine learning."}
          </p>

        </div>

        {/* =====================================================
            PROJECT CATEGORY BUTTONS
        ====================================================== */}

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">

          {/* MAIN PROJECTS BUTTON */}

          <button
            onClick={() => setShowConsoleProjects(false)}
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-lg
              border
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                !showConsoleProjects
                  ? "bg-orange-500 border-orange-500 text-white"
                  : darkMode
                  ? "border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500"
                  : "border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500"
              }
            `}
          >
            <FaCode />

            <span>
              Main Projects
            </span>

          </button>

          {/* CONSOLE PROJECTS BUTTON */}

          <button
            onClick={() => setShowConsoleProjects(true)}
            className={`
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-lg
              border
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                showConsoleProjects
                  ? "bg-orange-500 border-orange-500 text-white"
                  : darkMode
                  ? "border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-500"
                  : "border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500"
              }
            `}
          >
            <FaTerminal />

            <span>
              Console Based Projects
            </span>

          </button>

        </div>

        {/* =====================================================
            CONSOLE PROJECT HEADER
        ====================================================== */}

        {showConsoleProjects && (
          <div
            className={`
              mb-8
              rounded-2xl
              border
              p-5
              sm:p-6
              ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-white border-gray-200"
              }
            `}
          >

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>

                <div className="flex items-center gap-2 mb-1">

                  <FaJava
                    className="text-xl"
                    style={{ color: "#F89820" }}
                  />

                  <h3 className="text-xl font-bold">
                    Core Java Console Projects
                  </h3>

                </div>

                <p
                  className={`text-sm ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  8 console applications built using Core Java
                  and object-oriented programming concepts.
                </p>

              </div>

              <a
                href="https://github.com/TilakGollapudi/Console-Based-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  border
                  border-orange-500
                  text-orange-500
                  text-sm
                  font-medium
                  transition-all
                  hover:bg-orange-500
                  hover:text-white
                "
              >

                <FaGithub />

                <span>
                  Repository
                </span>

                <FaExternalLinkAlt className="text-[10px]" />

              </a>

            </div>

          </div>
        )}

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project) => {

            const ProjectIcon = project.icon;

            return (
              <article
                key={project.number}
                className={`
                  group
                  rounded-2xl
                  border
                  p-5 sm:p-6
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 hover:border-orange-500/70"
                      : "bg-white border-gray-200 hover:border-orange-400"
                  }
                `}
              >

                {/* ================= PROJECT HEADER ================= */}

                <div className="flex items-start justify-between gap-4 mb-4">

                  <div className="flex items-start gap-3 min-w-0">

                    {/* NUMBER */}

                    <span
                      className={`
                        shrink-0
                        text-xs
                        font-bold
                        px-2
                        py-1
                        rounded-md
                        border
                        mt-0.5
                        ${
                          darkMode
                            ? "border-gray-700 text-gray-500"
                            : "border-gray-200 text-gray-400"
                        }
                      `}
                    >
                      {project.number}
                    </span>

                    {/* ICON FOR CONSOLE PROJECTS */}

                    {showConsoleProjects && ProjectIcon && (
                      <div
                        className={`
                          shrink-0
                          w-10
                          h-10
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          border
                          ${
                            darkMode
                              ? "bg-gray-900 border-gray-700"
                              : "bg-orange-50 border-orange-100"
                          }
                        `}
                      >
                        <ProjectIcon className="text-orange-500 text-lg" />
                      </div>
                    )}

                    {/* TITLE */}

                    <div className="min-w-0">

                      <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-orange-500 text-sm font-medium mt-1">
                        {project.subtitle}
                      </p>

                    </div>

                  </div>

                  {/* GITHUB ICON */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className={`
                      shrink-0
                      p-2
                      rounded-lg
                      border
                      transition-all
                      duration-200
                      hover:border-orange-500
                      hover:text-orange-500
                      hover:-translate-y-0.5
                      ${
                        darkMode
                          ? "border-gray-700 text-gray-300"
                          : "border-gray-200 text-gray-600"
                      }
                    `}
                  >
                    <FaGithub className="text-xl" />
                  </a>

                </div>

                {/* CONSOLE BADGE */}

                {showConsoleProjects && (
                  <div className="mb-4">

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-2.5
                        py-1
                        rounded-md
                        bg-orange-500/10
                        border
                        border-orange-500/20
                        text-orange-500
                        text-xs
                        font-semibold
                      "
                    >
                      <FaTerminal />

                      Console Application
                    </span>

                  </div>
                )}

                {/* ================= DESCRIPTION ================= */}

                <p
                  className={`
                    text-sm
                    leading-relaxed
                    mb-5
                    ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  `}
                >
                  {project.description}
                </p>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mb-5">

                  <h4 className="text-xs uppercase tracking-wider font-semibold text-orange-500 mb-2.5">
                    {showConsoleProjects
                      ? "Technologies & Concepts"
                      : "Technologies"}
                  </h4>

                  <div className="flex flex-wrap gap-1.5">

                    {project.technologies.map((technology) => {

                      const Icon = technology.icon;

                      return (
                        <span
                          key={technology.name}
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            px-2.5
                            py-1.5
                            rounded-lg
                            border
                            text-xs sm:text-sm
                            font-medium
                            whitespace-nowrap
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
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
                            className="text-sm sm:text-base shrink-0"
                            style={{
                              color: technology.color,
                            }}
                          />

                          <span>
                            {technology.name}
                          </span>

                        </span>
                      );

                    })}

                  </div>

                </div>

                {/* ================= FEATURES ================= */}

                <div className="mb-6">

                  <h4 className="text-xs uppercase tracking-wider font-semibold text-orange-500 mb-2.5">
                    Key Features
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className={`
                          flex
                          items-start
                          gap-2
                          text-sm
                          ${
                            darkMode
                              ? "text-gray-400"
                              : "text-gray-600"
                          }
                        `}
                      >

                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-orange-500
                            shrink-0
                            mt-1.5
                          "
                        />

                        <span>
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* ================= ACTION BUTTONS ================= */}

                <div className="mt-auto">

                  {showConsoleProjects ? (

                    /*
                     * CONSOLE PROJECT
                     * Only GitHub button because there is
                     * no browser-based live demo.
                     */

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2.5
                        rounded-lg
                        bg-orange-500
                        text-white
                        font-medium
                        text-sm
                        transition-all
                        duration-200
                        hover:bg-orange-600
                        hover:-translate-y-0.5
                      "
                    >

                      <FaGithub />

                      <span>
                        View Source Code
                      </span>

                      <FaExternalLinkAlt className="text-[10px]" />

                    </a>

                  ) : (

                    /*
                     * MAIN PROJECT
                     * GitHub + Live Demo
                     */

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                      {/* GITHUB */}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-lg
                          border
                          font-medium
                          text-sm
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-orange-500
                          hover:text-orange-500
                          ${
                            darkMode
                              ? "border-gray-700 text-gray-300"
                              : "border-gray-200 text-gray-700"
                          }
                        `}
                      >

                        <FaGithub />

                        <span>
                          GitHub
                        </span>

                        <FaExternalLinkAlt className="text-[10px]" />

                      </a>

                      {/* LIVE DEMO */}

                      {project.demo ? (

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-lg
                            bg-orange-500
                            text-white
                            font-medium
                            text-sm
                            transition-all
                            duration-200
                            hover:bg-orange-600
                            hover:-translate-y-0.5
                          "
                        >

                          <FaExternalLinkAlt />

                          <span>
                            Live Demo
                          </span>

                        </a>

                      ) : (

                        <span
                          className={`
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-lg
                            border
                            font-medium
                            text-sm
                            cursor-not-allowed
                            opacity-50
                            ${
                              darkMode
                                ? "border-gray-700 text-gray-500"
                                : "border-gray-200 text-gray-400"
                            }
                          `}
                        >

                          <FaExternalLinkAlt />

                          <span>
                            Live Demo
                          </span>

                        </span>

                      )}

                    </div>

                  )}

                </div>

              </article>
            );

          })}

        </div>

        {/* =====================================================
            BACK BUTTON FOR CONSOLE PROJECTS
        ====================================================== */}

        {showConsoleProjects && (

          <div className="flex justify-center mt-10">

            <button
              onClick={() => {
                setShowConsoleProjects(false);

                setTimeout(() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 50);
              }}
              className={`
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-lg
                border
                text-sm
                font-medium
                transition-all
                hover:border-orange-500
                hover:text-orange-500
                ${
                  darkMode
                    ? "border-gray-700 text-gray-300"
                    : "border-gray-200 text-gray-700"
                }
              `}
            >

              <FaArrowLeft />

              <span>
                Back to Main Projects
              </span>

            </button>

          </div>

        )}

      </div>
    </section>
  );
};

export default Projects;
