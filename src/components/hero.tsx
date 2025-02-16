'use-client'
import { useState, useEffect} from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CarouselImg1 from '../assets/car-item1.jpg'
import CarouselImg2 from '../assets/car-item2.jpg'
import CarouselImg3 from '../assets/car-item3.jpg'
import CarouselImg4 from '../assets/car-item4.jpg'
import CarouselImg5 from '../assets/car-item5.jpg'
import CarouselImg6 from '../assets/car-item6.jpg'

const carouselItems = [
  {
    image: CarouselImg1,
    title: "Cinematic Filmmaking",
    subtitle: "Master the art of storytelling through video",
  },
  {
    image: CarouselImg2,
    title: "Professional Editing",
    subtitle: "Learn industry-standard editing techniques",
  },
  {
    image: CarouselImg3,
    title: "Color Grading",
    subtitle: "Perfect your color grading skills",
  },
  {
    image: CarouselImg4,
    title: "Sound Design",
    subtitle: "Craft immersive audio experiences",
  },
  {
    image: CarouselImg5,
    title: "Visual Effects",
    subtitle: "Create stunning visual effects",
  },
  {
    image: CarouselImg6,
    title: "Scriptwriting",
    subtitle: "Write compelling screenplays",
  }
]

const companies = ["Google", "Adobe", "Apple", "Netflix", "Amazon", "Sony", "Canon", "DJI", "RED", "Blackmagic"]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)

  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-50" : "opacity-0"
            }`}
          >
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ))}
        
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#DCD7C9] mb-6 text-center">
          {carouselItems[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl text-[#DCD7C9]/80 mb-8 max-w-2xl mx-auto text-center">
          {carouselItems[currentSlide].subtitle}
        </p>

        <Button className="group relative bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9] text-lg px-8 py-6 overflow-hidden transition-all duration-300 transform hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            Get All Access
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-[#2C3930] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Button>

        {/* Carousel Controls */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

  <div className="relative w-full py-4 bg-[#2C3930]/80 backdrop-blur-sm overflow-hidden">
  {/* Title */}
  <p className="text-[#DCD7C9] mb-2 text-center">Trusted by professionals from</p>

  {/* Marquee Container */}
  <div className="relative flex items-center overflow-hidden">
    {/* Left & Right Fade Effect */}
    <motion.div
      className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#A27B5C] to-transparent pointer-events-none"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 0.5, 0.8] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    ></motion.div>
    
    <motion.div
      className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#A27B5C] to-transparent pointer-events-none"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 0.5, 0.8] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    ></motion.div>

    {/* Marquee Wrapper */}
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
    >
      {[...companies, ...companies].map((company, index) => (
        <span
          key={index}
          className="text-[#A27B5C] text-xl font-semibold hover:text-[#DCD7C9] transition-colors"
        >
          {company}
        </span>
      ))}
    </motion.div>
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
    >
      {["",...companies, ...companies].map((company, index) => (
        <span
          key={index}
          className="text-[#A27B5C] text-xl font-semibold hover:text-[#DCD7C9] transition-colors"
        >
          {company}
        </span>
      ))}
    </motion.div>
  </div>
</div>

    </section>
  )
}

