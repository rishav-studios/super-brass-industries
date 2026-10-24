"use client";

import { Language } from '@/constants/site_languages';
import { usePathname, useRouter } from "@/i18n/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@super/ui/components/shadcn/dropdown-menu";
import { cn } from "@super/ui/lib/utils";

import { motion, useScroll, useTransform } from "motion/react";
import { useLocale } from "next-intl";

// Language metadata

type LanguageSwitcherProps = {
    /** Variant affects text color — use 'light' on dark backgrounds, 'dark' on light */
    languages: Language[]
};
const SCROLL_START = 0;
const SCROLL_END = 150;
export const LanguageSwitcher = ({ languages }: LanguageSwitcherProps) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const current = languages.find((l) => l.code === locale) ?? languages[0]!;

    const { scrollY } = useScroll();

    const textColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"])

    const switchLocale = (code: string) => {
        router.replace(pathname, { locale: code });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
                <motion.button
                    className={cn(
                        "flex items-center gap-1.5 text-sm font-medium "
                    )}
                    style={{ color: textColor }}
                    whileTap={{ scale: 0.97 }}
                    id="language-switcher-trigger"
                >
                    <current.flag className="w-4 h-4" />
                    <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className={cn(
                    "w-44 rounded-xl border shadow-xl z-200 overflow-hidden p-1",
                    "bg-white border-slate-200"
                )}
            >
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer rounded-lg",
                            lang.code === locale
                                ? "bg-[#1a2845] text-white font-semibold focus:bg-[#1a2845] focus:text-white"
                                : "text-slate-700 hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-700"
                        )}
                    >
                        <lang.flag className='w-5 h-5' />
                        <span>{lang.nativeName}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
