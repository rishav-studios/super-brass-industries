"use client";

import { TransitionLink } from "@/components/shared/TransitionLink";
import { FacilityCategory } from "@super/types";
import { icons } from "@super/ui";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@super/ui/components/shadcn/dropdown-menu";

import { cn } from "@super/ui/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Logo from "../pages/home/hero/Logo";
import { Arrow, CustomLink } from "../shared/clickables/CustomLink";
import { buttonBaseClasses } from "../shared/clickables/variantClasses";

type NavLink = {
    name: string,
    href: string,
    type: "link" | "dropdown"
}

const NAV_LINKS: NavLink[] = [
    {
        name: "Home",
        href: "/home",
        type: "link"
    },
    {
        name: "About",
        href: "/about",
        type: "link"
    },
    {
        name: "Categories",
        href: "/categories",
        type: "dropdown"
    },
    {
        name: "Contact",
        href: "/contact",
        type: "link"
    },
    // {
    //     name: "Blog",
    //     href: "/blog",
    //     type: "link"
    // },
];

// Scroll range: transformation starts at 0px and completes at 150px
const SCROLL_START = 0;
const SCROLL_END = 150;

export interface NavbarProps {
    facilityCategories?: FacilityCategory[];
}

const MobileNavigation = ({
    isOpen,
    setIsOpen,
    facilityCategories
}: {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    facilityCategories: FacilityCategory[];
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black z-100 md:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 bottom-0 w-full bg-black/95 backdrop-blur-xl z-110 flex flex-col lg:hidden overflow-y-auto"
                    >
                        <div className="flex justify-between items-center p-6 pb-2 border-b border-white/10">
                            <div style={{ width: 140, height: 40 }} className="relative">
                                <Image
                                    src="/logo-main.svg"
                                    alt="Swastik Brass Components"
                                    fill
                                    className="object-contain object-left invert brightness-0"
                                    priority
                                />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <icons.x className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col px-6 py-8 gap-2 flex-1">
                            {NAV_LINKS.map((link, i) => {
                                if (link.type === "dropdown") {
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                        >
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="flex items-center justify-between w-full text-2xl font-bold py-4 text-white outline-none group border-b border-white/5">
                                                    {link.name}
                                                    <icons.chevronDown className="w-6 h-6 transition-transform group-data-[state=open]:rotate-180" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    align="center"
                                                    className="w-[90vw] border-white/10 bg-black/90 backdrop-blur-2xl text-white rounded-2xl overflow-hidden p-2 z-120"
                                                >
                                                    {facilityCategories.map(cat => (
                                                        <DropdownMenuItem key={cat.slug} asChild className="focus:bg-white/10 focus:text-white cursor-pointer rounded-xl mb-1 last:mb-0">
                                                            <TransitionLink href={`/facilities/${cat.slug}`} onClick={() => setIsOpen(false)} className="flex items-center gap-4 w-full px-2 py-3">
                                                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                                                    <icons.building2 className="w-5 h-5" />
                                                                </div>
                                                                <p className="text-lg font-bold">{cat.display_name || cat.name}</p>
                                                            </TransitionLink>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </motion.div>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <TransitionLink
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-2xl font-bold py-4 text-white hover:text-primary transition-colors border-b border-white/5"
                                        >
                                            {link.name}
                                        </TransitionLink>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-6 flex flex-col gap-4 mt-auto mb-6"
                        >
                            <TransitionLink
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center text-base font-semibold text-white border border-white/30 rounded-full py-4 hover:bg-white/10 transition-colors"
                            >
                                Contact
                            </TransitionLink>
                            <TransitionLink
                                href="/quote"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center text-base font-semibold text-white bg-primary rounded-full py-4 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                            >
                                Quote Request
                            </TransitionLink>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Navbar = ({ facilityCategories = [] }: NavbarProps) => {
    const { scrollY } = useScroll();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const color = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"])
    const textColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)"])
    const logoColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(255, 255, 255, 1)", "rgb(26, 40, 69)"])
    const linkColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(255, 255, 255, 1)", "rgb(26, 40, 69)"])
    const linkTextColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)"])
    const arrowColor = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["rgb(26, 40, 69)", "rgba(255, 255, 255, 1)"])
    const boxShadow = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["", "0 4px 6px -1px rgba(26, 40, 69, 0.3)"])
    // Each value is mapped directly from scroll position — no boolean, no state
    const y = useTransform(scrollY, [SCROLL_START, SCROLL_END], [40, 18]);
    const width = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["100%", "90%"]);
    const innerContainerWidth = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["90%", "99%"]);
    const borderRadius = useTransform(scrollY, [SCROLL_START, SCROLL_END], [0, 12])
    const innerContainerPaddingLeft = useTransform(scrollY, [SCROLL_START, SCROLL_END], [0, 16]);

    return (
        <>
            {/* <MobileNavigation isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} facilityCategories={facilityCategories} /> */}
            <motion.nav
                style={{
                    y,

                }}
                className="flex fixed left-0 right-0 z-50 w-full  pointer-events-auto"
            >
                <motion.div
                    style={{
                        width,
                        borderRadius,
                        backgroundColor: color,
                        boxShadow

                    }}
                    className={cn("mx-auto",)}
                >
                    {/* Container component */}
                    <motion.div
                        style={{
                            width: innerContainerWidth,
                            paddingLeft: innerContainerPaddingLeft
                        }}
                        className=" mx-auto flex items-center h-16 gap-12">
                        <div className="h-16 py-4 relative">
                            <CustomLink variant="custom" href="/" isNormal>

                                <Logo className="h-full w-max" style={{ fill: logoColor }} />
                            </CustomLink>
                        </div>
                        <div className="flex gap-6">
                            {NAV_LINKS.map((link, i) => (
                                <CustomLink
                                    key={i}
                                    href={link.href}
                                    className=" transition-colors"
                                    style={{ color: textColor }}
                                >
                                    {link.name}
                                </CustomLink>
                            ))}
                        </div>
                        <div className="flex ml-auto gap-6">

                            <CustomLink href="/quote" variant="custom" className={cn(buttonBaseClasses, "pr-2")} style={{ backgroundColor: linkColor, color: linkTextColor }}>
                                Request a Quote
                                <Arrow variant="primary" style={{ backgroundColor: arrowColor, color: linkColor }} />
                            </CustomLink>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.nav>
        </>
    );
};

export default Navbar;