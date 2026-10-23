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
      description:
        'Start with the problem you are trying to solve. Type your question or browse by domain — whether that is brand strategy, fashion sourcing, career pivoting, or event budgeting.',
      icon: <Search className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      step: '02',
      title: 'Find your expert',
      description:
        'Explore verified consultants based on their real track record, client reviews, price transparency in Naira, and current availability.',
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      step: '03',
      title: 'Choose a service',
      description:
        'Review clear service packages with explicit deliverables — from rapid 45-minute sanity checks to deep-dive strategic audits.',
      icon: <CheckSquare className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      step: '04',
      title: 'Book a session',
      description:
        'Pick a convenient date and time on their live calendar. Your payment is held securely in platform escrow until the consultation is completed.',
      icon: <Calendar className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      step: '05',
      title: 'Get your solution',
      description:
        'Join your live 1-on-1 video call. Talk through the bottleneck, ask questions without hesitation, and leave with immediate clarity and actionable notes.',
      icon: <MessageSquare className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      step: '06',
      title: 'Get it done',
      description:
        'If you need execution support, continue working with your consultant. Agree on milestones, oversee delivery, and turn advice into tangible real-world results.',
      icon: <Layers className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <div id="how-it-works-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Simple, Transparent, Trust-First Process</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
          Getting help shouldn't be complicated.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Tell us what you're trying to figure out. We'll help you find someone who knows how to help,
          connect directly, and make decisive progress.
        </p>
      </section>

      {/* 6-Step Visual Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Vertical center line for desktop */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-[#E5E7EB]" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
                          Step {item.step}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#17202A]">{item.title}</h3>
                      </div>
                      <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Central step badge */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#172B4D] text-white flex items-center justify-center font-extrabold shadow-md shrink-0 border-4 border-[#FCFCFA]">
                    {item.step}
                  </div>

                  {/* Empty spacer for grid alignment on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiation: Consult vs Execute */}
      <section className="bg-white py-16 border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Built for Advice. Built for Action.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-2">
              Traditional advisory stops when you hang up. ConsultAPP lets you bridge the gap between
              strategy and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-[#FCFCFA] border border-[#E5E7EB]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-2">
                1. Guidance Mode
              </span>
              <h3 className="text-xl font-bold text-[#17202A] mb-2">Book a Consultation</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                Ideal when you need a second opinion, technical critique, pitch deck audit, or
                direction from someone who has already walked the path.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>30 to 90-minute live sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Recorded sessions and written action notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Clear flat pricing with no hidden surprises</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#172B4D] text-white border border-[#243B61]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] block mb-2">
                2. Execution Mode
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Hire for Implementation</h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed mb-4">
                Ideal when you don’t have the internal bandwidth or specialized skills to execute the
                recommended solution yourself.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#E2E8F0]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" />
                  <span>Work directly with the consultant you already trust</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" />
                  <span>Escrow milestone releases upon agreed deliverables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" />
                  <span>No agency overhead, long lock-ins, or retainer waste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-3xl p-8 sm:p-10 space-y-4">
          <Lock className="w-8 h-8 text-[#2563EB] mx-auto" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
            Buyer Protection Guarantee
          </h3>
          <p className="text-sm text-[#475569] max-w-lg mx-auto leading-relaxed">
            Every session booked through ConsultAPP is protected. If a consultant fails to show up
            or the session cannot take place due to technical difficulties, your funds are promptly
            rebooked or refunded in full.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore Consultants</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBecomeModal}
              className="px-5 py-2.5 text-sm font-semibold text-[#172B4D] bg-white hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer"
            >
              Become a Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
