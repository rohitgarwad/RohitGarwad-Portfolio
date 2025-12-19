"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo - RG in gradient box like original */}
                <Link href="#home">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 rounded gradient-bg flex items-center justify-center font-bold text-white text-lg">
                            RG
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Link
                                href={link.href}
                                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}

                    {/* Theme Toggle Button */}
                    <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-[var(--card)] hover:bg-[var(--card-hover)] transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} className="text-[var(--primary)]" />
                        ) : (
                            <Moon size={18} className="text-[var(--primary)]" />
                        )}
                    </motion.button>
                </nav>

                {/* Mobile: Theme Toggle + Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-[var(--card)] hover:bg-[var(--card-hover)] transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} className="text-[var(--primary)]" />
                        ) : (
                            <Moon size={18} className="text-[var(--primary)]" />
                        )}
                    </button>
                    <button
                        className="p-2 text-[var(--foreground)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--muted)] hover:text-[var(--foreground)] px-4 py-3 rounded-lg transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
