
import { Card } from "@/components/ui/card";

export function BlogHeader() {
  return (
    <div className="mb-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Our Latest Insights
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
          Discover strategies, tips, and insights about implementing AI solutions 
          for small and medium businesses.
        </p>
      </div>
      
      <Card className="mt-8 p-6 border-none bg-primary/5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter to get the latest updates
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-background border border-border"
            />
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
