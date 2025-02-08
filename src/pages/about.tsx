
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Code, Users, Workflow, FileSpreadsheet, Database, Bot, Laptop, ArrowRight, Boxes, Brain, Gauge, MapPin, Heart, Building, Store } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  const techStack = [
    { name: "Make.com", icon: Workflow, description: "Advanced workflow automation platform" },
    { name: "Airtable", icon: Database, description: "Flexible database and workspace" },
    { name: "Excel & VBA", icon: FileSpreadsheet, description: "Spreadsheet automation" },
    { name: "Python", icon: Code, description: "Custom automation development" }
  ]

  const processSteps = [
    {
      icon: Brain,
      title: "Discovery & Analysis",
      description: "We start by understanding your current processes and identifying automation opportunities"
    },
    {
      icon: Boxes,
      title: "Solution Design",
      description: "Creating a tailored automation strategy using the most suitable tools and technologies"
    },
    {
      icon: Bot,
      title: "Implementation",
      description: "Building and deploying automated workflows with rigorous testing"
    },
    {
      icon: Gauge,
      title: "Optimization",
      description: "Continuous monitoring and refinement of automated processes"
    }
  ]

  const localFeatures = [
    {
      icon: Store,
      title: "Local Business Focus",
      description: "Deep understanding of Alexandria's business community and unique market needs"
    },
    {
      icon: Building,
      title: "Community Roots",
      description: "Proud member of the Alexandria business community, serving Central Louisiana"
    },
    {
      icon: Heart,
      title: "Community Investment",
      description: "Committed to helping local businesses thrive through modern automation solutions"
    }
  ]

  return (
    <>
      <Head>
        <title>About - EchoFlow Labs</title>
        <meta name="description" content="Learn about EchoFlow Labs - your trusted partner in business process automation, specializing in Make.com, Excel, Python, and Airtable development." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1200px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center mb-24"
              >
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-6">
                    Revolutionizing Business Operations with Cutting-Edge Automation
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    At EchoFlow Labs, we ignite innovation for small businesses through intelligent automation. 
                    With our mastery in Make.com, Excel, Python, and Airtable, we design smart solutions that 
                    optimize workflows, enhance efficiency, and drive sustainable growth. Experience the power 
                    of technology tailored to transform your business!
                  </p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                    <p className="text-muted-foreground mb-6">
                      EchoFlow Labs was established with a clear purpose: making powerful automation solutions accessible to small businesses. By combining technical expertise with deep business insights, we help organizations save time, reduce errors, and focus on strategic growth.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Industry Experience</h3>
                          <p className="text-sm text-muted-foreground">Deep understanding of small business needs</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Code className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Technical Excellence</h3>
                          <p className="text-sm text-muted-foreground">Expertise in leading automation platforms</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Client-Focused Approach</h3>
                          <p className="text-sm text-muted-foreground">Dedicated support and collaboration</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <Separator className="my-16" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <h2 className="text-3xl font-bold tracking-tight">Our Alexandria Roots</h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    Proudly based in Alexandria, Louisiana, we understand the unique challenges and opportunities 
                    facing Central Louisiana businesses. Our local presence allows us to provide personalized 
                    service while delivering world-class automation solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {localFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors" />
                            <div className="relative z-10">
                              <Icon className="h-12 w-12 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>

              <Separator className="my-16" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24"
              >
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors" />
                            <div className="relative z-10">
                              <Icon className="h-12 w-12 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                          <p className="text-muted-foreground">{tech.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>

              <Separator className="my-16" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="relative">
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent" />
                        )}
                        <Card className="relative bg-white/80 backdrop-blur-sm">
                          <CardContent className="pt-6">
                            <div className="mb-4">
                              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                <Icon className="h-8 w-8 text-blue-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
