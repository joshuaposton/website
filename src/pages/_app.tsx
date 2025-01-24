
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
