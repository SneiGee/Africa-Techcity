import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Briefcase, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services - Africa Techcity",
  description: "Explore Africa Techcity's comprehensive services for trade and education recruitment.",
}

export default function Services() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions tailored to unlock opportunities between Africa and China
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ITrade Africa Card */}
            <Link href="/services/itrade" className="group">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg p-8 h-full hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                    <h2 className="text-3xl font-bold text-foreground mb-2">ITrade Africa</h2>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Connecting African businesses with global suppliers, streamlining sourcing, procurement, and trade
                  operations across continents.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Supply Chain Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">B2B Trade Partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">Market Expansion Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
            </Link>

            {/* ITEC Card */}
            <Link href="/services/itec" className="group">
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-lg p-8 h-full hover:border-secondary transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Users className="w-12 h-12 text-secondary mb-4" />
                    <h2 className="text-3xl font-bold text-foreground mb-2">ITEC</h2>
                  </div>
                  <ArrowRight className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Recruitment and talent placement services connecting qualified African professionals with
                  international educational and employment opportunities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Talent Recruitment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Education Placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">Professional Development</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Learn More</Button>
              </div>
            </Link>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">500+</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Successful Partnerships</h3>
              <p className="text-muted-foreground">
                Proven track record of connecting businesses and professionals across continents.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-4xl font-bold text-secondary mb-4">24/7</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance to ensure smooth operations and timely communication.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="text-4xl font-bold text-accent mb-4">100%</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Clear processes and honest communication every step of your journey.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
