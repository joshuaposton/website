
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow, Table2, FileSpreadsheet, Code2, Bot, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const services = [
  {
    id: "make-automation",
    title: "Make.com Automation",
    description: "Create powerful automated workflows connecting your favorite apps and services",
    icon: Workflow,
    color: "text-blue-500",
    useCases: [
      "Automated lead capture from multiple sources",
      "Customer data synchronization across platforms",
      "Invoice and payment processing automation",
      "Social media content scheduling and posting",
      "Email marketing automation and tracking"
    ],
    examples: [
      "CRM integration with email marketing platforms",
      "Automated customer onboarding workflows",
      "Real-time data synchronization between systems",
      "Custom notification systems for team collaboration"
    ]
  },
  {
    id: "airtable-development",
    title: "Airtable Development",
    description: "Custom Airtable solutions for efficient data management and collaboration",
    icon: Table2,
    color: "text-cyan-500",
    useCases: [
      "Project management and task tracking",
      "Inventory management systems",
      "Customer relationship management",
      "Content calendar management",
      "Team collaboration and resource planning"
    ],
    examples: [
      "Custom views and dashboards for analytics",
      "Automated data entry and validation",
      "Integration with external systems",
      "Customized reporting solutions"
    ]
  },
  {
    id: "excel-automation",
    title: "Excel Automation",
    description: "Streamline your Excel workflows with VBA and Python automation",
    icon: FileSpreadsheet,
    color: "text-emerald-500",
    useCases: [
      "Financial reporting automation",
      "Data analysis and visualization",
      "Inventory tracking systems",
      "Sales reporting and forecasting",
      "Employee scheduling and time tracking"
    ],
    examples: [
      "Automated monthly financial reports",
      "Custom data processing macros",
      "Interactive dashboards with real-time updates",
      "Automated data validation and cleaning"
    ]
  },
  {
    id: "python-development",
    title: "Python Development",
    description: "Custom Python scripts and applications for business process automation",
    icon: Code2,
    color: "text-indigo-500",
    useCases: [
      "Data scraping and processing",
      "File management and organization",
      "API integrations and development",
      "Custom reporting tools",
      "Machine learning solutions"
    ],
    examples: [
      "Automated data extraction from websites",
      "Custom API development for internal tools",
      "Automated report generation systems",
      "Data analysis and visualization tools"
    ]
  },
  {
    id: "process-automation",
    title: "Process Automation",
    description: "Identify and automate repetitive tasks to boost productivity",
    icon: Bot,
    color: "text-violet-500",
    useCases: [
      "Document processing and management",
      "Approval workflow automation",
      "Data entry and validation",
      "Customer service automation",
      "HR process automation"
    ],
    examples: [
      "Automated document generation and filing",
      "Employee onboarding workflows",
      "Customer support ticket automation",
      "Automated data backup systems"
    ]
  },
  {
    id: "integration-services",
    title: "Integration Services",
    description: "Seamlessly connect your business tools and applications",
    icon: Laptop,
    color: "text-purple-500",
    useCases: [
      "Cross-platform data synchronization",
      "E-commerce platform integration",
      "Payment gateway integration",
      "CRM and marketing tool integration",
      "Custom API development"
    ],
    examples: [
      "E-commerce and accounting system integration",
      "CRM and email marketing platform connection",
      "Custom API development for legacy systems",
      "Multi-platform data synchronization"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We help small businesses streamline their operations with custom automation solutions.
            Transform your workflow with our specialized services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-blue-500/20 transition-colors">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className={`h-10 w-10 ${service.color}`} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Use Cases:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {service.useCases.slice(0, 3).map((useCase, i) => (
                          <li key={i}>{useCase}</li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/services/${service.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
