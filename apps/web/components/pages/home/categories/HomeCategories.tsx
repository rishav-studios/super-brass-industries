"use client";

import Container from "@/components/layout/Container";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { CATEGORIES, Category } from "@/constants/categories";
import { icons } from "@super/ui";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HomeCategories = () => {
    const wrapRef = useRef(null);
    const [cardVw, setCardVw] = useState(33.3333);

    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            setCardVw(w < 640 ? 84 : w < 1024 ? 50 : 33.3333);
        };
        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    const distance = Math.max(0, CATEGORIES.length * cardVw - 86);

    const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
    const x = useTransform(scrollYProgress, [0, 1], ['5%', `-${distance}vw`]);

    // Derive current card index from scroll progress for the counter
    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, CATEGORIES.length]);

    return (
        <section ref={wrapRef} style={{ minHeight: `${100 + distance * 1.1}vh` }} className="bg-[#f4f5f7] pb-24" data-testid="categories-section">
            <div className="sticky top-0 h-screen w-full overflow-hidden  flex flex-col">



                {/* Header */}
                <Container className="relative mt-24 lg:mt-24">
                    <div className="">

                        <EyeBrowSimple>Our Product Range</EyeBrowSimple>
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] max-w-xl leading-[1.12]">
                            Many categories. One quality standard.
                        </h2>

                    </div>
                    <div className="absolute w-full max-w-1/2 inset-0 top-1/2 translate-x-full">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-0.75 w-full bg-slate-200 rounded-full overflow-hidden">
                                <motion.div className="h-full bg-[#1a2845] rounded-full origin-left" style={{ scaleX: scrollYProgress }} />
                            </div>
                            <div className="flex items-baseline gap-1 shrink-0 tabular-nums">
                                <motion.span className="text-sm font-bold text-[#1a2845]">
                                    {/* Render as rounded integer */}
                                    <CounterDisplay value={currentIndex} />
                                </motion.span>
                                <span className="text-xs text-slate-400 font-medium">
                                    / {String(CATEGORIES.length).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* Track */}
                <div className="relative flex-1 flex items-center overflow-hidden mt-4">
                    <motion.div className="flex gap-4 will-change-transform" style={{ x }}>
                        {CATEGORIES.map((cat: Category, i) => (
                            <div key={cat.slug} style={{ width: `${cardVw}vw` }} className="shrink-0 ">
                                <Link
                                    href={`/components/${cat.slug}`}
                                    className="group flex flex-col bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-[#1a2845]/40 hover:shadow-xl transition-all duration-300"
                                    data-testid={`category-card-${cat.slug}`}
                                >
                                    <div className="relative h-72 min-h-50 overflow-hidden rounded-t-xl">
                                        <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
                                        <div className="absolute inset-0 bg-transparent" />
                                        <span className="absolute top-4 left-4 bg-muted backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-[0.15em] text-[#1a2845]">
                                            {String(i + 1).padStart(2, '0')} / {String(CATEGORIES.length).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-heading text-lg font-bold text-[#1a2845]">{cat.title}</h3>
                                        <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">{cat.description}</p>
                                        <span className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-[#1a2845] group-hover:text-primary transition-colors">
                                            View Details <icons.arrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>


            </div>
        </section>
    );
}

/** Displays a MotionValue as a zero-padded integer (01, 02, …) */
function CounterDisplay({ value }: { value: MotionValue<number> }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const unsubscribe = value.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = String(Math.round(latest)).padStart(2, '0');
            }
        });
        return unsubscribe;
    }, [value]);

    return <span ref={ref}>01</span>;
}

export default HomeCategories
