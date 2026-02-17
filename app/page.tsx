import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import { CATEGORY_SLUGS, APP_NAME } from '@/lib/constants';
import { TrendingUp, Briefcase, Calculator } from 'lucide-react';

export default function Home() {
  // Category data with Lucide icons
  const CATEGORIES = [
    {
      title: 'Investment Banking',
      slug: CATEGORY_SLUGS.INVESTMENT_BANKING,
      icon: <TrendingUp size={48} strokeWidth={1.5} />,
      description: 'Master M&A, LBO modeling, valuation techniques, and market knowledge tailored for top-tier banks.',
    },
    {
      title: 'Corporate Finance',
      slug: CATEGORY_SLUGS.CORPORATE_FINANCE,
      icon: <Briefcase size={48} strokeWidth={1.5} />,
      description: 'Deep dive into capital budgeting, risk management, and financial planning & analysis (FP&A) roles.',
    },
    {
      title: 'Accounting',
      slug: CATEGORY_SLUGS.ACCOUNTING,
      icon: <Calculator size={48} strokeWidth={1.5} />,
      description: 'Solidify your grasp on GAAP/IFRS standards, 3-statement modeling, and audit fundamentals.',
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center relative overflow-hidden">
      {/* Abstract Background - Gold/Navy */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-[var(--color-primary)] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-[var(--color-surface-elevated)] opacity-50 blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex-grow flex flex-col items-center justify-center">
        {/* Hero Section */}
        <Hero
          title={APP_NAME}
          subtitle="ELITE PREPARATION FOR ELITE CAREERS"
        />

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl mt-16 place-items-center md:place-items-stretch">
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.slug}
              title={category.title}
              slug={category.slug}
              icon={category.icon}
              description={category.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[var(--color-border)] mt-auto bg-[var(--color-surface)]/50 backdrop-blur-sm">
        <p className="text-[var(--color-text-tertiary)] text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} {APP_NAME}. EST. 2026
        </p>
      </footer>
    </main>
  );
}
