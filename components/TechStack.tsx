"use client"

import { motion } from "framer-motion"
import { Code, Server, Palette, Zap, Shield, Cpu } from "lucide-react"

const technologies = [
  { name: "Next.js", icon: <Server className="w-8 h-8" /> },
  { name: "React", icon: <Code className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Palette className="w-8 h-8" /> },
  { name: "Framer Motion", icon: <Zap className="w-8 h-8" /> },
  { name: "Rust", icon: <Shield className="w-8 h-8" /> },
  { name: "WebAssembly", icon: <Cpu className="w-8 h-8" /> },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technologies Used
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 text-purple-400">{tech.icon}</div>
              <p className="text-gray-300 text-center">{tech.name}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          We also use Lucide React for icons and onion-rs (a Rust library) for end-to-end encryption.
        </motion.p>
      </div>
    </section>
  )
}

