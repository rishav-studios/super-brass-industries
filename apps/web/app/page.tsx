// import Hero from "@/components/pages/home/hero/Hero"
import Hero from "@/components/pages/home/hero/Hero2"
import HomeAbout from "@/components/pages/home/about/HomeAbout"
import HomeCategories from "@/components/pages/home/categories/HomeCategories"
import HomeStatistics from "@/components/pages/home/statistics/HomeStatistics"
import HomeWhyUs from "@/components/pages/home/why-us/HomeWhyUs"
import HomeFAQ from "@/components/pages/home/faq/HomeFAQ"
import HomeCTA2 from "@/components/pages/home/cta/HomeCTA2"

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      {/* <div className="bg-transparent h-dvh" /> */}
      <HomeAbout />
      <HomeCategories />
      <HomeStatistics />
      <HomeWhyUs />
      <HomeFAQ />
      <HomeCTA2 />
      {/* <Sectors />
      <HomeMaterials />
      <HomeImpact />
      <HomeQuality />
      <HomeCTA /> */}
    </div>
  )
}

export default HomePage