"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bridging Africa and China for <span className="text-primary">Unstoppable Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Your trusted partner for international trade, business sourcing, and professional recruitment. Connecting
            African businesses and educators to limitless opportunities in China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg h-auto cursor-pointer"
            >
              <Link href="/services/itrade">
                Explore ITrade <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-border px-8 py-6 text-lg h-auto bg-transparent cursor-pointer"
            >
              <Link href="/services/itec">
                Explore ITEC <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
