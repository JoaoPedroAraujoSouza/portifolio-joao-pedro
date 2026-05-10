import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

export function Header() {
  const { lang, setLang, isDark, toggleTheme } = usePortfolio();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: t.home, href: "#home", id: "home" },
    { label: t.experience, href: "#experience", id: "experience" },
    { label: t.projects, href: "#projects", id: "projects" },
    { label: t.resume, href: "#resume", id: "resume" },
    { label: t.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Track active section
      const sections = ["home", "about", "experience", "projects", "resume", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm shadow-indigo-500/5 border-b border-gray-200/50 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("#home")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
            <span className="text-white text-xs font-black">JP</span>
          </div>
          <span className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            João Pedro
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-3 py-1.5 text-sm font-medium transition-all rounded-lg ${
                activeSection === link.id
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg border border-indigo-100 dark:border-indigo-900/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            <a href="https://github.com/JoaoPedroAraujoSouza" target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              title="GitHub">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/joao-pedro-araujo-souza" target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all"
              title="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/dev.joaopedroarj/" target="_blank" rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 rounded-lg transition-all"
              title="Instagram">
              <Instagram size={16} />
            </a>
          </div>

          <div className="hidden sm:block w-px h-5 bg-gray-200 dark:bg-gray-700" />

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-2.5 py-1 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-all border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 hover:bg-amber-50 dark:hover:bg-amber-950/20 rounded-lg transition-all"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={`px-3 py-2.5 text-sm text-left font-medium rounded-xl transition-all ${
                      activeSection === link.id
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                        : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <a href="https://github.com/JoaoPedroAraujoSouza" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/joao-pedro-araujo-souza" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 rounded-lg transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/dev.joaopedroarj/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-pink-600 rounded-lg transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
