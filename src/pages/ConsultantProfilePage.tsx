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
  Award,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
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
    <div id="consultant-public-profile" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => onNavigate('explore')}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
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
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100">
                    <img
                      src={consultant.avatarUrl}
                      alt={consultant.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {consultant.verified && (
                    <div
                      className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-xs"
                      title="Verified Identity and Background"
                    >
                      <CheckCircle className="w-6 h-6 text-[#2563EB] fill-[#EFF6FF]" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#17202A] tracking-tight">
                      {consultant.name}
                    </h1>
                    {consultant.badgeText && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                        {consultant.badgeText}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-[#2563EB] mt-1">
                    {consultant.title}
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 mt-3 flex-wrap text-xs sm:text-sm text-[#64748B]">
                    <div className="flex items-center text-[#F59E0B] font-semibold">
                      <Star className="w-4 h-4 fill-[#F59E0B] mr-1" />
                      <span>{consultant.rating.toFixed(1)}</span>
                      <span className="text-[#64748B] font-normal ml-1">
                        ({consultant.reviewCount} client reviews)
                      </span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>Responds {consultant.responseTime}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span>{consultant.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats counter strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#F1F5F9] text-center">
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-[#17202A]">
                    {consultant.experienceYears}+ Yrs
                  </span>
                  <span className="text-xs text-[#64748B]">Experience</span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-[#17202A]">
                    {consultant.completedConsultations}+
                  </span>
                  <span className="text-xs text-[#64748B]">Sessions Delivered</span>
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-emerald-600">
                    100%
                  </span>
                  <span className="text-xs text-[#64748B]">Completion Rate</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-2 border-b border-[#E5E7EB] pb-2 overflow-x-auto">
              {(
                [
                  { id: 'about', label: 'About & Background' },
                  { id: 'services', label: 'Services & Rates' },
                  { id: 'reviews', label: `Reviews (${consultant.reviews.length})` },
                  { id: 'portfolio', label: 'Case Studies' },
                  { id: 'faq', label: 'FAQ' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#172B4D] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#17202A] hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab: About & Background */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB]">
                  <h3 className="text-lg font-bold text-[#17202A] mb-3">About Me</h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed whitespace-pre-line">
                    {consultant.fullAbout}
                  </p>
                </div>

                {/* Expertise Specialties */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB]">
                  <h3 className="text-lg font-bold text-[#17202A] mb-3">Core Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* How I Work Section */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB]">
                  <h3 className="text-lg font-bold text-[#17202A] mb-4">How I Work with Clients</h3>
                  <div className="space-y-4">
                    {consultant.howIWork.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#17202A]">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Services & Rates */}
            {activeTab === 'services' && (
              <div className="space-y-4">
                {consultant.services.map((svc) => (
                  <div
                    key={svc.id}
                    className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-[#17202A]">{svc.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-[#64748B] mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                            {svc.duration}
                          </span>
                          <span>•</span>
                          <span>1-on-1 Interactive Video Session</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-2xl font-bold text-[#17202A]">
                          ₦{svc.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#64748B] block">per session</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#475569]">{svc.description}</p>

                    <div className="bg-[#FCFCFA] p-4 rounded-xl border border-[#E5E7EB]">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#17202A] mb-2">
                        What you get:
                      </h5>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#475569]">
                        {svc.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => handleBookService(svc)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Book This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#17202A]">Verified Client Feedback</h3>
                    <p className="text-xs text-[#64748B]">
                      Reviews can only be submitted following a completed consultation session.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#FFF7E6] text-[#F59E0B] px-3 py-1.5 rounded-xl font-bold text-base">
                    <Star className="w-4 h-4 fill-[#F59E0B]" />
                    <span>{consultant.rating.toFixed(1)}</span>
                  </div>
                </div>

                {consultant.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white rounded-2xl p-6 border border-[#E5E7EB] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm text-[#17202A]">{rev.clientName}</h4>
                        <p className="text-xs text-[#64748B]">{rev.clientRole}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-[#F59E0B]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(rev.rating)
                                  ? 'fill-[#F59E0B]'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-[#94A3B8]">{rev.date}</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed italic">
                      "{rev.comment}"
                    </p>

                    <div className="text-[11px] text-[#64748B] bg-[#FCFCFA] px-2.5 py-1 rounded inline-block border border-[#E5E7EB]">
                      Consultation: <strong className="text-[#17202A]">{rev.serviceBooked}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Portfolio & Case Studies */}
            {activeTab === 'portfolio' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {consultant.portfolio.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 border border-[#E5E7EB] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      {item.metrics && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {item.metrics}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-base text-[#17202A]">{item.title}</h4>
                    <p className="text-sm text-[#475569]">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: FAQ */}
            {activeTab === 'faq' && (
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] space-y-4">
                <h3 className="text-lg font-bold text-[#17202A]">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {consultant.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FCFCFA] border border-[#E5E7EB]">
                      <h4 className="font-semibold text-sm text-[#17202A] flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#2563EB]" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-2 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Booking Action Card (1 span) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#64748B] block">Starting from</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-[#17202A]">
                    ₦{consultant.startingPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#64748B]">/ consultation</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#EFF6FF] rounded-2xl border border-[#BFDBFE] flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#2563EB] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-[#172B4D] block">Next Available Slot</span>
                  <span className="text-xs text-[#2563EB] font-medium">{consultant.nextAvailable}</span>
                </div>
              </div>

              {/* Main CTAs */}
              <div className="space-y-2.5">
                <button
                  id="profile-book-btn"
                  onClick={() => handleBookService()}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>

                <button
                  id="profile-message-btn"
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full py-2.5 px-4 text-sm font-medium text-[#17202A] hover:text-[#2563EB] bg-[#FCFCFA] hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#64748B]" />
                  <span>Sign in to message</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-[#F1F5F9] space-y-2.5 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#2563EB]" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Free cancellation up to 12 hours prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                  <span>Payment held in Escrow until completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <BookingModal
          consultant={consultant}
          initialService={selectedService}
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          onSuccess={(details) => {
            onShowToast(
              'Booking Successful!',
              `Your consultation for "${details.serviceTitle}" with ${consultant.name} has been booked for ${details.date}.`,
              'success'
            );
          }}
        />
      )}

      {/* Inquiry Message Modal */}
      {inquiryModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setInquiryModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-2xl p-6 border border-[#E5E7EB] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <h3 className="font-bold text-base text-[#17202A]">Message {consultant.name}</h3>
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="text-[#64748B] hover:text-[#17202A]"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#64748B]">
              Ask a question or provide context about your problem before booking.
            </p>
            <form onSubmit={handleSendInquiry} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#17202A] mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="Hi Michael, I have a quick question regarding whether my fashion brand launch is suitable for your Brand Clarification session..."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setInquiryModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#64748B]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl"
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
