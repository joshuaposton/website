
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>EchoFlow Labs - Business Process Automation</title>
        <meta name="description" content="Transform your business operations with custom automation solutions. Specializing in Make.com, Excel, Python, and Airtable development for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
      </div>
    </>
  )
}
