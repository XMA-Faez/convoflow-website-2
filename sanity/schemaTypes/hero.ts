import { defineType, defineField } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headlineHighlight",
      title: "Headline Highlight",
      type: "string",
      description: "The highlighted part of the headline",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "whatsappLabel",
      title: "WhatsApp Label",
      type: "string",
    }),
    defineField({
      name: "whatsappLinkText",
      title: "WhatsApp Link Text",
      type: "string",
    }),
    defineField({
      name: "industriesTagline",
      title: "Industries Tagline",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});
