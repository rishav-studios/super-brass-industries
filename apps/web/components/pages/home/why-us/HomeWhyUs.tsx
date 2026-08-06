"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BackgroundNoise from "@/components/shared/BackgroundNoise";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { icons } from "@super/ui";
import { ComponentType } from "react";

type WHYType = {
    title: string;
    desc: string;
    icon: ComponentType<{ className?: string }>;
    index: string;
}

const WHY: WHYType[] = [
    {
        title: 'OEM Factory-Direct',
        desc: 'No traders, no middlemen. Prices, answers and accountability come straight from the production floor in Jamnagar.',
        icon: icons.factory,
        index: '01'
    },
    {
        title: 'Precision You Can Measure',
        desc: 'CNC and traub machining held to ±0.005 mm, verified with calibrated instruments and documented inspection reports.',
        icon: icons.crosshair,
        index: '02'
    },
    {
        title: '24-Hour Quotations',
        desc: 'Engineering-reviewed quotes with pricing, lead time and material options delivered within one business day.',
        icon: icons.clock,
        index: '03'
    },
    {
        title: 'ISO 9001:2015 Systems',
        desc: 'A certified QMS with full material traceability, PPAP documentation and batch-wise test certificates on demand.',
        icon: icons.shieldCheck,
        index: '04'
    },
    {
        title: 'Export-Ready Logistics',
        desc: 'VCI-protected packaging, third-party inspection and FOB / CIF / DDP shipping to 18+ countries.',
        icon: icons.plane,
        index: '05'
    },
    {
        title: 'Total Confidentiality',
        desc: 'NDA-protected handling of your proprietary drawings, samples and custom-developed components.',
        icon: icons.lock,
        index: '06'
    },
];

const HomeWhyUs = () => {
    const HeroIcon = WHY[0]!.icon;
    const FooterIcon = WHY[5]!.icon;

    return (
        <Section className="relative bg-[#f4f5f7] overflow-hidden">
            <BackgroundNoise />

            <Container className="relative z-10">
                <div className="mb-16">
                    <Fade>
                        <EyeBrowSimple>why choose us</EyeBrowSimple>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mb-4 text-[#1a2845] mt-4">
                            The Super Brass Advantage
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Delivering precision at scale with zero compromises. Here is why industry leaders trust us with their most critical components.
                        </p>
                    </Fade>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 mb-4 lg:mb-6">

                    {/* Hero Feature: OEM Factory-Direct (Tall Card) */}
                    <Fade delay={0.1} className="md:col-span-1 md:row-span-2">
                        <div className="group relative h-full flex flex-col p-8 lg:p-10 rounded-3xl bg-[#1a2845] text-white overflow-hidden transition-all duration-500 hover:shadow-xl">
                            {/* Large Background Number */}
                            <span className="absolute -top-10 -right-4 text-[150px] font-bold text-white/5 leading-none select-none pointer-events-none">
                                {WHY[0]!.index}
                            </span>

                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-auto text-white group-hover:scale-110 transition-transform duration-500">
                                <HeroIcon className="w-8 h-8" />
                            </div>

                            <div className="mt-12 relative z-10">
                                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">{WHY[0]!.title}</h3>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    {WHY[0]!.desc}
                                </p>
                            </div>
                        </div>
                    </Fade>

                    {/* Grid of 4 Standard Features */}
                    {WHY.slice(1, 5).map((feature, i) => (
                        <Fade key={feature.title} delay={0.2 + (i * 0.1)} className="md:col-span-1">
                            <div className="group relative h-full flex flex-col p-8 lg:p-10 rounded-3xl border border-border/60 bg-white hover:border-primary/30 transition-all duration-500 hover:shadow-md overflow-hidden">
                                {/* Subtle Background Number */}
                                <span className="absolute top-6 right-6 text-4xl font-bold text-muted-foreground/10 select-none pointer-events-none">
                                    {feature.index}
                                </span>

                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-7 h-7" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold mb-3 tracking-tight text-[#1a2845]">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* Bottom Banner Feature: Total Confidentiality */}
                <Fade delay={0.6}>
                    <div className="group relative flex flex-col md:flex-row items-center gap-8 p-8 lg:p-10 rounded-3xl border border-border/60 bg-white hover:border-primary/30 transition-all duration-500 hover:shadow-md overflow-hidden">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                            <FooterIcon className="w-8 h-8" />
                        </div>

                        <div className="relative z-10 flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-semibold mb-2 tracking-tight text-[#1a2845]">{WHY[5]!.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                {WHY[5]!.desc}
                            </p>
                        </div>

                        {/* Subtle Background Number */}
                        <span className="hidden md:block absolute top-1/2 -translate-y-1/2 right-12 text-[100px] font-bold text-muted-foreground/5 select-none pointer-events-none">
                            {WHY[5]!.index}
                        </span>
                    </div>
                </Fade>

            </Container>
        </Section>
    );
};

export default HomeWhyUs;
