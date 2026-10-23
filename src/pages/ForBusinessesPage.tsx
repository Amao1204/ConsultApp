import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Building2,
  Briefcase,
  Target,
  Palette,
  Megaphone,
  TrendingUp,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
} from 'lucide-react';

interface ForBusinessesPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ForBusinessesPage: React.FC<ForBusinessesPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [teamSize, setTeamSize] = useState('10-50');
  const [needDescription, setNeedDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(
      'Business Inquiry Received',
      `Thank you. Our enterprise advisory desk will contact ${workEmail} within 24 hours with curated consultant proposals.`,
      'success'
    );
  };

  const useCases = [
    {
      title: 'Corporate Strategy & Governance',
      desc: 'Bring in seasoned board advisors and former executives for scenario planning, restructuring, and commercial expansion.',
      icon: <Target className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Brand Positioning & Identity',
      desc: 'Revitalize enterprise brand architectures, oversee creative agencies, and ensure market resonance.',
      icon: <Palette className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'High-Impact Performance Marketing',
      desc: 'Audit ad budgets, optimize CAC-to-LTV ratios, and deploy direct WhatsApp & omnichannel conversion funnels.',
      icon: <Megaphone className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Go-To-Market & Revenue Operations',
      desc: 'Structure corporate sales compensation, train B2B outbound teams, and close pilot enterprise accounts.',
      icon: <TrendingUp className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Flagship Corporate Summits & Events',
      desc: 'Avoid costly production blunders, negotiate hall and A/V contracts, and execute flawless annual general meetings.',
      icon: <CalendarCheck className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Specialized Fractional Talent',
      desc: 'Engage fractional CFOs, fractional CMOs, and regulatory compliance strategists on monthly execution sprints.',
      icon: <Briefcase className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <div id="for-businesses-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB]">
          <Building2 className="w-4 h-4" />
          <span>ConsultAPP for Business & Enterprise</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
          Expertise when your team needs it.
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Bring in experienced professionals for focused guidance, strategic support or execution
          without committing to a costly full-time hire or long agency retainers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={() => onNavigate('explore')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Browse Business Consultants</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#enterprise-form"
            className="px-5 py-3.5 text-sm font-semibold text-[#172B4D] bg-white hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-all cursor-pointer"
          >
            Request Corporate Advisory
          </a>
        </div>
      </section>

      {/* Why Companies Choose ConsultAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
              Flexibility
            </span>
            <h3 className="text-lg font-bold text-[#17202A] mb-2">Zero Long-Term Headcount</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Solve pressing operational choke points without incurring ₦15M+ annual executive salary
              commitments or severance obligations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
              Speed
            </span>
            <h3 className="text-lg font-bold text-[#17202A] mb-2">Book Same-Week Sessions</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Traditional executive search takes 4 months. On ConsultAPP, your executive team can be in
              a room with a domain authority by tomorrow afternoon.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
              Accountability
            </span>
            <h3 className="text-lg font-bold text-[#17202A] mb-2">Milestone Escrow Billing</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Pay via corporate invoice or card in Naira. Funds remain securely held until your
              internal stakeholders sign off on deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
            Strategic Support Across Core Functions
          </h2>
          <p className="text-sm text-[#64748B]">
            From SME scale-ups to established corporate enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                {uc.icon}
              </div>
              <h3 className="font-bold text-base text-[#17202A]">{uc.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Request Form */}
      <section id="enterprise-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl font-bold text-[#17202A]">Request Tailored Enterprise Advisory</h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Tell us your company's objective. We will match you with 2–3 vetted specialists suited
              to your budget and timeline.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#17202A] mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Sterling Capital Ltd"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17202A] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="director@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">Team Size</label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none bg-white"
                >
                  <option value="1-10">1 – 10 Employees (Early Startup)</option>
                  <option value="10-50">10 – 50 Employees (Growth Scale-up)</option>
                  <option value="50-200">50 – 200 Employees (Mid-Market)</option>
                  <option value="200+">200+ Employees (Enterprise / Conglomerate)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">
                  What challenge does your company need expert assistance with?
                </label>
                <textarea
                  rows={3}
                  required
                  value={needDescription}
                  onChange={(e) => setNeedDescription(e.target.value)}
                  placeholder="e.g. We are restructuring our distribution terms and need an experienced FMCG supply-chain strategist for a 2-week advisory sprint..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Submit Corporate Advisory Request
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17202A]">Inquiry Submitted</h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                We have received the inquiry from <strong>{companyName}</strong>. Our enterprise
                team will email you shortly.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
