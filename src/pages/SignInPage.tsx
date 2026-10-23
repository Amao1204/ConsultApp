import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowRight, CheckCircle2, ShieldCheck, Lock, Mail } from 'lucide-react';

interface SignInPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onShowToast('Welcome Back!', `Signed in successfully as ${email}`, 'success');
      onNavigate('explore');
    }, 600);
  };

  const handleGoogleMock = () => {
    onShowToast('Google Authentication', 'Connecting with Google Identity Services...', 'info');
    setTimeout(() => {
      onShowToast('Welcome!', 'Signed in with Google account', 'success');
      onNavigate('explore');
    }, 700);
  };

  return (
    <div id="signin-screen" className="min-h-screen bg-[#FCFCFA] flex pt-16">
      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 focus:outline-none mb-4 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#172B4D] flex items-center justify-center text-white font-bold text-base">
                C
              </div>
              <span className="font-bold text-xl text-[#172B4D]">
                Consult<span className="text-[#2563EB]">APP</span>
              </span>
            </button>
            <h1 className="text-3xl font-extrabold text-[#17202A] tracking-tight">Welcome back.</h1>
            <p className="text-sm text-[#64748B]">
              Sign in to manage your consultations, messages, or expert calendar.
            </p>
          </div>

          {/* Social login */}
          <button
            type="button"
            onClick={handleGoogleMock}
            className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-[#E5E7EB] rounded-xl text-xs sm:text-sm font-semibold text-[#17202A] flex items-center justify-center gap-3 transition-colors shadow-2xs cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px bg-[#E5E7EB] flex-1" />
            <span className="text-xs uppercase text-[#94A3B8] font-semibold">OR</span>
            <div className="h-px bg-[#E5E7EB] flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#17202A] mb-1.5">
                Email Address
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

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#17202A]">Password</label>
                <button
                  type="button"
                  onClick={() => onNavigate('forgot-password')}
                  className="text-xs text-[#2563EB] hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
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

            <div className="flex items-center">
              <input
                id="remember-me-checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-[#2563EB] rounded border-[#E5E7EB] focus:ring-[#2563EB]"
              />
              <label htmlFor="remember-me-checkbox" className="ml-2 text-xs text-[#64748B]">
                Keep me signed in for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Bottom toggle */}
          <div className="pt-2 text-center text-xs text-[#64748B]">
            <span>Don't have an account? </span>
            <button
              onClick={() => onNavigate('sign-up')}
              className="text-[#2563EB] font-bold hover:underline cursor-pointer"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Editorial Hero Visual (#35) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#172B4D] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80"
          alt="Consultant advisory"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#172B4D] via-[#172B4D]/50 to-transparent flex flex-col justify-end p-12 text-white">
          <div className="max-w-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD]">
              ConsultAPP Network
            </span>
            <h2 className="text-3xl font-extrabold leading-snug">
              "Whatever you're figuring out, talk to someone who knows."
            </h2>
            <p className="text-sm text-[#CBD5E1]">
              Join over 2,400 founders, creators, and professionals receiving tailored 1-on-1
              guidance from vetted industry leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
