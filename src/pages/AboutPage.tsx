import React from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  Compass,
  HeartHandshake,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBecomeModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBecomeModal,
}) => {
  const values = [
    {
      title: 'Trust',
      desc: "People should know who they're dealing with. Every consultant is verified for identity, background, and proven track record.",
      icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Clarity',
      desc: 'The experience should never feel confusing. Transparent pricing in Naira, clear deliverables, and no hidden retainer traps.',
      icon: <Compass className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Human Connection',
      desc: 'Technology should make expertise more accessible, not less human. Real conversations with empathetic practitioners.',
      icon: <HeartHandshake className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Action',
      desc: 'Good advice should help people move forward. We bridge the gap between conversations and actual implementation.',
      icon: <Zap className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <div id="about-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Editorial Storytelling Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16 space-y-5">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
          Our Philosophy
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
          We're building a better way to ask for help.
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          People know different things. People face different problems. Sometimes the hardest part
          isn't solving the problem — it's knowing who to ask.
        </p>
      </section>

      {/* Story Narrative Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed">
          <p>
            When you are starting a fashion brand in Lagos, negotiating an executive salary in Abuja,
            budgeting a 1,000-person summit, or fixing an SME cash leak, search engines give you
            generic articles, and social media gives you noise.
          </p>
          <p>
            Traditional consulting firms charge millions of Naira for bloated slide decks that take
            six months to deliver. Meanwhile, brilliant practitioners with the exact answers you need
            are right in your city — yet nearly impossible to reach without awkward personal
            favors.
          </p>
          <div className="p-6 bg-[#FCFCFA] rounded-2xl border-l-4 border-[#2563EB] italic text-[#172B4D] font-medium text-lg">
            "ConsultAPP exists to make that connection easier. Because whatever you're figuring out,
            someone has already solved it."
          </div>
          <p>
            We built ConsultAPP as an open expertise marketplace: a place where anyone with a problem
            can sit across from a trusted human practitioner, get answers in 45 minutes, and work
            together to see the solution through to completion.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#172B4D] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#93C5FD]">
            Our Mission
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-snug">
            To make expertise easier to find, easier to access, and easier to turn into action.
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-lg mx-auto">
            Democratizing access to high-impact advice for builders, creators, founders, and
            individuals throughout Africa.
          </p>
        </div>
      </section>

      {/* Four Values Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">The Values That Guide Us</h2>
          <p className="text-sm text-[#64748B]">
            How we design the platform, vet consultants, and treat our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-[#17202A]">{v.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs space-y-5">
          <h3 className="text-2xl font-bold text-[#17202A]">Join the ConsultAPP Community</h3>
          <p className="text-sm text-[#64748B] max-w-md mx-auto">
            Whether you need clarity on your next move or have hard-earned expertise to share, you
            belong here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('explore')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Find an Expert
            </button>
            <button
              onClick={onOpenBecomeModal}
              className="px-6 py-3 text-sm font-semibold text-[#172B4D] bg-[#FCFCFA] hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer"
            >
              Become a Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
