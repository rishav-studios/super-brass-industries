"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@super/ui/components/shadcn/accordion";
import { useTranslations } from "next-intl";

const HomeFAQ = () => {
    const t = useTranslations('HomeFAQ');

    const FAQS = [
        { q: t('faqs.q1'), a: t('faqs.a1') },
        { q: t('faqs.q2'), a: t('faqs.a2') },
        { q: t('faqs.q3'), a: t('faqs.a3') },
        { q: t('faqs.q4'), a: t('faqs.a4') },
        { q: t('faqs.q5'), a: t('faqs.a5') },
        { q: t('faqs.q6'), a: t('faqs.a6') },
    ];

    return (
        <Section data-testid="faq-section" className="bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <Fade>
                            <EyeBrowSimple className="mb-2">{t('eyebrow')}</EyeBrowSimple>
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-[#1a2845] leading-[1.12]">
                                {t('heading')}
                            </h2>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                {t('subtitle')}
                            </p>
                            <CustomLink variant="button-brand" href="/contact" className="mt-6 inline-flex">
                                {t('cta')}
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
