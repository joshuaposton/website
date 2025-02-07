
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, FileSpreadsheet, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

export const services = [
  {
    id: "time-saving-automation",
    title: "Time-Saving Solutions",
    description: "Stop spending hours on manual data entry. Our automation tools do the work for you!",
    icon: Clock,
    color: "text-blue-500",
    useCases: [
      "Turn 4 hours of data entry into a 5-minute task",
      "Automatically sync customer info across all your tools",
      "Send invoices and follow-ups automatically",
      "Schedule social media posts in advance",
      "Automate your email marketing campaigns"
    ],
    examples: [
      "Customer details instantly updated everywhere",
      "New leads automatically added to your system",
      "Invoices generated and sent automatically",
      "Customer support responses automated"
    ]
  },
  {
    id: "business-organization",
    title: "Business Organization",
    description: "Keep all your business information organized and accessible in one place",
    icon: Target,
    color: "text-cyan-500",
    useCases: [
      "Track all your projects in one simple dashboard",
      "Never lose track of inventory again",
      "Keep customer information up-to-date automatically",
      "Manage your content calendar effortlessly",
      "Coordinate your team without endless emails"
    ],
    examples: [
      "Real-time inventory tracking dashboard",
      "Automated customer database updates",
      "Team tasks automatically assigned",
      "Custom reports sent to your inbox"
    ]
  },
  {
    id: "financial-automation",
    title: "Financial Management",
    description: "Save time and reduce errors in your financial processes",
    icon: DollarSign,
    color: "text-emerald-500",
    useCases: [
      "Generate financial reports automatically",
      "Track expenses without spreadsheet headaches",
      "Automate invoice creation and sending",
      "Monitor sales and revenue in real-time",
      "Simplify payroll and time tracking"
    ],
    examples: [
      "Monthly reports created automatically",
      "Expenses categorized instantly",
      "Sales dashboard always up-to-date",
      "Payroll calculated automatically"
    ]
  },
  {
    id: "custom-solutions",
    title: "Custom Business Solutions",
    description: "Get a solution that fits your unique business needs perfectly",
    icon: Zap,
    color: "text-indigo-500",
    useCases: [
      "Streamline your specific business processes",
      "Connect all your favorite tools",
      "Automate unique industry workflows",
      "Create custom reports automatically",
      "Build your perfect business system"
    ],
    examples: [
      "Your entire workflow automated",
      "Custom reporting dashboard",
      "Industry-specific solutions",
      "Unique process automation"
    ]
  },
  {
    id: "workflow-automation",
    title: "Smart Workflows",
    description: "Let automation handle your repetitive daily tasks",
    icon: FileSpreadsheet,
    color: "text-violet-500",
    useCases: [
      "Turn manual processes into automatic ones",
      "Speed up document processing",
      "Automate approval processes",
      "Handle customer service automatically",
      "Streamline HR tasks"
    ],
    examples: [
      "Documents processed automatically",
      "New hire paperwork automated",
      "Customer support streamlined",
      "Data backed up automatically"
    ]
  },
  {
    id: "team-collaboration",
    title: "Team Productivity",
    description: "Help your team work smarter, not harder",
    icon: Users,
    color: "text-purple-500",
    useCases: [
      "Keep everyone in sync automatically",
      "Connect your online store to accounting",
      "Streamline team communication",
      "Automate task assignments",
      "Track project progress easily"
    ],
    examples: [
      "Automated task management",
      "Team updates sent automatically",
      "Project timelines tracked easily",
      "Resources allocated efficiently"
    ]
  }
]

export function Services() {
  const router = useRouter()

  const handleServiceClick = (serviceId: string) => {
    router.push(`/services/${serviceId}`)
  }

  return (
    <section id="services" className="py-20 bg-slate-50/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">How We Can Help</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Let us handle the technical stuff while you focus on growing your business. 
            Our solutions are designed to make your life easier and your business more profitable.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="mb-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full group-hover:opacity-100 transition-opacity duration-300" />
                        <Icon className={`h-10 w-10 ${service.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">What You Get:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {service.useCases.slice(0, 3).map((useCase, i) => (
                            <li key={i}>{useCase}</li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        onClick={() => handleServiceClick(service.id)}
                        variant="outline" 
                        className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                      >
                        See How It Works
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
