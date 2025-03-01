"use client"

import { motion } from "framer-motion"
import { MessageSquare, Share2, ShieldCheck, XCircle, Globe, Network } from "lucide-react"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    icon: <MessageSquare className="w-16 h-16 text-primary" />,
    title: "Create a Chat Room",
    description:
      'Click on "Start Anonymous Chat" to generate a unique chat room. Each room is accessible through a .onion link, making it only accessible via Tor Browser.',
  },
  {
    icon: <Network className="w-16 h-16 text-primary" />,
    title: "Access via Tor",
    description:
      "Use Tor Browser to access your chat room's .onion link. This ensures your conversations are routed through the Tor network, making them completely untraceable.",
  },
  {
    icon: <Share2 className="w-16 h-16 text-primary" />,
    title: "Share the Link",
    description:
      "Share the .onion link with your chat participants. Remember, they'll need Tor Browser to access the chat room, ensuring everyone's privacy is protected.",
  },
  {
    icon: <ShieldCheck className="w-16 h-16 text-primary" />,
    title: "Secure and Anonymous Chat",
    description:
      "Engage in encrypted, anonymous conversations within the Tor hidden service. Your IP address and location are completely masked.",
  },
  {
    icon: <XCircle className="w-16 h-16 text-primary" />,
    title: "End Chat",
    description:
      "Terminate the session at any time. All messages are immediately deleted, and the .onion address becomes inactive.",
  },
  {
    icon: <Globe className="w-16 h-16 text-primary" />,
    title: "Public Website Access",
    description:
      "While our main website is accessible through regular browsers, chat rooms are exclusively available through Tor Browser for maximum security.",
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
      <h3 className="text-2xl font-bold mb-2 text-primary">{step.title}</h3>
      <p className="text-gallery">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      {" "}
      {/*This line remains unchanged as per the instructions.  No 'cod' color specified.*/}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How It Works
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
      <motion.div
        className="mt-12 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gallery mb-4">
          Our unique approach combines a publicly accessible website with Tor hidden services for chat rooms, providing
          the perfect balance between accessibility and security.
        </p>
        <p className="text-primary">
          Download Tor Browser to access chat rooms and experience truly anonymous communication.
        </p>
      </motion.div>
    </div>
  )
}

