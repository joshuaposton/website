
import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow, Database, Code } from "lucide-react"

export function Hero() {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container flex flex-col items-center text-center">
        <div className="flex space-x-4 mb-8">
          <Workflow className="h-12 w-12 text-blue-500" />
          <Database className="h-12 w-12 text-cyan-500" />
          <Code className="h-12 w-12 text-indigo-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">Innovate.</span>
          <span className="block text-blue-500">Automate.</span>
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Dominate.</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground mb-8 text-xl">
          Transform your business operations with custom automation solutions. We specialize in Make.com, Excel, Python, and Airtable development for small businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Our Services
          </Button>
        </div>
      </div>
    </div>
  )
}
