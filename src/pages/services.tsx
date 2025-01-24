
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Services } from "@/components/sections/Services"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - EchoFlow Labs</title>
        <meta name="description" content="Explore our range of business automation services including Make.com integration, Excel automation, Python development, and Airtable solutions." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
              <div className="max-w-[800px] mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We provide comprehensive automation solutions tailored to your business needs. From workflow automation to custom integrations, we help you work smarter, not harder.
                </p>
              </div>
            </div>
          </section>
          <Services />
        </main>
      </div>
    </>
  )
}
