
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function WorkflowAnalysisGuide() {
  return (
    <>
      <Head>
        <title>Workflow Analysis Guide | EchoFlow Labs</title>
        <meta 
          name="description" 
          content="Learn how to analyze and optimize your current business workflows with our expert guide." 
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>
            </Link>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary">Quick Start Guide</Badge>
                  <span className="text-sm text-muted-foreground">10 min read</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight mb-6">
                  Workflow Analysis Guide
                </h1>

                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Step 1: Document Current Workflows</h2>
                  <p className="mb-6">
                    Start by mapping out your current business processes. Focus on:
                    • Daily repetitive tasks
                    • Manual data entry processes
                    • Customer service workflows
                    • Internal communication patterns
                    • Document handling procedures
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 2: Identify Pain Points</h2>
                  <p className="mb-6">
                    Look for these common issues:
                    • Time-consuming manual tasks
                    • Frequent errors or mistakes
                    • Communication bottlenecks
                    • Duplicate data entry
                    • Delayed responses or approvals
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 3: Measure Current Performance</h2>
                  <p className="mb-6">
                    Track key metrics:
                    • Time spent on tasks
                    • Error rates
                    • Process completion times
                    • Resource utilization
                    • Customer satisfaction levels
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 4: Prioritize Automation Opportunities</h2>
                  <p className="mb-6">
                    Rate each process based on:
                    • Potential time savings
                    • Error reduction impact
                    • Implementation complexity
                    • Required resources
                    • Expected ROI
                  </p>

                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">How EchoFlow Labs Can Help</h3>
                    <p>
                      Our team of experts can:
                      • Conduct professional workflow analysis
                      • Identify automation opportunities
                      • Create detailed process maps
                      • Recommend optimal solutions
                      • Guide implementation strategy
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold mb-4">Ready for Professional Workflow Analysis?</h2>
                  <p className="mb-6 text-muted-foreground">
                    Let our experts help you analyze and optimize your business workflows. We'll identify the best automation opportunities for your business.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild size="lg">
                      <Link href="/get-started">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}
