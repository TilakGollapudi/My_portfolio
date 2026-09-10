import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border px-5 py-4 shadow-xl ${
        darkMode
          ? "border-gray-700 bg-gray-950"
          : "border-orange-200 bg-white"
      }`}
    >
      {/* Main Navbar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Portfolio<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.name.toLowerCase();

            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={`relative text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : darkMode
                    ? "text-white hover:text-orange-400"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {item.name}

                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-orange-500"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Dark Mode */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl shadow-md"
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-3xl md:hidden ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`mt-4 border-t pt-4 md:hidden ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center gap-5">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.name.toLowerCase();

                return (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`text-lg font-semibold ${
                      isActive
                        ? "text-orange-500"
                        : darkMode
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
