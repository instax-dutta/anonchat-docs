"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, FileX, Camera } from "lucide-react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: <Shield className="w-16 h-16 text-purple-400" />,
    title: "Anonymous Chatting",
    description:
      "Chat without revealing your identity. No personal information is required or stored, ensuring complete anonymity.",
  },
  {
    icon: <Lock className="w-16 h-16 text-purple-400" />,
    title: "End-to-End Encryption",
    description:
      "Your messages are encrypted from sender to receiver using state-of-the-art encryption, ensuring the privacy and security of your conversations.",
  },
  {
    icon: <Trash2 className="w-16 h-16 text-purple-400" />,
    title: "Self-Destructing Chats",
    description:
      "Messages vanish when the chat ends, ensuring that no data is stored permanently. Your conversations remain truly ephemeral.",
  },
  {
    icon: <FileX className="w-16 h-16 text-purple-400" />,
    title: "No Logs Policy",
    description:
      "We don't store any of your conversations or data. Once your chat ends, it's gone forever, leaving no digital footprint.",
  },
  {
    icon: <Camera className="w-16 h-16 text-purple-400" />,
    title: "Screenshot Detection",
    description:
      "Get notified if someone takes a screenshot during your chat. This feature logs the action, adding an extra layer of security to your conversations.",
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
      <h3 className="text-2xl font-bold mb-2 text-purple-400">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Features
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  )
}

