
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Clock, DollarSign, BarChart, Shield, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Boost Efficiency",
      description: "Save hours of manual work with smart automation workflows that handle repetitive tasks",
      icon: Zap,
      color: "text-yellow-500",
      metric: "Up to 80% time savings"
    },
    {
      title: "Real-time Operations",
      description: "Monitor and manage your business processes in real-time with automated tracking",
      icon: Clock,
      color: "text-blue-500",
      metric: "24/7 automated workflows"
    },
    {
      title: "Cost Reduction",
      description: "Minimize operational costs by automating manual processes and reducing human error",
      icon: DollarSign,
      color: "text-green-500",
      metric: "Reduce costs by 60%"
    },
    {
      title: "Data-Driven Insights",
      description: "Get valuable insights from automated data collection and analysis",
      icon: BarChart,
      color: "text-purple-500",
      metric: "Real-time analytics"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with automated backups and error handling",
      icon: Shield,
      color: "text-red-500",
      metric: "99.9% uptime"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your business needs",
      icon: Sparkles,
      color: "text-indigo-500",
      metric: "100% customizable"
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Transform your business operations with powerful automation solutions that save time,
            reduce costs, and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none bg-slate-50/50">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-muted-foreground">{feature.metric}</span>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
