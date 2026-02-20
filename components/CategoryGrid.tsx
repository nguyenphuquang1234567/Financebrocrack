'use client';

import { motion } from 'motion/react';
import CategoryCard from './CategoryCard';
import React from 'react';

interface CategoryGridProps {
    categories: {
        title: string;
        slug: string;
        description: string;
        icon: React.ReactNode;
    }[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 w-full max-w-6xl place-items-center md:place-items-stretch"
        >
            {categories.map((category, index) => (
                <CategoryCard
                    key={category.slug}
                    title={category.title}
                    slug={category.slug}
                    icon={category.icon}
                    description={category.description}
                    index={index}
                />
            ))}
        </motion.div>
    );
}
