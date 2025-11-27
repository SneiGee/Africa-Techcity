import Header from "@/components/header"
import Footer from "@/components/footer"
import { Globe, Users, Zap } from "lucide-react"

export const metadata = {
  title: "About Us - Africa Techcity",
  description:
    "Learn about Africa Techcity's mission to bridge Africa and China through innovative trade and education solutions.",
}

export default function About() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Africa Techcity</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building bridges between Africa and China through innovation, trust, and opportunity
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Africa Techcity is dedicated to fostering meaningful economic and educational partnerships between
                African and Chinese businesses and professionals. We serve as a trusted intermediary, connecting
                opportunities and expertise across continents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our specialized divisions—ITrade Africa for commerce and ITEC for education recruitment—we
                create pathways for growth, innovation, and mutual prosperity.
              </p>
            </div>
            <img
              src="/business-partnership-meeting.jpg"
              alt="Partnership and collaboration"
              className="rounded-lg object-cover w-full h-96"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Global Connectivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We bridge continents and cultures, creating meaningful connections that transcend borders and unlock new
                possibilities.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Trust & Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every partnership is built on transparency, reliability, and a commitment to the success of all parties
                involved.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation & Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We embrace forward-thinking solutions and empower our partners to achieve their ambitions with
                cutting-edge strategies.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to unlock Africa's potential, Africa Techcity emerged from the recognition that
              meaningful trade and talent exchange between Africa and China could transform lives and economies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we stand as a trusted partner for hundreds of businesses and professionals, continuously innovating
              to create more opportunities and forge stronger connections across continents.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
