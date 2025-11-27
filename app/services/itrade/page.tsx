import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, Globe, Zap, BarChart3, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "ITrade Africa - Sourcing & Procurement Solutions",
  description: "Streamline your procurement and supply chain with Africa Techcity's ITrade Africa division.",
}

export default function ITrade() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">ITrade Africa</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Connecting African businesses with global suppliers and markets to streamline trade operations
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is ITrade Africa?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ITrade Africa is our flagship trade division, designed to empower African businesses with access to
                verified suppliers, efficient procurement processes, and competitive market opportunities globally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We handle the complexity of international sourcing so you can focus on growing your business. From
                initial supplier vetting to final delivery, we've got you covered.
              </p>
            </div>
            <img
              src="/supply-chain-logistics-warehouse.jpg"
              alt="ITrade Africa Services"
              className="rounded-lg object-cover w-full h-96"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Global Supplier Network</h3>
                <p className="text-muted-foreground">
                  Access to verified suppliers across multiple industries and regions, all vetted for quality and
                  reliability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Streamlined Procurement</h3>
                <p className="text-muted-foreground">
                  Efficient ordering systems and automated processes that reduce lead times and administrative overhead.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Market Intelligence</h3>
                <p className="text-muted-foreground">
                  Real-time data and insights on market trends, pricing, and opportunities to inform your strategy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality checks and compliance standards to ensure products meet international specifications.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dedicated Account Management</h3>
                <p className="text-muted-foreground">
                  Personal support from experienced professionals who understand your business needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From negotiation to logistics, we handle every step of your supply chain journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Who Benefits?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Manufacturers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Source raw materials and components at competitive prices with reliable suppliers worldwide.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Retailers & Distributors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expand your product range and access new markets with our extensive supplier network.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Exporters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Navigate international trade complexities and connect with buyers in strategic markets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Trade Operations?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of African businesses already leveraging ITrade Africa to grow globally.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Contact Our Team
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
