import { Users } from "lucide-react"

export function Why108Countries() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#6A4FC8]/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#E26EE5]/20 backdrop-blur-sm border-4 border-[#FFD700]/30 flex items-center justify-center overflow-hidden">
              <img
                src="/diverse-hands-holding-together-in-pentagon-circle-.jpg"
                alt="108 nations united - hands holding in pentagon pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="text-center relative z-10">
                <p className="text-8xl md:text-9xl font-bold text-[#FFD700]">108</p>
                <p className="text-2xl font-semibold text-[#C0C0C0] mt-4">Nations United</p>
              </div>
            </div>
            {/* Connecting light trails */}
            <div className="absolute inset-0 animate-pulse">
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6A4FC8] to-transparent" />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E26EE5] to-transparent" />
              <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Why 108 Countries?</h2>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              The number <span className="text-[#FFD700] font-semibold">108</span> holds deep spiritual and cultural
              significance across many traditions—representing wholeness, the universe, and cosmic unity. Uniting 108 nations in a shared cosmic mission, we ignite innovation through diversity, break barriers through collaboration, and build a future where humanity explores, learns, and thrives together among the stars.

            </p>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              By bringing together 108 nations, we celebrate diversity as our greatest strength. Innovation thrives
              through collaboration, and together we prove that humanity's potential is limitless.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[#E26EE5]" />
                <p className="text-2xl md:text-3xl font-semibold text-[#E26EE5] italic">"108 nations, one cosmos."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
