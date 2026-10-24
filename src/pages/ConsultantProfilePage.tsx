import React, { useState } from 'react';
import { Consultant, ConsultantService, PageId } from '../types';
import { BookingModal } from '../components/BookingModal';
import {
  Star,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  MessageSquare,
  Shield,
  Briefcase,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react';

interface ConsultantProfilePageProps {
  consultant: Consultant;
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ConsultantProfilePage: React.FC<ConsultantProfilePageProps> = ({
  consultant,
  onNavigate,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'services' | 'reviews' | 'portfolio' | 'faq'>('about');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ConsultantService | undefined>(undefined);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleBookService = (service?: ConsultantService) => {
    setSelectedService(service || consultant.services[0]);
    setBookingModalOpen(true);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryModalOpen(false);
    setInquiryMessage('');
    onShowToast(
      'Inquiry Sent',
      `Your preliminary message has been sent to ${consultant.name}. Typical response time is ${consultant.responseTime}.`,
      'success'
    );
  };

  return (
    <div id="consultant-public-profile" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => onNavigate('explore')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#49283F] hover:text-[#321B2C] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to all consultants</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column (2 spans) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DDE2] shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#E6DDE2] shadow-xs bg-[#FAF7F4]">
                    <img
                      src={consultant.avatarUrl}
                      alt={consultant.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {consultant.verified && (
                    <div
                      className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-2xs"
                      title="Verified Identity & Track Record"
                    >
                      <CheckCircle className="w-5 h-5 text-[#49283F] fill-[#F1E5EA]" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#282329] tracking-tight">
                      {consultant.name}
                    </h1>
                    {consultant.badgeText && (
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#F1E5EA] text-[#49283F]">
                        {consultant.badgeText}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-[#49283F] mt-1">
                    {consultant.title}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-xs text-[#716873] flex-wrap">
                    <div className="flex items-center text-[#282329] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706] mr-1" />
                      <span>{consultant.rating.toFixed(1)}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <span>{consultant.reviewCount} client reviews</span>
                    <span aria-hidden="true">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#716873]" />
                      <span>{consultant.location}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <span>{consultant.experienceYears}+ years experience</span>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {consultant.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F1E5EA]/70 text-[#49283F]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stat Bar */}
              <div className="mt-8 pt-6 border-t border-[#E6DDE2] grid grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-xl bg-[#FAF7F4] border border-[#E6DDE2]">
                  <span className="block text-[11px] font-medium text-[#716873] uppercase tracking-wider">
                    Consultations
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#282329]">
                    {consultant.completedConsultations}+
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F4] border border-[#E6DDE2]">
                  <span className="block text-[11px] font-medium text-[#716873] uppercase tracking-wider">
                    Response Speed
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#282329]">
                    {consultant.responseTime}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F4] border border-[#E6DDE2]">
                  <span className="block text-[11px] font-medium text-[#716873] uppercase tracking-wider">
                    Next Available
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#166534]">
                    {consultant.availableToday ? 'Today' : 'This Week'}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Tab Navigation (Segmented button bar) */}
            <div className="flex items-center gap-2 border-b border-[#E6DDE2] pb-2 overflow-x-auto scrollbar-none">
              {[
                { id: 'about', label: 'About & Philosophy' },
                { id: 'services', label: `Services & Rates (${consultant.services.length})` },
                { id: 'reviews', label: `Reviews (${consultant.reviews.length})` },
                { id: 'portfolio', label: `Track Record (${consultant.portfolio.length})` },
                { id: 'faq', label: 'Consultant FAQs' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#49283F] text-white shadow-2xs'
                      : 'text-[#716873] hover:text-[#282329] hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: About */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DDE2] shadow-xs space-y-4">
                  <h3 className="text-lg font-bold text-[#282329]">Background & Experience</h3>
                  <p className="text-sm sm:text-base text-[#716873] leading-relaxed">
                    {consultant.fullAbout}
                  </p>
                </div>

                {/* How I Work */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DDE2] shadow-xs space-y-5">
                  <h3 className="text-lg font-bold text-[#282329]">How I Advise Clients</h3>
                  <div className="space-y-4">
                    {consultant.howIWork.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF7F4] border border-[#E6DDE2]">
                        <div className="w-8 h-8 rounded-lg bg-[#F1E5EA] text-[#49283F] font-bold text-xs flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[#282329]">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-[#716873] mt-1 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Services & Pricing */}
            {activeTab === 'services' && (
              <div className="space-y-4">
                {consultant.services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DDE2] shadow-xs hover:border-[#D9B9C7] transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#282329]">{service.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-[#716873] mt-1">
                          <Clock className="w-3.5 h-3.5 text-[#49283F]" />
                          <span>Duration: {service.duration}</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-2xl font-bold text-[#282329]">
                          ₦{service.price.toLocaleString()}
                        </div>
                        <span className="text-[11px] text-[#716873]">Naira Escrow Protected</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#716873] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-[#E6DDE2] space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#282329]">
                        Deliverables Included:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#282329]">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#49283F] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => handleBookService(service)}
                        className="px-6 py-2.5 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <span>Reserve This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {consultant.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white rounded-3xl p-6 border border-[#E6DDE2] shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-[#282329]">{rev.clientName}</h4>
                        <span className="text-xs text-[#716873]">{rev.clientRole}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-[#D97706]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(rev.rating)
                                  ? 'fill-[#D97706] text-[#D97706]'
                                  : 'text-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-[#716873]">{rev.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#716873] leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                    <div className="text-[11px] font-medium text-[#49283F] bg-[#F1E5EA] px-2.5 py-1 rounded-md inline-block">
                      Service: {rev.serviceBooked}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Portfolio */}
            {activeTab === 'portfolio' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {consultant.portfolio.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-6 border border-[#E6DDE2] shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#49283F] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-base text-[#282329] mt-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-[#716873] mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {item.metrics && (
                      <div className="pt-3 border-t border-[#E6DDE2] text-xs font-semibold text-[#166534]">
                        Outcome: {item.metrics}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 5: FAQ */}
            {activeTab === 'faq' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DDE2] shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-[#282329]">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {consultant.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#FAF7F4] border border-[#E6DDE2] space-y-1.5">
                      <h4 className="font-bold text-sm text-[#282329]">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column / Sticky Booking Card (1 span) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-[#E6DDE2] shadow-md space-y-6">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#716873]">
                  Consultation Rates
                </span>
                <div className="text-3xl font-extrabold text-[#282329] mt-1">
                  ₦{consultant.startingPrice.toLocaleString()}
                  <span className="text-xs font-normal text-[#716873] ml-1.5">/ session</span>
                </div>
                <p className="text-xs text-[#716873] mt-1">
                  Next slot: <strong>{consultant.nextAvailable}</strong>
                </p>
              </div>

              {/* Primary CTA */}
              <button
                id="profile-sticky-book-btn"
                onClick={() => handleBookService()}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer focus-ring"
              >
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Preliminary Message */}
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-[#49283F] bg-white hover:bg-[#F1E5EA] border border-[#E6DDE2] transition-colors cursor-pointer"
              >
                Send Preliminary Question
              </button>

              {/* Safeguard & Trust checklist */}
              <div className="pt-4 border-t border-[#E6DDE2] space-y-2.5 text-xs text-[#716873]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#49283F] shrink-0" />
                  <span>100% Naira Escrow Holding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#49283F] shrink-0" />
                  <span>24-Hour Free Rescheduling Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#49283F] shrink-0" />
                  <span>Encrypted 1-on-1 Video Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        consultant={consultant}
        initialService={selectedService}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={(details) => {
          setBookingModalOpen(false);
          onShowToast(
            'Booking Confirmed!',
            `Your session for "${details.serviceTitle}" is reserved. Check your email for calendar invite.`,
            'success'
          );
        }}
      />

      {/* Preliminary Inquiry Modal */}
      {inquiryModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#321B2C]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setInquiryModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#E6DDE2] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg text-[#282329]">Message {consultant.name}</h3>
            <p className="text-xs text-[#716873]">
              Ask a quick scoping question before booking your consultation session.
            </p>
            <form onSubmit={handleSendInquiry} className="space-y-3">
              <textarea
                required
                rows={3}
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Ask about project compatibility, specific deliverable requests, or timeline..."
                className="w-full p-3 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setInquiryModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#716873] hover:text-[#282329]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] rounded-xl"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
