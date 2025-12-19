"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react";
import { achievements } from "@/data/achievements";
import Image from "next/image";

export default function Achievements() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canNavigate, setCanNavigate] = useState(true);
    const navigationTimeout = useRef<NodeJS.Timeout | null>(null);

    // Navigation cooldown - prevents rapid clicks/swipes
    const navigate = (direction: 'next' | 'prev' | number) => {
        if (!canNavigate) return;

        setCanNavigate(false);

        // Clear any existing timeout
        if (navigationTimeout.current) {
            clearTimeout(navigationTimeout.current);
        }

        // Set new index
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % achievements.length);
        } else if (direction === 'prev') {
            setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
        } else {
            setCurrentIndex(direction);
        }

        // Reset mouse position
        x.set(0);
        y.set(0);

        // Re-enable navigation after animation
        navigationTimeout.current = setTimeout(() => {
            setCanNavigate(true);
        }, 400);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (navigationTimeout.current) {
                clearTimeout(navigationTimeout.current);
            }
        };
    }, []);

    // 3D Tilt Effect Values (only on desktop)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Safety check
    if (!achievements || achievements.length === 0) return null;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Swipe handler
    const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
        const swipeThreshold = 50;
        const velocityThreshold = 300;

        if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
            navigate('next');
        } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
            navigate('prev');
        }
    };

    const nextIndex = (currentIndex + 1) % achievements.length;

    return (
        <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
            {/* Dynamic Background Auras */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full blur-[120px]"
                    style={{ backgroundColor: "var(--accent)" }}
                />
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block p-3 rounded-2xl bg-[var(--accent)]/10 mb-6"
                    >
                        <Award size={40} className="text-[var(--accent)]" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Top Achievements</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto text-lg">
                        Showcasing key professional certifications and academic honors in my journey.
                    </p>
                </motion.div>

                {/* 3D Interactive Stack Carousel */}
                <div className="relative max-w-4xl mx-auto h-[450px] md:h-[550px] flex items-center justify-center">
                    {/* Navigation - Stylized floating buttons */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-2 md:-mx-20 z-30 pointer-events-none">
                        <button
                            onClick={() => navigate('prev')}
                            disabled={!canNavigate}
                            className={`p-3 md:p-4 rounded-full glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 pointer-events-auto shadow-xl group ${!canNavigate ? 'opacity-50' : ''}`}
                        >
                            <ChevronLeft size={24} className="md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('next')}
                            disabled={!canNavigate}
                            className={`p-3 md:p-4 rounded-full glass border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 pointer-events-auto shadow-xl group ${!canNavigate ? 'opacity-50' : ''}`}
                        >
                            <ChevronRight size={24} className="md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Stacked Cards */}
                    <div className="relative w-full max-w-[800px] h-full flex items-center justify-center perspective-[1000px]">

                        {/* Background card peek - Very subtle and transparent during transition */}
                        <motion.div
                            animate={{
                                opacity: !canNavigate ? 0 : 0.15,
                                x: !canNavigate ? 60 : 40,
                                scale: !canNavigate ? 0.8 : 0.9
                            }}
                            className="absolute inset-0 bg-[var(--card)] rounded-3xl border border-white/5 shadow-2xl overflow-hidden hidden md:block -z-10 blur-[2px]"
                        >
                            <div className="w-full h-full grayscale">
                                <Image
                                    src={achievements[nextIndex].image}
                                    alt="Next"
                                    fill
                                    className="object-cover opacity-20"
                                />
                            </div>
                        </motion.div>

                        <AnimatePresence mode="popLayout">
                            {/* Main Active 3D Card - with swipe support */}
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 200, rotateY: 15 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: -200, rotateY: -15 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={handleDragEnd}
                                whileDrag={{ cursor: "grabbing" }}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d",
                                }}
                                className="relative w-full md:aspect-[16/10] md:max-w-[750px] bg-[var(--card)] rounded-3xl p-4 md:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab group"
                            >
                                {/* Inner Card Border Glow */}
                                <div className={`absolute inset-0 rounded-3xl border-2 border-[var(--accent)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-10">
                                    {/* Certificate Image - Priority on mobile */}
                                    <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[var(--accent)]/50 transition-colors duration-500 min-h-[200px] md:min-h-0 md:flex-1">
                                        <Image
                                            src={achievements[currentIndex].image}
                                            alt={achievements[currentIndex].altText}
                                            fill
                                            className="object-contain p-2 md:p-4 drop-shadow-2xl"
                                            sizes="800px"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Info - Compact on mobile */}
                                    <div className="md:flex-[0.6] flex flex-col justify-center text-left">
                                        <div className="mb-4 md:mb-6">
                                            <span className="text-[var(--accent)] font-mono text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2 block">
                                                Certification
                                            </span>
                                            <h3 className="text-lg md:text-3xl font-bold text-[var(--foreground)] mb-1 md:mb-2 leading-tight">
                                                {achievements[currentIndex].title}
                                            </h3>
                                            <p className="text-sm md:text-xl text-[var(--muted)] font-medium">
                                                {achievements[currentIndex].issuer}
                                            </p>
                                        </div>

                                        <div className="hidden md:flex flex-wrap gap-2 mb-8">
                                            <span className="tech-tag border-[var(--accent)]/20 text-[var(--accent)]">
                                                Verified Credential
                                            </span>
                                        </div>

                                        <button className="hidden md:flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group/btn w-fit">
                                            <span className="font-semibold underline underline-offset-4 tracking-wide text-sm">VIEW DETAILED CERTIFICATE</span>
                                            <ExternalLink size={16} className="group-hover/btn:translate-y-[-2px] group-hover/btn:translate-x-[2px] transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Swipe hint on mobile */}
                                <div className="md:hidden text-center mt-3 text-xs text-[var(--muted)]">
                                    ← Swipe to navigate →
                                </div>

                                {/* 3D Shadow/Depth element on hover */}
                                <div
                                    className="absolute -inset-2 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Styled Progress/Pagination */}
                <div className="mt-12 md:mt-16 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[var(--muted)] font-mono text-sm">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <div className="h-[2px] w-32 md:w-64 bg-[var(--border)] relative overflow-hidden rounded-full">
                            <motion.div
                                initial={false}
                                animate={{ width: `${((currentIndex + 1) / achievements.length) * 100}%` }}
                                className="absolute inset-y-0 left-0 bg-[var(--accent)]"
                            />
                        </div>
                        <span className="text-[var(--muted)] font-mono text-sm">{String(achievements.length).padStart(2, '0')}</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {achievements.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => navigate(i)}
                                disabled={!canNavigate || i === currentIndex}
                                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-10 bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" : "w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]"
                                    }`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
