
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Clock, DollarSign, BarChart, Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      title: "Boost Efficiency",
      description: "Save hours of manual work with smart automation workflows that handle repetitive tasks",
      icon: Zap,
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500",
      metric: "Up to 80% time savings"
    },
    {
      title: "Real-time Operations",
      description: "Monitor and manage your business processes in real-time with automated tracking",
      icon: Clock,
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500",
      metric: "24/7 automated workflows"
    },
    {
      title: "Cost Reduction",
      description: "Minimize operational costs by automating manual processes and reducing human error",
      icon: DollarSign,
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
      metric: "Reduce costs by 60%"
    },
    {
      title: "Data-Driven Insights",
      description: "Get valuable insights from automated data collection and analysis",
      icon: BarChart,
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500",
      metric: "Real-time analytics"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with automated backups and error handling",
      icon: Shield,
      color: "text-red-500",
      gradient: "from-red-500 to-rose-500",
      metric: "99.9% uptime"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your business needs",
      icon: Sparkles,
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-violet-500",
      metric: "100% customizable"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Transform your business operations with powerful automation solutions that save time,
            reduce costs, and drive growth.
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
