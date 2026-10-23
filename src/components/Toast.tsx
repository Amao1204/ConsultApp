import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export type { ToastMessage };

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white rounded-2xl p-4 shadow-xl border border-[#E5E7EB] flex items-start gap-3 transition-all duration-300 animate-slide-up"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-600" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#2563EB]" />}
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-sm text-[#17202A]">{toast.title}</h5>
            <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#94A3B8] hover:text-[#17202A] p-1 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export const Toast = ToastContainer;
