import React, { useState } from 'react';
import { Consultant, ConsultantService } from '../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, CreditCard, Sparkles, ArrowRight, Lock } from 'lucide-react';

interface BookingModalProps {
  consultant: Consultant;
  initialService?: ConsultantService;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (details: { serviceTitle: string; date: string; time: string }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  consultant,
  initialService,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [selectedService, setSelectedService] = useState<ConsultantService>(
    initialService || consultant.services[0] || {
      id: 'default',
      title: '1-on-1 Consultation Session',
      duration: '45 mins',
      price: consultant.startingPrice,
      description: 'Direct strategic guidance and problem-solving session.',
      deliverables: ['Live 1-on-1 call', 'Summary notes'],
    }
  );

  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:00 AM');
  const [problemDescription, setProblemDescription] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [step, setStep] = useState<'details' | 'confirmed'>('details');

  if (!isOpen) return null;

  const availableSlots = [
    'Today, 4:00 PM WAT',
    'Tomorrow, 10:00 AM WAT',
    'Tomorrow, 2:30 PM WAT',
    'In 2 Days, 11:00 AM WAT',
    'In 3 Days, 5:00 PM WAT',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) return;
    setStep('confirmed');
    onSuccess({
      serviceTitle: selectedService.title,
      date: selectedDate,
      time: selectedService.duration,
    });
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#321B2C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#E6DDE2] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#49283F] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src={consultant.avatarUrl}
              alt={consultant.name}
              className="w-12 h-12 rounded-xl object-cover border border-[#D9B9C7]/40 shadow-xs"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-bold text-white">{consultant.name}</h3>
                <ShieldCheck className="w-4 h-4 text-[#D9B9C7]" />
              </div>
              <p className="text-xs text-[#D9B9C7]">{consultant.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-2">
                1. Select Service Package
              </label>
              <div className="space-y-2">
                {consultant.services.map((service) => {
                  const isSelected = selectedService.id === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#49283F] bg-[#F1E5EA]/40 ring-1 ring-[#49283F]'
                          : 'border-[#E6DDE2] hover:border-[#D9B9C7] bg-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-[#282329] truncate">
                          {service.title}
                        </div>
                        <div className="text-xs text-[#716873] flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#49283F]" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-bold text-sm text-[#282329]">
                          ₦{service.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Calendar Slot Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-2">
                2. Choose Consultation Time
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableSlots.map((slot) => {
                  const isSelected = selectedDate === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#49283F] bg-[#F1E5EA]/60 text-[#49283F] font-semibold'
                          : 'border-[#E6DDE2] text-[#282329] hover:bg-[#FAF7F4]'
                      }`}
                    >
                      <span className="truncate">{slot}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#49283F] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                3. What are you trying to figure out?
              </label>
              <textarea
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="Briefly describe your challenge, goals, or the specific questions you want to ask..."
                rows={2}
                className="w-full p-3 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Dapo Adeleke"
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                  Email for Calendar Invite
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full p-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
                />
              </div>
            </div>

            {/* Trust and Escrow Notice */}
            <div className="p-3 rounded-xl bg-[#FAF7F4] border border-[#E6DDE2] flex items-start gap-2.5 text-xs text-[#716873]">
              <Lock className="w-4 h-4 text-[#49283F] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#282329]">100% Naira Escrow Protection:</strong> Funds are safely held by ConsultAPP until the consultation call concludes. If the expert is unavailable, you receive an immediate refund.
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#716873] block">Total Investment</span>
                <span className="text-lg font-bold text-[#282329]">
                  ₦{selectedService.price.toLocaleString()}
                </span>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center gap-2 cursor-pointer focus-ring"
              >
                <span>Confirm & Reserve Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#282329]">Consultation Reserved!</h3>
              <p className="text-sm text-[#716873] max-w-sm mx-auto">
                Your session with <strong>{consultant.name}</strong> for{' '}
                <strong>{selectedService.title}</strong> is locked in for <strong>{selectedDate}</strong>.
              </p>
            </div>

            <div className="bg-[#FAF7F4] p-4 rounded-xl border border-[#E6DDE2] text-left text-xs text-[#716873] space-y-1.5">
              <div className="flex justify-between">
                <span>Attendee:</span>
                <strong className="text-[#282329]">{clientName} ({clientEmail})</strong>
              </div>
              <div className="flex justify-between">
                <span>Meeting Link:</span>
                <span className="text-[#49283F] font-medium">Google Meet / ConsultAPP Room (emailed)</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-[#166534] font-semibold">Payment Escrowed · Calendar Invites Dispatched</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] transition-colors cursor-pointer"
            >
              Done & Return to Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
