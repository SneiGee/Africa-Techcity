"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AT</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Africa Techcity</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#" className="text-foreground hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/#" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3">
          {/* <Button variant="outline">Sign In</Button> */}
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/services" className="block text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/team" className="block text-foreground hover:text-primary">
              Team
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary">
              Contact
            </Link>
            <div className="space-y-2 pt-4">
              {/* <Button variant="outline" className="w-full bg-transparent">
                Sign In
              </Button> */}
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
