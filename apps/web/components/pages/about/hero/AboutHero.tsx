"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import { Easing } from "motion";

const EASE: Easing = [0.25, 0.1, 0.25, 0.95];

const AboutHero = () => {
    const t = useTranslations('About');

    return (
        <Section className="p-0! overflow-hidden relative">
            <div className="absolute inset-0">
                <Image
                    src="/about/hero.webp"
                    alt="Super Brass Industries facility"
                    fill
                    className="object-cover opacity-25"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
            
            <PageHeader className="relative z-10" style={{ backgroundColor: "transparent", color: "#fff" }} />
            
            <Container className="relative pt-40 pb-24 lg:pt-48 lg:pb-32">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <EyeBrowSimple light>{t('hero.eyebrow')}</EyeBrowSimple>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl mt-6">
                        <span className="block overflow-hidden pb-2">
                            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }}>
                                {t('hero.titleStart')}<span className="text-amber-300">{t('hero.titleHighlight')}</span>
                            </motion.span>
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>
            </Container>

            {/* Bottom stat strip */}
            <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                className="relative border-t border-white/10 bg-primary/70 backdrop-blur"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3">
                    {[
                        { v: 'Est. 2012', l: t('intro.stats.established') },
                        { v: '40+', l: t('intro.stats.team') },
                        { v: '8', l: t('intro.stats.categories') },
                    ].map((s, i) => (
                        <div key={s.l} className={`py-5 px-5 flex items-baseline gap-3 ${i !== 0 ? 'md:border-l border-white/10' : ''}`}>
                            <span className="font-heading text-2xl font-bold text-white">{s.v}</span>
                            <span className="text-[11px] uppercase tracking-[0.15em] text-slate-400">{s.l}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

export default AboutHero;
