
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "@/components/layout/Logo"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
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
