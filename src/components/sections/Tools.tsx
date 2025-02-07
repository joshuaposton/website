
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Boxes, Table2, Workflow, Code2 } from "lucide-react"

export function Tools() {
  const tools = [
    {
      name: "Business Database",
      description: "A visual, easy-to-use system that keeps all your business information organized and accessible",
      icon: Table2,
      color: "text-blue-500",
      benefits: [
        "No more scattered spreadsheets",
        "Easy to update and maintain",
        "Everything in one place"
      ]
    },
    {
      name: "Workflow Builder",
      description: "Connect your favorite business tools and automate repetitive tasks with our visual workflow builder",
      icon: Workflow,
      color: "text-green-500",
      benefits: [
        "No coding required",
        "Visual drag-and-drop interface",
        "Connect any business tool"
      ]
    },
    {
      name: "Smart Spreadsheets",
      description: "Transform your existing spreadsheets into powerful, automated business tools",
      icon: Boxes,
      color: "text-purple-500",
      benefits: [
        "Keep using familiar tools",
        "Add automation power",
        "Reduce manual work"
      ]
    },
    {
      name: "Custom Solutions",
      description: "When you need something special, we create custom automation solutions just for your business",
      icon: Code2,
      color: "text-indigo-500",
      benefits: [
        "Tailored to your needs",
        "Built for your industry",
        "Grows with your business"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Business Tools</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We use powerful, business-friendly tools to automate your work. Don't worry about the technical details - 
            we handle everything while you enjoy the benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Card className="group hover:shadow-lg transition-all duration-300">
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
