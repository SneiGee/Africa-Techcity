"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Unlock Global Opportunities?</h2>
        <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join hundreds of African businesses and professionals already partnering with China through Africa Techcity.
          Let's grow together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg h-auto font-semibold">
            <Link href="/contact">
              Start Trading Now
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg h-auto bg-transparent"
          >
            <Link href="/contact">
              Apply for Teaching Position
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div>
            <div className="text-4xl font-bold">100+</div>
            <p className="text-sm opacity-75 mt-2">Successful Trades</p>
          </div>
          <div>
            <div className="text-4xl font-bold">20+</div>
            <p className="text-sm opacity-75 mt-2">Teachers Placed</p>
          </div>
          <div>
            <div className="text-4xl font-bold">5+</div>
            <p className="text-sm opacity-75 mt-2">Partner Countries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
