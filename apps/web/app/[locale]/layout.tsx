import { PageTransitionOverlay } from "@/components/animations/transitions/PageTransitionOverlay";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import FloatingActions from "@/components/shared/FloatingActions";
import { routing } from "@/i18n/routing";
import { Toaster } from "@super/ui/components/shadcn/sonner";
import { TooltipProvider } from "@super/ui/components/shadcn/tooltip";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import { notFound } from "next/navigation";
// CSS and Font moved to root app/layout.tsx

export const metadata: Metadata = {
    title: "super brass industries",
    description: "Precision Brass Components Manufacturer. Custom CNC Turning, Machining, Threading, and Export Packing with Zero Defect Quality and 24-Hour Quotation Turnaround.",
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client side
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <TooltipProvider>
                <ViewTransitions>
                    <PageTransitionProvider>
                        <LenisProvider>
                            <PageTransitionOverlay />
                            <Toaster position="top-right" richColors />
                            <Navbar facilityCategories={[
                                {
                                    display_name: "Manufacturing Facility",
                                    id: "123d",
                                    name: "Manufacturing Facility",
                                    slug: "manufacturing",
                                    seo_metadata: {
                                        meta_title: "",
                                        meta_description: "",
                                    },
                                },
                                {
                                    display_name: "Testing Facility",
                                    id: "123f",
                                    name: "Testing Facility",
                                    slug: "testing",
                                    seo_metadata: {
                                        meta_title: "",
                                        meta_description: "",
                                    },
                                }
                            ]} />
                            <div>
                                {children}
                            </div>
                            <FloatingActions />
                            <Footer />
                        </LenisProvider>
                    </PageTransitionProvider>
                </ViewTransitions>
            </TooltipProvider>
        </NextIntlClientProvider>
    );
}
