import Header from "@/components/header"
import HeroModern from "@/components/hero-modern"
import ServicesPreview from "@/components/services-preview"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomeModern() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroModern />
      <ServicesPreview />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
