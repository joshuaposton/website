
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Workflow, Database, Cloud, Bot } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      title: "Custom Web Development",
      description: "Build modern, scalable web applications that streamline operations and enhance user experience",
      icon: Code,
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500",
      metric: "100% customized"
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence to automate decisions, predict trends, and enhance operations",
      icon: Brain,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500",
      metric: "24/7 AI-powered"
    },
    {
      title: "Process Automation",
      description: "Streamline workflows and eliminate manual tasks with intelligent automation solutions",
      icon: Workflow,
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
      metric: "80% time savings"
    },
    {
      title: "Data Integration",
      description: "Connect your business tools and gain valuable insights through seamless data integration",
      icon: Database,
      color: "text-amber-500",
      gradient: "from-amber-500 to-orange-500",
      metric: "Real-time sync"
    },
    {
      title: "Cloud Solutions",
      description: "Build scalable, secure cloud infrastructure that grows with your business needs",
      icon: Cloud,
      color: "text-sky-500",
      gradient: "from-sky-500 to-blue-500",
      metric: "99.9% uptime"
    },
    {
      title: "Digital Transformation",
      description: "Transform your business with comprehensive digital solutions and process optimization",
      icon: Bot,
      color: "text-rose-500",
      gradient: "from-rose-500 to-red-500",
      metric: "Full integration"
    }
  ]

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/90 [mask-image:radial-gradient(ellipse_at_center,transparent,white)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />
      
      <div className="container relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            From custom web applications to AI-powered automation, we deliver end-to-end digital solutions
            that help your business thrive in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-300`} />
                        <Icon className={`h-8 w-8 ${feature.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 blur-sm rounded-full`} />
                        <span className="text-sm font-medium relative z-10">{feature.metric}</span>
                      </motion.div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full" />
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
