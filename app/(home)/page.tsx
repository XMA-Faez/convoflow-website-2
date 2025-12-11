import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "./_components/hero/hero-section";
import { ClientLogoWall } from "./_components/clients";
import { ProcessSection } from "./_components/process/process-section";
import { TestimonialsSection } from "./_components/testimonials/testimonials-section";
import { ContactSection } from "./_components/contact/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientLogoWall />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
