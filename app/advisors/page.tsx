"use client"
import { useState, useEffect } from "react"
import advisorsData from "@/data/advisors.json"
import Image from "next/image"
import { ContactFooter } from "@/components/contact-footer"

export default function AdvisorsPage() {
  const [search, setSearch] = useState("")
  const [advisors, setAdvisors] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    setAdvisors(advisorsData)
  }, [])

  const filtered = advisors.filter(a =>
    a?.name?.toLowerCase().includes(search.toLowerCase())
  )

  const openModal = (index: number) => {
    setActiveIndex(index)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setActiveIndex(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

  {/* Border Box */}
  <div className="border-2 border-white rounded-xl p-8">

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
      {filtered.map((advisor, index) => (
        <div
          key={advisor.name}
          className="flex bg-[#12152e] rounded-xl p-6 shadow-lg hover:shadow-[#6A4FC8]/40 transition min-h-[220px]"
        >
          {/* Image */}
          <div className="w-1/4 relative h-40 rounded-lg overflow-hidden">
            <Image
              src={advisor.image}
              alt={advisor.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-3/4 pl-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3">
                {advisor.name}
              </h3>
              <p className="text-sm text-[#C0C0C0] leading-relaxed">
                {advisor.desc}
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => openModal(index)}
                className="inline-block px-4 py-2 rounded-md bg-[#6A4FC8] text-white font-semibold hover:bg-[#8d6bff] transition"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>

</div>


      {/* Modal */}
      {showModal && activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#12152e] p-4 rounded-xl relative max-w-2xl w-[90%] overflow-hidden star-container"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-60">
              <Image
                src={`/adv-posters/bg.avif`}
                alt="Background Space"
                fill
                className="object-cover"
              />
            </div>

            {/* Star Tunnel Layer */}
            <div className="absolute inset-0 pointer-events-none star-tunnel z-0"></div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-3xl z-30"
            >
              ×
            </button>

            {/* Centered Poster */}
            <div className="relative w-full h-[500px] flex items-center justify-center z-20 mt-6">
              <div className="relative w-[90%] h-full">
                <Image
                  src={`/adv-posters/${activeIndex + 1}.jpg`}
                  alt="Advisor Poster"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      )}

      <ContactFooter />
    </main>
  )
}
