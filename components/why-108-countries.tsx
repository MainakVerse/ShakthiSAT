import { Users } from "lucide-react"

export function Why108Countries() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#6A4FC8]/10 to-transparent">
      <div className="max-w-7xl mx-auto">

        {/* CUT-CORNER BOX */}
        <div className="relative w-full border border-white/40 overflow-hidden p-6 sm:p-8 md:p-10 mx-auto">

          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 left-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute top-0 right-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 right-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 left-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 left-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 right-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 right-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          {/* 12-COLUMN GRID */}
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* LEFT CIRCLE VISUAL */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <div className="relative 
                w-[260px] h-[260px]
                sm:w-[320px] sm:h-[320px]
                md:w-[420px] md:h-[420px]
                rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#E26EE5]/20 
                backdrop-blur-sm border-4 border-[#FFD700]/30 flex items-center justify-center overflow-hidden"
              >
                <img
                  src="/diverse-hands-holding-together-in-pentagon-circle-.jpg"
                  alt="108 nations united"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="text-center relative z-10">
                  <p className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#FFD700]">108</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#C0C0C0] mt-2 sm:mt-3">
                    Nations United
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-span-12 md:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Why 108 Countries?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                The number <span className="text-[#FFD700] font-semibold">108</span> carries deep cultural,
                scientific, and spiritual significance across civilizations—symbolizing completeness,
                cosmic harmony, and unity. Bringing together 108 nations in a shared mission sparks
                innovation through diversity, strengthens collaboration, and builds a future where
                humanity learns, explores, and grows together among the stars.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                By uniting 108 countries, we celebrate diversity as a force multiplier—proving that
                breakthroughs flourish when perspectives merge, borders fade, and the cosmos becomes
                a shared destination rather than a distant dream.
              </p>

              <blockquote className="text-base sm:text-lg md:text-xl font-semibold text-[#E26EE5] italic border-l-4 border-[#E26EE5] pl-3 sm:pl-4">
                "108 nations, one cosmos."
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
