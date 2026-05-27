import Image from "next/image";

import Features from "@/src/components/Features";
import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
    
        <Hero />
        <Features />
      </main>
    
    </>
  )
}
