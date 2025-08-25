"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Custom hook for counting animation
function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const timer = setTimeout(() => {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay, hasStarted])

  return { count, startCounting: () => setHasStarted(true) }
}

export default function HeroClean() {
  const [isVisible, setIsVisible] = useState(false)

  // Counting animations for stats
  const years = useCountUp(15, 2000, 800)
  const clients = useCountUp(1000, 2500, 1000)
  const satisfaction = useCountUp(100, 2000, 1200)

  useEffect(() => {
    setIsVisible(true)
    // Start counting animations when component mounts
    const timer = setTimeout(() => {
      years.startCounting()
      clients.startCounting()
      satisfaction.startCounting()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Crystal Clear */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image3.jpg"
          alt="Professional tree removal service"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
        />
        {/* Minimal overlay only behind the text card */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Liquid Glass Card */}
        <div
          className={`relative overflow-hidden rounded-3xl p-12 sm:p-16 lg:p-20 transition-all duration-1000 group hover:scale-[1.02] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 25px 45px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05) inset",
          }}
        >
          {/* Liquid Glass Border Animation */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
              backgroundSize: "200% 200%",
              animation: "liquidFlow 3s ease-in-out infinite",
            }}
          />

          {/* Floating Glass Particles */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/35 rounded-full animate-ping delay-500"></div>

          <div className="relative z-10">
            {/* Main Heading - Enhanced for Glass Effect */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Snyder Tree Removal
            </h1>

            {/* Subheading - Glass Style */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 text-green-200 tracking-wide drop-shadow-md">
              Family-Owned Since 2010
            </h2>

            {/* Description - Glass Readable */}
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Expert care, safe and reliable tree services for your property
            </p>

            {/* Glass Style Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="relative overflow-hidden bg-white/20 hover:bg-white/30 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 group rounded-xl border border-white/30 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                  backdropFilter: "blur(10px)",
                }}
                asChild
              >
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-xl backdrop-blur-sm"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Glass Stats Bar */}
            <div className="pt-8 border-t border-white/30">
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{years.count}+</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider font-medium">Years Experience</div>
                </div>
                <div className="text-center border-x border-white/30">
                  <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{clients.count}+</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{satisfaction.count}%</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div
            className="text-xs uppercase tracking-wider mb-2 text-white font-medium px-3 py-1 rounded-full backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Scroll Down
          </div>
          <div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          >
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Liquid Flow */}
      <style jsx>{`
        @keyframes liquidFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}
