"use client"

import { Award, CheckCircle2, Handshake, Zap } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Years of experience bridging African and Asian markets with proven track record of successful partnerships.",
  },
  {
    icon: Handshake,
    title: "Trusted Network",
    description:
      "Established relationships with 200+ manufacturers, schools, and business partners across China and Africa.",
  },
  {
    icon: Zap,
    title: "Seamless Process",
    description: "From initial contact to final delivery, we handle every step with transparency and efficiency.",
  },
  {
    icon: CheckCircle2,
    title: "Full Support",
    description: "Dedicated account managers and 24/7 multilingual support to guide you at every stage.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Choose Africa Techcity?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're more than a service provider – we're your strategic partner in cross-border growth. With deep roots
              in both African and Chinese markets, we understand the unique challenges and opportunities of
              international business.
            </p>
            <div className="space-y-6">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275698/business-meeting-with-professionals-from-africa-an_dwrly3.jpg"
                alt="Partnership"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
