"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface HolographicCardProps {
    children: ReactNode;
    color?: string;
}

export default function HolographicCard({ children, color = "var(--accent)" }: HolographicCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full group"
        >
            {/* Back Glow - Ambient */}
            <div
                className="absolute inset-0 blur-[60px] opacity-25 group-hover:opacity-50 transition-opacity duration-500 -z-10"
                style={{ backgroundColor: color }}
            />

            {/* Main Card Content - Clean, no background */}
            <div
                className="relative rounded-xl overflow-hidden"
                style={{ transform: "translateZ(20px)" }}
            >
                {children}
            </div>
        </motion.div>
    );
}
