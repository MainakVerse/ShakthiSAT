"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

export function SpiralSatellite() {
  const { scrollYProgress } = useScroll()

  // Screen size for final bottom-right landing
  const [screen, setScreen] = useState({ w: 0, h: 0 })
  const imageSize = 160

  useEffect(() => {
    const update = () =>
      setScreen({ w: window.innerWidth, h: window.innerHeight })

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Starting visible position
  const startX = 20
  const startY = 20

  // Ending bottom-right screen corner
  const endX = screen.w - imageSize - 20
  const endY = screen.h - imageSize - 20

  // Motion values
  const x: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [startX, endX || startX])
  const yScroll: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [startY, endY || startY])

  const floatWave: MotionValue<number> = useTransform(scrollYProgress, [0, 0.1], [0, -20])
  const float: MotionValue<number> = useSpring(floatWave, { stiffness: 50, damping: 10 })

  const y: MotionValue<number> = useTransform([yScroll, float], ([base, wave]: number[]) => base + wave)

  const rotate: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 360])

  // Sparks only in hero section (scroll 0 → 10%)
  const sparkOpacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      {/* Satellite Float */}
      <motion.div
        animate={{ y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Satellite Image */}
        <Image
          src="/sat.png"
          alt="Satellite"
          width={imageSize}
          height={imageSize}
          className="opacity-90 drop-shadow-2xl"
        />

        {/* ⚡ SPARK EMITTER (bottom-right corner) */}
        <motion.div
          style={{ opacity: sparkOpacity }}
          className="absolute bottom-[-10px] right-[-10px] overflow-visible pointer-events-none"
        >
          {/* spark beam */}
          <div className="spark-line" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
