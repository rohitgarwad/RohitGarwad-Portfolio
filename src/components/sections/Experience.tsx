"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const iconMap = {
    work: Briefcase,
    education: GraduationCap,
    certification: Award,
};

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">My Journey</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto">
                        A timeline of my education and professional experience.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--primary)] to-[var(--accent)] md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const Icon = iconMap[exp.type];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] md:-translate-x-1/2 z-10 shadow-[0_0_20px_var(--accent)]" />

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                                            }`}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                                                <Icon size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-[var(--foreground)]">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-[var(--accent)] font-medium text-sm">
                                                    {exp.organization}
                                                </p>
                                                <p className="text-[var(--muted)] text-xs mt-1">
                                                    {exp.startDate} - {exp.endDate}
                                                    {exp.location && ` • ${exp.location}`}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        {exp.achievements && (
                                            <ul className="space-y-1 mb-4">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-[var(--muted)] flex items-start gap-2"
                                                    >
                                                        <span className="text-[var(--accent)]">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Technologies */}
                                        {exp.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
