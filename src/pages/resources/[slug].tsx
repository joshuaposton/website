
import Head from "next/head"
import { useRouter } from "next/router"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

const articles = {
  "getting-started-automation": {
    title: "Getting Started with Business Process Automation",
    category: "Fundamentals",
    readTime: "5 min read",
    content: `
      Business process automation (BPA) is revolutionizing how organizations operate in the digital age. At EchoFlow Labs, we've helped numerous businesses transform their operations through strategic automation. Let's explore how you can begin this journey.

      What is Business Process Automation?
      At its core, BPA is the use of technology to execute recurring tasks or processes in a business where manual effort can be replaced. Think of it as creating a digital assembly line for your business processes.

      Real-World Example:
      Here's how we helped one of our clients transform their sales process:
      • Before: Sales team spent 2 hours daily copying data from emails to CRM
      • Our Solution: Implemented automated workflow capturing email data
      • Result: 10 hours saved weekly, 40 hours monthly, zero data entry errors

      Identifying Automation Opportunities:
      Look for processes that are:
      1. Repetitive and time-consuming
      2. Rule-based with clear if/then scenarios
      3. High-volume with consistent patterns
      4. Prone to human error
      5. Data-heavy with multiple system interactions

      How EchoFlow Labs Can Help:
      While this guide provides a foundation for automation, implementing these solutions requires expertise and experience. Our team specializes in:

      • Custom Workflow Design: We analyze your specific needs and design tailored automation solutions
      • Expert Implementation: Our technical team handles the entire setup and integration process
      • Training & Support: We ensure your team is confident in using the new automated systems
      • Ongoing Optimization: We continuously monitor and improve your automation workflows

      Ready to Transform Your Business?
      Let us help you implement these automation strategies in your organization. Our team of experts will guide you through each step of the process, ensuring a smooth transition to automated workflows.
    `,
    ctaTitle: "Ready to Start Your Automation Journey?",
    ctaDescription: "Book a free consultation with our automation experts to discuss your specific needs and how we can help transform your business processes."
  },
  "automation-best-practices": {
    title: "Automation Best Practices for Small Businesses",
    category: "Best Practices",
    readTime: "8 min read",
    content: `
      Implementing automation successfully requires more than just tools - it requires strategy and expertise. At EchoFlow Labs, we've developed these best practices through years of helping businesses automate their operations.

      Strategic Planning:
      • Start with clear objectives
      • Document current processes
      • Identify automation priorities
      • Set measurable goals
      • Plan for scalability

      Implementation Best Practices:
      1. Start Small
         • Choose one simple process
         • Document current workflow
         • Map out automation steps
         • Test with real data
         • Monitor and adjust

      2. Focus on Impact
         • Target high-volume tasks
         • Address error-prone processes
         • Look for quick wins
         • Measure ROI constantly

      Common Pitfalls to Avoid:
      • Automating broken processes
      • Neglecting employee training
      • Ignoring process documentation
      • Skipping testing phases
      • Failing to measure results

      Partner with Experts:
      While these best practices provide a framework, successful implementation often requires expert guidance. At EchoFlow Labs, we:

      • Handle the Technical Complexity: Our team manages the intricate details of automation setup
      • Ensure Best Practice Implementation: We apply industry standards and proven methodologies
      • Provide Ongoing Support: We're here to help you evolve and optimize your automation
      • Guarantee Results: Our solutions are backed by measurable improvements in efficiency
    `,
    ctaTitle: "Want to Implement These Best Practices?",
    ctaDescription: "Let our experts help you apply these best practices in your business. Schedule a consultation to discuss your automation goals."
  },
  "make-integration-guide": {
    title: "Make.com Integration Guide",
    category: "Technical Guide",
    readTime: "10 min read",
    content: `
      What is Make.com?
      Make.com (formerly Integromat) is a powerful automation platform that connects apps and services you use daily. Think of it as a digital Swiss Army knife that can connect your email, CRM, spreadsheets, and other tools to work together automatically. At EchoFlow Labs, we're certified Make.com experts who help businesses harness this powerful platform.

      Why Choose Make.com?
      • Visual Workflow Builder: Create complex automations without coding
      • 1000+ App Integrations: Connect virtually any business tool
      • Real-time Processing: Handle tasks as they happen
      • Advanced Features: Error handling, data mapping, and scheduling
      • Cost-effective: Pay only for what you use

      Real Business Applications:
      1. Customer Onboarding
         • Automatically create accounts
         • Send welcome emails
         • Schedule follow-ups
         • Track engagement

      2. Sales Process
         • Lead capture from multiple sources
         • Automatic CRM updates
         • Sales team notifications
         • Contract generation

      3. Data Management
         • Sync across platforms
         • Automatic backups
         • Data transformation
         • Error reporting

      How We Help With Make.com:
      At EchoFlow Labs, we specialize in:

      • Professional Integration Services: We handle the technical setup and configuration
      • Custom Workflow Development: We build automated processes tailored to your needs
      • Training & Documentation: We ensure your team can manage the workflows
      • Ongoing Support: We provide maintenance and optimization services

      Getting Started with Make.com Through EchoFlow Labs:
      1. Initial Consultation: We assess your needs and identify automation opportunities
      2. Solution Design: We create custom workflows for your specific processes
      3. Implementation: We handle the technical setup and testing
      4. Training: We ensure your team knows how to manage the system
      5. Ongoing Support: We're here to help as your needs evolve
    `,
    ctaTitle: "Need Help with Make.com Integration?",
    ctaDescription: "Our Make.com certified experts can help you implement and optimize your automation workflows. Book a consultation to get started."
  }
}

export default function ResourcePage() {
  const router = useRouter()
  const { slug } = router.query
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return null
  }

  return (
    <>
      <Head>
        <title>{article.title} | EchoFlow Labs</title>
        <meta name="description" content={article.content.substring(0, 160)} />
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
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h1 className="text-3xl font-bold tracking-tight mb-6">
                  {article.title}
                </h1>

                <Alert className="mb-8">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    This guide includes practical examples and step-by-step instructions to help you implement automation in your business.
                  </AlertDescription>
                </Alert>

                <div className="prose prose-slate max-w-none">
                  {article.content.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph.trim() && (
                        <span className={`${paragraph.startsWith("•") ? "block pl-4" : ""}`}>
                          {paragraph}
                        </span>
                      )}
                    </p>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <h2 className="text-2xl font-bold mb-4">{article.ctaTitle}</h2>
                  <p className="mb-6 text-muted-foreground">{article.ctaDescription}</p>
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
