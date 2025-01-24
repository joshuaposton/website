
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow, Table2, FileSpreadsheet, Code2, Bot, Laptop } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Make.com Automation",
      description: "Create powerful automated workflows connecting your favorite apps and services",
      icon: Workflow,
      color: "text-blue-500"
    },
    {
      title: "Airtable Development",
      description: "Custom Airtable solutions for efficient data management and collaboration",
      icon: Table2,
      color: "text-cyan-500"
    },
    {
      title: "Excel Automation",
      description: "Streamline your Excel workflows with VBA and Python automation",
      icon: FileSpreadsheet,
      color: "text-emerald-500"
    },
    {
      title: "Python Development",
      description: "Custom Python scripts and applications for business process automation",
      icon: Code2,
      color: "text-indigo-500"
    },
    {
      title: "Process Automation",
      description: "Identify and automate repetitive tasks to boost productivity",
      icon: Bot,
      color: "text-violet-500"
    },
    {
      title: "Integration Services",
      description: "Seamlessly connect your business tools and applications",
      icon: Laptop,
      color: "text-purple-500"
    }
  ]

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
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
