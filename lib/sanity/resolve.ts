import {
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    hero: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    aiDemo: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    process: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    calculator: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    contact: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    clientSection: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    clientLogo: defineLocations({
      select: { name: "name" },
      resolve: (doc) => ({
        locations: [{ title: doc?.name || "Client Logo", href: "/" }],
      }),
    }),
    navigation: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
    layout: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{ title: "Home", href: "/" }],
      }),
    }),
  },
};
