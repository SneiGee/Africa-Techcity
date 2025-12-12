import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, Globe, Zap, BarChart3, Users, Shield, TrendingUp, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "ITrade Africa - Import/Export & Sourcing Solutions",
  description: "Facilitate import and export of goods between Africa and the world, with special focus on Asia. Access quality products across multiple categories.",
}

export default function ITrade() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">iTradeAfrica</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Bridging Africa and the world through seamless import and export solutions, with special focus on Asia
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Start Your Trading Journey
              </Link>
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is iTradeAfrica?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                iTradeAfrica is our flagship trading app designed to facilitate seamless import and export of goods
                between Africa and the rest of the world, with special focus on Asia. We empower African businesses to
                access quality products from verified suppliers while creating market opportunities for African
                entrepreneurs in the global arena.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking to import advanced technologies or export African creative arts and crafts,
                iTradeAfrica streamlines the entire process from sourcing to delivery, backed by our fast-growing
                international business network.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <img
              src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275699/supply-chain-logistics-warehouse_ot1cx9.jpg"
              alt="iTradeAfrica Import Export"
              className="rounded-lg object-cover w-full h-96"
            />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Services</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Import Services */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Import Services</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Access quality products directly from verified factories in China, the United States, and other global
                suppliers. Place bulk orders via our app, phone, or walk-in, with direct delivery to your location.
              </p>

              <h4 className="text-lg font-semibold text-foreground mb-4">Product Categories:</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-foreground mb-1">🚗 New Age Transportation</h5>
                  <p className="text-sm text-muted-foreground">
                    Electric vehicles, electric motor bicycles, and eco-friendly mobility solutions
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">💻 Electronics</h5>
                  <p className="text-sm text-muted-foreground">
                    Central processing units, digital storage hardware, and advanced tech components
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">🔧 Commercial Motor & Equipment</h5>
                  <p className="text-sm text-muted-foreground">
                    Auto parts, trucks, farm tractors, and agricultural machinery
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">⚡ Renewable Energy</h5>
                  <p className="text-sm text-muted-foreground">
                    Solar panels, lithium batteries, and sustainable energy solutions
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">🏗️ Construction Materials</h5>
                  <p className="text-sm text-muted-foreground">
                    Block-making machines, paint, and construction equipment
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">👕 Fashion & Apparel</h5>
                  <p className="text-sm text-muted-foreground">Clothing, shoes, bags, and fashion accessories</p>
                </div>
              </div>
            </div>

            {/* Export Services */}
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Export Services</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We leverage technology and our fast-growing international business network to facilitate access to
                lucrative export markets abroad for Ghanaian and African entrepreneurs.
              </p>

              <h4 className="text-lg font-semibold text-foreground mb-4">Export Categories:</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-bold text-foreground mb-1">🎨 Creative Arts & Craft</h5>
                  <p className="text-sm text-muted-foreground">
                    Handmade artisan products, traditional crafts, and unique African art
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">🏺 Smart Ceramics</h5>
                  <p className="text-sm text-muted-foreground">
                    Innovative ceramic products combining traditional techniques with modern design
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">🌿 Bamboo Products</h5>
                  <p className="text-sm text-muted-foreground">Sustainable bamboo goods and eco-friendly products</p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">📦 Agricultural Products</h5>
                  <p className="text-sm text-muted-foreground">
                    Quality agricultural goods and value-added farm products
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">🏭 Manufactured Goods</h5>
                  <p className="text-sm text-muted-foreground">Quality products produced by African entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765282910/BYD-Seagull-11kkk_uod4kl.jpg"
                  alt="Electric Vehicle" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Electric Vehicles</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765276175/blue-black-scooter-with-word-scooter-side_999340-52074_cmjxdu.jpg"
                  alt="Electric Bike" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Electric Bike</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765276121/aboboyaa-tricycle-768x557_hnuacy.jpg"
                  alt="Tricycle" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Tricycle</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765283127/is-best-skirts-for-women-tout-d5129862f06c4a00a822bc1db2f70aa9_kb4dug.jpg"
                  alt="Women'sClothing" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Women's Clothing</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765276343/OIP_sl0nel.jpg"
                  alt="Paints  Brushes" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Paints Brushes</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765283272/OIP_15_fwd0qn.jpg"
                  alt="Men's Clothing" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Men's Clothing</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765283157/Webp.net-compress-image_hqyctv.jpg"
                  alt="Shoe & Sneakers" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Shoes & Sneakers</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765276175/OIP_12_p4qk7o.jpg"
                  alt="Electronics" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Electronics</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275698/lithium-batteries-energy-storage_fxgkoz.jpg"
                  alt="Lithium Batteries" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Lithium Batteries</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275697/african-artisan-crafts-handmade-art_q2jsbx.jpg"
                  alt="African Crafts" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">African Crafts</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img
                  src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275699/farm-tractor-agricultural-equipment_ochcsy.jpg"
                  alt="Agricultural Equipment"
                  className="w-full h-60 object-cover"
                />
                <p className="p-3 text-sm font-semibold text-foreground">Agricultural Equipment</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275698/bamboo-products-eco-friendly-sustainable_tkmx1w.jpg"
                  alt="Bamboo Products" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">Bamboo Products</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-card border border-border">
                <img src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765276317/il_600x600.2802228868_suqh_jkk0oc.jpg"
                  alt="African Kante" className="w-full h-60 object-cover" />
                <p className="p-3 text-sm font-semibold text-foreground">African Kante</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose iTradeAfrica</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Global Supplier Network</h3>
                <p className="text-muted-foreground">
                  Verified suppliers across multiple industries and regions, with special focus on Asia-Africa trade
                  partnerships.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Streamlined Trading Process</h3>
                <p className="text-muted-foreground">
                  Place bulk orders via app, phone, or walk-in with automated processes that reduce lead times and
                  costs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Market Intelligence</h3>
                <p className="text-muted-foreground">
                  Real-time data on market trends, pricing, and opportunities across import and export categories.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality checks and compliance standards for all products from factories and suppliers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dedicated Trade Specialists</h3>
                <p className="text-muted-foreground">
                  Personal support from experienced trade professionals who understand local and international markets.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">End-to-End Logistics</h3>
                <p className="text-muted-foreground">
                  From factory to delivery, we handle sourcing, quality control, shipping, and customs clearance.
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
              <h3 className="text-xl font-bold text-foreground mb-4">Importers & Retailers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Source quality products at competitive prices from verified suppliers worldwide, with reliable delivery
                directly to your business.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">African Exporters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access international markets for your creative arts, crafts, agricultural products, and manufactured
                goods through our global network.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Manufacturers & Businesses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expand your operations by accessing raw materials, components, and equipment while exploring new export
                opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Unlock Trade Opportunities?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of African businesses and international traders already leveraging iTradeAfrica to transform
              their operations.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 cursor-pointer">
              <Link href="/contact">
                Start Your Trading Journey
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
