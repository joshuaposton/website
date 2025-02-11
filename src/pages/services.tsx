
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { ServiceDetails } from "@/components/sections/ServiceDetails"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Business Process Optimization & Data Management Services - EchoFlow Labs</title>
        <meta name="description" content="Expert business process optimization, data management, and workflow automation services. Specializing in Excel, Power BI, and custom business solutions." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
              <div className="max-w-[800px] mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                  Business Solutions & Services
                </h1>
                <p className="text-xl text-muted-foreground">
                  From process optimization to custom reporting solutions, we help businesses work smarter and more efficiently. Discover how we can transform your operations.
                </p>
              </div>
            </div>
          </section>
          <ServiceDetails />
        </main>
      </div>
    </>
  )
}
