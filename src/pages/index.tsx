
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Features } from "@/components/sections/Features"
import { Tools } from "@/components/sections/Tools"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Business Process Automation & Workflow Automation | Process Improvement Solutions - EchoFlow Labs</title>
        <meta name="description" content="Transform your business operations with custom automation solutions. Specializing in Make.com, Excel, Python, and Airtable development for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Services />
          <Features />
          <Tools />
        </main>
        <Footer />
      </div>
    </>
  )
}
