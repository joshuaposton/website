
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find out how AI can automate your processes, cut costs, and drive growth.
          </p>
          <Button size="lg" className="text-base font-medium px-8 py-6">
            Schedule Your Free AI Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
