import { groq } from "next-sanity";

export const heroQuery = groq`*[_type == "hero"][0]{
  headline,
  headlineHighlight,
  subheading,
  ctaText,
  whatsappLabel,
  whatsappLinkText,
  industriesTagline
}`;

export const aiDemoQuery = groq`*[_type == "aiDemo"][0]{
  sectionLabel,
  title,
  description,
  disclaimer
}`;

export const processQuery = groq`*[_type == "process"][0]{
  sectionLabel,
  title,
  description,
  ctaLabel,
  ctaText,
  steps[]{
    number,
    iconName,
    title,
    subtitle,
    body,
    bullets,
    output
  }
}`;

export const calculatorQuery = groq`*[_type == "calculator"][0]{
  sectionTitle,
  titleHighlight,
  description,
  inputsHeading,
  resultsHeading,
  inputFields,
  resultLabels,
  placeholderText,
  calculateButtonText,
  calculatingText,
  showDetailsText,
  hideDetailsText,
  assumptions,
  ctaText,
  validationErrors
}`;

export const contactQuery = groq`*[_type == "contact"][0]{
  title,
  description,
  whatsappLabel,
  whatsappLinkText,
  successTitle,
  successMessage,
  resetButtonText,
  form
}`;

export const testimonialsQuery = groq`{
  "section": *[_type == "testimonialSection"][0]{
    sectionLabel,
    title,
    description
  },
  "items": *[_type == "testimonial"] | order(order asc){
    "id": _id,
    title,
    description,
    customerName,
    customerCompany,
    customerLocation,
    whyChoseUs,
    videoUrl
  }
}`;

export const clientsQuery = groq`{
  "section": *[_type == "clientSection"][0]{
    sectionLabel,
    title,
    description
  },
  "items": *[_type == "clientLogo"] | order(order asc){
    "id": _id,
    name,
    industry,
    website,
    logo,
    logoUrl,
    featured
  }
}`;

export const navigationQuery = groq`*[_type == "navigation"][0]{
  navLinks,
  whatsappNumber,
  contactInfo,
  socialLinks
}`;

export const layoutQuery = groq`*[_type == "layout"][0]{
  header,
  footer,
  metadata
}`;

export const allContentQuery = groq`{
  "hero": ${heroQuery},
  "aiDemo": ${aiDemoQuery},
  "process": ${processQuery},
  "calculator": ${calculatorQuery},
  "contact": ${contactQuery},
  "testimonials": ${testimonialsQuery},
  "clients": ${clientsQuery},
  "navigation": ${navigationQuery},
  "layout": ${layoutQuery}
}`;
