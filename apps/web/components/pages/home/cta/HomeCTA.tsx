import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { EyeBrowSimple } from "@/components/shared/SectionHeader";
import { icons } from "@super/ui";
import { useTranslations } from "next-intl";

const HomeCTA = () => {
    const t = useTranslations('HomeCTA');
    return (
        <Section className="relative overflow-hidden bg-primary min-h-max" data-testid="cta-band">
            <Container>
                <div className="max-w-3xl">
                    <Fade>
                        <EyeBrowSimple light>{t('eyebrow')}</EyeBrowSimple>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            {t('headingStart')}{' '}
                            <span className="relative inline-block">
                                {t('headingHighlight')}
                                <span className="absolute -bottom-1 left-0 h-0.75 w-full bg-white" />
                            </span>
                        </h2>
                        <p className="mt-5 text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                            {t('subtitle')}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <CustomLink href="/contact" variant="button-white" className="pr-6" data-testid="cta-quote-btn">
                                <icons.fileText className="mr-2 h-4 w-4" /> {t('ctaQuote')}
                            </CustomLink>
                            <CustomLink href="/contact" variant="outline-white" className="pr-6 text-white" data-testid="cta-quote-btn">
                                {t('ctaTalk')} <icons.arrowRight className="ml-2 h-4 w-4" />
                            </CustomLink>
                        </div>
                    </Fade>
                </div>
            </Container>
        </Section>
    );
};

export default HomeCTA;
