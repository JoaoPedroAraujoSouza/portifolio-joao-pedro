export type ProjectCategory = "backend" | "fullstack" | "academic";

export interface Project {
  id: string;
  name: string;
  descriptionPt: string;
  descriptionEn: string;
  link: string;
  tags: string[];
  categories: ProjectCategory[];
  statusPt: string;
  statusEn: string;
  rolePt: string;
  roleEn: string;
  problemPt: string;
  problemEn: string;
  solutionPt: string;
  solutionEn: string;
  highlightsPt: string[];
  highlightsEn: string[];
  impactPt: string;
  impactEn: string;
}

export const projects: Project[] = [
  {
    id: "pdhc",
    name: "Projeto PDHC — Agendamento Hospitalar Mobile",
    descriptionPt:
      "Aplicação mobile administrativa para agendamento hospitalar simplificado, com backend em NestJS, autenticação via Supabase Cloud e fluxo completo de cadastros e consultas.",
    descriptionEn:
      "Administrative mobile application for simplified hospital scheduling, with NestJS backend, Supabase Cloud authentication and complete registration and appointment flow.",
    link: "https://github.com/JoaoPedroAraujoSouza/projeto-pdhc",
    tags: ["React Native", "Expo Router", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Supabase", "Docker", "Jest", "Swagger"],
    categories: ["fullstack"],
    statusPt: "MVP full stack/mobile",
    statusEn: "Full stack/mobile MVP",
    rolePt: "Backend, mobile e documentação técnica",
    roleEn: "Backend, mobile and technical documentation",
    problemPt:
      "Centralizar operações administrativas de agendamento hospitalar em um fluxo mais claro para cadastro, consulta e acompanhamento da agenda.",
    problemEn:
      "Centralize administrative hospital scheduling operations into a clearer flow for registration, appointments and daily agenda tracking.",
    solutionPt:
      "Monorepo com app mobile, API NestJS, autenticação Supabase, persistência relacional e documentação funcional/técnica para evolução do produto.",
    solutionEn:
      "Monorepo with mobile app, NestJS API, Supabase authentication, relational persistence and functional/technical documentation for product evolution.",
    highlightsPt: [
      "Fluxos de sign in/sign up e validação de token no backend.",
      "Endpoints protegidos para especialidades, profissionais, pacientes e consultas.",
      "Gestão de consultas com confirmar, remarcar, cancelar e concluir.",
      "Dashboard diário com resumo operacional e testes automatizados no backend.",
    ],
    highlightsEn: [
      "Sign in/sign up flows and backend token validation.",
      "Protected endpoints for specialties, professionals, patients and appointments.",
      "Appointment management with confirm, reschedule, cancel and finish actions.",
      "Daily dashboard with operational summary and automated backend tests.",
    ],
    impactPt:
      "Demonstra domínio de integração mobile-backend, autenticação, modelagem de domínio e documentação para um fluxo administrativo realista.",
    impactEn:
      "Shows mobile-backend integration, authentication, domain modeling and documentation skills for a realistic administrative flow.",
  },
  {
    id: "banklite",
    name: "BankLite API",
    descriptionPt:
      "API REST em Java/Spring Boot inspirada em operações de core bancário, com autenticação JWT dual-token, RBAC, migrações com Flyway e testes automatizados.",
    descriptionEn:
      "Java/Spring Boot REST API inspired by core banking operations, with dual-token JWT authentication, RBAC, Flyway migrations and automated tests.",
    link: "https://github.com/JoaoPedroAraujoSouza/bank-lite-api",
    tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "JUnit", "Mockito", "Testcontainers", "GitHub Actions"],
    categories: ["backend"],
    statusPt: "Backend API",
    statusEn: "Backend API",
    rolePt: "Arquitetura backend, segurança e testes",
    roleEn: "Backend architecture, security and tests",
    problemPt:
      "Simular operações de uma API bancária com autenticação, autorização por perfil e consistência de dados em um domínio sensível.",
    problemEn:
      "Simulate banking API operations with authentication, role-based authorization and data consistency in a sensitive domain.",
    solutionPt:
      "API REST com Spring Boot, Spring Security, JWT dual-token, RBAC, PostgreSQL, migrations Flyway, testes unitários/integrados e pipeline de CI.",
    solutionEn:
      "REST API with Spring Boot, Spring Security, dual-token JWT, RBAC, PostgreSQL, Flyway migrations, unit/integration tests and CI pipeline.",
    highlightsPt: [
      "Autenticação JWT com estratégia de access/refresh token.",
      "Controle de acesso baseado em papéis para proteger operações sensíveis.",
      "Versionamento de banco com Flyway e persistência PostgreSQL.",
      "Testes com JUnit, Mockito e Testcontainers, além de GitHub Actions.",
    ],
    highlightsEn: [
      "JWT authentication with access/refresh token strategy.",
      "Role-based access control to protect sensitive operations.",
      "Database versioning with Flyway and PostgreSQL persistence.",
      "Tests with JUnit, Mockito and Testcontainers plus GitHub Actions.",
    ],
    impactPt:
      "É o projeto que melhor evidencia a stack principal: Java, Spring Boot, PostgreSQL, segurança, testes e práticas de backend profissional.",
    impactEn:
      "This project best demonstrates the primary stack: Java, Spring Boot, PostgreSQL, security, tests and professional backend practices.",
  },
  {
    id: "rastreador",
    name: "Sistema de Rastreamento Logístico",
    descriptionPt:
      "MVP full stack para monitoramento de cargas em tempo real, com dashboard web, aplicativo mobile para envio de localização e visualização em mapa com Leaflet.",
    descriptionEn:
      "Full stack MVP for real-time cargo monitoring, with web dashboard, mobile app for location tracking and Leaflet map visualization.",
    link: "https://github.com/JoaoPedroAraujoSouza/rastreador-cargas",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React", "React Native", "Leaflet"],
    categories: ["fullstack"],
    statusPt: "MVP full stack",
    statusEn: "Full stack MVP",
    rolePt: "Backend Java/Spring, web e mobile",
    roleEn: "Java/Spring backend, web and mobile",
    problemPt:
      "Permitir acompanhamento operacional de cargas com envio de localização por dispositivo móvel e consulta visual por dashboard.",
    problemEn:
      "Enable operational cargo tracking with mobile location updates and visual monitoring through a dashboard.",
    solutionPt:
      "Backend Java/Spring Boot com PostgreSQL, ambiente Docker, dashboard React, app React Native e mapa Leaflet para visualização das posições.",
    solutionEn:
      "Java/Spring Boot backend with PostgreSQL, Docker environment, React dashboard, React Native app and Leaflet map for location visualization.",
    highlightsPt: [
      "Separação entre API, dashboard web e aplicativo mobile.",
      "Persistência relacional para eventos de localização e dados de cargas.",
      "Visualização geográfica em mapa para facilitar acompanhamento operacional.",
      "Ambiente containerizado para simplificar execução e integração entre serviços.",
    ],
    highlightsEn: [
      "Separation between API, web dashboard and mobile app.",
      "Relational persistence for location events and cargo data.",
      "Geographic map visualization to simplify operational tracking.",
      "Containerized environment to simplify execution and service integration.",
    ],
    impactPt:
      "Mostra capacidade de desenhar uma solução ponta a ponta, mantendo backend Java como base e integrando interfaces web/mobile.",
    impactEn:
      "Shows the ability to design an end-to-end solution with Java backend as the base while integrating web/mobile interfaces.",
  },
  {
    id: "room-allocator",
    name: "Room Allocation System",
    descriptionPt:
      "Sistema acadêmico para gerenciamento de alocação de salas, turmas, professores, cursos e horários, com regras para evitar conflitos de agenda, capacidade e disponibilidade.",
    descriptionEn:
      "Academic system for room allocation management including classes, teachers, courses and schedules, with rules to prevent scheduling, capacity and availability conflicts.",
    link: "https://github.com/JoaoPedroAraujoSouza/room-alocator",
    tags: ["Java", "JavaFX", "Hibernate", "PostgreSQL", "JUnit", "Mockito", "JasperReports"],
    categories: ["academic"],
    statusPt: "Sistema acadêmico desktop",
    statusEn: "Academic desktop system",
    rolePt: "Modelagem, regras de negócio e persistência",
    roleEn: "Modeling, business rules and persistence",
    problemPt:
      "Resolver conflitos de alocação de salas considerando horários, professores, turmas, capacidade e disponibilidade dos espaços.",
    problemEn:
      "Solve room allocation conflicts considering schedules, teachers, classes, capacity and room availability.",
    solutionPt:
      "Aplicação Java com interface desktop, persistência com Hibernate/PostgreSQL, validações de agenda e geração de relatórios.",
    solutionEn:
      "Java application with desktop interface, Hibernate/PostgreSQL persistence, schedule validations and report generation.",
    highlightsPt: [
      "Regras para impedir choque de horários e uso indevido de salas.",
      "Modelagem de entidades acadêmicas como cursos, turmas, professores e ambientes.",
      "Relatórios com JasperReports e validações automatizadas com JUnit/Mockito.",
      "Uso de Java Time API para manipulação consistente de períodos e horários.",
    ],
    highlightsEn: [
      "Rules to prevent schedule conflicts and improper room usage.",
      "Modeling of academic entities such as courses, classes, teachers and rooms.",
      "Reports with JasperReports and automated validations with JUnit/Mockito.",
      "Java Time API usage for consistent period and schedule handling.",
    ],
    impactPt:
      "Evidencia raciocínio de domínio, validação de regras complexas e modelagem relacional aplicada a um problema acadêmico real.",
    impactEn:
      "Highlights domain reasoning, complex rule validation and relational modeling applied to a real academic problem.",
  },
  {
    id: "idea-bib",
    name: "IDEA-BIB",
    descriptionPt:
      "Sistema acadêmico para gerenciamento de acervo bibliográfico pessoal de professores, empréstimos, devoluções, usuários e repositório digital de TCCs em PDF.",
    descriptionEn:
      "Academic system for managing professors' personal book collections, loans, returns, users and a digital repository of undergraduate theses in PDF.",
    link: "https://github.com/IDEA-BIB",
    tags: ["Backend", "Redis", "RabbitMQ", "Auth", "LaTeX", "GitHub Projects"],
    categories: ["academic"],
    statusPt: "Projeto acadêmico colaborativo",
    statusEn: "Collaborative academic project",
    rolePt: "Backend, requisitos e documentação",
    roleEn: "Backend, requirements and documentation",
    problemPt:
      "Organizar acervos pessoais de professores e fluxos de empréstimo/devolução, além de centralizar TCCs digitais em PDF.",
    problemEn:
      "Organize professors' personal collections and loan/return flows while centralizing digital undergraduate theses in PDF.",
    solutionPt:
      "Sistema com documentação de requisitos, autenticação por perfis, filas/cache como conceitos de arquitetura e organização do trabalho via GitHub Projects.",
    solutionEn:
      "System with requirements documentation, profile-based authentication, queue/cache architecture concepts and work organization through GitHub Projects.",
    highlightsPt: [
      "Levantamento de requisitos funcionais e comunicação com stakeholder.",
      "Autenticação por perfis para separar responsabilidades no sistema.",
      "Documentação técnica em Overleaf/LaTeX e gestão de tarefas no GitHub Projects.",
      "Discussão de arquitetura envolvendo Redis, RabbitMQ e geração de relatórios.",
    ],
    highlightsEn: [
      "Functional requirements gathering and stakeholder communication.",
      "Profile-based authentication to separate responsibilities in the system.",
      "Technical documentation in Overleaf/LaTeX and task management in GitHub Projects.",
      "Architecture discussions involving Redis, RabbitMQ and report generation.",
    ],
    impactPt:
      "Mostra participação em projeto colaborativo com foco em requisitos, documentação, organização de entregas e decisões de arquitetura.",
    impactEn:
      "Shows participation in a collaborative project focused on requirements, documentation, delivery organization and architecture decisions.",
  },
];
