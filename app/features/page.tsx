"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, Network, Globe, Eye } from "lucide-react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: <Network className="w-16 h-16 text-primary" />,
    title: "Tor Hidden Services",
    description:
      "Chat rooms operate as .onion services, accessible only through Tor Browser, ensuring complete anonymity and untraceability.",
  },
  {
    icon: <Globe className="w-16 h-16 text-primary" />,
    title: "Dual Access System",
    description:
      "Public website accessible via regular browsers, while chat rooms are exclusively available through Tor Browser for enhanced security.",
  },
  {
    icon: <Shield className="w-16 h-16 text-primary" />,
    title: "Anonymous Chatting",
    description:
      "Chat without revealing your identity. No personal information required, and your IP address is completely masked through Tor.",
  },
  {
    icon: <Lock className="w-16 h-16 text-primary" />,
    title: "End-to-End Encryption",
    description:
      "Your messages are encrypted and routed through the Tor network, ensuring multiple layers of security and privacy.",
  },
  {
    icon: <Eye className="w-16 h-16 text-primary" />,
    title: "IP Address Masking",
    description:
      "Your real IP address is hidden through Tor's multi-layer routing system, making your location and identity untraceable.",
  },
  {
    icon: <Trash2 className="w-16 h-16 text-primary" />,
    title: "Self-Destructing Chats",
    description:
      "Messages vanish when the chat ends, and .onion addresses become inactive, ensuring no trace of your conversations remains.",
  },
]

const FeatureCard = ({ feature, index }) => {
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
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-primary">{feature.title}</h3>
      <p className="text-gallery">{feature.description}</p>
    </motion.div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-cod to-cod">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Features
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
      <motion.div
        className="mt-12 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gallery">
          Experience the perfect blend of accessibility and security with our unique dual-access system. Browse our
          website normally, but chat with complete anonymity through Tor.
        </p>
      </motion.div>
    </div>
  )
}

