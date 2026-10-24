import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Target, HeartHandshake, Zap, ArrowRight, Sparkles, Award } from 'lucide-react';

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
      title: 'Clarity over noise',
      description:
        'General search engines and social feeds drown you in conflicting opinions. We curate proven practitioners who provide direct, tailored clarity for your specific reality.',
      icon: <Target className="w-5 h-5 text-[#49283F]" />,
    },
    {
      title: 'Trust as currency',
      description:
        'In emerging markets, access without trust is dangerous. Every consultant on our platform is identity-verified with vetted credentials and Naira escrow protection.',
      icon: <ShieldCheck className="w-5 h-5 text-[#49283F]" />,
    },
    {
      title: 'Human connection',
      description:
        'AI can synthesize information, but it cannot share lived contextual intuition. A 45-minute conversation with someone who has actually built in Lagos or Nairobi changes everything.',
      icon: <HeartHandshake className="w-5 h-5 text-[#49283F]" />,
    },
    {
      title: 'Actionable execution',
      description:
        'Advice is worthless if it remains theoretical. We prioritize consultants who give you structured action notes and are willing to partner through execution sprints.',
      icon: <Zap className="w-5 h-5 text-[#49283F]" />,
    },
  ];

  return (
    <div id="about-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Editorial Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Purpose & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Whatever you're figuring out,{' '}
          <span className="text-[#49283F]">someone has already navigated it.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          We built ConsultAPP to bridge the gap between ambitious builders across Nigeria and the seasoned practitioners who hold the missing piece of the puzzle.
        </p>
      </section>

      {/* Narrative Section - Editorial Split */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DDE2] shadow-sm space-y-6">
          <div className="max-w-3xl space-y-4 text-base text-[#282329] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#282329]">
              The Problem with Figuring It Out Alone
            </h2>
            <p>
              In Africa's dynamic business environment, making the wrong decision is costly. Whether you're sourcing fabrics for a luxury fashion line, negotiating food supply chain logistics, restructuring corporate governance, or planning an event under intense deadlines — traditional advice is either too theoretical or locked behind multi-million Naira agency retainers.
            </p>
            <p>
              Meanwhile, thousands of elite Nigerian and African operators have already solved these exact bottlenecks. Their insights are invaluable, but until now, access was limited to personal WhatsApp networks and casual introductions.
            </p>
            <p className="font-semibold text-[#49283F]">
              ConsultAPP democratizes access to this expertise. We make booking a verified expert as seamless and transparent as hailing a ride.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282329]">
            The values that drive ConsultAPP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl border border-[#E6DDE2] shadow-2xs space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
                {v.icon}
              </div>
              <h3 className="font-bold text-lg text-[#282329]">{v.title}</h3>
              <p className="text-sm text-[#716873] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#321B2C] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold">Join the Expertise Movement</h2>
          <p className="text-sm sm:text-base text-[#D9B9C7] max-w-lg mx-auto">
            Whether you need actionable guidance today or have hard-won expertise to share with the continent, there's a place for you on ConsultAPP.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('explore')}
              className="px-6 py-3 rounded-xl font-semibold text-[#321B2C] bg-[#F8F4F0] hover:bg-white transition-colors cursor-pointer"
            >
              Explore Consultants
            </button>
            <button
              onClick={onOpenBecomeModal}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-transparent hover:bg-white/10 border border-[#D9B9C7]/40 transition-colors cursor-pointer"
            >
              Apply as an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
