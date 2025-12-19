"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";

interface SkillCloudProps {
    skills: string[];
}

export default function SkillCloud({ skills }: SkillCloudProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl mx-auto py-10">
            {skills.map((skill, index) => {
                // Random floating animation parameters
                const duration = 3 + Math.random() * 4; // 3-7s
                const yOffset = 10 + Math.random() * 20; // 10-30px
                const delay = Math.random() * 2;

                return (
                    <Magnetic key={skill}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
                                    rotate: [-2, 2, -2]
                                }}
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: delay
                                }}
                                className="tech-tag bg-white/5 border-white/10 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 text-[var(--muted)] hover:text-white transition-colors px-6 py-3 rounded-full text-base backdrop-blur-md shadow-lg cursor-pointer"
                            >
                                {skill}
                            </motion.div>
                        </motion.div>
                    </Magnetic>
                );
            })}
        </div>
    );
}
