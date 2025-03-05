
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LoaderIcon } from "lucide-react";

export function BlogHeader() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch("https://hook.us2.make.com/a1mtqpas43mo3wpjo19c4wo2gjyu3tdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        <form onSubmit={handleSubscribe} className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          <p className="text-sm text-muted-foreground w-full md:w-auto">
            Subscribe to our newsletter to get the latest updates
          </p>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-auto"
              disabled={isLoading}
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="min-w-[100px]"
            >
              {isLoading ? (
                <LoaderIcon className="h-4 w-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
