
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Getting Started with Business Process Automation",
      description: "Learn the fundamentals of automating your business processes and discover the key benefits of implementation.",
      category: "Fundamentals",
      readTime: "5 min read",
      slug: "getting-started-automation"
    },
    {
      id: 2,
      title: "Automation Best Practices for Small Businesses",
      description: "Essential guidelines and best practices for implementing automation in small business environments.",
      category: "Best Practices",
      readTime: "8 min read",
      slug: "automation-best-practices"
    },
    {
      id: 3,
      title: "Make.com Integration Guide",
      description: "Technical guide on integrating Make.com into your existing business workflows.",
      category: "Technical Guide",
      readTime: "10 min read",
      slug: "make-integration-guide"
    }
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 mx-auto max-w-[2000px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Resources & Guides</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of guides, tutorials, and best practices to help you master business process automation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={`/resources/${article.slug}`} key={article.id}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium text-primary hover:underline">
                  Read More →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
