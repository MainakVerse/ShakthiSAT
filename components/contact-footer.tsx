import { Mail, Youtube, Facebook, Instagram, Linkedin, Phone } from "lucide-react"

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UC9h3gSV_hiLKTvjTBvTt-hg", label: "Youtube" },
  { icon: Facebook, href: "https://www.facebook.com/SpaceKidzIndia/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/spacekidzindia/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/space-kidz-india?originalSubdomain=in", label: "LinkedIn" },
]

export function ContactFooter() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-transparent to-[#0B0C2A]">
      <div className="max-w-7xl mx-auto">
        {/* Updated Grid - Now 3 Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* ShakthiSAT Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">ShakthiSAT</h3>
            <p className="text-lg text-[#C0C0C0] mb-6 leading-relaxed">
              Empowering 12,000 girls from 108 nations through space education and satellite technology.
            </p>
            <div className="flex items-center gap-2 text-[#FFD700]">
              <Mail className="h-5 w-5" />
              <a href="mailto:shakthisat@hotmail.com" className="hover:underline">
                shakthisat@hotmail.com
              </a>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Partners</h4>
            <div className="space-y-3 text-[#C0C0C0]">
              <p>Space Kidz India</p>
              <p>SKI Star Foundation</p>
              <p className="text-sm italic">+ 108 Nations Worldwide</p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-[#C0C0C0]">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FFD700]" />
                <a href="mailto:spacekidzindia@gmail.com" className="hover:text-[#FFD700] transition-colors">
                  spacekidzindia@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FFD700]" />
                <a href="mailto:shakthisat@hotmail.com" className="hover:text-[#FFD700] transition-colors">
                  shakthisat@hotmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FFD700]" />
                <span>+91 99628 33622</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FFD700]" />
                <span>+91 93422 42593</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#6A4FC8]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#C0C0C0] text-sm">© 2025 ShakthiSAT. All rights reserved.</p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[#6A4FC8]/20 border border-[#6A4FC8]/30 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all group"
                  >
                    <Icon className="h-5 w-5 text-[#C0C0C0] group-hover:text-[#0B0C2A]" />
                  </a>
                )
              })}
            </div>

            <p className="text-[#FFD700] text-sm font-medium italic">Where Every Girl is a Star ✨</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
