"use client";

import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const HomeCTA2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Parallax effect for the whole CTA content
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    // Marquee effect based on scroll
    const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const marqueeXReverse = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a] text-white rounded-t-[3rem] -mt-10 z-10 flex flex-col justify-center">
            
            {/* Subtle Gradient Glow in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <motion.div style={{ y }} className="w-full h-full flex flex-col justify-between py-24 lg:py-32 relative z-10">
                
                {/* Top Section: Scrolling Marquees */}
                <div className="w-full flex flex-col gap-2 md:gap-6 mt-10">
                    <motion.div style={{ x: marqueeX }} className="whitespace-nowrap flex">
                        <span className="text-[12vw] font-bold leading-none tracking-tighter text-white/5 uppercase px-4 select-none">
                            LET'S BUILD • PRECISION • AT SCALE • LET'S BUILD • PRECISION • AT SCALE
                        </span>
                    </motion.div>
                    <motion.div style={{ x: marqueeXReverse }} className="whitespace-nowrap flex">
                        <span className="text-[12vw] font-bold leading-none tracking-tighter text-white/5 uppercase px-4 select-none">
                            ENGINEER THE FUTURE • WITH SWASTIK • ENGINEER THE FUTURE • WITH SWASTIK
                        </span>
                    </motion.div>
                </div>

                {/* Bottom Section: Text and Circular Button */}
                <div className="w-full max-w-7xl mx-auto px-6 mt-16 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-16">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
                            Bring your most complex designs to life.
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-md mx-auto md:mx-0">
                            Partner with us for zero-defect precision parts delivered at scale, anywhere in the world.
                        </p>
                    </div>

                    {/* Massive Circular Interactive CTA Button */}
                    <div className="relative group shrink-0">
                        <CustomLink href="/contact" className="relative flex items-center justify-center w-48 h-48 lg:w-64 lg:h-64 bg-white text-[#0a0a0a] rounded-full transition-all duration-500 hover:scale-95 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
                            <span className="text-2xl lg:text-3xl font-semibold z-10 tracking-tight">Get a Quote</span>
                            <div className="absolute inset-2 rounded-full border border-[#0a0a0a]/10 scale-100 group-hover:scale-90 transition-transform duration-500 pointer-events-none" />
                        </CustomLink>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default HomeCTA2;