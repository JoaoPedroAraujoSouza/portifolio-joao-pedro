import { MapPin, GraduationCap, Linkedin } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

const skillGroups = [
  {
    label: "Backend",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
    border: "border-indigo-100 dark:border-indigo-900/30",
    skills: ["Java", "Spring Boot", "NestJS", "TypeScript", "Node.js"],
  },
  {
    label: "Database",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "border-violet-100 dark:border-violet-900/30",
    skills: ["PostgreSQL", "Prisma", "Hibernate/JPA", "Flyway", "Redis"],
  },
  {
    label: "Frontend & Mobile",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    border: "border-cyan-100 dark:border-cyan-900/30",
    skills: ["React", "React Native", "Expo Router", "Tailwind CSS"],
  },
  {
    label: "DevOps & Quality",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 dark:bg-teal-950/20",
    border: "border-teal-100 dark:border-teal-900/30",
    skills: ["Docker", "GitHub Actions", "CI/CD", "JUnit", "Mockito", "Testcontainers"],
  },
  {
    label: "Docs & APIs",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-100 dark:border-amber-900/30",
    skills: ["REST APIs", "Swagger/OpenAPI", "JWT", "RBAC", "Git"],
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const { lang } = usePortfolio();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Watermark number */}
      <span
        className="absolute -top-6 left-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        02
      </span>
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
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

        {/* Open-to-work recruiter banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {lang === "pt"
                ? "Aberto a novas oportunidades de estágio ou emprego"
                : "Open to new internship or job opportunities"}
            </p>
          </div>
          <a
            href="https://linkedin.com/in/joao-pedro-araujo-souza"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            <Linkedin size={13} />
            {lang === "pt" ? "Ver LinkedIn" : "View LinkedIn"}
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 mb-10">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{t.p1}</p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{t.p2}</p>
            </div>

            {/* Focus areas */}
            <div className="mb-10">
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{t.focus_title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {t.focus.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Location */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/20">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">{t.education_title}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.education}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{t.education_status}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-500/20">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">{lang === "pt" ? "Localização" : "Location"}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Skill cards with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className={`${group.bg} ${group.border} rounded-2xl p-4 border shadow-sm hover:shadow-lg transition-shadow cursor-default`}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`w-3 h-3 rounded-sm bg-gradient-to-br ${group.color} shadow-sm`} />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white/70 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 text-xs rounded-lg border border-white dark:border-gray-600/50 font-mono hover:scale-105 transition-transform cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}