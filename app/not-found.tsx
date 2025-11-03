"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A0E27] text-white text-center px-6 relative overflow-hidden">
      {/* Floating Stars Animation */}
      <div className="absolute inset-0">
        <div className="animate-pulse absolute top-10 left-10 w-2 h-2 bg-[#FFD700] rounded-full" />
        <div className="animate-pulse absolute bottom-20 right-16 w-1.5 h-1.5 bg-[#FF6EC7] rounded-full" />
        <div className="animate-pulse absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#6A4FC8] rounded-full" />
      </div>


      {/* Confused Satellite Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        <Image
          src="/404-satellite.png" // <-- place your image in /public/404-satellite.png
          alt="Confused Satellite"
          fill
          className="object-contain rounded-full drop-shadow-[0_0_25px_rgba(106,79,200,0.5)]"
        />
      </motion.div>

      {/* Back Home Button */}
      <Link
        href="/"
        className="mt-10 inline-block bg-white text-[#0A0E27] rounded-full font-semibold text-lg px-8 py-3 hover:bg-[#FFD700] transition-all duration-300 shadow-md shadow-[#6A4FC8]/40 border border-white"
      >
        Back to Home
      </Link>
    </section>
  )
}
