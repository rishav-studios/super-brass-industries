// import Hero from "@/components/pages/home/hero/Hero"
import HomeAbout from "@/components/pages/home/about/HomeAbout"
import HomeCategories from "@/components/pages/home/categories/HomeCategories"
import HomeCTA from "@/components/pages/home/cta/HomeCTA"
import Exports from "@/components/pages/home/exports/Exports"
import HomeFAQ from "@/components/pages/home/faq/HomeFAQ"
import Hero from "@/components/pages/home/hero/Hero"
import HomeIndustries from "@/components/pages/home/industries/HomeIndustries"
import HomeOEM from "@/components/pages/home/oem/HomeOEM"
import HomeStatistics from "@/components/pages/home/statistics/HomeStatistics"
import HomeWhyUs from "@/components/pages/home/why-us/HomeWhyUs"
import { GlobeProvider } from "@/contexts/GlobeContext"

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      {/* <div className="bg-transparent h-dvh" /> */}
      <HomeAbout />
      <HomeOEM />
      <HomeCategories />
      <HomeIndustries />
      <HomeStatistics />
      <GlobeProvider>

        <Exports />
      </GlobeProvider>
      <HomeWhyUs />
      <HomeFAQ />
      <HomeCTA />
      {/* <Sectors />
      <HomeMaterials />
      <HomeImpact />
      <HomeQuality />
      <HomeCTA /> */}
    </div>
  )
}

export default HomePage