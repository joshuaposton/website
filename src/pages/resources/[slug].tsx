
import Head from "next/head"
import { useRouter } from "next/router"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"

const articles = {
  "getting-started-automation": {
    title: "Getting Started with Business Process Automation",
    category: "Fundamentals",
    readTime: "5 min read",
    content: `
      Business process automation (BPA) is revolutionizing how organizations operate in the digital age. In this comprehensive guide, we'll explore the fundamental concepts and provide practical steps to begin your automation journey.

      What is Business Process Automation?
      At its core, BPA is the use of technology to execute recurring tasks or processes in a business where manual effort can be replaced. Think of it as creating a digital assembly line for your business processes.

      Real-World Example:
      Consider a sales team that manually enters customer data from emails into a CRM system. Here's how automation transforms this process:
      • Before: Sales team spends 2 hours daily copying data from emails to CRM
      • After: Automated workflow captures email data and updates CRM instantly
      • Result: 10 hours saved weekly, 40 hours monthly, zero data entry errors

      Identifying Automation Opportunities:
      Look for processes that are:
      1. Repetitive and time-consuming
      2. Rule-based with clear if/then scenarios
      3. High-volume with consistent patterns
      4. Prone to human error
      5. Data-heavy with multiple system interactions

      Example Assessment:
      Process: Invoice Processing
      • Manual Steps: 15
      • Time Per Invoice: 20 minutes
      • Error Rate: 5%
      • Automation Potential: High
      • Expected Time Savings: 85%

      Choosing the Right Tools:
      Different processes require different automation tools:
      1. Data Entry & Form Processing
         • Make.com for workflow automation
         • Zapier for simple integrations
         • UiPath for desktop automation

      2. Document Management
         • SharePoint for document workflows
         • DocuSign for signature automation
         • Adobe Sign for contract management

      3. Customer Communication
         • Intercom for chat automation
         • Mailchimp for email sequences
         • Zendesk for ticket management

      Implementation Strategy:
      1. Start Small
         • Choose one simple process
         • Document current workflow
         • Map out automation steps
         • Test with real data
         • Monitor and adjust

      2. Scale Gradually
         • Analyze results
         • Document learnings
         • Train team members
         • Expand to related processes

      Measuring Success:
      Track these key metrics:
      • Time saved per process
      • Error reduction rate
      • Cost savings
      • Employee satisfaction
      • Customer satisfaction improvement

      Common Pitfalls to Avoid:
      • Automating broken processes
      • Neglecting employee training
      • Ignoring process documentation
      • Skipping testing phases
      • Failing to measure results

      Next Steps:
      1. Audit your current processes
      2. Identify top 3 automation candidates
      3. Document process flows
      4. Research appropriate tools
      5. Create implementation timeline
    `
  },
  "automation-best-practices": {
    title: "Automation Best Practices for Small Businesses",
    category: "Best Practices",
    readTime: "8 min read",
    content: `
      Implementing automation in small businesses requires strategic thinking and careful execution. This guide provides proven best practices based on real-world implementations.

      1. Start Small and Scale Gradually
      Practical Example:
      A retail store began by automating their inventory alerts:
      • Week 1-2: Set up automated low stock notifications
      • Week 3-4: Added automated reorder triggers
      • Week 5-6: Integrated with supplier systems
      • Week 7-8: Added sales forecasting
      Result: 60% reduction in stockouts, 25% decrease in inventory costs

      2. Document Everything
      Essential Documentation Checklist:
      • Process flowcharts
      • System dependencies
      • Integration points
      • Error handling procedures
      • Recovery protocols
      • Training materials

      3. Train Your Team
      Effective Training Approach:
      • Initial Assessment
        - Skill gap analysis
        - Learning style evaluation
        - Tool familiarity check
      
      • Training Program
        - Hands-on workshops
        - Video tutorials
        - Practice environments
        - Regular feedback sessions

      4. Monitor and Optimize
      Key Performance Indicators:
      • Process Efficiency
        - Completion time
        - Error rates
        - Resource usage
      
      • Business Impact
        - Cost savings
        - Revenue impact
        - Customer satisfaction
        - Employee productivity

      5. Maintain Security
      Security Checklist:
      • Access Control
        - Role-based permissions
        - Regular access audits
        - Strong password policies
      
      • Data Protection
        - Encryption standards
        - Backup procedures
        - Compliance requirements

      Real-World Implementation Example:
      Small Marketing Agency Case Study:
      Before Automation:
      • 20 hours weekly on report generation
      • 15% error rate in data collection
      • 3-day delay in client reporting

      After Automation:
      • 2 hours weekly on report oversight
      • <1% error rate
      • Real-time client dashboards
      • 40% increase in client satisfaction

      Implementation Timeline:
      Week 1: Process Analysis
      • Documented current workflows
      • Identified bottlenecks
      • Set success metrics

      Week 2-3: Tool Selection
      • Evaluated options
      • Tested integrations
      • Selected final tools

      Week 4-6: Implementation
      • Built automated workflows
      • Tested with sample data
      • Trained team members

      Week 7-8: Optimization
      • Monitored performance
      • Gathered feedback
      • Made adjustments

      Results After 3 Months:
      • 85% time savings
      • 95% accuracy rate
      • 30% cost reduction
      • Positive team feedback
    `
  },
  "make-integration-guide": {
    title: "Make.com Integration Guide",
    category: "Technical Guide",
    readTime: "10 min read",
    content: `
      Make.com (formerly Integromat) is a powerful automation platform that can transform your business processes. This technical guide will walk you through creating robust automation workflows.

      Getting Started with Make.com:
      1. Account Setup
         • Sign up at Make.com
         • Choose your plan based on needs
         • Set up team access if needed
         • Configure basic settings

      Understanding Key Concepts:
      • Scenarios: Your automation workflows
      • Modules: Individual action steps
      • Routes: Conditional paths
      • Functions: Data transformation tools
      • Webhooks: External triggers

      Building Your First Scenario:
      Step-by-Step Example:
      Let's automate lead capture from a form to your CRM:

      1. Trigger Setup
         • Choose "Webhooks" module
         • Configure custom webhook
         • Test with sample data

      2. Data Processing
         • Add "Tools" module
         • Set up data transformation
         • Validate output format

      3. CRM Integration
         • Add CRM module
         • Map incoming data
         • Set error handling

      Advanced Features:
      1. Error Handling
         • Retry mechanisms
         • Error notifications
         • Fallback routes

      2. Data Mapping
         • Array mapping
         • Aggregation
         • Filtering

      3. Scheduling
         • Time-based triggers
         • Recurring schedules
         • Queue management

      Real Implementation Example:
      Automated Customer Onboarding:
      
      Workflow Steps:
      1. Form Submission
         • Capture customer data
         • Validate inputs
         • Send confirmation

      2. Account Creation
         • Generate credentials
         • Set up user profile
         • Configure preferences

      3. Welcome Sequence
         • Send welcome email
         • Schedule onboarding call
         • Provide resources

      4. Follow-up
         • Monitor engagement
         • Send reminder if needed
         • Collect feedback

      Performance Optimization:
      • Use batch operations
      • Implement caching
      • Optimize data transfers
      • Monitor execution times

      Troubleshooting Guide:
      Common Issues:
      1. Connection Timeouts
         • Check API limits
         • Verify credentials
         • Test endpoint status

      2. Data Mapping Errors
         • Validate data types
         • Check required fields
         • Test transformations

      3. Execution Failures
         • Review error logs
         • Check dependencies
         • Verify permissions

      Best Practices:
      • Use test scenarios
      • Document all workflows
      • Monitor usage limits
      • Regular maintenance
      • Backup configurations
    `
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
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}
