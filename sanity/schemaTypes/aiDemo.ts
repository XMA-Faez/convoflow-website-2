import { defineType, defineField } from "sanity";

export const aiDemo = defineType({
  name: "aiDemo",
  title: "AI Demo Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return { title: "AI Demo Section" };
    },
  },
});
