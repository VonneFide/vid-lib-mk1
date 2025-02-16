import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface MegaMenuItem {
  title: string
  items: string[]
}

interface MegaMenuProps {
  title: string
  items: MegaMenuItem[]
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}


export default function MegaMenu({ title, items, isVisible, setIsVisible }: MegaMenuProps) {

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout

    if (!isHovering) {
      hideTimeout = setTimeout(() => {
        setIsVisible(false)
      }, 10000)
    }

    return () => clearTimeout(hideTimeout) // Cleanup on unmount
  }, [isHovering, setIsVisible])

  return (
    <motion.div
    initial={{ opacity: 0, y: -10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`absolute left-0 mt-2 w-screen max-w-md bg-[#3F4F44] shadow-lg rounded-md overflow-hidden transition-opacity duration-200 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#DCD7C9] mb-3">{title}</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {items.map((section, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-[#A27B5C] font-medium mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-[#DCD7C9] hover:text-[#A27B5C] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
