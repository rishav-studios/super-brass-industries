"use client";

import { CATEGORIES } from "@/constants/categories";
import { cn } from "@super/ui/lib/utils";
import { ReactNode } from "react";
import Fade from "../animations/Fade";
import { CustomLink } from "../shared/clickables/CustomLink";
import Container from "./Container";

const FOOTER_LINKS = {
    company: [
        { id: "company-about", label: "About Us", href: "/about" },
        { id: "company-categories", label: "Categories", href: "/categories" },
        { id: "company-contact", label: "Contact", href: "/contact" },
    ],
    legal: [
        { id: "legal-privacy", label: "Privacy Policy", href: "/privacy" },
        { id: "legal-terms", label: "Terms of Service", href: "/terms" },
        { id: "legal-quality", label: "Quality Policy", href: "/quality" },
    ],
    socials: [
        {
            id: "social-whatsapp",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" viewBox="0 0 640 640">
                <path className="fill-slate-500 group-hover:fill-primary transition-colors duration-300" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
            </svg>,
            label: "Whatsapp", href: "/whatsapp"
        },
        {
            id: "social-facebook",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" viewBox="0 0 640 640">
                <path className="fill-slate-500 group-hover:fill-primary transition-colors duration-300" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
            </svg>,
            label: "Facebook", href: "/facebook"
        },
        {
            id: "social-linkedin",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" viewBox="0 0 640 640">
                <path className="fill-slate-500 group-hover:fill-primary transition-colors duration-300" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
            </svg>,
            label: "LinkedIn", href: "/linkedin"
        },
    ]
};

const Heading = ({ children }: { children: ReactNode }) => {
    return <h3 className="font-heading font-semibold text-lg text-[#1a2845] mb-6">{children}</h3>
}

type LinksListProps = {
    links: {
        id: string,
        label: string,
        href: string,
        icon?: ReactNode
    }[];
    direction?: "vertical" | "horizontal"
}

const LinksList = ({ links, direction = "vertical" }: LinksListProps) => {
    return (
        <ul className={cn("space-y-3.5", direction === "horizontal" && "flex flex-wrap gap-x-6 gap-y-3 space-y-0")}>
            {links.map((link) => (
                <li key={link.id}>
                    <CustomLink
                        href={link.href}
                        variant="hover-underline"
                        className="text-slate-600 hover:text-primary transition-colors font-medium  inline-flex items-center gap-2 group"
                    >
                        {link.icon && <>{link.icon}</>}
                        {link.label}
                    </CustomLink>
                </li>
            ))}
        </ul>
    )
}

const Footer = () => {
    // Generate links from CATEGORIES (max 6 to fit neatly in column)
    const categoryLinks = CATEGORIES.slice(0, 6).map(cat => ({
        id: cat.slug,
        label: cat.title,
        href: `/categories/${cat.slug}`
    }));

    return (
        <footer className="bg-white relative overflow-hidden pt-20 pb-8 lg:pt-28">
            <Container>
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Brand & Socials */}
                    <Fade className="lg:col-span-4 lg:pr-10">
                        <img src="/logo-main.svg" alt="Super Brass Industries" className="h-10 mb-6" />
                        <p className="text-slate-500 font-medium text-base leading-relaxed mb-8 max-w-sm">
                            Delivering precision machined components to the world's most demanding industries since 2012. Built on quality, scaled with engineering.
                        </p>
                        <LinksList links={FOOTER_LINKS.socials} direction="horizontal" />
                    </Fade>

                    {/* Column 2: Company */}
                    <Fade delay={0.1} className="lg:col-span-2">
                        <Heading>Company</Heading>
                        <LinksList links={FOOTER_LINKS.company} />
                    </Fade>

                    {/* Column 3: Categories */}
                    <Fade delay={0.2} className="lg:col-span-3">
                        <Heading>Categories</Heading>
                        <LinksList links={categoryLinks} />
                        {CATEGORIES.length > 6 && (
                            <div className="mt-4">
                                <CustomLink href="/categories" variant="hover-underline" className="text-primary font-semibold inline-flex">
                                    View all categories &rarr;
                                </CustomLink>
                            </div>
                        )}
                    </Fade>

                    {/* Column 4: Contact & Hours */}
                    <Fade delay={0.3} className="lg:col-span-3">
                        <Heading>Contact Us</Heading>
                        <div className="space-y-4 text-slate-600 font-medium  ">
                            <CustomLink className="leading-relaxed inline-flex">
                                Jamnagar, Gujarat, India
                            </CustomLink>
                            <CustomLink target="_blank" href="mailto:info@superbrassindustries.com" className="inline-flex">
                                info@superbrassindustries.com
                            </CustomLink>
                            <CustomLink target="_blank" href="tel:+918320776463" className="inline-flex">
                                +91 8320776463
                            </CustomLink>

                            <div className="pt-5 mt-5 border-t border-slate-100">
                                <Heading>Business Hours</Heading>
                                <p>Saturday-Thursday<br />8:00 am to 8:00 pm IST</p>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Global Availability Section */}
                <Fade delay={0.4} className="mb-20">
                    <div className="bg-[#f8f9fc] rounded-2xl p-8 lg:p-10 border border-slate-100">
                        <h4 className="font-heading font-semibold text-[#1a2845] text-lg mb-6">Global Availability & Office Hours</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            <div className="space-y-1">
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">India (IST)</div>
                                <div className="text-slate-700 font-medium">8:00 am - 8:00 pm</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Europe (EU)</div>
                                <div className="text-slate-700 font-medium">3:30 am - 3:30 pm</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">USA East (EST)</div>
                                <div className="text-slate-700 font-medium">9:30 am - 9:30 pm</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">USA West (PST)</div>
                                <div className="text-slate-700 font-medium">6:30 am - 6:30 pm</div>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* Bottom Legal & Copyright */}
                <Fade delay={0.5} className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Super Brass Industries. All rights reserved.
                    </p>
                    <LinksList links={FOOTER_LINKS.legal} direction="horizontal" />
                </Fade>
            </Container>
        </footer>
    )
}

export default Footer;
