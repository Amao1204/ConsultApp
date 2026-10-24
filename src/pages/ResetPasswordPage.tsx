import React, { useState } from 'react';
import { PageId } from '../types';
import { Lock, CheckCircle2, Check, ArrowRight, Eye, EyeOff } from 'lucide-react';

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
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasMinLength || !hasLetter || !hasNumber) {
      setError('Please satisfy all password requirements below.');
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
    <div id="reset-password-screen" className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6 pt-24 pb-16 text-[#282329]">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-[#E6DDE2] shadow-sm space-y-6">
        {!success ? (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#282329] tracking-tight">
                Create new password
              </h1>
              <p className="text-xs sm:text-sm text-[#716873]">
                Your new password must be secure and meet the verification rules below.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-[#FEE2E2] border border-[#FECACA] text-[#991B1B] text-xs rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#716873] absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-[#716873] hover:text-[#282329] p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#716873] absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DDE2] text-sm text-[#282329] focus:border-[#49283F] outline-none"
                  />
                </div>
              </div>

              {/* Requirement Checkpoints */}
              <div className="p-3 rounded-xl bg-[#FAF7F4] border border-[#E6DDE2] space-y-1.5 text-xs">
                <div className={`flex items-center gap-2 ${hasMinLength ? 'text-[#166534] font-medium' : 'text-[#716873]'}`}>
                  <Check className={`w-3.5 h-3.5 ${hasMinLength ? 'text-[#166534]' : 'text-slate-300'}`} />
                  <span>At least 8 characters long</span>
                </div>
                <div className={`flex items-center gap-2 ${hasLetter ? 'text-[#166534] font-medium' : 'text-[#716873]'}`}>
                  <Check className={`w-3.5 h-3.5 ${hasLetter ? 'text-[#166534]' : 'text-slate-300'}`} />
                  <span>Contains at least one letter</span>
                </div>
                <div className={`flex items-center gap-2 ${hasNumber ? 'text-[#166534] font-medium' : 'text-[#716873]'}`}>
                  <Check className={`w-3.5 h-3.5 ${hasNumber ? 'text-[#166534]' : 'text-slate-300'}`} />
                  <span>Contains at least one number</span>
                </div>
                <div className={`flex items-center gap-2 ${passwordsMatch ? 'text-[#166534] font-medium' : 'text-[#716873]'}`}>
                  <Check className={`w-3.5 h-3.5 ${passwordsMatch ? 'text-[#166534]' : 'text-slate-300'}`} />
                  <span>Passwords match</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Save New Password & Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#F1E5EA] text-[#49283F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#282329]">Password Successfully Reset</h2>
            <p className="text-xs sm:text-sm text-[#716873] leading-relaxed">
              Your credentials have been securely updated. You can now access your ConsultAPP account.
            </p>
            <button
              onClick={() => onNavigate('sign-in')}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] transition-colors cursor-pointer text-sm"
            >
              Sign In to Your Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
