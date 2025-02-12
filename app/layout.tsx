import "./globals.css"
import { Inter } from "next/font/google"
import Header from "../components/Header"
import Background from "../components/Background"
import Footer from "../components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AnonChat - Secure and Anonymous Conversations",
  description: "Experience truly private and secure online conversations with AnonChat.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <Background />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'