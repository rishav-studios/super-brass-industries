"use client";

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import BackgroundNoise, { BackgroundLines } from "@/components/shared/BackgroundNoise"
import { Eyebrow } from "@/components/shared/SectionHeader"
import { icons } from "@super/ui"

const HomeWhyUs = () => {
    return (
        <Section className="relative bg-background py-24 lg:py-32 overflow-hidden">
            <BackgroundNoise />
            <BackgroundLines className="w-[90%] mx-auto" />
            
            <Container className="relative z-10">
                <div className="mb-16">
                    <Fade>
                        <Eyebrow className="ml-0 mb-6">Why Choose Us</Eyebrow>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mb-4">
                            The Swastik Advantage
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Delivering precision at scale with zero compromises. Here is why industry leaders trust us with their most critical components.
                        </p>
                    </Fade>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6">
                    
                    {/* Feature 1: Global Quality Standards (Tall Card) */}
                    <Fade delay={0.1} className="md:col-span-1 md:row-span-2">
                        <div className="group relative h-full flex flex-col justify-between p-8 lg:p-10 rounded-3xl border border-border/50 bg-linear-to-b from-card to-background overflow-hidden hover:border-primary/30 transition-colors duration-500">
                            {/* Subtle Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                            
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                                <icons.shieldCheck className="w-8 h-8" />
                            </div>
                            
                            <div className="mt-auto relative z-10">
                                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">Global Quality Standards</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    ISO 9001:2015 certified with a strict zero-defect commitment. We enforce rigorous statistical process control (SPC) on all critical dimensions.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    {/* Feature 2: Infrastructure (Wide Card) */}
                    <Fade delay={0.2} className="md:col-span-2">
                        <div className="group relative h-full flex flex-col sm:flex-row gap-8 p-8 lg:p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/30 transition-colors duration-500 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                            
                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                <icons.factory className="w-8 h-8" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold mb-3 tracking-tight">State-of-the-Art Infrastructure</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                                    Equipped with advanced multi-axis CNC machines and automated optical inspection systems to tackle complex geometries down to the micron level.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    {/* Feature 3: Custom Engineering */}
                    <Fade delay={0.3} className="md:col-span-1">
                        <div className="group relative h-full p-8 lg:p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/30 transition-colors duration-500 overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                                <icons.edit3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 tracking-tight">Custom Engineering & R&D</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Seamlessly taking your designs from rapid prototyping to high-volume mass production.
                            </p>
                        </div>
                    </Fade>

                    {/* Feature 4: Reliable Supply Chain */}
                    <Fade delay={0.4} className="md:col-span-1">
                        <div className="group relative h-full p-8 lg:p-10 rounded-3xl border border-border/50 bg-card hover:border-primary/30 transition-colors duration-500 overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                                <icons.package className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 tracking-tight">Reliable Supply Chain</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Extensive raw material stocking and optimized logistics ensure on-time global delivery.
                            </p>
                        </div>
                    </Fade>

                </div>
            </Container>
        </Section>
    )
}

export default HomeWhyUs
