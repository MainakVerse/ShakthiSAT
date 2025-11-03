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

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Typewriter effect
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
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentPhrase, prefersReducedMotion])

  // Motion mode auto-scroll
  useEffect(() => {
    if (motionMode && !prefersReducedMotion) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const duration = 40000 // 40 seconds
      const startTime = Date.now()
      const startScroll = window.scrollY

      const scroll = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startScroll + (scrollHeight - startScroll) * progress)

        if (progress < 1) {
          scrollIntervalRef.current = setTimeout(scroll, 16)
        } else {
          setMotionMode(false)
        }
      }

      scroll()

      // Pause on user interaction
      const pauseScroll = () => {
        if (scrollIntervalRef.current) {
          clearTimeout(scrollIntervalRef.current)
          setMotionMode(false)
        }
      }

      window.addEventListener("wheel", pauseScroll)
      window.addEventListener("touchstart", pauseScroll)
      window.addEventListener("keydown", pauseScroll)

      return () => {
        if (scrollIntervalRef.current) clearTimeout(scrollIntervalRef.current)
        window.removeEventListener("wheel", pauseScroll)
        window.removeEventListener("touchstart", pauseScroll)
        window.removeEventListener("keydown", pauseScroll)
      }
    }
  }, [motionMode, prefersReducedMotion])

  const scrollToMission = () => {
    document.getElementById("mission-overview")?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleMotionMode = () => {
    if (prefersReducedMotion) return
    setMotionMode(!motionMode)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6A4FC8]/20 via-transparent to-[#E26EE5]/10 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-6 glow-text">
          ShakthiSAT
        </h1>

        <div className="h-16 md:h-20 flex items-center justify-center mb-12" aria-live="polite" aria-atomic="true">
          <p className="text-xl md:text-3xl font-medium text-[#C0C0C0]">
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
                <Pause className="mr-2 h-5 w-5" />
                Pause Motion
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" />
                Motion Mode
              </>
            )}
          </Button>
        </div>

        {prefersReducedMotion && <p className="sr-only">Motion mode disabled due to reduced motion preference</p>}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-[#C0C0C0]" />
      </div>
    </section>
  )
}
