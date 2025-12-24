import { defineType, defineField } from "sanity";

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Step Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name (e.g., clipboardCheck, brain, rocket)",
      options: {
        list: [
          { title: "Clipboard Check", value: "clipboardCheck" },
          { title: "Brain", value: "brain" },
          { title: "Rocket", value: "rocket" },
          { title: "Bar Chart", value: "barChart3" },
          { title: "Refresh", value: "refreshCw" },
          { title: "Users", value: "users" },
          { title: "Zap", value: "zap" },
          { title: "Target", value: "target" },
          { title: "MessageSquare", value: "messageSquare" },
          { title: "Calendar", value: "calendar" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bullets",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "output",
      title: "Output Text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      number: "number",
    },
    prepare({ title, number }) {
      return { title: `${number}. ${title}` };
    },
  },
});
