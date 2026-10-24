import Container from "@/components/layout/Container";
import HomeCTA from "@/components/pages/home/cta/HomeCTA";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import CategoryCardStack from "@/components/pages/category/CategoryCardStack";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Categories & Precision Brass Components | Super Brass Industries",
    description: "Explore all 8 precision brass product categories manufactured by Super Brass Industries in Jamnagar, India. Certified ISO 9001:2015 OEM supplier.",
};

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Top Page Header Strip */}
            <div className="bg-[#1a2845] text-white">
                <PageHeader style={{ backgroundColor: "#1a2845", color: "#fff" }} />
            </div>

            {/* Catalog Hero Banner */}
            <section className="relative bg-[#1a2845] text-white pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-size-[28px_28px] opacity-10 pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative">
                    <div className="max-w-3xl">
                        <EyeBrowSimple light>Global OEM Manufacturing</EyeBrowSimple>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mt-4">
                            Precision Brass <span className="text-amber-300">Product Portfolio</span>
                        </h1>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                            Explore our 8 specialized brass component categories. From high-retention inserts and switchgear terminals to mission-critical automotive valves, every part is engineered for precision and durability.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-300">
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                ±0.005 mm Machining Precision
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                100% Optical & Gauge Batch Inspection
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                Exporting to 18+ Countries
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Card Stacking with Scroll Hijack Section */}
            <CategoryCardStack />

            {/* Global Final CTA */}
            <HomeCTA />
        </main>
    );
}
