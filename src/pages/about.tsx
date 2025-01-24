
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { TeamSection } from "@/components/sections/TeamSection"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - EchoFlow Labs</title>
        <meta name="description" content="Meet the team behind EchoFlow Labs. We're experts in business process automation, specializing in Make.com, Excel, Python, and Airtable development." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
              <div className="max-w-[800px] mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6">
                  Empowering Businesses Through Automation
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  At EchoFlow Labs, we're passionate about helping small businesses thrive through intelligent automation. 
                  Our team combines technical expertise with business acumen to deliver solutions that drive real results.
                </p>
              </div>
            </div>
          </section>
          <TeamSection />
        </main>
      </div>
    </>
  )
}
