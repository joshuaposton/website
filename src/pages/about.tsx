
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, CircuitBoard, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - EchoFlow Labs</title>
        <meta name="description" content="Learn about EchoFlow Labs - your trusted partner in business process automation, specializing in Make.com, Excel, Python, and Airtable development." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-6">
                    Empowering Small Businesses Through Automation
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Hi, I&apos;m the founder of EchoFlow Labs. With expertise in Make.com, Excel, Python, and Airtable development, 
                    I&apos;m passionate about helping small businesses streamline their operations through intelligent automation.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="mailto:contact@echoflowlabs.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
                    <p className="text-muted-foreground mb-6">
                      I founded EchoFlow Labs with a clear vision: to make powerful automation solutions accessible to small businesses. 
                      By combining technical expertise with a deep understanding of business needs, I help companies save time, 
                      reduce errors, and focus on what matters most - growing their business.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <CircuitBoard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Custom Solutions</h3>
                          <p className="text-sm text-muted-foreground">Tailored automation workflows for your specific needs</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Code className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Technical Expertise</h3>
                          <p className="text-sm text-muted-foreground">Proficient in Make.com, Excel, Python, and Airtable</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Personal Attention</h3>
                          <p className="text-sm text-muted-foreground">Direct collaboration with every client</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
