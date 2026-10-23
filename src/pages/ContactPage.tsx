import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, MessageSquare, Phone, MapPin, CheckCircle2, Clock, Send, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('General enquiries');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const reasons = [
    'General enquiries',
    'Consultant support',
    'Business enquiries',
    'Technical support',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(
      'Message Dispatched',
      `Thank you, ${name}. Your message has been routed to our ${reason} team. We will respond to ${email} within 24 hours.`,
      'success'
    );
  };

  return (
    <div id="contact-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pt-8 pb-14 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight">
            Have a question? Let's talk.
          </h1>
          <p className="text-base text-[#64748B]">
            Whether you are booking your first session, applying to consult, or exploring enterprise
            advisory, our support team is on standby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#17202A] mb-1">Direct Channels</h3>
                <p className="text-xs text-[#64748B]">
                  Reach out through whichever medium is most convenient for you.
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#475569]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17202A] block">Email Us</span>
                    <a
                      href="mailto:support@consultapp.io"
                      className="text-xs text-[#2563EB] hover:underline"
                    >
                      support@consultapp.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17202A] block">Phone & WhatsApp</span>
                    <span className="text-xs text-[#64748B]">+234 (0) 800-CONSULT</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17202A] block">Physical Office</span>
                    <span className="text-xs text-[#64748B] leading-relaxed">
                      Victoria Island, Lagos, Nigeria
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#17202A] block">Support Hours</span>
                    <span className="text-xs text-[#64748B]">
                      Monday – Saturday: 8:00 AM – 8:00 PM WAT
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FCFCFA] rounded-2xl border border-[#E5E7EB] text-xs text-[#64748B] space-y-1">
                <span className="font-semibold text-[#17202A] block">Urgent Consultation Issue?</span>
                <p>
                  If you have an active session starting in the next 30 minutes, mention your booking ID
                  in the subject for priority routing.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E7EB] shadow-xs">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adebayo@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Reason for contacting */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-2">
                      Reason for Contacting
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {reasons.map((r) => (
                        <button
                          type="button"
                          key={r}
                          onClick={() => setReason(r)}
                          className={`p-2.5 text-xs font-medium rounded-xl text-left border transition-all cursor-pointer ${
                            reason === r
                              ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-bold'
                              : 'border-[#E5E7EB] bg-white text-[#475569] hover:bg-slate-50'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17202A]">Message Received!</h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you for contacting ConsultAPP. Our team has received your inquiry and will
                    follow up directly at <strong className="text-[#17202A]">{email}</strong> within
                    24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] rounded-xl hover:bg-[#DBEAFE] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
