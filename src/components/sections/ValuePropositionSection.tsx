
import { Check } from "lucide-react";

export function ValuePropositionSection() {
  const valueProps = [
    {
      title: "No AI Expertise Required",
      description: "Our team handles all the technical aspects so you can focus on running your business."
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored implementations that address your specific business challenges and goals."
    },
    {
      title: "Affordable & Scalable",
      description: "Solutions designed to grow with your business, with pricing that works for SMBs."
    },
    {
      title: "Proven AI Strategies for SMBs",
      description: "Benefit from our experience implementing AI for businesses just like yours."
    }
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Why SMBs Trust Us for AI Implementation
          </h2>
          <p className="text-lg text-muted-foreground">
            We make advanced AI technology accessible, practical, and valuable for small and medium businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valueProps.map((prop, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
