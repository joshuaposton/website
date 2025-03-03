
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
    <section id="use-cases" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            How AI Can <span className="gradient-text">Transform</span> Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world examples of how our AI solutions drive measurable results for SMBs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="card-hover border border-border overflow-hidden group">
              <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-primary via-accent to-primary group-hover:w-full transition-all duration-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{useCase.icon}</div>
                    </div>
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{useCase.title}</h3>
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
