import { Navbar } from "@/components/Navbar";
import { StickyBanner } from "@/components/StickyBanner";
import { Hero } from "@/components/sections/Hero";
import { ProblemStats } from "@/components/sections/ProblemStats";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Services } from "@/components/sections/Services";
import { Proof } from "@/components/sections/Proof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <StickyBanner />
        <Hero />
        <ProblemStats />
        <ROICalculator />
        <Services />
        <Proof />
        <HowItWorks />
        <LiveDemo />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
