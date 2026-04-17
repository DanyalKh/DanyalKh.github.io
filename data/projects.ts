export type Project = {
  id: number;
  title: string;
  badge: string;
  icon: string;
  borderColor: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  highlights: string[];
  stack: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  architecturePlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "FastAPI Groq LLM Challenge Backend + LangGraph Agent UI",
    badge: "FLAGSHIP",
    icon: "🚀",
    borderColor: "#7C3AED",
    description: "FastAPI + LangGraph system that exposes stateless/stateful Groq chat, compliance analysis, and agentic workflows with a vanilla JS interface for non-technical users.",
    problem: "Challenge workflows needed one backend to serve chat, analysis, agent, and memory endpoints for both technical and non-technical users.",
    solution:
      "Built a FastAPI backend with dedicated ask/chat/analyze/agent APIs, LCEL-style LangChain services, and a LangGraph ReAct agent wired to mock-service tools. Added a simple vanilla JS UI to run ask/chat/analyze/agent flows and clear conversation memory.",
    outcome:
      "Delivered a containerized AI backend with documented endpoints and runnable local stack, enabling rapid evaluation of Groq-powered LLM pipelines and agent behavior in one system.",
    highlights: [
      "FastAPI backend service with health, ask, chat, analyze, and agent endpoints",
      "Stateless and stateful Groq chat flows including POST /api/chat, POST /api/chain/chat, and DELETE /api/chain/chat/{session_id}",
      "Compliance analysis endpoint via POST /api/analyze plus additional ask route POST /api/ai/ask",
      "LangGraph ReAct agent orchestration with tools and LangChain LCEL-style services",
      "Core services mapped to backend/app/services/llm_service.py, chain_service.py, and agent_service.py",
      "Docker Compose run path with frontend at http://localhost and backend docs at http://localhost:8000/docs",
    ],
    stack: ["FastAPI", "Python", "Groq", "langchain-groq", "LangChain (LCEL)", "LangGraph", "Vanilla JS", "Docker Compose"],
    featured: true,
    architecturePlaceholder: true,
  },
  {
    id: 2,
    title: "Agentic RAG System",
    badge: "FEATURED",
    icon: "🧠",
    borderColor: "#3B82F6",
    description: "Production-grade agentic RAG system with multi-step reasoning, tool invocation, and automated validation against structured ERP data.",
    problem: "Business users needed trustworthy AI answers for complex ERP questions without hallucinations.",
    solution:
      "Implemented an agent-based retrieval pipeline using LangChain + Gemini with vector search, tool calling, and automated output validation against structured ERP records before response delivery.",
    outcome:
      "Improved answer reliability for enterprise queries through retrieval grounding, validation checks, and reproducible MLflow-tracked deployment workflows.",
    highlights: [
      "Full ML lifecycle ownership — design, prototyping, evaluation, deployment, and monitoring",
      "Multi-step reasoning with tool invocation for complex business queries",
      "Automated validation of AI outputs against structured ERP business data",
      "LangChain orchestration with Gemini API for high-quality generation",
      "Vector DB integration for semantic retrieval across ERP documents and records",
      "MLflow experiment tracking and model registry for reproducible deployments",
    ],
    stack: ["LangChain", "Gemini API", "Python", "RAG", "LLMs", "Vector DB", "MLflow"],
    featured: true,
    architecturePlaceholder: true,
  },
  {
    id: 3,
    title: "WorkFlex Bridge Agent",
    badge: "FEATURED",
    icon: "🤖",
    borderColor: "#8B5CF6",
    description: "AI-native automation agent that transforms Microsoft Teams messages into structured Jira tickets with CRM-aware prioritization.",
    problem: "Teams-based support requests were unstructured and produced duplicate, low-quality Jira intake.",
    solution:
      "Built an LLM pipeline that extracts structured request fields, enriches requests with HubSpot ARR data, and runs LLM deduplication against Jira backlog before create/update actions.",
    outcome:
      "Automated ticket triage and prioritization with confidence scoring, reducing duplicate backlog noise and improving request quality for engineering teams.",
    highlights: [
      "Claude 3.5 Sonnet extracts structured data (requester, client, request) from unstructured Teams messages with confidence scoring",
      "HubSpot CRM lookup enriches each request with client ARR for automatic priority assignment (e.g. $520K → High)",
      "LLM-powered deduplication compares against existing Jira backlog — creates new ticket or updates existing one",
      "Real-time React + TypeScript dashboard with color-coded priority indicators and confidence scores",
      "Fully containerized with Docker Compose — mock APIs for Jira, HubSpot, and Teams included",
    ],
    stack: ["FastAPI", "Claude 3.5 Sonnet", "React", "TypeScript", "Docker", "HubSpot API", "Jira API", "Teams API"],
    featured: true,
    architecturePlaceholder: true,
  },
  {
    id: 4,
    title: "ML Forecasting & Optimization",
    badge: "FEATURED",
    icon: "📈",
    borderColor: "#0EA5E9",
    description: "End-to-end ML pipelines for demand forecasting and inventory optimization with validation gates and production monitoring.",
    problem: "Operations teams required scalable forecasting and optimization models with reliable production monitoring.",
    solution:
      "Developed forecasting and optimization pipelines from ingestion to deployment, orchestrated with Airflow and Spark, with evaluation checkpoints and MLflow experiment tracking for controlled model iteration.",
    outcome:
      "Reduced manual reporting effort by 40%+ and improved operational planning through automated, monitored forecasting workflows.",
    highlights: [
      "End-to-end ML pipeline covering data ingestion, preprocessing, feature engineering, training, evaluation, and deployment",
      "Demand forecasting models directly supporting operational business teams",
      "Inventory optimization with constraint validation and interpretable predictions",
      "Automated performance monitoring and validation gates before production promotion",
      "Airflow-orchestrated pipelines reduced manual reporting time by 40%+",
      "Apache Spark for large-scale data processing across distributed datasets",
    ],
    stack: ["Scikit-learn", "TensorFlow", "Pandas", "Airflow", "Apache Spark", "MLflow"],
    featured: true,
    architecturePlaceholder: true,
  },
  {
    id: 5,
    title: "AI Inayah Supply Chain Integration",
    badge: "REAL PROJECT",
    icon: "🔗",
    borderColor: "#10B981",
    description: "End-to-end supply chain integration connecting AI Inayah ERP with Tatmeen, distributors, customer POS, and third-party vendors.",
    problem: "Pharmaceutical operations needed reliable UAE-compliant track-and-trace reporting across multiple systems.",
    solution:
      "Integrated ERP and partner systems using FastAPI services, strict Pydantic schemas, and Redis-backed async processing to submit GS1 EPCIS dispatch and receipt events to Tatmeen workflows.",
    outcome:
      "Enabled automated compliance-grade event reporting with high-throughput, validated integrations across supply chain actors.",
    highlights: [
      "Connected AI Inayah ERP with Tatmeen — UAE national pharmaceutical track & trace platform",
      "Integrated distributor, Customer POS, and 3rd-party vendor flows end-to-end",
      "Full GS1 EPCIS compliance reporting for all dispatch and receipt events",
      "Redis-backed async task queues for high-throughput event processing",
      "Pydantic models for strict data validation across all integration boundaries",
    ],
    stack: ["FastAPI", "ERPNext", "Tatmeen", "Redis", "Pydantic", "GS1 EPCIS"],
    featured: false,
    architecturePlaceholder: true,
  },
  {
    id: 6,
    title: "FastAPI Microservices Platform",
    badge: "REAL PROJECT",
    icon: "⚙️",
    borderColor: "#F59E0B",
    description: "Distributed FastAPI microservices platform for ERP sync, POS ingestion, resilient sales ordering, and parallel compliance events.",
    problem: "Core order and reporting workflows required low-latency reads and fault-tolerant asynchronous processing.",
    solution:
      "Implemented separate services for ERP→Redis sync, async POS APIs, idempotent sales-order processing with retry logic, and parallel Tatmeen event publishing for GS1 EPCIS dispatch reporting.",
    outcome:
      "Improved service reliability and throughput for order processing while maintaining regulatory reporting continuity.",
    highlights: [
      "Data Sync Service syncs ERP data to Redis cache every 45 minutes for low-latency reads",
      "Async Customer POS API handles high-concurrency order submission with non-blocking I/O",
      "Sales Order Service implements retry logic and idempotency for reliable order processing",
      "Parallel Tatmeen Reporter fires GS1 EPCIS dispatch events for regulatory compliance",
      "All services containerized with Docker and orchestrated for independent deployment",
    ],
    stack: ["FastAPI", "Redis", "Pydantic", "GS1 EPCIS", "Asyncio", "Docker"],
    featured: false,
    architecturePlaceholder: true,
  },
  {
    id: 7,
    title: "ERP & VAT Systems (Dubai)",
    badge: "REAL PROJECT",
    icon: "🏢",
    borderColor: "#F97316",
    description: "Delivered MyApt, FAS, and VPS 2.0 ERP/VAT systems for 2,000+ customers in Dubai with measurable quality and delivery outcomes.",
    problem: "Regional businesses needed VAT-compliant ERP platforms delivered reliably across multiple product lines.",
    solution:
      "Built and shipped ERP/VAT systems on Python, Frappe, and ERPNext, including UAE workflow customization plus testing and QA automation to reduce release defects.",
    outcome:
      "Achieved 100% on-time delivery and reduced production defects by 30% while supporting 2,000+ customers.",
    highlights: [
      "Developed and launched MyApt, FAS, and VPS 2.0 ERP/VAT systems using Python and Frappe",
      "Supported 2,000+ customers across Dubai with full VAT compliance",
      "Implemented automated testing and QA pipelines reducing production defects by 30%",
      "Applied Agile delivery practices achieving 100% on-time delivery across all projects",
      "ERPNext customizations for UAE-specific business workflows and VAT reporting",
    ],
    stack: ["Python", "Frappe", "ERPNext", "PHP", "MariaDB", "Agile"],
    featured: false,
    architecturePlaceholder: true,
  },
  {
    id: 8,
    title: "Bolta Parcha — Medical Prescription System",
    badge: "REAL PROJECT",
    icon: "🩺",
    borderColor: "#EF4444",
    description: "Speech-enabled prescription system that converted written prescriptions into accessible call-based patient guidance.",
    problem: "Hospitals needed to reduce prescription-entry errors and improve accessibility for patients facing literacy barriers.",
    solution:
      "Built a PHP/MySQL/C++ system that digitized handwritten prescriptions with image processing and delivered prescription instructions through automated voice call workflows.",
    outcome:
      "Reduced manual prescription handling errors and expanded patient accessibility through voice-first delivery.",
    highlights: [
      "Patients listen to prescriptions via automated phone calls — reducing literacy barriers",
      "Image processing pipeline digitizes handwritten prescriptions from neurology and cardiology",
      "Reduced manual prescription entry errors significantly across departments",
      "Built with PHP, MySQL, and C++ for performance-critical audio processing",
      "Deployed at Aga Khan Development Network (AKDN), Karachi",
    ],
    stack: ["PHP", "MySQL", "C++", "Image Processing", "Speech Synthesis"],
    featured: false,
    architecturePlaceholder: true,
  },
];
