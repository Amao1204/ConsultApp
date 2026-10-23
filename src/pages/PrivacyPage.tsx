import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Lock } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div id="privacy-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#2563EB] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs space-y-8">
          <div className="border-b border-[#E5E7EB] pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Data Protection & NDPR Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-[#17202A] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#94A3B8]">Last Updated: January 1, 2026 • Compliant with NDPR & GDPR</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#475569] space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">1. Overview</h2>
              <p>
                At ConsultAPP, we respect your privacy and are committed to protecting personal data
                collected across our platform, in full alignment with the Nigeria Data Protection
                Regulation (NDPR) and international privacy best practices.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">2. Information We Collect</h2>
              <p>
                We collect personal information necessary to deliver marketplace services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Account details (Full name, work email address, phone number, profile photo)</li>
                <li>Consultant credentials (LinkedIn profile, professional certifications, CV, portfolio)</li>
                <li>Transactional information (Booking timestamps, service packages, escrow reference IDs)</li>
                <li>Communications (In-app messaging between consultants and clients)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">3. How We Protect Your Data</h2>
              <p>
                All data in transit is encrypted using industry-standard TLS 1.3 encryption. Financial
                credentials, credit cards, and bank account numbers are handled via PCI-DSS compliant
                payment infrastructure (e.g. Paystack / Flutterwave) and are never stored directly on
                ConsultAPP servers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">4. Data Sharing & Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party advertisers.
                Information is only shared with Consultants you explicitly book or with vetted
                infrastructure partners (video room generation, email notifications, SMS alerts).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">5. Your Data Rights</h2>
              <p>
                Under NDPR, you possess the right to request access to your data, request rectification
                of inaccurate information, or request account erasure by emailing privacy@consultapp.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
