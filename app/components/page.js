'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FadeUp, SectionLabel } from '@/components/site/motion-primitives';
import CtaBand from '@/components/site/cta-band';
import { CATEGORIES } from '@/lib/siteData';

const App = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-[#1a2845] overflow-hidden" data-testid="components-hero">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel light>Product Range</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl">
              Brass components for every <span className="text-[#d9b25f]">application.</span>
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
              Eight specialised categories, machined to international standards. Explore the range or send us your custom drawing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <FadeUp key={cat.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/components/${cat.slug}`}
                  className="group block bg-white border border-slate-200 hover:border-[#b7852c]/60 transition-all duration-300 hover:shadow-lg h-full"
                  data-testid={`components-card-${cat.slug}`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2845]/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1a2845]">0{i + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-[#1a2845] group-hover:text-[#b7852c] transition-colors">{cat.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{cat.short}</p>
                    <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-[#b7852c]">
                      View Details <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};

export default App;
