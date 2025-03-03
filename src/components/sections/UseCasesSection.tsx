
import { MessageSquare, BarChart, Package, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function UseCasesSection() {
  const useCases = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "24/7 Customer Support",
      description: "AI Chatbots answering customer questions around the clock, improving satisfaction and reducing support costs."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Optimized Pricing Strategy",
      description: "AI-Powered Business Intelligence helping retail stores optimize pricing based on market trends and customer behavior."
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Automated Inventory Management",
      description: "AI automating inventory tracking and reducing stockouts through predictive ordering and real-time monitoring."
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Personalized Marketing",
      description: "AI-powered email marketing improving engagement rates through personalized content and optimal send times."
    }
  ];

  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            How AI Can Transform Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how our AI solutions drive measurable results for SMBs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="card-hover border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
