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
    <section id="resume" className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Watermark number */}
      <span
        className="absolute -top-6 right-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        06
      </span>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {t.subtitle}
          </p>
          <div className="section-line" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-7">
            {t.title}
          </h2>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              {t.open_new_tab}
            </a>
            <a
              href={PDF_PATH}
              download="curriculo-joao-pedro.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 border border-gray-200 dark:border-gray-700"
            >
              <Download size={15} />
              {t.download}
            </a>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-indigo-500/5"
        >
          {/* Desktop: iframe */}
          <div className="hidden sm:block">
            <iframe
              src={PDF_PATH}
              title="Currículo João Pedro"
              className="w-full"
              style={{ height: "820px", border: "none" }}
            >
              <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-900 gap-4">
                <FileText size={40} className="text-gray-400" />
                <p className="text-gray-600 dark:text-gray-400">{t.mobile_fallback}</p>
                <a href={PDF_PATH} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                  {t.mobile_open}
                </a>
              </div>
            </iframe>
          </div>

          {/* Mobile: fallback */}
          <div className="sm:hidden flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-gray-900/50 gap-5 px-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-500/30">
              <FileText size={28} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">{t.title}</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">{t.mobile_fallback}</p>
            </div>
            <a href={PDF_PATH} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-indigo-500/30">
              <ExternalLink size={15} />
              {t.mobile_open}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}