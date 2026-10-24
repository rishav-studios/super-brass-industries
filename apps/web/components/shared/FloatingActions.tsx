"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Find the hero section or first element in main
            const hero =
                document.querySelector("main > section:first-of-type") ||
                document.querySelector("main > div:first-of-type") ||
                document.querySelector("section");

            const heroHeight = hero ? (hero as HTMLElement).offsetHeight : window.innerHeight;
            const threshold = heroHeight * 0.75;

            setIsVisible(window.scrollY >= threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-50 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex flex-col items-center gap-3 pointer-events-auto"
                    >
                        {/* Scroll To Top Button (On top of WhatsApp, icon only, no text) */}
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1a2845] hover:bg-[#121c31] text-white shadow-lg shadow-[#1a2845]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/10 cursor-pointer"
                        >
                            <ArrowUp className="w-5 h-5 text-white transition-transform duration-200 group-hover:-translate-y-0.5" />
                        </button>

                        {/* WhatsApp Button (Bottom-most in bottom left) */}
                        <a
                            href="https://wa.me/918141100249?text=Hello%20Super%20Brass%20Industries%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 sm:w-7 sm:h-7 fill-current transition-transform duration-200 group-hover:scale-108"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    );
}
