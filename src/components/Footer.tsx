import React from 'react';
import { PageId } from '../types';
import { Shield, Sparkles, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#172B4D] text-[#FCFCFA] pt-16 pb-12 border-t border-[#243B61]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#243B61]">
          {/* Brand Col (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Consult<span className="text-[#60A5FA]">APP</span>
              </span>
            </button>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Whatever you're figuring out, talk to someone who knows. Connecting ambitious people
              with verified experts to get direct guidance and real solutions.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#CBD5E1]">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#243B61] text-[#93C5FD]">
                <Shield className="w-3 h-3 text-[#60A5FA]" />
                <span>Verified Expertise Guarantee</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#243B61] text-[#FDE68A]">
                <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                <span>Naira (₦) Escrow Protection</span>
              </div>
            </div>
          </div>

          {/* Col 1: EXPLORE */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('explore')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Consultants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('explore')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('how-it-works')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('features')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pricing')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Pricing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: FOR CONSULTANTS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-4">
              For Consultants
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('become-consultant')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Become a Consultant</span>
                  <ArrowUpRight className="w-3 h-3 text-[#60A5FA]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('become-consultant')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Verification Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('how-it-works')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Consultant Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('sign-in')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Consultant Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: BUSINESS & COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-4">
              Business
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('for-businesses')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  For Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('for-businesses')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Business Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pricing')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Advisory
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mt-6 mb-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('faq')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: LEGAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] mb-4">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('privacy')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('terms')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('terms')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
                >
                  Trust & Safety
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 ConsultAPP Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built for thinkers, makers & problem-solvers.</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#93C5FD] hover:text-white transition-colors cursor-pointer font-medium"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
