
import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow, Database, Code, Sparkles, Cpu, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const floatingIcons = [
    { Icon: Workflow, color: "text-blue-500", delay: 0 },
    { Icon: Database, color: "text-cyan-500", delay: 0.2 },
    { Icon: Code, color: "text-indigo-500", delay: 0.4 },
    { Icon: Sparkles, color: "text-purple-500", delay: 0.6 },
    { Icon: Cpu, color: "text-pink-500", delay: 0.8 },
    { Icon: Globe, color: "text-green-500", delay: 1 }
  ]

  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              y: [50, -50, 50],
              x: Math.sin(index) * 30
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + (index * 20)}%`,
              top: `${20 + (index * 10)}%`
            }}
          >
            <Icon className={`h-8 w-8 ${color} opacity-50`} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="container flex flex-col items-center text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative flex space-x-4 mb-8">
            <Workflow className="h-12 w-12 text-blue-500" />
            <Database className="h-12 w-12 text-cyan-500" />
            <Code className="h-12 w-12 text-indigo-500" />
          </div>
        </div>

        <motion.div 
          className="max-w-[56rem] mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            Innovate. Automate. Dominate.
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            At EchoFlow Labs, we ignite innovation for small businesses through intelligent automation. 
            With our mastery in Make.com, Excel, Python, and Airtable, we design smart solutions that 
            optimize workflows, enhance efficiency, and drive sustainable growth. Experience the power 
            of technology tailored to transform your business!
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-2">
            View Our Services
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
