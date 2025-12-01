export function MissionOverview() {
  return (
    <section
      id="mission-overview"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full border border-white/40 overflow-hidden p-6 sm:p-8 md:p-10 mx-auto">

          {/* Corner accents remain unchanged */}
          {/* ...keep your existing corner spans here... */}

          {/* TEXT */}
          <div className="space-y-4 sm:space-y-6 mb-10">
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
             The mission sets out on a bold journey to spark curiosity, courage, and a lifelong passion for STEM and space exploration in 12,000 brilliant young girls from 108 nations. United by a shared spirit of discovery, these future pioneers will step into the fascinating world of satellites, science, and innovation. ShakthiSAT isn’t just a project — it’s a global movement, opening doors to dreamers from every continent and every culture. Together, we explore the cosmos, break down barriers, and rise as the next generation of space leaders who will boldly shape the future among the stars.</p>

           
          </div>

         
          {/* VIDEO FULL WIDTH */}
          <div className="w-full">
            <div className="relative w-full aspect-video border border-white/40 shadow-xl overflow-hidden">

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
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/vU6PDFdgf8k?autoplay=1&mute=0&loop=1&playlist=vU6PDFdgf8k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
