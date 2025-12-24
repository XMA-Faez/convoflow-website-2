import { defineType, defineField } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation & Contact",
  type: "document",
  fields: [
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Link (href)" },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Full international format (e.g., +971545317254)",
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "phone", type: "string", title: "Phone" },
        { name: "email", type: "string", title: "Email" },
        defineField({
          name: "address",
          title: "Address",
          type: "object",
          fields: [
            { name: "line1", type: "string", title: "Line 1" },
            { name: "line2", type: "string", title: "Line 2" },
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "twitter", type: "url", title: "Twitter / X" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Navigation & Contact Settings" };
    },
  },
});
