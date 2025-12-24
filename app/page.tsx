import Hero from "@/components/hero"
import Services from "@/components/services"
import FeaturedService from "@/components/featured-service"
import Articles from "@/components/articles"
import CompanyCta from "@/components/company-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedService />
      <Articles />
      <CompanyCta />
    </>
  )
}
