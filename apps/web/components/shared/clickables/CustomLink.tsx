"use client"
import { icons } from "@super/ui";
import { cn } from "@super/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, isValidElement, ReactNode, useMemo } from "react";

import { motion, MotionStyle } from "motion/react";
import { ClickableVariants, variantClasses } from "./variantClasses";

type BaseCustomLinkProps = {
    variant?: ClickableVariants;
    children: ReactNode;
    className?: string;
    isNormal?: boolean;
    style?: MotionStyle;
    target?: React.HTMLAttributeAnchorTarget;
};

type LinkProps = BaseCustomLinkProps & {
    href: string;
};

type SpanProps = BaseCustomLinkProps & {
    href?: never;
};

export type CustomLinkProps = LinkProps | SpanProps;

const AnimatedText = ({ children }: { children: ReactNode }) => {
    let charIndex = 0;

    return (
        <>
            {Children.map(children, (child, childIdx) => {
                if (typeof child === "string" || typeof child === "number") {
                    const text = String(child);
                    const words = text.split(" ");

                    return words.map((word, wIdx) => {
                        const wordSpan = (
                            <span key={`word-${childIdx}-${wIdx}`} className="inline-flex">
                                {word.split("").map((char, cIdx) => {
                                    const delay = charIndex * 0.015;
                                    charIndex++;
                                    return (
                                        <span key={`char-${cIdx}`} className="relative inline-flex overflow-hidden">
                                            <span
                                                className="inline-block transition-transform duration-300 group-hover/custom-link:translate-y-full"
                                                style={{ transitionDelay: `${delay}s` }}
                                            >
                                                {char}
                                            </span>
                                            <span
                                                className="absolute left-0 top-0 inline-block -translate-y-full transition-transform duration-300 group-hover/custom-link:translate-y-0"
                                                style={{ transitionDelay: `${delay}s` }}
                                            >
                                                {char}
                                            </span>
                                        </span>
                                    );
                                })}
                            </span>
                        );



                        return wordSpan;
                    });
                }
                return child;
            })}
        </>
    );
};

export const CustomLink = (props: CustomLinkProps) => {

    const { children, className, variant = "hover-underline", href, isNormal = false, style, target, ...rest } = props;

    const childrenArray = Children.toArray(children)
    const hasIcon = childrenArray.some((child) => isValidElement(child))

    const variantClass = useMemo(() => {
        return variant === "custom" ? undefined : variantClasses[variant]
    }, [variant])
    const pathname = usePathname();

    const isActive = href ? pathname === href : false

    const combinedVariantClassName = cn(

        "group/custom-link cursor-pointer",
        variantClass?.base,
        isActive ? variantClass?.active : variantClass?.hover,
        hasIcon && "pr-2",
        className,
    );

    const MotionNextLink = motion.create(Link)
    if (href) {
        return (
            <MotionNextLink href={href} className={combinedVariantClassName} target={target} style={style} {...rest}>
                {isNormal ? children : (
                    <span className="flex items-center gap-1">
                        <AnimatedText>{children}</AnimatedText>
                    </span>
                )}
            </MotionNextLink>

        );
    }

    return (
        <span role="button" className={combinedVariantClassName} {...(rest as any)}>
            {isNormal ? children : (
                <span className="flex items-center gap-1">
                    <AnimatedText>{children}</AnimatedText>
                </span>
            )}
        </span>
    );
}
type ArrowVariants = "primary" | "black" | "white"
type ArrowProps = {
    className?: string;
    variant?: ArrowVariants;
    style?: MotionStyle;
}
export const Arrow = ({ className = "", variant = "black", style }: ArrowProps) => (
    <motion.div style={style} className={cn(
        "flex p-2 ml-2 rounded-md relative overflow-hidden",
        {
            "bg-primary text-background": variant === "primary",
            "bg-black text-background": variant === "black",
            "bg-white text-primary": variant === "white",
        },
        className
    )}>
        <icons.arrowRight className="w-5 h-5 transition-transform duration-300 group-hover/custom-link:translate-x-8" />
        <icons.arrowRight className="w-5 h-5 absolute left-2 top-2 -translate-x-8 transition-transform duration-300 group-hover/custom-link:translate-x-0" />
    </motion.div>)