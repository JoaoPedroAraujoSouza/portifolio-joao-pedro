import { Heart } from "lucide-react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

export function Footer() {
  const { lang } = usePortfolio();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-white/5 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600">
          <span>{t.built_with}</span>
          <Heart size={12} className="text-rose-400 fill-rose-400 animate-pulse" />
          <span>{t.by}</span>
        </div>
        <p className="text-xs text-gray-300 dark:text-gray-700">
          © {year} João Pedro. {t.rights}
        </p>
      </div>
    </footer>
  );
}