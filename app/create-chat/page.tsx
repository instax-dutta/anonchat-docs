"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CreateChat() {
  const [chatId, setChatId] = useState("")

  const handleCreateChat = () => {
    // In a real application, this would generate a unique chat ID
    const newChatId = Math.random().toString(36).substring(7)
    setChatId(newChatId)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cod to-cod">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center gradient-text">Create a New Chat</h1>
        <p className="text-gallery mb-6 text-center">
          Click the button below to generate a unique chat ID. You can then share this ID with others to start a secure,
          anonymous conversation.
        </p>
        <div className="flex justify-center mb-6">
          <motion.button
            className="btn flex items-center bg-gradient-to-r from-primary to-secondary"
            onClick={handleCreateChat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="mr-2" />
            Create Chat Room
          </motion.button>
        </div>
        {chatId && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 mb-2">Your chat room has been created! Share this ID:</p>
            <p className="text-xl font-bold text-primary mb-4">{chatId}</p>
            <Link href={`/chat/${chatId}`} className="btn inline-block">
              Enter Chat Room
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

