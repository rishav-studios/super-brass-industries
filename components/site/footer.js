import Link from 'next/link';
import { Hexagon, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE, CATEGORIES } from '@/lib/siteData';

const Footer = () => {
  return (
    <footer className="bg-[#111c33] text-white" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center bg-white/10">
                <Hexagon className="h-5 w-5 text-[#d9b25f]" strokeWidth={2.2} />
              </div>
              <div className="leading-tight">
                <span className="block font-heading text-[15px] font-bold tracking-tight">SUPER BRASS</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-400">Industries</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              ISO 9001:2015 certified OEM manufacturer of precision brass components, based in Jamnagar — the brass city of India. Serving global industries since {SITE.established}.
            </p>
            <div className="inline-flex items-center gap-2 border border-[#d9b25f]/40 px-3 py-1.5">
              <span className="h-1.5 w-1.5 bg-[#d9b25f]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d9b25f]">OEM Manufacturer</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">Components</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/components/${c.slug}`} className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">About Us</Link></li>
              <li><Link href="/components" className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">All Components</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">Contact Us</Link></li>
              <li><Link href="/quote" className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">Request a Quote</Link></li>
              <li><Link href="/quality-policy" className="text-sm text-slate-400 hover:text-[#d9b25f] transition-colors">Quality Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#d9b25f]" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#d9b25f]" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#d9b25f]" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-[#d9b25f]" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}, Jamnagar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-[#d9b25f] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-slate-500 hover:text-[#d9b25f] transition-colors">Terms of Service</Link>
            <Link href="/quality-policy" className="text-xs text-slate-500 hover:text-[#d9b25f] transition-colors">Quality Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
