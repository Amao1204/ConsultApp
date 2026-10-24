import React, { useState } from 'react';
import { PageId, Consultant, CategoryId } from '../types';
import { CATEGORIES, CONSULTANTS, SEARCH_SUGGESTIONS } from '../data/mockData';
import { ConsultantCard } from '../components/ConsultantCard';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  CheckCircle,
  Briefcase,
  Compass,
  Palette,
  Megaphone,
  CalendarCheck,
  Utensils,
  Target,
  HeartHandshake,
  Rocket,
  MessageSquare,
  Clock,
  Layers,
  Lock,
  ChevronRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, category?: CategoryId) => void;
  onViewConsultant: (consultant: Consultant) => void;
  onOpenBecomeModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onViewConsultant,
  onOpenBecomeModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Category icon helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#49283F]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#49283F]" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-[#49283F]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#49283F]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#49283F]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#49283F]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#49283F]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#49283F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#49283F]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#49283F]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#49283F]" />;
    }
  };

  const filteredSuggestions = searchQuery.trim()
    ? SEARCH_SUGGESTIONS.filter((s) =>
        s.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : SEARCH_SUGGESTIONS;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('explore');
  };

  const handleSuggestionClick = (suggestion: typeof SEARCH_SUGGESTIONS[0]) => {
    setSearchQuery(suggestion.query);
    setIsSearchFocused(false);
    onNavigate('explore', suggestion.category);
  };

  // Top featured consultants
  const featuredConsultants = CONSULTANTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F8F4F0] text-[#282329] pt-18">
      {/* 1. HERO SECTION - Editorial, Confident & Bold */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E6DDE2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet editorial kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1E5EA] border border-[#E6DDE2] text-xs font-semibold text-[#49283F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#49283F]" />
                <span>Verified Nigerian & African Expertise</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282329] tracking-tight leading-[1.08]">
                Whatever you're figuring out,{' '}
                <span className="text-[#49283F]">talk to someone who knows.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#716873] max-w-xl leading-relaxed">
                Find trusted experts who can help you make better decisions, solve problems and turn ideas into action. Direct 1-on-1 consultations backed by Naira escrow protection.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  id="hero-find-expert-btn"
                  onClick={() => onNavigate('explore')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] active:bg-[#321B2C] rounded-xl shadow-xs transition-all cursor-pointer focus-ring"
                >
                  <span>Find an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-become-consultant-btn"
                  onClick={onOpenBecomeModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#49283F] bg-white hover:bg-[#F1E5EA] border border-[#E6DDE2] rounded-xl transition-all shadow-2xs cursor-pointer focus-ring"
                >
                  <span>Become a Consultant</span>
                </button>
              </div>

              {/* Problem-First Search Component */}
              <div className="pt-4 max-w-xl relative">
                <form
                  onSubmit={handleSearchSubmit}
                  className={`relative bg-white rounded-2xl border transition-all duration-200 shadow-xs ${
                    isSearchFocused
                      ? 'border-[#49283F] ring-3 ring-[#F1E5EA]'
                      : 'border-[#E6DDE2] hover:border-[#D9B9C7]'
                  }`}
                >
                  <div className="p-2 sm:p-2.5 flex items-center gap-3">
                    <div className="pl-3 text-[#49283F]">
                      <Search className="w-5 h-5 text-[#49283F]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label
                        htmlFor="hero-search-input"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#716873]"
                      >
                        What do you need help with?
                      </label>
                      <input
                        id="hero-search-input"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        placeholder="Tell us what you're trying to figure out..."
                        className="w-full bg-transparent border-none text-[#282329] placeholder:text-[#716873]/60 text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
                    >
                      <span>Search</span>
                    </button>
                  </div>
                </form>

                {/* Suggestions Dropdown */}
                {isSearchFocused && (
                  <div
                    id="search-suggestions-dropdown"
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#E6DDE2] shadow-xl p-4 z-30 animate-fade-in"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#E6DDE2]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#716873]">
                        Popular Questions & Roadblocks
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsSearchFocused(false)}
                        className="text-xs text-[#716873] hover:text-[#282329] cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                    <div className="mt-2 space-y-1.5 max-h-60 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1E5EA] transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                        >
                          <div>
                            <div className="text-sm font-medium text-[#282329] group-hover:text-[#49283F]">
                              "{suggestion.query}"
                            </div>
                            <div className="text-xs text-[#716873] mt-0.5">{suggestion.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#D9B9C7] group-hover:text-[#49283F] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick problem suggestion prompts */}
                <div className="mt-3 flex items-center gap-1.5 flex-wrap text-xs text-[#716873]">
                  <span className="font-semibold text-[#282329]">Quick prompts:</span>
                  {[
                    'How do I launch my fashion brand?',
                    'I need help planning an event',
                    'Help me improve my CV',
                  ].map((query, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSearchQuery(query);
                        onNavigate('explore');
                      }}
                      className="px-2 py-0.5 rounded-md bg-white border border-[#E6DDE2] hover:border-[#49283F] hover:text-[#49283F] transition-colors cursor-pointer text-[11px]"
                    >
                      "{query}"
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) - Natural African Professional Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-4 sm:p-5 border border-[#E6DDE2] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6DDE2]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#166534]" />
                    <span className="text-xs font-semibold text-[#282329]">Verified Advisors Active Now</span>
                  </div>
                  <span className="text-xs text-[#716873]">Lagos · Abuja · London</span>
                </div>

                {/* 2x2 Clean Professional Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {featuredConsultants.map((consultant) => (
                    <div
                      key={consultant.id}
                      onClick={() => onViewConsultant(consultant)}
                      className="group bg-[#FAF7F4] hover:bg-white rounded-xl p-2.5 border border-[#E6DDE2] hover:border-[#D9B9C7] transition-all cursor-pointer"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 mb-2">
                        <img
                          src={consultant.avatarUrl}
                          alt={consultant.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-xs text-[#282329] truncate group-hover:text-[#49283F]">
                            {consultant.name}
                          </span>
                          <CheckCircle className="w-3 h-3 text-[#49283F] fill-[#F1E5EA] shrink-0" />
                        </div>
                        <span className="text-[10px] text-[#716873] block truncate">
                          {consultant.title}
                        </span>
                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-[#E6DDE2]/60 text-[10px]">
                          <span className="font-bold text-[#282329]">₦{consultant.startingPrice.toLocaleString()}</span>
                          <div className="flex items-center text-[#282329] font-medium">
                            <Star className="w-2.5 h-2.5 fill-[#D97706] text-[#D97706] mr-0.5" />
                            <span>{consultant.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#E6DDE2] flex items-center justify-between text-xs text-[#716873]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[#49283F]" />
                    <span>Naira Escrow Protected</span>
                  </span>
                  <button
                    onClick={() => onNavigate('explore')}
                    className="font-semibold text-[#49283F] hover:underline flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Browse 800+ Experts</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM-FIRST CATEGORIES SECTION */}
      <section className="py-16 md:py-24 border-b border-[#E6DDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
                Curated Problem Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#282329] tracking-tight mt-1">
                Explore expertise by the challenge you face
              </h2>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#49283F] hover:text-[#321B2C] cursor-pointer"
            >
              <span>View all categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => onNavigate('explore', category.id)}
                className="group p-5 rounded-2xl bg-white border border-[#E6DDE2] hover:border-[#D9B9C7] hover:bg-[#FAF7F4] shadow-2xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F1E5EA] flex items-center justify-center mb-3 group-hover:bg-[#49283F] group-hover:text-white transition-colors text-[#49283F]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-base text-[#282329] group-hover:text-[#49283F] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#716873] mt-1 line-clamp-2 leading-relaxed">
                    {category.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E6DDE2] flex items-center justify-between text-xs text-[#716873]">
                  <span>{category.count} specialists</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9B9C7] group-hover:text-[#49283F] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CONSULTANTS SECTION */}
      <section className="py-16 md:py-24 border-b border-[#E6DDE2] bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
                Verified Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#282329] tracking-tight mt-1">
                Top-rated consultants ready to help you
              </h2>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#49283F] hover:text-[#321B2C] cursor-pointer"
            >
              <span>Explore all consultants</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredConsultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                consultant={consultant}
                onViewProfile={onViewConsultant}
                onBookNow={onViewConsultant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS - 3 Clear Steps Preview */}
      <section className="py-16 md:py-24 border-b border-[#E6DDE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
              Frictionless Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#282329] tracking-tight">
              From confused to clear in three simple steps
            </h2>
            <p className="text-sm sm:text-base text-[#716873]">
              No back-and-forth emails. No guesswork about pricing. Just direct access to proven practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] space-y-3 relative">
              <span className="text-3xl font-extrabold text-[#49283F]">01</span>
              <h3 className="text-lg font-bold text-[#282329]">Search by Your Exact Roadblock</h3>
              <p className="text-sm text-[#716873] leading-relaxed">
                Describe what you are trying to accomplish. Our discovery algorithm matches you with practitioners who have built what you are building.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] space-y-3 relative">
              <span className="text-3xl font-extrabold text-[#49283F]">02</span>
              <h3 className="text-lg font-bold text-[#282329]">Pick a Service & Reserve a Time</h3>
              <p className="text-sm text-[#716873] leading-relaxed">
                Review clear deliverables and transparent rates in Naira (₦). Book an open slot on their live calendar. Your payment is safely held in escrow.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E6DDE2] space-y-3 relative">
              <span className="text-3xl font-extrabold text-[#49283F]">03</span>
              <h3 className="text-lg font-bold text-[#282329]">Get Direct Clarity & Action Steps</h3>
              <p className="text-sm text-[#716873] leading-relaxed">
                Join a focused 1-on-1 strategy call. Leave with recorded takeaways, clear action notes, and the option to continue for execution support.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#49283F] hover:underline cursor-pointer"
            >
              <span>Read the detailed step-by-step breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. TRUST, VERIFICATION & ESCROW PILLARS */}
      <section className="py-16 md:py-20 border-b border-[#E6DDE2] bg-[#FAF7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#282329]">Rigorous Consultant Vetting</h4>
                <p className="text-xs sm:text-sm text-[#716873] mt-1 leading-relaxed">
                  Every advisor is screened for genuine past performance, verifiable client outcomes, and domain authority.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#282329]">Naira (₦) Escrow Protection</h4>
                <p className="text-xs sm:text-sm text-[#716873] mt-1 leading-relaxed">
                  Your consultation fee is held safely by ConsultAPP. Funds are only disbursed once the session is satisfactorily finished.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F1E5EA] flex items-center justify-center shrink-0 text-[#49283F]">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#282329]">Consultation to Execution</h4>
                <p className="text-xs sm:text-sm text-[#716873] mt-1 leading-relaxed">
                  Don't just stop at advice. Partner with your consultant on two-week sprints or milestone deliverables to get it done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - High-Contrast Editorial Plum */}
      <section className="py-16 md:py-24 bg-[#321B2C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9B9C7]">
            Stop Guessing. Start Executing.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to solve what's holding you back?
          </h2>
          <p className="text-base sm:text-lg text-[#D9B9C7]/90 max-w-xl mx-auto leading-relaxed">
            Connect with verified practitioners in business, branding, fashion, tech, and events. Book your 1-on-1 session today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('explore')}
              className="px-6 py-3.5 rounded-xl font-semibold text-[#321B2C] bg-[#F8F4F0] hover:bg-white shadow-xs transition-colors cursor-pointer"
            >
              Find an Expert Now
            </button>
            <button
              onClick={onOpenBecomeModal}
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-transparent hover:bg-white/10 border border-[#D9B9C7]/40 transition-colors cursor-pointer"
            >
              Apply as a Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
