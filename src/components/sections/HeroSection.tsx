
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">AI-Powered Growth</span> for Your Business
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Unlock efficiency, automate workflows, and gain insights with AI solutions tailored for small and medium businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base font-medium px-8 py-6">
              Get a Free AI Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-medium px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -top-48 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl"></div>
    </section>
  );
}
