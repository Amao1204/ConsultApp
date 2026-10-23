import React, { useState } from 'react';
import { Consultant, ConsultantService } from '../types';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';

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
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#172B4D] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={consultant.avatarUrl}
              alt={consultant.name}
              className="w-12 h-12 rounded-xl object-cover border-2 border-white/20"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-bold text-white">{consultant.name}</h3>
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              </div>
              <p className="text-xs text-[#93C5FD]">{consultant.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-2">
                1. Select Service Package
              </label>
              <div className="space-y-2">
                {consultant.services.map((svc) => (
                  <div
                    key={svc.id}
                    onClick={() => setSelectedService(svc)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedService.id === svc.id
                        ? 'border-[#2563EB] bg-[#EFF6FF] shadow-xs'
                        : 'border-[#E5E7EB] hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#17202A]">{svc.title}</span>
                      <span className="font-bold text-sm text-[#2563EB]">
                        ₦{svc.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-[#64748B]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#94A3B8]" />
                        {svc.duration}
                      </span>
                      <span>•</span>
                      <span className="line-clamp-1">{svc.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slot Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-2">
                2. Choose Date & Time
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableSlots.map((slot, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedDate(slot)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all flex items-center gap-2 cursor-pointer ${
                      selectedDate === slot
                        ? 'border-[#2563EB] bg-[#2563EB] text-white font-semibold'
                        : 'border-[#E5E7EB] text-[#17202A] hover:bg-slate-50'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Problem Brief */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17202A] mb-1.5">
                3. What are you trying to figure out?
              </label>
              <textarea
                rows={2}
                required
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="E.g., We are launching a new product line next month and need feedback on our pricing and rollout strategy..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#17202A] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Oluwaseun Adeleke"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#17202A] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. seun@company.com"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            {/* Trust & Escrow Guarantee */}
            <div className="p-3 bg-[#FCFCFA] rounded-xl border border-[#E5E7EB] flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#2563EB]" />
                <span>Total Due: <strong className="text-[#17202A]">₦{selectedService.price.toLocaleString()}</strong></span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                Protected by Naira Escrow
              </span>
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#64748B] hover:text-[#17202A]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Confirm & Reserve Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">Consultation Reserved!</h3>
            <p className="text-sm text-[#64748B] max-w-md mx-auto">
              You are booked with <strong className="text-[#17202A]">{consultant.name}</strong> for{' '}
              <strong className="text-[#17202A]">{selectedService.title}</strong> on{' '}
              <strong className="text-[#17202A]">{selectedDate}</strong>.
            </p>

            <div className="bg-[#FCFCFA] p-4 rounded-xl border border-[#E5E7EB] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Consultant:</span>
                <span className="font-semibold text-[#17202A]">{consultant.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Calendar Invitation:</span>
                <span className="font-semibold text-[#17202A]">Dispatched to {clientEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Video Call Link:</span>
                <span className="font-semibold text-[#2563EB]">consultapp.io/room/c-9284</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Amount Reserved:</span>
                <span className="font-semibold text-[#17202A]">₦{selectedService.price.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-md mx-auto py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
