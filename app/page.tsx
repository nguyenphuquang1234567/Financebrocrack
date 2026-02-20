import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FadeIn from '@/components/FadeIn';
import { APP_NAME } from '@/lib/constants';
import { TrendingUp, Briefcase, Calculator, HelpCircle } from 'lucide-react';
import { prisma } from '@/lib/db';
import React from 'react';

const ICON_MAP = {
  TrendingUp: <TrendingUp size={48} strokeWidth={1.5} />,
  Briefcase: <Briefcase size={48} strokeWidth={1.5} />,
  Calculator: <Calculator size={48} strokeWidth={1.5} />,
};

export default async function Home() {
  // Fetch from DB - Task 2.2
  const categoriesFromDb = await prisma.category.findMany({
    orderBy: { createdAt: 'asc' }
  });

  const CATEGORIES = categoriesFromDb.map(cat => ({
    title: cat.name,
    slug: cat.slug,
    description: cat.description,
    icon: ICON_MAP[cat.icon as keyof typeof ICON_MAP] || <HelpCircle size={48} strokeWidth={1.5} />
  }));

  return (
    <main className="min-h-screen w-full relative overflow-hidden flex flex-col items-center">
      {/* Abstract Background - Gold/Navy */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-[var(--color-primary)] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-[var(--color-surface-elevated)] opacity-50 blur-[100px]" />
      </div>

      <FadeIn>
        <div className="w-full max-w-6xl mx-auto px-6 flex-grow flex flex-col items-center justify-center gap-16">
          {/* Hero Section */}
          <Hero
            title={APP_NAME}
            subtitle="ELITE PREPARATION FOR ELITE CAREERS"
          />

          {/* Category Grid - Task 2.3 (Staggered Animation) */}
          <CategoryGrid categories={CATEGORIES} />
        </div>
      </FadeIn>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[var(--color-border)] mt-auto bg-[var(--color-surface)]/50 backdrop-blur-sm w-full">
        <p className="text-[var(--color-text-tertiary)] text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} {APP_NAME}. EST. 2026
        </p>
      </footer>
    </main>
  );
}
