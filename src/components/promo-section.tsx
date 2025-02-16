import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface PromoSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function PromoSection({ title, description, imageUrl, reverse = false }: PromoSectionProps) {
  return (
    <section className={`py-20 ${reverse ? "bg-[#3F4F44]" : "bg-[#2C3930]"}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="rounded-lg shadow-xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#DCD7C9]">{title}</h2>
            <p className="text-[#DCD7C9]/80 text-lg">{description}</p>
            <Button className="group relative bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9] px-6 py-3 overflow-hidden transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-[#2C3930] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
