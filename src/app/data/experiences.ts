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
      "Atuação atual em solução estratégica vinculada à Secretaria de Governo de Pernambuco, conectando requisitos institucionais a entregas técnicas.",
      "Desenvolvimento de APIs e serviços backend em Java/Spring Boot com organização em camadas, consultas SQL e regras de negócio.",
      "Construção de interfaces React integradas ao backend para apoiar fluxos administrativos e validação funcional com usuários internos.",
      "Participação em discussões de arquitetura, documentação, requisitos e validação técnica para reduzir ambiguidade antes da implementação.",
      "Impacto em andamento: padronização de endpoints, documentação e integrações para facilitar manutenção e evolução do sistema.",
    ],
    descriptionEn: [
      "Current work on a strategic solution linked to the Government Secretariat of Pernambuco, connecting institutional requirements to technical deliveries.",
      "Development of Java/Spring Boot backend APIs and services with layered organization, SQL queries and business rules.",
      "Building React interfaces integrated with the backend to support administrative flows and functional validation with internal users.",
      "Participation in architecture, documentation, requirements and technical validation discussions to reduce ambiguity before implementation.",
      "Ongoing impact: endpoint standardization, documentation and integrations to improve maintainability and system evolution.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React", "REST API"],
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
      "Desenvolvimento de soluções full stack com NestJS, TypeScript, Prisma e PostgreSQL para fluxos web/mobile.",
      "Implementação de APIs RESTful, autenticação, CRUDs e regras de domínio conectadas a interfaces React Native.",
      "Documentação com Swagger/OpenAPI para facilitar consumo e manutenção dos endpoints.",
      "Organização do trabalho com Git/GitHub, branches, pull requests e acompanhamento de entregas.",
      "Configuração de pipelines CI/CD com GitHub Actions para dar mais previsibilidade ao processo de entrega.",
    ],
    descriptionEn: [
      "Full stack solutions with NestJS, TypeScript, Prisma and PostgreSQL for web/mobile flows.",
      "Implementation of RESTful APIs, authentication, CRUDs and domain rules connected to React Native interfaces.",
      "Swagger/OpenAPI documentation to simplify endpoint consumption and maintenance.",
      "Work organization with Git/GitHub, branches, pull requests and delivery tracking.",
      "GitHub Actions CI/CD setup to make the delivery process more predictable.",
    ],
    tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React Native", "CI/CD"],
    isCurrent: false,
  },
];
