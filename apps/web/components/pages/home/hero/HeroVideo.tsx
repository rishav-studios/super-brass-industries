"use client"

import { cn } from "@super/ui/lib/utils";
import { Easing, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const EASE: Easing = [0.22, 1, 0.36, 1];

type HeroVideoProps = {
    className?: string
}

const HeroVideo = ({ className }: HeroVideoProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "start start"]
    })
    const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"])
    const borderRadius = useTransform(scrollYProgress, [0, 1], [16, 0])
    return (
        <>
            <motion.div
                className={cn("absolute inset-0", className)}
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease: EASE }}
            >
                <video
                    className="h-full w-full object-cover"
                    src="https://asteroidmetal.com/videos/video1Officialmuted.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    data-testid="hero-video"
                />
            </motion.div>
            <div className="absolute inset-0 bg-primary/80 w-full h-full" />
            {/* <div className="absolute inset-0 bg-linear-to-t from-[#1a2845] via-transparent to-[#1a2845]/70" />
            <div className="absolute inset-0 grid-pattern-dark opacity-40" /> */}
        </>
    )
}

export default HeroVideo