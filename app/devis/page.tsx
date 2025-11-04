"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import ambassadorsData from "@/data/ambassadors.json"

export default function AmbassadorsPage() {
  const ambassadors = ambassadorsData
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<any>(null)
  const [page, setPage] = useState(1)
  const perPage = 6

  const filtered = ambassadors.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#9D4EDD] bg-clip-text text-transparent">
            ShakthiSAT Ambassadors
          </h1>
          <p className="text-[#C0C0C0] mt-4">
            Meet the women inspiring the next generation of explorers.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            placeholder="Search ambassadors..."
            className="w-full max-w-md px-4 py-2 rounded-full bg-[#1a1f3a] border border-[#6A4FC8] text-white placeholder-[#C0C0C0] focus:outline-none focus:border-[#00FFFF]"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#1a1f3a]/70 p-4 rounded-2xl
              border border-[#6A4FC8]/40 shadow-[0_0_15px_#6A4FC8]
              hover:shadow-[0_0_25px_#00FFFF] transition-all"
            >
              {/* Image + Name */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#00FFFF]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  <p className="text-[#C0C0C0]">{person.role}</p>
                </div>
              </div>

              {/* Short Info */}
              <p className="mt-4 text-[#C0C0C0] text-sm leading-relaxed">{person.short}</p>

              {/* Button */}
              <button
                onClick={() => setSelected(person)}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-[#00FFFF] to-[#9D4EDD] rounded-full text-black font-semibold hover:opacity-90 transition"
              >
                Know More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-[#1a1f3a] border border-[#6A4FC8] rounded-md hover:border-[#00FFFF] disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-[#C0C0C0]">{page} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-[#1a1f3a] border border-[#6A4FC8] rounded-md hover:border-[#00FFFF] disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-2xl max-w-lg w-full p-6 relative shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#9D4EDD]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selected.name}</h2>
                  <p className="text-gray-700">{selected.role}</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">{selected.full}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
