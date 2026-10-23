import React from 'react';
import { PageId } from '../types';
import {
  Compass,
  Search,
  UserCheck,
  CreditCard,
  Calendar,
  Clock,
  MessageSquare,
  ShieldCheck,
  Star,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Compass className="w-6 h-6 text-[#2563EB]" />,
      title: 'Expert Discovery',
      badge: 'Discovery',
      description:
        'Find professionals by category, sub-specialty, industry experience, and proven track record across Nigeria and the diaspora.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs space-y-1.5">
          <div className="flex items-center justify-between font-semibold text-[#17202A]">
            <span>Filter: Brand Strategy</span>
            <span className="text-[#2563EB]">142 active experts</span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[10px]">
              E-commerce
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[10px]">
              FinTech
            </span>
            <span className="px-2 py-0.5 rounded bg-white border border-[#E5E7EB] text-[10px]">
              DTC Packaging
            </span>
          </div>
        </div>
      ),
    },
    {
      icon: <Search className="w-6 h-6 text-[#2563EB]" />,
      title: 'Smart Search',
      badge: 'Natural Language',
      description:
        "Describe what you're trying to solve in plain English, and ConsultAPP automatically maps your request to the most relevant practitioners.",
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs">
          <span className="text-[#94A3B8] italic block mb-1">"I need help planning an event"</span>
          <div className="flex items-center gap-1.5 text-[#2563EB] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Suggested: Corporate Production Strategist</span>
          </div>
        </div>
      ),
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#2563EB]" />,
      title: 'Consultant Profiles',
      badge: 'Transparency',
      description:
        'Understand exactly who you are booking before committing: past client results, verified credentials, sample deliverables, and ratings.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#17202A]">Michael Adeyemi</span>
            <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">
              Verified
            </span>
          </div>
          <span className="text-[#64748B] block text-[11px]">11 Yrs Exp • 340 Consultations</span>
        </div>
      ),
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#2563EB]" />,
      title: 'Transparent Pricing',
      badge: 'No Surprises',
      description:
        'Know what a consultation costs up front in Nigerian Naira (₦). No surprise hourly billing or vague agency retainers.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] flex items-center justify-between text-xs">
          <span className="text-[#64748B]">Strategy Audit</span>
          <span className="font-bold text-[#17202A] text-sm">₦35,000 / flat</span>
        </div>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-[#2563EB]" />,
      title: 'Live Availability',
      badge: 'Instant Scheduling',
      description:
        'See when consultants are open. Book a same-day urgent slot or schedule a future working session in seconds.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700 font-medium">Available today at 3:00 PM WAT</span>
        </div>
      ),
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#2563EB]" />,
      title: 'Direct Booking',
      badge: 'Zero Friction',
      description:
        'Schedule consultations without back-and-forth emails. Calendar invites and video room links generate automatically.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs flex justify-between items-center">
          <span className="font-medium text-[#17202A]">consultapp.io/room/c-92</span>
          <span className="text-[10px] bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded">
            Google Meet / Zoom
          </span>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#2563EB]" />,
      title: 'Direct Messaging',
      badge: 'Collaboration',
      description:
        'Communicate with your consultant before and after your session. Share brief documents, links, and questions seamlessly.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs space-y-1">
          <div className="bg-white p-2 rounded-lg border border-[#E5E7EB] text-[#475569]">
            "Here is the draft pitch deck we discussed on the call."
          </div>
        </div>
      ),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
      title: 'Secure Payments & Escrow',
      badge: 'Protected',
      description:
        'Make payments via cards, USSD, or bank transfer in Naira. Funds remain in escrow until session completion.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs flex items-center justify-between">
          <span className="text-emerald-700 font-medium">Escrow Protected</span>
          <span className="text-[#64748B]">Paystack / Flutterwave</span>
        </div>
      ),
    },
    {
      icon: <Star className="w-6 h-6 text-[#2563EB]" />,
      title: 'Verified Reviews',
      badge: 'Accountability',
      description:
        'Only verified clients who paid for and attended a session can leave feedback, guaranteeing honest testimonials.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs space-y-1">
          <div className="flex items-center text-[#F59E0B] font-bold">
            <span>★★★★★ 5.0</span>
            <span className="text-[#64748B] font-normal ml-2 text-[10px]">• Verified Client</span>
          </div>
        </div>
      ),
    },
    {
      icon: <Layers className="w-6 h-6 text-[#2563EB]" />,
      title: 'Execution Support',
      badge: 'Action-Oriented',
      description:
        'Continue working with consultants when the solution requires implementation — from brand sprints to operational rollouts.',
      visualMockup: (
        <div className="bg-[#FCFCFA] p-3 rounded-xl border border-[#E5E7EB] text-xs flex items-center justify-between">
          <span className="font-semibold text-[#17202A]">Execution Sprint: Milestone 1/3</span>
          <span className="text-[#2563EB] font-bold">Active</span>
        </div>
      ),
    },
  ];

  return (
    <div id="features-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
            Platform Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight">
            Everything you need to get expert help.
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Designed specifically to eliminate the friction, opacity, and hesitation of finding
            world-class professional guidance.
          </p>
        </div>

        {/* 10 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FCFCFA] border border-[#E5E7EB] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#17202A]">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
              </div>

              {/* Visual mini-mockup */}
              <div className="mt-5 pt-4 border-t border-[#F8FAFC]">
                {item.visualMockup}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Strip */}
        <div className="mt-16 bg-[#172B4D] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to test the experience?</h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-lg mx-auto">
            Discover verified Nigerian specialists who can answer your burning questions today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore All Consultants</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
