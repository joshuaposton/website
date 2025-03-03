
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
      <div className="absolute -top-48 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/80 animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/80 animate-ping" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Transforming businesses with AI</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">AI-Powered Growth</span> for Your Business
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Unlock efficiency, automate workflows, and gain insights with AI solutions tailored for small and medium businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base font-medium px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
              <span>Get a Free AI Strategy Call</span>
              <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-medium px-8 py-6 rounded-full group hover:border-primary/50 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center">
              <div className="h-8 w-px bg-border"></div>
              <div className="ml-8 flex items-center gap-6">
                <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=40&q=80" alt="Client logo" className="h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=40&q=80" alt="Client logo" className="h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=40&q=80" alt="Client logo" className="h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
              </div>
              <div className="ml-8 h-8 w-px bg-border"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
