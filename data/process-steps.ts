import {
  ClipboardCheck,
  Brain,
  Rocket,
  BarChart3,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  body: string;
  bullets?: string[];
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Audit Call",
    body: "We hop on a short audit call and pull your funnel apart — ads, forms, CRM, follow-up. No theory. We show you where leads are dying and how many qualified conversations you're losing every month because of slow or inconsistent follow-up.",
    output:
      'Output: a clear "before" snapshot of how much revenue is slipping through the cracks.',
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Persona & System Blueprint",
    subtitle: "Turn Your Best SalesRep into an AI",
    body: "Next, we extract your top rep's brain — offer, pricing logic, objections, red flags, green flags — and codify it into an AI sales persona. We define exactly what \"qualified\" means for you, and design the conversation paths that move real buyers forward and politely park the rest.",
    output:
      "Output: a custom AI script and routing blueprint that qualifies leads exactly to your rules.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "BookedByAI Deployment",
    subtitle: "Every New Lead Called in Under 30 Seconds",
    body: "We plug BookedByAI into your existing stack — Meta, Google, landing pages, WhatsApp, CRM. From that moment:",
    bullets: [
      "Every new lead is contacted in < 30 seconds, 24/7",
      "Follow-up continues over calls, WhatsApp, and email",
      "Every conversation is pre-qualified before it ever hits your team",
    ],
    output: "Instant upgrade: speed-to-lead measured in seconds, not hours.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Show-Up Protection & Live Dashboard",
    subtitle: "We Don't Just Book Calls. We Make Them Show.",
    body: "Now we protect the pipeline you've built:",
    bullets: [
      "Smart reminders and confirmations so more people actually show up",
      "Automatic no-show sequences that rebook missed calls",
      "A live KPI board that shows leads → contacted → qualified → booked → revenue in one view",
    ],
    output:
      "Result: more attended calls, less guesswork, full visibility on what's working.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Dead Leads Revival & Continuous Optimization",
    subtitle: "Squeeze Revenue from the Leads You Forgot About",
    body: 'Finally, we send BookedByAI into your so-called "dead" database. It re-engages old leads, opens fresh conversations, and feeds new opportunities back into your pipeline — while we keep tuning scripts and rules based on real call data.',
    output:
      "Ongoing lift: up to 2–3× more qualified conversations from the leads you already generate — without touching ad spend.",
  },
];
