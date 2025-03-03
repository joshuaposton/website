
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  const painPoints = [
    "Confused about where to start with AI?",
    "No in-house AI expertise?",
    "Struggling to automate business processes?",
    "Missing out on data-driven decisions?"
  ];

  return (
    <section id="why-ai" className="section-padding bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            AI is the Future – But Implementing It Can Be Overwhelming
          </h2>
          <p className="text-lg text-muted-foreground">
            We help SMBs seamlessly integrate AI into their operations—without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="card-hover border-2 border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg font-medium">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
