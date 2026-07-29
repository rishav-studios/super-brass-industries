import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'Super Brass Industries | Precision Brass Components Manufacturer in Jamnagar, India',
  description:
    'ISO 9001:2015 certified OEM manufacturer of brass auto parts, pipe fittings, gas parts, electrical pins, inserts, terminals and custom brass components. Exporting to 18+ countries from Jamnagar, India.',
  keywords: 'brass components manufacturer, brass parts Jamnagar, brass auto parts, brass electrical pins, brass inserts, OEM brass manufacturer India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-white text-slate-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
