"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { Clock, Cpu, Globe2, ShieldCheck } from "lucide-react";
import { Easing, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EASE: Easing = [0.25, 0.1, 0.25, 0.95];

const ContactHero = () => {
    const t = useTranslations('Contact');

    const trustBadges = [
        { icon: Clock, label: t('hero.badges.turnaround'), desc: "Guaranteed DFM review" },
        { icon: ShieldCheck, label: t('hero.badges.nda'), desc: "Strict confidentiality" },
        { icon: Cpu, label: t('hero.badges.tolerance'), desc: "High-precision turning" },
        { icon: Globe2, label: t('hero.badges.exports'), desc: "Global door delivery" },
    ];

    return (
        <Section className="p-0! overflow-hidden relative min-h-max">
            {/* Background Image & Brass/Navy Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/about/hero.webp"
                    alt="Super Brass Industries Machining Facility"
                    fill
                    priority
                    className="object-cover opacity-20 filter grayscale"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-[#0f172a] via-primary/95 to-primary" />
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 pointer-events-none" />

            {/* Top Bar PageHeader */}
            <PageHeader className="relative z-10" style={{ backgroundColor: "transparent", color: "#fff" }} />

            <Container className="relative pt-48 pb-24 lg:pt-56 lg:pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl"
                >
                    <EyeBrowSimple light>{t('hero.eyebrow')}</EyeBrowSimple>

                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mt-6">
                        <span className="block overflow-hidden pb-2">
                            <motion.span
                                className="block"
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                            >
                                {t('hero.titleStart')}
                                <span className="text-amber-400 underline decoration-amber-400/40 decoration-wavy underline-offset-8">
                                    {t('hero.titleHighlight')}
                                </span>
                            </motion.span>
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>
            </Container>

            {/* Trust and Engineering Metrics Strip */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative border-t border-white/10 bg-primary/80 backdrop-blur-md"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
                    {trustBadges.map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={badge.label}
                                className={`py-4 px-4 sm:px-6 flex items-center gap-3.5 ${i !== 0 ? 'border-l border-white/10' : ''
                                    }`}
                            >
                                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
                                        {badge.label}
                                    </p>
                                    <p className="text-[11px] text-slate-400 hidden sm:block">
                                        {badge.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </Section>
    );
};

export default ContactHero;
