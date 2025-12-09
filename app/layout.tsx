import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Africa Techcity - Africa-China Bridge for Trade & Education",
  description:
    "Connecting African businesses and teachers with Chinese markets and opportunities. ITrade Africa for sourcing & logistics, ITEC for teacher recruitment.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1765285209/tech-africa-map-combination-logo-innovative-geographical-vector-design_579306-26286_xlgkug.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1765285209/tech-africa-map-combination-logo-innovative-geographical-vector-design_579306-26286_xlgkug.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1765285209/tech-africa-map-combination-logo-innovative-geographical-vector-design_579306-26286_xlgkug.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1765285209/tech-africa-map-combination-logo-innovative-geographical-vector-design_579306-26286_xlgkug.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
