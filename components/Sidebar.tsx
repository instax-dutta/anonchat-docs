"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronDown } from "lucide-react"

const menuItems = [
  { title: "Overview", id: "overview" },
  {
    title: "Key Features",
    id: "key-features",
    subItems: [
      { title: "Anonymous Chatting", id: "anonymous-chatting" },
      { title: "End-to-End Encryption", id: "end-to-end-encryption" },
      { title: "Self-Destructing Chats", id: "self-destructing-chats" },
      { title: "No Logs Policy", id: "no-logs-policy" },
      { title: "Screenshot Detection", id: "screenshot-detection" },
    ],
  },
  {
    title: "How It Works",
    id: "how-it-works",
    subItems: [
      { title: "1. Create a Chat Room", id: "create-a-chat-room" },
      { title: "2. Share the Link", id: "share-the-link" },
      { title: "3. Secure and Anonymous Chat", id: "secure-and-anonymous-chat" },
      { title: "4. End Chat", id: "end-chat" },
    ],
  },
  { title: "Technologies Used", id: "technologies-used" },
  { title: "Security and Privacy Considerations", id: "security-and-privacy-considerations" },
  { title: "Conclusion", id: "conclusion" },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const MenuItem = ({ item, depth = 0 }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0
    const isExpanded = expandedItems.includes(item.id)

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: depth * 0.1 }}
      >
        <div
          className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 ${depth > 0 ? "ml-4" : ""}`}
          onClick={() => {
            if (hasSubItems) {
              toggleExpand(item.id)
            } else {
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          {hasSubItems && (
            <span className="mr-2">{isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
          )}
          <span>{item.title}</span>
        </div>
        {hasSubItems && isExpanded && (
          <div>
            {item.subItems.map((subItem) => (
              <MenuItem key={subItem.id} item={subItem} depth={depth + 1} />
            ))}
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <nav className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">AnonChat Docs</h2>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  )
}

