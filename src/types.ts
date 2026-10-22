export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  quote?: string;
  image: string;
  bio: string[];
  specialInterests?: string[];
  personalDetails?: string;
  education: string;
}

export interface ServiceItem {
  id: string;
  category: 'preventive' | 'restorative' | 'cosmetic' | 'aligners' | 'emergency' | 'comfort';
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  whatToExpect: string[];
  keyHighlights: string[];
  duration?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location?: string;
  highlight: string;
  doctorMentioned?: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'nervous' | 'fees' | 'children' | 'emergency';
  question: string;
  answer: string;
}
