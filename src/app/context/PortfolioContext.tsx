import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang } from "../data/translations";

interface PortfolioContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const PortfolioContext = createContext<PortfolioContextType>({
  lang: "pt",
  setLang: () => {},
  isDark: false,
  toggleTheme: () => {},
});

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize language
    const savedLang = localStorage.getItem("portfolio-lang") as Lang | null;
    if (savedLang === "pt" || savedLang === "en") {
      setLangState(savedLang);
    }

    // Initialize theme
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <PortfolioContext.Provider value={{ lang, setLang, isDark, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
