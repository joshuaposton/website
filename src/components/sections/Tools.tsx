
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Brain, Cloud, Database, Workflow, Settings } from "lucide-react"

export function Tools() {
  const tools = [
    {
      name: "Web Development Stack",
      description: "Build powerful web applications using modern frameworks and technologies that scale with your business",
      icon: Code2,
      color: "text-blue-500",
      benefits: [
        "Modern, responsive interfaces",
        "Scalable architecture",
        "Secure and reliable"
      ]
    },
    {
      name: "AI & ML Solutions",
      description: "Leverage cutting-edge artificial intelligence and machine learning tools to automate decisions and predict trends",
      icon: Brain,
      color: "text-purple-500",
      benefits: [
        "Intelligent automation",
        "Predictive analytics",
        "Smart recommendations"
      ]
    },
    {
      name: "Cloud Infrastructure",
      description: "Deploy your solutions on reliable, scalable cloud platforms with automatic scaling and backup",
      icon: Cloud,
      color: "text-sky-500",
      benefits: [
        "High availability",
        "Automatic scaling",
        "Secure data storage"
      ]
    },
    {
      name: "Data Integration",
      description: "Connect all your business tools and systems for seamless data flow and real-time insights",
      icon: Database,
      color: "text-emerald-500",
      benefits: [
        "Unified data flow",
        "Real-time syncing",
        "Automated reporting"
      ]
    },
    {
      name: "Process Automation",
      description: "Streamline your workflows with intelligent automation that saves time and reduces errors",
      icon: Workflow,
      color: "text-amber-500",
      benefits: [
        "Efficient workflows",
        "Error reduction",
        "Time savings"
      ]
    },
    {
      name: "System Integration",
      description: "Connect and optimize your existing tools and systems for maximum efficiency",
      icon: Settings,
      color: "text-rose-500",
      benefits: [
        "Seamless connectivity",
        "Enhanced efficiency",
        "Custom integration"
      ]
    }
  ]

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We leverage modern technologies and proven tools to deliver comprehensive digital solutions that 
            transform your business. From web development to AI integration - we have the expertise to bring 
            your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative p-2">
                        <div className="absolute inset-0 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors" />
                        <Icon className={`h-8 w-8 ${tool.color} relative z-10`} />
                      </div>
                      <div>
                        <CardTitle>{tool.name}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full ${tool.color}`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
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
