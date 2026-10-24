"use client"

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { icons } from "@super/ui";
import { animate, Easing, motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const EASE: Easing = [0.22, 1, 0.36, 1]

type CounterProps = {
    value: number;
    suffix?: string;
    className?: string;
}

export const Counter = ({ value, suffix = '', className = '' }: CounterProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration: 1.8,
            ease: EASE,
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, value]);

    return (
        <span ref={ref} className={className}>
            {display}
            {suffix}
        </span>
    );
};

const HomeStatistics = () => {
    const t = useTranslations('HomeStatistics');

    const STAT_STORY = [
        { chapter: t('story.ch1Title'), desc: t('story.ch1Desc') },
        { chapter: t('story.ch2Title'), desc: t('story.ch2Desc') },
        { chapter: t('story.ch3Title'), desc: t('story.ch3Desc') },
        { chapter: t('story.ch4Title'), desc: t('story.ch4Desc') },
    ] as const;

    const STATS = [
        { value: 12, suffix: '+', label: t('stats.years') },
        { value: 120, suffix: '+', label: t('stats.clients') },
        { value: 10, suffix: 'M+', label: t('stats.components') },
        { value: 18, suffix: '+', label: t('stats.countries') },
    ] as const;

    return (
        <Section className="relative bg-primary overflow-hidden" data-testid="stats-section">

            <div
                className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:block select-none font-heading font-bold leading-none tracking-tighter whitespace-nowrap"
                style={{ fontSize: '11rem', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
                aria-hidden="true"
            >
                SINCE 2012
            </div>

            <Container className="relative">
                <Fade className="mb-16 max-w-3xl">
                    <EyeBrowSimple className="text-white mb-2" light>{t('eyebrow')}</EyeBrowSimple>
                    <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                        {t('headingStart')}{' '}
                        <span className="relative inline-block italic text-amber-300">
                            {t('headingItalic')}
                            <span className="absolute -bottom-1 left-0 h-0.75 w-full bg-amber-300/70" />
                        </span>{' '}
                        {t('headingEnd')}
                    </h2>
                    <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-xl">
                        {t('subtitle')}
                    </p>
                </Fade>

                {/* Timeline rail */}
                <div className="relative">
                    <motion.div
                        className="absolute z-10 inset-0 top-1.75 h-px bg-linear-to-r from-amber-300/60 via-white/25 to-transparent origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1, }}
                        viewport={{ amount: 0.1 }}
                        transition={{ duration: 1.6, ease: EASE }}
                        style={{ width: '100%' }}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8 lg:gap-x-10">
                        {STATS.map((s, i) => (
                            <Fade key={s.label} delay={i * 0.15}>
                                <div className="group relative lg:pr-6" data-testid={`stat-card-${i}`}>
                                    {/* node */}
                                    <div className="flex items-center gap-3 lg:gap-0">
                                        <motion.span
                                            className="relative flex h-3.75 w-3.75 items-center justify-center"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, margin: '-80px' }}
                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: EASE }}
                                        >
                                            <span className="absolute h-3.75 w-3.75 rounded-full bg-amber-300/25 group-hover:bg-amber-300/40 transition-colors" />
                                            <span className="h-1.75 w-1.75 rounded-full bg-amber-300" />
                                        </motion.span>
                                        <span className="lg:hidden text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                                            {t('chapterLabel')} {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <span className="hidden lg:block mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                                        {t('chapterLabel')} {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <p className="mt-4 lg:mt-3 font-heading text-5xl lg:text-[4.25rem] font-bold tracking-tight leading-none bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">
                                        <Counter value={s.value} suffix={s.suffix} />
                                    </p>

                                    <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                                        {s.label}
                                    </p>

                                    <h3 className="mt-5 font-heading text-lg font-bold text-white leading-snug">
                                        {STAT_STORY[i]!.chapter}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                        {STAT_STORY[i]!.desc}
                                    </p>

                                    <span className="mt-6 block h-px w-10 bg-white/20 group-hover:w-full group-hover:bg-amber-300/50 transition-all duration-700" />
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>

                <Fade delay={0.2} className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/10 pt-8">
                    <p className="text-sm text-slate-400">
                        {t('ctaLabel')}
                    </p>
                    <CustomLink
                        href="/quote"
                        variant="hover-underline"
                        className="text-amber-300 group hover:text-white transition-colors"
                        data-testid="stats-cta"
                    >
                        {t('cta')}
                        <icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 -rotate-45" />
                    </CustomLink>
                </Fade>
            </Container>
        </Section>
    );
};

export default HomeStatistics;