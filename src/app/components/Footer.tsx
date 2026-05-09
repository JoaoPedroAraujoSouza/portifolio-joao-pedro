import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

export function Footer() {
  const { lang } = usePortfolio();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © {year} João Pedro. {t.rights}
        </p>
      </div>
    </footer>
  );
}