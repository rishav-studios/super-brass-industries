import { cn } from "@super/ui/lib/utils";

export type ClickableVariants =
    | "hover-underline"
    | "outline-brand"
    | "outline-white"
    | "outline-black"
    | "button-brand"
    | "button-black"
    | "button-white"
    | "gradient-glow"
    | "custom";

const buttonBaseClasses = "py-2 px-6 rounded-xl flex items-center justify-center gap-2";

export const variantClasses: Record<Exclude<ClickableVariants, "custom">, {
    base?: string,
    hover?: string,
    active?: string
}> = {
    "hover-underline": {
        base:
            "relative flex items-center gap-2 hover:text-primary transition-colors duration-300 before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-primary before:transition-transform before:duration-300",
        hover: "hover:before:scale-x-100 hover:before:origin-left",
        active: "before:scale-x-100",
    },
    "outline-brand": {
        base: cn(buttonBaseClasses, "border border-primary"),
        hover: "",
        active: ""
    },
    "outline-black": {
        base: cn(buttonBaseClasses, "border border-black transition-colors duration-300"),
        hover: "hover:text-background hover:bg-foreground ",
        active: ""
    },
    "outline-white": {
        base: cn(buttonBaseClasses, "border border-white transition-colors duration-300"),
        hover: "hover:text-black hover:bg-white ",
        active: ""
    },
    "button-brand": {
        base: cn(buttonBaseClasses, "bg-primary text-background"),
        hover: "",
        active: ""
    },
    "button-black": {
        base: cn(buttonBaseClasses, "bg-foreground text-background"),
        hover: "",
        active: ""
    },
    "button-white": {
        base: cn(buttonBaseClasses, "bg-white text-black"),
        hover: "",
        active: ""
    },
    "gradient-glow": {
        base: cn(buttonBaseClasses, "bg-linear-to-r from-primary to-primary/70 shadow-xl shadow-primary"),
        hover: "",
        active: ""
    },
};
