import { client } from "./client";
import {
  heroQuery,
  aiDemoQuery,
  processQuery,
  calculatorQuery,
  contactQuery,
  testimonialsQuery,
  clientsQuery,
  navigationQuery,
  layoutQuery,
} from "./queries";
import type {
  HeroContent,
  AIDemoContent,
  ProcessContent,
  CalculatorContent,
  ContactContent,
  TestimonialsContent,
  ClientItem,
  NavigationContent,
  LayoutContent,
  SiteContent,
} from "./types";
import { fallbackContent } from "./fallback";

async function fetchWithFallback<T>(
  query: string,
  fallback: T
): Promise<T> {
  try {
    const result = await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
    return result ?? fallback;
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback:", error);
    return fallback;
  }
}

export async function getHeroContent(): Promise<HeroContent> {
  return fetchWithFallback(heroQuery, fallbackContent.hero);
}

export async function getAIDemoContent(): Promise<AIDemoContent> {
  return fetchWithFallback(aiDemoQuery, fallbackContent.aiDemo);
}

export async function getProcessContent(): Promise<ProcessContent> {
  return fetchWithFallback(processQuery, fallbackContent.process);
}

export async function getCalculatorContent(): Promise<CalculatorContent> {
  return fetchWithFallback(calculatorQuery, fallbackContent.calculator);
}

export async function getContactContent(): Promise<ContactContent> {
  return fetchWithFallback(contactQuery, fallbackContent.contact);
}

export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  return fetchWithFallback(testimonialsQuery, fallbackContent.testimonials);
}

export async function getClientsContent(): Promise<ClientItem[]> {
  return fetchWithFallback(clientsQuery, fallbackContent.clients);
}

export async function getNavigationContent(): Promise<NavigationContent> {
  return fetchWithFallback(navigationQuery, fallbackContent.navigation);
}

export async function getLayoutContent(): Promise<LayoutContent> {
  return fetchWithFallback(layoutQuery, fallbackContent.layout);
}

export async function getAllContent(): Promise<SiteContent> {
  const [
    hero,
    aiDemo,
    process,
    calculator,
    contact,
    testimonials,
    clients,
    navigation,
    layout,
  ] = await Promise.all([
    getHeroContent(),
    getAIDemoContent(),
    getProcessContent(),
    getCalculatorContent(),
    getContactContent(),
    getTestimonialsContent(),
    getClientsContent(),
    getNavigationContent(),
    getLayoutContent(),
  ]);

  return {
    hero,
    aiDemo,
    process,
    calculator,
    contact,
    testimonials,
    clients,
    navigation,
    layout,
  };
}
