import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div id="terms-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
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
              Legal Documentation
            </span>
            <h1 className="text-3xl font-extrabold text-[#282329] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-[#716873]">Effective Date: January 1, 2026 · Version 2.2 · Lagos, Nigeria</p>
          </div>

          <div className="max-w-none text-sm leading-relaxed text-[#716873] space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">1. Agreement to Terms</h2>
              <p>
                By accessing or using ConsultAPP (the "Platform"), operated in the Federal Republic
                of Nigeria, you agree to be bound by these Terms of Service and our Privacy Policy.
                If you do not agree to all terms, you may not access or use the Platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">2. Nature of the Marketplace</h2>
              <p>
                ConsultAPP operates an online technology platform connecting independent verified consultants,
                advisors, and strategists ("Consultants") with clients seeking guidance ("Clients").
                Consultants are independent third-party service providers and not employees, agents,
                or partners of ConsultAPP.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">3. Booking, Fees & Escrow Protection</h2>
              <p>
                All consultation fees are quoted and settled in Nigerian Naira (₦). When a Client books
                a session, the payment is processed securely via accredited payment gateways and held
                in escrow. Funds are only remitted to the Consultant following verified completion of
                the scheduled session or milestone deliverable.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">4. Rescheduling & Cancellation Policy</h2>
              <p>
                Sessions may be rescheduled without penalty up to 24 hours prior to the scheduled start time.
                If a Client cancels with at least 24 hours notice, the escrowed payment is credited or refunded in full.
                Cancellations within 24 hours or failure to attend are subject to a 50% late-cancellation fee to compensate the Consultant's reserved calendar block.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">5. Confidentiality & Non-Disclosure</h2>
              <p>
                Both Consultants and Clients agree to treat all business plans, financial projections, proprietary data,
                and session materials exchanged during consultations as strictly confidential, unless explicitly agreed otherwise in writing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#282329]">6. Limitation of Liability</h2>
              <p>
                ConsultAPP provides the platform on an "as-is" basis and makes no guarantees regarding the ultimate financial
                or business success resulting from guidance received. To the maximum extent permitted by Nigerian law,
                our aggregate liability shall not exceed the total fees paid by the user to the platform in the three (3) months preceding the claim.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#E6DDE2] flex items-center justify-between text-xs text-[#716873]">
            <span>Governed by the laws of the Federal Republic of Nigeria</span>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#49283F] font-semibold hover:underline"
            >
              Contact Legal Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
