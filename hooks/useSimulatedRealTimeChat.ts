import { useState } from "react"

interface Message {
  text: string
  sender: "user" | "other"
}

export default function useSimulatedRealTimeChat() {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = (text: string) => {
    const newMessage: Message = { text, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, newMessage])

    // Simulate a response after a short delay
    setTimeout(() => {
      const responseMessage: Message = {
        text: `Response to: ${text}`,
        sender: "other",
      }
      setMessages((prevMessages) => [...prevMessages, responseMessage])
    }, 1000)
  }

  return { messages, sendMessage }
}

