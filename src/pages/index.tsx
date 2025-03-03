
import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { StickyCtaButton } from "@/components/sections/StickyCtaButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>EchoFlow Labs | AI Solutions for Small & Medium Businesses</title>
        <meta name="description" content="Boost revenue by 30% with AI solutions tailored for small and medium businesses. Get started with a free AI strategy call and see ROI within 30 days." />
        <meta name="keywords" content="AI solutions, small business AI, medium business AI, AI implementation, business automation, AI strategy" />
        <meta property="og:title" content="EchoFlow Labs | AI Solutions for Small & Medium Businesses" />
        <meta property="og:description" content="Boost revenue by 30% with AI solutions tailored for small and medium businesses. Get started with a free AI strategy call and see ROI within 30 days." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://echoflowlabs.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EchoFlow Labs | AI Solutions for Small & Medium Businesses" />
        <meta name="twitter:description" content="Boost revenue by 30% with AI solutions tailored for small and medium businesses. Get started with a free AI strategy call and see ROI within 30 days." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ServicesSection />
        <UseCasesSection />
        <ValuePropositionSection />
        <CtaSection />
        <FaqSection />
        <StickyCtaButton />
      </main>
      
      <Footer />
    </>
  );
}
