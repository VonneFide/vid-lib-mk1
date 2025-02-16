import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [message, setMessage] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed rounded-md1 inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2C3930] p-8 rounded-lg shadow-xl max-w-md w-full animate-popup">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#DCD7C9]">Contact Us</h2>
          <button onClick={onClose} className="text-[#DCD7C9] hover:text-[#A27B5C]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Your Name"
            className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
          />
          <Input
            placeholder="Your Email"
            type="email"
            className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60 min-h-[150px]"
          />
          <Button className="w-full bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]">Send Message</Button>
        </div>
      </div>
    </div>
  )
}

