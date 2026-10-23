import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Clock,
  Award,
  Globe,
  Users,
  ChevronRight,
} from 'lucide-react';

interface BecomeConsultantPageProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: () => void;
}

export const BecomeConsultantPage: React.FC<BecomeConsultantPageProps> = ({
  onNavigate,
  onOpenModal,
}) => {
  // Interactive Earnings Calculator
  const [sessionsPerWeek, setSessionsPerWeek] = useState(4);
  const [pricePerSession, setPricePerSession] = useState(30000);

  const monthlyEarnings = sessionsPerWeek * pricePerSession * 4;

  const steps = [
    {
      num: '01',
      title: 'Create your profile',
      desc: 'Build your public professional bio highlighting your industry track record and real-world accomplishments.',
    },
    {
      num: '02',
      title: 'Tell us what you know',
      desc: 'Specify your niche problem domains, from brand identity and wardrobe architecture to software unit economics.',
    },
    {
      num: '03',
      title: 'Get verified',
      desc: 'Our team reviews your credentials, LinkedIn history, and references within 48 hours to grant your Verified badge.',
    },
    {
      num: '04',
      title: 'Add your services',
      desc: 'Structure clear packages: 45-min rapid audits, 90-min deep dives, or multi-week execution sprints with fixed rates.',
    },
    {
      num: '05',
      title: 'Set your availability',
      desc: 'Sync your Google or Outlook calendar so clients can only book times when you are truly free.',
    },
    {
      num: '06',
      title: 'Start connecting with clients',
      desc: 'Host seamless video calls, receive instant payouts directly to your Nigerian bank account, and build a lasting reputation.',
    },
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
      title: 'Get discovered',
      desc: 'Put your expertise directly in front of founders, executives, and individuals actively looking for high-impact help.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#2563EB]" />,
      title: 'Build credibility',
      desc: 'Showcase verified client reviews, past case studies, and transparent deliverables in one unified public profile.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#2563EB]" />,
      title: 'Control your time',
      desc: 'You dictate your own schedule. Consult for 2 hours on Saturdays or 15 hours a week — you are in complete control.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#2563EB]" />,
      title: 'Earn from your expertise',
      desc: 'Set your own pricing in Naira. Keep 85% of your earnings with instant weekly payouts directly to your local bank.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
      title: 'Build lasting relationships',
      desc: 'Turn a single 45-minute consultation into long-term execution partnerships, board advisory roles, or retainers.',
    },
  ];

  return (
    <div id="become-consultant-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB]">
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Monetize What You Know</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
          Your expertise can solve someone's problem.
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Turn what you know into meaningful work. Build your professional presence, connect with
          clients and earn from your expertise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Apply as a Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('how-it-works')}
            className="px-5 py-3.5 text-sm font-semibold text-[#172B4D] bg-white hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-all cursor-pointer"
          >
            How It Works
          </button>
        </div>
      </section>

      {/* Interactive Earnings Calculator Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl font-bold text-[#17202A]">Calculate Your Potential Earnings</h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              See how much you could earn by dedicating just a few hours a week to 1-on-1 consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-[#17202A]">Sessions per week:</span>
                  <span className="font-bold text-[#2563EB]">{sessionsPerWeek} sessions</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                  className="w-full accent-[#2563EB]"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-1">
                  <span>1 / wk</span>
                  <span>8 / wk</span>
                  <span>15 / wk</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-[#17202A]">Price per session:</span>
                  <span className="font-bold text-[#2563EB]">
                    ₦{pricePerSession.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="5000"
                  value={pricePerSession}
                  onChange={(e) => setPricePerSession(Number(e.target.value))}
                  className="w-full accent-[#2563EB]"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] mt-1">
                  <span>₦10k</span>
                  <span>₦50k</span>
                  <span>₦100k</span>
                </div>
              </div>
            </div>

            {/* Estimated Output */}
            <div className="bg-[#EFF6FF] rounded-2xl p-6 text-center border border-[#BFDBFE] space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#2563EB] block">
                Estimated Monthly Earnings
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#172B4D]">
                ₦{monthlyEarnings.toLocaleString()}
              </div>
              <p className="text-xs text-[#64748B]">
                Based on {sessionsPerWeek * 4} sessions/month at ₦{pricePerSession.toLocaleString()} each.
              </p>
              <div className="pt-3">
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer"
                >
                  Start Earning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Roadmap */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#E5E7EB]">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
            How to Get Started as a Consultant
          </h2>
          <p className="text-sm text-[#64748B]">
            From application to your first paid consultation in six straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] font-bold text-sm flex items-center justify-center">
                {s.num}
              </div>
              <h3 className="font-bold text-base text-[#17202A]">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultant Benefits Grid */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Why Consult on ConsultAPP?
            </h2>
            <p className="text-sm text-[#64748B]">
              We handle the marketing, scheduling, calendar synchronization, and escrow payments so
              you can focus entirely on delivering brilliant advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FCFCFA] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="font-bold text-base text-[#17202A]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="bg-[#172B4D] text-white rounded-3xl p-8 sm:p-12 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to apply?</h2>
          <p className="text-sm text-[#CBD5E1] max-w-md mx-auto">
            Applications take under 5 minutes. Join our growing community of high-impact Nigerian
            practitioners.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenModal}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Apply as a Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
