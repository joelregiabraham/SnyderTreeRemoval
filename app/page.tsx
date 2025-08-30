import Header from "@/components/header"
//import Hero from "@/components/hero"
import HeroModern from "@/components/hero-modern"
import About from "@/components/about"
import Services from "@/components/services"
//import ServicesPreview from "@/components/services-preview"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <Hero /> */}
      <HeroModern />
      <About />
      <Services />
      {/* <ServicesPreview /> */}
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
