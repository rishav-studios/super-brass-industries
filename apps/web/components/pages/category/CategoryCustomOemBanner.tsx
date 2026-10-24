"use client";

import Container from "@/components/layout/Container";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { ArrowRight, CheckCircle2, Clock, FileCode, ShieldCheck } from "lucide-react";

interface CategoryCustomOemBannerProps {
    categoryShortTitle: string;
}

export default function CategoryCustomOemBanner({
    categoryShortTitle,
}: CategoryCustomOemBannerProps) {
    return (
        <section className="relative bg-[#1a2845] text-white py-10 lg:py-12 overflow-hidden border-t border-slate-800">
            <Container className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Left: Punchy Callout */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                            <FileCode className="w-3.5 h-3.5" />
                            <span>Custom CAD / OEM Engineering</span>
                        </div>

                        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                            Need a Custom Dimension or Special Tolerance?
                        </h2>

                        <p className="mt-1.5 text-slate-300 text-xs sm:text-sm font-normal">
                            Send us your 2D drawing (.PDF) or 3D CAD model (.STEP / .IGES). Our Jamnagar engineering team provides a complete DFM review and quotation within 24 hours.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-300">
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-slate-300" />
                                24-Hour Quote SLA
                            </span>
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
                                100% Confidential NDA
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                                500 to 1M+ Batch Scale
                            </span>
                        </div>
                    </div>

                    {/* Right: Clean White CTA Button */}
                    <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <CustomLink
                            href={`/quote?category=${encodeURIComponent(categoryShortTitle)}&action=custom-drawing`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#1a2845] font-bold text-xs sm:text-sm shadow-md transition-all duration-200 active:scale-[0.98]"
                        >
                            <span>Send CAD Drawing</span>
                            <ArrowRight className="w-4 h-4 text-[#1a2845]" />
                        </CustomLink>
                    </div>

                </div>
            </Container>
        </section>
    );
}
