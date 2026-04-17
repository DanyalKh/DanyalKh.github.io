export type TechStackGroup = {
  title: string;
  items: string[];
};

export const techStackGroups: TechStackGroup[] = [
  {
    title: "LLMs & GenAI",
    items: ["OpenAI", "Gemini", "LangChain", "Agent Systems", "Prompt Engineering", "RAG"],
  },
  {
    title: "Machine Learning",
    items: ["Forecasting", "NLP", "Predictive Modeling", "Evaluation", "Model Monitoring"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Microservices", "REST APIs", "Async Workflows"],
  },
  {
    title: "Tools",
    items: ["Docker", "Docker Compose", "Git", "Vector DBs", "MLflow"],
  },
];
