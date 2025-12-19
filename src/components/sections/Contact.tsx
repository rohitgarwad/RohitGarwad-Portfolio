"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

// Formspree form endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdrldlo";

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
    { name: "GitHub", icon: Github, href: siteConfig.social.github },
    { name: "Twitter", icon: Twitter, href: siteConfig.social.twitter },
    { name: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || "Failed to send message");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header like original */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto">
                        Let&apos;s work together on your next project.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                                <Mail size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[var(--muted)] text-sm">Email</p>
                                <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-[var(--primary)]">
                                    {siteConfig.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                                <Phone size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[var(--muted)] text-sm">Phone</p>
                                <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-[var(--primary)]">
                                    {siteConfig.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                                <MapPin size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[var(--muted)] text-sm">Location</p>
                                <p className="text-white">{siteConfig.location}</p>
                            </div>
                        </div>



                        {/* Social Links */}
                        <div className="pt-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
                                </span>
                                <p className="text-[var(--muted)] text-sm font-medium">Connect with me</p>
                            </div>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <Magnetic key={social.name}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                    >
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-sm text-[var(--muted)] ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                placeholder="John Doe"
                                required
                                className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[var(--accent)] focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] focus:outline-none transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="text-sm text-[var(--muted)] ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                placeholder="john@example.com"
                                required
                                className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[var(--accent)] focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] focus:outline-none transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-sm text-[var(--muted)] ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                placeholder="Tell me about your project..."
                                rows={5}
                                required
                                className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-[var(--accent)] focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] focus:outline-none transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Error Message */}
                        {submitStatus === "error" && (
                            <div className="flex items-center gap-2 text-red-500 text-sm">
                                <AlertCircle size={16} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${submitStatus === "success"
                                ? "bg-green-500 text-white"
                                : submitStatus === "error"
                                    ? "bg-red-500 text-white"
                                    : "gradient-bg text-white hover:opacity-90"
                                }`}
                        >
                            {isSubmitting ? (
                                <><Loader2 size={18} className="animate-spin" /> Sending...</>
                            ) : submitStatus === "success" ? (
                                <><CheckCircle size={18} /> Message Sent!</>
                            ) : submitStatus === "error" ? (
                                <><AlertCircle size={18} /> Failed - Try Again</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
