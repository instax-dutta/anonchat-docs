import { Github, Twitter, Globe, Wrench } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cod-gray text-gallery/70 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-center sm:text-left">&copy; 2025 AnonChat. All rights reserved.</div>
          <div className="text-sm flex items-center">
            Made By{" "}
            <Link href="https://github.com/instax-dutta" className="text-havelock hover:text-buckthorn mx-1">
              SDAD
            </Link>{" "}
            <Wrench className="inline-block w-4 h-4 ml-1" />
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/instax-dutta" className="hover:text-havelock transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/AbhishekDash69" className="hover:text-havelock transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://sdad.pro" className="hover:text-havelock transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

