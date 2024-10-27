import React from 'react'
import Link from "next/link"
import { Heart, MessageCircle, Users, Zap } from "lucide-react"



type Props = {}

const nav = (props: Props) => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-teal-500" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Inner Ease</span>
        </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link> */}
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/faq">
            FAQ
          </Link>
    </nav>
    </header>
  )
}

export default nav