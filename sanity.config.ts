"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

const singletonTypes = new Set([
  "hero",
  "aiDemo",
  "process",
  "calculator",
  "contact",
  "clientSection",
  "navigation",
  "layout",
]);

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "convoflow-studio",
  title: "ConvoFlow CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Hero Section")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("AI Demo Section")
              .id("aiDemo")
              .child(S.document().schemaType("aiDemo").documentId("aiDemo")),
            S.listItem()
              .title("Process Section")
              .id("process")
              .child(S.document().schemaType("process").documentId("process")),
            S.listItem()
              .title("Calculator Section")
              .id("calculator")
              .child(S.document().schemaType("calculator").documentId("calculator")),
            S.listItem()
              .title("Contact Section")
              .id("contact")
              .child(S.document().schemaType("contact").documentId("contact")),
            S.divider(),
            S.listItem()
              .title("Clients Section Settings")
              .id("clientSection")
              .child(
                S.document()
                  .schemaType("clientSection")
                  .documentId("clientSection")
              ),
            S.documentTypeListItem("clientLogo").title("Client Logos"),
            S.divider(),
            S.listItem()
              .title("Navigation & Contact")
              .id("navigation")
              .child(S.document().schemaType("navigation").documentId("navigation")),
            S.listItem()
              .title("Layout Settings")
              .id("layout")
              .child(S.document().schemaType("layout").documentId("layout")),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
