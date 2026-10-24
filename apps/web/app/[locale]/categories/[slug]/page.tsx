import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { CATEGORIES } from "@/constants/categories";
import { CATEGORY_DETAILS } from "@/constants/category-details";
import CategoryBreadcrumbs from "@/components/pages/category/CategoryBreadcrumbs";
import CategoryHeroShowcase from "@/components/pages/category/CategoryHeroShowcase";
import CategoryCustomOemBanner from "@/components/pages/category/CategoryCustomOemBanner";
import CategoryRelatedGrid from "@/components/pages/category/CategoryRelatedGrid";
import HomeCTA from "@/components/pages/home/cta/HomeCTA";

interface CategoryPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const paramsList: { locale: string; slug: string }[] = [];

    for (const locale of routing.locales) {
        for (const cat of CATEGORIES) {
            paramsList.push({
                locale,
                slug: cat.slug,
            });
        }
    }

    return paramsList;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = CATEGORY_DETAILS[slug];

    if (!category) {
        return {
            title: "Category Not Found | Super Brass Industries",
        };
    }

    return {
        title: `${category.title} Manufacturer & Exporter | Super Brass Industries`,
        description: `${category.heroDescription} ISO 9001:2015 certified brass precision components manufacturer in Jamnagar, India.`,
        openGraph: {
            title: `${category.title} | Super Brass Industries`,
            description: category.heroDescription,
            images: [
                {
                    url: category.image,
                    width: 600,
                    height: 600,
                    alt: category.title,
                },
            ],
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = CATEGORY_DETAILS[slug];

    if (!category) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Top Breadcrumb & Quick Switch Bar */}
            <CategoryBreadcrumbs
                currentSlug={category.slug}
                currentTitle={category.title}
            />

            {/* Main Visual & Crisp Tabular Specifications Hero */}
            <CategoryHeroShowcase category={category} />

            {/* OEM CAD Drawing Submission Callout */}
            <CategoryCustomOemBanner categoryShortTitle={category.shortTitle} />

            {/* Related Categories Navigation */}
            <CategoryRelatedGrid currentSlug={category.slug} />

            {/* Global Final CTA Banner */}
            <HomeCTA />
        </main>
    );
}
