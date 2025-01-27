
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Sparkles, Target } from "lucide-react"
import Link from "next/link"

export const ConsultationSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Tailored Solutions for Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We believe in customized solutions that perfectly match your needs. Our pricing is as flexible as our services,
            designed to scale with your business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Every business is unique. We tailor our solutions to match your specific needs and goals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl">Flexible Pricing</h3>
                <p className="text-muted-foreground">
                  Our pricing adapts to your project scope, ensuring you only pay for what you need.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xl">Free Consultation</h3>
                <p className="text-muted-foreground">
                  Schedule a call to discuss your needs and receive a customized solution proposal.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
                Let&apos;s discuss your automation needs and create a tailored solution that fits your budget and objectives.
              </p>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/get-started">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
