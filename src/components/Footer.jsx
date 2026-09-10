import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`relative overflow-hidden border-t ${
        darkMode
          ? "bg-gray-950 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "opacity-[0.02]" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Orange Glow */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-[-180px] w-[400px] h-[250px] rounded-full blur-[120px] ${
            darkMode
              ? "bg-orange-500/[0.035]"
              : "bg-orange-500/[0.02]"
          }`}
        />
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP CONTENT ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="py-10 sm:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ================= BRAND ================= */}

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Portfolio
                <span className="text-orange-500">.</span>
              </h2>

              <p
                className={`mt-3 max-w-xs text-sm leading-6 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                Computer Science and Engineering graduate
                passionate about building modern, scalable,
                and user-focused digital experiences.
              </p>

              {/* Social Links */}

              <div className="flex items-center gap-2.5 mt-5">

                {/* GitHub */}
                <a
                  href="https://github.com/TilakGollapudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`
                    w-10
                    h-10
                    rounded-lg
                    border
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-orange-500
                    hover:border-orange-500
                    ${
                      darkMode
                        ? "border-gray-800 text-gray-500"
                        : "border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <FaGithub className="text-base" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/tilak-gollapudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`
                    w-10
                    h-10
                    rounded-lg
                    border
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-orange-500
                    hover:border-orange-500
                    ${
                      darkMode
                        ? "border-gray-800 text-gray-500"
                        : "border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <FaLinkedinIn className="text-base" />
                </a>

                {/* Email */}
                <a
                  href="mailto:gollapudithilak1308@gmail.com"
                  aria-label="Email"
                  className={`
                    w-10
                    h-10
                    rounded-lg
                    border
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-orange-500
                    hover:border-orange-500
                    ${
                      darkMode
                        ? "border-gray-800 text-gray-500"
                        : "border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <FaEnvelope className="text-base" />
                </a>
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}

            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Quick Links
              </h3>

              <div className="w-7 h-[2px] bg-orange-500 mt-2.5 mb-4" />

              <ul className="space-y-2.5">
                {[
                  ["Home", "home"],
                  ["About", "about"],
                  ["Skills", "skills"],
                  ["Projects", "projects"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`
                        text-sm
                        transition-colors
                        duration-200
                        hover:text-orange-500
                        ${
                          darkMode
                            ? "text-gray-500"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONNECT ================= */}

            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                Let's Connect
              </h3>

              <div className="w-7 h-[2px] bg-orange-500 mt-2.5 mb-4" />

              <p
                className={`text-sm leading-6 max-w-xs ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-500"
                }`}
              >
                Interested in working together or have an
                opportunity? I'd love to hear from you.
              </p>

              <a
                href="mailto:your.email@example.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-4
                  text-sm
                  font-semibold
                  text-orange-500
                  hover:text-orange-400
                  transition-colors
                "
              >
                <FaEnvelope className="text-xs" />
                gollapudithilak1308@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= DIVIDER ================= */}

        <div
          className={`border-t ${
            darkMode
              ? "border-gray-800"
              : "border-gray-200"
          }`}
        />

        {/* ================= BOTTOM BAR ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5"
        >
          {/* Copyright */}

          <p
            className={`text-xs sm:text-sm ${
              darkMode
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            © {currentYear} Portfolio. All rights reserved.
          </p>

          {/* Built With */}

          <p
            className={`text-xs sm:text-sm ${
              darkMode
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            Designed & Built with
            <span className="text-orange-500 mx-1">
              React
            </span>
            &
            <span className="text-orange-500 mx-1">
              Tailwind CSS
            </span>
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
              w-9
              h-9
              rounded-lg
              border
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-orange-500
              hover:border-orange-500
              ${
                darkMode
                  ? "border-gray-800 text-gray-500"
                  : "border-gray-200 text-gray-500"
              }
            `}
          >
            <FaArrowUp className="text-sm" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
