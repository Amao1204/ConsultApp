import React, { useState } from 'react';
import { PageId } from '../types';
import { GENERAL_FAQS } from '../data/mockData';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(GENERAL_FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'booking', label: 'Booking & Sessions' },
    { id: 'consultants', label: 'For Consultants' },
    { id: 'pricing', label: 'Pricing & Escrow' },
    { id: 'execution', label: 'Execution Support' },
  ];

  const filteredFaqs = GENERAL_FAQS.filter((faq) => {
    if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
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

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pt-8 pb-12 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#64748B] max-w-xl mx-auto">
            Everything you need to know about booking consultations, escrow protection, and becoming
            an expert on ConsultAPP.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="relative bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/40 transition-all flex items-center p-2">
            <Search className="w-5 h-5 text-[#2563EB] ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full px-3 py-2 text-sm bg-transparent border-none focus:outline-none placeholder:text-[#94A3B8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#64748B] px-2 hover:text-[#17202A]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#172B4D] text-white shadow-xs'
                  : 'bg-white text-[#64748B] border border-[#E5E7EB] hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FCFCFA] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-base text-[#17202A]">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#172B4D] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F1F5F9] bg-[#FCFCFA]/50 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E5E7EB]">
              <HelpCircle className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
              <p className="text-sm font-semibold text-[#17202A]">No questions found</p>
              <p className="text-xs text-[#64748B] mt-1">
                Try searching for another keyword or check all categories.
              </p>
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-14 bg-[#EFF6FF] rounded-3xl p-8 border border-[#BFDBFE] text-center space-y-3">
          <MessageSquare className="w-6 h-6 text-[#2563EB] mx-auto" />
          <h3 className="text-lg font-bold text-[#172B4D]">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto">
            Our support team and consultant success desk are ready to help with any inquiries.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Contact Support Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
