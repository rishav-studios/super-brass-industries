"use client"

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { CustomLink } from "@/components/shared/clickables/CustomLink"
import ImageReveal from "@/components/shared/ImageReveal"
import { EyeBrowSimple } from "@/components/shared/SectionHeader"
import { icons } from "@super/ui"
import { useTranslations } from "next-intl"

const HomeAbout = () => {
    const t = useTranslations('HomeAbout');

    const CREDENTIALS = [
        { icon: icons.shieldCheck, label: t('credentials.iso') },
        { icon: icons.globe, label: t('credentials.exports') },
        { icon: icons.factory, label: t('credentials.cnc') },
        { icon: icons.checkCircle2, label: t('credentials.inspection') },
    ];

    return (
        <Section className="relative bg-white overflow-visible">
            <Container className="z-10 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ── Left: Image with Est. Badge ── */}
                    <div className="relative h-full">
                        <ImageReveal
                            src="/all-products.webp"
                            alt="Super Brass Industries precision brass components displayed on an engineering blueprint"
                            // aspectRatio="aspect-[4/5]"
                            className="rounded-lg h-full"
                            imageClassName="rounded-lg"
                        />

                        {/* Est. 2012 overlapping badge */}
                        <Fade delay={0.6} className="absolute -bottom-6 -right-4 lg:-right-8 z-10">
                            <div className="bg-primary text-white px-8 py-5 rounded-lg shadow-xl">
                                <p className="text-2xl sm:text-3xl font-bold tracking-tight leading-none">
                                    {t('badge.year')}
                                </p>
                                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mt-1">
                                    {t('badge.location')}
                                </p>
                            </div>
                        </Fade>
                    </div>

                    {/* ── Right: Content ── */}
                    <div className="flex flex-col gap-8 lg:pl-4 pt-8 lg:pt-0">
                        <div className="">
                            <EyeBrowSimple>{t('eyebrow')}</EyeBrowSimple>
                            {/* Heading */}
                            <Fade>
                                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground">
                                    {t('heading')}
                                </h2>
                            </Fade>
                        </div>

                        {/* Body — scroll-reveal text */}
                        <div className="flex flex-col gap-6">
                            <p className="text-lg sm:text-xl leading-relaxed font-normal text-foreground">
                                {t('p1')}
                            </p>

                            <p className="text-lg sm:text-xl leading-relaxed font-normal text-foreground">
                                {t('p2')}
                            </p>
                        </div>

                        {/* Credential badges — 2×2 grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                            {CREDENTIALS.map((cred, i) => (
                                <Fade key={cred.label} delay={0.1 * i}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0">
                                            <cred.icon className="w-4.5 h-4.5" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">
                                            {cred.label}
                                        </span>
                                    </div>
                                </Fade>
                            ))}
                        </div>

                        {/* CTA */}
                        <Fade delay={0.4}>
                            <CustomLink variant="hover-underline" href="/about" isNormal className="text-primary font-medium flex items-center gap-2 w-max text-sm">
                                {t('cta')}
                                <icons.externalLink className="w-4 h-4" />
                            </CustomLink>
                        </Fade>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default HomeAbout