
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSpreadsheet, BarChart, Clock, Workflow, Headphones, Table2, ClipboardList } from "lucide-react"
import { motion } from "framer-motion"

export const services = [
  {
    id: "business-process-optimization",
    title: "Business Process Optimization",
    description: "Transform your messy data into organized, efficient systems that save time and reduce errors.",
    icon: FileSpreadsheet,
    color: "text-blue-500",
    useCases: [
      "Fix complex Excel spreadsheets and formulas",
      "Clean and organize business data",
      "Create clear SOPs and process guides",
      "Automate repetitive spreadsheet tasks",
      "Streamline data entry processes"
    ],
    examples: [
      "Automated Excel reporting system",
      "Structured data organization system",
      "Clear process documentation",
      "Efficient data entry workflows"
    ]
  },
  {
    id: "reporting-data-insights",
    title: "Reporting & Data Insights",
    description: "Get clear, actionable insights from your data with custom dashboards and automated reports.",
    icon: BarChart,
    color: "text-emerald-500",
    useCases: [
      "Build real-time KPI dashboards",
      "Create automated financial reports",
      "Track employee productivity",
      "Analyze historical data trends",
      "Generate custom business insights"
    ],
    examples: [
      "Interactive Power BI dashboard",
      "Automated financial summaries",
      "Custom data analysis reports",
      "Real-time KPI tracking"
    ]
  },
  {
    id: "workflow-solutions",
    title: "Workflow & Time-Saving Solutions",
    description: "Automate repetitive tasks and streamline your business processes.",
    icon: Clock,
    color: "text-violet-500",
    useCases: [
      "Automate form & document creation",
      "Build inventory tracking systems",
      "Create scheduling tools",
      "Optimize email & CRM workflows",
      "Streamline customer follow-ups"
    ],
    examples: [
      "Automated document generation",
      "Custom inventory system",
      "Efficient scheduling tool",
      "Automated CRM workflows"
    ]
  },
  {
    id: "software-integration",
    title: "Software & Tool Integration",
    description: "Connect your existing tools and automate data flow between systems.",
    icon: Workflow,
    color: "text-indigo-500",
    useCases: [
      "Set up Make.com automations",
      "Configure Airtable workflows",
      "Connect Excel to external data",
      "Integrate business tools",
      "Create custom API connections"
    ],
    examples: [
      "Automated tool integration",
      "Excel-API connections",
      "Custom workflow automation",
      "Cross-platform data sync"
    ]
  },
  {
    id: "tech-support-training",
    title: "On-Demand Tech Support & Training",
    description: "Get expert help when you need it and empower your team with custom training.",
    icon: Headphones,
    color: "text-cyan-500",
    useCases: [
      "Provide one-on-one tool training",
      "Fix spreadsheet issues",
      "Troubleshoot broken formulas",
      "Train teams on new systems",
      "Solve technical bottlenecks"
    ],
    examples: [
      "Custom team training sessions",
      "Quick technical support",
      "Formula troubleshooting",
      "System optimization help"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">How We Can Help</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We help businesses optimize their processes, improve data management, and save time with practical, easy-to-use solutions.
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
                      <h4 className="font-medium mb-2">What You Get:</h4>
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
