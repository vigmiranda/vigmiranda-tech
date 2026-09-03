export const site = {
  brand: 'Vigmiranda.Tech',
  name: 'Vitor Gomes Miranda',
  tagline: 'Software Engineering Specialist',
  location: 'Balneário Camboriú, SC · remote-first',
  email: 'vigmiranda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vitorgomesmiranda/',
  github: 'https://github.com/vigmiranda',
  domain: 'https://vigmiranda-tech.com',
  cvPath: '/curriculo-vitor-gomes-miranda.pdf',
  focus:
    'Aberto a papéis remote de Specialist, Tech Lead ou Arquitetura — e a parcerias em produto.',
  headline:
    'Tech lead hands-on em sistemas financeiros críticos — e founder construindo produto de ponta\u00a0a\u00a0ponta.',
  summary:
    'Mais de 10 anos em backend e sistemas distribuídos no mercado financeiro — de bancos e meios de pagamento (Santander, BTG, Cielo, Pluxee, Itaú) à construção de produto como Co-Founder & CTO na ECSA (YC S22). Atuei como Tech Lead e Specialist liderando times e modernizando legado (incluindo migrações Java 7 → 21); também como Integration Architect em projetos de grande porte. Hoje sigo hands-on em engenharia no Itaú e, em paralelo, construo produtos próprios — Vector Growth, Hub, 1% ToDay e DragonKi — com Go, Kotlin, Java e AWS. Trabalho em Spec-Driven Development: a especificação guia o desenho, o código e a revisão; IA entra no ciclo inteiro (spec, implementação, testes e docs), com ownership humano nas decisões.',
};

export const practices = [
  {
    title: 'Spec-Driven Development',
    blurb:
      'Contrato primeiro: objetivo, escopo, gates e critérios de pronto ficam explícitos antes do código. A spec vira fonte da verdade para arquitetura, implementação e review — menos retrabalho, mais alinhamento entre produto e engenharia.',
  },
  {
    title: 'IA no ciclo de desenvolvimento',
    blurb:
      'Uso agentes e ferramentas generativas (Codex e similares) em todo o fluxo: rascunho de spec, código, testes, refatoração e documentação. Não substituo julgamento técnico — acelero entrega e qualidade com revisão, boundaries e gates claros.',
  },
];

export const helpItems = [
  {
    title: 'Arquitetura e modernização',
    blurb:
      'Desenho de serviços, governança técnica e evolução de legado sem travar a entrega.',
  },
  {
    title: 'Liderança técnica hands-on',
    blurb:
      'Coordeno times multiplataforma, mentoria e decisões críticas — sem sair do código.',
  },
  {
    title: 'Produto de ponta a ponta',
    blurb:
      'Do zero ao produção: APIs, workers, billing, integrações e operação em cloud.',
  },
  {
    title: 'Cloud e sistemas event-driven',
    blurb:
      'AWS, mensageria (Kafka/SQS), observabilidade e práticas DevOps no dia a dia.',
  },
  {
    title: 'Spec-Driven + engenharia com IA',
    blurb:
      'Operação com spec como contrato e IA no ciclo (código, testes, docs) — com gates, review e accountability.',
  },
];

export const stackGroups = [
  {
    label: 'Linguagens',
    items: ['Go', 'Kotlin', 'Java', 'TypeScript'],
  },
  {
    label: 'Arquitetura',
    items: ['Microserviços', 'Hexagonal', 'Event-driven', 'APIs'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
  },
  {
    label: 'Dados & mensageria',
    items: ['Postgres', 'Kafka', 'Redis', 'Oracle'],
  },
  {
    label: 'Método',
    items: ['Spec-Driven', 'AI-assisted', 'Codex', 'Gates & DoD'],
  },
];

export type Project = {
  name: string;
  role: string;
  problem: string;
  blurb: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Vector Growth',
    role: 'Produto · em construção',
    problem: 'Marcas precisam publicar conteúdo com ritmo e operação sem depender de planilha.',
    blurb:
      'SaaS multi-brand: agenda, pipeline de Reels, workers e ops web para crescer com conteúdo.',
    tags: ['TypeScript', 'Postgres', 'Workers', 'SaaS'],
  },
  {
    name: 'Hub',
    role: 'Infra de IA · em construção',
    problem: 'Times de produto precisam consumir vários providers de IA com custo e controle por tenant.',
    blurb:
      'Gateway OpenAI-compatible com ledger, chaves virtuais e billing em micros USD.',
    tags: ['Go', 'Postgres', 'Billing', 'OpenAPI'],
  },
  {
    name: '1% ToDay',
    role: 'Produto · mobile',
    problem: 'Formar hábitos exige progresso claro, lembretes e um caminho até a assinatura.',
    blurb:
      'App de hábitos com níveis, trial por referral, sync na nuvem e paywall.',
    tags: ['React Native', 'Expo', 'Express', 'RevenueCat'],
  },
  {
    name: 'DragonKi',
    role: 'Produto · em construção',
    problem: 'Automatizar fluxos com bot, pagamentos e jobs confiáveis sem acoplar tudo num monólito.',
    blurb:
      'Backend em Go: bots, workers, webhooks e pagamentos com arquitetura hexagonal.',
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
      'Engenharia em aplicações distribuídas mission-critical (Java/Go), AWS, Terraform e foco em estabilidade, segurança (OAuth/JWT) e observabilidade em produção.',
  },
  {
    company: 'Compass UOL · Vivo',
    role: 'Integration Architect',
    period: 'nov/2025 — abr/2026',
    highlight:
      'Governança de arquitetura alinhada às diretrizes corporativas, estimativas macro (Sprint 0), documentação técnica para o time e suporte em war rooms de entrega.',
  },
  {
    company: 'Cielo',
    role: 'Software Engineering Specialist / Tech Lead',
    period: 'set/2024 — ago/2025',
    highlight:
      'Liderança de time multiplataforma (backend, web, Android, iOS, QA); parceria com negócio na evolução do produto; entregas em produção e migração de APIs Java 7 → 21 no self-service.',
  },
  {
    company: 'Pluxee Brasil',
    role: 'Software Specialist',
    period: 'dez/2023 — ago/2024',
    highlight:
      'Definição de arquitetura e estrutura de projetos, otimização/migração de processos e serviços Spring em AWS (Lambda, RDS, EC2) com Oracle/Postgres.',
  },
  {
    company: 'ECSA',
    role: 'Co-Founder & CTO',
    period: 'abr/2022 — nov/2023',
    highlight:
      'YC S22. Construção da engenharia e do produto do zero (Go/Kotlin): arquitetura, time e entrega em fintech de comex e câmbio.',
  },
  {
    company: 'Saks',
    role: 'Tech Lead',
    period: 'dez/2020 — mar/2022',
    highlight:
      'Coordenação do time de desenvolvimento e reestruturação de projetos legados em Go, Kotlin e Spring.',
  },
  {
    company: 'Beyond · BTG Pactual',
    role: 'Senior Software Engineer',
    period: 'ago/2020 — jan/2021',
    highlight:
      'Banco digital: serviços em Kotlin com Clean Architecture, Kafka e AWS (SQS, CloudFormation) em ambiente de alta criticidade.',
  },
  {
    company: 'Anteriormente',
    role: 'Engenharia em bancos e produtos digitais',
    period: '2010 — 2020',
    highlight:
      'Santander/BRQ (SPB), Affero Lab e outros — Java/Spring, batch, mensageria e cloud, base da carreira em sistemas críticos.',
  },
];

export const education = [
  { place: 'Y Combinator', detail: 'S22' },
  {
    place: 'Faculdade Metodista Granbery',
    detail: 'Bacharelado em Sistemas · 2008–2012',
  },
];
