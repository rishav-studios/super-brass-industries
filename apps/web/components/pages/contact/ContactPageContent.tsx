"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import HomeCTA from "@/components/pages/home/cta/HomeCTA";
import Fade from "@/components/animations/Fade";

export default function ContactPageContent() {
    return (
        <div className="bg-[#f8f9fc] min-h-screen">
            {/* Hero Section */}
            <ContactHero />

            {/* Main Interactive Form & Info Grid */}
            <Section className="py-12 lg:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Column: Contact & RFQ Form (7 Cols) */}
                        <Fade className="lg:col-span-7">
                            <ContactForm />
                        </Fade>

                        {/* Right Column: Factory Details, Hotline, Checklist (5 Cols) */}
                        <Fade delay={0.2} className="lg:col-span-5">
                            <ContactInfo />
                        </Fade>
                    </div>
                </Container>
            </Section>

            {/* Bottom Call to Action */}
            <HomeCTA />
        </div>
    );
}
