
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function IntegrationPlanningGuide() {
  return (
    <>
      <Head>
        <title>Integration Planning Guide | EchoFlow Labs</title>
        <meta 
          name="description" 
          content="Learn how to plan and execute successful automation integrations with our expert guide." 
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
                  <span className="text-sm text-muted-foreground">12 min read</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight mb-6">
                  Integration Planning Guide
                </h1>

                <div className="prose prose-slate max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Step 1: Define Integration Goals</h2>
                  <p className="mb-6">
                    Begin with clear objectives:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Specific processes to automate</li>
                      <li>Desired outcomes and metrics</li>
                      <li>Timeline expectations</li>
                      <li>Budget constraints</li>
                      <li>Resource availability</li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 2: System Assessment</h2>
                  <p className="mb-6">
                    Evaluate your current systems:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Identify all systems involved</li>
                      <li>Document API capabilities</li>
                      <li>Check data formats</li>
                      <li>Review security requirements</li>
                      <li>Assess integration points</li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 3: Data Mapping</h2>
                  <p className="mb-6">
                    Create your data strategy:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Map data fields between systems</li>
                      <li>Define transformation rules</li>
                      <li>Plan error handling</li>
                      <li>Set up validation rules</li>
                      <li>Document data flow</li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4">Step 4: Testing Strategy</h2>
                  <p className="mb-6">
                    Plan your testing approach:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Create test scenarios</li>
                      <li>Set up test environments</li>
                      <li>Define success criteria</li>
                      <li>Plan rollback procedures</li>
                      <li>Schedule testing phases</li>
                    </ul>
                  </p>

                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">How EchoFlow Labs Can Help</h3>
                    <p>
                      Our integration experts provide:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Complete integration planning</li>
                        <li>System compatibility analysis</li>
                        <li>Custom integration development</li>
                        <li>Testing and validation</li>
                        <li>Implementation support</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold mb-4">Need Expert Integration Planning?</h2>
                  <p className="mb-6 text-muted-foreground">
                    Our team can help you plan and implement seamless integrations between your business systems. Let&apos;s create your integration roadmap together.
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
