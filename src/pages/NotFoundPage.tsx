import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Search, Compass, Shield } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div id="not-found-page" className="min-h-screen pt-28 pb-20 bg-[#F8F4F0] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] text-[#49283F] text-xs font-semibold border border-[#E6DDE2]">
          <Compass className="w-3.5 h-3.5 text-[#49283F]" />
          <span>Error 404 · Destination Not Found</span>
        </div>

        {/* Large editorial 404 display */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-[#49283F] tracking-tight leading-none font-serif sm:font-sans">
          404
        </h1>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282329] tracking-tight">
            We couldn't find the page you're figuring out.
          </h2>
          <p className="text-base text-[#716873] leading-relaxed max-w-md mx-auto">
            The link you followed may have moved or no longer exists. Let's get you back to where verified Nigerian and African experts are ready to help.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#49283F] hover:bg-[#3E2135] text-white text-sm font-semibold transition-all shadow-xs cursor-pointer focus-ring"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('explore')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F1E5EA]/50 text-[#49283F] border border-[#E6DDE2] text-sm font-semibold transition-all cursor-pointer focus-ring"
          >
            <Search className="w-4 h-4" />
            <span>Explore Consultants</span>
          </button>
        </div>

        {/* Quiet assurance note */}
        <div className="pt-8 border-t border-[#E6DDE2] flex items-center justify-center gap-2 text-xs text-[#716873]">
          <Shield className="w-3.5 h-3.5 text-[#49283F]" />
          <span>Verified Advisory & Naira Escrow Protected</span>
        </div>
      </div>
    </div>
  );
};
