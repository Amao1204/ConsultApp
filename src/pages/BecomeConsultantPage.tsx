import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Calendar,
  Layers,
  Award,
  Users,
  Clock,
  TrendingUp,
} from 'lucide-react';

interface BecomeConsultantPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const BecomeConsultantPage: React.FC<BecomeConsultantPageProps> = ({
  onNavigate,
  onOpenModal,
}) => {
  // Interactive Earnings Calculator State
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [sessionRate, setSessionRate] = useState(40000); // ₦40,000

  // Calculation: sessions/month = hoursPerWeek * 4; total = sessions * rate * 0.85 (after 15% platform fee)
  const monthlyEarnings = hoursPerWeek * 4 * sessionRate * 0.85;

  const roadmapSteps = [
    {
      step: '01',
      title: 'Apply with Your Track Record',
      description: 'Submit your LinkedIn profile, portfolio, and past client achievements. Tell us what problems you solve.',
    },
    {
      step: '02',
      title: 'Background Verification',
      description: 'Our review desk audits your professional history and confirms your domain competence within 48 hours.',
    },
    {
      step: '03',
      title: 'Design Your Service Packages',
      description: 'Set your session lengths (45m, 90m), define deliverables, and choose your consultation rates in Naira (₦).',
    },
    {
      step: '04',
      title: 'Sync Your Live Calendar',
      description: 'Connect your Google or Outlook calendar so clients can only book slots when you are actually free.',
    },
    {
      step: '05',
      title: 'Conduct High-Impact Calls',
      description: 'Meet ambitious founders and professionals via our secure video rooms. Provide direct, actionable advice.',
    },
    {
      step: '06',
      title: 'Receive Guaranteed Escrow Payouts',
      description: 'Earnings are automatically deposited directly to your Nigerian bank account once calls are completed.',
    },
  ];

  return (
    <div id="become-consultant-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Consultant Network Invitation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Monetize what you already know.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          Share your hard-won expertise with ambitious founders, business owners, and career changers across Africa. Set your own schedule, define your rates, and get paid securely.
        </p>
        <div className="pt-6">
          <button
            onClick={onOpenModal}
            className="px-7 py-3.5 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors cursor-pointer text-sm"
          >
            Apply to Become a Consultant
          </button>
        </div>
      </section>

      {/* Interactive Potential Earnings Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6DDE2] shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Earnings Calculator
            </span>
            <h2 className="text-2xl font-bold text-[#282329]">
              How much could you earn on ConsultAPP?
            </h2>
            <p className="text-xs sm:text-sm text-[#716873]">
              Estimate your monthly earnings based on dedicated advisory hours and session rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold text-[#282329] mb-2">
                  <span>Advisory Hours per Week:</span>
                  <span className="text-[#49283F] font-bold">{hoursPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#49283F] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#716873] mt-1">
                  <span>2 hrs (Part-time)</span>
                  <span>10 hrs</span>
                  <span>20 hrs (Fractional)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold text-[#282329] mb-2">
                  <span>Your Consultation Rate:</span>
                  <span className="text-[#49283F] font-bold">₦{sessionRate.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="150000"
                  step="5000"
                  value={sessionRate}
                  onChange={(e) => setSessionRate(Number(e.target.value))}
                  className="w-full accent-[#49283F] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#716873] mt-1">
                  <span>₦20,000 (Sanity check)</span>
                  <span>₦75,000</span>
                  <span>₦150,000 (Executive)</span>
                </div>
              </div>
            </div>

            {/* Output Display */}
            <div className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#E6DDE2] text-center space-y-3">
              <span className="text-xs font-semibold text-[#716873] uppercase tracking-wider block">
                Estimated Net Take-Home
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#49283F]">
                ₦{Math.round(monthlyEarnings).toLocaleString()}
                <span className="text-sm font-normal text-[#716873] block mt-1">/ month</span>
              </div>
              <p className="text-[11px] text-[#716873] leading-relaxed pt-2 border-t border-[#E6DDE2]">
                Based on ~{hoursPerWeek * 4} sessions per month after platform fee. Payouts processed automatically to your verified bank account via Escrow.
              </p>
              <button
                onClick={onOpenModal}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#49283F] hover:bg-[#3E2135] transition-colors cursor-pointer mt-2"
              >
                Start Advising Clients
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Onboarding Roadmap */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
            The Consultant Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282329]">
            How onboarding works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-2xl border border-[#E6DDE2] shadow-2xs space-y-2.5"
            >
              <span className="text-2xl font-extrabold text-[#49283F] block">
                {step.step}
              </span>
              <h3 className="font-bold text-base text-[#282329]">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-[#FAF7F4] py-16 border-y border-[#E6DDE2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Vetting Criteria
            </span>
            <h2 className="text-2xl font-bold text-[#282329]">
              What we look for in an advisor
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Tangible Domain Track Record',
                desc: '3+ years of verifiable experience executing in your chosen domain with real business outcomes.',
              },
              {
                title: 'Clear Communication Skills',
                desc: 'The ability to diagnose issues rapidly and provide constructive, pragmatic advice without fluff.',
              },
              {
                title: 'Professional Integrity & Reliability',
                desc: 'Punctuality for scheduled sessions, respect for client confidentiality, and proactive follow-through.',
              },
              {
                title: 'Authentic African Market Context',
                desc: 'First-hand insight into the legal, financial, and cultural operating landscape in Nigeria and Africa.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#E6DDE2] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#49283F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#282329]">{item.title}</h4>
                  <p className="text-xs text-[#716873] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
