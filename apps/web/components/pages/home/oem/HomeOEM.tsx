"use client"

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import BackgroundNoise from "@/components/shared/BackgroundNoise"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import { EyeBrow } from "@/components/shared/SectionHeader"
import { icons } from "@super/ui"
import { Easing } from "motion"
import { motion } from "motion/react"

const EASE: Easing = [0.25, 0.1, 0.25, 0.95]

const FEATURES = [
    {
        icon: icons.route,
        title: "Drawing-to-Delivery",
        description:
            "Send a 2D drawing, 3D model or sample — we handle tooling, production, finishing and export packing.",
    },
    {
        icon: icons.layers2,
        title: "In-house Everything",
        description:
            "CNC turning, traub machining, threading, knurling and inspection under one roof.",
    },
    {
        icon: icons.lock,
        title: "NDA-Protected Development",
        description:
            "Your designs stay confidential. We routinely work under NDAs with global OEMs.",
    },
]

const STATS = [
    { value: "±0.005", label: "MM Tolerance Capability" },
    { value: "24 hrs", label: "Quotation Turnaround" },
]

const HomeOEM = () => {
    return (
        <Section className="relative bg-primary overflow-hidden">
            <BackgroundNoise className="opacity-[0.03]" />

            <Container className="relative z-10">
                {/* ── Top: EyeBrow + Heading + Paragraph ── */}
                <div className="max-w-3xl mb-16 lg:mb-20">
                    <Fade>
                        <EyeBrow>Direct From The Source</EyeBrow>
                    </Fade>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl flex flex-col font-bold tracking-tight text-white leading-[1.05]">

                        <motion.span
                            className="block"
                            initial={{ y: "110%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                        >
                            We are
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ y: "110%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
                        >
                            OEM Manufacturers.
                        </motion.span>
                    </h2>

                    <Fade delay={0.5}>
                        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            When you work with Super Brass Industries, you work directly with the factory floor. No middlemen, no markups — just precision engineering, complete transparency, and total confidentiality for your proprietary parts.
                        </p>
                    </Fade>
                </div>

                {/* ── Middle: 3 Feature Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16 lg:mb-20">
                    {FEATURES.map((feature, i) => (
                        <Fade key={feature.title} delay={0.1 + i * 0.1}>
                            <div className="group relative flex flex-col gap-5 p-7 lg:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 transition-colors duration-500">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-[15px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* ── Bottom: Stat Strip + CTA ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-8 border-t border-white/10">
                    {/* Stats */}
                    <Fade>
                        <div className="flex items-center gap-8 lg:gap-12">
                            {STATS.map((stat, i) => (
                                <div key={stat.label} className={`flex items-baseline gap-3 ${i !== 0 ? "pl-8 lg:pl-12 border-l border-white/15" : ""}`}>
                                    <span className="text-2xl sm:text-3xl font-bold text-white">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Fade>

                    {/* CTA */}
                    <Fade delay={0.3}>
                        <CustomLink variant="button-white" href="/quote">
                            Get a Free Quote
                            <Arrow variant="primary" />
                        </CustomLink>
                    </Fade>
                </div>
            </Container>
        </Section >
    )
}

export default HomeOEM
