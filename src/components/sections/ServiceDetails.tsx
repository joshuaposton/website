
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { services } from "./Services"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const serviceBenefits = {
  "make-automation": [
    "Seamless App Integration",
    "Real-time Data Flow",
    "Process Optimization",
    "Reduced Manual Work",
    "Scalable Workflows",
    "Error Prevention"
  ],
  "airtable-development": [
    "Centralized Data Management",
    "Custom Workflows",
    "Team Collaboration",
    "Visual Analytics",
    "Process Automation",
    "Data Security"
  ],
  "excel-automation": [
    "Time Savings",
    "Error Reduction",
    "Data Accuracy",
    "Process Standardization",
    "Enhanced Reporting",
    "Resource Optimization"
  ],
  "custom-automation": [
    "Custom Automation",
    "Data Processing Power",
    "Scalable Solutions",
    "Integration Capability",
    "Performance Optimization",
    "Advanced Analytics"
  ],
  "process-automation": [
    "Workflow Optimization",
    "Resource Efficiency",
    "Quality Improvement",
    "Cost Reduction",
    "Compliance Management",
    "Enhanced Productivity"
  ],
  "integration-services": [
    "System Unification",
    "Data Consistency",
    "Process Streamlining",
    "Real-time Updates",
    "Enhanced Efficiency",
    "Scalable Architecture"
  ]
}

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const benefits = serviceBenefits[service.id as keyof typeof serviceBenefits]
            
            return (
              <Card key={index} className="border-2">
                <CardHeader className="border-b bg-slate-50/50">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className={`h-12 w-12 ${service.color}`} />
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="use-cases" className="w-full">
                    <TabsList className="w-full justify-start mb-4">
                      <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                      <TabsTrigger value="examples">Implementation Examples</TabsTrigger>
                      <TabsTrigger value="benefits">Key Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="use-cases">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="examples">
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.examples.map((example, i) => (
                          <Card key={i} className="bg-slate-50/50">
                            <CardContent className="pt-6">
                              <div className="flex items-start gap-2">
                                <ArrowRight className={`h-5 w-5 ${service.color} mt-0.5 flex-shrink-0`} />
                                <span>{example}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="benefits">
                      <div className="grid sm:grid-cols-3 gap-4">
                        {benefits?.map((benefit, i) => (
                          <Badge key={i} variant="outline" className="justify-center py-2">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
