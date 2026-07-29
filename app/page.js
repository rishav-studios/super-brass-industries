'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Factory, Award, FileText,
  Car, Zap, Flame, Droplets, Radio, Building2, Tractor, Shield, Cog, PackageCheck, DraftingCompass, Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeUp, FadeIn, Counter, SectionLabel } from '@/components/site/motion-primitives';
import CtaBand from '@/components/site/cta-band';
import { SITE, IMAGES, CATEGORIES, INDUSTRIES, STATS, EXPORT_COUNTRIES, FAQS } from '@/lib/siteData';

const ICONS = { Car, Zap, Flame, Droplets, Radio, Building2, Tractor, Shield };

const App = () => {
  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-[#f6f7f9] grid-pattern" data-testid="hero-section">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#1a2845]/[0.03] to-transparent hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 border border-[#1a2845]/15 bg-white px-4 py-2 mb-7">
                  <span className="h-2 w-2 bg-[#b7852c]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a2845]">
                    ISO 9001:2015 Certified • Jamnagar, India
                  </span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#1a2845] leading-[1.05]"
              >
                Precision Brass Components,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#b7852c]">Engineered</span>
                  <span className="absolute bottom-1 left-0 h-3 w-full bg-[#d9b25f]/25" />
                </span>{' '}
                for Global OEMs
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                From auto parts to electrical pins — Super Brass Industries manufactures 10M+ precision brass components a year for manufacturers across 18+ countries. Your drawing, our craftsmanship.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-9 flex flex-col sm:flex-row gap-4"
              >
                <Button asChild className="rounded-none h-13 px-8 py-6 bg-[#1a2845] hover:bg-[#233459] text-white text-sm font-bold tracking-wide" data-testid="hero-quote-btn">
                  <Link href="/quote">
                    <FileText className="mr-2 h-4 w-4" /> Request a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none h-13 px-8 py-6 border-[#1a2845]/25 text-[#1a2845] hover:bg-[#1a2845]/5 text-sm font-semibold" data-testid="hero-explore-btn">
                  <Link href="/components">
                    Explore Components <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
              >
                {['24-hr Quote Response', '±0.005 mm Tolerance', '100% Inspected Batches'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-[#b7852c]" /> {t}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-3 border border-[#1a2845]/10" />
                <div className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-[#b7852c]" />
                <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-[#b7852c]" />
                <img src={IMAGES.brassParts} alt="Precision brass components" className="w-full h-[380px] lg:h-[520px] object-cover" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
                  className="absolute -bottom-8 -left-4 lg:-left-10 bg-white shadow-xl border border-slate-100 px-6 py-5 flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#1a2845]">
                    <Factory className="h-6 w-6 text-[#d9b25f]" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[#1a2845] leading-none">10M+</p>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Components / Year</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-[#1a2845] py-4 overflow-hidden" data-testid="marquee-strip">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <span key={i} className="flex items-center text-sm font-medium tracking-[0.2em] uppercase text-slate-300 mx-6">
              <span className="mr-6 text-[#d9b25f]">◆</span>{ind.name}
            </span>
          ))}
        </div>
      </div>

      {/* ============ ABOUT SNIPPET ============ */}
      <section className="py-20 lg:py-28" data-testid="about-snippet">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="relative">
                <img src={IMAGES.cncMachine} alt="CNC machining at Super Brass Industries" className="w-full h-[420px] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-[#1a2845] text-white px-7 py-5 hidden sm:block">
                  <p className="font-heading text-3xl font-bold text-[#d9b25f]">Est. 2021</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mt-1">Jamnagar, Gujarat</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                From the brass city of India, to production lines worldwide
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Super Brass Industries was established in 2021 in Jamnagar — the city that produces over 70% of India's brass components. In just five years we have grown into a trusted OEM partner for automotive, electrical and gas industry manufacturers across 18+ countries.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                With in-house CNC turning, traub machining, threading, plating coordination and a fully equipped inspection lab, we control every stage of production — so you receive components that fit right, first time, every time.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-5">
                {[
                  { icon: Award, text: 'ISO 9001:2015 Certified QMS' },
                  { icon: Globe2, text: 'Exports to 18+ Countries' },
                  { icon: Cog, text: 'In-house CNC & Traub Setup' },
                  { icon: PackageCheck, text: '100% Batch Inspection' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <f.icon className="h-5 w-5 text-[#b7852c] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{f.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="mt-7 px-0 text-[#1a2845] font-semibold" data-testid="about-link-btn">
                <Link href="/about">
                  Learn more about us <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============ OEM HIGHLIGHT ============ */}
      <section className="relative overflow-hidden bg-[#1a2845]" data-testid="oem-section">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 border border-[#d9b25f]/50 bg-[#d9b25f]/10 px-4 py-2 mb-6">
                <span className="h-2 w-2 bg-[#d9b25f] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d9b25f]">Direct From The Source</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                We are <span className="text-[#d9b25f]">OEM Manufacturers.</span><br />Not traders. Not middlemen.
              </h2>
              <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
                Every component is manufactured in our own facility in Jamnagar. That means factory-direct pricing, complete quality control, engineering support on your drawings, and total confidentiality for your proprietary parts.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: DraftingCompass, title: 'Drawing-to-Delivery', desc: 'Send a 2D drawing, 3D model or sample — we handle tooling, production, finishing and export packing.' },
                  { icon: Layers, title: 'In-house Everything', desc: 'CNC turning, traub machining, threading, knurling and inspection under one roof.' },
                  { icon: Shield, title: 'NDA-Protected Development', desc: 'Your designs stay confidential. We routinely work under NDAs with global OEMs.' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d9b25f]/40">
                      <f.icon className="h-5 w-5 text-[#d9b25f]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white">{f.title}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-9 rounded-none h-12 px-8 bg-[#d9b25f] hover:bg-[#c9a24b] text-[#1a2845] text-sm font-bold tracking-wide" data-testid="oem-quote-btn">
                <Link href="/quote">Send Your Drawing <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeUp>
            <FadeIn delay={0.2}>
              <div className="relative">
                <img src={IMAGES.heroMain} alt="OEM brass manufacturing" className="w-full h-[300px] lg:h-[420px] object-cover opacity-95" />
                <div className="absolute inset-0 border border-white/15" />
                <div className="grid grid-cols-2 border border-white/15 border-t-0">
                  <div className="p-6 border-r border-white/15">
                    <p className="font-heading text-3xl font-bold text-[#d9b25f]">±0.005</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mt-1">mm tolerance capability</p>
                  </div>
                  <div className="p-6">
                    <p className="font-heading text-3xl font-bold text-[#d9b25f]">24 hrs</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mt-1">quotation turnaround</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="py-20 lg:py-28 bg-[#f6f7f9]" data-testid="categories-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <FadeUp>
              <SectionLabel>Our Product Range</SectionLabel>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] max-w-xl leading-[1.12]">
                Eight component categories. One quality standard.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button asChild variant="outline" className="rounded-none border-[#1a2845]/25 text-[#1a2845] hover:bg-[#1a2845]/5 h-11 px-6">
                <Link href="/components">View All Components <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat, i) => (
              <FadeUp key={cat.slug} delay={(i % 4) * 0.08}>
                <Link
                  href={`/components/${cat.slug}`}
                  className="group block bg-white border border-slate-200 hover:border-[#b7852c]/60 transition-all duration-300 hover:shadow-lg h-full"
                  data-testid={`category-card-${cat.slug}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2845]/50 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1a2845]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-[#1a2845] group-hover:text-[#b7852c] transition-colors">{cat.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">{cat.short}</p>
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

      {/* ============ STATISTICS ============ */}
      <section className="bg-[#1a2845] relative overflow-hidden" data-testid="stats-section">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} className={`px-6 py-8 ${i !== 0 ? 'border-l border-white/10' : ''}`}>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-[#d9b25f]">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs lg:text-sm uppercase tracking-[0.18em] text-slate-300">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPORTS ============ */}
      <section className="py-20 lg:py-28" data-testid="exports-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <SectionLabel>Global Reach</SectionLabel>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                Exporting precision from Jamnagar to 18+ countries
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Our export desk manages documentation, VCI-protected packaging, third-party inspection and logistics on FOB, CIF or DDP terms — so your components arrive on schedule, wherever your plant is located.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {EXPORT_COUNTRIES.map((c) => (
                  <span key={c} className="border border-slate-200 bg-[#f6f7f9] px-4 py-2 text-sm font-medium text-slate-700">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 border-l-2 border-[#b7852c] pl-4">
                <Globe2 className="h-8 w-8 text-[#b7852c]" />
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-[#1a2845]">Export-grade packaging</span> with full batch traceability and material certificates on every shipment.
                </p>
              </div>
            </FadeUp>
            <FadeIn delay={0.15}>
              <div className="relative">
                <img src={IMAGES.factory2} alt="Manufacturing facility" className="w-full h-[300px] object-cover" />
                <img src={IMAGES.fittings} alt="Brass fittings export" className="w-2/3 h-[220px] object-cover border-8 border-white -mt-20 ml-auto relative shadow-xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="py-20 lg:py-28 bg-[#f6f7f9]" data-testid="industries-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center"><SectionLabel>Industries Served</SectionLabel></div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
              Trusted across eight demanding industries
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ICONS[ind.icon] || Cog;
              return (
                <FadeUp key={ind.name} delay={(i % 4) * 0.08}>
                  <div className="bg-white border border-slate-200 p-6 h-full hover:border-[#b7852c]/60 hover:shadow-md transition-all duration-300 group" data-testid={`industry-card-${i}`}>
                    <div className="flex h-12 w-12 items-center justify-center bg-[#1a2845]/5 group-hover:bg-[#1a2845] transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#1a2845] group-hover:text-[#d9b25f] transition-colors duration-300" />
                    </div>
                    <h3 className="mt-4 font-heading font-bold text-[#1a2845]">{ind.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 lg:py-28" data-testid="faq-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <FadeUp>
                <SectionLabel>FAQs</SectionLabel>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                  Answers before you ask
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Everything purchase teams usually want to know. Still have questions? Our team responds within one business day.
                </p>
                <Button asChild className="mt-6 rounded-none bg-[#1a2845] hover:bg-[#233459] text-white h-11 px-6">
                  <Link href="/contact">Ask a Question <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </FadeUp>
            </div>
            <div className="lg:col-span-8">
              <FadeUp delay={0.1}>
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200" data-testid={`faq-item-${i}`}>
                      <AccordionTrigger className="text-left font-heading font-semibold text-[#1a2845] hover:text-[#b7852c] hover:no-underline py-5">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed pb-5">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
};

export default App;
