import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div id="terms-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
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
              Legal Agreement
            </span>
            <h1 className="text-3xl font-extrabold text-[#17202A] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-[#94A3B8]">Effective Date: January 1, 2026 • Version 2.1</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-[#475569] space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">1. Agreement to Terms</h2>
              <p>
                By accessing or using ConsultAPP (the "Platform"), operated in the Federal Republic
                of Nigeria, you agree to be bound by these Terms of Service and our Privacy Policy.
                If you do not agree to all terms, you may not access or use the Platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">2. Nature of the Marketplace</h2>
              <p>
                ConsultAPP operates an online technology platform connecting independent consultants,
                advisors, and strategists ("Consultants") with clients seeking guidance ("Clients").
                Consultants are independent third-party service providers and not employees, agents,
                or partners of ConsultAPP.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">3. Booking, Fees & Escrow Protection</h2>
              <p>
                All consultation fees are quoted and settled in Nigerian Naira (₦). When a Client books
                a session, the payment is processed securely via accredited payment gateways and held
                in escrow. Funds are only remitted to the Consultant following verified completion of
                the scheduled session or milestone deliverable.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">4. Cancellation & Refund Policy</h2>
              <p>
                Clients may reschedule or cancel any scheduled session up to 12 hours prior to the
                scheduled start time for a full refund or session credit. If a Consultant fails to
                attend a confirmed consultation ("No-Show"), the Client will automatically receive a
                100% refund.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">5. Consultant Verification & Standards</h2>
              <p>
                While ConsultAPP conducts identity, credential, and background verification of listed
                Consultants, ConsultAPP does not guarantee specific commercial or financial results
                from advice rendered. Advice provided is advisory and informational.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">6. Confidentiality & IP</h2>
              <p>
                Both Consultants and Clients agree to treat all business data, financial records,
                pitch decks, and proprietary strategies exchanged during consultations as strictly
                confidential.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#17202A]">7. Contact & Dispute Resolution</h2>
              <p>
                For questions regarding these Terms or to resolve billing disputes, please contact our
                legal compliance desk at legal@consultapp.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
