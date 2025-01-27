
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, ArrowRight, Calculator } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { RoiCalculator } from "@/components/calculators/RoiCalculator"

export default function RoiCalculationGuide() {
  return (
    <>
      <Head>
        <title>ROI Calculation Guide | EchoFlow Labs</title>
        <meta 
          name="description" 
          content="Learn how to calculate and maximize the return on investment for your automation projects with our expert guide." 
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

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary">Quick Start Guide</Badge>
                    <span className="text-sm text-muted-foreground">15 min read</span>
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight mb-6">
                    ROI Calculation Guide for Automation Projects
                  </h1>

                  <div className="prose prose-slate max-w-none">
                    <h2 className="text-2xl font-semibold mb-4">Step 1: Calculate Current Costs</h2>
                    <p className="mb-6">
                      Identify and quantify existing expenses:
                      • Labor costs (hours × hourly rate)
                      • Error-related costs (mistakes, rework)
                      • Process delays (opportunity costs)
                      • Manual tool and software costs
                      • Training and oversight expenses
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Step 2: Estimate Automation Investment</h2>
                    <p className="mb-6">
                      Consider all implementation costs:
                      • Initial automation setup fees
                      • Software licensing costs
                      • Integration development time
                      • Staff training requirements
                      • Ongoing maintenance needs
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Step 3: Project Benefits</h2>
                    <p className="mb-6">
                      Calculate expected returns:
                      • Time savings (hours saved × labor rate)
                      • Error reduction (cost of errors × reduction rate)
                      • Increased throughput value
                      • Resource reallocation benefits
                      • Customer satisfaction impact
                    </p>

                    <div className="bg-muted p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-2">ROI Formula</h3>
                      <p className="mb-4">
                        Basic ROI = ((Total Benefits - Total Costs) / Total Costs) × 100
                      </p>
                      <p className="mb-4">
                        Example Calculation:
                        • Current annual costs: $50,000
                        • Automation investment: $20,000
                        • Annual benefits: $40,000
                        • ROI = (($40,000 - $20,000) / $20,000) × 100 = 100%
                      </p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Step 4: Consider Long-term Impact</h2>
                    <p className="mb-6">
                      Factor in ongoing benefits:
                      • Scalability advantages
                      • Competitive edge gains
                      • Employee satisfaction improvement
                      • Business growth potential
                      • Innovation opportunities
                    </p>

                    <div className="bg-muted p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-2">How EchoFlow Labs Can Help</h3>
                      <p>
                        Our ROI experts provide:
                        • Detailed cost-benefit analysis
                        • Custom ROI calculators
                        • Process efficiency metrics
                        • Implementation roadmaps
                        • Ongoing ROI tracking
                      </p>
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="bg-muted/50 rounded-lg p-6 mt-8">
                    <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Automation ROI?</h2>
                    <p className="mb-6 text-muted-foreground">
                      Let our experts help you analyze the potential return on investment for your automation projects. We&apos;ll create a detailed ROI analysis tailored to your business.
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

              <div className="lg:sticky lg:top-24 lg:h-fit">
                <RoiCalculator />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
