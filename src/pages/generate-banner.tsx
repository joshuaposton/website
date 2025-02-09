
import { TextBanner } from "@/components/graphics/TextBanner"

export default function GenerateBannerPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <TextBanner />
      <p className="text-foreground">Generating banner...</p>
    </div>
  )
}
