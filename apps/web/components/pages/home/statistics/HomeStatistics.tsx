"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "motion/react";
import Section from "@/components/layout/Section";

const STATS = [
    { value: 25, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Countries Exported To" },
    { value: 50, suffix: "+", label: "Advanced CNC Machines" },
    { value: 1, suffix: "M+", label: "Parts Manufactured" },
];

const NumberTicker = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    // Trigger when 50% of the element is in view
    const inView = useInView(ref, { once: true, amount: 0.5 }); 
    const spring = useSpring(0, { bounce: 0, duration: 2500 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    useEffect(() => {
        return spring.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
            }
        });
    }, [spring]);

    return <span ref={ref}>0</span>;
};

const HomeStatistics = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    
    // Tracks vertical scroll progress within this 300vh tall section
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Translate the content horizontally based on scroll progress
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <Section className="relative bg-foreground text-background p-0 h-[300vh]" ref={targetRef}>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex h-full">
                    {STATS.map((stat, index) => (
                        <div key={index} className="w-screen h-full flex flex-col items-center justify-center shrink-0">
                            <div className="flex items-baseline font-bold text-[clamp(6rem,18vw,25rem)] leading-none text-primary">
                                <NumberTicker value={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-medium mt-8 text-background/80 tracking-tight">
                                {stat.label}
                            </h3>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default HomeStatistics;
