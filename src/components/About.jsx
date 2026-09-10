const About = ({ darkMode }) => {
  const highlights = [
    {
      title: "Java",
      subtitle: "Core strength",
    },
    {
      title: "Full Stack",
      subtitle: "Frontend + Backend",
    },
    {
      title: "Problem Solving",
      subtitle: "HackerRank Java Silver",
    },
    {
      title: "2025",
      subtitle: "B.Tech Graduate",
    },
  ];

  const javaConcepts = [
    "OOPs",
    "Exception Handling",
    "String Handling",
    "Multithreading (basics)",
    "Collections Framework",
    "File I/O & Serialization",
    "Java 8 Features",
    "Design Patterns",
  ];

  return (
    <section
      id="about"
      className={`h-screen flex items-center justify-center px-4 sm:px-6
      pt-20 pb-5 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className="
          w-full max-w-7xl
          h-full
          max-h-[780px]
          grid grid-cols-1 lg:grid-cols-2
          gap-6 lg:gap-8
          items-center
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center min-h-0"
        >
          {/* TITLE */}
          <h1
            data-aos="fade-up"
            className="
              text-4xl sm:text-5xl lg:text-6xl
              font-bold
              mb-3
              text-transparent
              bg-gradient-to-r from-orange-400 to-orange-600
              bg-clip-text
            "
          >
            About Me
          </h1>

          {/* DESCRIPTION */}
          <div
            className={`text-sm sm:text-base lg:text-[17px] leading-7 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p className="mb-3">
              I'm a Java Full Stack Developer with hands-on experience in
              Java, Servlets, JSP, JDBC, MySQL and Apache Tomcat, and I'm
              currently strengthening my skills in Spring Boot, REST APIs
              and microservices.
            </p>

            <p>
              I enjoy working close to the backend — designing normalized
              schemas, writing clean object-oriented Java, and wiring
              data-driven applications end to end. I've owned my projects
              solo from schema design through deployment, and I'm looking
              for a role where I can keep learning and contribute to
              production-quality software.
            </p>
          </div>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`
                  rounded-xl
                  p-3
                  min-h-[105px]
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                  ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200 shadow-sm"
                  }
                `}
              >
                <h3 className="text-orange-500 font-bold text-base lg:text-lg mb-1">
                  {item.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* ================= CORE JAVA ================= */}
          <div className="mt-5">
            <h2
              className={`
                text-xs
                font-mono
                tracking-[0.25em]
                uppercase
                mb-3
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }
              `}
            >
              Core Java Concepts
            </h2>

            <div className="flex flex-wrap gap-2">
              {javaConcepts.map((concept, index) => (
                <span
                  key={index}
                  className={`
                    px-3 py-1.5
                    rounded-full
                    text-xs sm:text-sm
                    border
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:text-orange-500
                    ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-gray-300"
                        : "bg-white border-gray-200 text-gray-600"
                    }
                  `}
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          data-aos="fade-left"
          className="flex items-center min-h-0 h-full"
        >
          <div
            className={`
              relative
              w-full
              rounded-3xl
              p-6 sm:p-7
              border
              overflow-hidden
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200 shadow-xl"
              }
            `}
          >
            {/* ORANGE GLOW */}
            <div
              className="
                absolute
                -top-20
                -right-20
                w-56
                h-56
                rounded-full
                bg-orange-500/10
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* EDUCATION HEADER */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`
                    w-12 h-12
                    rounded-xl
                    flex items-center justify-center
                    ${
                      darkMode
                        ? "bg-orange-500/10"
                        : "bg-orange-50"
                    }
                  `}
                >
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M5 12v4.5c0 1.5 3.13 3.5 7 3.5s7-2 7-3.5V12"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-orange-500">
                    Education
                  </p>

                  <p className="font-bold text-base sm:text-lg">
                    2021 – 2025
                  </p>
                </div>
              </div>

              {/* DEGREE */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6">
                B.Tech – Computer Science and Engineering
              </h2>

              {/* COLLEGE */}
              <div className="flex gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-orange-500 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6"
                  />
                </svg>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg leading-snug">
                    Vignan Institute of Technology and Sciences
                  </h3>

                  <p
                    className={
                      darkMode
                        ? "text-gray-400 mt-1 text-sm"
                        : "text-gray-500 mt-1 text-sm"
                    }
                  >
                    JNTU University
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex gap-3 mb-6">
                <svg
                  className="w-5 h-5 text-orange-500 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
                  />

                  <circle
                    cx="12"
                    cy="10"
                    r="2.2"
                    strokeWidth="1.8"
                  />
                </svg>

                <p
                  className={
                    darkMode
                      ? "text-gray-400 text-sm"
                      : "text-gray-500 text-sm"
                  }
                >
                  Hyderabad, India
                </p>
              </div>

              {/* CGPA */}
              <div
                className={`
                  rounded-xl
                  p-5
                  border
                  ${
                    darkMode
                      ? "bg-gray-900 border-gray-700"
                      : "bg-orange-50 border-orange-100"
                  }
                `}
              >
                <p className="text-xs font-mono tracking-[0.25em] uppercase text-orange-500 mb-1">
                  CGPA
                </p>

                <p className="text-4xl sm:text-5xl font-bold">
                  6.5
                  <span className="text-xl sm:text-2xl">
                    /10
                  </span>
                </p>
              </div>

              {/* EXTRA INFO */}
              <div className="mt-5">
                <p
                  className={`
                    text-sm sm:text-base
                    leading-6
                    ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  Passionate about building scalable applications,
                  solving problems with Java, and continuously learning
                  modern backend technologies.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
