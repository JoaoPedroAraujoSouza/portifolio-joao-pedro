import { ExternalLink, MapPin, Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { experiences } from "../data/experiences";

export function Experience() {
  const { lang } = usePortfolio();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-widest mb-2">
            {t.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-400/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      exp.isCurrent
                        ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30"
                        : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        exp.isCurrent ? "text-white" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all p-6">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {lang === "pt" ? exp.titlePt : exp.titleEn}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-xs font-medium rounded-full border border-green-200 dark:border-green-800/50 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            {t.current}
                          </span>
                        )}
                      </div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium w-fit"
                      >
                        {exp.company}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{lang === "pt" ? exp.periodPt : exp.periodEn}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                      {t.responsibilities}
                    </p>
                    <ul className="space-y-1.5">
                      {(lang === "pt" ? exp.descriptionPt : exp.descriptionEn).map(
                        (item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <ChevronRight
                              size={14}
                              className="text-blue-500 flex-shrink-0 mt-0.5"
                            />
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-100 dark:border-blue-900/50 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
