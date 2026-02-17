'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
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
    return (
        <Link href={`/${slug}`} className="block group">
            <motion.div
                className="surface p-8 h-full rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 relative overflow-hidden group-hover:shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                {/* Subtle Gradient Background - Gold Hint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 via-transparent to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10 space-y-5">
                    <div className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {/* Render Lucide Icon */}
                        {icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors font-display tracking-tight">
                        {title}
                    </h3>

                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm font-light">
                        {description}
                    </p>

                    <div className="pt-4 flex items-center text-[var(--color-primary)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        START TRAINING <span className="ml-2">→</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
