import React, { useState } from 'react';
import { PageId } from '../types';
import { Mail, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface ForgotPasswordPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      onShowToast('Reset Email Sent', `We have sent password recovery instructions to ${email}`, 'success');
    }, 500);
  };

  return (
    <div id="forgot-password-screen" className="min-h-screen bg-[#FCFCFA] flex items-center justify-center p-6 pt-24 pb-16">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs space-y-6">
        <button
          onClick={() => onNavigate('sign-in')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#2563EB] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </button>

        {!sent ? (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#17202A] tracking-tight">
                Forgot your password?
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Enter the email associated with your account and we'll help you get back in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1.5">
                  Account Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">Check your email</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              We have dispatched a secure recovery link to <strong className="text-[#17202A]">{email}</strong>.
              Click the link inside to set a new password.
            </p>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => onNavigate('reset-password')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Continue to Set New Password</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setSent(false)}
                className="w-full py-2 text-xs text-[#64748B] hover:text-[#17202A]"
              >
                Didn't receive email? Resend
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
