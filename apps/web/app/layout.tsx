import { getLocale } from 'next-intl/server';
import localFont from "next/font/local";
import "./globals.css";

const ArchivoFont = localFont({
    src: "../../../packages/ui/src/fonts/Archivo.ttf",
    variable: "--font-archivo",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    const isRTL = locale === 'ar';
    return (
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
            <body className={`${ArchivoFont.className}`}>
                {children}
            </body>
        </html>
    );
}
