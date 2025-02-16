import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C3930] text-[#DCD7C9] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-2">VideoLib</h3>
            <p className="text-sm text-[#DCD7C9]/80">Empowering creators with professional video education.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#DCD7C9]/80 hover:text-[#A27B5C]">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#DCD7C9]/20 pt-4 text-center">
          <p className="text-xs text-[#DCD7C9]/60">&copy; {new Date().getFullYear()} VideoLib. All rights reserved by @VonneFide.</p>
        </div>
      </div>
    </footer>
  )
}

