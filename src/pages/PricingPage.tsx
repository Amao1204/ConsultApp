import React from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  CreditCard,
  Lock,
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBecomeModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenBecomeModal,
}) => {
  return (
    <div id="pricing-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB]">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Transparent, Fair Marketplace Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight">
            Expert help for different kinds of problems.
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Consultants on ConsultAPP set their own rates based on their specialization and the
            depth of support you require. Every session has a clear flat price in Nigerian Naira (₦)
            with zero surprise bills.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center gap-3 text-xs sm:text-sm text-[#1E40AF]">
          <HelpCircle className="w-5 h-5 shrink-0 text-[#2563EB]" />
          <span>
            <strong>Please note:</strong> The tiers below represent typical benchmark ranges. Exact
            session fees are determined independently by each consultant and displayed clearly on their
            public profile.
          </span>
        </div>

        {/* 3 Benchmark Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Tier 1: QUICK ADVICE */}
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md inline-block mb-2">
                  Fast Decisions
                </span>
                <h3 className="text-2xl font-bold text-[#17202A]">Quick Advice</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Focused questions, sanity checks, and high-impact micro decisions.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-[#64748B] block">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#17202A]">₦10,000</span>
                  <span className="text-xs text-[#64748B]">/ session</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#F1F5F9] text-xs sm:text-sm text-[#475569]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>30 – 45 minute live video consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Single specific dilemma or document review</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Immediate verbal recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Session summary takeaway points</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('explore')}
              className="w-full py-2.5 text-xs font-semibold text-[#172B4D] hover:text-[#2563EB] bg-[#FCFCFA] hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer"
            >
              Browse Quick Advice Experts
            </button>
          </div>

          {/* Tier 2: DEEP DIVE (Featured) */}
          <div className="bg-[#172B4D] text-white rounded-3xl p-8 border-2 border-[#2563EB] shadow-md flex flex-col justify-between space-y-6 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] bg-[#243B61] px-2.5 py-1 rounded-md inline-block mb-2">
                  Comprehensive Strategy
                </span>
                <h3 className="text-2xl font-bold text-white">Deep Dive</h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                  Complex problems requiring thorough diagnostic evaluation and roadmap planning.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-[#93C5FD] block">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₦30,000</span>
                  <span className="text-xs text-[#CBD5E1]">/ session</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#243B61] text-xs sm:text-sm text-[#E2E8F0]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>60 – 90 minute in-depth whiteboard session</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>Pre-call review of your metrics, deck, or pitch</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>Detailed written action blueprint delivered</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>7 days asynchronous Q&A messaging follow-up</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('explore')}
              className="w-full py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Browse Deep Dive Experts
            </button>
          </div>

          {/* Tier 3: ONGOING SUPPORT */}
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md inline-block mb-2">
                  Hands-On Execution
                </span>
                <h3 className="text-2xl font-bold text-[#17202A]">Ongoing Support</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Recurring advisory, milestone sprints, or direct hands-on implementation.
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-[#64748B] block">Scope</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#17202A]">Custom</span>
                  <span className="text-xs text-[#64748B]">/ milestone</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#F1F5F9] text-xs sm:text-sm text-[#475569]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Multi-week execution sprints (e.g., 2–4 weeks)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Hands-on deliverable creation & agency oversight</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Protected escrow milestone payment releases</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Weekly checkpoint calls with the expert</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('for-businesses')}
              className="w-full py-2.5 text-xs font-semibold text-[#172B4D] hover:text-[#2563EB] bg-[#FCFCFA] hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer"
            >
              Learn About Business Sprints
            </button>
          </div>
        </div>

        {/* Payment Security Highlights */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <Lock className="w-6 h-6 text-[#2563EB] mx-auto" />
            <h4 className="font-bold text-sm text-[#17202A]">Protected in Escrow</h4>
            <p className="text-xs text-[#64748B]">
              Funds are only disbursed to the consultant after the session has occurred.
            </p>
          </div>
          <div className="space-y-1">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-sm text-[#17202A]">No-Show Refund</h4>
            <p className="text-xs text-[#64748B]">
              If a consultant cannot make a call, reschedule or claim 100% refund immediately.
            </p>
          </div>
          <div className="space-y-1">
            <Clock className="w-6 h-6 text-[#F59E0B] mx-auto" />
            <h4 className="font-bold text-sm text-[#17202A]">Flexible Rescheduling</h4>
            <p className="text-xs text-[#64748B]">
              Cancel or move your slot up to 12 hours before without penalty.
            </p>
          </div>
        </div>

        {/* Big CTA */}
        <div className="text-center pt-14">
          <button
            onClick={() => onNavigate('explore')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Browse All Consultants & Live Rates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
