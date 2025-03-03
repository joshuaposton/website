
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Echo</span>
              <span className="text-accent">Flow</span> Labs
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-ai" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Why AI?
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#use-cases" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Use Cases
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="rounded-full px-4 hover:border-primary hover:text-primary transition-all duration-300">
            Contact Us
          </Button>
          <Button size="sm" className="rounded-full px-4 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
            Get Started
          </Button>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-accent/20">
            <div className="flex items-center gap-2 mb-8 mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-primary">Echo</span>
                <span className="text-accent">Flow</span> Labs
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <a 
                href="#why-ai" 
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Why AI?
              </a>
              <a 
                href="#how-it-works" 
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#services" 
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#use-cases" 
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Use Cases
              </a>
              <a 
                href="#faq" 
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col gap-3 mt-6">
                <Button variant="outline" className="w-full rounded-full">Contact Us</Button>
                <Button className="w-full rounded-full shadow-md shadow-primary/20">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
