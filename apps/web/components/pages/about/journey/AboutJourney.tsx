"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BackgroundNoise from "@/components/shared/BackgroundNoise";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "motion/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type JourneyItem = {
    year: string;
    title: string;
    desc: string;
};

// ─── Mobile Vertical Fallback (dark navy, unchanged style) ────────────────────

const MobileJourney = ({
    journey,
    t,
}: {
    journey: JourneyItem[];
    t: ReturnType<typeof useTranslations>;
}) => {
    return (
        <Section className="relative bg-primary overflow-hidden lg:hidden">
            <BackgroundNoise />
            <Container className="relative z-10">
                <Fade className="text-center max-w-2xl mx-auto mb-16">
                    <div className="flex justify-center">
                        <EyeBrowSimple light>{t("journey.eyebrow")}</EyeBrowSimple>
                    </div>
                    <h2 className="text-3xl font-semibold tracking-tight text-white mt-4 leading-[1.12]">
                        {t("journey.heading")}
                    </h2>
                </Fade>

                <div className="relative">
                    <motion.div
                        className="absolute left-1.75 top-0 bottom-0 w-px bg-amber-300/30 origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <div className="space-y-10">
                        {journey.map((j, i) => (
                            <Fade key={j.year} delay={0.05 * i}>
                                <div className="relative flex items-start gap-5">
                                    <div className="mt-1.5 h-3.75 w-3.75 shrink-0 rounded-full bg-amber-300 ring-4 ring-amber-300/20 z-10" />
                                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-300/30 transition-all duration-300">
                                        <span className="font-heading text-3xl font-bold text-amber-400">
                                            {j.year}
                                        </span>
                                        <h3 className="mt-2 font-heading text-base font-bold text-white">
                                            {j.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                            {j.desc}
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

// ─── Desktop: Reference-style fixed-node scroll hijack ────────────────────────

const DesktopJourney = ({
    journey,
    t,
}: {
    journey: JourneyItem[];
    t: ReturnType<typeof useTranslations>;
}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = Math.round(v * (journey.length - 1));
        setActiveIndex(Math.max(0, Math.min(idx, journey.length - 1)));
    });

    const activeSuffix = journey[activeIndex]!.year.slice(2);
    const railFillPct = (activeIndex / (journey.length - 1)) * 100;

    // Pixel offsets from the rail centre (y = 0)
    const DIAMOND_HALF = 9;   // px, half of 18px diamond
    const BADGE_GAP = 32;  // px gap between diamond edge and badge
    const BADGE_H = 28;  // px approximate badge height
    const CARD_GAP = 12;  // px gap between badge and card edge
    const contentOffset = DIAMOND_HALF + BADGE_GAP + BADGE_H + CARD_GAP; // ≈ 59 px

    return (
        <Section
            ref={targetRef}
            className="relative h-[520vh] bg-[#f8f7f4] hidden lg:block"
        >
            <Container className="sticky top-0 h-screen overflow-hidden">

                {/* ── 1. Split-year watermark ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                >
                    <div className="font-heading font-extrabold text-[30vw] leading-none text-black/4.5 flex items-baseline">
                        <span>20</span>
                        <span className="relative inline-block overflow-hidden" style={{ height: "1em" }}>
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.span
                                    key={activeSuffix}
                                    className="block"
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    exit={{ y: "-100%" }}
                                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    {activeSuffix}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </div>
                </div>

                {/* ── 2. Header ── */}
                <div className=" top-10 left-0 right-0 flex flex-col items-center z-10 px-8">
                    <EyeBrowSimple>{t("journey.eyebrow")}</EyeBrowSimple>
                    <h2 className="mt-4 text-4xl xl:text-5xl font-semibold tracking-tight text-foreground text-center leading-[1.12] max-w-3xl">
                        {t("journey.heading")}
                    </h2>
                </div>

                {/* ── 3. Rail + zig-zag nodes ──
                    Container sits at top-1/2 (the rail line). Every child is
                    absolutely positioned relative to this zero-height container.
                    Even indices (0,2,4,6) → content ABOVE the rail.
                    Odd  indices (1,3,5)   → content BELOW the rail.
                ── */}
                <div className="absolute left-10 right-10 xl:left-16 xl:right-16 top-1/2 z-10">

                    {/* Rail line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
                    {/* Filled rail segment */}
                    <div
                        className="absolute left-0 top-0 h-px bg-primary transition-[width] duration-500 ease-out"
                        style={{ width: `${railFillPct}%` }}
                    />

                    {journey.map((j, i) => {
                        const isAbove = i % 2 === 0;
                        const isPast = i <= activeIndex;
                        const isActive = i === activeIndex;
                        const leftPct = (i / (journey.length - 1)) * 100;

                        const sharedCardClass = `
                            absolute left-1/2 -translate-x-1/2 w-[190px] xl:w-[210px] text-center
                            transition-all duration-500
                        `;
                        const sharedBadgeClass = `
                            absolute left-1/2 -translate-x-1/2 transition-all duration-500
                        `;

                        return (
                            <div
                                key={j.year}
                                className="absolute -translate-x-1/2"
                                style={{ left: `${leftPct}%` }}
                            >
                                {/* ── Card ABOVE rail (even nodes) ── */}
                                <div
                                    className={`${sharedCardClass} ${isAbove && isPast ? "opacity-100" : "opacity-0 pointer-events-none"
                                        }`}
                                    style={{ bottom: `${contentOffset}px` }}
                                >
                                    <p className="font-heading text-base font-bold text-foreground leading-snug">
                                        {j.title}
                                    </p>
                                    <p className="mt-1.5 text-base text-muted-foreground leading-relaxed line-clamp-3">
                                        {j.desc}
                                    </p>
                                </div>

                                {/* ── Year badge above diamond (even nodes) ── */}
                                <div
                                    className={`${sharedBadgeClass} ${isAbove && isPast ? "opacity-100" : "opacity-0 pointer-events-none"
                                        }`}
                                    style={{ bottom: `${DIAMOND_HALF + BADGE_GAP}px` }}
                                >
                                    <span className={`font-heading text-xs font-bold px-3 py-1.5 rounded-[3px] tracking-wide block whitespace-nowrap transition-all duration-300 ${isActive ? "bg-primary text-white shadow-lg" : "bg-white border border-black/10 text-foreground"
                                        }`}>
                                        {j.year}
                                    </span>
                                </div>

                                {/* ── Diamond — precisely on the rail line ── */}
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-4.5 w-4.5 rotate-45 border-2 transition-all duration-300 ${isActive
                                        ? "bg-primary border-primary scale-[1.1] shadow-[0_0_0_5px_rgba(26,40,69,0.12)]"
                                        : isPast
                                            ? "bg-white border-primary/70"
                                            : "bg-white border-black/20"
                                        }`}
                                />

                                {/* ── Year badge below diamond (odd nodes) ── */}
                                <div
                                    className={`${sharedBadgeClass} ${!isAbove && isPast ? "opacity-100" : "opacity-0 pointer-events-none"
                                        }`}
                                    style={{ top: `${DIAMOND_HALF + BADGE_GAP}px` }}
                                >
                                    <span className={`font-heading text-xs font-bold px-3 py-1.5 rounded-[3px] tracking-wide block whitespace-nowrap transition-all duration-300 ${isActive ? "bg-primary text-white shadow-lg" : "bg-white border border-black/10 text-foreground"
                                        }`}>
                                        {j.year}
                                    </span>
                                </div>

                                {/* ── Card BELOW rail (odd nodes) ── */}
                                <div
                                    className={`${sharedCardClass} ${!isAbove && isPast ? "opacity-100" : "opacity-0 pointer-events-none"
                                        }`}
                                    style={{ top: `${contentOffset}px` }}
                                >
                                    <p className="font-heading text-base font-bold text-foreground leading-snug">
                                        {j.title}
                                    </p>
                                    <p className="mt-1.5 text-base text-muted-foreground leading-relaxed line-clamp-3">
                                        {j.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

                {/* ── 4. Progress bar ── */}
                <div className="absolute bottom-9 left-10 right-10 xl:left-16 xl:right-16 z-20">
                    <div className="h-px bg-black/10 relative overflow-hidden rounded-full">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-primary origin-left"
                            style={{ width: scrollYProgress }}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                            {journey[0]!.year}
                        </span>
                        <motion.span
                            className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium flex items-center gap-1.5"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: activeIndex > 0 ? 0 : 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            Scroll to explore
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.span>
                        <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                            {journey[journey.length - 1]!.year}
                        </span>
                    </div>
                </div>

            </Container>
        </Section>
    );
};

// ─── Root ─────────────────────────────────────────────────────────────────────

const AboutJourney = () => {
    const t = useTranslations("About");

    const JOURNEY: JourneyItem[] = [
        { year: "2012", title: t("journey.2012.title"), desc: t("journey.2012.desc") },
        { year: "2015", title: t("journey.2015.title"), desc: t("journey.2015.desc") },
        { year: "2017", title: t("journey.2017.title"), desc: t("journey.2017.desc") },
        { year: "2019", title: t("journey.2019.title"), desc: t("journey.2019.desc") },
        { year: "2021", title: t("journey.2021.title"), desc: t("journey.2021.desc") },
        { year: "2024", title: t("journey.2024.title"), desc: t("journey.2024.desc") },
        { year: "2026", title: t("journey.2026.title"), desc: t("journey.2026.desc") },
    ];

    return (
        <>
            <MobileJourney journey={JOURNEY} t={t} />
            <DesktopJourney journey={JOURNEY} t={t} />
        </>
    );
};

export default AboutJourney;
