
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Basic Automation",
    price: "Starting at $999",
    description: "Perfect for small businesses looking to start with automation",
    features: [
      "Single workflow automation",
      "Basic integration setup",
      "Standard support",
      "Documentation included",
      "1 month of maintenance"
    ]
  },
  {
    name: "Business Suite",
    price: "Starting at $2,499",
    description: "Ideal for growing businesses needing comprehensive automation",
    features: [
      "Multiple workflow automation",
      "Advanced integrations",
      "Priority support",
      "Custom documentation",
      "3 months of maintenance",
      "Training sessions included"
    ]
  },
  {
    name: "Enterprise Custom",
    price: "Custom pricing",
    description: "Full-scale automation solutions for enterprise needs",
    features: [
      "Unlimited workflow automation",
      "Enterprise integrations",
      "24/7 priority support",
      "Comprehensive documentation",
      "12 months of maintenance",
      "Team training program",
      "Dedicated support manager"
    ]
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Flexible Pricing Options</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Choose the perfect package for your business needs. All plans include custom solution design and implementation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription className="text-lg font-semibold mt-2">{tier.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
