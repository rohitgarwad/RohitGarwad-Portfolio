"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { useState, useEffect } from "react";

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
    { name: "GitHub", icon: Github, href: siteConfig.social.github },
    { name: "Twitter", icon: Twitter, href: siteConfig.social.twitter },
    { name: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
    { name: "Email", icon: Mail, href: `mailto:${siteConfig.email}` },
];

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Hi there, I'm";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col overflow-hidden"
        >
            {/* Additive: Dynamic Particles Background */}
            <ParticleBackground />

            {/* Gradient line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg z-10" />

            {/* Main Content - Centered */}
            <div className="flex-1 flex items-center justify-center z-10">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.span
                            className="text-[var(--accent)] text-lg sm:text-xl mb-4 font-mono h-8 block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {text}<span className="animate-pulse">_</span>
                        </motion.span>

                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="gradient-text">{siteConfig.name}</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl sm:text-2xl md:text-3xl text-[var(--muted)] mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {siteConfig.title}
                        </motion.p>

                        <motion.p
                            className="text-[var(--muted)] text-base sm:text-lg mb-8 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Building intelligent web applications and AI-powered solutions.
                        </motion.p>

                        {/* Mobile social links */}
                        <motion.div
                            className="flex lg:hidden justify-center gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors p-2"
                                    title={social.name}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Latest Works Button + Arrow - Additive: Magnetic Effect */}
            <motion.div
                className="flex flex-col items-center gap-3 pb-12 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <Magnetic>
                    <Link
                        href="#projects"
                        className="gradient-bg px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity block relative overflow-hidden group"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                        Latest Works
                    </Link>
                </Magnetic>

                <Link href="#projects" className="text-white hover:text-[var(--primary)] transition-colors mt-4">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                </Link>
            </motion.div>

            {/* Social Links - Vertical on right side (desktop only) - Additive: Magnetic */}
            <motion.div
                className="hidden lg:flex flex-col gap-6 fixed right-8 top-1/2 -translate-y-1/2 z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {socialLinks.map((social) => (
                    <Magnetic key={social.name}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors block p-2 hover:bg-white/5 rounded-full"
                            title={social.name}
                        >
                            <social.icon size={24} />
                        </a>
                    </Magnetic>
                ))}
            </motion.div>
        </section>
    );
}

