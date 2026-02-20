'use client';

import { motion } from 'motion/react';

interface HeroProps {
    title?: string;
    subtitle?: string;
}

export default function Hero({
    title = "Financebrocrack",
    subtitle = "Master Your Finance Interviews"
}: HeroProps) {
    return (
        <div className="w-full flex flex-col items-center text-center space-y-8 py-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <h1 className="text-gradient text-6xl md:text-8xl font-bold tracking-tighter uppercase font-display mb-4">
                    {title}
                </h1>
                <div className="h-1 w-24 bg-[var(--color-primary)] rounded-full" />
            </motion.div>

            <motion.p
                className="text-xl md:text-2xl font-light max-w-2xl mx-auto tracking-wide text-[var(--color-text-secondary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                {subtitle}
            </motion.p>
        </div>
    );
}
