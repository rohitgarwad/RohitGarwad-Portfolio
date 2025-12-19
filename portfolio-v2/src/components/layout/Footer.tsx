"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { Linkedin, Github, Twitter, Instagram, Mail, Heart } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
    { name: "GitHub", icon: Github, href: siteConfig.social.github },
    { name: "Twitter", icon: Twitter, href: siteConfig.social.twitter },
    { name: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
    { name: "Email", icon: Mail, href: `mailto:${siteConfig.email}` },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-[var(--card)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded gradient-bg flex items-center justify-center font-bold text-white text-sm">
                            RG
                        </div>
                        <span className="font-semibold">Rohit Garwad</span>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-[var(--muted)] text-sm">
                        <p className="flex items-center justify-center gap-1">
                            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Rohit
                        </p>
                        <p className="mt-1">© {currentYear} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
