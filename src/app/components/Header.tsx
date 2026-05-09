import { useState, useEffect } from "react";
import { Moon, Sun, Github, Linkedin, Instagram, Menu, X } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

export function Header() {
  const { lang, setLang, isDark, toggleTheme } = usePortfolio();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: "#home" },
    { label: t.experience, href: "#experience" },
    { label: t.projects, href: "#projects" },
    { label: t.resume, href: "#resume" },
    { label: t.contact, href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white text-xs font-bold">JP</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            João Pedro
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Social links */}
          <div className="hidden sm:flex items-center gap-1">
            <a
              href="https://github.com/JoaoPedroAraujoSouza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/joao-pedro-araujo-souza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/dev.joaopedroarj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30 rounded-lg transition-all"
              title="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-gray-200 dark:bg-gray-700" />

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all border border-gray-200 dark:border-gray-700"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2.5 text-sm text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <a
              href="https://github.com/JoaoPedroAraujoSouza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/joao-pedro-araujo-souza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 rounded-lg transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/dev.joaopedroarj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-pink-600 rounded-lg transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
