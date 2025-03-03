
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Free AI Readiness Assessment",
      description: "We analyze your business needs and identify opportunities for AI implementation."
    },
    {
      number: "02",
      title: "Customized AI Implementation Plan",
      description: "We design AI-powered workflows, chatbots, automation, and analytics tailored to your business."
    },
    {
      number: "03",
      title: "Seamless Integration & Support",
      description: "We handle the setup, training, and ongoing optimization to ensure your AI solutions deliver results."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            How We Make AI <span className="gradient-text">Work for You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple 3-step process makes implementing AI in your business straightforward and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="card-hover relative overflow-hidden border border-border group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 group-hover:h-1.5 transition-all duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
