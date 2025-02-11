
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Workflow, FileSpreadsheet, Database, Bot, Laptop, Boxes, Brain, Gauge, MapPin, Heart, Building, Phone, Mail, Search, Target, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  const techStack = [
    { name: "Make.com", icon: Workflow, description: "Advanced workflow automation platform" },
    { name: "Airtable", icon: Database, description: "Flexible database and workspace" },
    { name: "Excel & VBA", icon: FileSpreadsheet, description: "Spreadsheet automation" },
    { name: "Python", icon: Code, description: "Custom automation development" }
  ]

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation Through Automation",
      description: "EchoFlow Labs emerged from a deep-rooted passion for solving complex business challenges through innovative automation solutions. Our expertise in workflow optimization and data analysis drives transformative results for businesses."
    },
    {
      icon: Search,
      title: "Problem-Solving DNA",
      description: "At our core, we are problem solvers who thrive on discovering efficient solutions. Our team constantly explores new ways to streamline processes, analyze data, and implement cutting-edge automation technologies."
    },
    {
      icon: Target,
      title: "Technical Excellence",
      description: "With extensive experience in automation development, data analysis, and process optimization, we bring specialized technical expertise that many businesses find challenging to develop internally."
    }
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

  return (
    <>
      <Head>
        <title>About EchoFlow Labs - Business Process Automation Experts</title>
        <meta name="description" content="Discover EchoFlow Labs - where passion for automation meets technical expertise. We specialize in transforming businesses through innovative process automation solutions." />
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
                    Transforming Businesses Through Automation Excellence
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    EchoFlow Labs was founded on a simple yet powerful idea: every business deserves access to 
                    sophisticated automation solutions. We combine technical expertise with a passion for 
                    problem-solving to help businesses thrive in the digital age.
                  </p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground mb-6">
                      EchoFlow Labs exists to empower businesses with cutting-edge automation solutions. 
                      Our deep technical expertise and innovative approach to problem-solving enable 
                      organizations to achieve unprecedented efficiency and growth.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">josh@echoflowlabs.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-muted-foreground">(318) 419-5264</p>
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
                    <Sparkles className="h-6 w-6 text-blue-600" />
                    <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    Built on a foundation of technical excellence and innovative problem-solving, 
                    we bring specialized expertise to help businesses achieve their automation goals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {coreValues.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors" />
                            <div className="relative z-10">
                              <Icon className="h-12 w-12 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
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
                className="text-center"
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technical Expertise</h2>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    With deep experience in multiple automation technologies and platforms, 
                    we bring comprehensive technical solutions to complex business challenges.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <Icon className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
                          <h3 className="font-semibold mb-2">{tech.name}</h3>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </CardContent>
                      </Card>
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
