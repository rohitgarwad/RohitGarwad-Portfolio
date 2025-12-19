"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--background)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                {/* Glowing 404 */}
                <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)] mb-4">
                    Page Not Found
                </h2>
                <p className="text-[var(--muted)] mb-8 max-w-md">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="gradient-bg px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-lg font-semibold border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card)] transition-colors flex items-center gap-2 justify-center"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </motion.div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] -z-10" />
        </div>
    );
}
