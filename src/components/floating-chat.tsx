"use client"
import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="bg-[#2C3930] rounded-lg shadow-xl p-4 mb-4 w-64 sm:w-80"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#DCD7C9]">Chat with us</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-[#DCD7C9] hover:text-[#A27B5C]"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#3F4F44] p-2 rounded text-[#DCD7C9] text-sm">How can we help you today?</div>
              <Textarea
                placeholder="Type your message..."
                className="bg-[#3F4F44] border-none flex-grow px-3 h-32 py-2 text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
              />
              <Button className="w-full bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]">Send</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-[#A27B5C] text-[#DCD7C9] rounded-full p-3 shadow-lg hover:bg-[#A27B5C]/90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  )
}

