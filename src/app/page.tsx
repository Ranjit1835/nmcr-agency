import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemStats } from "@/components/sections/ProblemStats";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Services } from "@/components/sections/Services";
import { Proof } from "@/components/sections/Proof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStats />
        <ROICalculator />
        <Services />
        <Proof />
        <HowItWorks />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
