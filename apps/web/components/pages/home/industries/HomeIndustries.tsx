"use client"

import Container from "@/components/layout/Container";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { AnimatePresence, Easing, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export const INDUSTRIES = [
    { name: 'Automotive', icon: 'Car', desc: 'Fuel systems, braking, sensors and engine components for OEMs and Tier-1s.', video: 'https://assets.mixkit.co/videos/35540/35540-720.mp4' },
    { name: 'Electrical & Electronics', icon: 'Zap', desc: 'Pins, terminals, contacts and connectors for switchgear and appliances.', video: 'https://assets.mixkit.co/videos/46965/46965-720.mp4' },
    { name: 'Gas & Energy', icon: 'Flame', desc: 'Safety-critical valves, nozzles and regulator parts for LPG and CNG.', video: 'https://assets.mixkit.co/videos/4380/4380-720.mp4' },
    { name: 'Plumbing & Sanitary', icon: 'Droplets', desc: 'Leak-proof fittings, inserts and valve components for water systems.', video: 'https://assets.mixkit.co/videos/47071/47071-720.mp4' },
    { name: 'Marine', icon: 'Radio', desc: 'Precision connector bodies and RF hardware components.', video: 'https://assets.mixkit.co/videos/11937/11937-720.mp4' },
    { name: 'Construction', icon: 'Building2', desc: 'Architectural hardware, anchors and fastening solutions.', video: 'https://assets.mixkit.co/videos/40723/40723-720.mp4' },
    { name: 'Agriculture', icon: 'Tractor', desc: 'Sprayer nozzles, irrigation fittings and pump components.', video: 'https://assets.mixkit.co/videos/10015/10015-720.mp4' },
    { name: 'Railways', icon: 'Shield', desc: 'High-reliability components manufactured to strict specifications.', video: 'https://assets.mixkit.co/videos/28181/28181-720.mp4' },
    { name: 'Defence', icon: 'Shield', desc: 'High-reliability components manufactured to strict specifications.', video: 'https://assets.mixkit.co/videos/22181/22181-720.mp4' },
    { name: 'Aerospace', icon: 'Shield', desc: 'High-reliability components manufactured to strict specifications.', video: 'https://assets.mixkit.co/videos/7034/7034-720.mp4' },
];

const EASE: Easing = [0.25, 0.1, 0.25, 0.95];

const HomeIndustries = () => {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const idx = Math.max(0, Math.min(INDUSTRIES.length - 1, Math.floor(v * INDUSTRIES.length)));
        setActive(idx);
    });

    const ind = INDUSTRIES[active];

    return (
        <section ref={sectionRef} className="relative" style={{ height: `${INDUSTRIES.length * 65}vh` }} data-testid="industries-section">
            <div className="sticky top-0 h-screen overflow-hidden bg-[#1a2845]">
                {/* Background video crossfade */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={active}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                    >
                        <video
                            src={ind!.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="h-full w-full object-cover"
                            data-testid="industry-video"
                        />
                        {/* <div className="absolute inset-0 bg-[#1a2845]/60" /> */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Content overlay */}
                <Container className="relative h-full flex flex-col justify-between py-24 lg:py-28">
                    <div className="flex items-center justify-between">
                        <div className="">

                            <EyeBrowSimple light>Industries</EyeBrowSimple>
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-xl leading-[1.12]">
                                Industries we serve
                            </h2>

                        </div>
                        <div className="font-heading text-sm font-bold text-white/70 tracking-[0.2em]">
                            {String(active + 1).padStart(2, '0')} / {String(INDUSTRIES.length).padStart(2, '0')}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                        {/* Index list */}
                        <div className="hidden lg:block lg:col-span-4">
                            <ul className="space-y-2.5">
                                {INDUSTRIES.map((it, i) => (
                                    <li key={it.name} className="flex items-center gap-3">
                                        <span
                                            className={`h-px transition-all duration-500 ${i === active ? 'w-10 bg-white' : 'w-4 bg-white/25'}`}
                                        />
                                        <span
                                            className={`font-heading text-sm uppercase tracking-[0.15em] transition-all duration-500 ${i === active ? 'text-white font-bold' : 'text-white/35'
                                                }`}
                                        >
                                            {it.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Active industry card */}
                        <div className="lg:col-span-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -24 }}
                                    transition={{ duration: 0.5, ease: EASE }}
                                    data-testid="industry-active-card"
                                >
                                    <span className="font-heading text-7xl lg:text-8xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}>
                                        {String(active + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-2 font-heading text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.02]">
                                        {ind!.name}
                                    </h3>
                                    <p className="mt-4 max-w-xl text-slate-300 text-base lg:text-lg leading-relaxed">{ind!.desc}</p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress segments */}
                            <div className="mt-8 flex gap-1.5">
                                {INDUSTRIES.map((_, i) => (
                                    <div key={i} className="h-0.75 flex-1 bg-white/15 overflow-hidden">
                                        <div
                                            className={`h-full bg-white transition-all duration-500 ${i <= active ? 'w-full' : 'w-0'}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};
export default HomeIndustries;