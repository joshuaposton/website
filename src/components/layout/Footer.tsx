
import { Logo } from "@/components/layout/Logo"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "Time-Saving Solutions", href: "/services#time-saving-automation" },
      { name: "Business Organization", href: "/services#business-organization" },
      { name: "Financial Management", href: "/services#financial-automation" },
      { name: "Custom Business Solutions", href: "/services#custom-solutions" },
      { name: "Smart Workflows", href: "/services#workflow-automation" },
      { name: "Team Productivity", href: "/services#team-collaboration" }
    ],
    Resources: [
      { name: "Quick Start Guides", href: "/resources/quick-start" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Documentation", href: "/resources/docs" },
      { name: "Blog", href: "/resources/blog" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  }

  return (
    <footer className="border-t bg-slate-50/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 EchoFlow Labs. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
