export type CenterIcon = "ml" | "data" | "python" | "api" | "db" | "cloud";
export type SkillLevel = "EXPERT" | "ADVANCED";

type Skill = { name: string; level: number };
type SkillCard = {
  id: number;
  title: string;
  years: number;
  level: SkillLevel;
  icon: string;
  centerIcon: CenterIcon;
  description: string;
  tech: string[];
  color: string;
  skills: Skill[];
};

export const skillCards: SkillCard[] = [
  {
    id: 1,
    title: "ML & GenAI",
    years: 4,
    level: "EXPERT",
    icon: "🤖",
    centerIcon: "ml",
    description: "Designing and shipping AI assistants, RAG pipelines, and production-grade model workflows.",
    tech: ["LangChain", "RAG", "LLMs", "TensorFlow"],
    color: "#3B82F6",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "RAG", level: 85 },
      { name: "LLMs", level: 88 },
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-learn", level: 82 },
      { name: "Gemini API", level: 80 },
    ],
  },
  {
    id: 2,
    title: "Data Engineering",
    years: 5,
    level: "ADVANCED",
    icon: "📊",
    centerIcon: "data",
    description: "Building resilient ETL systems, orchestration pipelines, and analytics-ready data platforms.",
    tech: ["Airflow", "Spark", "ADF", "Pandas"],
    color: "#8B5CF6",
    skills: [
      { name: "Airflow", level: 88 },
      { name: "Apache Spark", level: 80 },
      { name: "Azure Data Factory", level: 78 },
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 88 },
      { name: "ETL", level: 85 },
    ],
  },
  {
    id: 3,
    title: "Python",
    years: 9,
    level: "EXPERT",
    icon: "🐍",
    centerIcon: "python",
    description: "Developing high-performance backend services, automation suites, and robust API architectures.",
    tech: ["FastAPI", "Django", "Asyncio", "Pydantic"],
    color: "#14B8A6",
    skills: [
      { name: "FastAPI", level: 95 },
      { name: "Django", level: 88 },
      { name: "Frappe", level: 85 },
      { name: "Asyncio", level: 80 },
      { name: "Pydantic", level: 88 },
      { name: "Celery", level: 78 },
    ],
  },
  {
    id: 4,
    title: "APIs & ERP",
    years: 9,
    level: "EXPERT",
    icon: "⚡",
    centerIcon: "api",
    description: "Connecting enterprise systems through scalable APIs, ERP workflows, and process automation.",
    tech: ["REST", "FastAPI", "ERPNext", "Frappe"],
    color: "#F59E0B",
    skills: [
      { name: "REST", level: 95 },
      { name: "FastAPI", level: 95 },
      { name: "ERPNext", level: 88 },
      { name: "Frappe", level: 85 },
      { name: "Inventory Automation", level: 82 },
      { name: "Order Mgmt", level: 80 },
    ],
  },
  {
    id: 5,
    title: "Databases",
    years: 9,
    level: "EXPERT",
    icon: "🗄️",
    centerIcon: "db",
    description: "Designing optimized schemas, tuning query performance, and ensuring reliable data operations.",
    tech: ["PostgreSQL", "MariaDB", "Redis", "MySQL"],
    color: "#EF4444",
    skills: [
      { name: "SQL", level: 95 },
      { name: "MariaDB", level: 88 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MySQL", level: 92 },
      { name: "Metabase", level: 75 },
    ],
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    years: 5,
    level: "ADVANCED",
    icon: "☁️",
    centerIcon: "cloud",
    description: "Deploying secure cloud workloads with containers, observability, and dependable delivery flows.",
    tech: ["Azure", "Docker", "CI/CD", "Datadog"],
    color: "#06B6D4",
    skills: [
      { name: "Azure", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Git", level: 95 },
      { name: "Datadog", level: 78 },
      { name: "CI/CD", level: 82 },
      { name: "SaaS", level: 80 },
    ],
  },
];
