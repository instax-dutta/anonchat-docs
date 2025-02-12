"use client"

import { motion } from "framer-motion"
import { Code, Server, Palette, Zap, Shield, Cpu } from "lucide-react"

const technologies = [
  {
    name: "Next.js",
    icon: <Server className="w-12 h-12 text-purple-400" />,
    description: "React framework for production-grade applications",
  },
  {
    name: "React",
    icon: <Code className="w-12 h-12 text-purple-400" />,
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-12 h-12 text-purple-400" />,
    description: "Utility-first CSS framework",
  },
  {
    name: "Framer Motion",
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    description: "Production-ready motion library for React",
  },
  {
    name: "Rust",
    icon: <Shield className="w-12 h-12 text-purple-400" />,
    description: "Systems programming language for performance and safety",
  },
  {
    name: "WebAssembly",
    icon: <Cpu className="w-12 h-12 text-purple-400" />,
    description: "Binary instruction format for a stack-based virtual machine",
  },
]

export default function TechnologiesList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{tech.name}</h3>
            <p className="text-gray-300">{tech.description}</p>
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
  )
}

