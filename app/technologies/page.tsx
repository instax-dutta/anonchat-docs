"use client"

import { motion } from "framer-motion"
import { Code, Server, Palette, Zap, Shield, Cpu } from "lucide-react"
import { useInView } from "react-intersection-observer"

const technologies = [
  {
    name: "Next.js",
    icon: <Server className="w-16 h-16 text-purple-400" />,
    description: "React framework for production-grade applications",
  },
  {
    name: "React",
    icon: <Code className="w-16 h-16 text-purple-400" />,
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-16 h-16 text-purple-400" />,
    description: "Utility-first CSS framework",
  },
  {
    name: "Framer Motion",
    icon: <Zap className="w-16 h-16 text-purple-400" />,
    description: "Production-ready motion library for React",
  },
  {
    name: "Rust",
    icon: <Shield className="w-16 h-16 text-purple-400" />,
    description: "Systems programming language for performance and safety",
  },
  {
    name: "WebAssembly",
    icon: <Cpu className="w-16 h-16 text-purple-400" />,
    description: "Binary instruction format for a stack-based virtual machine",
  },
]

const TechCard = ({ tech, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="mb-4">{tech.icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-purple-400">{tech.name}</h3>
      <p className="text-gray-300">{tech.description}</p>
    </motion.div>
  )
}

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technologies Used
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} index={index} />
        ))}
      </div>
      <motion.p
        className="text-center mt-12 text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        We also use Lucide React for icons and onion-rs (a Rust library) for end-to-end encryption, ensuring a robust
        and secure chat experience.
      </motion.p>
    </div>
  )
}

