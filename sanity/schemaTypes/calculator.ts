import { defineType, defineField } from "sanity";

export const calculator = defineType({
  name: "calculator",
  title: "Calculator Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleHighlight",
      title: "Title Highlight",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "inputsHeading",
      title: "Inputs Heading",
      type: "string",
    }),
    defineField({
      name: "resultsHeading",
      title: "Results Heading",
      type: "string",
    }),
    defineField({
      name: "inputFields",
      title: "Input Fields",
      type: "object",
      fields: [
        defineField({
          name: "leads",
          title: "Leads Field",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "suffix", type: "string", title: "Suffix" },
            { name: "tooltip", type: "string", title: "Tooltip" },
          ],
        }),
        defineField({
          name: "conversionRate",
          title: "Conversion Rate Field",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "suffix", type: "string", title: "Suffix" },
            { name: "tooltip", type: "string", title: "Tooltip" },
          ],
        }),
        defineField({
          name: "averageValue",
          title: "Average Value Field",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "suffix", type: "string", title: "Suffix" },
            { name: "tooltip", type: "string", title: "Tooltip" },
          ],
        }),
        defineField({
          name: "responseTime",
          title: "Response Time Field",
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "suffix", type: "string", title: "Suffix" },
            { name: "tooltip", type: "string", title: "Tooltip" },
          ],
        }),
      ],
    }),
    defineField({
      name: "resultLabels",
      title: "Result Labels",
      type: "object",
      fields: [
        { name: "additionalRevenue", type: "string", title: "Additional Revenue" },
        { name: "annualSuffix", type: "string", title: "Annual Suffix" },
        { name: "leadsRecovered", type: "string", title: "Leads Recovered" },
        { name: "timeSaved", type: "string", title: "Time Saved" },
        { name: "revenueComparison", type: "string", title: "Revenue Comparison" },
        { name: "currentRevenue", type: "string", title: "Current Revenue" },
        { name: "withOurSystem", type: "string", title: "With Our System" },
        { name: "increase", type: "string", title: "Increase" },
      ],
    }),
    defineField({
      name: "placeholderText",
      title: "Placeholder Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "calculateButtonText",
      title: "Calculate Button Text",
      type: "string",
    }),
    defineField({
      name: "calculatingText",
      title: "Calculating Text",
      type: "string",
    }),
    defineField({
      name: "showDetailsText",
      title: "Show Details Text",
      type: "string",
    }),
    defineField({
      name: "hideDetailsText",
      title: "Hide Details Text",
      type: "string",
    }),
    defineField({
      name: "assumptions",
      title: "Assumptions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "validationErrors",
      title: "Validation Errors",
      type: "object",
      fields: [
        { name: "leadCount", type: "string", title: "Lead Count Error" },
        { name: "conversionRate", type: "string", title: "Conversion Rate Error" },
        { name: "averageValue", type: "string", title: "Average Value Error" },
        { name: "responseTime", type: "string", title: "Response Time Error" },
        { name: "genericError", type: "string", title: "Generic Error" },
        { name: "fixIssues", type: "string", title: "Fix Issues Message" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Calculator Section" };
    },
  },
});
