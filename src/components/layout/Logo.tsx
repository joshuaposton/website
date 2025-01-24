
import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
      <div className="relative w-8 h-8">
        <Image 
          src="/0f6a59ad-9ec6-4b06-a6f0-0cdb606a4843-m6bby0ac.jpg"
          alt="EchoFlow Labs Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 blur-sm rounded-full animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        EchoFlow Labs
      </span>
    </div>
  )
}
