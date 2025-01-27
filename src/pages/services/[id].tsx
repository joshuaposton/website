
import { useRouter } from "next/router"
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { services } from "@/components/sections/Services"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ServiceDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const service = services.find(s => s.id === id)

  if (!service) {
    return null
  }

  const Icon = service.icon

  return (
    <>
      <Head>
        <title>{service.title} - EchoFlow Labs</title>
        <meta name="description" content={service.description} />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
              
              <div className="grid gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${service.color.replace('text-', 'bg-')}/10`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
                  </div>
                  <p className="text-xl text-muted-foreground">{service.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Use Cases</CardTitle>
                      <CardDescription>
                        Common scenarios where our {service.title.toLowerCase()} services can help
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Example Solutions</CardTitle>
                      <CardDescription>
                        Real-world examples of our {service.title.toLowerCase()} implementations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {service.examples.map((example, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-semibold">Ready to Automate Your Business?</h3>
                      <p className="text-muted-foreground">
                        Let&apos;s discuss how {service.title.toLowerCase()} can transform your operations
                      </p>
                      <Button size="lg" asChild>
                        <Link href="/get-started">Get Started</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
