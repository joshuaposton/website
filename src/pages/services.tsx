
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { ServiceDetails } from "@/components/sections/ServiceDetails"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Professional Automation Services - EchoFlow Labs</title>
        <meta name="description" content="Explore our range of business automation services including Make.com integration, Excel automation, Python development, and Airtable solutions." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
              <div className="max-w-[800px] mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                  Automation Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Dive deep into our comprehensive suite of automation services. Each solution is carefully crafted to transform your business operations and drive efficiency.
                </p>
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/get-started">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          <ServiceDetails />
        </main>
      </div>
    </>
  )
}
