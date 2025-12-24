import { createClient } from "@sanity/client";
import { fallbackContent } from "../lib/sanity/fallback";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8iy7ioai";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("SANITY_API_TOKEN is required. Add it to .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function importContent() {
  console.log("Starting Sanity content import...\n");

  try {
    // Import Hero
    console.log("Importing Hero...");
    await client.createOrReplace({
      _id: "hero",
      _type: "hero",
      ...fallbackContent.hero,
    });
    console.log("✓ Hero imported\n");

    // Import AI Demo
    console.log("Importing AI Demo...");
    await client.createOrReplace({
      _id: "aiDemo",
      _type: "aiDemo",
      ...fallbackContent.aiDemo,
    });
    console.log("✓ AI Demo imported\n");

    // Import Process
    console.log("Importing Process...");
    await client.createOrReplace({
      _id: "process",
      _type: "process",
      sectionLabel: fallbackContent.process.sectionLabel,
      title: fallbackContent.process.title,
      description: fallbackContent.process.description,
      ctaLabel: fallbackContent.process.ctaLabel,
      ctaText: fallbackContent.process.ctaText,
      steps: fallbackContent.process.steps.map((step, index) => ({
        _key: `step-${index}`,
        _type: "processStep",
        number: step.number,
        iconName: step.iconName,
        title: step.title,
        subtitle: step.subtitle,
        body: step.body,
        bullets: step.bullets,
        output: step.output,
      })),
    });
    console.log("✓ Process imported\n");

    // Import Calculator
    console.log("Importing Calculator...");
    await client.createOrReplace({
      _id: "calculator",
      _type: "calculator",
      sectionTitle: fallbackContent.calculator.sectionTitle,
      titleHighlight: fallbackContent.calculator.titleHighlight,
      description: fallbackContent.calculator.description,
      inputsHeading: fallbackContent.calculator.inputsHeading,
      resultsHeading: fallbackContent.calculator.resultsHeading,
      placeholderText: fallbackContent.calculator.placeholderText,
      calculateButtonText: fallbackContent.calculator.calculateButtonText,
      calculatingText: fallbackContent.calculator.calculatingText,
      showDetailsText: fallbackContent.calculator.showDetailsText,
      hideDetailsText: fallbackContent.calculator.hideDetailsText,
      assumptions: fallbackContent.calculator.assumptions,
      ctaText: fallbackContent.calculator.ctaText,
    });
    console.log("✓ Calculator imported\n");

    // Import Contact
    console.log("Importing Contact...");
    await client.createOrReplace({
      _id: "contact",
      _type: "contact",
      title: fallbackContent.contact.title,
      description: fallbackContent.contact.description,
      whatsappLabel: fallbackContent.contact.whatsappLabel,
      whatsappLinkText: fallbackContent.contact.whatsappLinkText,
      successTitle: fallbackContent.contact.successTitle,
      successMessage: fallbackContent.contact.successMessage,
      resetButtonText: fallbackContent.contact.resetButtonText,
      form: {
        labels: fallbackContent.contact.form.labels,
        placeholders: fallbackContent.contact.form.placeholders,
        languageOptions: fallbackContent.contact.form.languageOptions.map(
          (opt, i) => ({
            _key: `lang-${i}`,
            value: opt.value,
            label: opt.label,
          })
        ),
        submitButtonText: fallbackContent.contact.form.submitButtonText,
        submittingText: fallbackContent.contact.form.submittingText,
        errors: fallbackContent.contact.form.errors,
      },
    });
    console.log("✓ Contact imported\n");

    // Import Testimonial Section
    console.log("Importing Testimonial Section...");
    await client.createOrReplace({
      _id: "testimonialSection",
      _type: "testimonialSection",
      ...fallbackContent.testimonials.section,
    });
    console.log("✓ Testimonial Section imported\n");

    // Import Navigation
    console.log("Importing Navigation...");
    await client.createOrReplace({
      _id: "navigation",
      _type: "navigation",
      navLinks: fallbackContent.navigation.navLinks.map((link, index) => ({
        _key: `link-${index}`,
        label: link.label,
        href: link.href,
      })),
      whatsappNumber: fallbackContent.navigation.whatsappNumber,
      contactInfo: fallbackContent.navigation.contactInfo,
      socialLinks: fallbackContent.navigation.socialLinks,
    });
    console.log("✓ Navigation imported\n");

    // Import Layout
    console.log("Importing Layout...");
    await client.createOrReplace({
      _id: "layout",
      _type: "layout",
      header: fallbackContent.layout.header,
      footer: fallbackContent.layout.footer,
      metadata: fallbackContent.layout.metadata,
    });
    console.log("✓ Layout imported\n");

    // Import Clients
    console.log("Importing Clients...");
    for (let i = 0; i < fallbackContent.clients.length; i++) {
      const clientData = fallbackContent.clients[i];
      await client.createOrReplace({
        _id: `clientLogo-${clientData.id}`,
        _type: "clientLogo",
        name: clientData.name,
        industry: clientData.industry,
        website: clientData.website,
        logoUrl: clientData.logoUrl,
        featured: clientData.featured || false,
        order: i,
      });
      console.log(`  ✓ ${clientData.name}`);
    }
    console.log("✓ All clients imported\n");

    console.log("═══════════════════════════════════════");
    console.log("✓ All content imported successfully!");
    console.log("═══════════════════════════════════════");
    console.log("\nRefresh your Sanity Studio to see the content.");
  } catch (error) {
    console.error("Import failed:", error);
    process.exit(1);
  }
}

importContent();
