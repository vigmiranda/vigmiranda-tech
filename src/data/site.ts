export const site = {
  brand: 'Vigmiranda.Tech',
  name: 'Vitor Gomes Miranda',
  tagline: 'Software Engineer · Escritor · Criador de projetos digitais',
  location: 'Balneário Camboriú, SC · remote-first',
  email: 'vigmiranda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vitorgomesmiranda/',
  github: 'https://github.com/vigmiranda',
  instagram: 'https://www.instagram.com/vigmiranda.tech/',
  domain: 'https://vigmiranda-tech.com',
  cvPath: '/curriculo-vitor-gomes-miranda.pdf',
  focus:
    'Aberto a papéis remote de Specialist, Tech Lead ou Arquitetura, a parcerias em produto — e a leitores curiosos pelos meus livros.',
  headline:
    'Tech lead hands-on em engenharia de software — arquitetura, backend e produto de ponta\u00a0a\u00a0ponta. Também escrevo livros e construo automações.',
  description:
    'Vitor Gomes Miranda — desenvolvedor de software, escritor e criador de projetos digitais. Engenharia de software, arquitetura e liderança técnica hands-on; produtos próprios, automações para day trade e livros de fantasia e tecnologia.',
  about: [
    'Desenvolvedor de software há mais de 10 anos, com trajetória em backend, sistemas distribuídos, arquitetura e liderança técnica hands-on. Atuei como Tech Lead, Specialist e Integration Architect em sistemas de alta criticidade no mercado financeiro e de pagamentos (Itaú, Santander, BTG, Cielo, Pluxee), modernizando legado — incluindo migrações Java 7 → 21 — e liderando times multiplataforma. Fui Co-Founder & CTO da ECSA (YC S22), construindo engenharia e produto do zero.',
    'Em paralelo, crio projetos digitais próprios: SaaS, infraestrutura de IA, apps, um RPG para Telegram e robôs de trading para MetaTrader 5 e Profit — com Go, Kotlin, Java, TypeScript e AWS. Trabalho em Spec-Driven Development: a especificação guia o desenho, o código e a revisão; a IA entra no ciclo inteiro (spec, implementação, testes e docs), com ownership humano nas decisões.',
    'Também sou escritor. Apaixonado por literatura de fantasia e por RPGs, encontro na escrita espaço para explorar ideias, construir universos e compartilhar conhecimento. Meus livros transitam entre o narrativo e o técnico — da saga DragonKi — Crônicas de Aethoria, nascida do meu próprio jogo, a um guia sobre automação de investimentos com IA —, aproximando a experiência prática da imaginação.',
  ],
};

export type Book = {
  title: string;
  series?: string;
  status?: string;
  blurb: string;
  tags: string[];
  href?: string;
  cta?: string;
};

export const books: Book[] = [
  {
    title: 'Do Prompt ao Robô',
    series: 'Investimento e Automação',
    status: 'Publicado · nov/2026',
    blurb:
      'A construção de um Expert Advisor em MQL5 com ajuda de IA: de regras sem ambiguidade e prompts à revisão do código, cálculo de volume e testes reproduzíveis no MetaTrader 5 — com laboratórios guiados, códigos completos e ficha de validação.',
    tags: ['MQL5', 'MetaTrader 5', 'IA', 'Kindle', '154 páginas'],
    href: 'https://www.amazon.com.br/dp/B0HQ15343Q',
    cta: 'Ler na Amazon',
  },
  {
    title: 'O Despertar',
    series: 'DragonKi — Crônicas de Aethoria · Livro I',
    status: 'Publicado · out/2026',
    blurb:
      'Ayla desaparece de Valdora sem explicações, e Kael, seu irmão, parte por um mundo que conhece apenas pelas histórias. Uma fantasia sobre família, autoconhecimento e a coragem de seguir sem ter todas as respostas — 18 capítulos e 28 ilustrações.',
    tags: ['Fantasia', 'Kindle', '347 páginas'],
    href: 'https://www.amazon.com.br/dp/B0HP6KRQDG',
    cta: 'Ler na Amazon',
  },
];

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
    items: ['Go', 'Kotlin', 'Java', 'TypeScript', 'MQL5'],
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
    role: 'Produto · SaaS',
    problem: 'Marcas precisam publicar conteúdo com ritmo e operação sem depender de planilha.',
    blurb:
      'SaaS multi-brand: agenda, pipeline de Reels, workers e ops web para crescer com conteúdo.',
    tags: ['TypeScript', 'Postgres', 'Workers', 'SaaS'],
  },
  {
    name: 'Hub',
    role: 'Infra de IA',
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
    role: 'Jogo · RPG no Telegram',
    problem: 'Um RPG que vive dentro do chat, com economia, eventos semanais e pagamentos reais.',
    blurb:
      'Backend em Go com bot, workers e webhook de pagamentos: loja, referral, Big Boss semanal com ranking e premiação assíncrona. O universo do jogo virou a saga Crônicas de Aethoria.',
    tags: ['Go', 'Postgres', 'Redis', 'Telegram'],
  },
  {
    name: 'Robôs para day trade',
    role: 'Automação · trading',
    problem: 'Executar estratégias com disciplina, sem depender de decisão manual a cada candle.',
    blurb:
      'Expert Advisors para MetaTrader 5 e Profit (NTSL): leitura de regime de mercado, tendência com EMA/ADX, gestão de risco com stop diário e sessões controladas — em minicontratos B3, forex, ouro e cripto.',
    tags: ['MQL5', 'NTSL', 'MetaTrader 5', 'Gestão de risco'],
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
