import { MaintenancePage } from "./_components/maintenance/maintenance-page";

export default function Home() {
  return <MaintenancePage />;
}

/* ORIGINAL IMPLEMENTATION - COMMENTED OUT FOR MAINTENANCE
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "./_components/hero/hero-section";
import { ClientLogos } from "./_components/clients/client-logos";
import { ProcessSection } from "./_components/process/process-section";
import { TestimonialsSection } from "./_components/testimonials/testimonials-section";
import { ContactSection } from "./_components/contact/contact-section";
// import { SignupPopup } from "@/components/signup-popup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
*/
