import { ExternalLink, Download, FileText, Mail, MapPin, Github, Linkedin, GraduationCap, Briefcase, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { usePortfolio } from "../context/PortfolioContext";
import { translations } from "../data/translations";

const PDF_PATH = new URL(
  "../../imports/curriculo-joao-pedro.pdf",
  import.meta.url
).href;

const resume = {
  pt: {
    role: "Desenvolvedor Backend / Full Stack",
    summary:
      "Estudante de Ciência da Computação na UFRPE e desenvolvedor backend/full stack com foco principal em Java, Spring Boot, PostgreSQL e Docker. Experiência prática com APIs REST, regras de negócio, modelagem relacional, autenticação, documentação técnica, testes e integração com interfaces web/mobile.",
    location: "Cabo de Santo Agostinho, PE — Brasil",
    contacts: {
      email: "joaopedroaraujosouzadev@gmail.com",
      linkedin: "linkedin.com/in/joao-pedro-araujo-souza",
      github: "github.com/JoaoPedroAraujoSouza",
    },
    sections: {
      summary: "Resumo profissional",
      stack: "Stack principal",
      experience: "Experiência",
      projects: "Projetos selecionados",
      education: "Formação",
      contacts: "Contato",
    },
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "APIs REST",
      "Spring Security",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "GitHub Actions",
      "TypeScript",
      "React",
    ],
    experiences: [
      {
        title: "Estagiário de Desenvolvimento Full Stack",
        company: "Laboratório InnovaGov — UFRPE",
        period: "Nov 2025 — Atual",
        bullets: [
          "Atuação atual em solução estratégica vinculada à Secretaria de Governo de Pernambuco.",
          "Desenvolvimento de APIs e serviços backend em Java/Spring Boot com organização em camadas, consultas SQL e regras de negócio.",
          "Construção de interfaces React integradas ao backend para apoiar fluxos administrativos e validação funcional.",
          "Participação em arquitetura, documentação, requisitos e validação técnica para melhorar previsibilidade de implementação.",
        ],
      },
      {
        title: "Analista de Projetos",
        company: "Seed a Bit",
        period: "Fev 2025 — Out 2025",
        bullets: [
          "Desenvolvimento de soluções full stack com NestJS, TypeScript, Prisma e PostgreSQL.",
          "Implementação de APIs RESTful, autenticação, CRUDs e regras de domínio integradas a interfaces React Native.",
          "Documentação com Swagger/OpenAPI e versionamento com Git/GitHub, branches e pull requests.",
          "Configuração de pipelines CI/CD com GitHub Actions.",
        ],
      },
    ],
    projects: [
      "BankLite API — API Java/Spring Boot com JWT dual-token, RBAC, PostgreSQL, Flyway, testes e CI.",
      "Sistema de Rastreamento Logístico — MVP full stack com Java/Spring Boot, PostgreSQL, Docker, React, React Native e Leaflet.",
      "Projeto PDHC — aplicação mobile administrativa com NestJS, Prisma, PostgreSQL, Supabase, Docker, Jest e Swagger.",
      "Room Allocation System — sistema acadêmico em Java para alocação de salas com regras de conflito e relatórios.",
    ],
    education: "Ciência da Computação — Universidade Federal Rural de Pernambuco (UFRPE), em andamento.",
  },
  en: {
    role: "Backend / Full Stack Developer",
    summary:
      "Computer Science student at UFRPE and backend/full stack developer primarily focused on Java, Spring Boot, PostgreSQL and Docker. Practical experience with REST APIs, business rules, relational modeling, authentication, technical documentation, tests and web/mobile interface integration.",
    location: "Cabo de Santo Agostinho, PE — Brazil",
    contacts: {
      email: "joaopedroaraujosouzadev@gmail.com",
      linkedin: "linkedin.com/in/joao-pedro-araujo-souza",
      github: "github.com/JoaoPedroAraujoSouza",
    },
    sections: {
      summary: "Professional summary",
      stack: "Primary stack",
      experience: "Experience",
      projects: "Selected projects",
      education: "Education",
      contacts: "Contact",
    },
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Spring Security",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "GitHub Actions",
      "TypeScript",
      "React",
    ],
    experiences: [
      {
        title: "Full Stack Development Intern",
        company: "Laboratório InnovaGov — UFRPE",
        period: "Nov 2025 — Present",
        bullets: [
          "Current work on a strategic solution linked to the Government Secretariat of Pernambuco.",
          "Development of Java/Spring Boot backend APIs and services with layered organization, SQL queries and business rules.",
          "Building React interfaces integrated with the backend to support administrative flows and functional validation.",
          "Participation in architecture, documentation, requirements and technical validation to improve implementation predictability.",
        ],
      },
      {
        title: "Project Analyst",
        company: "Seed a Bit",
        period: "Feb 2025 — Oct 2025",
        bullets: [
          "Full stack solutions with NestJS, TypeScript, Prisma and PostgreSQL.",
          "Implementation of RESTful APIs, authentication, CRUDs and domain rules integrated with React Native interfaces.",
          "Swagger/OpenAPI documentation and versioning with Git/GitHub, branches and pull requests.",
          "CI/CD pipeline setup with GitHub Actions.",
        ],
      },
    ],
    projects: [
      "BankLite API — Java/Spring Boot API with dual-token JWT, RBAC, PostgreSQL, Flyway, tests and CI.",
      "Logistics Tracking System — full stack MVP with Java/Spring Boot, PostgreSQL, Docker, React, React Native and Leaflet.",
      "PDHC Project — administrative mobile app with NestJS, Prisma, PostgreSQL, Supabase, Docker, Jest and Swagger.",
      "Room Allocation System — academic Java system for room allocation with conflict rules and reports.",
    ],
    education: "Computer Science — Federal Rural University of Pernambuco (UFRPE), in progress.",
  },
};

function SectionTitle({ icon: Icon, children }: { icon: typeof Briefcase; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
        <Icon size={16} />
      </div>
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gray-900 dark:text-white">{children}</h3>
    </div>
  );
}

export function Resume() {
  const { lang } = usePortfolio();
  const t = translations[lang].resume;
  const data = resume[lang];

  return (
    <section id="resume" className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      <span
        className="absolute -top-6 right-4 text-[10rem] font-black select-none pointer-events-none leading-none"
        style={{ color: "rgba(99,102,241,0.07)" }}
      >
        06
      </span>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-indigo-500/5 bg-white dark:bg-gray-900"
        >
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-950 via-indigo-950 to-violet-950 text-white">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-indigo-200 text-sm font-bold uppercase tracking-[0.2em] mb-2">{data.role}</p>
                <h3 className="text-3xl sm:text-4xl font-black mb-3">João Pedro de Araújo Souza</h3>
                <p className="text-indigo-50/90 max-w-3xl leading-relaxed">{data.summary}</p>
              </div>
              <div className="grid gap-2 text-sm text-indigo-50/90 flex-shrink-0">
                <a href={`mailto:${data.contacts.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={15} /> {data.contacts.email}
                </a>
                <a href="https://linkedin.com/in/joao-pedro-araujo-souza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin size={15} /> {data.contacts.linkedin}
                </a>
                <a href="https://github.com/JoaoPedroAraujoSouza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Github size={15} /> {data.contacts.github}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={15} /> {data.location}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-[0.9fr_1.4fr] gap-8">
            <aside className="space-y-8">
              <section>
                <SectionTitle icon={Code2}>{data.sections.stack}</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {data.stack.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle icon={GraduationCap}>{data.sections.education}</SectionTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{data.education}</p>
              </section>

              <section>
                <SectionTitle icon={FileText}>{data.sections.contacts}</SectionTitle>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>{data.contacts.email}</p>
                  <p>{data.contacts.linkedin}</p>
                  <p>{data.contacts.github}</p>
                </div>
              </section>
            </aside>

            <div className="space-y-8">
              <section>
                <SectionTitle icon={Briefcase}>{data.sections.experience}</SectionTitle>
                <div className="space-y-5">
                  {data.experiences.map((experience) => (
                    <div key={`${experience.company}-${experience.period}`} className="relative pl-5 border-l-2 border-indigo-100 dark:border-indigo-900/60">
                      <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-indigo-50 dark:ring-indigo-950" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">{experience.title}</h4>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{experience.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">{experience.company}</p>
                      <ul className="space-y-2">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <CheckCircle2 size={15} className="mt-0.5 text-indigo-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle icon={Github}>{data.sections.projects}</SectionTitle>
                <div className="grid gap-3">
                  {data.projects.map((project) => (
                    <div key={project} className="flex gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50">
                      <CheckCircle2 size={15} className="mt-0.5 text-indigo-500 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
