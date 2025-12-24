import { defineType, defineField } from "sanity";

export const clientLogo = defineType({
  name: "clientLogo",
  title: "Client Logo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logoUrl",
      title: "Logo URL (Alternative)",
      type: "string",
      description: "Use this if logo is hosted externally",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "industry",
      media: "logo",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

export const clientSection = defineType({
  name: "clientSection",
  title: "Clients Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Small text above the title (e.g., 'Trusted By')",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main heading for the section",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Supporting text below the title",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Clients Section Settings" };
    },
  },
});
