import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, Award, Briefcase, Globe, Users, Zap, DollarSign, Lightbulb, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "ITEC - Teacher Recruitment & International Education Opportunities",
  description:
    "Unlock global opportunities through Africa Techcity's ITEC division - teach abroad, work abroad, and study abroad programs.",
}

export default function ITEC() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary/10 to-accent/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              ITEC - International Talent & Education Connection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Connecting African educators and professionals with world-class opportunities to teach abroad, work
              abroad, and pursue international education
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link href="/contact">
                Explore Global Opportunities
              </Link>
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://res.cloudinary.com/duiy6kpg0/image/upload/v1765275699/professional-training-education-classroom_qqqm2o.jpg"
              alt="ITEC Services"
              className="rounded-lg object-cover w-full h-96"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is ITEC?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ITEC (International Talent & Education Connection) is Africa Techcity's specialized division dedicated
                to opening doors to global opportunities. We draw on our extensive knowledge of global higher education
                admission processes, sources of financial aid, and access to elite colleges and universities in North
                America, Europe, and Asia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're an academic instructor seeking foreign work experience, a professional pursuing
                international career advancement, or a student aspiring to world-class education, ITEC provides
                comprehensive support and facilitates the process of legally relocating and working in countries with
                attractive incentives.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Three Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-lg p-8">
              <BookOpen className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Teach Abroad</h3>
              <p className="text-muted-foreground mb-4">
                Access exclusive teaching positions at international schools and universities worldwide, with
                competitive compensation and benefits.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ International schools across Asia and beyond</li>
                <li>✓ Language and subject specialization opportunities</li>
                <li>✓ Visa and relocation support</li>
                <li>✓ Attractive compensation packages</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-lg p-8">
              <Briefcase className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Work Abroad</h3>
              <p className="text-muted-foreground mb-4">
                Explore professional opportunities beyond teaching. Access careers in international organizations,
                corporations, and institutions globally.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Professional placements worldwide</li>
                <li>✓ Career development programs</li>
                <li>✓ Work permit and immigration assistance</li>
                <li>✓ Salary negotiation support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-lg p-8">
              <Lightbulb className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Study Abroad</h3>
              <p className="text-muted-foreground mb-4">
                Gain admission to elite colleges and universities with scholarship opportunities in North America,
                Europe, and Asia.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ University admission guidance</li>
                <li>✓ Scholarship identification and applications</li>
                <li>✓ VISA and accommodation support</li>
                <li>✓ Student mentorship programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services for Professionals */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Comprehensive Professional Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <Award className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Professional Development</h3>
              <p className="text-muted-foreground mb-4">
                Enhance your skills and credentials through recognized international programs and certifications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Certifications and continuing education</li>
                <li>• Leadership training programs</li>
                <li>• Mentorship from industry experts</li>
                <li>• Networking with global professionals</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Globe className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Global Network Access</h3>
              <p className="text-muted-foreground mb-4">
                Connect with employers, institutions, and professionals across North America, Europe, and Asia.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Exclusive job listings and opportunities</li>
                <li>• Industry networking events</li>
                <li>• Peer collaboration opportunities</li>
                <li>• Community support and resources</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <MapPin className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Relocation Support</h3>
              <p className="text-muted-foreground mb-4">
                Complete assistance with visa processing, accommodation, and legal requirements for working abroad.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Visa and immigration services</li>
                <li>• Accommodation arrangement</li>
                <li>• Legal documentation support</li>
                <li>• On-ground orientation assistance</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <DollarSign className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Financial Planning</h3>
              <p className="text-muted-foreground mb-4">
                Guidance on scholarships, financial aid, and cost-effective relocation for your international journey.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Scholarship identification</li>
                <li>• Financial aid applications</li>
                <li>• Budget planning assistance</li>
                <li>• Post-placement financial support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services for Institutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Institutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-border rounded-lg p-8">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Qualified Talent Pool</h3>
              <p className="text-muted-foreground">
                Access vetted, qualified educators and professionals from Africa's top talent pool, pre-screened for
                quality and fit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-border rounded-lg p-8">
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Efficient Recruitment</h3>
              <p className="text-muted-foreground">
                Streamlined hiring process from candidate discovery to onboarding, saving you time and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2,000+</div>
              <p className="text-foreground font-semibold mb-2">Professionals Placed</p>
              <p className="text-sm text-muted-foreground">Successfully matched with opportunities globally</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-foreground font-semibold mb-2">Partner Institutions</p>
              <p className="text-sm text-muted-foreground">Leading schools and organizations worldwide</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <p className="text-foreground font-semibold mb-2">Satisfaction Rate</p>
              <p className="text-sm text-muted-foreground">Among professionals and partner institutions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Future?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of African professionals who've unlocked global opportunities through ITEC.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
