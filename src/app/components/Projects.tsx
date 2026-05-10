import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight, Sparkles, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";
import { projects, Project } from "../data/projects";

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

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { lang } = usePortfolio();
  const t = translations[lang].projects;

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const description = lang === "pt" ? project.descriptionPt : project.descriptionEn;
  const role = lang === "pt" ? project.rolePt : project.roleEn;
  const problem = lang === "pt" ? project.problemPt : project.problemEn;
  const solution = lang === "pt" ? project.solutionPt : project.solutionEn;
  const highlights = lang === "pt" ? project.highlightsPt : project.highlightsEn;
  const impact = lang === "pt" ? project.impactPt : project.impactEn;
  const status = lang === "pt" ? project.statusPt : project.statusEn;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={onClose}
      >
        <motion.article
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-details-title"
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 p-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">{status}</p>
              <h3 id="project-details-title" className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                {project.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={t.close}
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-5 sm:p-7 space-y-7">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-4 bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">{t.role}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{role}</p>
              </div>
              <div className="rounded-2xl p-4 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{t.stack}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <section>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-2">{t.problem}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{problem}</p>
              </section>
              <section>
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-2">{t.solution}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{solution}</p>
              </section>
            </div>

            <section>
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-3">{t.highlights}</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl p-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/40">
                    <Sparkles size={15} className="mt-0.5 text-indigo-500 flex-shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl p-4 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/20">
              <h4 className="text-sm font-black uppercase tracking-widest mb-2">{t.impact}</h4>
              <p className="text-sm leading-relaxed text-indigo-50">{impact}</p>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:-translate-y-0.5 transition-all"
              >
                <Github size={16} />
                {t.view_code}
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {t.close}
              </button>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const { lang } = usePortfolio();
  const t = translations[lang].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      <span
        className="absolute -top-6 left-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        04
      </span>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          className="text-center mb-14"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06, type: "spring", stiffness: 250, damping: 25 }}
              whileHover={{ y: -6 }}
            >
              <SpotlightCard className="group bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 p-5 flex flex-col overflow-hidden h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <Github size={17} />
                    </div>
                    <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full border border-indigo-100 dark:border-indigo-800/50 font-semibold">
                      {lang === "pt" ? project.statusPt : project.statusEn}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg"
                    aria-label={t.view_code}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                  {lang === "pt" ? project.descriptionPt : project.descriptionEn}
                </p>

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

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold transition-all bg-indigo-600 hover:bg-indigo-500 text-white shimmer"
                  >
                    <ExternalLink size={14} />
                    {t.view_details}
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold transition-all border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"
                  >
                    <Github size={14} />
                    {t.view_code}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
