import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "./_components/hero/hero-section";
import { AIDemoSection } from "./_components/ai-demo";
import { ClientLogoWall } from "./_components/clients";
import { ProcessSection } from "./_components/process/process-section";
import { TestimonialsSection } from "./_components/testimonials/testimonials-section";
import { ContactSection } from "./_components/contact/contact-section";
import LeadCostCalculator from "./_components/calculator/lead-calculator";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AIDemoSection />
        <ClientLogoWall />
        <ProcessSection />
        <LeadCostCalculator />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
