import { ExternalLink, Download, FileText } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
const PDF_PATH = new URL(
  "../../imports/curriculo-joao-pedro.pdf",
  import.meta.url
).href;

export function Resume() {
  const { lang } = usePortfolio();
  const t = translations[lang].resume;

  return (
    <section id="resume" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-widest mb-2">
            {t.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t.title}
          </h2>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              {t.open_new_tab}
            </a>
            <a
              href={PDF_PATH}
              download="curriculo-joao-pedro.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 border border-gray-200 dark:border-gray-700"
            >
              <Download size={15} />
              {t.download}
            </a>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          {/* Desktop: iframe */}
          <div className="hidden sm:block">
            <iframe
              src={PDF_PATH}
              title="Currículo João Pedro"
              className="w-full"
              style={{ height: "800px", border: "none" }}
            >
              <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-900 gap-4">
                <FileText size={40} className="text-gray-400" />
                <p className="text-gray-600 dark:text-gray-400">{t.mobile_fallback}</p>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  {t.mobile_open}
                </a>
              </div>
            </iframe>
          </div>

          {/* Mobile: fallback message */}
          <div className="sm:hidden flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-900/50 gap-5 px-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
              <FileText size={32} className="text-blue-500" />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                {t.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t.mobile_fallback}
              </p>
            </div>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors"
            >
              <ExternalLink size={15} />
              {t.mobile_open}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}