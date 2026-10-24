import AboutHero from "@/components/pages/about/hero/AboutHero"
import AboutIntro from "@/components/pages/about/intro/AboutIntro"
import AboutJourney from "@/components/pages/about/journey/AboutJourney"
import AboutVisionMission from "@/components/pages/about/vision-mission/AboutVisionMission"
import AboutCertificates from "@/components/pages/about/certificates/AboutCertificates"
import HomeCTA from "@/components/pages/home/cta/HomeCTA"

const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <AboutIntro />
            <AboutJourney />
            <AboutVisionMission />
            <AboutCertificates />
            <HomeCTA />
        </div>
    )
}

export default AboutPage
