
import { useRouter } from "next/router"
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { services } from "@/components/sections/Services"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, CheckCircle, PlayCircle, Clock, ArrowRight, FileText, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function ServiceDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const service = services.find(s => s.id === id)

  if (!service) {
    return null
  }

  const Icon = service.icon

  const getServiceSpecificSteps = (serviceId: string) => {
    const steps = {
      "time-saving-automation": [
        {
          title: "Manual Data Entry",
          description: "See how tasks are typically done without automation",
          icon: Clock,
          content: "Manually copying customer details between systems - 4 hours per week spent on repetitive data entry"
        },
        {
          title: "Setup Automation",
          description: "We connect your systems",
          icon: Zap,
          content: "We set up automated workflows that instantly sync data between all your tools"
        },
        {
          title: "Enjoy Freedom",
          description: "Your data flows automatically",
          icon: PlayCircle,
          content: "Data syncs automatically - saving 4 hours every week. No more copy-paste!"
        }
      ],
      "business-organization": [
        {
          title: "Scattered Information",
          description: "Current state of business data",
          icon: Clock,
          content: "Important information spread across emails, spreadsheets, and paper notes"
        },
        {
          title: "Centralize Everything",
          description: "We build your command center",
          icon: FileText,
          content: "All your business information organized in one easy-to-use dashboard"
        },
        {
          title: "Stay Organized",
          description: "Everything at your fingertips",
          icon: PlayCircle,
          content: "Find any information in seconds - always up-to-date and accessible from anywhere"
        }
      ],
      "financial-automation": [
        {
          title: "Manual Bookkeeping",
          description: "Traditional financial management",
          icon: Clock,
          content: "Hours spent manually creating invoices, tracking expenses, and updating spreadsheets"
        },
        {
          title: "Automate Finances",
          description: "We set up your financial automation",
          icon: FileText,
          content: "Automated systems for invoicing, expense tracking, and financial reporting"
        },
        {
          title: "Financial Control",
          description: "Your finances run smoothly",
          icon: PlayCircle,
          content: "Invoices sent automatically, expenses categorized instantly, reports generated with one click"
        }
      ]
    }

    return steps[serviceId as keyof typeof steps] || [
      {
        title: "Current Process",
        description: "Your existing workflow",
        icon: Clock,
        content: "Time-consuming manual processes that slow down your business"
      },
      {
        title: "Implementation",
        description: "We customize your solution",
        icon: FileText,
        content: "Custom automation designed specifically for your business needs"
      },
      {
        title: "Transformation",
        description: "Your new efficient workflow",
        icon: PlayCircle,
        content: "Streamlined processes that save time and reduce errors"
      }
    ]
  }

  const demoSteps = getServiceSpecificSteps(id as string)

  return (
    <>
      <Head>
        <title>{service.title} - EchoFlow Labs</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/#services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
              
              <div className="grid gap-12">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${service.color.replace("text-", "bg-")}/10`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
                  </div>
                  <p className="text-xl text-muted-foreground">{service.description}</p>
                </motion.div>

                <Tabs defaultValue="demo" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="demo">How It Works</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="demo" className="mt-6">
                    <div className="grid gap-8">
                      {demoSteps.map((step, index) => {
                        const StepIcon = step.icon
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                          >
                            <Card>
                              <CardHeader>
                                <div className="flex items-center gap-4">
                                  <div className={`p-2 rounded-lg ${service.color.replace("text-", "bg-")}/10`}>
                                    <StepIcon className={`h-6 w-6 ${service.color}`} />
                                  </div>
                                  <div>
                                    <CardTitle>{step.title}</CardTitle>
                                    <CardDescription>{step.description}</CardDescription>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                  {step.content}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )
                      })}
                    </div>
                  </TabsContent>

                  <TabsContent value="benefits" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Benefits</CardTitle>
                        <CardDescription>
                          See how {service.title.toLowerCase()} can transform your business
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {service.useCases.map((useCase, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                              <span>{useCase}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="examples" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Real-World Examples</CardTitle>
                        <CardDescription>
                          See how other businesses use our {service.title.toLowerCase()} solutions
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {service.examples.map((example, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                              <span>{example}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
                        <p className="text-muted-foreground">
                          Let&apos;s discuss how {service.title.toLowerCase()} can save you time and money
                        </p>
                        <div className="flex justify-center gap-4">
                          <Button size="lg" className="gap-2" asChild>
                            <Link href="/get-started">
                              Get Started <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Schedule a Demo</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
