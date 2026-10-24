import React from 'react';
import { PageId } from '../types';
import {
  Search,
  Users,
  CheckSquare,
  Calendar,
  MessageSquare,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
  Briefcase,
  Sparkles,
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBecomeModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenBecomeModal,
}) => {
  const steps = [
    {
      step: '01',
      title: 'Tell us what you need',
      subtitle: 'Problem-first discovery',
      description:
        'Start with the exact roadblock you are facing. Whether you are wondering how to launch an African fashion label, negotiate vendor contracts for an event in Lagos, or clarify your startup unit economics — type your challenge in plain words.',
      details: [
        'Natural-language search matches proven real-world outcomes',
        'Browse 10+ focused industries from business to lifestyle',
        'No industry jargon required — just state what you want to solve',
      ],
      icon: <Search className="w-6 h-6 text-[#49283F]" />,
    },
    {
      step: '02',
      title: 'Find your expert',
      subtitle: 'Vetted track records & transparent reviews',
      description:
        'Explore verified practitioners based on tangible accomplishments, past client testimonials, response speed, and transparent pricing in Nigerian Naira (₦).',
      details: [
        'Zero synthetic influencers — only practicing professionals',
        'Transparent ratings and detailed client feedback',
        'Filter by immediate same-day availability or budget',
      ],
      icon: <Users className="w-6 h-6 text-[#49283F]" />,
    },
    {
      step: '03',
      title: 'Choose a service package',
      subtitle: 'Explicit deliverables, zero hidden fees',
      description:
        'Consultants offer standardized packages tailored to different depth levels: from rapid 45-minute sanity checks to comprehensive 90-minute strategic audits with worksheets.',
      details: [
        'Clear deliverable lists for every single session tier',
        'Fixed pricing published upfront in Naira (₦)',
        'Pre-call diagnostic questionnaires to maximize call efficiency',
      ],
      icon: <CheckSquare className="w-6 h-6 text-[#49283F]" />,
    },
    {
      step: '04',
      title: 'Book a live calendar slot',
      subtitle: 'Secure payment with Naira Escrow',
      description:
        'Pick a date and time directly on the expert’s integrated calendar. Your consultation fee is safely held in platform escrow until the call has successfully finished.',
      details: [
        'Automated calendar sync (Google Meet & video room links)',
        '100% escrow protection: immediate refund if expert fails to attend',
        'Flexible 24-hour rescheduling policy without penalty',
      ],
      icon: <Calendar className="w-6 h-6 text-[#49283F]" />,
    },
    {
      step: '05',
      title: 'Get your solution',
      subtitle: 'Live 1-on-1 strategy call',
      description:
        'Connect directly via dedicated video or audio call. Ask your questions openly, share your screen or numbers, and walk away with honest critique and strategic direction.',
      details: [
        'Distraction-free high-definition video call environment',
        'Written session summary and action checklist provided',
        'Post-session follow-up window for quick clarifying questions',
      ],
      icon: <MessageSquare className="w-6 h-6 text-[#49283F]" />,
    },
    {
      step: '06',
      title: 'Get it done: Execution Support',
      subtitle: 'From strategic advice to tangible results',
      description:
        'If you require hands-on execution rather than just advice, contract your consultant for multi-week execution sprints with milestone-based delivery.',
      details: [
        'Supervised rollout of brand assets, marketing campaigns, or legal docs',
        'Milestone-locked payments released as deliverables are approved',
        'Keep momentum without the overhead of hiring full-time agency teams',
      ],
      icon: <Layers className="w-6 h-6 text-[#49283F]" />,
    },
  ];

  return (
    <div id="how-it-works-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Transparent, Trust-First Methodology</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Getting expert guidance shouldn't be complicated.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          From first question to finalized execution, ConsultAPP removes the friction, opaque pricing, and uncertainty of hiring trusted advisors in Africa.
        </p>
      </section>

      {/* Structured Editorial Timeline (01 to 06) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-[#E6DDE2] p-6 sm:p-8 shadow-xs hover:border-[#D9B9C7] transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Step badge & icon */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#49283F]">
                      Step {item.step}
                    </span>
                    <span className="block text-xs font-semibold text-[#716873] uppercase tracking-wider mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#282329]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#716873] leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="pt-2 space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282329]">
                        <CheckCircle2 className="w-4 h-4 text-[#49283F] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory vs Execution Section */}
      <section className="py-16 bg-[#FAF7F4] border-y border-[#E6DDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Two Flexible Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#282329] tracking-tight">
              Advisory Sessions vs. Execution Sprints
            </h2>
            <p className="text-sm text-[#716873]">
              Choose whether you just need a sounding board or hands-on implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Advisory */}
            <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#49283F] bg-[#F1E5EA] px-2.5 py-1 rounded-md">
                  Pathway A
                </span>
                <span className="text-xs text-[#716873]">45 to 90 Minutes</span>
              </div>
              <h3 className="text-xl font-bold text-[#282329]">Live 1-on-1 Consultation</h3>
              <p className="text-sm text-[#716873] leading-relaxed">
                Ideal when you have a specific question, need pitch deck feedback, want a contract sanity check, or need rapid direction on a roadblock.
              </p>
              <div className="pt-3 border-t border-[#E6DDE2] text-xs text-[#282329] space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Immediate answers from experienced leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Transparent single-session Naira (₦) fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Actionable notes & summary delivered within 24h</span>
                </div>
              </div>
            </div>

            {/* Execution */}
            <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#49283F] bg-[#F1E5EA] px-2.5 py-1 rounded-md">
                  Pathway B
                </span>
                <span className="text-xs text-[#716873]">2 Weeks to 2 Months</span>
              </div>
              <h3 className="text-xl font-bold text-[#282329]">Milestone Execution Sprint</h3>
              <p className="text-sm text-[#716873] leading-relaxed">
                Ideal when you need the consultant to help build, write, design, or oversee the actual work with your internal team.
              </p>
              <div className="pt-3 border-t border-[#E6DDE2] text-xs text-[#282329] space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Milestone-based deliverable checkpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Escrow-guaranteed progress payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#49283F]" />
                  <span>Weekly alignment and steering reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#282329]">
          Have a challenge you're ready to solve?
        </h2>
        <p className="text-sm sm:text-base text-[#716873] max-w-lg mx-auto">
          Start browsing verified advisors or apply to monetize your own track record on ConsultAPP.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('explore')}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors cursor-pointer"
          >
            Find an Expert
          </button>
          <button
            onClick={onOpenBecomeModal}
            className="px-6 py-3 rounded-xl font-semibold text-[#49283F] bg-white hover:bg-[#F1E5EA] border border-[#E6DDE2] shadow-2xs transition-colors cursor-pointer"
          >
            Become a Consultant
          </button>
        </div>
      </section>
    </div>
  );
};
