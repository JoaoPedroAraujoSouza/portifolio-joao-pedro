export type ProjectCategory = "featured" | "backend" | "fullstack" | "academic";

export interface Project {
  id: string;
  name: string;
  descriptionPt: string;
  descriptionEn: string;
  link: string;
  tags: string[];
  categories: ProjectCategory[];
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "pdhc",
    name: "Projeto PDHC — Agendamento Hospitalar Mobile",
    descriptionPt:
      "Aplicação mobile administrativa para agendamento hospitalar simplificado, com backend em NestJS, autenticação via Supabase Cloud e fluxo completo de cadastros e consultas. Monorepo com backend, app mobile e docs.",
    descriptionEn:
      "Administrative mobile application for simplified hospital scheduling, with NestJS backend, Supabase Cloud authentication and complete registration and appointment flow. Monorepo with backend, mobile app and docs.",
    link: "https://github.com/JoaoPedroAraujoSouza/projeto-pdhc",
    tags: [
      "React Native",
      "Expo Router",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Jest",
      "Swagger",
    ],
    categories: ["fullstack"],
    isFeatured: false,
  },
  {
    id: "banklite",
    name: "BankLite API",
    descriptionPt:
      "API REST inspirada em operações de core bancário, com autenticação JWT dual-token, RBAC, migrações com Flyway e testes automatizados. Deploy no Render.",
    descriptionEn:
      "REST API inspired by core banking operations, with dual-token JWT authentication, RBAC, Flyway migrations and automated tests. Deployed on Render.",
    link: "https://github.com/JoaoPedroAraujoSouza/bank-lite-api",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "GitHub Actions",
    ],
    categories: ["backend"],
    isFeatured: false,
  },
  {
    id: "rastreador",
    name: "Sistema de Rastreamento Logístico",
    descriptionPt:
      "MVP full stack para monitoramento de cargas em tempo real, com dashboard web e aplicativo mobile para envio de localização. Visualização de mapa com Leaflet.",
    descriptionEn:
      "Full stack MVP for real-time cargo monitoring, with a web dashboard and mobile app for location tracking. Map visualization with Leaflet.",
    link: "https://github.com/JoaoPedroAraujoSouza/rastreador-cargas",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "React",
      "React Native",
      "Leaflet",
    ],
    categories: ["featured", "fullstack"],
    isFeatured: true,
  },
  {
    id: "room-allocator",
    name: "Room Allocation System",
    descriptionPt:
      "Sistema acadêmico para gerenciamento de alocação de salas, turmas, professores, cursos e horários, com regras para evitar conflitos de agenda, capacidade e disponibilidade.",
    descriptionEn:
      "Academic system for room allocation management including classes, teachers, courses and schedules, with rules to prevent scheduling, capacity and availability conflicts.",
    link: "https://github.com/JoaoPedroAraujoSouza/room-alocator",
    tags: [
      "Java",
      "JavaFX",
      "Hibernate",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "JasperReports",
    ],
    categories: ["academic"],
    isFeatured: false,
  },
  {
    id: "idea-bib",
    name: "IDEA-BIB",
    descriptionPt:
      "Sistema acadêmico para gerenciamento de acervo bibliográfico pessoal de professores, empréstimos, devoluções, usuários e repositório digital de TCCs em PDF.",
    descriptionEn:
      "Academic system for managing professors' personal book collections, loans, returns, users and a digital repository of undergraduate theses in PDF.",
    link: "https://github.com/IDEA-BIB",
    tags: [
      "Backend",
      "Redis",
      "RabbitMQ",
      "Auth",
      "LaTeX",
      "GitHub Projects",
    ],
    categories: ["academic"],
    isFeatured: false,
  },
];