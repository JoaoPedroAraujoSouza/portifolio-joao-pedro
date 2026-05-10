import { useState, useRef } from "react";
import { Github, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { projects, ProjectCategory } from "../data/projects";

const filterColors: Record<string, string> = {
  all: "from-indigo-500 to-violet-600",
  featured: "from-amber-400 to-orange-500",
  backend: "from-blue-500 to-indigo-600",
  fullstack: "from-cyan-500 to-blue-500",
  academic: "from-teal-500 to-green-600",
};

/** Card that emits a radial spotlight that follows the mouse cursor */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
      className={`${className} relative`}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(200px circle at ${spotlight.x}px ${spotlight.y}px, rgba(99,102,241,0.09) 0%, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

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
    <section id="projects" className="py-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Decorative watermark number */}
      <span
        className="absolute -top-6 right-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        04
      </span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all overflow-hidden ${
                activeFilter === f.key
                  ? "text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {activeFilter === f.key && (
                <motion.span
                  layoutId="filterPill"
                  className={`absolute inset-0 bg-gradient-to-r ${filterColors[f.key]}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.35, delay: i * 0.06, type: "spring", stiffness: 250, damping: 25 }}
                whileHover={{ y: -6 }}
              >
                <SpotlightCard
                  className={`group bg-white dark:bg-gray-800/60 rounded-2xl border ${
                    project.isFeatured
                      ? "border-indigo-200 dark:border-indigo-800/50 shadow-lg shadow-indigo-500/10"
                      : "border-gray-100 dark:border-gray-700/50 shadow-sm"
                  } transition-shadow hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 p-5 flex flex-col overflow-hidden h-full`}
                >
                  {/* Featured glow */}
                  {project.isFeatured && (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 rounded-2xl transition-all pointer-events-none" />
                  )}

                  {/* Top */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          project.isFeatured
                            ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        <Github size={17} />
                      </div>
                      {project.isFeatured && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-xs rounded-full border border-amber-200 dark:border-amber-800/50 font-semibold">
                          <Sparkles size={9} />
                          {t.featured_badge}
                        </span>
                      )}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                    {lang === "pt" ? project.descriptionPt : project.descriptionEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 text-xs rounded-md font-mono border border-gray-100 dark:border-gray-600/50 hover:border-indigo-200 dark:hover:border-indigo-700/50 transition-colors"
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
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold transition-all border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 shimmer"
                  >
                    <Github size={14} />
                    {t.view_code}
                  </a>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
