"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useParams } from "next/navigation"
import useSimulatedRealTimeChat from "../../../hooks/useSimulatedRealTimeChat"
import useScreenshotDetection from "../../../hooks/useScreenshotDetection"

export default function ChatRoom() {
  const { id } = useParams()
  const [message, setMessage] = useState("")
  const { messages, sendMessage } = useSimulatedRealTimeChat()
  useScreenshotDetection()

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message)
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <motion.div
        className="flex-grow overflow-y-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.sender === "user" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.form
        onSubmit={handleSendMessage}
        className="p-4 bg-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 rounded-l-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type a message..."
          />
          <button type="submit" className="bg-purple-600 text-white p-2 rounded-r-lg hover:bg-purple-700">
            <Send />
          </button>
        </div>
      </motion.form>
    </div>
  )
}

