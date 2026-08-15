export const siteConfig = {
  name: "Satwik Medipalli",
  brand: "Satwik.",
  title: "AI / LLM Engineer · Sports + Stocks Nerd",
  heroImage: {
    src: "/hero-view.jpg",
    alt: "Snow covered alpine peaks above a sea of clouds at sunrise",
    caption: "This is the peace you'll feel when you hire me.",
  },
  location: "Livingston, NJ",
  email: "sathwik.medipalli@gmail.com",
  phone: "945 544 2418",
  linkedin: "https://linkedin.com/in/medipalli-satwik",
  github: "https://github.com/satwikmed",
  calendarUrl: "https://cal.com/medipalli-satwik-6qoa0v/15min",
  calendarLabel: "book 15 min with me →",
  resumes: {
    data: {
      href: "/Satwik_Medipalli_Data.pdf",
      filename: "Satwik_Medipalli_Data.pdf",
      label: "download me (Data version)",
    },
    ai: {
      href: "/Satwik_Medipalli_AI_Engineer.pdf",
      filename: "Satwik_Medipalli_AI_Engineer.pdf",
      label: "download me (AI version)",
    },
  },
  summary:
    "UT Dallas MS Business Analytics (May 2026). Three internships, a UTD client project with DFW Technology, and 8 live AI/analytics products you can open: agents, RAG, eval, reliability ML, and terminals. Livingston, NJ. Open to work.",
};

export const stats = [
  { label: "Projects Online", value: "8/8", status: "online" as const },
  { label: "Internships", value: "3", status: "online" as const },
  { label: "Records Processed", value: "100K+", status: "online" as const },
  { label: "Agents Deployed", value: "6", status: "online" as const },
];

export type Project = {
  id: string;
  name: string;
  question: string;
  description: string;
  highlights: string[];
  discipline: string[];
  stack: string[];
  url: string;
  github?: string;
  featured?: boolean;
  span?: "default" | "wide";
  accent: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    id: "sentinelai",
    name: "SentinelAI",
    question:
      "What if people at work could use GenAI without hoping the model behaves?",
    description:
      "I built a gateway that sits in front of OpenAI, Anthropic, and Gemini. It plans the work, picks a model, checks the answer, and stops PII or sketchy prompts before anything goes out. There is a document copilot with citations, an audit trail, and evals that run in CI so bad changes do not slip into prod.",
    highlights: [
      "Plans the job, routes it, then a verifier can send shaky answers back",
      "Catches PII and prompt injection, keeps an audit log, and has a human review queue",
      "Evals gate every PR. Live on Render and Vercel with no credit card needed",
    ],
    discipline: ["AI Engineering", "Full stack", "MLOps"],
    stack: ["LangGraph", "FastAPI", "React", "ChromaDB", "OpenTelemetry", "Docker"],
    url: "https://sentinel.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/SentinelAI",
    featured: true,
    span: "wide",
    accent: "#1f4e79",
    screenshot: "/projects/sentinelai.png",
  },
  {
    id: "lumen",
    name: "Lumen",
    question:
      "Can you build a market terminal on public data that explains every number, and never invents one?",
    description:
      "S&P 500 research terminal in plain English. Live Yahoo last sale quotes, SEC XBRL financials and filings, FRED macro, a quant risk lab with correlation and portfolio backtests, and an AI layer that is only allowed to narrate evidence the backend already computed.",
    highlights: [
      "503 names · risk lab, screener, backtest vs SPY, compare mode",
      "SEC XBRL statements + 12 ratios; grounded filing AI with citations",
      "Sources page that refuses Level 1 claims, synthetic filler, and invented odds",
    ],
    discipline: ["Full stack", "Finance", "AI Engineering"],
    stack: ["React", "FastAPI", "D3", "SEC EDGAR", "Yahoo", "FRED"],
    url: "https://lumen.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/Lumen",
    featured: true,
    span: "wide",
    accent: "#b42318",
    screenshot: "/projects/lumen.png",
  },
  {
    id: "silicon-sentinel",
    name: "SiliconSentinel",
    question: "Can you catch a GPU failure thirty days before it takes a rack offline?",
    description:
      "Fleet reliability intelligence for semiconductor hardware. Physics grounded failure simulation across 12 global sites, survival models, XGBoost remaining life scoring, and an LLM analyst that verifies every numeric claim.",
    highlights: [
      "83% recall at 80% precision on 30 day failure risk",
      "Arrhenius / Black / Peck / Coffin Manson physics simulator",
      "Ops console with decision queue, war room, and SHAP deep dives",
    ],
    discipline: ["ML", "Data Science", "AI Engineering"],
    stack: ["Python", "XGBoost", "lifelines", "Next.js", "Pydantic AI"],
    url: "https://silicon.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/SiliconSentinel",
    featured: true,
    span: "wide",
    accent: "#0b6e74",
    screenshot: "/projects/silicon-sentinel.png",
  },
  {
    id: "diligence-ai",
    name: "Diligence AI",
    question: "What if a junior analyst's first pass on a 10K took minutes, not days?",
    description:
      "Autonomous due diligence for equity research. Upload a 10K and get a citation backed report with QoQ filing delta, earnings vs 10K cross checks, and ER memo export.",
    highlights: [
      "Six agent pipeline with A2A orchestration",
      "SEC filing delta and contradiction scanning",
      "Live on Vercel with pre built AAPL case study",
    ],
    discipline: ["AI Engineering", "Full stack", "Finance"],
    stack: ["Next.js", "FastAPI", "Pydantic AI", "SQLite"],
    url: "https://diligence.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/DiligenceAI",
    featured: true,
    accent: "#1e3a5f",
    screenshot: "/projects/diligence-ai-nine.png",
  },
  {
    id: "voiceiq",
    name: "VoiceIQ",
    question: "How do you know your voice agent is actually ready to ship?",
    description:
      "Calibrated testing harness for AI voice agents. Simulates caller conversations across nine scenarios, scores with an LLM judge, and validates trust with human calibration (MAE / Bland Altman).",
    highlights: [
      "9 scenarios with deploy gate at 90% pass rate (score ≥70)",
      "Human-graded calibration (MAE 3.7, Bland Altman bias +2.8)",
      "Turn-level evidence scoring across five dimensions",
    ],
    discipline: ["AI Engineering", "ML", "QA"],
    stack: ["Python", "Streamlit", "Next.js", "Ollama"],
    url: "https://voiceiq.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/VoiceIQ",
    featured: true,
    accent: "#4a1942",
    screenshot: "/projects/voiceiq.png",
  },
  {
    id: "shapeshift",
    name: "ShapeShift",
    question: "When a pitcher reshapes a pitch, how do you know it actually helped?",
    description:
      "Baseball analytics research system for pitch design interventions. Outcome blind change detection, threshold frozen on 2024, locked 2025 matched event study, and Keep / Reshape / De emphasize recommendations for Baseball Operations.",
    highlights: [
      "5.6M+ Statcast pitches in a reproducible DuckDB warehouse",
      "Locked 2025 ATE +0.02 RV/100, near null aggregate effect",
      "Featured Muñoz slider case at matched minus 0.29 RV/100",
    ],
    discipline: ["Data Science", "Sports Analytics", "Full stack"],
    stack: ["Python", "DuckDB", "scikit learn", "Next.js", "Statcast"],
    url: "https://shapeshift.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/ShapeShift",
    featured: true,
    accent: "#8d1f2f",
    screenshot: "/projects/shapeshift.png",
  },
  {
    id: "nfl-draft",
    name: "NFL Draft Intelligence",
    question: "Can you predict which draft prospect will last in the NFL before they're picked?",
    description:
      "Draft prospect evaluation with position specific XGBoost classifiers, SHAP explainability, historical comp engine, and Kaplan Meier survival analysis across 2000 to 2025 Combine data.",
    highlights: [
      "25 years of Combine and draft history",
      "SHAP driven prospect insights",
      "Career longevity survival models",
    ],
    discipline: ["ML", "Data Analytics", "Full stack"],
    stack: ["XGBoost", "SHAP", "lifelines", "Next.js"],
    url: "https://draft.satwikmedipalli.dev",
    github: "https://github.com/satwikmed/NFL-Draft-Intelligence",
    accent: "#1a4d3e",
    screenshot: "/projects/nfl-draft.png",
  },
  {
    id: "nfl-edge",
    name: "NFL Edge",
    question: "Which teams are wasting cap space and which play calls are already telegraphed?",
    description:
      "Front office analytics OS grading play calling predictability, roster value and cap efficiency, and in game decision quality across all 32 NFL teams.",
    highlights: [
      "Three specialized analytics engines",
      "EPA per cap dollar metrics",
      "Next.js dashboards with D3 visualizations",
    ],
    discipline: ["Full stack", "Data Analytics", "ML"],
    stack: ["Next.js", "Python", "SQLite", "D3"],
    url: "https://nfl-edge.vercel.app",
    github: "https://github.com/satwikmed/NFL-Edge",
    accent: "#5c3d1e",
    screenshot: "/projects/nfl-edge.png",
  },
];

export type ExperiencePhase = {
  title: string;
  description: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  question: string;
  logo?: string;
  context?: string;
  product?: string;
  phases?: ExperiencePhase[];
  stack?: string[];
  github?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "dfw-technology",
    company: "DFW Technology",
    role: "AI Researcher (UTD Client Project)",
    period: "Jan 2026 to May 2026",
    question:
      "When should a mid-market company run private AI or small models instead of defaulting to a full LLM?",
    context:
      "Semester-long UTD educational engagement on-site at DFW Technology. College-connected client project designed like real client work: research, write, and deliver recommendations the company could actually use.",
    product: "Private AI + SLM playbooks",
    bullets: [
      "Authored Public vs Private AI: Scalable Business Agents for SMEs on architecture, governance, and compliance",
      "Authored When to Use Small Language Models: A Strategic Playbook with a Unit of Work pilot measuring >90% inference-cost reduction vs LLM-only",
    ],
    stack: ["Private AI", "SLMs", "Cost modeling", "Governance"],
  },
  {
    id: "boltzmann-labs",
    company: "Boltzmann Labs",
    role: "AI Research Intern",
    period: "Jan 2024 to Apr 2024",
    question:
      "What if you could spot cancer signals in single cell data before they fully show up?",
    logo: "/logos/boltzmann.png",
    product: "BoltBio",
    context:
      "Boltzmann Labs is a bioinformatics company working with protein, bulk RNA, and single cell data. The core goal: detect cancerous cell signals early, before they fully manifest, through rigorous multi omic analysis.",
    phases: [
      {
        title: "Competitive research",
        description:
          "First two weeks: mapped companies in the same space and studied how they structure omics analysis pipelines, what they automate, what they measure, and how they surface biological signal from raw data.",
      },
      {
        title: "Pipeline architecture",
        description:
          "After understanding why differential analysis and enrichment matter for early cancer detection, I evaluated automation tools and stack options, then designed the pipeline architecture best suited for Boltzmann's workflow.",
      },
      {
        title: "BoltBio backend",
        description:
          "Built the end to end single cell analysis pipeline in Python: QC filtering, library size normalization, differential analysis via t test and p values, and Gene Set Enrichment Analysis (GSEA) to surface significant gene populations across 500K+ records.",
      },
      {
        title: "Deployment",
        description:
          "Containerized the workflow with Docker, wired S3 ingest and export via boto3, and generated Matplotlib/Seaborn visualizations with KMeans clustering: heatmaps, p value charts, and enrichment plots uploaded back to the boltbio S3 bucket.",
      },
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "scikit learn",
      "Matplotlib",
      "Seaborn",
      "boto3",
      "AWS S3",
      "Docker",
      "GSEA",
    ],
    github: "https://github.com/satwikmed/Boltzmann-Labs",
    bullets: [
      "Built a multi-omic analysis pipeline over millions of records using clustering, differential expression, and GSEA to prioritize cancer-linked cell populations",
      "Containerized and deployed with Docker, FastAPI, and Kubernetes, cutting researcher setup from hours to minutes",
    ],
  },
  {
    id: "bostonlogix",
    company: "Bostonlogix",
    role: "Data Analytics Intern",
    period: "Aug 2023 to Dec 2023",
    question:
      "How do you turn messy recipe sheets and millions of rows into something a burger chain can actually use?",
    logo: "/logos/bostonlogix.png",
    product: "Hungry Jack's",
    context:
      "Bostonlogix was supporting Hungry Jack's, a major burger chain in Australia. I worked across database migration, executive KPI reporting, Azure OpenAI recipe extraction, and API test cleanup for a high volume client data stack.",
    phases: [
      {
        title: "MongoDB to SQL Server migration",
        description:
          "Migrated 1M+ Hungry Jack's records from MongoDB into SQL Server with Python so analytics could run on structured tables, then validated counts and joins.",
      },
      {
        title: "Bold BI KPI dashboards",
        description:
          "Built Bold BI dashboards on the structured data so the client could monitor KPIs without waiting on manual extracts.",
      },
      {
        title: "Recipe ingredient bot",
        description:
          "Benchmarked Azure OpenAI against classical NLP for extracting ingredients and quantities from ~100K unstructured Hungry Jack's recipes. The team adopted the LLM path in production.",
      },
      {
        title: "API cleanup and inventory",
        description:
          "Diagnosed and fixed 100+ failing API test cases in Postman, added auth and daily scheduled runs, documented APIs in Swagger, and presented the regression suite for release testing.",
      },
    ],
    stack: [
      "Python",
      "OpenAI",
      "Azure OpenAI",
      "SQL Server",
      "MongoDB",
      "Bold BI",
      "Postman",
      "Swagger",
    ],
    github: "https://github.com/satwikmed/BostonLogix",
    bullets: [
      "Migrated 1M+ Hungry Jack's records from MongoDB to SQL Server and built Bold BI dashboards",
      "Benchmarked Azure OpenAI vs classical NLP on 100K recipes; team adopted the LLM path in production",
      "Fixed 100+ failing Postman API tests, added auth, daily runs, and Swagger docs",
    ],
  },
  {
    id: "ideabytes",
    company: "Ideabytes",
    role: "BI Developer Intern",
    period: "Apr 2023 to Jul 2023",
    question:
      "How do you monitor thousands of IoT devices across India and know which ones will fail next?",
    logo: "/logos/ideabytes.png",
    product: "Remote Monitoring System",
    context:
      "Ideabytes is an IoT company tracking telemetry from wireless data loggers and industrial sensors deployed across India. Each site runs different devices, so the data arrived as nested JSON from a live API.",
    phases: [
      {
        title: "JSON API ingestion",
        description:
          "First task: connect to the company's JSON API and pull unstructured IoT device data into Power BI. Learned how JSON payloads map to API responses and built the ingestion flow that fed the analytics layer.",
      },
      {
        title: "Data cleaning in Power BI",
        description:
          "Telemetry lived inside nested lists across regions and devices. I flattened and cleaned the schema in Power BI so readings, alerts, and device metadata became usable tables.",
      },
      {
        title: "Website dashboard deployment",
        description:
          "Built the Remote Monitoring System dashboard in Power BI and deployed it as the live frontend on the Ideabytes company website. Presented the dashboard directly to the CEO.",
      },
      {
        title: "Linear regression forecasting",
        description:
          "Built a Python linear regression pipeline on monthly device metrics to forecast 12 months ahead: which devices are performing well today, which could improve, and which may show errors soon.",
      },
      {
        title: "ARIMA time series model",
        description:
          "Upgraded to ARIMA for the same one year horizon to capture seasonality and drift in device performance, shifting maintenance planning from reactive to scheduled.",
      },
    ],
    stack: [
      "Python",
      "Power BI",
      "Pandas",
      "scikit learn",
      "statsmodels",
      "ARIMA",
      "JSON APIs",
    ],
    github: "https://github.com/satwikmed/Ideabytes",
    bullets: [
      "Built live Power BI dashboards from IoT JSON APIs for the CEO and company website",
      "Forecasted one-year performance across 100+ IoT sensors with ARIMA in Python",
    ],
  },
];

export type SkillOffer = {
  id: string;
  prompt: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillOffers: SkillOffer[] = [
  {
    id: "skills-agents",
    prompt: "You want multi agent systems that cite their sources?",
    title: "AI & Agents",
    blurb:
      "I like systems that cite their sources. Same stack behind SentinelAI, DiligenceAI, and the other agent work online.",
    skills: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "OpenAI APIs",
      "Pinecone",
      "RAGAS",
      "Pydantic AI",
    ],
  },
  {
    id: "skills-ml",
    prompt: "You want dashboards that tell you what breaks next?",
    title: "ML & Data",
    blurb:
      "Forecasting, explainability, and models that survive real data. Built across BoltBio, NFL Draft, and the Ideabytes IoT dashboard.",
    skills: [
      "XGBoost",
      "SHAP",
      "Scikit learn",
      "Pandas",
      "NumPy",
      "BERT",
      "Power BI",
    ],
  },
  {
    id: "skills-infra",
    prompt: "You need something that stays up after you close the laptop?",
    title: "Infrastructure",
    blurb:
      "Containers, cloud storage, APIs, and databases. The layer that turns notebooks into things people can actually use.",
    skills: [
      "AWS S3",
      "Azure",
      "Docker",
      "Kubernetes",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  {
    id: "skills-languages",
    prompt: "You want one person who can build it end to end?",
    title: "Languages",
    blurb:
      "Python for ML and pipelines. SQL when the truth lives in the database. JavaScript when it needs a face. R when the stats homework fights back.",
    skills: ["Python", "SQL", "JavaScript", "R"],
  },
];

export type ContactInquiry = {
  id: string;
  question: string;
  title: string;
  meta: string;
  blurb: string;
};

export const contactInquiries: ContactInquiry[] = [
  {
    id: "contact-talk",
    question: "You made it to the bottom. Should we just talk?",
    title: "Let's talk",
    meta: "Open to opportunities",
    blurb:
      "If you are hiring for AI/LLM, data science, or analytics, email me. Eight live products, three internships. I respond fast.",
  },
];

export const education = {
  school: "University of Texas at Dallas",
  degree: "MS Business Analytics",
  period: "May 2026",
  location: "Richardson, TX",
};

/** Three live demos shown under the hero so proof hits before the scroll. */
export const heroProof = [
  {
    id: "lumen",
    name: "Lumen",
    hook: "S&P 500 terminal. Grounded AI that never invents a number.",
    url: "https://lumen.satwikmedipalli.dev",
    screenshot: "/projects/lumen.png",
  },
  {
    id: "diligence-ai",
    name: "DiligenceAI",
    hook: "Six agents. Citation backed 10K diligence in minutes.",
    url: "https://diligence.satwikmedipalli.dev",
    screenshot: "/projects/diligence-ai-nine.png",
  },
  {
    id: "sentinelai",
    name: "SentinelAI",
    hook: "GenAI gateway with routing, guardrails, and CI evals.",
    url: "https://sentinel.satwikmedipalli.dev",
    screenshot: "/projects/sentinelai.png",
  },
];

export const recruiterMemo = {
  preface:
    "You made it to Recruiter Mode. Either someone forwarded you, you pressed R on purpose, or the floating HIRE SATWIK text finally broke you. This is the sane half. Explorer is where I get weird on purpose.",
  forwardBlurb:
    "Satwik Medipalli. UT Dallas MS Business Analytics, Livingston NJ. 3 internships + UTD client project at DFW Technology + 8 live AI/analytics products (multiagent RAG, LLM eval, reliability ML, market terminals). Funny on purpose. Serious about the work. Open to AI/LLM Engineer and Data Scientist roles. Responds fast: sathwik.medipalli@gmail.com",
  caseLine:
    "Eight live products. Three internships. One UTD client project. One sports + stocks nerd who wants the job.",
  whyNow:
    "I finished my MS in Business Analytics at UT Dallas in May 2026. I'm looking for my first full time AI/LLM Engineer or Data Scientist role. The projects above are live if you want to check the work before we talk. I'm free to interview this week.",
  proof: [
    {
      id: "lumen",
      name: "Lumen",
      hook: "S&P 500 terminal: SEC XBRL, risk lab, backtests, grounded AI",
      url: "https://lumen.satwikmedipalli.dev",
      screenshot: "/projects/lumen.png",
    },
    {
      id: "diligence-ai",
      name: "DiligenceAI",
      hook: "6 agents, citation backed 10K analysis",
      url: "https://diligence.satwikmedipalli.dev",
      screenshot: "/projects/diligence-ai-nine.png",
    },
    {
      id: "voiceiq",
      name: "VoiceIQ",
      hook: "LLM as judge voice agent eval + calibration",
      url: "https://voiceiq.satwikmedipalli.dev",
      screenshot: "/projects/voiceiq.png",
    },
    {
      id: "silicon-sentinel",
      name: "SiliconSentinel",
      hook: "Fleet reliability ML at 83% recall and 80% precision",
      url: "https://silicon.satwikmedipalli.dev",
      screenshot: "/projects/silicon-sentinel.png",
    },
    {
      id: "sentinelai",
      name: "SentinelAI",
      hook: "GenAI gateway with routing, guardrails, CI evals",
      url: "https://sentinel.satwikmedipalli.dev",
      screenshot: "/projects/sentinelai.png",
    },
    {
      id: "shapeshift",
      name: "ShapeShift",
      hook: "Causal pitch redesign study on 5.6M+ Statcast pitches",
      url: "https://shapeshift.satwikmedipalli.dev",
      screenshot: "/projects/shapeshift.png",
    },
  ],
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
