import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Award } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface BecomeConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, specialty: string) => void;
}

export const BecomeConsultantModal: React.FC<BecomeConsultantModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('business');
  const [linkedin, setLinkedin] = useState('');
  const [experienceYears, setExperienceYears] = useState('5');
  const [specialtyOverview, setSpecialtyOverview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccess(name, specialtyOverview);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#321B2C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#E6DDE2] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#49283F] text-white p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#D9B9C7] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D9B9C7]" />
              <span>Consultant Application</span>
            </div>
            <h3 className="text-xl font-bold text-white">Monetize Your Expertise</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-[#716873]">
              Join the curated network of vetted Nigerian & African advisors. Set your own consultation rates in Naira (₦) and get paid securely.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Michael Adeyemi"
                className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="michael@consultant.ng"
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 803 000 0000"
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Primary Domain
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none bg-white cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Years of Experience
                </label>
                <select
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none bg-white cursor-pointer"
                >
                  <option value="3">3+ Years</option>
                  <option value="5">5+ Years</option>
                  <option value="8">8+ Years</option>
                  <option value="12">12+ Years (Executive/Principal)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                LinkedIn Profile or Portfolio URL
              </label>
              <input
                type="url"
                required
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                Brief Overview of What You Help Clients With
              </label>
              <textarea
                required
                value={specialtyOverview}
                onChange={(e) => setSpecialtyOverview(e.target.value)}
                rows={2}
                placeholder="e.g. I help direct-to-consumer fashion brands build reliable factory supply chains and launch collections..."
                className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer focus-ring"
              >
                <span>Submit Profile for Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#282329]">Application Under Review</h4>
            <p className="text-sm text-[#716873] leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{name}</strong>! Our verification team reviews your credentials and professional footprint within 48 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#49283F] text-white text-sm font-semibold hover:bg-[#3E2135] transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
