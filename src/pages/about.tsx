
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Code, Workflow, FileSpreadsheet, Database, Bot, Laptop, Boxes, Brain, Gauge, MapPin, Heart, Building, Phone, Mail, Search, Target, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/layout/Footer"

export default function AboutPage() {
  const techStack = [
    { name: "Next.js & React", icon: Code, description: "Modern web development framework" },
    { name: "Python & TensorFlow", icon: Brain, description: "AI & Machine Learning" },
    { name: "Make.com", icon: Workflow, description: "Workflow automation platform" },
    { name: "Cloud Services", icon: Database, description: "Scalable infrastructure" },
    { name: "Airtable", icon: FileSpreadsheet, description: "Data management" },
    { name: "OpenAI", icon: Bot, description: "AI integration" }
  ]

  const coreValues = [
    {
      icon: Code,
      title: "Digital Innovation",
      description: "We create cutting-edge web applications and AI solutions that transform how businesses operate. Our passion for innovation drives us to stay ahead of technological trends."
    },
    {
      icon: Brain,
      title: "AI-Driven Excellence",
      description: "We harness the power of artificial intelligence and machine learning to create intelligent solutions that automate decisions and enhance business operations."
    },
    {
      icon: Target,
      title: "Client-Focused Solutions",
      description: "Every solution we build is tailored to our clients' unique needs, ensuring maximum impact and ROI while maintaining simplicity and usability."
    }
  ]

  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Planning",
      description: "We analyze your business needs and identify the best technological solutions"
    },
    {
      icon: Brain,
      title: "Solution Architecture",
      description: "Design custom web applications, AI integrations, and automation workflows"
    },
    {
      icon: Code,
      title: "Development",
      description: "Build robust solutions using modern frameworks and best practices"
    },
    {
      icon: Gauge,
      title: "Deployment & Optimization",
      description: "Launch, monitor, and continuously improve your digital solutions"
    }
  ]

  return (
    <>
      <Head>
        <title>About EchoFlow Labs - Web Development & AI Solutions</title>
        <meta name="description" content="Discover EchoFlow Labs - where innovation meets execution. We specialize in custom web development, AI solutions, and business process automation for forward-thinking companies." />
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
                    Transforming Businesses Through Digital Innovation
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    EchoFlow Labs empowers businesses with cutting-edge web applications, AI solutions, 
                    and intelligent automation. We combine technical expertise with innovative thinking 
                    to help businesses thrive in the digital age.
                  </p>
                </div>
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground mb-6">
                      We exist to make enterprise-grade technology accessible to small businesses. 
                      Through custom web development, AI integration, and process automation, 
                      we help organizations achieve unprecedented efficiency and growth.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">josh@echoflowlabs.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
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
                    Built on a foundation of technical excellence and innovative thinking, 
                    we deliver transformative digital solutions that drive real business results.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {coreValues.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:opacity-75 transition-opacity" />
                            <div className="relative z-10">
                              <Icon className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{value.title}</h3>
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
                className="mb-24"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Our Development Process</h2>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    We follow a systematic approach to deliver high-quality digital solutions 
                    that meet your business objectives.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:opacity-75 transition-opacity" />
                            <Icon className="h-8 w-8 text-blue-600 relative z-10 group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technology Stack</h2>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    We leverage modern frameworks and powerful tools to build 
                    robust, scalable solutions for your business.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon
                    return (
                      <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="relative mb-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:opacity-75 transition-opacity" />
                            <Icon className="h-8 w-8 text-blue-600 mx-auto relative z-10 group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
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
        <Footer />
      </div>
    </>
  )
}
