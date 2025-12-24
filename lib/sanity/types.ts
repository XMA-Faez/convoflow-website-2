import type { SanityImageSource } from "@sanity/image-url";

export interface HeroContent {
  headline: string;
  headlineHighlight: string;
  subheading: string;
  ctaText: string;
  whatsappLabel?: string;
  whatsappLinkText?: string;
  industriesTagline?: string;
}

export interface AIDemoContent {
  sectionLabel: string;
  title: string;
  description: string;
  disclaimer: string;
}

export interface ProcessStep {
  number: string;
  iconName: string;
  title: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  output: string;
}

export interface ProcessContent {
  sectionLabel: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaText: string;
  steps: ProcessStep[];
}

export interface CalculatorInputField {
  label: string;
  suffix: string;
  tooltip: string;
}

export interface CalculatorContent {
  sectionTitle: string;
  titleHighlight?: string;
  description: string;
  inputsHeading: string;
  resultsHeading: string;
  inputFields: {
    leads: CalculatorInputField;
    conversionRate: CalculatorInputField;
    averageValue: CalculatorInputField;
    responseTime: CalculatorInputField;
  };
  resultLabels: {
    additionalRevenue: string;
    annualSuffix: string;
    leadsRecovered: string;
    timeSaved: string;
    revenueComparison: string;
    currentRevenue: string;
    withOurSystem: string;
    increase: string;
  };
  placeholderText: string;
  calculateButtonText: string;
  calculatingText: string;
  showDetailsText: string;
  hideDetailsText: string;
  assumptions: string[];
  ctaText: string;
  validationErrors: {
    leadCount: string;
    conversionRate: string;
    averageValue: string;
    responseTime: string;
    genericError: string;
    fixIssues: string;
  };
}

export interface ContactFormContent {
  labels: {
    firstName: string;
    lastName: string;
    phone: string;
    language: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
  };
  languageOptions: { value: string; label: string }[];
  submitButtonText: string;
  submittingText: string;
  errors: {
    firstNameRequired: string;
    lastNameRequired: string;
    phoneRequired: string;
    phoneInvalid: string;
    submitFailed: string;
  };
}

export interface ContactContent {
  title: string;
  description: string;
  whatsappLabel?: string;
  whatsappLinkText?: string;
  successTitle: string;
  successMessage: string;
  resetButtonText: string;
  form: ContactFormContent;
}

export interface TestimonialItem {
  id: string;
  title: string;
  description: string;
  customerName: string;
  customerCompany?: string;
  customerLocation?: string;
  whyChoseUs?: string;
  videoUrl?: string;
}

export interface TestimonialsContent {
  section: {
    sectionLabel: string;
    title: string;
    description: string;
  };
  items: TestimonialItem[];
}

export interface ClientItem {
  id: string;
  name: string;
  industry?: string;
  website?: string;
  logo?: SanityImageSource;
  logoUrl?: string;
  featured?: boolean;
}

export interface NavigationContent {
  navLinks: { label: string; href: string }[];
  whatsappNumber: string;
  contactInfo: {
    phone: string;
    email: string;
    address: {
      line1: string;
      line2: string;
    };
  };
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface LayoutContent {
  header: {
    ctaText: string;
    logoAlt: string;
  };
  footer: {
    tagline: string;
    contactSectionTitle: string;
    locationSectionTitle: string;
    whatsappLinkText: string;
    copyrightText: string;
  };
  metadata: {
    siteTitle: string;
    siteDescription: string;
  };
}

export interface SiteContent {
  hero: HeroContent | null;
  aiDemo: AIDemoContent | null;
  process: ProcessContent | null;
  calculator: CalculatorContent | null;
  contact: ContactContent | null;
  testimonials: TestimonialsContent;
  clients: ClientItem[];
  navigation: NavigationContent | null;
  layout: LayoutContent | null;
}
