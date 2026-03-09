import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { BrandSection } from "@/components/brand-section"
import { NewArrivals } from "@/components/new-arrivals"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandSection />
        <NewArrivals />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
