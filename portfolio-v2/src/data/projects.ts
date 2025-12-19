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
        id: "coder-buddy",
        title: "Coder Buddy (App-Builder)",
        shortTitle: "Coder Buddy",
        description:
            "An AI-powered coding assistant with multi-agent architecture. Features Planner Agent (analyzes requests, generates project plans), Architect Agent (breaks down into engineering tasks), and Coder Agent (implements tasks, writes files).",
        tags: [
            "python",
            "langchain",
            "langgraph",
            "multi-agent",
            "llm",
            "genai",
            "ai-agents",
        ],
        image: "/images/project-display-images/project-management-system-display.png",
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
        image: "/images/project-display-images/project-management-system-display.png",
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
        image: "/images/project-display-images/project-management-system-display.png",
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
    {
        id: "calorie-counter",
        title: "Calorie Counter",
        shortTitle: "Calorie Counter",
        description:
            "A freeCodeCamp course certification project. Built for practice and learning JavaScript through implementing mathematical logics.",
        tags: ["html", "css", "javascript"],
        image: "/images/project-display-images/calorie-counter-display.png",
        liveUrl: "https://rg-calorie-counter.netlify.app/",
        githubUrl: "https://github.com/rohitgarwad",
        color: "#7c7cff",
    },
];
