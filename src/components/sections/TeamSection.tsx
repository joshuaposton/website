
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const team = [
    {
      name: "Alex Thompson",
      role: "Automation Architect",
      description: "10+ years of experience in business process automation and system integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
      socials: {
        linkedin: "#",
        github: "#",
        email: "alex@echoflowlabs.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Integration Specialist",
      description: "Expert in Make.com and Airtable development with a background in fintech.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
      socials: {
        linkedin: "#",
        github: "#",
        email: "sarah@echoflowlabs.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Technical Lead",
      description: "Python automation expert specializing in data processing and API integrations.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
      socials: {
        linkedin: "#",
        github: "#",
        email: "marcus@echoflowlabs.com"
      }
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Our experts bring years of experience in automation and integration to help transform your business processes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mb-4 relative mx-auto">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
