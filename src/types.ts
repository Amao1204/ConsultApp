export type PageId =
  | 'home'
  | 'how-it-works'
  | 'features'
  | 'explore'
  | 'become-consultant'
  | 'for-businesses'
  | 'about'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'sign-in'
  | 'sign-up'
  | 'forgot-password'
  | 'reset-password'
  | 'privacy'
  | 'terms'
  | 'consultant-profile'
  | 'not-found';

export type CategoryId =
  | 'all'
  | 'business'
  | 'branding'
  | 'marketing'
  | 'career'
  | 'fashion'
  | 'events'
  | 'food'
  | 'strategy'
  | 'lifestyle'
  | 'startup';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  tagline: string;
  iconName: string;
  count: number;
}

export interface ConsultantService {
  id: string;
  title: string;
  duration: string; // e.g., "45 mins"
  price: number; // in Naira (NGN)
  description: string;
  deliverables: string[];
}

export interface ConsultantReview {
  id: string;
  clientName: string;
  clientRole: string;
  rating: number;
  date: string;
  comment: string;
  serviceBooked: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics?: string;
  imageUrl?: string;
}

export interface Consultant {
  id: string;
  name: string;
  title: string;
  category: CategoryId;
  specialties: string[];
  bio: string;
  fullAbout: string;
  avatarUrl: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  currency: string;
  location: string;
  responseTime: string;
  availableToday: boolean;
  nextAvailable: string;
  verified: boolean;
  badgeText?: string;
  experienceYears: number;
  completedConsultations: number;
  services: ConsultantService[];
  reviews: ConsultantReview[];
  portfolio: PortfolioItem[];
  howIWork: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SearchSuggestion {
  query: string;
  category: CategoryId;
  description: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}
