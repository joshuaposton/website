
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function FaqSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        toast({
          title: "Something went wrong",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
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
                Still Have Questions?
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
            </div>
            
            <div>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Have a specific question or ready to explore how AI can help your business? Get in touch with our team.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Input 
                          name="name"
                          placeholder="Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          name="email"
                          placeholder="Email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Input 
                          name="businessName"
                          placeholder="Business Name" 
                          value={formData.businessName}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Textarea 
                          name="message"
                          placeholder="Message" 
                          rows={4} 
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
