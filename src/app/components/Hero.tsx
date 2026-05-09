import { Github, Linkedin, Instagram, FileText, ArrowDown, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROFILE_IMAGE = new URL(
  "../../imports/joao-pedro.jpeg",
  import.meta.url
).href;

export function Hero() {
  const { lang } = usePortfolio();
  const t = translations[lang].hero;

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    "Java", "Spring Boot", "TypeScript", "NestJS",
    "PostgreSQL", "Docker", "React", "React Native",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left — Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-700 dark:text-green-400 font-medium">{t.available}</span>
          </motion.div>

          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm tracking-wide uppercase">
            {t.greeting}
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-none">
            {t.name}
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
            {t.role}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            {t.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <button
              onClick={() => handleNav("#projects")}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Code2 size={16} />
              {t.cta_projects}
            </button>
            <button
              onClick={() => handleNav("#resume")}
              className="px-6 py-2.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FileText size={16} />
              {t.cta_resume}
            </button>
            <a
              href="https://github.com/JoaoPedroAraujoSouza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all hover:-translate-y-0.5"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/joao-pedro-araujo-souza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl transition-all hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/dev.joaopedroarj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-pink-50 dark:bg-pink-950/30 hover:bg-pink-100 dark:hover:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl transition-all hover:-translate-y-0.5"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right — Avatar */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-500/30">
              {/* Inner ring */}
              <div className="w-full h-full rounded-full p-1 bg-white dark:bg-gray-900">
                {/* Avatar circle */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  <ImageWithFallback
                    src={PROFILE_IMAGE}
                    alt="João Pedro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute -top-2 -right-4 px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-sm" />
              <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">Java</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-4 px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1.5"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-sm" />
              <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 px-2.5 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1.5"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-sm" />
              <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">Docker</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleNav("#experience")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium" style={{ fontSize: "10px" }}>scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
