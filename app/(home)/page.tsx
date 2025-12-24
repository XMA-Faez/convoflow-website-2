import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "./_components/hero/hero-section";
import { AIDemoSection } from "./_components/ai-demo";
import { ClientLogoWall } from "./_components/clients";
import { ProcessSection } from "./_components/process/process-section";
import { ContactSection } from "./_components/contact/contact-section";
import LeadCostCalculator from "./_components/calculator/lead-calculator";
import { getAllContent } from "@/lib/sanity";

export default async function Home() {
  const content = await getAllContent();

  return (
    <>
      <Header content={content.layout?.header} navigation={content.navigation} />
      <main>
        <HeroSection content={content.hero} whatsappNumber={content.navigation?.whatsappNumber} />
        <AIDemoSection content={content.aiDemo} />
        <ClientLogoWall content={content.clients} />
        <ProcessSection content={content.process} />
        <LeadCostCalculator content={content.calculator} />
        <ContactSection content={content.contact} whatsappNumber={content.navigation?.whatsappNumber} />
      </main>
      <Footer content={content.layout?.footer} navigation={content.navigation} />
    </>
  );
}
