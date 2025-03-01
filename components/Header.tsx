"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-cod/90 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Lock className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold gradient-text">AnonChat</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {[
              { name: "Features", path: "/features" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "Technologies", path: "/technologies" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <motion.span
                    className="text-sm text-white hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

