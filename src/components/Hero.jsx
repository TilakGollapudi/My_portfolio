import React from "react";
import CV from "../assets/Tilak_Gollapudi_Resume (5).pdf";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 8.999h3.564v11.453H3.555V8.999Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="mr-2 h-5 w-5"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="mr-2 h-5 w-5"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const HackerRankIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 3.5C5.67 3.5 5 4.17 5 5v14c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V5c0-.83-.67-1.5-1.5-1.5h-11Zm1.25 2h2.1v4.1h4.3V5.5h2.1v13h-2.1v-4.5h-4.3v4.5h-2.1v-13Zm2.1 6.1v2h4.3v-2h-4.3Z" />
  </svg>
);


const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      name: "GitHub",
      url: "https://github.com/TilakGollapudi",
      icon: <GithubIcon />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tilak-gollapudi",
      icon: <LinkedinIcon />,
    },
    {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/gollapudithilak2",
    icon: <HackerRankIcon />,
  },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    socialBorder: "border-gray-700 text-gray-300",
    socialHover:
      "hover:border-orange-500 hover:bg-orange-500 hover:text-white",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    socialBorder: "border-gray-300 text-gray-700",
    socialHover:
      "hover:border-orange-500 hover:bg-orange-500 hover:text-white",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-5 ${
        darkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full blur-3xl ${
          darkMode ? "bg-orange-500/10" : "bg-orange-400/20"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full blur-3xl ${
          darkMode ? "bg-orange-500/10" : "bg-orange-400/20"
        }`}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center pt-28 text-center sm:pt-32">

        {/* Social Icons */}
        <div
          className="mb-8 flex items-center justify-center gap-4"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${theme.socialBorder} ${theme.socialHover}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Greeting */}
        <p
          className="mb-3 text-lg font-medium tracking-wide text-orange-500 sm:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className={`mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl ${theme.textPrimary}`}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Tilak Gollapudi
        </h1>

        {/* Profession */}
        <h2
          className="mb-5 text-2xl font-bold sm:text-3xl md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Java Full Stack Developer
          </span>
        </h2>

        {/* Technology Stack */}
        <p
          className="mb-6 text-sm font-medium tracking-wide text-orange-500 sm:text-base"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          Java • Spring Boot • React • REST APIs • MySQL
        </p>

        {/* Description */}
        <p
          className={`mx-auto mb-9 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${theme.textSecondary}`}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          I build scalable, reliable, and user-focused applications using
          modern full-stack technologies. I enjoy turning complex problems
          into clean, efficient, and meaningful digital solutions.
        </p>

        {/* Buttons */}
        <div
          className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {/* Download CV */}
          <a
            href={CV}
            download
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] sm:w-auto sm:text-lg"
            >
              <DownloadIcon />
              Download CV
            </button>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="w-full sm:w-auto"
          >
            <button
              type="button"
              className={`flex w-full items-center justify-center rounded-full border-2 px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white sm:w-auto sm:text-lg ${
                darkMode ? "border-orange-500 text-white" : "border-orange-500 text-gray-800"
              }`}
            >
              <MailIcon />
              Contact Me
            </button>
          </a>
        </div>

        {/* Availability */}
        <div
          className={`mt-9 flex items-center gap-2 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Available for opportunities
        </div>

        {/* Scroll Indicator */}
        <div
          className="mt-7 flex flex-col items-center text-gray-500"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span className="text-xs tracking-wide">
            Scroll to explore
          </span>

          <div className="mt-2 h-7 w-4 rounded-full border border-gray-500 p-1">
            <div className="mx-auto h-1.5 w-1 animate-bounce rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
