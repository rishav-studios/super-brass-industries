"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@super/ui/components/shadcn/accordion";

export const FAQS = [
    { q: 'What is your minimum order quantity (MOQ)?', a: 'Our MOQ is flexible and depends on the component complexity and size. For standard components we typically start from 1,000 pieces, while for custom-developed parts we can support prototype and pilot quantities before scaling to full production.' },
    { q: 'Can you manufacture parts from our drawings or samples?', a: 'Yes \u2014 that is our core strength as OEM manufacturers. Share your 2D drawings, 3D models (STEP/IGES) or a physical sample, and our engineering team will review it, suggest optimisations if needed, and deliver a detailed quotation within 24\u201348 hours. All development is protected under NDA.' },
    { q: 'Which quality certifications do you hold?', a: 'Super Brass Industries operates an ISO 9001:2015 certified quality management system. Our components are RoHS compliant, and we provide material test certificates, dimensional inspection reports and PPAP documentation on request.' },
    { q: 'What are your typical lead times?', a: 'Standard components ship in 2\u20133 weeks from order confirmation. Custom parts require 3\u20135 weeks including tooling and sample approval. For repeat orders we maintain safety stock programs that can reduce lead times to under a week.' },
    { q: 'Which brass grades and finishes do you work with?', a: 'We machine CW614N, CW617N, C36000, C38500, DZR and lead-free brass grades. Surface finishes include natural, nickel, tin, zinc, chrome and silver plating \u2014 all with verified plating thickness reports.' },
    { q: 'Do you export? How are shipments packed?', a: 'Yes, we currently export to 18+ countries across North America, Europe, the Middle East and Oceania. Components are packed in VCI-lined export-grade packaging with full traceability labelling, shipped via sea or air per your Incoterms (FOB, CIF, DDP).' },
];

const HomeFAQ = () => {
    return (
        <Section data-testid="faq-section" className="bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <Fade>
                            <EyeBrowSimple className="mb-2">FAQs</EyeBrowSimple>
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                                Answers before you ask
                            </h2>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Everything purchase teams usually want to know. Still have questions? Our team responds within one business day.
                            </p>
                            <CustomLink variant="button-brand" href="/contact" className="mt-6 inline-flex">
                                Ask a Question
                                <Arrow variant="white" />
                            </CustomLink>
                        </Fade>
                    </div>
                    <div className="lg:col-span-8">
                        <Fade delay={0.1}>
                            <Accordion type="single" collapsible className="w-full">
                                {FAQS.map((f, i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200" data-testid={`faq-item-${i}`}>
                                        <AccordionTrigger className="text-left text-base font-semibold text-[#1a2845] hover:text-[#1a2845]/70 hover:no-underline py-5">
                                            {f.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Fade>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default HomeFAQ;
