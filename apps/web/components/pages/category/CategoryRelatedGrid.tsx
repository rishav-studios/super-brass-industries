"use client";

import Container from "@/components/layout/Container";
import { Link } from "@/i18n/navigation";
import { CATEGORIES, Category } from "@/constants/categories";
import { ArrowRight, Layers } from "lucide-react";
import Image from "next/image";

interface CategoryRelatedGridProps {
    currentSlug: string;
}

export default function CategoryRelatedGrid({ currentSlug }: CategoryRelatedGridProps) {
    const relatedCategories = CATEGORIES.filter((cat) => cat.slug !== currentSlug);

    return (
        <section className="relative bg-slate-50/70 py-14 sm:py-18 lg:py-20 border-t border-slate-200/80">
            <Container>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Product Portfolio</span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a2845] tracking-tight">
                            Explore Other Categories
                        </h2>
                    </div>

                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-[#1a2845] transition-colors"
                    >
                        <span>View All 8 Categories</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Vertical Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {relatedCategories.map((cat: Category, index: number) => (
                        <Link
                            key={cat.slug}
                            href={`/categories/${cat.slug}`}
                            className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#1a2845]/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Card Image: Top of Card */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                                />
                                <span className="absolute top-3 left-3 bg-[#1a2845]/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* Card Content: Vertically Below Image */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-heading text-base font-bold text-[#1a2845] group-hover:text-primary transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1 font-normal">
                                    {cat.description}
                                </p>
                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-[#1a2845] transition-colors inline-flex items-center gap-1">
                                        Explore Specs
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
