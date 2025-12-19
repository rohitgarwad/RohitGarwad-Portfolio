"use client";

import { motion } from "framer-motion";

interface SectionConnectorProps {
    position?: "start" | "middle" | "end";
    branchDirection?: "left" | "right" | "both" | "none";
    lineColor?: string;
}

export default function SectionConnector({
    position = "middle",
    branchDirection = "none",
    lineColor = "var(--accent)"
}: SectionConnectorProps) {
    return (
        <div className="relative w-full hidden md:flex justify-center">
            {/* Vertical line segment */}
            <motion.div
                className="w-0.5 h-24"
                style={{ backgroundColor: lineColor }}
                initial={{ scaleY: 0, transformOrigin: position === "start" ? "top" : "bottom" }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            />

            {/* Branch connector - Left */}
            {(branchDirection === "left" || branchDirection === "both") && (
                <motion.div
                    className="absolute top-1/2 right-1/2 h-0.5 w-16 mr-1"
                    style={{ backgroundColor: lineColor }}
                    initial={{ scaleX: 0, transformOrigin: "right" }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                />
            )}

            {/* Branch connector - Right */}
            {(branchDirection === "right" || branchDirection === "both") && (
                <motion.div
                    className="absolute top-1/2 left-1/2 h-0.5 w-16 ml-1"
                    style={{ backgroundColor: lineColor }}
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                />
            )}

            {/* Center dot at junction */}
            {branchDirection !== "none" && (
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
                    style={{ borderColor: lineColor, backgroundColor: "var(--background)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                />
            )}
        </div>
    );
}
