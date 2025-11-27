"use client"

import { Lightbulb, Globe, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "ITrade Africa",
    subtitle: "Global Sourcing & Procurement",
    description:
      "Connect with trusted Chinese manufacturers and suppliers. We handle sourcing, negotiations, shipping logistics, and wholesale pricing to grow your African business.",
    features: ["Manufacturer connections", "Quality assurance", "Logistics & shipping", "Competitive pricing"],
  },
  {
    icon: Users,
    title: "ITEC Education",
    subtitle: "Teacher Recruitment & Placement",
    description:
      "Transform your career by teaching English in China. We provide visa guidance, documentation support, school placements, and travel preparation.",
    features: ["Visa assistance", "School matching", "Documentation support", "Travel preparation"],
  },
  {
    icon: Zap,
    title: "Business Acceleration",
    subtitle: "Tech-Driven Solutions",
    description:
      "Leverage digital platforms and communication tools to scale your operations across Africa and Asia. We simplify international business complexity.",
    features: ["Digital platforms", "24/7 support", "Real-time tracking", "Secure transactions"],
  },
  {
    icon: Lightbulb,
    title: "Strategic Partnership",
    subtitle: "Long-term Growth",
    description:
      "Build sustainable relationships with international partners. We facilitate connections that create lasting business value for all parties.",
    features: ["Partner network", "Market insights", "Growth consulting", "Risk management"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to connect African businesses and professionals with opportunities in China
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{service.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
