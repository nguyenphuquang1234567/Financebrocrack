'use client';

import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import React from 'react';

interface CategoryCardProps {
    title: string;
    slug: string;
    icon: React.ReactNode;
    description: string;
    index?: number;
}

export default function CategoryCard({
    title,
    slug,
    icon,
    description,
    index = 0
}: CategoryCardProps) {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "circOut"
            }
        }
    };

    return (
        <Link href={`/${slug}`} className="block group w-full h-full">
            <motion.div
                variants={cardVariants}
                whileHover={{
                    y: -12,
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="surface p-8 h-full rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-500 relative overflow-hidden group-hover:shadow-glow flex flex-col items-center text-center"
            >
                {/* Refined Gradient Background - Gold Hint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 via-transparent to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/10 group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                {/* Glow Overlay Effect */}
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),var(--color-primary-glow),transparent)]" />

                <div className="relative z-10 space-y-6 flex-grow flex flex-col items-center">
                    <div className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-500 transform group-hover:scale-110 inline-block">
                        {/* Render Lucide Icon */}
                        {icon}
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors font-display tracking-tight">
                            {title}
                        </h3>

                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm font-light">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="relative z-10 pt-8 flex items-center text-[var(--color-primary)] text-xs font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[10px] group-hover:translate-y-0">
                    START TRAINING <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </motion.div>
        </Link>
    );
}
