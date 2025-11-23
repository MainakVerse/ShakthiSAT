"use client"
import { useState, useEffect } from "react"
import advisorsData from "@/data/advisors.json"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"

export default function AdvisorsPage() {
  const [search, setSearch] = useState("")
  const [advisors, setAdvisors] = useState<any[]>([])

  useEffect(() => {
    setAdvisors(advisorsData)
  }, [])

  const filtered = advisors.filter(a =>
    a?.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Our Advisors
          </h1>
        </div>

        {/* Search */}
        <div className="mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search advisors by name..."
            className="w-full px-4 py-3 rounded-lg bg-[#12152e] text-white border border-[#383c6b]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((advisor) => (
            <div
              key={advisor.name}
              className="flex bg-[#12152e] rounded-xl p-6 shadow-lg hover:shadow-[#6A4FC8]/40 transition min-h-[220px]"
            >
              {/* Image (1 part) */}
              <div className="w-1/4 relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text (3 parts) */}
              <div className="w-3/4 pl-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-3">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-[#C0C0C0] leading-relaxed">
                    {advisor.desc}
                  </p>
                </div>

                {/* <div className="mt-4">
                  <a
                    href={advisor.poster}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-md bg-[#6A4FC8] text-white font-semibold hover:bg-[#8d6bff] transition"
                  >
                    View Poster
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
      <ContactFooter  />
    </main>
  )
}
