
import Link from "next/link"
import { Logo } from "@/components/layout/Logo"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-foreground/60 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/resources" className="text-foreground/60 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
