"use client"

import { motion } from "framer-motion"
import { MessageSquare, Share2, ShieldCheck, XCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    icon: <MessageSquare className="w-16 h-16 text-purple-400" />,
    title: "Create a Chat Room",
    description:
      'Click on "Start Anonymous Chat" to generate a unique, random chat ID. This ensures that each chat room is secure and distinct.',
  },
  {
    icon: <Share2 className="w-16 h-16 text-purple-400" />,
    title: "Share the Link",
    description:
      "Invite participants by sharing the generated chat room link. Only those with the link can join, maintaining the privacy of your conversation.",
  },
  {
    icon: <ShieldCheck className="w-16 h-16 text-purple-400" />,
    title: "Secure and Anonymous Chat",
    description:
      "Engage in encrypted, anonymous conversations within the chat room. Send text messages and upload files with complete privacy.",
  },
  {
    icon: <XCircle className="w-16 h-16 text-purple-400" />,
    title: "End Chat",
    description:
      "Terminate the session at any time. All messages are immediately and permanently deleted, leaving no trace of the conversation.",
  },
]

const StepCard = ({ step, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="mb-4">{step.icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-purple-400">{step.title}</h3>
      <p className="text-gray-300">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How It Works
      </motion.h1>
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}

