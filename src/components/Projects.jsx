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
} from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
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

      // Add your deployed URL here when available
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

      demo: null,
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

      github: "https://github.com/TilakGollapudi/FOODCAVE",

      demo: null,
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

      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-12 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
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
            A selection of projects showcasing my experience in
            Java development, web technologies, databases,
            and machine learning.
          </p>

        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project) => (
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

                  {/* PROJECT NUMBER */}
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
                  Technologies
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

              {/* ================= KEY FEATURES ================= */}
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
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />

                      <span>
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* ================= ACTION BUTTONS ================= */}
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                {/* GITHUB BUTTON */}
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
                  <FaGithub className="text-base" />

                  <span>
                    GitHub
                  </span>

                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                {/* LIVE DEMO BUTTON */}
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
                    <FaExternalLinkAlt className="text-sm" />

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
                    title="Live demo is not currently available"
                  >
                    <FaExternalLinkAlt className="text-sm" />

                    <span>
                      Live Demo
                    </span>
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
