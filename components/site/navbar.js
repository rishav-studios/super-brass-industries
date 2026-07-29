'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/components', label: 'Components' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <div className="relative flex h-10 w-10 items-center justify-center bg-[#1a2845] text-white">
              <Hexagon className="h-5 w-5 text-[#d9b25f]" strokeWidth={2.2} />
            </div>
            <div className="leading-tight">
              <span className="block font-heading text-[15px] font-bold tracking-tight text-[#1a2845]">SUPER BRASS</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500">Industries</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === l.href ? 'text-[#1a2845] font-semibold' : 'text-slate-600 hover:text-[#1a2845]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-none bg-[#1a2845] hover:bg-[#233459] text-white h-11 px-6 text-sm font-semibold tracking-wide" data-testid="nav-quote-btn">
              <Link href="/quote">
                Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#1a2845]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="py-3 text-sm font-medium text-slate-700 border-b border-slate-100">
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-3 rounded-none bg-[#1a2845] text-white h-11">
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
