import React, { useState } from 'react';
import { PageId } from '../types';
import { ChevronDown, Search, HelpCircle, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'consultants' | 'business';
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'booking' | 'consultants' | 'business'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'general',
      question: 'What is ConsultAPP and how does it work?',
      answer:
        'ConsultAPP is an expertise marketplace connecting individuals and organizations with verified Nigerian and African practitioners. You search by the problem you need solved, select a service package, book an open calendar slot, and meet 1-on-1 via secure video or phone.',
    },
    {
      category: 'booking',
      question: 'How does the Naira (₦) Escrow protection work?',
      answer:
        'When you book a consultation, your payment is held securely in escrow by ConsultAPP. The consultant is only paid after your session is completed. If the consultant fails to attend or cancels, you receive an immediate 100% refund.',
    },
    {
      category: 'booking',
      question: 'Can I reschedule or cancel my booked session?',
      answer:
        'Yes. You can reschedule your session to any other open slot on the consultant’s calendar with at least 24 hours notice at zero charge. Cancellations made 24+ hours before the scheduled time receive a full refund.',
    },
    {
      category: 'general',
      question: 'How are consultants verified on ConsultAPP?',
      answer:
        'Every consultant undergoes a rigorous manual vetting process. Our review desk verifies their identity, audits past client track records and case studies, checks references, and verifies their business or professional standing before granting verified status.',
    },
    {
      category: 'consultants',
      question: 'How do I become a verified consultant on ConsultAPP?',
      answer:
        'Click "Become a Consultant" and submit your application with your LinkedIn profile, domain expertise, and typical client outcomes. Our onboarding desk will review your submission and reach out within 48 business hours.',
    },
    {
      category: 'consultants',
      question: 'What are the platform fees for consultants?',
      answer:
        'Listing your profile is completely free. ConsultAPP retains a 15% platform commission on completed bookings to cover secure payment processing, video room infrastructure, client escrow safeguards, and marketing.',
    },
    {
      category: 'business',
      question: 'Can my company hire consultants for ongoing execution sprints?',
      answer:
        'Yes. In addition to 1-on-1 advisory calls, ConsultAPP supports milestone-backed execution contracts for organizations needing fractional CMOs, brand redesigns, supply chain audits, or market expansion roadmaps.',
    },
    {
      category: 'business',
      question: 'Do you offer corporate invoicing and vendor onboarding?',
      answer:
        'Yes. For corporate clients requiring customized Master Service Agreements (MSAs), VAT-compliant invoices, and consolidated billing across multiple departments, contact our Enterprise desk directly.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge Base & Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-xl mx-auto leading-relaxed">
          Find answers about finding experts, booking sessions, Naira escrow protection, and consultant applications.
        </p>

        {/* Search Filter */}
        <div className="max-w-xl mx-auto mt-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#49283F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. 'escrow', 'rescheduling', 'fees')..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#E6DDE2] bg-white text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'General' },
            { id: 'booking', label: 'Booking & Escrow' },
            { id: 'consultants', label: 'For Consultants' },
            { id: 'business', label: 'Corporate & Teams' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#49283F] text-white shadow-2xs'
                  : 'bg-white text-[#716873] hover:text-[#282329] border border-[#E6DDE2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E6DDE2] shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#282329]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#49283F] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#716873] leading-relaxed border-t border-[#E6DDE2]/60 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#E6DDE2] space-y-2">
              <p className="text-sm text-[#716873]">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-semibold text-[#49283F] hover:underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#FAF7F4] border border-[#E6DDE2] text-center space-y-3">
          <h3 className="font-bold text-lg text-[#282329]">Still have a specific question?</h3>
          <p className="text-xs sm:text-sm text-[#716873] max-w-md mx-auto">
            Our support and consultant verification teams are here to help you get the clarity you need.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] transition-colors text-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
