
import { Check, Star, TrendingUp, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ValuePropositionSection() {
  const valueProps = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "No AI Expertise Required",
      description: "Our team handles all the technical aspects so you can focus on running your business.",
      benefit: "Save $150,000+ on hiring AI specialists"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Custom AI Solutions",
      description: "Tailored implementations that address your specific business challenges and goals.",
      benefit: "30% more effective than generic AI tools"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Affordable & Scalable",
      description: "Solutions designed to grow with your business, with pricing that works for SMBs.",
      benefit: "ROI typically within 30 days"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proven AI Strategies for SMBs",
      description: "Benefit from our expertise in implementing AI for businesses just like yours.",
      benefit: "Cutting-edge AI implementation"
    }
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Star className="h-3.5 w-3.5" />
            <span>Innovative AI Solutions</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Why Businesses Choose <span className="gradient-text">EchoFlow Labs</span> for AI
          </h2>
          <p className="text-lg text-muted-foreground">
            We make advanced AI technology accessible, practical, and valuable for small and medium businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valueProps.map((prop, index) => (
            <Card key={index} className="border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {prop.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{prop.title}</h3>
                    <p className="text-muted-foreground mb-3">{prop.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                      <Check className="h-3.5 w-3.5" />
                      <span>{prop.benefit}</span>
                    </div>
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
