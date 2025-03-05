
import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | EchoFlow Labs</title>
        <meta name="description" content="Explore the latest insights on AI implementation, business automation, and digital transformation strategies for SMBs." />
        <meta name="keywords" content="AI blog, business automation, digital transformation, SMB technology" />
        <meta property="og:title" content="Blog | EchoFlow Labs" />
        <meta property="og:description" content="Explore the latest insights on AI implementation, business automation, and digital transformation strategies for SMBs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://echoflowlabs.com/blog" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <BlogHeader />
          <BlogGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}
