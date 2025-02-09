
import { useEffect, useRef } from "react"

export function TextBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 1200
    canvas.height = 400

    // Set background
    ctx.fillStyle = "#030712" // Dark background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Text configuration
    const text = "Innovate. Automate. Dominate."
    ctx.fillStyle = "#ffffff" // White text
    ctx.font = "bold 64px Inter" // Using Inter font for modern tech look
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Add subtle gradient
    const gradient = ctx.createLinearGradient(0, 150, canvas.width, 250)
    gradient.addColorStop(0, "#4f46e5") // Indigo
    gradient.addColorStop(0.5, "#8b5cf6") // Purple
    gradient.addColorStop(1, "#4f46e5") // Indigo
    ctx.fillStyle = gradient

    // Draw text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    // Export as PNG
    const dataUrl = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.download = "innovate-automate-dominate.png"
    link.href = dataUrl
    link.click()
  }, [])

  return <canvas ref={canvasRef} style={{ display: "none" }} />
}
