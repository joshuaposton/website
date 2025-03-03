
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Clock, Calendar, ArrowRight, Shield, Star } from "lucide-react";

export function FaqSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: ""
  });
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorDetails(null);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          businessName: "",
          message: ""
        });
      } else {
        // Store detailed error if available
        if (data.error) {
          setErrorDetails(data.error);
        }
        
        toast({
          title: "Something went wrong",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What size businesses do you work with?",
      answer: "We specialize in AI solutions for small and medium-sized businesses across various industries. Our solutions are scalable and can be tailored to businesses with 5 to 500 employees."
    },
    {
      question: "How much does AI implementation cost?",
      answer: "The cost varies based on your specific needs and the complexity of the implementation. We offer flexible pricing models designed to be accessible for SMBs, with options starting from basic implementations to comprehensive AI transformations."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary based on the scope and complexity of your project. Simple chatbot or automation solutions can be implemented in 2-4 weeks, while more comprehensive AI transformations may take 2-3 months."
    },
    {
      question: "Do I need technical expertise to use your AI solutions?",
      answer: "No, our solutions are designed to be user-friendly and accessible to non-technical users. We provide comprehensive training and ongoing support to ensure your team can effectively use and benefit from the AI tools we implement."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We prioritize data security and comply with all relevant regulations including GDPR and CCPA. All implementations include robust security measures, data encryption, and privacy controls to protect your business and customer information."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Common Questions About <span className="gradient-text">AI Implementation</span>
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-primary mt-1">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Still have questions?</p>
                    <p className="text-sm text-muted-foreground">
                      Schedule a free 30-minute consultation with our AI experts to get answers to your specific questions.
                    </p>
                    <Button variant="link" className="px-0 text-primary flex items-center gap-1 mt-1 group">
                      <span>Book a call</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-2 border-primary/20 overflow-hidden">
                <CardHeader className="bg-primary/10 p-6 border-b border-primary/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Get Started Today</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Response within 24hrs</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Request your free AI strategy session</p>
                      <p className="text-sm text-muted-foreground">
                        Or ask us a specific question about your business needs
                      </p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Input 
                          name="name"
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Input 
                          name="email"
                          placeholder="Work Email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Input 
                          name="businessName"
                          placeholder="Company Name" 
                          value={formData.businessName}
                          onChange={handleChange}
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Textarea 
                          name="message"
                          placeholder="How can we help your business with AI?" 
                          rows={3} 
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full py-6 text-base font-medium rounded-full group relative overflow-hidden"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10">{isSubmitting ? "Sending..." : "Request Free Consultation"}</span>
                        <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Your information is secure and will never be shared</span>
                      </div>
                      
                      <div className="flex items-center justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs ml-1 text-muted-foreground">Rated 4.9/5 by our clients</span>
                      </div>
                    </div>
                  </form>
                  
                  {errorDetails && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">
                      <p className="font-medium">Technical error details:</p>
                      <p className="mt-1">{errorDetails}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
