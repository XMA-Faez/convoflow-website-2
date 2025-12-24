import { defineType, defineField } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
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
      rows: 2,
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
      name: "successTitle",
      title: "Success Title",
      type: "string",
      description: "Use {firstName} as placeholder for user's name",
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "string",
    }),
    defineField({
      name: "resetButtonText",
      title: "Reset Button Text",
      type: "string",
    }),
    defineField({
      name: "form",
      title: "Form Settings",
      type: "object",
      fields: [
        defineField({
          name: "labels",
          title: "Field Labels",
          type: "object",
          fields: [
            { name: "firstName", type: "string", title: "First Name Label" },
            { name: "lastName", type: "string", title: "Last Name Label" },
            { name: "phone", type: "string", title: "Phone Label" },
            { name: "language", type: "string", title: "Language Label" },
          ],
        }),
        defineField({
          name: "placeholders",
          title: "Placeholders",
          type: "object",
          fields: [
            { name: "firstName", type: "string", title: "First Name Placeholder" },
            { name: "lastName", type: "string", title: "Last Name Placeholder" },
          ],
        }),
        defineField({
          name: "languageOptions",
          title: "Language Options",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", type: "string", title: "Value" },
                { name: "label", type: "string", title: "Label" },
              ],
            },
          ],
        }),
        defineField({
          name: "submitButtonText",
          title: "Submit Button Text",
          type: "string",
        }),
        defineField({
          name: "submittingText",
          title: "Submitting Text",
          type: "string",
        }),
        defineField({
          name: "errors",
          title: "Error Messages",
          type: "object",
          fields: [
            { name: "firstNameRequired", type: "string", title: "First Name Required" },
            { name: "lastNameRequired", type: "string", title: "Last Name Required" },
            { name: "phoneRequired", type: "string", title: "Phone Required" },
            { name: "phoneInvalid", type: "string", title: "Phone Invalid" },
            { name: "submitFailed", type: "string", title: "Submit Failed" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Section" };
    },
  },
});
