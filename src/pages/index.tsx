
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
        <title>Custom Web Development & AI Solutions | Digital Innovation - EchoFlow Labs</title>
        <meta name="description" content="Transform your business with custom web applications, AI solutions, and intelligent automation. Specializing in modern web development, machine learning, and business process optimization for small businesses." />
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
