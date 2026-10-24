import React from 'react';
import { PageId } from '../types';
import {
  Search,
  UserCheck,
  Calendar,
  Lock,
  MessageSquare,
  Layers,
  Star,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  FileCheck,
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const featureGroups = [
    {
      groupTitle: 'Discovery & Matching',
      groupDescription: 'Find the right practitioner quickly without wading through irrelevant resumes.',
      features: [
        {
          title: 'Problem-First Search',
          description:
            'Describe what you are trying to figure out in plain language. Our algorithm parses your intent and surfaces consultants with matching project experience.',
          tag: 'Natural Language Search',
          icon: <Search className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Verified Track Records',
          description:
            'Every expert on ConsultAPP goes through a rigorous manual review of past client work, employment history, and business registrations.',
          tag: 'Manual Review & KYC',
          icon: <UserCheck className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Granular Multi-Filter Engine',
          description:
            'Filter by price bracket in Naira (₦), minimum client review ratings, immediate same-day availability, and specific domain tags.',
          tag: 'Precision Discovery',
          icon: <SlidersHorizontal className="w-5 h-5 text-[#49283F]" />,
        },
      ],
    },
    {
      groupTitle: 'Scheduling & Payments',
      groupDescription: 'Frictionless calendar booking and 100% secure Naira payment holding.',
      features: [
        {
          title: 'Live Calendar Availability',
          description:
            'See up-to-the-minute open slots on the consultant’s real calendar. Avoid days of scheduling back-and-forth.',
          tag: 'Direct Calendar Sync',
          icon: <Calendar className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Naira (₦) Escrow Holding',
          description:
            'Your payment is safely held by ConsultAPP. Funds are only transferred to the consultant after the session concludes smoothly.',
          tag: 'Buyer Protection',
          icon: <Lock className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Transparent Deliverables',
          description:
            'Know exactly what you are paying for before confirming. Each service package lists durations, checklists, and post-session follow-up windows.',
          tag: 'Explicit Scope',
          icon: <FileCheck className="w-5 h-5 text-[#49283F]" />,
        },
      ],
    },
    {
      groupTitle: 'Consultation & Delivery',
      groupDescription: 'Actionable guidance and ongoing implementation partnerships.',
      features: [
        {
          title: 'High-Definition Video Rooms',
          description:
            'Join your 1-on-1 strategy call with one click. Share screens, pitch decks, spreadsheets, and financial models securely.',
          tag: 'Encrypted Meetings',
          icon: <MessageSquare className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Execution Sprints',
          description:
            'Need hands-on work done? Transition seamlessly from consultation into a milestone-backed project sprint with agreed delivery dates.',
          tag: 'Milestone Contracts',
          icon: <Layers className="w-5 h-5 text-[#49283F]" />,
        },
        {
          title: 'Verified Client Reviews',
          description:
            'Read genuine reviews left exclusively by clients who completed booked sessions through ConsultAPP. No fabricated testimonials.',
          tag: 'Verified Feedback',
          icon: <Star className="w-5 h-5 text-[#49283F]" />,
        },
      ],
    },
  ];

  return (
    <div id="features-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Platform Capabilities & Safeguards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Built for clarity, speed, and real execution.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          Explore the tools and structural safeguards that make ConsultAPP the most reliable way to find and work with verified African experts.
        </p>
      </section>

      {/* Feature Groups */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        {featureGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-6">
            <div className="border-b border-[#E6DDE2] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
                Group 0{gIdx + 1}
              </span>
              <h2 className="text-2xl font-bold text-[#282329] tracking-tight mt-0.5">
                {group.groupTitle}
              </h2>
              <p className="text-sm text-[#716873] mt-1">
                {group.groupDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {group.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl p-6 border border-[#E6DDE2] shadow-2xs hover:border-[#D9B9C7] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                        {feature.icon}
                      </div>
                      <span className="text-[11px] font-semibold text-[#49283F] bg-[#FAF7F4] border border-[#E6DDE2] px-2.5 py-0.5 rounded-md">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-[#282329] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#716873] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E6DDE2] flex items-center gap-2 text-xs font-semibold text-[#49283F]">
                    <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                    <span>Active on all client bookings</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Trust & Naira Security Banner */}
      <section className="bg-[#FAF7F4] py-14 border-y border-[#E6DDE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#282329]">The ConsultAPP Satisfaction Guarantee</h4>
                <p className="text-sm text-[#716873] mt-0.5 max-w-xl">
                  If your consultant fails to show up or if the session does not match the agreed deliverables, our dispute desk resolves the issue or refunds your escrow within 24 hours.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="px-5 py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              Explore Consultants
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
