
import { CircuitBoard } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
          <div className="absolute inset-0.5 bg-white rounded-full flex items-center justify-center">
            <CircuitBoard className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 blur-sm rounded-full animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        EchoFlow Labs
      </span>
    </div>
  )
}
