import { ExternalLink, MapPin, Calendar, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { experiences } from "../data/experiences";

const companyColors: Record<string, { dot: string; glow: string; bar: string }> = {
  innovagov: {
    dot: "bg-gradient-to-br from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/30",
    bar: "border-l-indigo-500",
  },
  seedabit: {
    dot: "bg-gradient-to-br from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    bar: "border-l-cyan-500",
  },
};

function GrowingTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-6 top-0 bottom-0 w-px hidden sm:block overflow-hidden">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top"
        style={{
          scaleY,
          background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #06b6d4)",
          height: "100%",
        }}
      />
    </div>
  );
}

export function Experience() {
  const { lang } = usePortfolio();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Watermark number */}
      <span
        className="absolute -top-6 right-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        03
      </span>
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {t.subtitle}
          </p>
          <div className="section-line" />
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <GrowingTimeline />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = companyColors[exp.id] ?? {
                dot: "bg-gradient-to-br from-gray-400 to-gray-600",
                glow: "shadow-gray-400/20",
                bar: "border-l-gray-400",
              };

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                    {exp.isCurrent && (
                      <span className="absolute w-12 h-12 rounded-full animate-ping bg-indigo-400/25" />
                    )}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.dot} shadow-lg ${colors.glow} relative`}>
                      <span className="text-xs font-black text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all p-6 border-l-2 ${colors.bar} group`}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {lang === "pt" ? exp.titlePt : exp.titleEn}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full border border-green-200 dark:border-green-800/50 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              {t.current}
                            </span>
                          )}
                        </div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-semibold transition-colors hover:underline w-fit"
                        >
                          {exp.company}
                          <ExternalLink size={11} />
                        </a>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-400 dark:text-gray-500 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={11} />
                          <span className="font-medium">{lang === "pt" ? exp.periodPt : exp.periodEn}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={11} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-3">
                        {t.responsibilities}
                      </p>
                      <ul className="space-y-2">
                        {(lang === "pt" ? exp.descriptionPt : exp.descriptionEn).map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <ChevronRight size={13} className="text-indigo-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-lg border border-indigo-100 dark:border-indigo-900/50 font-mono hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
