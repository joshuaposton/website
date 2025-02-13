
import { Button } from "@/components/ui/button"
import { Code, Brain, Workflow, Database, Cloud, Bot } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const floatingIcons = [
    { Icon: Code, color: "text-blue-500", delay: 0 },
    { Icon: Brain, color: "text-purple-500", delay: 0.2 },
    { Icon: Workflow, color: "text-green-500", delay: 0.4 },
    { Icon: Database, color: "text-amber-500", delay: 0.6 },
    { Icon: Cloud, color: "text-sky-500", delay: 0.8 },
    { Icon: Bot, color: "text-rose-500", delay: 1 }
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
            <Code className="h-12 w-12 text-blue-500" />
            <Brain className="h-12 w-12 text-purple-500" />
            <Bot className="h-12 w-12 text-rose-500" />
          </div>
        </div>

        <motion.div 
          className="max-w-[56rem] mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            Transform Your Business Through<br />Digital Innovation
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Empower your business with custom web applications, AI-driven solutions, and intelligent automation. 
            We help small businesses leverage cutting-edge technology to streamline operations, enhance efficiency, 
            and drive growth. From web development to machine learning - we handle the technical complexity while 
            you focus on success.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
