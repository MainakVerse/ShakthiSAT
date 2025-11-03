import { Globe2 } from "lucide-react"

export function WhyShakthiSAT() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#6A4FC8]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[#E26EE5]/20 to-[#6A4FC8]/20 backdrop-blur-sm border border-[#6A4FC8]/30 flex items-center justify-center p-8">
              <Globe2 className="h-48 w-48 text-[#6A4FC8]" strokeWidth={1} />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Why ShakthiSAT?</h2>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              ShakthiSAT represents more than a satellite mission—it's a philosophy of building bridges across cultures
              through STEM and space collaboration.
            </p>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              We highlight international cooperation, cultural unity, and peace. By bringing together young minds from
              every corner of the globe, we prove that innovation knows no borders.
            </p>
            <div className="pt-4">
              <blockquote className="text-2xl md:text-3xl font-semibold text-[#FFD700] italic border-l-4 border-[#FFD700] pl-6">
                "When humanity looks up, we see no borders."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
