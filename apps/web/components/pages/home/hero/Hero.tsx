"use client"

import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { EyeBrow } from "@/components/shared/SectionHeader";
import { icons } from "@super/ui";
import { Easing } from "motion";
import { motion } from "motion/react";
import HeroVideo from "./HeroVideo";

const EASE: Easing = [0.25, 0.1, 0.25, 0.95];

const Hero = () => {
    return (
        <Section className="p-0! w-full overflow-hidden">
            <HeroVideo />
            <PageHeader className="relative z-100" style={{ backgroundColor: "#fff", color: "#000" }} />
            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center pt-32 pb-10">
                <div className="max-w-4xl flex flex-col items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <EyeBrow>ISO 9001:2015 Certified • Jamnagar, India</EyeBrow>

                    </motion.div>

                    <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-tight text-white leading-[0.98]">
                        <span className="block overflow-hidden">
                            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: EASE }}>
                                Precision Brass
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.32, ease: EASE }}>
                                Components,
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.44, ease: EASE }}>
                                <span className="relative inline-block italic">
                                    Engineered
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-1 bg-white"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
                                    />
                                </span>{' '}
                                for
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden">
                            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.56, ease: EASE }}>
                                Global OEMs
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-7 text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto"
                    >
                        From auto parts to electrical pins — Super Brass Industries manufactures 10M+ precision brass components a year for manufacturers across 18+ countries. Your drawing, our craftsmanship.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95 }}
                        className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <CustomLink variant="button-white">
                            Request a Quote
                            <Arrow variant="primary" />
                        </CustomLink>
                        <CustomLink variant="outline-white" className="text-white" >
                            Explore Categories
                        </CustomLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
                    >
                        {['24-hr Quote Response', '±0.005 mm Tolerance', '100% Inspected Batches'].map((t) => (
                            <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                                <icons.checkCircle2 className="h-4 w-4 text-white" /> {t}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom stat strip */}
            <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }}
                className="relative border-t border-white/10 bg-[#16223b]/70 backdrop-blur"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4">
                    {[
                        { v: '10M+', l: 'Components / Year' },
                        { v: '18+', l: 'Export Countries' },
                        { v: '±0.005', l: 'mm Tolerance' },
                        { v: '24 hrs', l: 'Quote Turnaround' },
                    ].map((s, i) => (
                        <div key={s.l} className={`py-5 px-5 flex items-baseline gap-3 ${i !== 0 ? 'lg:border-l border-white/10' : ''}`}>
                            <span className="font-heading text-2xl font-bold text-white">{s.v}</span>
                            <span className="text-[11px] uppercase tracking-[0.15em] text-slate-400">{s.l}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    <icons.arrowDown className="h-4 w-4 text-white/50" />
                </motion.div>
            </motion.div>

        </Section >
    )
}

const HeroHeading = () => {
    return (
        <h1 className="text-5xl md:text-6xl font-bold">
            From raw<span className="text-primary">&nbsp;materials</span> <br /> to finished&nbsp;products.
        </h1>
    )
}
const HeroDescription = () => {
    return (
        <p className="text-muted max-w-lg">
            Swastik Brass Components engineers high-performance brass parts for the world's most demanding industries — from aerospace to heavy rail.
        </p>
    )
}


export default Hero

