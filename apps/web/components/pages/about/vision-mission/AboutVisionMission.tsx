"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BackgroundNoise from "@/components/shared/BackgroundNoise";
import { icons } from "@super/ui";
import { useTranslations } from "next-intl";

const AboutVisionMission = () => {
    const t = useTranslations('About');

    const VALUES = [
        { icon: icons.star, title: t('values.quality.title'), desc: t('values.quality.desc') },
        { icon: icons.building2, title: t('values.partnership.title'), desc: t('values.partnership.desc') },
        { icon: icons.factory, title: t('values.investment.title'), desc: t('values.investment.desc') },
    ];

    return (
        <Section className="relative bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Fade>
                        <div className="bg-primary p-10 lg:p-12 h-full relative overflow-hidden rounded-3xl">
                            <BackgroundNoise className="opacity-[0.03]" />
                            <div className="relative z-10">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-6">
                                    <icons.eye className="h-7 w-7 text-amber-300" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white">{t('vision.title')}</h3>
                                <p className="mt-4 text-slate-300 leading-relaxed">
                                    {t('vision.desc')}
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade delay={0.12}>
                        <div className="bg-[#f4f5f7] border border-border p-10 lg:p-12 h-full rounded-3xl relative z-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                <icons.crosshair className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-foreground">{t('mission.title')}</h3>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                {t('mission.desc')}
                            </p>
                        </div>
                    </Fade>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VALUES.map((v, i) => (
                        <Fade key={v.title} delay={0.08 * i}>
                            <div className="border border-border rounded-3xl p-8 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-white">
                                <v.icon className="h-7 w-7 text-primary" />
                                <h4 className="mt-4 font-heading font-bold text-foreground">{v.title}</h4>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default AboutVisionMission;
