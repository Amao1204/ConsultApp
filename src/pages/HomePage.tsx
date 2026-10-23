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
  TrendingUp,
  Compass,
  Palette,
  Megaphone,
  CalendarCheck,
  Utensils,
  Target,
  HeartHandshake,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Clock,
  Layers,
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
        return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-sky-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-purple-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-orange-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-rose-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-blue-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#2563EB]" />;
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

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#17202A] pt-20">
      {/* 10. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#E5E7EB]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EFF6FF] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB]">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Verified Expertise & Solution Marketplace</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#172B4D] tracking-tight leading-[1.12]">
              Whatever you're figuring out,{' '}
              <span className="text-[#2563EB]">talk to someone who knows.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Find trusted experts who can help you make better decisions, solve problems, and turn
              ideas into action.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                id="hero-find-expert-btn"
                onClick={() => onNavigate('explore')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Find an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-become-consultant-btn"
                onClick={onOpenBecomeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#172B4D] bg-white hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                <span>Become a Consultant</span>
              </button>
            </div>
          </div>

          {/* 10. LARGE INTERACTIVE SEARCH / PROBLEM FIELD */}
          <div className="max-w-2xl mx-auto mt-10 relative">
            <form
              onSubmit={handleSearchSubmit}
              className={`relative bg-white rounded-2xl border transition-all duration-200 shadow-sm ${
                isSearchFocused
                  ? 'border-[#2563EB] ring-4 ring-[#EFF6FF]'
                  : 'border-[#CBD5E1] hover:border-[#94A3B8]'
              }`}
            >
              <div className="p-2 sm:p-2.5 flex items-center gap-3">
                <div className="pl-3 text-[#64748B]">
                  <Search className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor="hero-search-input"
                    className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B]"
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
                    className="w-full bg-transparent border-none text-[#17202A] placeholder:text-[#94A3B8] text-sm sm:text-base font-medium focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
                >
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Clickable prompt suggestions below or dropdown */}
            {isSearchFocused && (
              <div
                id="search-suggestions-dropdown"
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-4 z-30 animate-fade-in"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Popular Problem Searches
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSearchFocused(false)}
                    className="text-xs text-[#94A3B8] hover:text-[#17202A]"
                  >
                    Close
                  </button>
                </div>
                <div className="mt-2 space-y-1.5">
                  {filteredSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#EFF6FF] transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                    >
                      <div>
                        <div className="text-sm font-medium text-[#17202A] group-hover:text-[#2563EB]">
                          "{suggestion.query}"
                        </div>
                        <div className="text-xs text-[#64748B] mt-0.5">{suggestion.description}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick clickable chips below search */}
            <div className="mt-3 flex items-center justify-center gap-2 flex-wrap text-xs text-[#64748B]">
              <span className="font-semibold text-[#17202A]">Try asking:</span>
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
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-colors cursor-pointer text-[12px]"
                >
                  "{query}"
                </button>
              ))}
            </div>
          </div>

          {/* 11. HERO VISUAL: Sophisticated composition with floating UI chips */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative rounded-3xl bg-linear-to-b from-[#EFF6FF]/60 to-[#FCFCFA] p-4 sm:p-6 border border-[#E5E7EB]">
              {/* Responsive 4-Expert grid showing realistic African professionals */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Michael - Brand */}
                <div
                  onClick={() => onViewConsultant(CONSULTANTS[0])}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={CONSULTANTS[0].avatarUrl}
                      alt={CONSULTANTS[0].name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs sm:text-sm text-[#17202A] truncate">
                        {CONSULTANTS[0].name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] fill-[#EFF6FF] shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#64748B] block truncate">
                      Brand Strategy
                    </span>
                  </div>
                </div>

                {/* 2. Amaka - Fashion */}
                <div
                  onClick={() => onViewConsultant(CONSULTANTS[1])}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={CONSULTANTS[1].avatarUrl}
                      alt={CONSULTANTS[1].name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs sm:text-sm text-[#17202A] truncate">
                        {CONSULTANTS[1].name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] fill-[#EFF6FF] shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#64748B] block truncate">
                      Wardrobe & Fashion
                    </span>
                  </div>
                </div>

                {/* 3. Tobi - Tech Startup */}
                <div
                  onClick={() => onViewConsultant(CONSULTANTS[2])}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={CONSULTANTS[2].avatarUrl}
                      alt={CONSULTANTS[2].name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs sm:text-sm text-[#17202A] truncate">
                        {CONSULTANTS[2].name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] fill-[#EFF6FF] shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#64748B] block truncate">
                      Startup & Growth
                    </span>
                  </div>
                </div>

                {/* 4. Ada - Executive Career */}
                <div
                  onClick={() => onViewConsultant(CONSULTANTS[4])}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={CONSULTANTS[4].avatarUrl}
                      alt={CONSULTANTS[4].name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs sm:text-sm text-[#17202A] truncate">
                        {CONSULTANTS[4].name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#2563EB] fill-[#EFF6FF] shrink-0" />
                    </div>
                    <span className="text-[11px] text-[#64748B] block truncate">
                      Career Transition
                    </span>
                  </div>
                </div>
              </div>

              {/* Authentic floating UI chips */}
              <div className="absolute -top-4 -left-2 sm:left-6 bg-white px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] shadow-md flex items-center gap-2 text-xs font-semibold text-[#17202A] animate-float">
                <CheckCircle className="w-4 h-4 text-[#2563EB]" />
                <span>Verified Consultant</span>
              </div>

              <div className="absolute -top-3 -right-2 sm:right-6 bg-white px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] shadow-md flex items-center gap-1.5 text-xs font-semibold text-[#17202A]">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span>4.9 ★ Rating</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 left-10 bg-white px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] shadow-md items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Available today</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 right-10 bg-white px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] shadow-md items-center gap-1.5 text-xs font-semibold text-[#17202A]">
                <span className="text-[#64748B]">From</span>
                <span className="text-[#2563EB] font-bold">₦25,000</span>
                <span className="text-[#64748B]">/ session</span>
              </div>
            </div>
          </div>

          {/* 12. HERO TRUST STRIP */}
          <div className="mt-14 pt-8 border-t border-[#E5E7EB] text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
              Trusted expertise across business, career, fashion, events and more.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {['Business', 'Branding', 'Career', 'Fashion', 'Events', 'Marketing', 'Strategy', 'Food'].map(
                (chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate('explore', chip.toLowerCase() as CategoryId)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white hover:bg-[#EFF6FF] text-[#475569] hover:text-[#2563EB] border border-[#E5E7EB] hover:border-[#2563EB]/40 transition-colors cursor-pointer"
                  >
                    {chip}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 13. VALUE PROPOSITION: FIND, TALK, SOLVE */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              One problem. The right person.
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              You don't always have to figure it out alone. ConsultAPP connects you with people who
              have the experience, knowledge and skills to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: FIND */}
            <div className="bg-[#FCFCFA] rounded-2xl p-8 border border-[#E5E7EB] space-y-4 hover:border-[#2563EB]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-lg group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                FIND
              </div>
              <h3 className="text-xl font-bold text-[#17202A]">Find the right expertise</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Discover professionals based on what you actually need help with. Browse by specific
                problem, verified credentials, pricing and availability.
              </p>
            </div>

            {/* Card 2: TALK */}
            <div className="bg-[#FCFCFA] rounded-2xl p-8 border border-[#E5E7EB] space-y-4 hover:border-[#2563EB]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-lg group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                TALK
              </div>
              <h3 className="text-xl font-bold text-[#17202A]">Get guidance that moves you forward</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Connect directly with someone who understands the problem. Book a focused session,
                ask hard questions, and leave with immediate clarity.
              </p>
            </div>

            {/* Card 3: SOLVE */}
            <div className="bg-[#FCFCFA] rounded-2xl p-8 border border-[#E5E7EB] space-y-4 hover:border-[#2563EB]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-lg group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                SOLVE
              </div>
              <h3 className="text-xl font-bold text-[#17202A]">Go beyond the conversation</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                When advice isn't enough, work with your consultant to put the solution into action.
                Retain them for execution sprints, vendor oversight, or project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. "WHAT DO YOU NEED HELP WITH?" CATEGORY SECTION */}
      <section className="py-16 md:py-24 bg-[#FCFCFA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
                What are you figuring out?
              </h2>
              <p className="text-base text-[#64748B] mt-2">
                Whatever the problem, there's someone who knows how to help.
              </p>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer"
            >
              <span>Explore all categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('explore', category.id)}
                className="text-left bg-white p-6 rounded-2xl border border-[#E5E7EB] hover:border-[#2563EB]/50 hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between h-44"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FCFCFA] border border-[#E5E7EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-base text-[#17202A] group-hover:text-[#2563EB] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 line-clamp-2">{category.tagline}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-2 border-t border-[#F8FAFC]">
                  <span>{category.count} experts</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 15 & 16. FEATURED CONSULTANTS SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] mb-2">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>Verified Professionals</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
                People who know how to help.
              </h2>
              <p className="text-base text-[#64748B] mt-2">
                Meet professionals with experience in the things you're trying to figure out.
              </p>
            </div>
            <button
              onClick={() => onNavigate('explore')}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer"
            >
              <span>See all consultants</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSULTANTS.slice(0, 6).map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                consultant={consultant}
                onViewProfile={onViewConsultant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 18. DIFFERENTIATION SECTION: CONSULT vs EXECUTE */}
      <section className="py-16 md:py-24 bg-[#FCFCFA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              The ConsultAPP Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              Sometimes advice isn't enough.
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              ConsultAPP doesn't have to stop at the conversation. We connect the moment of insight
              with the discipline of execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: CONSULT */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#2563EB]">
                    Step 1: Consult
                  </span>
                  <MessageSquare className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#17202A] mb-3">
                  Discuss the problem with clarity
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] mb-6">
                  Get high-impact feedback before you commit time, money, or resources.
                </p>
                <ul className="space-y-3 text-sm text-[#475569]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      <strong>Discuss the problem:</strong> Lay out your dilemmas, assumptions, and
                      options.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      <strong>Ask hard questions:</strong> Learn what has actually worked in the
                      field.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      <strong>Get recommendations:</strong> Receive honest, unbiased advice from a
                      practitioner.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>
                      <strong>Make a confident decision:</strong> Know exactly what path forward
                      makes sense.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: EXECUTE */}
            <div className="bg-[#172B4D] text-white rounded-3xl p-8 sm:p-10 border border-[#243B61] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#243B61] text-[#93C5FD]">
                    Step 2: Execute
                  </span>
                  <Layers className="w-6 h-6 text-[#60A5FA]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Turn the recommendation into action
                </h3>
                <p className="text-sm sm:text-base text-[#CBD5E1] mb-6">
                  When advice isn't enough, continue working with your consultant to get the job done.
                </p>
                <ul className="space-y-3 text-sm text-[#E2E8F0]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>
                      <strong>Work with the same expert:</strong> No re-explaining or starting from
                      scratch.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>
                      <strong>Track the deliverables:</strong> Define milestones and deliverables
                      transparently.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>
                      <strong>Protected milestones:</strong> Payments held securely in Naira escrow
                      until sign-off.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                    <span>
                      <strong>Get the actual outcome:</strong> From brand launches to financial
                      audits and event execution.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="py-16 md:py-20 bg-linear-to-b from-[#172B4D] to-[#0F1E36] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Stop figuring it out alone.
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] max-w-xl mx-auto">
            Book a 45-minute consultation today or share your professional expertise with clients
            ready to take action.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('explore')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Explore Consultants
            </button>
            <button
              onClick={onOpenBecomeModal}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#243B61] hover:bg-[#2D4977] border border-[#3E5C8D] rounded-xl transition-colors cursor-pointer"
            >
              Apply as a Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
