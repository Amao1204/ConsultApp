import React, { useState } from 'react';
import { PageId } from '../types';
import { Lock, CheckCircle2, Check, ArrowRight } from 'lucide-react';

interface ResetPasswordPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasMinLength || !hasLetter || !hasNumber) {
      setError('Please satisfy all password requirements.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setSuccess(true);
    onShowToast('Password Updated', 'Your new password has been saved. Please sign in.', 'success');
  };

  return (
    <div id="reset-password-screen" className="min-h-screen bg-[#FCFCFA] flex items-center justify-center p-6 pt-24 pb-16">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs space-y-6">
        {!success ? (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#17202A] tracking-tight">
                Create a new password.
              </h1>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Your new password must be different from previous passwords.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#17202A] mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-[#E5E7EB] focus:ring-2 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="p-3 bg-[#FCFCFA] rounded-xl border border-[#E5E7EB] space-y-1.5 text-xs">
                <span className="font-semibold text-[#17202A] block mb-1">
                  Password Requirements:
                </span>
                <div className="flex items-center gap-2">
                  <Check
                    className={`w-3.5 h-3.5 ${hasMinLength ? 'text-emerald-600' : 'text-slate-300'}`}
                  />
                  <span className={hasMinLength ? 'text-[#17202A]' : 'text-[#64748B]'}>
                    At least 8 characters long
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className={`w-3.5 h-3.5 ${hasLetter ? 'text-emerald-600' : 'text-slate-300'}`}
                  />
                  <span className={hasLetter ? 'text-[#17202A]' : 'text-[#64748B]'}>
                    Contains at least one letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className={`w-3.5 h-3.5 ${hasNumber ? 'text-emerald-600' : 'text-slate-300'}`}
                  />
                  <span className={hasNumber ? 'text-[#17202A]' : 'text-[#64748B]'}>
                    Contains at least one number
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className={`w-3.5 h-3.5 ${passwordsMatch ? 'text-emerald-600' : 'text-slate-300'}`}
                  />
                  <span className={passwordsMatch ? 'text-[#17202A]' : 'text-[#64748B]'}>
                    Passwords match
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                Reset Password
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">Password updated!</h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Your account security has been verified and your new password is now active.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('sign-in')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Continue to Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
