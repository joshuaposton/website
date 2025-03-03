
import { Button } from "@/components/ui/button";
import { Clock, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CtaSection() {
  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <Clock className="h-3.5 w-3.5" />
                <span>Limited time offer</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Ready to See <span className="gradient-text">Measurable Results</span> with AI?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                Our clients typically see ROI within the first 30 days. Schedule your free strategy call now before spots fill up.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">30-minute strategy call</p>
                    <p className="text-sm text-muted-foreground">No obligation, no pressure</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Custom AI roadmap</p>
                    <p className="text-sm text-muted-foreground">Tailored to your business</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="text-base font-medium px-8 py-6 rounded-full group relative overflow-hidden">
                <span className="relative z-10">Schedule Your Free AI Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
            
            <div className="md:col-span-2">
              <Card className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">What You'll Get</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">Custom AI opportunity assessment for your business</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">ROI calculation for AI implementation</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">Step-by-step AI implementation roadmap</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-sm">Actionable next steps you can implement immediately</p>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-1">Value: $500 • Your Price: $0</p>
                    <p className="text-xs text-muted-foreground">Limited spots available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
