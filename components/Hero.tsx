"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const chatMessages = [
  { text: "Hey there! Have you heard about AnonChat?", sender: "other", delay: 1000 },
  { text: "No, what's that?", sender: "user", delay: 2000 },
  { text: "It's this new secure messaging app. Totally anonymous and encrypted.", sender: "other", delay: 3000 },
  { text: "Sounds interesting! How does it work?", sender: "user", delay: 4000 },
  {
    text: "You just create a chat room, share the link, and start talking. No accounts needed!",
    sender: "other",
    delay: 5000,
  },
  { text: "That's pretty cool. Is it really secure though?", sender: "user", delay: 6000 },
  {
    text: "End-to-end encryption and no data storage. Your convos disappear when you're done.",
    sender: "other",
    delay: 7000,
  },
  { text: "Wow, I need to try this out. Thanks for the info!", sender: "user", delay: 8000 },
  { text: "No problem! Enjoy your secure chats on AnonChat!", sender: "other", delay: 9000 },
]

export default function Hero() {
  const [messages, setMessages] = useState([])
  const chatContainerRef = useRef(null)

  useEffect(() => {
    chatMessages.forEach((message, index) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, message])
      }, message.delay)
    })
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollContainer = chatContainerRef.current
      scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
  }, [chatContainerRef])

  return (
    <section className="min-h-screen py-20 flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Secure, Anonymous Conversations
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Experience truly private online chats with AnonChat. Utilizing onion routing and end-to-end encryption, we
            ensure your conversations remain anonymous and secure. No logs, no traces, just secure communication.
          </p>
          <Link href="https://anonchat.space" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Chatting Now
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="bg-gray-800 rounded-3xl shadow-xl p-4 max-w-sm w-full mx-auto"
            style={{ aspectRatio: "9/16" }}
          >
            <div className="bg-gray-900 rounded-full w-16 h-4 mx-auto mb-4"></div>
            <div className="space-y-4 mb-4 h-[calc(100%-5rem)] overflow-y-auto scroll-smooth" ref={chatContainerRef}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`rounded-lg p-3 max-w-xs ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-full border border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                disabled
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-2 rounded-full ml-2">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

