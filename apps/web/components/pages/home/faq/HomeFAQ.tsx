"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { Eyebrow } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@super/ui/components/shadcn/accordion";

const FAQS = [
    {
        question: "What materials do you specialize in?",
        answer: "We specialize in high-grade brass (including free-cutting brass and custom alloys), ensuring optimal machinability and durability for precision components."
    },
    {
        question: "Do you accommodate custom designs and prototyping?",
        answer: "Yes, our engineering team works closely with clients from initial CAD designs and rapid prototyping all the way to full-scale mass production."
    },
    {
        question: "What is your minimum order quantity (MOQ)?",
        answer: "Our MOQs are flexible and depend on the complexity of the part. We cater to both small-batch specialized orders and high-volume continuous runs."
    },
    {
        question: "How do you ensure quality control?",
        answer: "We are ISO 9001:2015 certified and utilize state-of-the-art CMM and automated optical inspection systems to guarantee zero defects."
    },
    {
        question: "What are your standard lead times?",
        answer: "Lead times vary by order size and complexity, but our extensive raw material stock and efficient logistics typically allow for rapid turnaround times."
    }
];

const HomeFAQ = () => {
    return (
        <Section className="bg-background py-24 lg:py-32">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    
                    {/* Left: Heading & CTA */}
                    <div className="lg:sticky lg:top-32">
                        <Fade>
                            <Eyebrow className="ml-0 mb-6">FAQ</Eyebrow>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-muted-foreground text-lg mb-10 max-w-md">
                                Everything you need to know about our manufacturing capabilities, processes, and quality standards.
                            </p>
                            
                            <CustomLink variant="button-white" href="/contact" className="inline-flex">
                                Talk to an Expert
                                <Arrow variant="primary" />
                            </CustomLink>
                        </Fade>
                    </div>

                    {/* Right: Accordion */}
                    <Fade delay={0.2} className="w-full">
                        <Accordion type="single" collapsible className="w-full">
                            {FAQS.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 py-2">
                                    <AccordionTrigger className="text-xl md:text-2xl font-medium text-left hover:no-underline hover:text-primary transition-colors data-[state=open]:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lg text-muted-foreground leading-relaxed pt-2 pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Fade>

                </div>
            </Container>
        </Section>
    );
};

export default HomeFAQ;
