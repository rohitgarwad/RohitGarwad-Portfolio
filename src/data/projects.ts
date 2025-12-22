export interface Project {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl: string;
    color: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "app-builder",
        title: "AI-Driven Project Builder",
        shortTitle: "App-Builder",
        description:
            "A modular, dependency-aware, parallel-executing project generator powered by LLMs. Takes natural-language prompts and orchestrates AI agents (Planner → Architect → Coder) to write code file-by-file. Features Web UI, multi-LLM support (Groq, OpenAI, Gemini), project templates, and incremental builds.",
        tags: [
            "python",
            "langchain",
            "langgraph",
            "multi-agent",
            "llm",
            "genai",
            "fastapi",
            "react",
        ],
        image: "/images/project-display-images/app-builder-display.png",
        githubUrl: "https://github.com/rohitgarwad/App-Builder",
        color: "#8B5CF6",
        featured: true,
    },
    {
        id: "cold-email-generator",
        title: "Cold Email Generator",
        shortTitle: "Cold Email Generator",
        description:
            "AI tool for generating personalized cold emails for services companies. Extracts job listings from company career pages and generates customized emails with relevant portfolio links from a vector database.",
        tags: [
            "python",
            "groq",
            "langchain",
            "streamlit",
            "vector-db",
            "rag",
            "genai",
        ],
        image: "/images/project-display-images/cold-mail-generator-display.png",
        githubUrl: "https://github.com/rohitgarwad/Cold-Email-Generator",
        color: "#10B981",
        featured: true,
    },
    {
        id: "linkedin-post-generator",
        title: "LinkedIn Post Generator",
        shortTitle: "LinkedIn Post Generator",
        description:
            "GenAI application that generates LinkedIn posts using few-shot learning. Collects posts, extracts Topic, Language, Length, and uses past posts for style guidance to generate new content.",
        tags: [
            "python",
            "groq",
            "langchain",
            "streamlit",
            "few-shot-learning",
            "genai",
        ],
        image: "/images/project-display-images/linkedin-post-generator-display.png",
        githubUrl: "https://github.com/rohitgarwad/LinkedIn-Post-Generator",
        color: "#0A66C2",
        featured: true,
    },
    {
        id: "pms",
        title: "Project Management System",
        shortTitle: "Project Management System",
        description:
            "A PG level final year college project. Solely built the complete site from scratch. Helpful for streamlining and managing software projects with real-time updates.",
        tags: [
            "react.js",
            "spring boot",
            "node.js",
            "mysql",
            "tailwind css",
            "shadcn ui",
            "websockets",
            "jwt",
            "rest api",
        ],
        image: "/images/project-display-images/project-management-system-display.png",
        liveUrl: "https://pms-client-project.vercel.app",
        githubUrl: "https://github.com/rohitgarwad",
        color: "#fc815c",
        featured: true,
    },
    {
        id: "ai-image-analysis",
        title: "AI-Powered Image Analysis",
        shortTitle: "AI Image Analysis",
        description:
            "An application that leverages AI for intelligent image analysis and processing capabilities.",
        tags: ["python", "ai", "image-analysis", "computer-vision"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/AI-Powered-Image-Analysis-Application",
        color: "#F59E0B",
    },
    {
        id: "crewai-agenticai",
        title: "CrewAI Agentic AI",
        shortTitle: "CrewAI Project",
        description:
            "Building agentic AI applications using CrewAI framework for multi-agent collaboration and task automation.",
        tags: ["python", "crewai", "multi-agent", "llm", "automation"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/crewai-agenticai",
        color: "#EC4899",
    },
    {
        id: "log-classification",
        title: "Log Classification System",
        shortTitle: "Log Classification",
        description:
            "Hybrid log classification system combining Regex, Sentence Transformers + Logistic Regression, and LLMs. Handles varying pattern complexities with FastAPI backend for real-time classification.",
        tags: ["python", "fastapi", "sentence-transformers", "logistic-regression", "llm", "ml"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/Logs-Classification",
        color: "#6366F1",
    },
    {
        id: "atliq-tshirts",
        title: "AtliQ Tees: Database Q&A",
        shortTitle: "Database Q&A",
        description:
            "LLM-powered system that talks to MySQL database. Users ask questions in natural language, and the system converts them to SQL queries using Google Palm, LangChain, and few-shot learning.",
        tags: ["python", "langchain", "google-palm", "mysql", "streamlit", "chromadb", "few-shot"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/langchain",
        color: "#14B8A6",
    },
    {
        id: "news-research-tool",
        title: "RockyBot: News Research Tool",
        shortTitle: "News Research Tool",
        description:
            "News research tool for stock market insights. Load article URLs, process with LangChain, build FAISS vector index, and query with ChatGPT to get answers with source citations.",
        tags: ["python", "langchain", "openai", "faiss", "streamlit", "rag", "embeddings"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/langchain",
        color: "#F97316",
    },
    {
        id: "food-chatbot",
        title: "Food Ordering Chatbot",
        shortTitle: "Food Chatbot",
        description:
            "End-to-end food ordering chatbot using Dialogflow for NLU, FastAPI backend, and MySQL database. Handles order placement, tracking, and inventory management through natural conversation.",
        tags: ["python", "dialogflow", "fastapi", "mysql", "nlp", "chatbot"],
        image: "/images/project-display-images/project-management-system-display.png",
        githubUrl: "https://github.com/rohitgarwad/Food-Chatbot",
        color: "#EF4444",
    },
    {
        id: "diwali-greetings",
        title: "Diwali Greetings",
        shortTitle: "Diwali Greetings",
        description:
            "Personal project. Built for fun and sharing love. An auspicious Diwali greeting web page with beautiful animations.",
        tags: ["html", "css", "javascript", "figma"],
        image: "/images/project-display-images/diwali-greetings-display.png",
        liveUrl: "https://rg-diwali-greetings.netlify.app/",
        githubUrl: "https://github.com/rohitgarwad",
        color: "#ffe578",
    },
];
