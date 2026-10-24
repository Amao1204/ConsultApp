import React, { useState } from 'react';
import { PageId } from '../types';
import { Search, Sparkles, CheckCircle2, Lock, Mail, User, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

interface SignUpPageProps {
  onNavigate: (page: PageId) => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [intent, setIntent] = useState<'client' | 'consultant'>('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      onShowToast('Terms Required', 'Please agree to the Terms of Service to continue.', 'error');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onShowToast(
        'Account Created',
        `Welcome to ConsultAPP, ${name}! Your account has been initialized.`,
        'success'
      );
      if (intent === 'consultant') {
        onNavigate('become-consultant');
      } else {
        onNavigate('explore');
      }
    }, 600);
  };

  const handleGoogleMock = () => {
    onShowToast('Google Authentication', 'Connecting with Google Identity Services...', 'info');
    setTimeout(() => {
      onShowToast('Welcome!', 'Account created with Google', 'success');
      onNavigate('explore');
    }, 700);
  };

  return (
    <div id="signup-screen" className="min-h-screen bg-[#F8F4F0] text-[#282329] flex">
      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 focus:outline-none mb-4 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#49283F] flex items-center justify-center text-white font-bold text-lg group-hover:bg-[#321B2C] transition-colors">
                C
              </div>
              <span className="font-bold text-xl text-[#282329]">
                Consult<span className="text-[#49283F]">APP</span>
              </span>
            </button>
            <h1 className="text-3xl font-extrabold text-[#282329] tracking-tight">Create your account.</h1>
            <p className="text-sm text-[#716873]">
              Join thousands of clients and advisors solving real challenges.
            </p>
          </div>

          {/* Role Intent Selector (Segmented buttons) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-2">
              I am joining to:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-xl border border-[#E6DDE2]">
              <button
                type="button"
                onClick={() => setIntent('client')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  intent === 'client'
                    ? 'bg-[#49283F] text-white shadow-2xs'
                    : 'text-[#716873] hover:text-[#282329]'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Find an Expert</span>
              </button>
              <button
                type="button"
                onClick={() => setIntent('consultant')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  intent === 'consultant'
                    ? 'bg-[#49283F] text-white shadow-2xs'
                    : 'text-[#716873] hover:text-[#282329]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Monetize Expertise</span>
              </button>
            </div>
          </div>

          {/* Social login */}
          <button
            type="button"
            onClick={handleGoogleMock}
            className="w-full py-2.5 px-4 bg-white hover:bg-[#FAF7F4] border border-[#E6DDE2] rounded-xl text-xs sm:text-sm font-semibold text-[#282329] flex items-center justify-center gap-3 transition-colors shadow-2xs cursor-pointer"
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
            <div className="flex-1 h-px bg-[#E6DDE2]" />
            <span className="text-[11px] font-semibold text-[#716873] uppercase tracking-wider">
              Or with email
            </span>
            <div className="flex-1 h-px bg-[#E6DDE2]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#716873]" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amara Okafor"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DDE2] bg-white text-sm text-[#282329] focus:border-[#49283F] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#716873]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="amara@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DDE2] bg-white text-sm text-[#282329] focus:border-[#49283F] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#282329] mb-1">
                Create Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#716873]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#E6DDE2] bg-white text-sm text-[#282329] focus:border-[#49283F] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#716873] hover:text-[#282329] p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                required
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="mt-0.5 rounded text-[#49283F] focus:ring-[#49283F] accent-[#49283F]"
              />
              <span className="text-xs text-[#716873] leading-relaxed">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('terms')}
                  className="text-[#49283F] font-semibold underline"
                >
                  Terms of Service
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('privacy')}
                  className="text-[#49283F] font-semibold underline"
                >
                  Privacy Policy
                </button>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <span>Setting up account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Switch to Sign In */}
          <p className="text-center text-xs text-[#716873]">
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('sign-in')}
              className="font-bold text-[#49283F] hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </p>

          <div className="pt-4 border-t border-[#E6DDE2] text-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs text-[#716873] hover:text-[#282329]"
            >
              ← Back to homepage
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Editorial Brand Panel (Desktop) */}
      <div className="hidden lg:flex w-1/2 bg-[#321B2C] text-white p-12 flex-col justify-between relative overflow-hidden border-l border-[#49283F]">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#49283F] text-[#D9B9C7] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Escrow & Identity Safeguards</span>
          </div>
        </div>

        <div className="space-y-6 max-w-lg my-auto">
          <blockquote className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-[#F8F4F0]">
            "ConsultAPP gave me direct access to leaders I thought were completely unreachable. It turned our theoretical strategy into real, measurable revenue."
          </blockquote>
          <div>
            <div className="font-bold text-sm text-[#F8F4F0]">Bolaji Adeleke</div>
            <div className="text-xs text-[#D9B9C7]">Co-Founder, Kemi Organics</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#D9B9C7]/80 pt-8 border-t border-[#49283F]">
          <span>© ConsultAPP Technologies</span>
          <span>Verified African Expertise</span>
        </div>
      </div>
    </div>
  );
};
