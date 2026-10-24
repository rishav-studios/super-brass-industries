"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ImageReveal from "@/components/shared/ImageReveal";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { useTranslations } from "next-intl";

const AboutIntro = () => {
    const t = useTranslations('About');

    return (
        <Section className="relative bg-white overflow-visible">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <Fade>
                        <EyeBrowSimple>{t('intro.eyebrow')}</EyeBrowSimple>
                        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground leading-[1.12] mt-4">
                            {t('intro.heading')}
                        </h2>
                        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                            {t('intro.p1')}
                        </p>
                        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                            {t('intro.p2')}
                        </p>
                        <div className="mt-8 grid grid-cols-3 divide-x divide-border border border-border rounded-lg">
                            {[
                                { v: '2012', l: t('intro.stats.established') },
                                { v: '40+', l: t('intro.stats.team') },
                                { v: '8', l: t('intro.stats.categories') },
                            ].map((s) => (
                                <div key={s.l} className="px-5 py-5 text-center">
                                    <p className="font-heading text-2xl font-bold text-foreground">{s.v}</p>
                                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </Fade>
                    <Fade delay={0.15}>
                        <div className="grid grid-cols-2 gap-4">
                            <ImageReveal
                                src="/about/factory-floor.webp"
                                alt="Factory floor"
                                className="w-full h-64 mt-8 rounded-lg"
                                imageClassName="rounded-lg"
                                aspectRatio="aspect-auto"
                            />
                            <ImageReveal
                                src="/about/machining.webp"
                                alt="Precision machining"
                                className="w-full h-64 rounded-lg"
                                imageClassName="rounded-lg"
                                aspectRatio="aspect-auto"
                            />
                            <ImageReveal
                                src="/about/brass-parts.webp"
                                alt="Brass components"
                                className="w-full h-64 mt-4 rounded-lg"
                                imageClassName="rounded-lg"
                                aspectRatio="aspect-auto"
                            />
                            <ImageReveal
                                src="/about/facility.webp"
                                alt="Brass parts"
                                className="w-full h-64 -mt-4 rounded-lg"
                                imageClassName="rounded-lg"
                                aspectRatio="aspect-auto"
                            />
                        </div>
                    </Fade>
                </div>
            </Container>
        </Section>
    );
};

export default AboutIntro;
