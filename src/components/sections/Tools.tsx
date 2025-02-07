
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Boxes, Table2, Workflow, Code2 } from "lucide-react"

export function Tools() {
  const tools = [
    {
      name: "Business Database",
      description: "Keep everything organized in one place - from customer details to inventory, all easily searchable and always up-to-date",
      icon: Table2,
      color: "text-blue-500",
      benefits: [
        "Find any information in seconds",
        "Always accurate and up-to-date",
        "Everything organized automatically"
      ]
    },
    {
      name: "Workflow Builder",
      description: "Let your business run smoothly with automated tasks that work exactly how you want them to",
      icon: Workflow,
      color: "text-green-500",
      benefits: [
        "Save hours on repetitive tasks",
        "Everything happens automatically",
        "Works with your favorite tools"
      ]
    },
    {
      name: "Smart Spreadsheets",
      description: "Keep using Excel while we add powerful automation to make it work harder for your business",
      icon: Boxes,
      color: "text-purple-500",
      benefits: [
        "Stay with familiar tools",
        "Automatic calculations",
        "No more manual updates"
      ]
    },
    {
      name: "Custom Solutions",
      description: "Get exactly what your business needs - custom automation that grows with you",
      icon: Code2,
      color: "text-indigo-500",
      benefits: [
        "Built just for your business",
        "Adapts as you grow",
        "Works exactly how you need"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Business-Friendly Tools</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We use reliable, proven tools to automate your business tasks. You focus on running your business - 
            we will handle making everything work together smoothly.
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
