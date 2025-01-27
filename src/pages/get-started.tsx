
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react"

export default function GetStartedPage() {
  return (
    <>
      <Head>
        <title>Get Started - EchoFlow Labs</title>
        <meta name="description" content="Start your automation journey with EchoFlow Labs. Transform your business operations with custom automation solutions." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Start Your Automation Journey</h1>
                <p className="text-xl text-muted-foreground">
                  Transform your business operations in three simple steps
                </p>
              </div>
              
              <div className="grid gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">1. Schedule a Free Consultation</h3>
                        <p className="text-muted-foreground mb-4">
                          Book a call to discuss your business needs and challenges. We&apos;ll explore potential automation opportunities together.
                        </p>
                        <Button variant="outline">Schedule Call</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">2. Receive Custom Solution Plan</h3>
                        <p className="text-muted-foreground mb-4">
                          Get a detailed proposal outlining the automation solutions tailored to your specific needs and goals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">3. Implementation & Training</h3>
                        <p className="text-muted-foreground mb-4">
                          We handle the technical implementation and provide comprehensive training to ensure your team can effectively use the new systems.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
                    <p className="text-muted-foreground">
                      Take the first step towards efficient, automated operations
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Schedule Your Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
