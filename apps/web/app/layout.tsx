import { PageTransitionOverlay } from "@/components/animations/transitions/PageTransitionOverlay";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import { TooltipProvider } from "@super/ui/components/shadcn/tooltip";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const ArchivoFont = localFont({
  src: "../../../packages/ui/src/fonts/Archivo.ttf",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "super brass industries",
  description: "Precision Brass Components Manufacturer. Custom CNC Turning, Machining, Threading, and Export Packing with Zero Defect Quality and 24-Hour Quotation Turnaround.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ArchivoFont.className}`}>

        <TooltipProvider>
          <ViewTransitions>
            <PageTransitionProvider>
              <LenisProvider>
                <PageTransitionOverlay />
                {/* <TrailingCursor /> */}
                {/* <FirstLoaderAnimation /> */}
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
                <Footer />
              </LenisProvider>
            </PageTransitionProvider>
          </ViewTransitions>
        </TooltipProvider>
      </body>
    </html>
  );
}
