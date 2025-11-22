import Image from "next/image"

export function WhyShakthiSAT() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-transparent to-[#6A4FC8]/10">
      <div className="max-w-7xl mx-auto">

        {/* FULL-WIDTH CUT-CORNER BOX */}
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

          {/* GRID */}
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* LEFT IMAGE */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <div className="
                relative 
                w-[260px] h-[260px]
                sm:w-[340px] sm:h-[340px]
                md:w-[500px] md:h-[500px]
              ">
                <Image
                  src="/shakthisat-poster.png"
                  alt="ShakthiSAT Poster"
                  className="object-contain"
                  fill
                />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-span-12 md:col-span-6 space-y-4 sm:space-y-5 md:space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
                What is Mission ShakthiSAT?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                ShakthiSAT represents more than a satellite mission—it's a philosophy of building bridges across cultures through STEM and space collaboration.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                It stands as a beacon of hope, dedicated to fostering unparalleled international cooperation and unity across the globe.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                ShakthiSAT sparks a shared sense of purpose, reminding us that discovery becomes richer when humanity learns, builds, and reaches upward together. It encourages collaboration that transcends nationality, language, and geography, allowing young learners to see themselves as contributors to a global scientific journey rather than observers from afar.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                With every step forward, the mission reinforces the belief that space is not the privilege of a few, but a frontier that belongs to all.
              </p>

              <blockquote className="text-base sm:text-lg md:text-xl font-semibold text-[#FFD700] italic border-l-4 border-[#FFD700] pl-3 sm:pl-4">
                "When humanity looks up, we see no borders."
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
