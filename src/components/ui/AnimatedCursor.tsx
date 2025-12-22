"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on desktop (non-touch devices)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handlePointerOver = () => setIsPointer(true);
        const handlePointerOut = () => setIsPointer(false);

        window.addEventListener("mousemove", moveCursor);

        // Detect clickable elements
        const clickables = document.querySelectorAll(
            "a, button, [role='button'], input, textarea, select, [onclick]"
        );
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handlePointerOver);
            el.addEventListener("mouseleave", handlePointerOut);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handlePointerOver);
                el.removeEventListener("mouseleave", handlePointerOut);
            });
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-[var(--accent)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Cursor Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border-2 border-[var(--accent)] pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isPointer ? 50 : 30,
                    height: isPointer ? 50 : 30,
                    opacity: isPointer ? 0.5 : 0.3,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
