import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import { variantClasses } from "@/components/shared/clickables/variantClasses"
import PageHeader from "@/components/shared/pageHeader/PageHeader"
import { Eyebrow } from "@/components/shared/SectionHeader"
import { icons } from "@super/ui"
import { cn } from "@super/ui/lib/utils"
import HeroVideo from "./HeroVideo2"

const Hero = () => {
    return (
        <Section className="p-0! w-full">
            <PageHeader />
            <Container className="h-[60dvh]">


                <div className="mt-16 h-full grid grid-cols-3">

                    <div className="space-y-5 col-span-2 flex items-center">
                        <Fade>
                            <Eyebrow className="mx-0! mb-6">Trusted manufaturing partner</Eyebrow>
                            <HeroHeading />
                        </Fade>


                    </div>
                    <div className="flex items-center">
                        <div className="space-y-4">

                            <p>// since 2005 //</p>
                            <p>We deliver end-to-end manufacturing solutions from machining and fabrication to molding and assembly engineered for quality, efficiency, and on-time delivery.</p>
                            <a href="#categories" className={cn("w-max", variantClasses["button-brand"].base, variantClasses["button-brand"]?.hover)}>
                                Explore Categories
                                <Arrow variant="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="relative h-dvh">

                <HeroVideo />
            </div>

        </Section >
    )
}

const HeroHeading = () => {
    return (
        <h1 className="text-5xl md:text-7xl font-bold">
            From raw<span className="text-primary">&nbsp;materials</span> <br /> to finished&nbsp;products.
        </h1>
    )
}
const HeroDescription = () => {
    return (
        <p className="text-muted max-w-lg">
            Swastik Brass Components engineers high-performance brass parts for the world's most demanding industries — from aerospace to heavy rail.
        </p>
    )
}
// Make sure to npm install lucide-react

interface CTAButtonProps {
    text?: string;
    onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    text = "Start a Project",
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            // Tailwind classes handle the layout, padding, pill-shape, and hover physics
            className="group relative flex items-center justify-between rounded-2xl pl-7 pr-2 py-2 transition-all duration-300 border border-[#2b3c63]/30"
            style={{
                // 1. Subtle gradient: slightly lighter blue at the bottom right
                background: 'linear-gradient(135deg, #1a2845 0%, #223459 100%)',

                // 2. Colored Shadow: This is the secret sauce for the "blended" look. 
                // It uses rgba versions of #1a2845 (rgb: 26, 40, 69)
                boxShadow: `
          0 12px 30px -8px rgba(26, 40, 69, 0.6), 
          0 4px 12px -3px rgba(26, 40, 69, 0.4)
        `
            }}
        >
            {/* Optional: If you want the EXACT grainy texture from the image, uncomment the div below 
        and replace the URL with a tiny seamless noise SVG or PNG. 
      */}
            {/* <div className="absolute inset-0 pointer-events-none rounded-[2rem] opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} /> */}

            {/* Button Text */}
            <span className="relative z-10 mr-6 text-white font-medium text-lg tracking-wide">
                {text}
            </span>

            {/* Icon Container */}
            <div
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-300 group-hover:translate-x-1"
                style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Tiny shadow inside the button for depth
                }}
            >
                <icons.arrowRight
                    className="h-6 w-6 transition-transform duration-300 group-hover:rotate-[-45deg]"
                    style={{ color: '#1a2845' }} // Arrow matches the main theme color
                    strokeWidth={2.5}
                />
            </div>
        </button>
    );
};


const HeroCta = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Fade className="flex">

                <CustomLink
                    href={"/categories"}
                    variant="outline-brand"
                    className="text-background"
                >
                    Explore Categories
                </CustomLink>
            </Fade>
            <Fade delay={0.2}>

                {/* <CustomLink
                    href={"/quote"}
                    variant="gradient-glow"
                >
                    Get a Quote
                    <Arrow variant="black" className="hidden sm:flex" />
                </CustomLink> */}
                <CTAButton />
            </Fade>
        </div>
    )
}


export default Hero

