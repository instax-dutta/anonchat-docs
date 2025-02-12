"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Trash2, FileX, Camera } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function Content() {
  return (
    <motion.div initial="initial" animate="animate" className="max-w-3xl mx-auto">
      <motion.h1 {...fadeInUp} className="text-4xl font-bold mb-6">
        AnonChat: Secure and Anonymous Conversations
      </motion.h1>

      <motion.section {...fadeInUp} id="overview" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          AnonChat is a cutting-edge web application designed to provide a secure and anonymous platform for online
          conversations. Whether you're looking to have a casual chat or discuss sensitive topics, AnonChat ensures that
          your identity remains private while your conversations are protected by state-of-the-art encryption.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} id="key-features" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature
            icon={<Shield className="w-8 h-8 text-blue-500" />}
            title="Anonymous Chatting"
            description="Start chatting without any sign-up process or the need to share personal data."
          />
          <Feature
            icon={<Lock className="w-8 h-8 text-green-500" />}
            title="End-to-End Encryption"
            description="All messages are encrypted from sender to receiver, ensuring complete privacy."
          />
          <Feature
            icon={<Trash2 className="w-8 h-8 text-red-500" />}
            title="Self-Destructing Chats"
            description="Once a chat session ends, all messages are automatically deleted."
          />
          <Feature
            icon={<FileX className="w-8 h-8 text-purple-500" />}
            title="No Logs Policy"
            description="AnonChat does not store any user conversations or data."
          />
          <Feature
            icon={<Camera className="w-8 h-8 text-yellow-500" />}
            title="Screenshot Detection"
            description="The application detects when a screenshot is taken during a chat session."
          />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} id="how-it-works" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Create a Chat Room:</strong> Click on the "Start Anonymous Chat" button to generate a unique chat
            ID.
          </li>
          <li>
            <strong>Share the Link:</strong> Invite participants by sharing the generated chat room link.
          </li>
          <li>
            <strong>Secure and Anonymous Chat:</strong> Engage in encrypted, anonymous conversations within the chat
            room.
          </li>
          <li>
            <strong>End Chat:</strong> Terminate the session at any time, triggering automatic deletion of all messages.
          </li>
        </ol>
      </motion.section>

      <motion.section {...fadeInUp} id="technologies-used" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Lucide React</li>
          <li>Rust</li>
          <li>WebAssembly</li>
          <li>onion-rs</li>
        </ul>
      </motion.section>

      <motion.section {...fadeInUp} id="security-and-privacy-considerations" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Security and Privacy Considerations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Data Minimization</li>
          <li>Robust Encryption</li>
          <li>Ephemeral Data</li>
          <li>Privacy Monitoring</li>
          <li>Regular Audits</li>
        </ul>
      </motion.section>

      <motion.section {...fadeInUp} id="conclusion" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          AnonChat represents a significant step forward in secure and anonymous online communication. By combining
          advanced encryption, ephemeral messaging, and strict privacy policies, it offers a robust platform where users
          can interact without fear of surveillance or data leakage.
        </p>
      </motion.section>
    </motion.div>
  )
}

function Feature({ icon, title, description }) {
  return (
    <motion.div
      className="flex items-start space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

