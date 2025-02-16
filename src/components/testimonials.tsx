import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Videographer",
    content: "The courses here have completely transformed my video production skills. The instructors are amazing!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Content Creator",
    content: "Best investment I've made in my career. The community and learning resources are invaluable.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Marketing Director",
    content: "High-quality content that helped our team level up our video marketing game.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#DCD7C9] mb-16">What Our Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#2C3930] p-6 rounded-lg transition-transform hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#A27B5C] fill-[#A27B5C]" />
                ))}
              </div>
              <p className="text-[#DCD7C9] mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-[#DCD7C9]">{testimonial.name}</p>
                <p className="text-[#DCD7C9]/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

