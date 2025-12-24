import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8iy7ioai",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const clientSectionData = {
  _id: "clientSection",
  _type: "clientSection",
  sectionLabel: "Trusted By",
  title: "Industry Leaders",
  description:
    "From healthcare to aviation, real estate to fintech — we help businesses across industries transform their customer conversations.",
};

async function seedClientSection() {
  console.log("Creating/updating clientSection document...");

  const result = await client.createOrReplace(clientSectionData);

  console.log("Done!", result);
}

seedClientSection().catch(console.error);
