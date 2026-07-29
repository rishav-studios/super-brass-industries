'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Award, Target, Eye, BadgeCheck, Factory, Users, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeUp, FadeIn, SectionLabel } from '@/components/site/motion-primitives';
import CtaBand from '@/components/site/cta-band';
import { IMAGES, JOURNEY, CERTIFICATES } from '@/lib/siteData';

const VALUES = [
  { icon: Gem, title: 'Uncompromising Quality', desc: 'Every batch passes dimensional, thread and finish inspection before it leaves our facility.' },
  { icon: Users, title: 'Partnership Mindset', desc: 'We act as an extension of your supply chain — transparent pricing, honest lead times, proactive communication.' },
  { icon: Factory, title: 'Continuous Investment', desc: 'Profits go back into machines, metrology and people, so our capability grows with your requirements.' },
];

const App = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative bg-[#1a2845] overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0">
          <img src={IMAGES.factory1} alt="Super Brass Industries facility" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2845] via-[#1a2845]/90 to-[#1a2845]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-32">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel light>About Super Brass Industries</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl">
              Built in Jamnagar. Trusted by manufacturers <span className="text-[#d9b25f]">worldwide.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Since 2021, we have manufactured precision brass components for companies that cannot afford a single defective part. This is our story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <SectionLabel>Our Foundation</SectionLabel>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                A young company with an old-school obsession: getting it right
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Super Brass Industries was founded in 2021 in Jamnagar, Gujarat — the undisputed brass capital of India. Our founders grew up around lathes and turning centres, and started the company with a simple conviction: global buyers deserve a supplier who treats their drawing like a contract.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Today we operate a modern facility with CNC turning centres, high-speed traub machines, thread rolling, knurling and a dedicated quality lab. As OEM manufacturers, we serve automotive, electrical, gas and plumbing industry customers directly — with no trading layer in between.
              </p>
              <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 border border-slate-200">
                {[
                  { v: '2021', l: 'Established' },
                  { v: '40+', l: 'Team Members' },
                  { v: '8', l: 'Product Categories' },
                ].map((s) => (
                  <div key={s.l} className="px-5 py-5 text-center">
                    <p className="font-heading text-2xl font-bold text-[#1a2845]">{s.v}</p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <img src={IMAGES.factory3} alt="Factory floor" className="w-full h-64 object-cover mt-8" />
                <img src={IMAGES.machining} alt="Precision machining" className="w-full h-64 object-cover" />
                <img src={IMAGES.parts2} alt="Brass components" className="w-full h-64 object-cover mt-4" />
                <img src={IMAGES.heroMain} alt="Brass parts" className="w-full h-64 object-cover -mt-4" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 lg:py-28 bg-[#f6f7f9] grid-pattern" data-testid="journey-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center"><SectionLabel>Company Journey</SectionLabel></div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
              2021 → 2026: Five years of deliberate growth
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-[#1a2845]/15" />
            <div className="space-y-10">
              {JOURNEY.map((j, i) => (
                <FadeUp key={j.year} delay={0.05 * i}>
                  <div className={`relative flex ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`} data-testid={`journey-item-${j.year}`}>
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 h-4 w-4 border-2 border-[#b7852c] bg-white z-10" />
                    <div className={`ml-12 lg:ml-0 bg-white border border-slate-200 p-7 lg:w-[calc(50%-3rem)] hover:border-[#b7852c]/50 hover:shadow-md transition-all`}>
                      <span className="font-heading text-3xl font-bold text-[#d9b25f]">{j.year}</span>
                      <h3 className="mt-2 font-heading text-lg font-bold text-[#1a2845]">{j.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{j.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="py-20 lg:py-28" data-testid="vision-mission-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUp>
              <div className="bg-[#1a2845] p-10 lg:p-12 h-full relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern-dark" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center border border-[#d9b25f]/50 mb-6">
                    <Eye className="h-7 w-7 text-[#d9b25f]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Our Vision</h3>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    To make “Made in Jamnagar” the first choice of every global manufacturer sourcing brass components — by proving that Indian precision engineering can outperform any alternative on quality, reliability and value.
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="bg-[#f6f7f9] border border-slate-200 p-10 lg:p-12 h-full">
                <div className="flex h-14 w-14 items-center justify-center border border-[#1a2845]/30 mb-6">
                  <Target className="h-7 w-7 text-[#1a2845]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1a2845]">Our Mission</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  To deliver zero-defect brass components on time, every time — through continuous investment in machinery and metrology, rigorous process control, honest partnerships with our customers, and the relentless development of our people.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={0.08 * i}>
                <div className="border border-slate-200 p-8 h-full hover:border-[#b7852c]/50 hover:shadow-md transition-all">
                  <v.icon className="h-7 w-7 text-[#b7852c]" />
                  <h4 className="mt-4 font-heading font-bold text-[#1a2845]">{v.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-20 lg:py-28 bg-[#f6f7f9]" data-testid="certificates-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <FadeUp>
              <SectionLabel>Certifications & Compliance</SectionLabel>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] max-w-xl leading-[1.12]">
                Quality you can audit, not just trust
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button asChild variant="outline" className="rounded-none border-[#1a2845]/25 text-[#1a2845] hover:bg-[#1a2845]/5 h-11 px-6">
                <Link href="/quality-policy">Read Our Quality Policy <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATES.map((c, i) => (
              <FadeUp key={c.name} delay={0.08 * i}>
                <div className="bg-white border border-slate-200 p-7 h-full hover:border-[#b7852c]/50 hover:shadow-md transition-all" data-testid={`certificate-card-${i}`}>
                  <div className="flex h-12 w-12 items-center justify-center bg-[#1a2845]">
                    <BadgeCheck className="h-6 w-6 text-[#d9b25f]" />
                  </div>
                  <h3 className="mt-5 font-heading font-bold text-[#1a2845]">{c.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <div className="mt-10 flex items-start gap-4 border-l-2 border-[#b7852c] bg-white p-6">
              <Award className="h-6 w-6 text-[#b7852c] shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-[#1a2845]">Documentation on demand:</span> material test certificates, dimensional inspection reports, plating thickness reports and PPAP documentation are available with every shipment on request.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};

export default App;
