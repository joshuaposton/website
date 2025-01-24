
import { CircuitBoard } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
      <div className="relative">
        <CircuitBoard className="h-8 w-8 text-blue-500" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 blur-sm rounded-full animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        EchoFlow Labs
      </span>
    </div>
  )
}
