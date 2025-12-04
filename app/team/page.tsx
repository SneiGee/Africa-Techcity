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
    name: "MR. YAW OWUSU",
    role: "Chief Executive Officer",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764848706/WhatsApp_Image_2025-12-04_at_09.43.47_nbytlt.jpg",
    bio: "With over 20 years of international business experience, Dr. Mensah founded Africa Techcity to bridge economic opportunities between continents.",
  },
  {
    id: 2,
    name: "MR. THOMAS W. NASH",
    role: "Board Member",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764851857/WhatsApp_Image_2025-12-04_at_12.30.42_ahoxux.jpg",
    bio: "Amina leads our trade division with expertise in supply chain management and African-Asian commerce. Her vision has connected over 500+ businesses.",
  },
  {
    id: 3,
    name: "MR. YANG CHUNGUANG",
    role: "Board Member",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764851884/WhatsApp_Image_2025-12-04_at_12.25.12_rufdjl.jpg",
    bio: "Chen Wei brings 15 years of educational recruitment experience. He is passionate about creating pathways for African talents to thrive globally.",
  },
  {
    id: 4,
    name: "MR. SAMUEL SELORMEY AVEVOR",
    role: "International Business Manager",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764848707/WhatsApp_Image_2025-12-04_at_10.09.59_jkutx3.jpg",
    bio: "David ensures seamless execution of all partnerships with meticulous attention to detail and a commitment to excellence in every project.",
  },
  {
    id: 5,
    name: "MR. MICHAEL SCHNEIDER",
    role: "IT Manager",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764849309/myofficial_bsl0r6.jpg",
    bio: "Maria builds strategic partnerships and identifies new market opportunities, expanding Africa Techcity's reach across multiple sectors.",
  },
  {
    id: 6,
    name: "MS. IRENE AMANKWAH",
    role: "Account Manager",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764848710/WhatsApp_Image_2025-12-04_at_11.32.32_fzfq7e.jpg",
    bio: "James oversees all technical infrastructure and digital initiatives, ensuring our platforms remain secure, scalable, and user-friendly.",
  },
  {
    id: 7,
    name: "Ms. ZILLA GEORGE OSEI NYAMEKYE",
    role: "Account Manager",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764848707/WhatsApp_Image_2025-12-04_at_11.28.04_afvm48.jpg",
    bio: "David ensures seamless execution of all partnerships with meticulous attention to detail and a commitment to excellence in every project.",
  },
  {
    id: 8,
    name: "MS. JOY SHARON OKPALA",
    role: "Account Manager - Marketing",
    image: "https://res.cloudinary.com/duiy6kpg0/image/upload/v1764848706/WhatsApp_Image_2025-12-04_at_10.07.57_g7jhse.jpg",
    bio: "Maria builds strategic partnerships and identifies new market opportunities, expanding Africa Techcity's reach across multiple sectors.",
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
                  className="w-full h-96 object-cover bg-muted"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  {/* <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p> */}
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
