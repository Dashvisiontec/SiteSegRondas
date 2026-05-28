import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Mockups } from "@/components/sections/Mockups";
import { Features } from "@/components/sections/Features";
import { RealTime } from "@/components/sections/RealTime";
import { Sectors } from "@/components/sections/Sectors";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Mockups />
      <Features />
      <RealTime />
      <Sectors />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
