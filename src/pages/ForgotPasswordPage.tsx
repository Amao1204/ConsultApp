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
    <div id="forgot-password-screen" className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6 pt-24 pb-16">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E6DDE2] shadow-sm space-y-6">
        <button
          onClick={() => onNavigate('sign-in')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#716873] hover:text-[#49283F] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </button>

        {!sent ? (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#282329] tracking-tight">
                Reset your password
              </h1>
              <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
                Enter the email address associated with your ConsultAPP account and we'll transmit a secure recovery link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1.5">
                  Account Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#716873] absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span>Transmitting link...</span>
                ) : (
                  <>
                    <span>Send Recovery Link</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#282329]">Recovery Link Transmitted</h2>
            <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
              We have sent a password reset token to <strong>{email}</strong>. Please inspect your inbox and spam folder.
            </p>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onNavigate('reset-password')}
                className="w-full py-2.5 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] text-xs"
              >
                Proceed to Reset Screen (Demo)
              </button>
              <button
                onClick={() => setSent(false)}
                className="text-xs text-[#716873] hover:underline"
              >
                Didn't receive it? Try another address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
