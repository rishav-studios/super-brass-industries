"use client";

import Container from "@/components/layout/Container";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { DetailedCategory } from "@/constants/category-details";
import {
    ArrowRight,
    Check,
    PhoneCall,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface CategoryHeroShowcaseProps {
    category: DetailedCategory;
}

export default function CategoryHeroShowcase({ category }: CategoryHeroShowcaseProps) {
    const specs = category.specifications;

    // Crisp, structured tabular key-value specifications
    const tableSpecs = [
        {
            label: "Material Specification",
            value: specs.materials.slice(0, 3).join(", ") + (specs.materials.length > 3 ? ", or custom alloy" : ""),
        },
        {
            label: "Thread Standards",
            value: specs.threads.slice(0, 3).join(", ") + (specs.threads.length > 3 ? ", custom pitches" : ""),
        },
        {
            label: "Size & Dimensions",
            value: specs.sizes[0] || "Custom size as per drawing",
        },
        {
            label: "Finish & Coating",
            value: specs.finishes.slice(0, 4).join(", "),
        },
        {
            label: "Machining Tolerance",
            value: `${category.capabilities.tolerance} • International Go & No-Go Standards`,
        },
        {
            label: "Typical Applications",
            value: specs.applications.slice(0, 3).join(", "),
        },
    ];

    return (
        <section className="relative bg-white pt-8 pb-14 lg:pt-12 lg:pb-18">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* LEFT COLUMN: Visual Product Showcase & Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-28"
                    >
                        {/* Image Showcase Card */}
                        <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-sm overflow-hidden">
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200/70 flex items-center justify-center">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 460px"
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />

                                {/* Tolerance Badge */}
                                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                                    <span className="inline-flex items-center gap-1 bg-[#1a2845] text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                                        <Sparkles className="w-3 h-3 text-slate-300" />
                                        {category.capabilities.tolerance}
                                    </span>
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[10px] font-semibold z-10">
                                    <span className="inline-flex items-center gap-1 bg-[#1a2845]/90 backdrop-blur-xs px-2.5 py-1 rounded">
                                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                                        100% Inspected
                                    </span>
                                    <span className="bg-[#1a2845]/90 backdrop-blur-xs px-2.5 py-1 rounded">
                                        ISO 9001:2015
                                    </span>
                                </div>
                            </div>

                            {/* Trust badges strip */}
                            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                                <span className="font-medium text-[11px]">✓ Tested with Go/No-Go</span>
                                <span className="font-medium text-[11px] text-right">Factory Direct Jamnagar</span>
                            </div>
                        </div>

                        {/* Direct CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2.5">
                            <CustomLink
                                href={`/quote?category=${encodeURIComponent(category.shortTitle)}`}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1a2845] hover:bg-[#121c31] text-white font-semibold text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
                            >
                                <span>Request A Quote</span>
                                <ArrowRight className="w-4 h-4 text-white" />
                            </CustomLink>

                            <a
                                href="tel:+918141100249"
                                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors"
                            >
                                <PhoneCall className="w-4 h-4 text-[#1a2845]" />
                                <span>Call Sales</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Crisp Details & Tabular Specifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 flex flex-col"
                    >
                        <EyeBrowSimple>{category.eyebrow}</EyeBrowSimple>

                        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-tight mt-2">
                            {category.title}
                        </h1>

                        <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                            {category.heroDescription}
                        </p>

                        {/* Available Configurations Chips */}
                        <div className="mt-4">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                                Available Configurations:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {category.variants.map((v, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                    >
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tabular Specifications Table */}
                        <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
                            <div className="bg-[#1a2845] px-4 py-2.5 text-white flex items-center justify-between">
                                <span className="font-heading text-xs font-bold uppercase tracking-wider">
                                    Technical Specifications
                                </span>
                                <span className="text-[11px] text-slate-300">
                                    DIN / ISO / BS Standards
                                </span>
                            </div>

                            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                                {tableSpecs.map((spec, idx) => (
                                    <div
                                        key={idx}
                                        className={`grid grid-cols-1 sm:grid-cols-12 py-3 px-4 ${
                                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                                        }`}
                                    >
                                        <div className="sm:col-span-4 font-semibold text-[#1a2845]">
                                            {spec.label}
                                        </div>
                                        <div className="sm:col-span-8 text-slate-600 mt-0.5 sm:mt-0 font-normal">
                                            {spec.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3 Crisp Bullet Points */}
                        <div className="mt-5 space-y-2">
                            {category.features.slice(0, 3).map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                    <span className="w-4 h-4 rounded-full bg-[#1a2845]/10 text-[#1a2845] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 stroke-[2.5]" />
                                    </span>
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>

                        {/* Quick Spec Metrics Footer */}
                        <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                            <div>
                                <span className="block text-[10px] uppercase font-bold text-slate-400">MOQ</span>
                                <span className="font-semibold text-slate-800">{category.capabilities.moq}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase font-bold text-slate-400">Capacity</span>
                                <span className="font-semibold text-slate-800">{category.capabilities.monthlyCapacity}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase font-bold text-slate-400">Lead Time</span>
                                <span className="font-semibold text-slate-800">{category.capabilities.leadTime}</span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
