import React, { useState, useMemo } from 'react';
import { PageId, Consultant, CategoryId } from '../types';
import { CATEGORIES, CONSULTANTS } from '../data/mockData';
import { ConsultantCard } from '../components/ConsultantCard';
import { Search, Filter, SlidersHorizontal, RotateCcw, ShieldCheck, Check } from 'lucide-react';

interface ExplorePageProps {
  initialCategory?: CategoryId;
  onNavigate: (page: PageId) => void;
  onViewConsultant: (consultant: Consultant) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  initialCategory = 'all',
  onNavigate,
  onViewConsultant,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under25' | '25to40' | 'above40'>('all');
  const [ratingFilter, setRatingFilter] = useState<'all' | '4.8' | '4.9'>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'today'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'price-asc' | 'price-desc'>('rating');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter logic
  const filteredConsultants = useMemo(() => {
    return CONSULTANTS.filter((c) => {
      // Category
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(query);
        const matchesTitle = c.title.toLowerCase().includes(query);
        const matchesBio = c.bio.toLowerCase().includes(query);
        const matchesSpecialties = c.specialties.some((s) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesTitle && !matchesBio && !matchesSpecialties) {
          return false;
        }
      }
      // Price
      if (priceFilter === 'under25' && c.startingPrice >= 25000) return false;
      if (priceFilter === '25to40' && (c.startingPrice < 25000 || c.startingPrice > 40000)) return false;
      if (priceFilter === 'above40' && c.startingPrice <= 40000) return false;

      // Rating
      if (ratingFilter === '4.8' && c.rating < 4.8) return false;
      if (ratingFilter === '4.9' && c.rating < 4.9) return false;

      // Availability
      if (availabilityFilter === 'today' && !c.availableToday) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
      return 0;
    });
  }, [selectedCategory, searchQuery, priceFilter, ratingFilter, availabilityFilter, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceFilter('all');
    setRatingFilter('all');
    setAvailabilityFilter('all');
    setSortBy('rating');
  };

  return (
    <div id="explore-consultants-page" className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pt-6 pb-10 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
            Find someone who can help.
          </h1>
          <p className="text-sm sm:text-base text-[#64748B]">
            Browse verified Nigerian professionals with real-world experience in business, branding,
            fashion, career, events and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative bg-white rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#2563EB]/50 transition-all flex items-center p-2">
            <Search className="w-5 h-5 text-[#2563EB] ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, specialty or name (e.g., brand launch, fashion, resume, cash flow)..."
              className="w-full px-3 py-2 text-sm bg-transparent border-none focus:outline-none placeholder:text-[#94A3B8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#64748B] hover:text-[#17202A] px-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Scroll Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#172B4D] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#E5E7EB] hover:border-slate-300'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#E5E7EB] hover:border-slate-300'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter & Sort Controls */}
        <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Desktop Filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold text-[#17202A] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Filters:</span>
              </span>

              {/* Price Filter */}
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="px-3 py-1.5 bg-[#FCFCFA] border border-[#E5E7EB] rounded-lg text-[#17202A] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              >
                <option value="all">Price: Any</option>
                <option value="under25">Under ₦25,000</option>
                <option value="25to40">₦25,000 – ₦40,000</option>
                <option value="above40">Above ₦40,000</option>
              </select>

              {/* Rating Filter */}
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value as any)}
                className="px-3 py-1.5 bg-[#FCFCFA] border border-[#E5E7EB] rounded-lg text-[#17202A] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              >
                <option value="all">Rating: Any</option>
                <option value="4.8">4.8+ Stars</option>
                <option value="4.9">4.9+ Stars</option>
              </select>

              {/* Availability Filter */}
              <button
                onClick={() =>
                  setAvailabilityFilter(availabilityFilter === 'today' ? 'all' : 'today')
                }
                className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                  availabilityFilter === 'today'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                    : 'bg-[#FCFCFA] border-[#E5E7EB] text-[#475569]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available Today</span>
              </button>

              {(priceFilter !== 'all' ||
                ratingFilter !== 'all' ||
                availabilityFilter !== 'all' ||
                searchQuery ||
                selectedCategory !== 'all') && (
                <button
                  onClick={handleReset}
                  className="px-2 py-1 text-[#64748B] hover:text-[#17202A] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs w-full lg:w-auto justify-between lg:justify-end">
              <span className="text-[#64748B]">Showing {filteredConsultants.length} experts</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#64748B]">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-[#FCFCFA] border border-[#E5E7EB] rounded-lg text-[#17202A] focus:outline-none focus:ring-1 focus:ring-[#2563EB] font-medium"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredConsultants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConsultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                consultant={consultant}
                onViewProfile={onViewConsultant}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5E7EB] max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#17202A]">No consultants found</h3>
            <p className="text-sm text-[#64748B]">
              We couldn't find any consultants matching your current search or filters. Try adjusting
              your criteria.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
