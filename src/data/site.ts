export const site = {
  brand: 'Vigmiranda.Tech',
  name: 'Vitor Gomes Miranda',
  tagline: 'Software Engineering Specialist',
  location: 'Balneário Camboriú, SC',
  email: 'vigmiranda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vitorgomesmiranda/',
  github: 'https://github.com/vigmiranda',
  domain: 'https://vigmiranda-tech.com',
  headline:
    'Backend, arquitetura e sistemas críticos — com ownership de ponta\u00a0a\u00a0ponta.',
  summary:
    'Mais de 10 anos em backend e sistemas distribuídos no mercado financeiro — de bancos e meios de pagamento (Santander, BTG, Cielo, Pluxee, Itaú) à construção de produto como Co-Founder & CTO na ECSA (YC S22). Atuei como Tech Lead e Specialist liderando times e modernizando legado (incluindo migrações Java 7 → 21); também como Integration Architect em projetos de grande porte. Hoje sigo hands-on em engenharia no Itaú e, em paralelo, construo produtos próprios — Vector Growth, Hub, 1% ToDay e DragonKi — com Go, Kotlin, Java e AWS.',
  stack: [
    'Go',
    'Kotlin',
    'Java',
    'Spring',
    'Microservices',
    'AWS',
    'Kafka',
    'Postgres',
  ],
};

export type Project = {
  name: string;
  role: string;
  blurb: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Vector Growth',
    role: 'Produto · em construção',
    blurb:
      'Plataforma SaaS multi-brand para crescer marcas com conteúdo: agenda, pipeline de Reels, workers e ops web.',
    tags: ['TypeScript', 'Postgres', 'Workers', 'SaaS'],
  },
  {
    name: 'Hub',
    role: 'Infra de IA · em construção',
    blurb:
      'Gateway de IA com ledger por tenant, chaves virtuais e billing em micros USD — OpenAI-compatible, multi-provider.',
    tags: ['Go', 'Postgres', 'Billing', 'OpenAPI'],
  },
  {
    name: '1% ToDay',
    role: 'Produto · mobile',
    blurb:
      'App de hábitos com progresso diário, níveis, trial por referral e assinatura — Expo, API e sync na nuvem.',
    tags: ['React Native', 'Expo', 'Express', 'RevenueCat'],
  },
  {
    name: 'DragonKi',
    role: 'Produto · em construção',
    blurb:
      'Backend em Go com bots, workers, webhooks e pagamentos — arquitetura hexagonal, Redis/Asynq e fluxos idempotentes.',
    tags: ['Go', 'Postgres', 'Redis', 'Telegram'],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlight: string;
};

export const experiences: Experience[] = [
  {
    company: 'Stefanini · Itaú',
    role: 'Software Engineer',
    period: 'mai/2026 — hoje',
    highlight:
      'Apps distribuídos mission-critical em Java/Go, AWS, Terraform e práticas de observabilidade.',
  },
  {
    company: 'Compass UOL · Vivo',
    role: 'Integration Architect',
    period: 'nov/2025 — abr/2026',
    highlight:
      'Governança de arquitetura, estimativas, documentação técnica e war rooms de entrega.',
  },
  {
    company: 'Cielo',
    role: 'Software Engineering Specialist / Tech Lead',
    period: 'set/2024 — ago/2025',
    highlight:
      'Liderança de time multiplataforma; migração de APIs Java 7 → 21 e modernização de legado.',
  },
  {
    company: 'Pluxee Brasil',
    role: 'Software Specialist',
    period: 'dez/2023 — ago/2024',
    highlight:
      'Arquitetura, otimização de processos e serviços Spring/AWS em escala.',
  },
  {
    company: 'ECSA',
    role: 'Co-Founder & CTO',
    period: 'abr/2022 — nov/2023',
    highlight:
      'YC S22. Construção do produto e da engenharia do zero em Go e Kotlin.',
  },
  {
    company: 'Saks',
    role: 'Tech Lead',
    period: 'dez/2020 — mar/2022',
    highlight: 'Coordenação de time, reestruturação de legado em Go/Kotlin/Spring.',
  },
  {
    company: 'Beyond · BTG Pactual',
    role: 'Senior Software Engineer',
    period: 'ago/2020 — jan/2021',
    highlight: 'Banco digital: Kotlin, Clean Architecture, Kafka e AWS.',
  },
  {
    company: 'Anteriormente',
    role: 'Engenharia em bancos e produtos digitais',
    period: '2010 — 2020',
    highlight:
      'Santander, BRQ, Affero Lab e outros — Java/Spring, batch, mensageria e cloud.',
  },
];

export const education = [
  { place: 'Y Combinator', detail: 'S22' },
  {
    place: 'Faculdade Metodista Granbery',
    detail: 'Bacharelado em Sistemas · 2008–2012',
  },
];
