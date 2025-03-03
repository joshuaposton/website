
import { Brain, BarChart3, Cog, Factory, ShoppingBag, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "AI-Powered Chatbots & Virtual Assistants",
      description: "Automate customer support and internal queries with intelligent conversational AI."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "AI-Driven Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with predictive analytics and reporting."
    },
    {
      icon: <Cog className="h-12 w-12 text-primary" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation solutions."
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "AI for Operations & Supply Chain",
      description: "Optimize inventory, logistics, and operations with AI-powered forecasting and management."
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      title: "AI-Powered Marketing & Sales",
      description: "Enhance customer acquisition and retention with personalized AI marketing strategies."
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            AI Solutions <span className="gradient-text">Designed</span> for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored AI implementations that solve real business challenges and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-2 border-border bg-card/50 backdrop-blur-sm glow-effect overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-start gap-4 h-full">
                <div className="mb-2 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="p-0 h-auto text-primary font-medium group-hover:underline">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
