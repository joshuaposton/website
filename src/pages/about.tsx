
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Code, Users, Workflow, FileSpreadsheet, Database, Bot, Laptop, ArrowRight, Boxes, Brain, Gauge, MapPin, Heart, Building, Store, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
      description: "As a proud Alexandria native, we understand the unique challenges facing Central Louisiana businesses and provide tailored solutions that work for our community."
    },
    {
      icon: Building,
      title: "Deep Community Roots",
      description: "Born and raised in Alexandria, we&apos;re committed to helping local businesses thrive. Our deep understanding of the CENLA market helps us deliver solutions that truly work for our region."
    },
    {
      icon: Heart,
      title: "Local Support & Service",
      description: "We offer personalized, face-to-face support right here in Alexandria. No outsourcing or long-distance relationships - just reliable, local service you can count on."
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
                    Your Local Business Automation Partner in Alexandria
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    At EchoFlow Labs, we bring Silicon Valley technology to Central Louisiana businesses. 
                    Based in Alexandria, we understand the unique challenges local businesses face and provide 
                    personalized automation solutions that drive real results for our community.
                  </p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Our Local Commitment</h2>
                    <p className="text-muted-foreground mb-6">
                      As an Alexandria native, I founded EchoFlow Labs with a mission to help local businesses thrive 
                      through modern automation. We combine our technical expertise with a deep understanding of the 
                      Central Louisiana business landscape to deliver solutions that truly work for our community.
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
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-sm text-muted-foreground">Alexandria, Louisiana</p>
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
                    <h2 className="text-3xl font-bold tracking-tight">Serving Central Louisiana</h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    As lifelong residents of Alexandria, we&apos;re deeply invested in our community&apos;s success. 
                    We understand the unique challenges and opportunities in Central Louisiana, and we&apos;re here 
                    to help local businesses thrive with personalized automation solutions.
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

              <motion.div className="text-center mb-24">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <Separator className="my-16" />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
