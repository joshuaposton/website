
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
          <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-primary/5 border-primary/20 text-primary">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            <span className="font-medium">Limited Time: Free AI Strategy Sessions Available</span>
          </Badge>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">Boost Revenue by 30%</span> with AI Solutions
          </h1>
          
          <p className="mb-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Unlock the power of AI to cut costs, automate workflows, and drive measurable business growth for your company.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" />
              <span>30-Day ROI</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" />
              <span>No Technical Skills Required</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base font-medium px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10">Claim Your Free AI Strategy Call</span>
              <Zap className="ml-2 h-5 w-5 relative z-10 group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <div className="text-xs text-muted-foreground mt-2 sm:mt-0 sm:ml-2">
              Limited spots available this month
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
