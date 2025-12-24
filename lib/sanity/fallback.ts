import type {
  HeroContent,
  AIDemoContent,
  ProcessContent,
  CalculatorContent,
  ContactContent,
  TestimonialsContent,
  ClientItem,
  NavigationContent,
  LayoutContent,
} from "./types";
import { clients as clientsData } from "@/data/clients";

export const fallbackContent = {
  hero: {
    headline: "Turn Leads Into Booked Calls",
    headlineHighlight: "Without Lifting a Finger",
    subheading:
      "We build and run your entire acquisition system to double qualified conversations from leads you already generate without increasing ad spend.",
    ctaText: "Book a 30 Min Audit Call",
    whatsappLabel: "Prefer WhatsApp?",
    whatsappLinkText: "We can start there",
    industriesTagline:
      "Perfect for real estate, automotive, private aviation, plastic surgery clinics, spas, and any business that runs on leads.",
  } satisfies HeroContent,

  aiDemo: {
    sectionLabel: "See It In Action",
    title: "AI That Books While You Sleep",
    description:
      "Watch how our AI engages leads instantly, qualifies them through natural conversation, and books meetings — all without human intervention.",
    disclaimer:
      "This is a simulation. Real conversations are personalized to your business and industry.",
  } satisfies AIDemoContent,

  process: {
    sectionLabel: "How We Work",
    title: "Your BookedByAI System, Installed in 7 Days",
    description:
      "From first call to an AI engine that turns cold leads into qualified conversations on autopilot.",
    ctaLabel: "Ready to start your journey with us?",
    ctaText: "Book Your Demo Now",
    steps: [
      {
        number: "01",
        iconName: "clipboardCheck",
        title: "Audit Call",
        body: "We hop on a short audit call and pull your funnel apart — ads, forms, CRM, follow-up. No theory. We show you where leads are dying and how many qualified conversations you're losing every month because of slow or inconsistent follow-up.",
        output:
          'Output: a clear "before" snapshot of how much revenue is slipping through the cracks.',
      },
      {
        number: "02",
        iconName: "brain",
        title: "AI Persona & System Blueprint",
        subtitle: "Turn Your Best SalesRep into an AI",
        body: 'Next, we extract your top rep\'s brain — offer, pricing logic, objections, red flags, green flags — and codify it into an AI sales persona. We define exactly what "qualified" means for you, and design the conversation paths that move real buyers forward and politely park the rest.',
        output:
          "Output: a custom AI script and routing blueprint that qualifies leads exactly to your rules.",
      },
      {
        number: "03",
        iconName: "rocket",
        title: "BookedByAI Deployment",
        subtitle: "Every New Lead Called in Under 30 Seconds",
        body: "We plug BookedByAI into your existing stack — Meta, Google, landing pages, WhatsApp, CRM. From that moment:",
        bullets: [
          "Every new lead is contacted in < 30 seconds, 24/7",
          "Follow-up continues over calls, WhatsApp, and email",
          "Every conversation is pre-qualified before it ever hits your team",
        ],
        output: "Instant upgrade: speed-to-lead measured in seconds, not hours.",
      },
      {
        number: "04",
        iconName: "barChart3",
        title: "Show-Up Protection & Live Dashboard",
        subtitle: "We Don't Just Book Calls. We Make Them Show.",
        body: "Now we protect the pipeline you've built:",
        bullets: [
          "Smart reminders and confirmations so more people actually show up",
          "Automatic no-show sequences that rebook missed calls",
          "A live KPI board that shows leads → contacted → qualified → booked → revenue in one view",
        ],
        output:
          "Result: more attended calls, less guesswork, full visibility on what's working.",
      },
      {
        number: "05",
        iconName: "refreshCw",
        title: "Dead Leads Revival & Continuous Optimization",
        subtitle: "Squeeze Revenue from the Leads You Forgot About",
        body: 'Finally, we send BookedByAI into your so-called "dead" database. It re-engages old leads, opens fresh conversations, and feeds new opportunities back into your pipeline — while we keep tuning scripts and rules based on real call data.',
        output:
          "Ongoing lift: up to 2–3× more qualified conversations from the leads you already generate — without touching ad spend.",
      },
    ],
  } satisfies ProcessContent,

  calculator: {
    sectionTitle: "Calculate Your",
    titleHighlight: "Revenue Impact",
    description:
      "See exactly how much additional revenue our system could generate for your UAE business",
    inputsHeading: "Your Current Metrics",
    resultsHeading: "Your ROI Projection",
    inputFields: {
      leads: {
        label: "Leads per Month",
        suffix: "leads",
        tooltip: "Average number of leads you receive monthly",
      },
      conversionRate: {
        label: "Current Conversion Rate",
        suffix: "%",
        tooltip: "Percentage of leads that become paying customers",
      },
      averageValue: {
        label: "Average Customer Value",
        suffix: "AED",
        tooltip: "Average revenue per customer or project",
      },
      responseTime: {
        label: "Average Response Time",
        suffix: "hours",
        tooltip: "How long it takes to respond to new leads",
      },
    },
    resultLabels: {
      additionalRevenue: "Additional Monthly Revenue",
      annualSuffix: "/ year",
      leadsRecovered: "Leads Recovered",
      timeSaved: "Time Saved",
      revenueComparison: "Revenue Comparison",
      currentRevenue: "Current Revenue",
      withOurSystem: "With Our System",
      increase: "Increase",
    },
    placeholderText:
      'Adjust your metrics and click "Calculate My ROI" to see your potential revenue increase',
    calculateButtonText: "Calculate My ROI",
    calculatingText: "Calculating ROI...",
    showDetailsText: "Show calculation details",
    hideDetailsText: "Hide calculation details",
    assumptions: [
      "60% improvement in conversion rate with AI chatbot",
      "15-25% more leads captured with faster response times",
      "50% reduction in manual response time",
      "Based on industry averages for UAE service businesses",
    ],
    ctaText: "Get Started Now",
    validationErrors: {
      leadCount: "Lead count must be between 5 and 500",
      conversionRate: "Conversion rate must be between 5% and 50%",
      averageValue: "Average value must be between 100 and 10,000 AED",
      responseTime: "Response time must be between 0.5 and 24 hours",
      genericError: "An error occurred during calculation. Please try again.",
      fixIssues: "Please fix the following issues:",
    },
  } satisfies CalculatorContent,

  contact: {
    title: "Stop Losing Leads. Start Today.",
    description:
      "Book your free 30-minute audit call and discover how much revenue you're leaving on the table.",
    whatsappLabel: "Prefer WhatsApp?",
    whatsappLinkText: "We can start there",
    successTitle: "Thank You, {firstName}!",
    successMessage: "Sara will give you a call within:",
    resetButtonText: "Send Another Message",
    form: {
      labels: {
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone Number",
        language: "Preferred Language",
      },
      placeholders: {
        firstName: "John",
        lastName: "Doe",
      },
      languageOptions: [
        { value: "en", label: "English" },
        { value: "ar", label: "Arabic" },
      ],
      submitButtonText: "Book a 30 Min Audit Call",
      submittingText: "Submitting...",
      errors: {
        firstNameRequired: "First name is required",
        lastNameRequired: "Last name is required",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Please enter a valid phone number",
        submitFailed: "Something went wrong. Please try again.",
      },
    },
  } satisfies ContactContent,

  testimonials: {
    section: {
      sectionLabel: "Testimonials",
      title: "What Our Clients Say",
      description: "Real results from real businesses",
    },
    items: [],
  } satisfies TestimonialsContent,

  clients: clientsData.map((c) => ({
    id: c.id,
    name: c.name,
    industry: c.industry,
    website: c.website,
    logoUrl: c.logo,
    featured: c.featured,
  })) satisfies ClientItem[],

  navigation: {
    navLinks: [
      { label: "How We Work", href: "#how-we-work" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    whatsappNumber: "+971545317254",
    contactInfo: {
      phone: "+971545317254",
      email: "info@convoflow.ae",
      address: {
        line1: "Jumeirah Lake Towers",
        line2: "Dubai, UAE",
      },
    },
    socialLinks: {
      instagram: "https://instagram.com/convoflow.ae",
      linkedin: "https://linkedin.com/company/convoflow",
      twitter: "https://twitter.com/convoflow",
    },
  } satisfies NavigationContent,

  layout: {
    header: {
      ctaText: "Book a 30 Min Audit Call",
      logoAlt: "BookedByAI Logo",
    },
    footer: {
      tagline: "AI-powered lead qualification and booking automation.",
      contactSectionTitle: "Contact",
      locationSectionTitle: "Location",
      whatsappLinkText: "WhatsApp",
      copyrightText: "BookedByAI. All rights reserved.",
    },
    metadata: {
      siteTitle: "BookedByAI - AI-Powered Lead Conversion",
      siteDescription:
        "Turn leads into booked calls without lifting a finger. AI-powered lead qualification and booking automation for UAE businesses.",
    },
  } satisfies LayoutContent,
};
