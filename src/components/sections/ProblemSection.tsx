
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  const painPoints = [
    "Confused about where to start with AI?",
    "No in-house AI expertise?",
    "Struggling to automate business processes?",
    "Missing out on data-driven decisions?"
  ];

  return (
    <section id="why-ai" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            AI is the Future – But <span className="gradient-text">Implementing It</span> Can Be Overwhelming
          </h2>
          <p className="text-lg text-muted-foreground">
            We help SMBs seamlessly integrate AI into their operations—without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="card-hover border border-border overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-500"></div>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-lg font-medium group-hover:text-primary/90 transition-colors duration-300">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
