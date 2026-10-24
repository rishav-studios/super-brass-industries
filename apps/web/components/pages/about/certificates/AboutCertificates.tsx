"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BackgroundNoise from "@/components/shared/BackgroundNoise";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { icons } from "@super/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type CertificateProps = {
    name: string;
    desc: string;
    image: string;
};

const CertificateCard = ({ cert }: { cert: CertificateProps }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bg-white border border-border rounded-2xl p-7 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-start">
            <div className="h-16 w-16 relative mb-5 flex items-center justify-center rounded-xl bg-primary/5">
                {imageError ? (
                    <icons.shieldCheck className="h-8 w-8 text-amber-300" />
                ) : (
                    <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain p-1"
                        onError={() => setImageError(true)}
                        sizes="64px"
                    />
                )}
            </div>
            <h3 className="font-heading font-bold text-foreground">{cert.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
        </div>
    );
};

const AboutCertificates = () => {
    const t = useTranslations('About');

    const CERTIFICATES: CertificateProps[] = [
        { name: 'ISO 9001:2015', desc: t('certificates.iso'), image: '/about/certificates/iso.webp' },
        { name: 'RoHS Compliant', desc: t('certificates.rohs'), image: '/about/certificates/rohs.webp' },
        { name: 'CE Conformity', desc: t('certificates.ce'), image: '/about/certificates/ce.webp' },
        { name: 'MSME / Udyam', desc: t('certificates.msme'), image: '/about/certificates/msme.webp' },
    ];

    return (
        <Section className="relative bg-[#f4f5f7] overflow-hidden">
            <BackgroundNoise />
            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <Fade>
                        <EyeBrowSimple>{t('certificates.eyebrow')}</EyeBrowSimple>
                        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground max-w-xl leading-[1.12] mt-4">
                            {t('certificates.heading')}
                        </h2>
                    </Fade>
                    <Fade delay={0.1}>
                        <CustomLink href="/quality-policy" variant="button-white" className="border border-border">
                            {t('certificates.cta')}
                        </CustomLink>
                    </Fade>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {CERTIFICATES.map((c, i) => (
                        <Fade key={c.name} delay={0.08 * i}>
                            <CertificateCard cert={c} />
                        </Fade>
                    ))}
                </div>

                <Fade delay={0.2}>
                    <div className="mt-10 flex items-start gap-4 border-l-2 border-primary bg-white rounded-r-2xl p-6">
                        <icons.fileCheck2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">{t('certificates.docLabel')}</span> {t('certificates.docDesc')}
                        </p>
                    </div>
                </Fade>
            </Container>
        </Section>
    );
};

export default AboutCertificates;
