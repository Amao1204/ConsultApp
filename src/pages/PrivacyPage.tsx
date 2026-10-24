import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div id="privacy-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#716873] hover:text-[#49283F] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DDE2] shadow-sm space-y-8">
          <div className="border-b border-[#E6DDE2] pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Data Protection & NDPR Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-[#282329] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#716873]">Last Updated: January 1, 2026 · Compliant with NDPR & GDPR standards</p>
          </div>

          <div className="max-w-none text-sm leading-relaxed text-[#716873] space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">1. Overview</h2>
              <p>
                At ConsultAPP, we respect your privacy and are committed to protecting personal data
                collected across our platform, in full alignment with the Nigeria Data Protection
                Act (NDPA), Nigeria Data Protection Regulation (NDPR), and international privacy standards.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">2. Information We Collect</h2>
              <p>
                We collect personal information necessary to deliver verified marketplace services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Account details (Full name, work email address, phone number, profile photo)</li>
                <li>Consultant credentials (LinkedIn profile, professional certifications, CV, track record)</li>
                <li>Transactional information (Booking timestamps, service packages, escrow reference IDs)</li>
                <li>Communications (In-app messaging between consultants and clients)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">3. How We Protect Your Data</h2>
              <p>
                All data in transit is encrypted using industry-standard TLS 1.3 encryption. Financial
                credentials, credit cards, and bank account numbers are processed through licensed PCI-DSS Level 1
                payment infrastructure and are never stored in raw text on ConsultAPP application servers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">4. How We Use Information</h2>
              <p>
                We use collected information solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Match clients with verified consultants based on problem intent</li>
                <li>Facilitate calendar scheduling and dispatch secure video room links</li>
                <li>Process Naira escrow authorizations and bank disbursements</li>
                <li>Verify consultant identity and prevent fraudulent impersonation</li>
                <li>We do NOT sell, rent, or monetize your personal data to third-party ad brokers</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">5. Your Data Rights</h2>
              <p>
                Under Nigerian data protection law, you hold the right to request access to your personal data,
                request correction of inaccurate information, or request full account and data deletion at any time
                by contacting privacy@consultapp.ng.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#E6DDE2] flex items-center justify-between text-xs text-[#716873]">
            <span>Data Protection Officer: privacy@consultapp.ng</span>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#49283F] font-semibold hover:underline"
            >
              Contact Data Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
