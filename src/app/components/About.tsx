import { MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

const skillGroups = [
  {
    label: "Backend",
    color: "bg-blue-500",
    skills: ["Java", "Spring Boot", "NestJS", "TypeScript", "Node.js"],
  },
  {
    label: "Database",
    color: "bg-indigo-500",
    skills: ["PostgreSQL", "Prisma", "Hibernate/JPA", "Flyway", "Redis"],
  },
  {
    label: "Frontend & Mobile",
    color: "bg-violet-500",
    skills: ["React", "React Native", "Expo Router", "Tailwind CSS"],
  },
  {
    label: "DevOps & Qualidade",
    color: "bg-cyan-500",
    skills: ["Docker", "GitHub Actions", "CI/CD", "JUnit", "Mockito", "Testcontainers"],
  },
  {
    label: "Docs & APIs",
    color: "bg-teal-500",
    skills: ["REST APIs", "Swagger/OpenAPI", "JWT", "RBAC", "Git"],
  },
];

export function About() {
  const { lang } = usePortfolio();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.p1}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.p2}</p>
            </div>

            {/* Focus areas */}
            <div className="mb-8">
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t.focus_title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.focus.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{t.education_title}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.education}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">{t.education_status}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50">
                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{lang === "pt" ? "Localização" : "Location"}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{t.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800/60 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-sm ${group.color}`} />
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 text-xs rounded-lg border border-gray-100 dark:border-gray-600/50 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}