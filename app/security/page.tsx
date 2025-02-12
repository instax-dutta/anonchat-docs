"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, Eye, RefreshCw, Network, Key, UserX } from "lucide-react"
import Footer from "../../components/Footer"

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-purple-400" />,
    title: "Data Minimization",
    description:
      "We collect and store only the bare minimum of data required for the service to function, reducing the risk of data breaches.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-400" />,
    title: "Robust Encryption",
    description:
      "State-of-the-art end-to-end encryption protocols protect all communications from interception, ensuring your messages remain private.",
  },
  {
    icon: <Network className="w-12 h-12 text-purple-400" />,
    title: "Onion Routing",
    description:
      "We utilize onion routing to mask your IP address and location, providing an additional layer of anonymity to your communications.",
  },
  {
    icon: <Trash2 className="w-12 h-12 text-purple-400" />,
    title: "Ephemeral Data",
    description:
      "Self-destructing chats ensure your messages are automatically purged after the session ends, leaving no trace of your conversations.",
  },
  {
    icon: <Eye className="w-12 h-12 text-purple-400" />,
    title: "Privacy Monitoring",
    description:
      "Advanced features like screenshot detection add an extra layer of security by monitoring and logging potential privacy breaches.",
  },
  {
    icon: <RefreshCw className="w-12 h-12 text-purple-400" />,
    title: "Regular Audits",
    description:
      "We conduct frequent security audits to ensure compliance with the latest security standards and practices, constantly improving our security measures.",
  },
  {
    icon: <Key className="w-12 h-12 text-purple-400" />,
    title: "Perfect Forward Secrecy",
    description:
      "We implement perfect forward secrecy to ensure that even if a key is compromised, past communications remain secure.",
  },
  {
    icon: <UserX className="w-12 h-12 text-purple-400" />,
    title: "No Account Required",
    description:
      "Users can chat without creating an account, eliminating the risk of personal information being stored or leaked.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Security() {
  return (
    <main className="min-h-screen py-20">
      <section className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Security and Privacy
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <motion.div className="mb-4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}

