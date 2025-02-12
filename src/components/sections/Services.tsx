
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Workflow, Database, Cloud, Robot } from "lucide-react"
import { motion } from "framer-motion"

export const services = [
  {
    id: "web-development",
    title: "Custom Web Development",
    description: "Modern, scalable web applications that help your business grow and operate efficiently.",
    icon: Code,
    color: "text-blue-500",
    useCases: [
      "Build customer portals and dashboards",
      "Create internal management systems",
      "Develop e-commerce solutions",
      "Design responsive web applications",
      "Implement secure user authentication"
    ],
    examples: [
      "Customer relationship management (CRM) system",
      "Inventory management dashboard",
      "Online booking platform",
      "Employee management portal"
    ]
  },
  {
    id: "ai-integration",
    title: "AI & Machine Learning Solutions",
    description: "Harness the power of AI to automate decisions, predict trends, and enhance customer experience.",
    icon: Brain,
    color: "text-purple-500",
    useCases: [
      "Implement chatbots for customer service",
      "Automate document processing",
      "Create predictive analytics models",
      "Build recommendation systems",
      "Develop AI-powered automation"
    ],
    examples: [
      "Intelligent customer service bot",
      "Automated document analysis",
      "Sales prediction system",
      "Smart inventory management"
    ]
  },
  {
    id: "workflow-automation",
    title: "Business Process Automation",
    description: "End-to-end automation solutions that save time, reduce errors, and boost productivity.",
    icon: Workflow,
    color: "text-emerald-500",
    useCases: [
      "Automate repetitive business tasks",
      "Create custom workflow solutions",
      "Integrate multiple software systems",
      "Build automated reporting systems",
      "Streamline approval processes"
    ],
    examples: [
      "Automated invoice processing",
      "Order fulfillment system",
      "Employee onboarding automation",
      "Marketing campaign automation"
    ]
  },
  {
    id: "data-integration",
    title: "Data Integration & Analytics",
    description: "Connect your business tools and gain valuable insights from your data.",
    icon: Database,
    color: "text-amber-500",
    useCases: [
      "Integrate multiple data sources",
      "Create automated dashboards",
      "Build custom reporting tools",
      "Implement data warehousing",
      "Design ETL pipelines"
    ],
    examples: [
      "Real-time business analytics",
      "Automated data synchronization",
      "Custom reporting platform",
      "Multi-system data integration"
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable, secure cloud solutions that grow with your business.",
    icon: Cloud,
    color: "text-sky-500",
    useCases: [
      "Set up cloud infrastructure",
      "Implement continuous deployment",
      "Configure automatic scaling",
      "Manage cloud security",
      "Optimize cloud costs"
    ],
    examples: [
      "Automated deployment pipeline",
      "Scalable cloud architecture",
      "Secure data backup system",
      "Cloud cost optimization"
    ]
  },
  {
    id: "process-optimization",
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions and process optimization.",
    icon: Robot,
    color: "text-rose-500",
    useCases: [
      "Digitize paper-based processes",
      "Implement digital workflows",
      "Create automated systems",
      "Design efficient processes",
      "Build custom digital tools"
    ],
    examples: [
      "Paperless office system",
      "Digital workflow platform",
      "Process automation suite",
      "Custom business tools"
    ]
  }
]

export function Services() {
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            From custom web applications to AI-powered automation, we help small businesses leverage enterprise-grade technology solutions at an affordable price.
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
                <Card className="group relative bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/20 h-full">
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
                    <div>
                      <h4 className="font-medium mb-2">Key Solutions:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {service.useCases.slice(0, 3).map((useCase, i) => (
                          <li key={i}>{useCase}</li>
                        ))}
                      </ul>
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
