
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - EchoFlow Labs</title>
        <meta name="description" content="Get in touch with EchoFlow Labs to discuss your business automation needs." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                  Let&apos;s discuss how we can automate and streamline your business processes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Mail className="h-8 w-8 mb-4 mx-auto text-blue-500" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      josh@echoflowlabs.com
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Phone className="h-8 w-8 mb-4 mx-auto text-blue-500" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      (318) 419-5264
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <MessageSquare className="h-8 w-8 mb-4 mx-auto text-blue-500" />
                    <h3 className="font-semibold mb-2">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">
                      Book a free consultation
                    </p>
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
