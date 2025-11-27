import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Team - Africa Techcity",
  description: "Meet the talented team leading Africa Techcity's mission to bridge Africa and China.",
}

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Kwame Mensah",
    role: "CEO & Founder",
    image: "/professional-male-ceo-african.jpg",
    bio: "With over 20 years of international business experience, Dr. Mensah founded Africa Techcity to bridge economic opportunities between continents.",
  },
  {
    id: 2,
    name: "Amina Okafor",
    role: "Director of ITrade Africa",
    image: "/professional-female-director-african.jpg",
    bio: "Amina leads our trade division with expertise in supply chain management and African-Asian commerce. Her vision has connected over 500+ businesses.",
  },
  {
    id: 3,
    name: "Chen Wei",
    role: "Director of ITEC",
    image: "/professional-male-director-asian.jpg",
    bio: "Chen Wei brings 15 years of educational recruitment experience. He is passionate about creating pathways for African talents to thrive globally.",
  },
  {
    id: 4,
    name: "David Kipchoge",
    role: "Head of Operations",
    image: "/professional-male-operations-african.jpg",
    bio: "David ensures seamless execution of all partnerships with meticulous attention to detail and a commitment to excellence in every project.",
  },
  {
    id: 5,
    name: "Maria Santos",
    role: "Business Development Manager",
    image: "/professional-female-business-manager.jpg",
    bio: "Maria builds strategic partnerships and identifies new market opportunities, expanding Africa Techcity's reach across multiple sectors.",
  },
  {
    id: 6,
    name: "James Murage",
    role: "IT Manager",
    image: "/professional-male-it-tech-african.jpg",
    bio: "James oversees all technical infrastructure and digital initiatives, ensuring our platforms remain secure, scalable, and user-friendly.",
  },
]

export default function Team() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dedicated professionals committed to building bridges between Africa and China
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover bg-muted"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
