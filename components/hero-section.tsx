"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Pause } from "lucide-react"

const phrases = ["From AzaadiSAT to the Moon.", "108 Nations — 12,000 Girls.", "One Mission: Empower Futures."]

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [motionMode, setMotionMode] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(phrases.join(" "))
      return
    }

    let charIndex = 0
    const phrase = phrases[currentPhrase]
    setDisplayText("")
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (charIndex < phrase.length) {
        setDisplayText(phrase.slice(0, charIndex + 1))
        charIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
        setTimeout(() => setCurrentPhrase((prev) => (prev + 1) % phrases.length), 2000)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentPhrase, prefersReducedMotion])

  const scrollToMission = () => {
    document.getElementById("mission-overview")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleMotionMode = () => {
    if (prefersReducedMotion) return
    setMotionMode(!motionMode)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/space-bg.mp4" // <-- replace with your video path
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6A4FC8]/30 via-transparent to-[#E26EE5]/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-6 text-white drop-shadow-lg">
          ShakthiSAT
        </h1>

        <div className="h-16 md:h-20 flex items-center justify-center mb-12" aria-live="polite" aria-atomic="true">
          <p className="text-xl md:text-3xl font-medium text-gray-200">
            {displayText}
            {isTyping && !prefersReducedMotion && (
              <span className="inline-block w-0.5 h-6 md:h-8 bg-[#FFD700] ml-1 animate-pulse" />
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToMission}
            className="bg-[#FFD700] text-[#0B0C2A] hover:bg-violet-500 font-semibold text-lg px-8 py-6"
          >
            Explore Mission
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            onClick={toggleMotionMode}
            variant="outline"
            disabled={prefersReducedMotion}
            className={`bg-green-500 text-white hover:bg-blue-600 font-semibold text-lg px-8 py-6 ${
              motionMode ? "pulse-ring-green" : ""
            }`}
          >
            {motionMode ? (
              <>
                <Pause className="mr-2 h-5 w-5" /> Pause Motion
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" /> Motion Mode
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
