import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

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
  const [department, setDepartment] = useState('support');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(
      'Message Received',
      `Thank you, ${name}. Our ${department} team will respond to ${email} within 4 hours.`,
      'success'
    );
  };

  return (
    <div id="contact-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F] mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Communications Desk</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#282329] tracking-tight leading-tight">
          How can we help you?
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#716873] max-w-xl mx-auto leading-relaxed">
          Whether you need support with an active consultation, have questions about verification, or want to explore corporate advisory — we are here.
        </p>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#E6DDE2] shadow-xs space-y-6">
              <h3 className="font-bold text-xl text-[#282329]">Direct Contact Channels</h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#716873]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#282329]">Email Support</span>
                    <a href="mailto:support@consultapp.ng" className="text-[#49283F] hover:underline">
                      support@consultapp.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#282329]">Telephone & WhatsApp</span>
                    <span>+234 (0) 1 888 4590 / +234 812 000 7890</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#282329]">Lagos Operations Office</span>
                    <span>Level 4, Heritage Place, 21 Lugard Avenue, Ikoyi, Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-[#282329]">Operating Hours</span>
                    <span>Monday – Friday: 8:00 AM – 7:00 PM WAT</span>
                    <span className="block text-[#166534] font-medium mt-0.5">Escrow & dispute line monitored 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF7F4] border border-[#E6DDE2] flex items-start gap-3 text-xs text-[#716873]">
              <ShieldCheck className="w-5 h-5 text-[#49283F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#282329]">Escrow Protection Promise:</strong> If you are reaching out regarding an active booking dispute or technical failure, our dedicated resolution team prioritizes your ticket within 2 hours.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6DDE2] shadow-sm">
              <h3 className="text-xl font-bold text-[#282329] mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#716873] mb-6">
                Fill in the details below and your inquiry will be routed to the appropriate specialist.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Femi Alabi"
                        className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="femi@example.com"
                        className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none bg-white cursor-pointer"
                      >
                        <option value="General Support">General Client Support</option>
                        <option value="Escrow & Payments">Escrow & Billing Assistance</option>
                        <option value="Consultant Verification">Consultant Verification Desk</option>
                        <option value="Corporate Advisory">Corporate Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Question about upcoming booking"
                        className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please include relevant booking details or questions so we can assist promptly..."
                      className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#282329]">Message Transmitted</h4>
                  <p className="text-sm text-[#716873] max-w-sm mx-auto">
                    Thank you, <strong>{name}</strong>! Your inquiry regarding "{subject}" has been delivered to our {department} team. A specialist will reply to <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#49283F] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
