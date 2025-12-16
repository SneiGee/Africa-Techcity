"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-bold text-foreground">AT</span>
              </div>
              <span className="font-bold text-lg">Africa Techcity</span>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Bridging continents, creating opportunities. Your gateway to Africa-China commerce and collaboration.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/services/itrade" className="hover:opacity-100 transition-opacity">
                  ITrade Africa
                </Link>
              </li>
              <li>
                <Link href="/services/itec" className="hover:opacity-100 transition-opacity">
                  ITEC Education
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@africatechcity.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 (0) 24 714 5337 </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>97 Kumasi City Mall | Kumasi, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2025 Africa Techcity. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
