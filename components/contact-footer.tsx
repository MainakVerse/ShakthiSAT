import { Mail, Youtube, Facebook, Instagram, Linkedin, Phone } from "lucide-react"

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UC9h3gSV_hiLKTvjTBvTt-hg", label: "Youtube" },
  { icon: Facebook, href: "https://www.facebook.com/SpaceKidzIndia/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/spacekidzindia/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/space-kidz-india?originalSubdomain=in", label: "LinkedIn" },
]

export function ContactFooter() {
  return (
    <footer className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-black from-transparent to-[#02020c]">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-12">

            {/* ShakthiSAT Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">ShakthiSAT</h3>
              <p className="text-sm sm:text-lg text-[#C0C0C0] mb-4 sm:mb-6 leading-relaxed">
                Empowering 12,000 girls from 108 nations through space education and satellite technology.
              </p>
              <div className="flex items-center gap-2 text-[#FFD700] break-words">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <a href="mailto:shakthisat@hotmail.com" className="hover:underline text-sm sm:text-base">
                  shakthisat@hotmail.com
                </a>
              </div>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Partners</h4>
              <div className="space-y-2 sm:space-y-3 text-[#C0C0C0]">
                <p className="text-sm sm:text-base">Space Kidz India</p>
                <p className="text-sm sm:text-base">SKI Star Foundation</p>
                <p className="text-xs sm:text-sm italic">+ 108 Nations Worldwide</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-2 sm:space-y-3 text-[#C0C0C0] break-words">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700]" />
                  <a href="mailto:spacekidzindia@gmail.com" className="hover:text-[#FFD700] transition-colors text-sm sm:text-base">
                    spacekidzindia@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFD700]" />
                  <a href="mailto:shakthisat@hotmail.com" className="hover:text-[#FFD700] transition-colors text-sm sm:text-base">
                    shakthisat@hotmail.com
                  </a>
                </div>
               
              </div>
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-[#6A4FC8]/30 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center">

              <p className="text-[#C0C0C0] text-xs sm:text-sm">
                © 2025 ShakthiSAT. All rights reserved.
              </p>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6A4FC8]/20 border border-[#6A4FC8]/30 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all group"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#C0C0C0] group-hover:text-[#0B0C2A]" />
                    </a>
                  )
                })}
              </div>

              <p className="text-[#FFD700] text-xs sm:text-sm font-medium italic">
                Where Every Girl is a Star ✨
              </p>

            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
