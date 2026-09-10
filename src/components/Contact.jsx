import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  // ================= FORM REF =================

  const formRef = useRef(null);

  // ================= FORM STATE =================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [sending, setSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ================= EMAILJS CONFIG =================
  // These values must exactly match your EmailJS dashboard.

  const SERVICE_ID = "service_thilak";
  const TEMPLATE_ID = "template_Darling";
  const PUBLIC_KEY = "FIC2P2MT5vTRlPOAx";

  // ================= ANIMATIONS =================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  // ================= INPUT STYLE =================

  const inputClass = `
    w-full
    px-3
    py-2
    rounded-lg
    border
    outline-none
    text-xs sm:text-sm
    transition-all
    focus:border-orange-500
    ${
      darkMode
        ? "bg-gray-900/60 border-gray-700 text-white placeholder-gray-600"
        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
    }
  `;

  // ================= ICON BOX =================

  const iconBox = `
    w-9
    h-9
    rounded-lg
    flex
    items-center
    justify-center
    border
    flex-shrink-0
    ${
      darkMode
        ? "bg-orange-500/[0.07] border-orange-500/20"
        : "bg-orange-50 border-orange-100"
    }
  `;

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear only the current field error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Clear previous success/error message
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (sending) {
      return;
    }

    const newErrors = {};

    // ================= NAME VALIDATION =================

    const trimmedName = formData.name.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // ================= EMAIL VALIDATION =================

    const trimmedEmail = formData.email.trim();

    if (!trimmedEmail) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // ================= MESSAGE VALIDATION =================

    const trimmedMessage = formData.message.trim();

    if (!trimmedMessage) {
      newErrors.message = "Please enter your message.";
    } else if (trimmedMessage.length < 20) {
      newErrors.message =
        "Please write at least 20 characters so I can respond properly.";
    }

    // ================= SHOW VALIDATION ERRORS =================

    setErrors(newErrors);

    // Stop if validation failed
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // ================= PREPARE FORM VALUES =================

    // Update the state with trimmed values.
    setFormData({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    setSending(true);

    setStatus({
      type: "",
      message: "",
    });

    // ================= SEND EMAIL =================

    try {
      if (!formRef.current) {
        throw new Error("Contact form is not available.");
      }

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      // ================= SUCCESS =================

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

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

        {/* Orange Glow */}

        <div
          className={`absolute top-[-150px] left-1/2 -translate-x-1/2 w-[350px] h-[250px] rounded-full blur-[110px] ${
            darkMode
              ? "bg-orange-500/[0.035]"
              : "bg-orange-500/[0.02]"
          }`}
        />

        <div
          className={`absolute bottom-[-150px] right-[-100px] w-[250px] h-[250px] rounded-full blur-[110px] ${
            darkMode
              ? "bg-orange-500/[0.02]"
              : "bg-orange-500/[0.015]"
          }`}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative max-w-5xl mx-auto">
        {/* ================= HEADER ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center mb-6 sm:mb-7"
        >
          {/* Label */}

          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="w-6 h-px bg-orange-500" />

            <p className="text-orange-500 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold">
              Contact
            </p>

            <span className="w-6 h-px bg-orange-500" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight">
            Let's{" "}
            <span className="text-orange-500">
              Connect
            </span>
          </h2>

          {/* Description */}

          <p
            className={`max-w-lg mx-auto mt-1.5 text-xs sm:text-sm leading-5 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            Have a project, opportunity, or just want to
            say hello? Feel free to reach out.
          </p>
        </motion.div>

        {/* ================= CONTACT GRID ================= */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid lg:grid-cols-2 gap-4 lg:gap-5"
        >
          {/* ================= LEFT CARD ================= */}

          <motion.div
            variants={fadeUp}
            className={`
              rounded-xl
              border
              p-4
              sm:p-5
              ${
                darkMode
                  ? "bg-gray-800/75 border-gray-700"
                  : "bg-white border-gray-200 shadow-sm"
              }
            `}
          >
            <h3 className="text-lg sm:text-xl font-bold">
              Get in{" "}
              <span className="text-orange-500">
                Touch
              </span>
            </h3>

            <p
              className={`mt-1.5 text-xs leading-5 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part
              of your team.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="mt-4 space-y-3">
              {/* EMAIL */}

              <div className="flex items-center gap-3">
                <div className={iconBox}>
                  <FaEnvelope className="text-orange-500 text-xs" />
                </div>

                <div className="min-w-0">
                  <p
                    className={`text-[9px] uppercase tracking-wider ${
                      darkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    Email
                  </p>

                  <a
                    href="mailto:gollapudithilak1308@gmail.com"
                    className="text-xs font-medium hover:text-orange-500 transition-colors break-all"
                  >
                    gollapudithilak1308@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-3">
                <div className={iconBox}>
                  <FaPhone className="text-orange-500 text-xs" />
                </div>

                <div>
                  <p
                    className={`text-[9px] uppercase tracking-wider ${
                      darkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    Phone
                  </p>

                  <a
                    href="tel:+919381705449"
                    className="text-xs font-medium hover:text-orange-500 transition-colors"
                  >
                    +91 93817 05449
                  </a>
                </div>
              </div>

              {/* LOCATION */}

              <div className="flex items-center gap-3">
                <div className={iconBox}>
                  <FaMapMarkerAlt className="text-orange-500 text-xs" />
                </div>

                <div>
                  <p
                    className={`text-[9px] uppercase tracking-wider ${
                      darkMode
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    Location
                  </p>

                  <p className="text-xs font-medium">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            {/* ================= SOCIAL LINKS ================= */}

            <div
              className={`mt-5 pt-4 border-t ${
                darkMode
                  ? "border-gray-700/60"
                  : "border-gray-200"
              }`}
            >
              <p
                className={`text-[9px] uppercase tracking-[0.15em] mb-2 ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                Find me online
              </p>

              <div className="flex gap-2">
                {/* GITHUB */}

                <a
                  href="https://github.com/TilakGollapudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`
                    w-8
                    h-8
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
                        ? "border-gray-700 text-gray-400"
                        : "border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <FaGithub className="text-sm" />
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://linkedin.com/in/tilak-gollapudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`
                    w-8
                    h-8
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
                        ? "border-gray-700 text-gray-400"
                        : "border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}

          <motion.div
            variants={fadeUp}
            className={`
              rounded-xl
              border
              p-4
              sm:p-5
              ${
                darkMode
                  ? "bg-gray-800/75 border-gray-700"
                  : "bg-white border-gray-200 shadow-sm"
              }
            `}
          >
            <h3 className="text-lg sm:text-xl font-bold">
              Send a{" "}
              <span className="text-orange-500">
                Message
              </span>
            </h3>

            {/* ================= FORM ================= */}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 space-y-3"
              noValidate
            >
              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className={`block text-[9px] uppercase tracking-wider mb-1 ${
                    darkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={100}
                  disabled={sending}
                  className={`${inputClass} ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className={`block text-[9px] uppercase tracking-wider mb-1 ${
                    darkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  maxLength={254}
                  disabled={sending}
                  className={`${inputClass} ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className={`block text-[9px] uppercase tracking-wider mb-1 ${
                    darkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  maxLength={2000}
                  disabled={sending}
                  className={`${inputClass} resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* ================= STATUS MESSAGE ================= */}

              {status.message && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`text-xs text-center font-medium ${
                    status.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status.message}
                </motion.p>
              )}

              {/* ================= SEND BUTTON ================= */}

              <button
                type="submit"
                disabled={sending}
                className={`
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-orange-500
                  text-white
                  text-xs
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    sending
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20"
                  }
                `}
              >
                {sending ? (
                  <>
                    <span
                      className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-[10px]" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* ================= SMALL FOOTER ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center mt-4"
        >
          <p
            className={`text-[9px] ${
              darkMode
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            Let's build something great together •
            Available for opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
