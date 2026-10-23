import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
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
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#172B4D] text-white p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#93C5FD] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Consultant Application</span>
            </div>
            <h3 className="text-xl font-bold">Monetize Your Expertise</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-[#64748B]">
              Join Africa's top marketplace for vetted consultants. We review credentials within 48 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dapo Adelegan"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dapo@company.com"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">Primary Domain</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none bg-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1">Years of Experience</label>
                <select
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none bg-white"
                >
                  <option value="3-5">3 – 5 Years</option>
                  <option value="6-10">6 – 10 Years</option>
                  <option value="10+">10+ Years (Senior Expert)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17202A] mb-1">
                LinkedIn Profile or Portfolio URL
              </label>
              <input
                type="url"
                required
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#17202A] mb-1">
                What problems do you specialize in solving?
              </label>
              <textarea
                rows={2}
                required
                value={specialtyOverview}
                onChange={(e) => setSpecialtyOverview(e.target.value)}
                placeholder="E.g., I advise e-commerce founders on logistics margin preservation and wholesale distributor terms..."
                className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#64748B]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">Application Received!</h3>
            <p className="text-sm text-[#64748B] max-w-sm mx-auto">
              Thank you, <strong className="text-[#17202A]">{name}</strong>. Our consultant onboarding
              team will review your credentials and reach out within 48 hours to complete verification.
            </p>
            <button
              onClick={onClose}
              className="w-full max-w-xs py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
