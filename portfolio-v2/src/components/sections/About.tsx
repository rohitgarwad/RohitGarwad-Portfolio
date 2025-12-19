"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { siteConfig, skillTags } from "@/data/config";
import SkillCloud from "@/components/ui/SkillCloud";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-6">
                        {siteConfig.description}
                    </p>

                    {/* Resume Download Button */}
                    <a
                        href={siteConfig.resumeUrl}
                        download
                        className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </motion.div>

                {/* Skills with tech-tag class */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-xl md:text-2xl font-bold mb-8 text-[var(--accent)]">
                        Technologies I Work With
                    </h3>

                    <SkillCloud skills={skillTags} />
                </motion.div>
            </div>
        </section>
    );
}
