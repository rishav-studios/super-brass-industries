"use client"
import { icons } from "@super/ui";
import { cn } from "@super/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, isValidElement, ReactNode, useMemo } from "react";

import { ClickableVariants, variantClasses } from "./variantClasses";

type BaseCustomLinkProps = {
    variant?: ClickableVariants;
    children: ReactNode;
    className?: string;
};

type LinkProps = BaseCustomLinkProps & {
    href: string;
};

type SpanProps = BaseCustomLinkProps & {
    href?: never;
};

export type CustomLinkProps = LinkProps | SpanProps;

export const CustomLink = (props: CustomLinkProps) => {

    const { children, className, variant = "hover-underline", href, ...rest } = props;

    const childrenArray = Children.toArray(children)
    const hasIcon = childrenArray.some((child) => isValidElement(child))

    const variantClass = useMemo(() => {
        return variant === "custom" ? undefined : variantClasses[variant]
    }, [variant])
    const pathname = usePathname();

    const isActive = href ? pathname === href : false

    const combinedVariantClassName = cn(
        "group/custom-link",
        variantClass?.base,
        isActive ? variantClass?.active : variantClass?.hover,
        hasIcon && "pr-2",
        className,
    );
    if (href) {
        return (
            <Link href={href} className={combinedVariantClassName} {...rest}>
                {children}
            </Link>

        );
    }

    return (
        <span role="button" className={combinedVariantClassName} {...(rest as any)}>
            {children}
        </span>
    );
}
type ArrowVariants = "primary" | "black" | "white"
type ArrowProps = {
    className?: string;
    variant?: ArrowVariants;
}
export const Arrow = ({ className = "", variant = "black" }: ArrowProps) => (
    <div className={cn(
        "flex p-2 rounded-lg",
        {
            "bg-primary text-background": variant === "primary",
            "bg-black text-background": variant === "black",
            "bg-white text-primary": variant === "white",
        },
        className
    )}>
        <icons.arrowRight className="w-5 h-5 group-hover/custom-link:-rotate-45 transition-transform duration-300" />
    </div>)