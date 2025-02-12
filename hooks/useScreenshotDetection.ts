"use client"

import { useEffect } from "react"

export default function useScreenshotDetection() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "PrintScreen" || (e.ctrlKey && e.key === "c") || (e.metaKey && e.key === "c")) && e.shiftKey) {
        alert("Screenshot detected! This action has been logged.")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}

