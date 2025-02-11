
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { BlogSection } from "@/components/sections/BlogSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ResourcesPage() {
  const quickGuides = [
    {
      title: "Workflow Analysis",
      description: "Learn how to analyze and optimize your current business workflows for maximum efficiency",
      slug: "workflow-analysis"
    },
    {
      title: "Integration Planning",
      description: "Comprehensive guide to planning successful business process automation integrations",
      slug: "integration-planning"
    },
    {
      title: "ROI Calculation",
      description: "Calculate and maximize the return on investment for your workflow automation projects",
      slug: "roi-calculation"
    }
  ]

  return (
    <>
      <Head>
        <title>Business Process Automation Resources & Guides | Workflow Automation Expertise</title>
        <meta 
          name="description" 
          content="Explore comprehensive resources about business process automation, workflow automation, and process improvement. Expert guides, best practices, and implementation strategies." 
        />
        <meta 
          name="keywords" 
          content="business process automation, workflow automation, process improvement, automation guides, ROI calculation, integration planning" 
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Business Process Automation Resources
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert guides and resources for workflow automation and process improvement
              </p>
            </div>

            <Tabs defaultValue="articles" className="w-full mb-12">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
                <TabsTrigger value="quickstart">Quick Start Guides</TabsTrigger>
              </TabsList>
              <TabsContent value="articles">
                <BlogSection />
              </TabsContent>
              <TabsContent value="quickstart">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {quickGuides.map((guide, index) => (
                    <Link href={`/resources/quick-start/${guide.slug}`} key={index}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <span className="text-sm font-medium text-primary hover:underline">
                            View Guide →
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  )
}
