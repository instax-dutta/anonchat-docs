"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Battery, Signal, Wifi } from "lucide-react"
import Link from "next/link"

const chatMessages = [
  {
    text: "Hey! 👋 Have you heard about this new secure chat app called AnonChat?",
    sender: "other",
    delay: 1000,
  },
  {
    text: "No, what makes it different from other chat apps? 🤔",
    sender: "user",
    delay: 3000,
  },
  {
    text: "It's really cool! It uses Tor hidden services for complete privacy. Your chats are totally untraceable! 🔒",
    sender: "other",
    delay: 5000,
  },
  {
    text: "That sounds interesting! How secure is it really?",
    sender: "user",
    delay: 7000,
  },
  {
    text: "Super secure! While the website is public, chat rooms are .onion links - only accessible through Tor Browser. Plus, everything's end-to-end encrypted! 🛡️",
    sender: "other",
    delay: 9000,
  },
  {
    text: "Nice! So I need Tor Browser to use the chat rooms?",
    sender: "user",
    delay: 12000,
  },
  {
    text: "Exactly! It adds multiple layers of encryption and makes your chats completely anonymous. No one can trace them! 🌐",
    sender: "other",
    delay: 14000,
  },
  {
    text: "That's exactly what I've been looking for! I'll check it out 👍",
    sender: "user",
    delay: 16000,
  },
  {
    text: "You'll love it! Let me know once you try it 😊",
    sender: "other",
    delay: 18000,
  },
]

export default function Hero() {
  const [messages, setMessages] = useState([])
  const chatContainerRef = useRef(null)
  const [isTyping, setIsTyping] = useState(false)
  const [currentSender, setCurrentSender] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(true)

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Handle visibility changes
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.5,
      },
    )

    if (chatContainerRef.current) {
      observer.observe(chatContainerRef.current)
    }

    return () => {
      if (chatContainerRef.current) {
        observer.unobserve(chatContainerRef.current)
      }
    }
  }, [])

  // Handle messages animation and typing
  useEffect(() => {
    if (!isVisible) return // Don't animate if not visible

    const timeouts = []

    chatMessages.forEach((message, index) => {
      // Set typing indicator before message appears
      const typingTimeout = setTimeout(() => {
        setIsTyping(true)
        setCurrentSender(message.sender)
      }, message.delay - 1000)

      // Add message and remove typing indicator
      const messageTimeout = setTimeout(() => {
        setMessages((prev) => [...prev, message])
        setIsTyping(false)
      }, message.delay)

      timeouts.push(typingTimeout, messageTimeout)
    })

    return () => timeouts.forEach((timeout) => clearTimeout(timeout))
  }, [isVisible])

  // Handle auto-scrolling
  useEffect(() => {
    const scrollContainer = chatContainerRef.current
    if (!scrollContainer) return

    const smoothScroll = () => {
      const lastMessage = scrollContainer.querySelector(".message:last-child")
      if (lastMessage) {
        lastMessage.scrollIntoView({
          behavior: "smooth",
          block: "end",
        })
      } else {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }

    const scrollTimeout = setTimeout(smoothScroll, 100)
    return () => clearTimeout(scrollTimeout)
  }, [chatContainerRef])

  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <section className="min-h-screen py-20 flex items-center bg-gradient-to-b from-cod to-cod">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text">Secure, Anonymous Conversations</h1>
          <p className="text-xl mb-8 text-white leading-relaxed">
            Experience truly private online chats with AnonChat. While our website is publicly accessible, all chat
            rooms operate through Tor hidden services (.onion links), ensuring complete anonymity and untraceability.
            Access chat rooms exclusively through Tor Browser for maximum security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://anonchat.space" target="_blank" rel="noopener noreferrer">
              <motion.button className="btn w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start Chatting Now
              </motion.button>
            </Link>
            <Link href="https://www.torproject.org/download/" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-cod text-primary border-2 border-primary font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-cod transition-all shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Tor Browser
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Phone Frame */}
          <div className="relative w-[320px] h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 w-full h-6 bg-black/30 backdrop-blur-lg flex items-center justify-between px-6 z-20">
              <span className="text-xs text-white">
                {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              <div className="flex items-center space-x-2">
                <Signal className="w-3 h-3 text-white" />
                <Wifi className="w-3 h-3 text-white" />
                <Battery className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10"></div>

            {/* Chat Interface */}
            <div className="h-full pt-8 pb-4 flex flex-col bg-gradient-to-b from-gray-900 to-black">
              {/* Chat Header */}
              <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-white">AnonChat Secure</span>
                </div>
              </div>

              {/* Messages Container */}
              <div
                className="flex-1 overflow-y-auto space-y-4 p-4 scroll-smooth scrollbar-hide message-container"
                ref={chatContainerRef}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex message ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                    >
                      <div
                        className={`rounded-2xl p-3 max-w-[80%] ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-primary to-secondary text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-[10px] opacity-70 mt-1 block">
                          {new Date(Date.now() - (messages.length - index) * 2000).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      className={`flex message ${currentSender === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <div
                        className={`rounded-2xl p-3 ${
                          currentSender === "user"
                            ? "bg-gradient-to-r from-primary/50 to-secondary/50"
                            : "bg-gray-800/50"
                        }`}
                      >
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-current"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 rounded-full bg-current"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 rounded-full bg-current"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="px-4 pt-2">
                <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-grow p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                    disabled
                  />
                  <button className="p-2 m-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="mt-2 flex justify-center">
                <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

