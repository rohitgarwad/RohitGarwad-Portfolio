export interface ExperienceItem {
    id: string;
    type: "work" | "education" | "certification";
    title: string;
    organization: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements?: string[];
    technologies?: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: "msc",
        type: "education",
        title: "Master of Science in Computer Science",
        organization: "A.V. College of Arts, Science & Commerce",
        location: "Hyderabad, India",
        startDate: "2022",
        endDate: "2024",
        description: "Post-graduate studies focusing on advanced computing concepts, AI/ML, and software engineering principles.",
        achievements: [
            "Developed Project Management System as final year project",
            "Specialized in AI and Full Stack Development",
        ],
    },
    {
        id: "edunet-intern",
        type: "work",
        title: "AI/ML & Data Analytics Intern",
        organization: "Edunet Foundation (IBM SkillsBuild)",
        location: "Remote",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        description: "Completed intensive internship focused on AI, Machine Learning, and Data Analytics with hands-on projects.",
        achievements: [
            "Built AI-powered image analysis application",
            "Gained expertise in Python, TensorFlow, and data visualization",
        ],
        technologies: ["Python", "TensorFlow", "Pandas", "Data Analytics"],
    },
    {
        id: "bsc",
        type: "education",
        title: "Bachelor of Science in MECs",
        organization: "Pragati Mahavidyalaya College",
        location: "Hyderabad, India",
        startDate: "2019",
        endDate: "2022",
        description: "Undergraduate studies in Mathematics, Electronics, and Computer Science.",
        achievements: [
            "Strong foundation in programming and mathematics",
            "Started learning web development and Java",
        ],
    },
];
