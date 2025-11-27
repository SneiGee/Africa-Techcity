import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookOpen, Award, Briefcase, Globe, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "ITEC - Teacher Recruitment & Professional Development",
  description:
    "Connect with international education and employment opportunities through Africa Techcity's ITEC division.",
}

export default function ITEC() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary/10 to-accent/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">ITEC</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Connecting talented African educators and professionals with global opportunities
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Explore Opportunities
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/professional-training-education-classroom.jpg" alt="ITEC Services" className="rounded-lg object-cover w-full h-96" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is ITEC?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ITEC (International Talent & Education Connection) is our specialized recruitment and professional
                development division. We bridge African talent with world-class educational institutions and employers
                seeking qualified professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a teacher seeking international positions or an institution looking for talented
                educators, ITEC provides comprehensive support and opportunities for career growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services for Professionals */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Professionals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <BookOpen className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Teaching Positions Globally</h3>
              <p className="text-muted-foreground mb-4">
                Access exclusive teaching opportunities at international schools and universities worldwide.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• International schools across Asia and beyond</li>
                <li>• Language and subject specialization opportunities</li>
                <li>• Competitive compensation packages</li>
                <li>• Visa and relocation support</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Award className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Professional Development</h3>
              <p className="text-muted-foreground mb-4">
                Enhance your skills and credentials through recognized international programs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Certifications and continuing education</li>
                <li>• Leadership training programs</li>
                <li>• Mentorship from industry experts</li>
                <li>• Networking with global professionals</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Briefcase className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Career Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Personalized support to navigate your international career journey.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• One-on-one career counseling</li>
                <li>• Resume and interview preparation</li>
                <li>• Salary negotiation support</li>
                <li>• Long-term career planning</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <Globe className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Global Network Access</h3>
              <p className="text-muted-foreground mb-4">
                Connect with employers, institutions, and professionals worldwide.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Exclusive job listings</li>
                <li>• Industry networking events</li>
                <li>• Peer collaboration opportunities</li>
                <li>• Community support and resources</li>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Advance Your Career?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've found their perfect opportunity through ITEC.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
