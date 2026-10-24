"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { CATEGORIES, Category } from "@/constants/categories";
import { CATEGORY_DETAILS, DetailedCategory } from "@/constants/category-details";
import {
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Layers,
} from "lucide-react";
import { cn } from "@super/ui/lib/utils";

interface CategoryCardProps {
    category: Category;
    details?: DetailedCategory;
    index: number;
    total: number;
}

function CategoryCard({
    category,
    details,
    index,
    total,
}: CategoryCardProps) {
    return (
        <div
            className="sticky top-24 sm:top-28 transition-transform"
            style={{ zIndex: index + 1 }}
        >
            <div
                className={cn(
                    "relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden",
                    "shadow-[0_20px_50px_-15px_rgba(26,40,69,0.18)]"
                )}
            >
                {/* Brand Primary Header Accent */}
                <div className="h-1.5 w-full bg-[#1a2845]" />

                {/* Card Container */}
                <div className="p-5 sm:p-7 lg:p-8">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a2845] text-white text-xs font-bold uppercase tracking-wider">
                                Category {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:inline-block">
                                {details?.eyebrow || "Precision Machined Component"}
                            </span>
                        </div>

                        {details?.capabilities?.tolerance && (
                            <span className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                                <Sparkles className="w-3.5 h-3.5 text-[#1a2845]" />
                                {details.capabilities.tolerance}
                            </span>
                        )}
                    </div>

                    {/* Main Content Grid: Image + Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                        
                        {/* Left: Image Showcase */}
                        <div className="lg:col-span-5 relative group">
                            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-square w-full max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 420px"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    priority={index < 2}
                                />

                                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[10px] font-semibold">
                                    <span className="inline-flex items-center gap-1 bg-[#1a2845]/90 backdrop-blur-xs px-2.5 py-1 rounded">
                                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                                        100% Inspected
                                    </span>
                                    <span className="bg-[#1a2845]/90 backdrop-blur-xs px-2.5 py-1 rounded">
                                        ISO 9001:2015
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Details & Actions */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1a2845] leading-tight">
                                {category.title}
                            </h2>

                            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                                {details?.heroDescription || category.description}
                            </p>

                            {/* 3 Key Engineering Badges */}
                            {details && (
                                <div className="grid grid-cols-3 gap-2.5 mt-4">
                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                            Material
                                        </span>
                                        <span className="block text-xs sm:text-sm font-bold text-[#1a2845] mt-0.5 truncate">
                                            {details.keyAttributes[0]?.value || "IS 319 / CW614N"}
                                        </span>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                            Threads
                                        </span>
                                        <span className="block text-xs sm:text-sm font-bold text-[#1a2845] mt-0.5 truncate">
                                            {details.keyAttributes[1]?.value || "ISO Metric / UNC"}
                                        </span>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                        <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                            Capacity
                                        </span>
                                        <span className="block text-xs sm:text-sm font-bold text-[#1a2845] mt-0.5 truncate">
                                            {details.capabilities?.monthlyCapacity || "3M+ Units/Mo"}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Available Configurations Chips */}
                            {details?.variants && (
                                <div className="mt-4 hidden sm:block">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                                        Manufactured Configurations:
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {details.variants.slice(0, 5).map((v, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
                                            >
                                                {v}
                                            </span>
                                        ))}
                                        {details.variants.length > 5 && (
                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold text-[#1a2845]">
                                                +{details.variants.length - 5} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Action CTA Buttons */}
                            <div className="flex flex-wrap items-center gap-3.5 mt-5 pt-4 border-t border-slate-100">
                                <CustomLink
                                    href={`/categories/${category.slug}`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1a2845] hover:bg-[#121c31] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-[0.98]"
                                >
                                    <span>Explore Full Specifications & Table</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                                </CustomLink>

                                <CustomLink
                                    href={`/quote?category=${encodeURIComponent(category.title)}`}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 transition-colors"
                                >
                                    <span>Request Quote</span>
                                </CustomLink>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CategoryCardStack() {
    const total = CATEGORIES.length;

    return (
        <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
            {/* Section Header */}
            <Container className="mb-10 sm:mb-14">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                        <Layers className="w-3.5 h-3.5" />
                        Precision Portfolio
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2845] tracking-tight">
                        Explore All 8 Product Categories
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                        Scroll through our precision brass product portfolio. As you scroll, each category stacks naturally into place. Select any category to view full dimensional tables and engineering specifications.
                    </p>
                </div>
            </Container>

            {/* Stacked Cards Container in Natural Document Flow */}
            <Container>
                <div className="flex flex-col gap-12 sm:gap-20 pb-16">
                    {CATEGORIES.map((cat, index) => {
                        const details = CATEGORY_DETAILS[cat.slug];
                        return (
                            <CategoryCard
                                key={cat.slug}
                                category={cat}
                                details={details}
                                index={index}
                                total={total}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
