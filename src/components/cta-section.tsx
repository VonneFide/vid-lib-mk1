import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#2C3930]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#DCD7C9] mb-6">
          Ready to Take Your Video Skills to the Next Level?
        </h2>
        <p className="text-xl text-[#DCD7C9]/80 mb-8 max-w-2xl mx-auto">
          Get instant access to our library of professional-grade video tutorials and start creating stunning videos
          today!
        </p>
        <Button className="group relative bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9] text-lg px-8 py-6 overflow-hidden transition-all duration-300 transform hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            Start Your Journey Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-[#3F4F44] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Button>
      </div>
    </section>
  )
}

