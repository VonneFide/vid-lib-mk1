import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2C3930] p-8 rounded-lg shadow-xl max-w-md w-full animate-popup">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#DCD7C9]">{isLogin ? "Log In" : "Create Account"}</h2>
          <button onClick={onClose} className="text-[#DCD7C9] hover:text-[#A27B5C]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          <Input
            placeholder="Email"
            type="email"
            className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
          />
          <Input
            placeholder="Password"
            type="password"
            className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
          />
          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              type="password"
              className="bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
            />
          )}
          <Button className="w-full bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]">
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          <p className="text-center text-[#DCD7C9]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-[#A27B5C] hover:underline">
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

