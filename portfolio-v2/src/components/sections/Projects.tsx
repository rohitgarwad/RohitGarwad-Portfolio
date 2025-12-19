"use client";

import HolographicCard from "@/components/ui/HolographicCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="py-20 md:py-28">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Latest Works</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto">
                        Explore my recent projects in AI/GenAI and Full Stack development.
                    </p>
                </motion.div>

                {/* Projects - 50/50 grid with center timeline like original */}
                <div className="relative">
                    {/* Center Timeline Line - stops at button top edge */}
                    <div
                        className="hidden md:block absolute left-1/2 -top-8 bottom-12 w-0.5 -translate-x-1/2"
                        style={{ backgroundColor: "var(--accent)" }}
                    />

                    <div className="space-y-20 md:space-y-28">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Center Dot on Timeline - positioned at vertical center */}
                                <div
                                    className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 -translate-y-1/2 z-10"
                                    style={{ borderColor: project.color, backgroundColor: "var(--background)" }}
                                />

                                {/* Horizontal Connector Line from dot to image center (goes behind image) */}
                                <div
                                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 ${index % 2 === 0 ? 'left-1/2 ml-2 w-[30%]' : 'right-1/2 mr-2 w-[30%]'
                                        }`}
                                    style={{ backgroundColor: project.color }}
                                />

                                {/* Grid Layout - 50/50 with gap, items-center for vertical alignment */}
                                <div className={`grid md:grid-cols-2 gap-8 md:gap-20 items-center ${index % 2 === 0 ? '' : 'md:[direction:rtl]'
                                    }`}>
                                    {/* Project Content - Text side */}
                                    <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} md:[direction:ltr]`}>
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-3"
                                            style={{ color: project.color }}
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="text-[var(--muted)] mb-4 leading-relaxed text-sm md:text-base">
                                            {project.description}
                                        </p>

                                        {/* Tags with # prefix */}
                                        <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            {project.tags.slice(0, 5).map((tag) => (
                                                <span key={tag} className="tech-tag">
                                                    #{tag.toLowerCase().replace(/\s+/g, '')}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Project */}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80 text-sm"
                                            style={{ color: project.color }}
                                        >
                                            (View Project) <ExternalLink size={14} />
                                        </a>
                                    </div>

                                    {/* Project Image - Visual side */}
                                    <div className={`${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} md:[direction:ltr]`}>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block group perspective-[1000px]"
                                            aria-label={`View ${project.title} on GitHub`}
                                        >
                                            <div className="aspect-video">
                                                <HolographicCard color={project.color}>
                                                    <div className="relative w-full h-full aspect-video">
                                                        <Image
                                                            src={project.image || "/images/project-placeholder.png"}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                            priority={index < 2}
                                                        />
                                                    </div>
                                                </HolographicCard>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More / Show Less Button - inside timeline container */}
                    {projects.length > 4 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-16 relative z-10"
                        >
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="gradient-bg inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                            >
                                {showAll ? (
                                    <>Show Less <ChevronDown size={18} className="rotate-180" /></>
                                ) : (
                                    <>Load More <ChevronDown size={18} /></>
                                )}
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
