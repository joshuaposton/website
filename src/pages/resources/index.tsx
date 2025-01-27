
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { BlogSection } from "@/components/sections/BlogSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  const quickGuides = [
    {
      title: "Workflow Analysis",
      description: "Learn how to analyze and optimize your current business workflows"
    },
    {
      title: "Integration Planning",
      description: "Step-by-step guide to planning successful automation integrations"
    },
    {
      title: "ROI Calculation",
      description: "Calculate the return on investment for your automation projects"
    }
  ]

  return (
    <>
      <Head>
        <title>Resources & Guides | EchoFlow Labs</title>
        <meta 
          name="description" 
          content="Explore our comprehensive guides and resources about business process automation, technical implementations, and best practices." 
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Automation Resources Hub
              </h1>
              <p className="text-xl text-muted-foreground">
                Your gateway to mastering business process automation
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
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{guide.title}</CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          View Guide →
                        </span>
                      </CardContent>
                    </Card>
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
