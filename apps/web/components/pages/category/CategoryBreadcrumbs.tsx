"use client";

import Container from "@/components/layout/Container";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { CATEGORIES } from "@/constants/categories";
import { cn } from "@super/ui/lib/utils";
import { ChevronRight, Home, Layers } from "lucide-react";

interface CategoryBreadcrumbsProps {
    currentSlug: string;
    currentTitle: string;
}

export default function CategoryBreadcrumbs({ currentSlug, currentTitle }: CategoryBreadcrumbsProps) {
    return (
        <div className="w-full bg-[#f8fafc] border-b border-slate-200/80 pt-28 pb-4 md:pt-32">
            <Container>
                {/* Breadcrumbs Row */}
                <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-slate-500 mb-4">
                    <CustomLink
                        href="/"
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-primary font-medium transition-colors"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </CustomLink>

                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                    <CustomLink
                        href="/categories"
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-primary font-medium transition-colors"
                    >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Categories</span>
                    </CustomLink>

                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                    <span className="font-semibold text-primary truncate max-w-60 sm:max-w-none">
                        {currentTitle}
                    </span>
                </nav>

                {/* Quick-Switch Pill Bar for all 8 categories */}
                <div className="relative">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar py-1">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 shrink-0 mr-1 hidden sm:inline-block">
                            Browse Categories:
                        </span>
                        {CATEGORIES.map((cat) => {
                            const isActive = cat.slug === currentSlug;
                            return (
                                <CustomLink
                                    key={cat.slug}
                                    href={`/categories/${cat.slug}`}
                                    className={cn(
                                        "shrink-0 inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200",
                                        isActive
                                            ? "bg-[#1a2845] text-white shadow-md shadow-[#1a2845]/15 ring-1 ring-[#1a2845]"
                                            : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                                    )}
                                >
                                    {cat.title}
                                </CustomLink>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}
