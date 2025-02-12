"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, Eye, RefreshCw } from "lucide-react"

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-purple-600" />,
    title: "Data Minimization",
    description: "We collect and store only the bare minimum of data required for the service to function.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-600" />,
    title: "Robust Encryption",
    description: "State-of-the-art encryption protocols protect all communications from interception.",
  },
  {
    icon: <Trash2 className="w-12 h-12 text-purple-600" />,
    title: "Ephemeral Data",
    description: "Self-destructing chats ensure your messages are automatically purged after the session ends.",
  },
  {
    icon: <Eye className="w-12 h-12 text-purple-600" />,
    title: "Privacy Monitoring",
    description:
      "Advanced features like screenshot detection add an extra layer of security by monitoring and logging potential privacy breaches.",
  },
  {
    icon: <RefreshCw className="w-12 h-12 text-purple-600" />,
    title: "Regular Audits",
    description:
      "We conduct frequent security audits to ensure compliance with the latest security standards and practices.",
  },
]

export default function Security() {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Security and Privacy
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

