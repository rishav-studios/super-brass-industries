import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import BackgroundNoise, { BackgroundLines } from "@/components/shared/BackgroundNoise"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import { Eyebrow } from "@/components/shared/SectionHeader"
import { TextRevealOnScroll } from "@/components/shared/TextReveal"
import { icons } from "@super/ui"

const HomeAbout = () => {
    return (
        <Section className="relative bg-background  py-0 overflow-visible">
            <BackgroundNoise />
            <BackgroundLines className="w-[90%] mx-auto" />

            {/* Sticky Container */}
            <div className="  flex flex-col justify-center overflow-hidden">
                <Container className="z-10  h-full flex flex-col justify-center py-20">

                    <div className="flex flex-col h-full justify-between">
                        {/* Top: Eyebrow & Standard Heading */}
                        <Fade className="mt-10 lg:mt-20">
                            <Eyebrow className="ml-0 mb-6">Who we are</Eyebrow>
                            <h2 className="text-3xl sm:text-4xl font-semibold">
                                Two Decades of Craftsmanship
                            </h2>
                        </Fade>

                        {/* Middle: TextRevealOnScroll Paragraph */}
                        <div className="max-w-5xl my-10">
                            <TextRevealOnScroll as="div" className="text-3xl sm:text-4xl lg:text-5xl leading-[1.2] font-medium text-foreground tracking-tight whitespace-pre-line">
                                Founded over 25 years ago in the heart of India's brass manufacturing belt, Swastik Brass Components has grown from a local supplier into a globally trusted exporter of precision engineered brass parts for the world's most demanding industries.
                            </TextRevealOnScroll>
                        </div>

                        {/* Bottom: Footer / Stats / CTAs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border/50 pt-10 pb-10">
                            <Fade>
                                <p className="text-lg text-muted-foreground max-w-md">
                                    State-of-the-art CNC turning, automatic screw machines, and in-house quality labs engineered for excellence.
                                </p>
                            </Fade>
                            <div className="flex flex-col sm:flex-row gap-5 md:justify-end items-start md:items-center">
                                <Fade>
                                    <CustomLink variant="button-white" href={"/about"}>
                                        Know more
                                        <Arrow variant="primary" />
                                    </CustomLink>
                                </Fade>
                                <Fade delay={0.2} className="flex">
                                    <CustomLink variant="hover-underline" href={"/quote"} className="text-primary font-medium flex items-center gap-2">
                                        Download brochure
                                        <icons.download className="w-5 h-5" />
                                    </CustomLink>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    )
}

export default HomeAbout