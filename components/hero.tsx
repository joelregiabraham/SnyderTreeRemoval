import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image4.jpg"
          alt="Professional tree removal service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Snyder Tree Removal
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-green-200">
            Family-Owned Since 2010
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Expert care, safe and reliable tree services for your property
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 text-lg" asChild>
            <a href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-forest-800 px-8 py-3 text-lg bg-transparent"
            asChild
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
