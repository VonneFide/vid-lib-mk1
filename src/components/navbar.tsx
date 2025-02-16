import { useState, useEffect } from "react"
import { Search, ChevronDown, MessageSquare, UserPlus, ArrowUp, X, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import MegaMenu from "./mega-menu"
import ContactModal from "./contact-modal"
import AuthModal from "./auth-modal"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let hideTimeout: NodeJS.Timeout

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
      setShowScrollTop(currentScrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleMouseEnter = (menu: string) => {
    clearTimeout(hideTimeout) // Cancel hiding if re-entering
    setOpenMenu(menu)
  }

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setOpenMenu(null), 200) // Add delay before hiding
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-[#2C3930] shadow-lg`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="text-[#DCD7C9] text-xl font-bold">
                VideoLib
              </a>
              <div className="relative flex-grow hidden lg:block">
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-10 bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DCD7C9]/60" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {["Sessions", "Courses", "Discounts"].map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className="nav-link text-[#DCD7C9] hover:text-[#A27B5C] transition-colors flex items-center"
                  >
                    {menu} <ChevronDown className="ml-1 w-4 h-4" />
                  </a>

                <AnimatePresence>
                  {openMenu === menu && (
                    <MegaMenu
                      title={menu}
                      isVisible={openMenu === menu}
                      setIsVisible={(visible) => (visible ? handleMouseEnter(menu) : handleMouseLeave())}
                      items={
                        menu === "Sessions"
                          ? [
                              { title: "Live Workshops", items: ["Beginner", "Intermediate", "Advanced"] },
                              { title: "Webinars", items: ["Upcoming", "On-Demand", "Series"] },
                              { title: "Q&A Sessions", items: ["Ask an Expert", "Community Discussions"] },
                            ]
                          : menu === "Courses"
                          ? [
                              { title: "Video Production", items: ["Cinematography", "Editing", "Color Grading"] },
                              { title: "Audio", items: ["Sound Design", "Music Production", "Voice Over"] },
                              { title: "Business", items: ["Marketing", "Freelancing", "Client Management"] },
                            ]
                          : [
                              { title: "Special Offers", items: ["Bundle Deals", "Limited Time", "Seasonal"] },
                              { title: "Student Discounts", items: ["University", "High School", "Continuing Education"] },
                              { title: "Group Rates", items: ["Teams", "Businesses", "Institutions"] },
                            ]
                      }
                    />
                  )}
                  </AnimatePresence>
                </div>
              ))}

              <Button
                onClick={() => setShowContactModal(true)}
                variant="ghost"
                className="text-[#DCD7C9] hover:text-[#A27B5C] hover:bg-transparent"
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Contact
              </Button>

              <Button
                onClick={() => setShowAuthModal(true)}
                className="bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]"
              >
                <UserPlus className="mr-2 h-4 w-4" /> Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-[#DCD7C9]" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : 
                <Menu className="w-6 h-6" 
                />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "100%", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="lg:hidden bg-[#3F4F44] shadow-lg overflow-hidden"
  >
    <AnimatePresence> 
      <div className="p-4 space-y-4">
        {["Sessions", "Courses", "Discounts"].map((menu) => (
          <div key={menu}>
            <button
              onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
              className="flex justify-between items-center w-full text-[#DCD7C9] hover:text-[#A27B5C] transition-colors"
            >
              {menu} <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {/* Mobile Mega Menu Accordion */}
            <AnimatePresence>
              {openMenu === menu && (
                <motion.div
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: 300, opacity: 1 }} // maxHeight instead of "auto"
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-4 mt-2 text-[#DCD7C9] overflow-hidden"
                >
                  {(
                    menu === "Sessions"
                      ? ["Live Workshops", "Webinars", "Q&A Sessions"]
                      : menu === "Courses"
                      ? ["Video Production", "Audio", "Business"]
                      : ["Special Offers", "Student Discounts", "Group Rates"]
                  ).map((item) => (
                    <p key={item} className="py-1">{item}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        </div>
      </AnimatePresence>
      </motion.div>
      )}
      </nav>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#A27B5C] text-[#DCD7C9] p-3 rounded-full shadow-lg transition-all hover:bg-[#A27B5C]/90 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

    </>
  )
}

