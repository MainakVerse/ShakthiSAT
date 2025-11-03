"use client"

import { useEffect, useRef } from "react"

export function Starfield() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create stars
    const starCount = 150
    const stars: HTMLDivElement[] = []

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.width = `${Math.random() * 3}px`
      star.style.height = star.style.width
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 3}s`
      star.style.animationDuration = `${2 + Math.random() * 3}s`

      canvasRef.current.appendChild(star)
      stars.push(star)
    }

    return () => {
      stars.forEach((star) => star.remove())
    }
  }, [])

  return <div ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}
