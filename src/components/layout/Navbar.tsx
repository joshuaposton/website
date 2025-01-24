
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">EchoFlow Labs</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-foreground/60 hover:text-foreground transition-colors">Services</Link>
          <Link href="#features" className="text-foreground/60 hover:text-foreground transition-colors">Features</Link>
          <Link href="#about" className="text-foreground/60 hover:text-foreground transition-colors">About</Link>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  )
}
