
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, MessageSquare, Phone, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { sendEmail } from "@/lib/email"
import { useState } from "react"
import { Footer } from "@/components/layout/Footer"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await sendEmail(data)
      form.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact - EchoFlow Labs</title>
        <meta name="description" content="Get in touch with EchoFlow Labs to discuss your digital transformation needs." />
      </Head>
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-[1000px]">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                  Let&apos;s discuss how we can transform your business with custom web development, AI solutions, and automation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Mail className="h-8 w-8 mb-4 mx-auto text-blue-500 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      josh@echoflowlabs.com
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Phone className="h-8 w-8 mb-4 mx-auto text-blue-500 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      (318) 419-5264
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <MessageSquare className="h-8 w-8 mb-4 mx-auto text-blue-500 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold mb-2">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">
                      Book a free consultation
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="w-full max-w-[600px] mx-auto">
                <CardHeader>
                  <h2 className="text-2xl font-semibold text-center">Send a Message</h2>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
