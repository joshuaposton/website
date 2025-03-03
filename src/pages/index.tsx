
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

export default function Home() {
  return (
    <>
      <Head>
        <title>AImplement | AI Solutions for Small & Medium Businesses</title>
        <meta name="description" content="Unlock efficiency, automate workflows, and gain insights with AI solutions tailored for small and medium businesses. Get started with a free AI strategy call." />
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
      </main>
      
      <Footer />
    </>
  );
}
