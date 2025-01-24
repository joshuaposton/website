
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "@/components/layout/Logo"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="relative z-50">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center space-x-6 relative z-50">
          <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </Link>
          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
