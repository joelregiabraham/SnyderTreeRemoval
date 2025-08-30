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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        {/* Compact Liquid Glass Card */}
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-1000 group hover:scale-[1.01] sm:hover:scale-[1.02] max-w-4xl mx-auto ${
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
            className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
              backgroundSize: "200% 200%",
              animation: "liquidFlow 3s ease-in-out infinite",
            }}
          />

          {/* Floating Glass Particles - Compact Positioning */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3 right-2 sm:top-4 sm:right-3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-2 left-3 sm:bottom-3 sm:left-4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-1 h-1 bg-white/35 rounded-full animate-ping delay-500"></div>

          <div className="relative z-10">
            {/* Compact Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              Snyder Tree Removal
            </h1>

            {/* Compact Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 text-green-200 tracking-wide drop-shadow-md">
              Family-Owned Since 2010
            </h2>

            {/* Compact Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Expert care, safe and reliable tree services for your property
            </p>

            {/* Compact Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <Button
                size="lg"
                className="relative overflow-hidden bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 group rounded-lg sm:rounded-xl border border-white/30 backdrop-blur-sm w-full xs:w-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                  backdropFilter: "blur(10px)",
                }}
                asChild
              >
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg sm:rounded-xl backdrop-blur-sm w-full xs:w-auto"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Compact Stats Bar */}
            <div className="pt-4 sm:pt-6 border-t border-white/30">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md sm:max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                    {years.count}+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center border-x border-white/30">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                    {clients.count}+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-medium">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                    {satisfaction.count}%
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-medium">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div
            className="text-xs uppercase tracking-wider mb-2 text-white font-medium px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Scroll Down
          </div>
          <div
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          >
            <div className="w-1 h-2 sm:h-3 bg-white/80 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
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
