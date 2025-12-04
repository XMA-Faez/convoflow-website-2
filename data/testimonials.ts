export interface Testimonial {
  id: string;
  videoUrl?: string;
  title: string;
  description: string;
  customerName: string;
  customerCompany: string;
  customerLocation?: string;
  whyChoseUs?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    title: "2x More Qualified Conversations in 30 Days",
    description:
      "Before BookedByAI, our team was drowning in unqualified leads. Now, every call we take is with someone genuinely ready to buy. The AI handles all the qualification so we can focus on closing.",
    customerName: "Sarah Mitchell",
    customerCompany: "Elite Real Estate Group",
    customerLocation: "Miami, FL",
    whyChoseUs: "Speed and accuracy of lead qualification",
  },
  {
    id: "2",
    title: "Cut Our Response Time from Hours to Seconds",
    description:
      "Our leads used to wait hours for a callback. Now BookedByAI contacts them within 30 seconds, 24/7. Our booking rate has increased dramatically and our sales team is more productive than ever.",
    customerName: "Marcus Johnson",
    customerCompany: "Premier Auto Sales",
    customerLocation: "Dallas, TX",
    whyChoseUs: "The instant response capability was a game-changer",
  },
  {
    id: "3",
    title: "Revived $200K from 'Dead' Leads",
    description:
      "We thought our old lead database was worthless. BookedByAI re-engaged contacts we'd written off months ago and generated over $200K in new pipeline within the first quarter.",
    customerName: "Dr. Amanda Chen",
    customerCompany: "Radiance Med Spa",
    customerLocation: "Los Angeles, CA",
    whyChoseUs: "The dead leads revival feature alone paid for itself",
  },
];
