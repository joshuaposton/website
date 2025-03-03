
import { CheckCircle2, AlertTriangle, TrendingDown, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Confused about where to start with AI?",
      description: "Most businesses waste 6+ months and thousands of dollars on the wrong AI approach.",
      solution: "We provide a clear, proven roadmap tailored to your business"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "No in-house AI expertise?",
      description: "Hiring AI specialists costs $150,000+ annually, putting it out of reach for most SMBs.",
      solution: "Get enterprise-level AI expertise without the enterprise price tag"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Struggling to automate business processes?",
      description: "Manual processes cost the average SMB 20+ hours per week in lost productivity.",
      solution: "Our clients typically save 15-20 hours per week with AI automation"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Missing out on data-driven decisions?",
      description: "Businesses using AI analytics see 35% better outcomes than those relying on intuition alone.",
      solution: "Turn your existing data into actionable insights that drive growth"
    }
  ];

  return (
    <section id="why-ai" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Don't get left behind</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            AI is No Longer Optional – But <span className="gradient-text">Implementing It</span> Is Complex
          </h2>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">73% of SMBs want to use AI</strong> but don't know where to start. We solve that problem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="card-hover border border-border overflow-hidden group">
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-500"></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <p className="text-lg font-medium group-hover:text-primary/90 transition-colors duration-300 mb-2">{point.title}</p>
                    <p className="text-sm text-muted-foreground mb-3">{point.description}</p>
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{point.solution}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-2">Don't wait until your competitors outpace you with AI</p>
          <p className="text-muted-foreground mb-0">
            Schedule your free AI strategy call today and get a clear roadmap for implementation
          </p>
        </div>
      </div>
    </section>
  );
}
