"use client";

import Container from "@/components/layout/Container";
import { DetailedCategory } from "@/constants/category-details";
import {
    Check,
    CheckCircle2,
    Cpu,
    FileCheck2,
    Layers,
    Maximize2,
    Palette,
    Wrench,
} from "lucide-react";

interface CategorySpecsMatrixProps {
    category: DetailedCategory;
}

export default function CategorySpecsMatrix({ category }: CategorySpecsMatrixProps) {
    const specs = category.specifications;

    const specCards = [
        {
            icon: Cpu,
            title: "Material Specification",
            subtitle: "European & International Grade Brass Alloys",
            items: specs.materials,
            accent: "border-l-amber-500",
            iconBg: "bg-amber-50 text-amber-600",
        },
        {
            icon: Wrench,
            title: "Thread Standards & Formats",
            subtitle: "Conforming to Go & Not-Go Class Standards",
            items: specs.threads,
            accent: "border-l-blue-500",
            iconBg: "bg-blue-50 text-blue-600",
        },
        {
            icon: Maximize2,
            title: "Size & Dimensional Range",
            subtitle: "Micro Turned to Heavy Industrial Envelopes",
            items: specs.sizes,
            accent: "border-l-indigo-500",
            iconBg: "bg-indigo-50 text-indigo-600",
        },
        {
            icon: Palette,
            title: "Finish & Surface Coatings",
            subtitle: "Anti-Corrosion, Conductive & Decorative Platings",
            items: specs.finishes,
            accent: "border-l-emerald-500",
            iconBg: "bg-emerald-50 text-emerald-600",
        },
        {
            icon: Layers,
            title: "Typical Industry Applications",
            subtitle: "Global Assemblies & Critical Host Materials",
            items: specs.applications,
            accent: "border-l-cyan-500",
            iconBg: "bg-cyan-50 text-cyan-600",
        },
    ];

    return (
        <section className="relative bg-[#f8fafc] py-16 lg:py-24 border-y border-slate-200/80">
            <Container>
                {/* Section Heading */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        Engineering Specifications
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2845] mt-2 tracking-tight">
                        Standard & Custom Technical Specifications
                    </h2>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                        Every component is precision manufactured in our Jamnagar facility under strict ISO 9001:2015 quality control, adhering to ASTM, DIN, BS, and IS international standards.
                    </p>
                </div>

                {/* Key Engineering Features Strip */}
                <div className="mb-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-[#1a2845] mb-4 flex items-center gap-2">
                        <FileCheck2 className="w-5 h-5 text-amber-500" />
                        Key Design & Quality Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {category.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                </span>
                                <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                                    {feat}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid of Specification Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${card.accent} flex flex-col`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-base font-bold text-[#1a2845]">
                                            {card.title}
                                        </h3>
                                        <p className="text-[11px] text-slate-400 font-medium">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-2 flex-1">
                                    {card.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-snug">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}

                    {/* 6th Card: Quality Assurance & Certification Card */}
                    <div className="rounded-2xl bg-linear-to-br from-[#1a2845] to-[#121c31] text-white p-6 shadow-md border-l-4 border-l-amber-400 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-base font-bold text-white">
                                        Quality Assurance
                                    </h3>
                                    <p className="text-[11px] text-slate-300 font-medium">
                                        Zero Defect Manufacturing
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-2.5 text-xs text-slate-200">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                    <span>EN 10204 Type 3.1 Material Test Reports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                    <span>Optical Profile Projector & 2D CMM Validation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                    <span>RoHS & REACH XRF Spectrometer Chemical Screening</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                    <span>Salt Spray Testing (ASTM B117) up to 96+ Hours</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                    <span>PPAP Level 3 & Control Plans for Global Automotive OEMs</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                                Jamnagar QC Lab
                            </span>
                            <span className="text-[11px] text-slate-400">
                                100% Pre-Shipment Inspection
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
