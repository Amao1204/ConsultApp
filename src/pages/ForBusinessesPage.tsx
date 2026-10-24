import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Lock,
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
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [teamSize, setTeamSize] = useState('11-50');
  const [advisoryFocus, setAdvisoryFocus] = useState('strategy');
  const [budgetRange, setBudgetRange] = useState('500k-2m');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(
      'Corporate Advisory Inquiry Received',
      `Thank you, ${contactName}. Our Enterprise Partnerships Lead will contact you within 24 hours.`,
      'success'
    );
  };

  return (
    <div id="for-businesses-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>ConsultAPP for Organizations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          High-caliber expertise for your growing company.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-2xl mx-auto leading-relaxed">
          Access fractional executives, specialized market strategists, and execution consultants without the long recruitment cycles or expensive agency retainers.
        </p>
      </section>

      {/* Enterprise Capabilities Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-[#282329]">Fractional Leadership</h3>
            <p className="text-sm text-[#716873] leading-relaxed">
              Bring in fractional CMOs, CFOs, or Brand Directors for 10-20 hours a month to guide your internal execution team.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-[#282329]">Milestone Project Sprints</h3>
            <p className="text-sm text-[#716873] leading-relaxed">
              Structure specific deliverables — market entry feasibility, supply chain redesign, or brand repositioning — with milestone escrow.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center text-[#49283F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-[#282329]">Dedicated Account Desk</h3>
            <p className="text-sm text-[#716873] leading-relaxed">
              Consolidated corporate invoicing, custom master service agreements (MSAs), and dedicated matching support for enterprise teams.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Inquiry Intake Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6DDE2] shadow-sm">
          <div className="mb-8 border-b border-[#E6DDE2] pb-5">
            <h2 className="text-2xl font-bold text-[#282329]">
              Request Corporate Advisory Matching
            </h2>
            <p className="text-xs sm:text-sm text-[#716873] mt-1">
              Tell us about your organization's objective. We curate 2–3 vetted principal consultants tailored to your scope within 24 hours.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Consumer Goods"
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Your Name & Title
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Tunde Balogun (COO)"
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="tunde@apex.ng"
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Company Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none bg-white cursor-pointer"
                  >
                    <option value="1-10">1 - 10 Employees</option>
                    <option value="11-50">11 - 50 Employees</option>
                    <option value="51-200">51 - 200 Employees</option>
                    <option value="200+">200+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Advisory Focus Area
                  </label>
                  <select
                    value={advisoryFocus}
                    onChange={(e) => setAdvisoryFocus(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none bg-white cursor-pointer"
                  >
                    <option value="strategy">Business Growth & Unit Economics</option>
                    <option value="branding">Brand Architecture & Identity</option>
                    <option value="operations">Supply Chain & Operations</option>
                    <option value="executive">Fractional Leadership</option>
                    <option value="market-entry">West African Market Expansion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                    Estimated Budget Bracket (NGN)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none bg-white cursor-pointer"
                  >
                    <option value="under500k">₦250,000 - ₦500,000 (Scoping Sprint)</option>
                    <option value="500k-2m">₦500,000 - ₦2,000,000 (Monthly Fractional)</option>
                    <option value="2m-5m">₦2,000,000 - ₦5,000,000 (Quarterly Retainer)</option>
                    <option value="above5m">₦5,000,000+ (Full Transformation Sprint)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Describe Your Current Challenge or Project Scope
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what milestones or outcomes you need the advisor to accomplish..."
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Corporate Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#282329]">Scope Received</h3>
              <p className="text-sm text-[#716873] max-w-md mx-auto">
                Thank you, <strong>{contactName}</strong>! Our corporate advisory desk is reviewing <strong>{companyName}</strong>'s objectives. We will deliver tailored profiles to <strong>{contactEmail}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#49283F] hover:underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
