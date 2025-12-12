import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us - Africa Techcity",
  description: "Get in touch with Africa Techcity. We're here to answer your questions and support your journey.",
}

export default function Contact() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We'd love to hear from you. Reach out with any questions or partnership inquiries.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@africatechcity.com" className="text-muted-foreground hover:text-primary">
                      yowusu@africatechcity.com | schneider@africatechcity.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+233247145337" className="text-muted-foreground hover:text-primary">
                      +233 (024) 714-5337
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Available Monday - Friday, 9AM - 5PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      97 Kumasi City Mall, Hudson & Lake Road
                      <br />
                      Kumasi, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Support Hours</h3>
                    <p className="text-muted-foreground">
                      24/7 Emergency Support
                      <br />
                      Business Hours: Mon-Fri 9AM-6PM GMT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61584578507280"
                    target="_blank"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm">f</span>
                  </a>
                  <a
                    href="https://x.com/itrade_africa"
                    target="_blank"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm">𝕏</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/itrade-africa/"
                    target="_blank"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm">in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Select a service</option>
                    <option>ITrade Africa</option>
                    <option>ITEC</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button disabled className="w-full bg-primary hover:bg-primary/90 py-6">Send Message</Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">What services does Africa Techcity offer?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We offer two main services: ITrade Africa for business sourcing and procurement, and ITEC for education
                and professional recruitment.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">How long does the process take?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Timeline varies by service. Generally, partnerships take 2-4 weeks. We provide updates throughout the
                process.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">What are your pricing models?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pricing is customized based on your specific needs and service requirements. Contact us for a
                personalized quote.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Do you offer after-sales support?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We provide comprehensive ongoing support to ensure your success and satisfaction with our services.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
