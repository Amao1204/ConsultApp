import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBecomeModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenBecomeModal,
}) => {
  const tiers = [
    {
      name: 'Quick Advice Session',
      duration: '45 Minutes Live Call',
      idealFor: 'Sanity checks, immediate roadblocks & quick feedback',
      typicalPrice: '₦20,000 – ₦35,000',
      isPopular: false,
      deliverables: [
        'Live 1-on-1 video or audio consultation',
        'Direct answers to your prepared questions',
        'Screen sharing & live asset review',
        'Written summary notes with key takeaways',
        '24 hours follow-up window for quick questions',
      ],
      ctaText: 'Explore Quick Advice Experts',
    },
    {
      name: 'Strategic Deep Dive',
      duration: '90 Minutes + Pre-diagnostic',
      idealFor: 'Full audits, architecture & comprehensive roadmaps',
      typicalPrice: '₦50,000 – ₦90,000',
      isPopular: true,
      deliverables: [
        'Pre-call diagnostic questionnaire & review',
        '90-minute structured whiteboarding & deep session',
        'Competitor & positioning audit framework',
        'Comprehensive written action deck with roadmap',
        '7 days of async follow-up via ConsultAPP messaging',
      ],
      ctaText: 'Book a Deep Dive',
    },
    {
      name: 'Execution Sprint',
      duration: '2 to 4 Weeks Retainer',
      idealFor: 'Hands-on project delivery, brand rollouts & leadership',
      typicalPrice: '₦200,000 – ₦600,000+',
      isPopular: false,
      deliverables: [
        'Structured milestone-based project contract',
        'Weekly alignment steering calls with deliverables',
        'Supervision of agency briefs, designs, or campaigns',
        'Direct WhatsApp / ConsultAPP communication channel',
        'Payment released in escrow upon milestone acceptance',
      ],
      ctaText: 'Inquire About Sprints',
    },
  ];

  return (
    <div id="pricing-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Pricing Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Clear, upfront rates in Nigerian Naira (₦).
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          No hidden fees, no opaque agency markups. Each consultant publishes their exact rates upfront with standardized deliverables and 100% escrow protection.
        </p>
      </section>

      {/* Advisory Service Tiers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                tier.isPopular
                  ? 'bg-white border-[#49283F] shadow-md ring-1 ring-[#49283F]'
                  : 'bg-white border-[#E6DDE2] shadow-2xs hover:border-[#D9B9C7]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#49283F] text-white text-xs font-semibold shadow-xs">
                  Most Popular for Strategy
                </div>
              )}

              <div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#282329]">{tier.name}</h3>
                  <div className="text-xs text-[#716873] flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#49283F]" />
                    <span>{tier.duration}</span>
                  </div>
                </div>

                <div className="my-6 pt-4 border-t border-[#E6DDE2]">
                  <span className="text-[11px] font-semibold text-[#716873] uppercase tracking-wider block">
                    Typical Investment Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#282329] mt-0.5">
                    {tier.typicalPrice}
                  </div>
                  <span className="text-[11px] text-[#716873] block mt-0.5">
                    *Consultants set specific rates individually
                  </span>
                </div>

                <p className="text-xs text-[#716873] leading-relaxed mb-6">
                  {tier.idealFor}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E6DDE2]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#282329] block">
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-[#282329]">
                    {tier.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#49283F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('explore')}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                    tier.isPopular
                      ? 'bg-[#49283F] hover:bg-[#3E2135] text-white shadow-xs'
                      : 'bg-white hover:bg-[#F1E5EA] text-[#49283F] border border-[#E6DDE2]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Escrow Guarantee & Transparency Section */}
      <section className="bg-[#FAF7F4] py-16 border-y border-[#E6DDE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Platform Transparency
            </span>
            <h2 className="text-2xl font-bold text-[#282329]">
              How payment and fees work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E6DDE2] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#282329]">Naira Escrow Holding</h4>
              <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                When you book, payment is charged and held securely by ConsultAPP. It is only disbursed to the consultant after the session has successfully taken place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6DDE2] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#282329]">24h Free Rescheduling</h4>
              <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                Need to reschedule? Shift your consultation to another open slot on the consultant's calendar with at least 24 hours notice at zero penalty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E6DDE2] space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#282329]">Transparent 15% Platform Fee</h4>
              <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                Clients pay the exact published price. ConsultAPP retains a simple 15% fee from the consultant payout to support KYC, escrow, video hosting, and dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
