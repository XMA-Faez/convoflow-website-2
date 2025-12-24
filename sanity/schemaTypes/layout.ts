import { defineType, defineField } from "sanity";

export const layout = defineType({
  name: "layout",
  title: "Layout Settings",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        { name: "ctaText", type: "string", title: "CTA Button Text" },
        { name: "logoAlt", type: "string", title: "Logo Alt Text" },
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        { name: "tagline", type: "text", title: "Tagline", rows: 2 },
        { name: "contactSectionTitle", type: "string", title: "Contact Section Title" },
        { name: "locationSectionTitle", type: "string", title: "Location Section Title" },
        { name: "whatsappLinkText", type: "string", title: "WhatsApp Link Text" },
        { name: "copyrightText", type: "string", title: "Copyright Text" },
      ],
    }),
    defineField({
      name: "metadata",
      title: "Site Metadata",
      type: "object",
      fields: [
        { name: "siteTitle", type: "string", title: "Site Title" },
        { name: "siteDescription", type: "text", title: "Site Description", rows: 2 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Layout Settings" };
    },
  },
});
