"use client";

import { motion } from "framer-motion";

interface TimelineProps {
    accentColor?: string;
}

export default function Timeline({ accentColor = "var(--accent)" }: TimelineProps) {
    return (
        <div className="fixed left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none z-0 hidden md:block">
            {/* Main vertical line - from Hero bottom to Contact top */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-0.5"
                style={{
                    backgroundColor: accentColor,
                    top: "100vh", // Start from bottom of first viewport (Hero)
                    bottom: "100vh", // End at top of last viewport (Contact)
                }}
                initial={{ scaleY: 0, transformOrigin: "top" }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
        </div>
    );
}
