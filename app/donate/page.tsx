"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { ContactFooter } from "@/components/contact-footer"

export default function DonatePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0A0E27] text-white px-6 py-20 text-center">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
        Support ShakthiSAT
      </h1>
      <p className="max-w-2xl text-lg text-gray-300 mb-10">
        Every contribution helps us empower thousands of young girls in STEM across 108 nations.  
        Your support fuels education, innovation, and equality in space technology.
      </p>

      {/* Donation Options */}
      <div className="flex flex-col sm:flex-row gap-6 mb-12">
        <Button className="bg-white text-[#0A0E27] hover:bg-[#FFD700] text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6A4FC8]/40 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#FF6EC7]" /> Donate ₹100
        </Button>
        <Button className="bg-white text-[#0A0E27] hover:bg-[#FFD700] text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6A4FC8]/40 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#6A4FC8]" /> Donate ₹500
        </Button>
        <Button className="bg-white text-[#0A0E27] hover:bg-[#FFD700] text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6A4FC8]/40 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#FFD700]" /> Donate ₹1000
        </Button>
         <Button className="bg-white text-[#0A0E27] hover:bg-[#FFD700] text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6A4FC8]/40 flex items-center gap-2">
          <Heart className="h-5 w-5 text-[#FFD700]" /> Custom (Above ₹1000 to ₹100,000)
        </Button>
      </div>

      {/* Custom amount / Back button */}
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="text-[#C0C0C0] hover:text-white underline">
          Back to Home
        </Link>
      </div>
    </section>
    
  )
}
