"use client";

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Eyebrow } from "@/components/shared/SectionHeader"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@super/ui/components/shadcn/carousel"
import Image from "next/image"

const CATEGORIES = [
    {
        title: "Brass Male Female Parts",
        image: "/about-parts.png", 
        description: "Precision-engineered male and female threaded parts."
    },
    {
        title: "Brass Screws",
        image: "/materials-steel.png", 
        description: "High-strength brass screws for reliable fastening."
    },
    {
        title: "Brass Inserts",
        image: "/materials-brass.png", 
        description: "Durable brass inserts for plastic and wood molding."
    },
    {
        title: "Brass Turned Components",
        image: "/materials-aluminium.png", 
        description: "Custom turned components crafted to tight tolerances."
    },
    {
        title: "Brass Fasteners",
        image: "/sectors/aerospace.png", 
        description: "A wide variety of standard and custom brass fasteners."
    },
    {
        title: "Brass Electrical Accessories",
        image: "/sectors/railway.png", 
        description: "Conductive brass components for electrical applications."
    },
    {
        title: "Brass Fittings",
        image: "/sectors/oil-gas.png", 
        description: "Leak-proof brass fittings for plumbing and gas lines."
    },
    {
        title: "Brass Automotive Parts",
        image: "/sectors/automobile.png", 
        description: "High-performance brass parts for the automotive industry."
    },
]

const HomeCategories = () => {
    return (
        <Section className="bg-background py-24 lg:py-32 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <Fade>
                        <Eyebrow className="ml-0 mb-6">Categories</Eyebrow>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                            Categories We Serve
                        </h2>
                    </Fade>
                    <Fade delay={0.2}>
                        <p className="text-muted-foreground max-w-sm text-lg">
                            Discover our wide range of precision brass components engineered for global industries.
                        </p>
                    </Fade>
                </div>

                <Fade delay={0.3} className="w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {CATEGORIES.map((category, index) => {
                                return (
                                    <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                                        <div className="group relative h-[450px] w-full flex flex-col justify-end p-8 rounded-2xl overflow-hidden cursor-pointer">
                                            <Image 
                                                src={category.image} 
                                                alt={category.title} 
                                                fill 
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay for Text Readability */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                                            
                                            <div className="relative z-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                                                    {category.title}
                                                </h3>
                                                <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <div className="flex justify-end gap-4 mt-8">
                            <CarouselPrevious className="position-static transform-none h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
                            <CarouselNext className="position-static transform-none h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
                        </div>
                    </Carousel>
                </Fade>
            </Container>
        </Section>
    )
}

export default HomeCategories
