import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Instagram, FileText, ArrowDown, Layers, Cpu, MapPin, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROFILE_IMAGE = new URL(
  "../../imports/joao-pedro.jpeg",
  import.meta.url
).href;

function TypewriterRole({ roles }: { roles: string[] }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const full = roles[currentRole];

    if (!deleting && displayed.length < full.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentRole((r) => (r + 1) % roles.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, currentRole, roles]);

  return (
    <span className="inline-flex items-baseline gap-[2px]">
      <span>{displayed}</span>
      <span className="w-[2px] h-[1.1em] bg-indigo-400 inline-block align-middle animate-pulse ml-[1px]" />
    </span>
  );
}

const techStack = [
  { name: "Java", color: "from-orange-500 to-red-500" },
  { name: "Spring Boot", color: "from-green-500 to-emerald-600" },
  { name: "PostgreSQL", color: "from-cyan-500 to-sky-600" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
  { name: "REST APIs", color: "from-indigo-500 to-violet-600" },
  { name: "JUnit", color: "from-emerald-500 to-teal-600" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
];


export function Hero() {
  const { lang } = usePortfolio();
  const t = translations[lang].hero;
  const roles = lang === "pt"
    ? ["Java Spring Boot Developer", "Backend Developer", "API Designer"]
    : ["Java Spring Boot Developer", "Backend Developer", "API Designer"];

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* ── Decorative left accent line (desktop) ─────────────── */}
      <motion.div
        className="hidden lg:flex absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-indigo-400/50 to-indigo-400/20" />
        <div className="flex flex-col gap-2">
          <a href="https://github.com/JoaoPedroAraujoSouza" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center justify-center text-gray-400 hover:text-indigo-500 transition-all hover:scale-110">
            <Github size={13} />
          </a>
          <a href="https://linkedin.com/in/joao-pedro-araujo-souza" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all hover:scale-110">
            <Linkedin size={13} />
          </a>
          <a href="https://www.instagram.com/dev.joaopedroarj/" target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-950/50 flex items-center justify-center text-gray-400 hover:text-pink-500 transition-all hover:scale-110">
            <Instagram size={13} />
          </a>
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-indigo-400/20 via-indigo-400/50 to-transparent" />
      </motion.div>

      {/* ── Animated background blobs ─────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Dot grid — opacity controlled by CSS per theme */}
        <div className="absolute inset-0 dot-grid" />
        {/* Floating code keywords (subtle, barely visible) */}
        <span className="float-word absolute top-[18%] left-[12%] text-4xl font-black text-indigo-500 select-none pointer-events-none" style={{ animationDelay: "0s" }}>{"<API/>"}</span>
        <span className="float-word absolute top-[60%] right-[10%] text-3xl font-black text-violet-500 select-none pointer-events-none" style={{ animationDelay: "3s" }}>{"{ }"}</span>
        <span className="float-word absolute bottom-[20%] left-[20%] text-2xl font-black text-cyan-500 select-none pointer-events-none" style={{ animationDelay: "5s" }}>{"[]"}</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 flex flex-col lg:flex-row items-center gap-16">
        {/* ── Left — Text ──────────────────────────────────────── */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-700 dark:text-green-400 font-medium tracking-wide">{t.available}</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2 text-sm tracking-[0.15em] uppercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-3 tracking-tight leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gradient-text-shine">{t.name}</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-7 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <TypewriterRole roles={roles} />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t.description}
          </motion.p>

          {/* Intern status chips */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <Layers size={13} className="text-indigo-500" />
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                {lang === "pt" ? "Estagiário de Desenvolvimento" : "Development Intern"}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-900/50">
              <Cpu size={13} className="text-violet-500" />
              <span className="text-xs font-bold text-violet-700 dark:text-violet-300">
                {lang === "pt" ? "Ciência da Computação · UFRPE" : "Computer Science · UFRPE"}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/50">
              <MapPin size={13} className="text-teal-500" />
              <span className="text-xs font-bold text-teal-700 dark:text-teal-300">
                Recife, PE — Brasil
              </span>
            </div>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + i * 0.04 }}
                className="shimmer inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs rounded-lg border border-gray-200 dark:border-gray-700 font-mono hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color} flex-shrink-0`} />
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <button
              onClick={() => handleNav("#projects")}
              className="shimmer relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Code2 size={16} />
              {t.cta_projects}
            </button>
            <button
              onClick={() => handleNav("#resume")}
              className="px-6 py-2.5 bg-gray-900 dark:bg-white/10 dark:backdrop-blur hover:bg-gray-800 dark:hover:bg-white/20 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 border border-gray-700 dark:border-white/10"
            >
              <FileText size={16} />
              {t.cta_resume}
            </button>
            <a href="https://github.com/JoaoPedroAraujoSouza" target="_blank" rel="noopener noreferrer"
              className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all hover:-translate-y-0.5 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/joao-pedro-araujo-souza" target="_blank" rel="noopener noreferrer"
              className="p-2.5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl transition-all hover:-translate-y-0.5 border border-blue-100 dark:border-blue-900/50"
              title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/dev.joaopedroarj/" target="_blank" rel="noopener noreferrer"
              className="p-2.5 bg-pink-50 dark:bg-pink-950/30 hover:bg-pink-100 dark:hover:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl transition-all hover:-translate-y-0.5 border border-pink-100 dark:border-pink-900/30"
              title="Instagram">
              <Instagram size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right — Avatar ────────────────────────────────────── */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Spinning conic gradient ring */}
            <div className="w-60 h-60 sm:w-76 sm:h-76 lg:w-80 lg:h-80 rounded-full animated-border">
              <div className="w-full h-full rounded-full p-1 bg-white dark:bg-gray-950">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-gray-800 dark:to-gray-700 shadow-2xl">
                  <ImageWithFallback
                    src={PROFILE_IMAGE}
                    alt="João Pedro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-3 -right-6 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm" />
              <span className="text-xs font-mono font-semibold text-gray-700 dark:text-gray-300">Java</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-6 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-sm" />
              <span className="text-xs font-mono font-semibold text-gray-700 dark:text-gray-300">PostgreSQL</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-10 -translate-y-1/2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              animate={{ x: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-sm" />
              <span className="text-xs font-mono font-semibold text-gray-700 dark:text-gray-300">Docker</span>
            </motion.div>

            <motion.div
              className="absolute top-1/4 -left-10 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              animate={{ x: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-sm" />
              <span className="text-xs font-mono font-semibold text-gray-700 dark:text-gray-300">Spring Boot</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleNav("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
