export const siteConfig = {
  name: "Satwik Medipalli",
  brand: "Satwik.",
  title: "Analyst · Engineer · Builder",
  tagline: "I ship production systems.",
  heroImage: {
    src: "/hero-view.jpg",
    alt: "Snow covered alpine peaks above a sea of clouds at sunrise",
    caption: "This is the peace you'll feel when you hire me.",
  },
  location: "Richardson, TX",
  email: "sathwik.medipalli@gmail.com",
  phone: "945 544 2418",
  linkedin: "https://linkedin.com/in/medipalli-satwik",
  github: "https://github.com/satwikmed",
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
    "MS Business Analytics graduate with 3 internships shipping production systems. Eight deployed platforms with live URLs. Built reliability ML, multi agent AI products, NLP pipelines, and forecasting systems across silicon, finance, voice, and sports analytics.",
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
    url: "https://sentinelai-ochre-six.vercel.app",
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
    url: "https://lumen-pi-nine.vercel.app",
    github: "https://github.com/satwikmed/market-terminal",
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
    url: "https://silicon-sentinel.vercel.app",
    github: "https://github.com/satwikmed/silicon-sentinel",
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
    url: "https://diligence-ai-nine.vercel.app",
    github: "https://github.com/satwikmed/diligence-ai",
    featured: true,
    accent: "#1e3a5f",
    screenshot: "/projects/diligence-ai-nine.png",
  },
  {
    id: "voiceiq",
    name: "VoiceIQ",
    question: "How do you know your voice agent is actually ready to ship?",
    description:
      "Calibrated testing harness for AI voice agents. Simulates caller conversations across six scenarios, scores with an LLM judge, and validates trust with Bland Altman calibration.",
    highlights: [
      "Two LLM conversation simulator",
      "Bland Altman calibration system",
      "70 unit tests, pre seeded demo data",
    ],
    discipline: ["AI Engineering", "ML", "QA"],
    stack: ["Python", "Streamlit", "Next.js", "Ollama"],
    url: "https://voice-agent.vercel.app",
    github: "https://github.com/satwikmed/voice-agent",
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
    url: "https://web-bice-eta-18.vercel.app",
    github: "https://github.com/satwikmed/shapeshift-baseball",
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
    url: "https://nfl-draft-intelligence.vercel.app",
    github: "https://github.com/satwikmed/nfl-draft-intelligence",
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
    github: "https://github.com/satwikmed/nfl-edge",
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
      "Built single cell omics pipeline handling 500K+ records with QC, normalization, and differential analysis",
      "Implemented GSEA, t test scoring, and S3 backed visualization exports",
      "Containerized and deployed via Docker with boto3 AWS S3 integration",
    ],
  },
  {
    id: "bostonlogix",
    company: "Bostonlogix",
    role: "Data Analytics Intern",
    period: "Aug 2023 to Dec 2023",
    question:
      "How do you turn messy recipe sheets and millions of SQL rows into something a burger chain can actually use?",
    logo: "/logos/bostonlogix.png",
    product: "Hungry Jack's",
    context:
      "Bostonlogix was supporting Hungry Jack's, a major burger chain in Australia. I worked across NLP extraction, database migration, executive KPI reporting, and API cleanup for a high volume client data stack.",
    phases: [
      {
        title: "Recipe ingredient bot",
        description:
          "First assignment: build a bot that reads full recipe sheets and returns structured ingredient lists with quantities. Example: a chicken burger entry becomes chicken breast 120g, brioche bun 1 piece, cheddar 40g, and so on. Shipped with both OpenAI and Azure OpenAI so the team could compare quality and cost.",
      },
      {
        title: "SQL Server to MongoDB migration",
        description:
          "Client operations data lived in Microsoft SQL Server. The team wanted a more flexible document model, so I wrote migration jobs in SQL Server and Python to move recipes, ingredients, menu items, and store sales into MongoDB, then validated row counts table by table.",
      },
      {
        title: "Bold BI KPI dashboards",
        description:
          "After migration, we connected Bold BI to MongoDB and built executive KPI dashboards for the client. I owned the data plumbing and metric definitions that fed those views.",
      },
      {
        title: "API cleanup and inventory",
        description:
          "Later I audited the company's large API surface: GET, POST, PUT, DELETE endpoints across menu, store, and ops services. Regression tested in Postman, aligned tests with Swagger/OpenAPI specs, and catalogued healthy endpoints for the team.",
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
      "Built recipe ingredient extraction bot with OpenAI and Azure OpenAI",
      "Migrated 1M+ records from SQL Server to MongoDB with validation",
      "Regression tested 1000+ API endpoints via Postman and Swagger",
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
          "Upgraded to ARIMA for the same one year horizon. Captured seasonality and drift in device uptime more accurately, reaching roughly 92 to 95% accuracy on validation checks.",
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
      "Ingested 500K+ JSON sensor datapoints from IoT APIs into Power BI",
      "Deployed Remote Monitoring System dashboard on the company website",
      "ARIMA forecasting at 92 to 95% accuracy for proactive device maintenance",
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
      "I like systems that cite their sources. Same stack behind SentinelAI, Diligence AI, and the other agent work I have shipped.",
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
    prompt: "You need something that survives production?",
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
      "If you are hiring for data analytics, AI engineering, or business analytics, I want to hear about it. Eight platforms live, three internships shipped, and I respond fast.",
  },
];

export const education = {
  school: "University of Texas at Dallas",
  degree: "MS Business Analytics",
  period: "May 2026",
  location: "Richardson, TX",
};

export const recruiterMemo = {
  preface:
    "You made it to Recruiter Mode. Either someone forwarded you here, you pressed R on purpose, or the floating hire satwik text worked. This is the sane half. The other half is doing something weirder on purpose.",
  forwardBlurb:
    "Satwik Medipalli is an MS Business Analytics graduate (UT Dallas, May 2026) with 3 shipped internships and 8 live AI analytics products. Strong in multi agent systems, ML pipelines, market analytics, and dashboards. Open to data analytics, AI engineering, and business analytics roles. Responds fast.",
  caseLine:
    "Ships production AI and analytics. Eight platforms live. Three internships done.",
  whyNow:
    "If you are hiring for analytics, ML, or AI engineering, I want in. I build things that stay up after deploy, not slide decks. Available to start the conversation today.",
  proof: [
    {
      id: "sentinelai",
      name: "SentinelAI",
      hook: "A GenAI gateway with routing, guardrails, and evals that run in CI",
      url: "https://sentinelai-ochre-six.vercel.app",
    },
    {
      id: "lumen",
      name: "Lumen",
      hook: "S&P 500 terminal: SEC XBRL, risk lab, backtests, grounded AI",
      url: "https://lumen-pi-nine.vercel.app",
    },
    {
      id: "shapeshift",
      name: "ShapeShift",
      hook: "Locked 2025 pitch intervention eval with a near null ATE and an honest null",
      url: "https://web-bice-eta-18.vercel.app",
    },
    {
      id: "silicon-sentinel",
      name: "SiliconSentinel",
      hook: "Physics grounded fleet reliability with 83% recall at 80% precision",
      url: "https://silicon-sentinel.vercel.app",
    },
    {
      id: "diligence-ai",
      name: "Diligence AI",
      hook: "6 agents, citation backed 10K analysis",
      url: "https://diligence-ai-nine.vercel.app",
    },
    {
      id: "boltzmann-labs",
      name: "Boltzmann Labs",
      hook: "500K+ record single cell pipeline, Docker + S3",
      url: "https://github.com/satwikmed/Boltzmann-Labs",
    },
    {
      id: "ideabytes",
      name: "Ideabytes",
      hook: "IoT dashboard deployed on company site, 92 to 95% ARIMA forecast",
      url: "https://github.com/satwikmed/Ideabytes",
    },
    {
      id: "voiceiq",
      name: "VoiceIQ",
      hook: "Voice agent eval harness with LLM judge + calibration",
      url: "https://voice-agent.vercel.app",
    },
  ],
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
