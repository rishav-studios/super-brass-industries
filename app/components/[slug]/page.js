'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, FileText, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeUp, SectionLabel } from '@/components/site/motion-primitives';
import CtaBand from '@/components/site/cta-band';
import { CATEGORIES } from '@/lib/siteData';

const App = () => {
  const params = useParams();
  const slug = params?.slug;
  const cat = CATEGORIES.find((c) => c.slug === slug);

  if (!cat) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
        <h1 className="font-heading text-3xl font-bold text-[#1a2845]">Component not found</h1>
        <p className="mt-3 text-slate-600">The component category you are looking for does not exist.</p>
        <Button asChild className="mt-6 rounded-none bg-[#1a2845] text-white">
          <Link href="/components"><ArrowLeft className="mr-2 h-4 w-4" /> Back to All Components</Link>
        </Button>
      </div>
    );
  }

  const related = CATEGORIES.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative bg-[#1a2845] overflow-hidden" data-testid="component-hero">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
              <Link href="/" className="hover:text-[#d9b25f]">Home</Link>
              <span>/</span>
              <Link href="/components" className="hover:text-[#d9b25f]">Components</Link>
              <span>/</span>
              <span className="text-slate-200">{cat.name}</span>
            </div>
            <SectionLabel light>Component Category</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl" data-testid="component-title">
              {cat.name}
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl">{cat.short}</p>
            <Button asChild className="mt-8 rounded-none h-12 px-8 bg-[#d9b25f] hover:bg-[#c9a24b] text-[#1a2845] text-sm font-bold tracking-wide" data-testid="component-quote-btn">
              <Link href="/quote"><FileText className="mr-2 h-4 w-4" /> Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW + SPECS */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <div className="relative">
                <div className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-[#b7852c]" />
                <img src={cat.image} alt={cat.name} className="w-full h-[380px] object-cover" />
              </div>
              <h2 className="mt-9 font-heading text-2xl font-bold text-[#1a2845]">Overview</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{cat.description}</p>
              <h3 className="mt-8 font-heading text-lg font-bold text-[#1a2845]">Typical Applications</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(cat.applications || []).map((a) => (
                  <div key={a} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 h-5 w-5 text-[#b7852c] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{a}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="border border-slate-200">
                <div className="bg-[#1a2845] px-7 py-5 flex items-center gap-3">
                  <Settings2 className="h-5 w-5 text-[#d9b25f]" />
                  <h3 className="font-heading font-bold text-white">Technical Specifications</h3>
                </div>
                <div className="divide-y divide-slate-200" data-testid="component-specs">
                  {(cat.specs || []).map((s) => (
                    <div key={s.label} className="grid grid-cols-1 sm:grid-cols-3 px-7 py-4 gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 sm:col-span-1 pt-0.5">{s.label}</span>
                      <span className="text-sm text-[#1a2845] font-medium sm:col-span-2">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-[#f6f7f9] border border-slate-200 p-7">
                <h4 className="font-heading font-bold text-[#1a2845]">Need a different specification?</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  These are our standard capabilities — not our limits. Send your drawing and we will confirm feasibility within 24 hours.
                </p>
                <Button asChild className="mt-5 rounded-none bg-[#1a2845] hover:bg-[#233459] text-white h-11 px-6 text-sm font-semibold">
                  <Link href="/quote">Send Your Drawing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 lg:py-20 bg-[#f6f7f9]" data-testid="related-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>More From Our Range</SectionLabel>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-[#1a2845] mb-10">Related component categories</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <FadeUp key={r.slug} delay={i * 0.08}>
                <Link href={`/components/${r.slug}`} className="group block bg-white border border-slate-200 hover:border-[#b7852c]/60 hover:shadow-md transition-all h-full">
                  <div className="h-36 overflow-hidden">
                    <img src={r.image} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-[#1a2845] group-hover:text-[#b7852c] transition-colors text-sm">{r.name}</h3>
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
