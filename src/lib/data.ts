export const siteConfig = {
  name: "Satwik Medipalli",
  brand: "Satwik.",
  role: "AI Engineer",
  title: "AI Engineer — LLM Applications, RAG & Multi-Agent Systems",
  tagline: "I build AI systems you can actually verify.",
  subline:
    "Six deployed products — multi-agent due diligence, statistically calibrated LLM evaluation, reliability ML — every one live at a public URL. Nothing here is a mockup.",
  location: "Richardson, TX",
  availability: "Open to AI / ML / Data roles · Available now",
  email: "sathwik.medipalli@gmail.com",
  phone: "945-544-2418",
  linkedin: "https://linkedin.com/in/medipalli-satwik",
  github: "https://github.com/satwikmed",
  resume: {
    href: "/Resume.pdf",
    filename: "Satwik_Medipalli_Resume.pdf",
  },
  summary:
    "AI engineer (M.S., UT Dallas 2026) with six deployed AI and analytics products: multi-agent due diligence over SEC filings, LLM-judge evaluation with statistical calibration, semiconductor fleet reliability ML, and sports analytics platforms. Three internships shipping NLP pipelines and cloud ML systems.",
  targetRoles: [
    "AI Engineer",
    "LLM / Agents Developer",
    "AI Solutions Engineer",
    "Data Scientist",
  ],
};

export const stats = [
  { label: "Products Live", value: 6, suffix: "/6", detail: "all URLs public" },
  { label: "AI Agents in Production", value: 6, suffix: "", detail: "orchestrated pipelines" },
  { label: "Records Modeled", value: 5.6, suffix: "M+", detail: "largest single dataset", decimals: 1 },
  { label: "Internships Shipped", value: 3, suffix: "", detail: "NLP, ML, analytics" },
];

export type Project = {
  id: string;
  name: string;
  metric: string;
  description: string;
  highlights: string[];
  discipline: string[];
  stack: string[];
  url: string;
  github?: string;
  featured?: boolean;
  accent: string;
  screenshot?: string;
};

export const projects: Project[] = [
  {
    id: "diligence-ai",
    name: "Diligence AI",
    metric: "A first-pass 10-K analysis in minutes, with citations",
    description:
      "Autonomous due diligence for equity research. Upload a 10-K and six orchestrated agents extract financials, classify risks, cross-check earnings claims, and export an analyst-grade memo — every claim citation-backed.",
    highlights: [
      "Six-agent pipeline with A2A orchestration",
      "SEC filing delta + contradiction scanning",
      "RAG Q&A with cited sources, RAGAS-scored faithfulness",
    ],
    discipline: ["AI Engineering", "Finance"],
    stack: ["Next.js", "FastAPI", "Pydantic AI", "Pinecone", "SQLite"],
    url: "https://diligence-ai-nine.vercel.app",
    github: "https://github.com/satwikmed/diligence-ai",
    featured: true,
    accent: "#1e3a5f",
    screenshot: "/projects/diligence-ai-nine.png",
  },
  {
    id: "voiceiq",
    name: "VoiceIQ",
    metric: "An LLM judge you can trust — because it's calibrated",
    description:
      "Testing harness for AI voice agents. Simulates caller conversations across scenario types, scores them with an LLM judge, then validates the judge itself with Bland-Altman agreement analysis and correlation tracking.",
    highlights: [
      "Two-LLM conversation simulator, 10 scenario types",
      "Bland-Altman + Pearson/Spearman judge calibration",
      "70 unit tests, pre-seeded demo data",
    ],
    discipline: ["AI Engineering", "Evaluation"],
    stack: ["Python", "Streamlit", "Next.js", "Ollama"],
    url: "https://voice-agent.vercel.app",
    github: "https://github.com/satwikmed/voice-agent",
    featured: true,
    accent: "#4a1942",
    screenshot: "/projects/voiceiq.png",
  },
  {
    id: "silicon-sentinel",
    name: "SiliconSentinel",
    metric: "83% recall @ 80% precision on 30-day failure risk",
    description:
      "Fleet reliability intelligence for semiconductor hardware. Physics-grounded failure simulation across 12 global sites, survival models, XGBoost remaining-life scoring, and an LLM analyst that verifies every numeric claim it makes.",
    highlights: [
      "Arrhenius / Black / Peck / Coffin–Manson physics simulator",
      "Survival analysis + XGBoost remaining-useful-life scoring",
      "Ops console with decision queue and SHAP deep dives",
    ],
    discipline: ["ML", "AI Engineering"],
    stack: ["Python", "XGBoost", "lifelines", "Next.js", "Pydantic AI"],
    url: "https://silicon-sentinel.vercel.app",
    github: "https://github.com/satwikmed/silicon-sentinel",
    featured: true,
    accent: "#0b6e74",
    screenshot: "/projects/silicon-sentinel.png",
  },
  {
    id: "shapeshift",
    name: "ShapeShift",
    metric: "5.6M pitches, one locked causal study, an honest null",
    description:
      "Decision-grade evaluation of MLB pitch-design interventions. Outcome-blind change detection with thresholds frozen on 2024 data, a locked 2025 matched event study, and Keep / Reshape / De-emphasize recommendations for Baseball Ops.",
    highlights: [
      "5.6M+ Statcast pitches in a reproducible DuckDB warehouse",
      "Locked 2025 ATE +0.02 RV/100 — reported the null honestly",
      "Matched case study: Muñoz slider at −0.29 RV/100",
    ],
    discipline: ["Data Science", "Causal Inference"],
    stack: ["Python", "DuckDB", "scikit-learn", "Next.js"],
    url: "https://web-bice-eta-18.vercel.app",
    github: "https://github.com/satwikmed/shapeshift-baseball",
    featured: true,
    accent: "#8d1f2f",
    screenshot: "/projects/shapeshift.png",
  },
  {
    id: "nfl-draft",
    name: "NFL Draft Intelligence",
    metric: "25 years of Combine data, every prediction explained",
    description:
      "Draft prospect evaluation with position-specific XGBoost classifiers, SHAP explainability, a historical comp engine, and Kaplan-Meier career-longevity survival analysis across 2000–2025.",
    highlights: [
      "Position-specific XGBoost classifiers",
      "SHAP-driven prospect insights",
      "Career survival models + cosine-similarity comps",
    ],
    discipline: ["ML", "Sports Analytics"],
    stack: ["XGBoost", "SHAP", "lifelines", "Next.js"],
    url: "https://nfl-draft-intelligence.vercel.app",
    github: "https://github.com/satwikmed/nfl-draft-intelligence",
    accent: "#1a4d3e",
    screenshot: "/projects/nfl-draft.png",
  },
  {
    id: "nfl-edge",
    name: "NFL Edge",
    metric: "All 32 front offices, graded on three engines",
    description:
      "Front-office analytics OS grading play-calling predictability, roster value per cap dollar, and in-game decision quality across the entire NFL.",
    highlights: [
      "Three specialized analytics engines",
      "EPA-per-cap-dollar roster efficiency",
      "Interactive D3 dashboards",
    ],
    discipline: ["Analytics", "Full-stack"],
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
    period: "Feb 2024 – Apr 2024",
    logo: "/logos/boltzmann.png",
    product: "BoltBio",
    context:
      "Boltzmann Labs is a bioinformatics company working with protein, bulk RNA, and single-cell data — detecting cancerous cell signals early through rigorous multi-omic analysis.",
    phases: [
      {
        title: "Competitive research",
        description:
          "Mapped companies in the same space and studied how they structure omics analysis pipelines: what they automate, what they measure, and how they surface biological signal from raw data.",
      },
      {
        title: "Pipeline architecture",
        description:
          "Evaluated automation tools and stack options, then designed the pipeline architecture best suited for Boltzmann's differential-analysis and enrichment workflow.",
      },
      {
        title: "BoltBio backend",
        description:
          "Built the end-to-end single-cell analysis pipeline in Python: QC filtering, library-size normalization, differential analysis via t-test and p-values, and Gene Set Enrichment Analysis across 500K+ records.",
      },
      {
        title: "Deployment",
        description:
          "Containerized the workflow with Docker, wired S3 ingest/export via boto3, and generated Matplotlib/Seaborn visualizations with KMeans clustering uploaded back to the BoltBio S3 bucket.",
      },
    ],
    stack: ["Python", "Pandas", "SciPy", "scikit-learn", "Docker", "AWS S3", "GSEA"],
    github: "https://github.com/satwikmed/Boltzmann-Labs",
    bullets: [
      "Built a single-cell omics pipeline handling 500K+ records: QC, normalization, differential analysis, and GSEA",
      "Containerized with Docker and deployed with boto3 + AWS S3 integration behind the BoltBio product",
      "Turned competitive research into pipeline architecture the team shipped",
    ],
  },
  {
    id: "bostonlogix",
    company: "Bostonlogix",
    role: "Data & AI Intern",
    period: "Sept 2023 – Dec 2023",
    logo: "/logos/bostonlogix.png",
    product: "Hungry Jack's",
    context:
      "Bostonlogix supported Hungry Jack's, a major Australian burger chain. I worked across NLP extraction, database migration, executive KPI reporting, and API cleanup on a high-volume client data stack.",
    phases: [
      {
        title: "Recipe ingredient bot",
        description:
          "Built a bot that reads full recipe sheets and returns structured ingredient lists with quantities, shipped with both OpenAI and Azure OpenAI so the team could compare quality and cost.",
      },
      {
        title: "Database migration",
        description:
          "Wrote migration jobs in SQL Server and Python to move recipes, ingredients, menu items, and store sales into MongoDB — 1M+ records validated table by table.",
      },
      {
        title: "Bold BI KPI dashboards",
        description:
          "Connected Bold BI to MongoDB and built executive KPI dashboards; owned the data plumbing and metric definitions feeding shareholder reviews.",
      },
      {
        title: "API cleanup",
        description:
          "Audited the company's API surface — regression-tested 1,000+ endpoints in Postman against Swagger/OpenAPI specs and catalogued healthy endpoints for the team.",
      },
    ],
    stack: ["Python", "OpenAI", "Azure OpenAI", "SQL Server", "MongoDB", "Bold BI", "Postman"],
    github: "https://github.com/satwikmed/BostonLogix",
    bullets: [
      "Built a recipe-ingredient extraction bot with OpenAI and Azure OpenAI, automating a weekly manual review",
      "Migrated 1M+ records from SQL Server to MongoDB with table-by-table validation",
      "Regression-tested 1,000+ API endpoints via Postman and Swagger; built executive KPI dashboards in Bold BI",
    ],
  },
  {
    id: "ideabytes",
    company: "Ideabytes",
    role: "Data Analytics Intern",
    period: "Apr 2023 – Jun 2023",
    logo: "/logos/ideabytes.png",
    product: "Remote Monitoring System",
    context:
      "Ideabytes tracks telemetry from wireless data loggers and industrial sensors deployed across India — nested JSON arriving from live APIs, different devices at every site.",
    phases: [
      {
        title: "JSON API ingestion",
        description:
          "Connected to the company's JSON API and built the ingestion flow pulling unstructured IoT device data into Power BI.",
      },
      {
        title: "Dashboard deployment",
        description:
          "Built the Remote Monitoring System dashboard in Power BI, deployed it as the live frontend on the company website, and presented it directly to the CEO.",
      },
      {
        title: "Forecasting",
        description:
          "Built linear regression, then ARIMA models forecasting device performance 12 months ahead — roughly 92–95% accuracy on validation — so maintenance could be scheduled before failures.",
      },
    ],
    stack: ["Python", "Power BI", "Pandas", "statsmodels", "ARIMA", "JSON APIs"],
    github: "https://github.com/satwikmed/Ideabytes",
    bullets: [
      "Ingested 500K+ JSON sensor datapoints from live IoT APIs into Power BI",
      "Deployed the Remote Monitoring System dashboard on the company website; presented to the CEO",
      "ARIMA forecasting at 92–95% validation accuracy for proactive device maintenance",
    ],
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "skills-agents",
    title: "LLM & Agents",
    blurb: "Orchestration, retrieval, and evaluation — the stack behind Diligence AI and VoiceIQ.",
    skills: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "OpenAI Agents SDK",
      "Pydantic AI",
      "Pinecone",
      "RAG",
      "RAGAS",
      "LLM-as-judge",
    ],
  },
  {
    id: "skills-ml",
    title: "ML & Data Science",
    blurb: "Forecasting, explainability, survival analysis — models that survive real data.",
    skills: [
      "XGBoost",
      "SHAP",
      "scikit-learn",
      "lifelines",
      "statsmodels",
      "Pandas",
      "NumPy",
      "BERT",
    ],
  },
  {
    id: "skills-infra",
    title: "Engineering & Infra",
    blurb: "The layer that turns notebooks into things people can actually use.",
    skills: [
      "Python",
      "SQL",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "AWS S3",
      "Azure",
      "DuckDB",
      "PostgreSQL",
    ],
  },
  {
    id: "skills-viz",
    title: "Analytics & BI",
    blurb: "From raw records to a dashboard an executive actually reads.",
    skills: ["Power BI", "Tableau", "Bold BI", "Streamlit", "Plotly", "D3"],
  },
];

export const education = {
  school: "University of Texas at Dallas",
  degree: "M.S. Business Analytics",
  period: "May 2026",
  location: "Richardson, TX",
  prior: {
    school: "GITAM University",
    degree: "B.Tech Computer Science (Data Science)",
    period: "May 2024",
  },
};

export const recruiterKit = {
  heading: "The 30-second version",
  forwardBlurb:
    "Satwik Medipalli — AI engineer (M.S. Business Analytics, UT Dallas 2026) with 6 live AI/analytics products and 3 shipped internships. Strong in multi-agent systems, LLM evaluation, and ML pipelines. Open to AI/ML engineering and data roles. Every project has a public URL: satwikmedipalli.dev",
  facts: [
    { label: "Role targets", value: "AI Engineer · LLM/Agents · Data Science" },
    { label: "Location", value: "Richardson, TX (Dallas metro)" },
    { label: "Start date", value: "Immediately" },
    { label: "Proof", value: "6 live products, all public URLs" },
    { label: "Education", value: "M.S. Business Analytics, UT Dallas, 2026" },
    { label: "Response time", value: "Same day" },
  ],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Recruiters", href: "#recruiters" },
  { label: "Contact", href: "#contact" },
];
