"use client"

import { motion } from "framer-motion"
import { MessageSquare, Share2, ShieldCheck, XCircle } from "lucide-react"

const steps = [
  {
    icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
    title: "Create a Chat Room",
    description:
      'Click on "Start Anonymous Chat" to generate a unique, random chat ID. This ensures that each chat room is secure and distinct.',
  },
  {
    icon: <Share2 className="w-12 h-12 text-purple-400" />,
    title: "Share the Link",
    description:
      "Invite participants by sharing the generated chat room link. Only those with the link can join, maintaining the privacy of your conversation.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
    title: "Secure and Anonymous Chat",
    description:
      "Engage in encrypted, anonymous conversations within the chat room. Send text messages and upload files with complete privacy.",
  },
  {
    icon: <XCircle className="w-12 h-12 text-purple-400" />,
    title: "End Chat",
    description:
      "Terminate the session at any time. All messages are immediately and permanently deleted, leaving no trace of the conversation.",
  },
]

export default function HowItWorksList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

