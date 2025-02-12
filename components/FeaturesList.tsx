"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, FileX, Camera } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-12 h-12 text-purple-400" />,
    title: "Anonymous Chatting",
    description:
      "Chat without revealing your identity. No personal information is required or stored, ensuring complete anonymity.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-400" />,
    title: "End-to-End Encryption",
    description:
      "Your messages are encrypted from sender to receiver using state-of-the-art encryption, ensuring the privacy and security of your conversations.",
  },
  {
    icon: <Trash2 className="w-12 h-12 text-purple-400" />,
    title: "Self-Destructing Chats",
    description:
      "Messages vanish when the chat ends, ensuring that no data is stored permanently. Your conversations remain truly ephemeral.",
  },
  {
    icon: <FileX className="w-12 h-12 text-purple-400" />,
    title: "No Logs Policy",
    description:
      "We don't store any of your conversations or data. Once your chat ends, it's gone forever, leaving no digital footprint.",
  },
  {
    icon: <Camera className="w-12 h-12 text-purple-400" />,
    title: "Screenshot Detection",
    description:
      "Get notified if someone takes a screenshot during your chat. This feature logs the action, adding an extra layer of security to your conversations.",
  },
]

export default function FeaturesList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

