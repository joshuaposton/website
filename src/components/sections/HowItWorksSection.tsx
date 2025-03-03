
import { Card, CardContent } from "@/components/ui/card";

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
            How We Make AI Work for You
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple 3-step process makes implementing AI in your business straightforward and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="card-hover relative overflow-hidden border-2 border-border">
              <div className="absolute -right-4 -top-4 h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{step.number}</span>
              </div>
              <CardContent className="p-6 pt-12">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
