
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">AI</span>
            </div>
            <span className="text-lg font-semibold">AImplement</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#why-ai" className="text-sm font-medium hover:text-primary transition-colors">
            Why AI?
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#use-cases" className="text-sm font-medium hover:text-primary transition-colors">
            Use Cases
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
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
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline">Contact Us</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
