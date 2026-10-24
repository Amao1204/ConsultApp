import React from 'react';
import { PageId } from '../types';
import { Shield, Sparkles, ArrowUpRight, Lock, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#321B2C] text-[#F8F4F0] pt-16 pb-12 border-t border-[#49283F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#49283F]">
          {/* Brand Col (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-2.5 text-left focus-ring rounded-lg cursor-pointer group"
              aria-label="ConsultAPP Home"
            >
              <div className="w-9 h-9 rounded-xl bg-[#49283F] flex items-center justify-center text-[#F8F4F0] font-bold text-lg group-hover:bg-[#5E3451] transition-colors">
                C
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#F8F4F0]">
                Consult<span className="text-[#D9B9C7]">APP</span>
              </span>
            </button>
            <p className="text-sm text-[#D9B9C7]/80 leading-relaxed max-w-sm">
              Whatever you're figuring out, talk to someone who knows. Connecting ambitious individuals and growing teams with verified African experts for direct guidance and real solutions.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 text-xs text-[#D9B9C7]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#49283F]/60 border border-[#5E3451] text-[#F8F4F0]">
                <Shield className="w-3.5 h-3.5 text-[#D9B9C7]" />
                <span>Verified Expertise Guarantee</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#49283F]/60 border border-[#5E3451] text-[#F8F4F0]">
                <Lock className="w-3.5 h-3.5 text-[#D9B9C7]" />
                <span>Naira (₦) Escrow Protection</span>
              </div>
            </div>
          </div>

          {/* Col 1: EXPLORE */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9B9C7] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('explore')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  All Consultants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('explore')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Search by Problem
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('how-it-works')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('features')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Features & Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pricing')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Pricing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: FOR CONSULTANTS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9B9C7] mb-4">
              For Experts
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('become-consultant')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Become a Consultant
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pricing')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Earning Potential
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('features')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Escrow Payouts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('for-businesses')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9B9C7] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  About ConsultAPP
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('faq')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('for-businesses')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  For Businesses
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: LEGAL & TRUST */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9B9C7] mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('terms')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('how-it-works')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Escrow Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="text-[#F8F4F0]/80 hover:text-white transition-colors cursor-pointer"
                >
                  Verification Desk
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D9B9C7]/70">
          <div>
            © {new Date().getFullYear()} ConsultAPP Technologies Limited. All rights reserved. Built for African excellence.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLink('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>·</span>
            <button
              onClick={() => handleLink('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>·</span>
            <button
              onClick={() => handleLink('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Support Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
