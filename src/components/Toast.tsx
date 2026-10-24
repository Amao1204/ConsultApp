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
          className="pointer-events-auto bg-white rounded-2xl p-4 shadow-xl border border-[#E6DDE2] flex items-start gap-3 transition-all duration-300 animate-slide-up"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-[#166534]" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#991B1B]" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#49283F]" />}
          </div>
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-sm text-[#282329]">{toast.title}</h5>
            <p className="text-xs text-[#716873] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-[#716873] hover:text-[#282329] p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Dismiss Notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export const Toast = ToastContainer;
