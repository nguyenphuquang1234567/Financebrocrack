'use client';

import { motion } from 'motion/react';
import React from 'react';

export default function FadeIn({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex-grow flex flex-col items-center"
        >
            {children}
        </motion.div>
    );
}
