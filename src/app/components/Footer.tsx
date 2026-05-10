import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const { lang } = usePortfolio();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-0 -top-24 mx-auto h-48 max-w-lg rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <BrandMark className="h-10 w-10" />
          <div className="text-center sm:text-left">
            <p className="text-sm font-black text-gray-900 dark:text-white">João Pedro</p>
            <p className="text-xs font-mono text-gray-400 dark:text-gray-600">Java • Spring Boot • PostgreSQL • Docker</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-1">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {year} João Pedro. {t.rights}
          </p>
          <a
            href="mailto:joaopedroaraujosouzadev@gmail.com"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
          >
            joaopedroaraujosouzadev@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
