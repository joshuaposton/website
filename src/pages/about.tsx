
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Code, Users } from "lucide-react"
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
                    Transforming Business Operations Through Automation
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    EchoFlow Labs specializes in empowering small businesses with intelligent automation solutions. Our expertise in Make.com, Excel, Python, and Airtable development enables organizations to streamline operations and achieve sustainable growth.
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
