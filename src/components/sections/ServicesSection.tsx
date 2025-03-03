
import { Brain, BarChart3, Cog, Factory, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI-Powered Chatbots & Virtual Assistants",
      description: "Automate customer support and internal queries with intelligent conversational AI."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "AI-Driven Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with predictive analytics and reporting."
    },
    {
      icon: <Cog className="h-10 w-10 text-primary" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation solutions."
    },
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      title: "AI for Operations & Supply Chain",
      description: "Optimize inventory, logistics, and operations with AI-powered forecasting and management."
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "AI-Powered Marketing & Sales",
      description: "Enhance customer acquisition and retention with personalized AI marketing strategies."
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            AI Solutions Designed for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored AI implementations that solve real business challenges and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-2 border-border">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
