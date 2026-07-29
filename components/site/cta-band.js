'use client';

import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeUp, SectionLabel } from '@/components/site/motion-primitives';

const CtaBand = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a2845]" data-testid="cta-band">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d9b25f]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <FadeUp>
            <SectionLabel light>Start Your Project</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Have a drawing? Get a detailed quote within <span className="text-[#d9b25f]">24 hours.</span>
            </h2>
            <p className="mt-5 text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl">
              Send us your specifications and our engineering team will respond with pricing, lead time and material recommendations — no obligation, fully confidential.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="rounded-none h-13 px-8 py-6 bg-[#d9b25f] hover:bg-[#c9a24b] text-[#1a2845] text-sm font-bold tracking-wide" data-testid="cta-quote-btn">
                <Link href="/quote">
                  <FileText className="mr-2 h-4 w-4" /> Request a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none h-13 px-8 py-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-sm font-semibold">
                <Link href="/contact">
                  Talk to Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
