import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"

export default function AccessModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000) // Show after 5 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#2C3930] p-8 rounded-xl shadow-xl max-w-md w-full animate-popup">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-[#DCD7C9] hover:text-[#A27B5C]"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-[#DCD7C9] mb-4">Get Exclusive Access!</h2>
            <p className="text-[#DCD7C9]/80 mb-6">
              Sign up now to get 30% off your first month of unlimited video tutorials!
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]"
              >
                Get Access Now
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="w-full text-[#DCD7C9] border-[#DCD7C9] hover:bg-[#3F4F44]"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

