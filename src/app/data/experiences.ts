export interface Experience {
  id: string;
  titlePt: string;
  titleEn: string;
  company: string;
  periodPt: string;
  periodEn: string;
  location: string;
  link: string;
  descriptionPt: string[];
  descriptionEn: string[];
  tags: string[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    id: "innovagov",
    titlePt: "Estagiário de Desenvolvimento Full Stack",
    titleEn: "Full Stack Development Intern",
    company: "Laboratório InnovaGov — UFRPE",
    periodPt: "Nov 2025 — Atual",
    periodEn: "Nov 2025 — Present",
    location: "Recife, PE",
    link: "https://www.instagram.com/innovagovlab/",
    descriptionPt: [
      "Desenvolvimento de APIs e serviços backend em Java e Spring Boot.",
      "Construção de interfaces web em React integradas ao backend.",
      "Participação em discussões de arquitetura, documentação, requisitos e validação técnica.",
      "Atuação em solução estratégica ligada à Secretaria de Governo do Estado de Pernambuco.",
      "Experiência com regras de negócio, integrações, CRUDs, consultas SQL e organização em camadas.",
    ],
    descriptionEn: [
      "Development of APIs and backend services using Java and Spring Boot.",
      "Building web interfaces in React integrated with the backend.",
      "Participation in architecture discussions, documentation, requirements and technical validation.",
      "Working on a strategic solution linked to the Government Secretariat of Pernambuco.",
      "Experience with business rules, integrations, CRUDs, SQL queries and layered architecture.",
    ],
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API"],
    isCurrent: true,
  },
  {
    id: "seedabit",
    titlePt: "Analista de Projetos",
    titleEn: "Project Analyst",
    company: "Seed a Bit",
    periodPt: "Fev 2025 — Out 2025",
    periodEn: "Feb 2025 — Oct 2025",
    location: "Recife, PE",
    link: "https://seedabit.org.br/",
    descriptionPt: [
      "Desenvolvimento de soluções full stack com NestJS, TypeScript, Prisma e PostgreSQL.",
      "Integração com interfaces mobile em React Native.",
      "Implementação de APIs RESTful, autenticação, CRUDs e regras de domínio.",
      "Documentação com Swagger/OpenAPI.",
      "Versionamento com Git/GitHub, branches e pull requests.",
      "Configuração de pipelines CI/CD com GitHub Actions.",
    ],
    descriptionEn: [
      "Full stack solutions with NestJS, TypeScript, Prisma and PostgreSQL.",
      "Integration with mobile interfaces in React Native.",
      "Implementation of RESTful APIs, authentication, CRUDs and domain rules.",
      "Documentation with Swagger/OpenAPI.",
      "Versioning with Git/GitHub, branches and pull requests.",
      "CI/CD pipeline setup with GitHub Actions.",
    ],
    tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React Native", "CI/CD"],
    isCurrent: false,
  },
];
