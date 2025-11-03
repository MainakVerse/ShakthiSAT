"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A0E27] text-white text-center px-6 relative overflow-hidden">
      {/* Floating Stars Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse absolute top-10 left-10 w-2 h-2 bg-[#FFD700] rounded-full" />
        <div className="animate-pulse absolute bottom-20 right-16 w-1.5 h-1.5 bg-[#FF6EC7] rounded-full" />
        <div className="animate-pulse absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#6A4FC8] rounded-full" />
      </div>

      {/* Confused Satellite Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 z-10"
      >
        <Image
          src="/404-satellite.png" // put image in /public/
          alt="Confused Satellite"
          fill
          className="object-contain rounded-full drop-shadow-[0_0_25px_rgba(106,79,200,0.5)]"
        />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mt-6 z-10"
      >
        404 – Lost in Space
      </motion.h1>
      <p className="mt-3 text-lg text-gray-300 max-w-md z-10">
        Looks like this page drifted off orbit. Let’s bring you back home.
      </p>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10"
      >
        <Link
          href="/"
          className="mt-10 inline-block bg-white text-[#0A0E27] rounded-full font-semibold text-lg px-8 py-3 hover:bg-[#FFD700] transition-all duration-300 shadow-md shadow-[#6A4FC8]/40 border border-white"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
