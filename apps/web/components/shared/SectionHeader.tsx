import { cn } from "@super/ui/lib/utils";
import Fade from "../animations/Fade";

type SectionHeaderProps = {
    children: React.ReactNode;
    className?: string
}
const SectionHeader = ({ children, className }: SectionHeaderProps) => {
    return (
        <Fade className={cn("flex h-20 items-center gap-6 w-max", className)}>
            {children}
        </Fade>
    )
}

type EyeBrowProps = {
    className?: string
    children: string;
    light?: boolean
}

export const EyeBrow = ({ children, className }: EyeBrowProps) => {
    return (

        <div className={cn("inline-flex items-center rounded-[4px] gap-2 border border-white/25 bg-white/5 backdrop-blur px-4 py-2 mb-8", className)}>
            <span className="h-2 w-2 bg-white animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                {children}
            </span>
        </div>
    )
}
export const EyeBrowSimple = ({ children, className, light }: EyeBrowProps) => {
    return (

        <div className={cn("flex items-center gap-3", className, light ? "text-white" : "text-primary")}>
            <span className={cn("h-px w-8", light ? "bg-white" : "bg-primary")} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
                {children}
            </span>
        </div>
    )
}

const Separator = () => {
    return (
        <div className="w-px h-8/10 bg-linear-to-b from-transparent via-primary/70 to-transparent" />
    )
}

const Heading = ({ children }: { children: string }) => {
    return (
        <h2 className="text-5xl">{children}</h2>
    )
}
const Description = ({ children, className }: { children: string, className?: string }) => {
    if (children.includes("\n")) {
        const lines = children.split("\n")
        return (
            <p className={cn("flex flex-col text-gray-500", className)}>
                {lines.map((line, index) => (
                    <span key={index} className="">{line}</span>
                ))}
            </p>
        )
    }
    return (
        <p className={cn("text-gray-500", className)}>{children}</p>
    )
}

export { Description, Heading, SectionHeader, Separator };

