import { useState } from "react";
import { Github, Star, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { projects, ProjectCategory } from "../data/projects";

export function Projects() {
  const { lang } = usePortfolio();
  const t = translations[lang].projects;
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filters: { key: "all" | ProjectCategory; label: string }[] = [
    { key: "all", label: t.filter_all },
    { key: "featured", label: t.filter_featured },
    { key: "backend", label: t.filter_backend },
    { key: "fullstack", label: t.filter_fullstack },
    { key: "academic", label: t.filter_academic },
  ];

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`group bg-white dark:bg-gray-800/60 rounded-2xl border ${
                  project.isFeatured
                    ? "border-blue-200 dark:border-blue-800/50 shadow-md shadow-blue-500/10"
                    : "border-gray-100 dark:border-gray-700/50 shadow-sm"
                } hover:shadow-lg hover:-translate-y-1 transition-all p-5 flex flex-col`}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        project.isFeatured
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <Github size={16} />
                    </div>
                    {project.isFeatured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-xs rounded-full border border-amber-200 dark:border-amber-800/50">
                        <Star size={10} fill="currentColor" />
                        {t.featured_badge}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                  {lang === "pt" ? project.descriptionPt : project.descriptionEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 text-xs rounded-md font-mono border border-gray-100 dark:border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-0.5 text-gray-400 text-xs rounded-md">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-medium transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20"
                >
                  <Github size={14} />
                  {t.view_code}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
