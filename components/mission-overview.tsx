export function MissionOverview() {
  return (
    <section
      id="mission-overview"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4"
    >
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

          {/* GRID */}
          <div className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="col-span-12 md:col-span-6 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase tracking-tight">
                Mission Overview
              </h2>

              <p className="text-sm sm:text-base md:text-xl text-[#C0C0C0] leading-relaxed">
                ShakthiSAT is a global mission to empower{" "}
                <span className="text-[#FFD700] font-semibold">12,000 girls</span>{" "}
                from{" "}
                <span className="text-[#E26EE5] font-semibold">108 countries</span>{" "}
                through real-time satellite projects.
              </p>

              <p className="text-sm sm:text-base md:text-xl text-[#C0C0C0] leading-relaxed">
                The mission aims to ignite passion for STEM and space by bringing together
                12000 girls across 108 nations. Driven by the desire to empower young girls
                globally through the awe-inspiring realm of space exploration, ShakthiSAT
                welcomes participation from every corner of the world.
              </p>

              <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#63d7e9] italic pt-2 sm:pt-4">
                "Uniting Humanity Under One Sky."
              </p>
            </div>

            {/* RIGHT VIDEO FRAME */}
            <div className="col-span-12 md:col-span-6">
              <div
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  sm:aspect-video
                  overflow-hidden
                  border border-white/40
                  shadow-xl
                "
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-6 h-[2px] bg-white"></span>
                <span className="absolute top-0 left-0 h-6 w-[2px] bg-white"></span>

                <span className="absolute top-0 right-0 w-6 h-[2px] bg-white"></span>
                <span className="absolute top-0 right-0 h-6 w-[2px] bg-white"></span>

                <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-white"></span>
                <span className="absolute bottom-0 left-0 h-6 w-[2px] bg-white"></span>

                <span className="absolute bottom-0 right-0 w-6 h-[2px] bg-white"></span>
                <span className="absolute bottom-0 right-0 h-6 w-[2px] bg-white"></span>

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=0&mute=1"
                  allowFullScreen
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
