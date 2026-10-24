import React, { useState, useMemo } from 'react';
import { PageId, Consultant, CategoryId } from '../types';
import { CATEGORIES, CONSULTANTS } from '../data/mockData';
import { ConsultantCard } from '../components/ConsultantCard';
import { Search, Filter, SlidersHorizontal, RotateCcw, ShieldCheck, Check, X, ArrowUpDown } from 'lucide-react';

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

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    priceFilter !== 'all' ||
    ratingFilter !== 'all' ||
    availabilityFilter !== 'all';

  return (
    <div id="explore-consultants-page" className="min-h-screen pt-24 pb-20 bg-[#F8F4F0] text-[#282329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto pt-6 pb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#49283F]">
            Marketplace Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#282329] tracking-tight">
            Find the verified expert you need
          </h1>
          <p className="text-sm sm:text-base text-[#716873]">
            Filter verified Nigerian and African practitioners by expertise, pricing, client ratings, and live calendar availability.
          </p>
        </div>

        {/* Search Bar & Primary Discovery Bar */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E6DDE2] shadow-xs mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#49283F]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, expertise, or problem (e.g. 'fashion supply chain', 'brand identity')..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DDE2] bg-[#FAF7F4] text-sm text-[#282329] placeholder:text-[#716873]/60 focus:bg-white focus:border-[#49283F] focus:ring-2 focus:ring-[#49283F]/20 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#716873] hover:text-[#282329] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative min-w-[170px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#E6DDE2] bg-white text-xs sm:text-sm font-medium text-[#282329] focus:border-[#49283F] outline-none cursor-pointer pr-8"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#716873] pointer-events-none" />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="md:hidden px-3.5 py-2.5 rounded-xl border border-[#E6DDE2] bg-[#FAF7F4] text-xs font-semibold text-[#49283F] flex items-center gap-1.5 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Category Chips Bar (Segmented button controls) */}
          <div className="mt-4 pt-3 border-t border-[#E6DDE2] flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#49283F] text-white shadow-2xs'
                  : 'bg-[#FAF7F4] text-[#716873] hover:text-[#282329] hover:bg-[#F1E5EA]'
              }`}
            >
              All Categories ({CONSULTANTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#49283F] text-white shadow-2xs font-semibold'
                      : 'bg-[#FAF7F4] text-[#716873] hover:text-[#282329] hover:bg-[#F1E5EA]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Bar (Price, Rating, Same-Day) on Desktop */}
        <div className="hidden md:flex items-center justify-between pb-6 text-xs text-[#716873]">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Price Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[#282329]">Price:</span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E6DDE2]">
                {[
                  { id: 'all', label: 'Any' },
                  { id: 'under25', label: '< ₦25k' },
                  { id: '25to40', label: '₦25k - ₦40k' },
                  { id: 'above40', label: '> ₦40k' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPriceFilter(item.id as any)}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      priceFilter === item.id
                        ? 'bg-[#49283F] text-white font-semibold'
                        : 'text-[#716873] hover:text-[#282329]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[#282329]">Rating:</span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#E6DDE2]">
                {[
                  { id: 'all', label: 'All' },
                  { id: '4.8', label: '4.8+ ★' },
                  { id: '4.9', label: '4.9+ ★' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRatingFilter(item.id as any)}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      ratingFilter === item.id
                        ? 'bg-[#49283F] text-white font-semibold'
                        : 'text-[#716873] hover:text-[#282329]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <button
              onClick={() => setAvailabilityFilter(availabilityFilter === 'today' ? 'all' : 'today')}
              className={`px-3 py-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
                availabilityFilter === 'today'
                  ? 'bg-[#F1E5EA] border-[#49283F] text-[#49283F] font-semibold'
                  : 'bg-white border-[#E6DDE2] text-[#716873] hover:border-[#D9B9C7]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#166534]" />
              <span>Available Today</span>
            </button>

            {/* Reset Filters */}
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-[#716873] hover:text-[#991B1B] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="font-medium text-[#282329]">
            Showing <strong>{filteredConsultants.length}</strong> verified expert{filteredConsultants.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden bg-white p-4 rounded-2xl border border-[#E6DDE2] shadow-sm mb-6 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDE2]">
              <span className="font-bold text-sm text-[#282329]">Refine Consultants</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-xs text-[#716873]"
              >
                Close
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#282329] mb-1.5">Price Range</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'all', label: 'Any' },
                  { id: 'under25', label: '< ₦25,000' },
                  { id: '25to40', label: '₦25,000 - ₦40,000' },
                  { id: 'above40', label: '> ₦40,000' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPriceFilter(item.id as any)}
                    className={`p-2 text-xs rounded-lg border text-center ${
                      priceFilter === item.id
                        ? 'border-[#49283F] bg-[#F1E5EA] text-[#49283F] font-bold'
                        : 'border-[#E6DDE2] text-[#716873]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#282329] mb-1.5">Availability</label>
              <button
                onClick={() => setAvailabilityFilter(availabilityFilter === 'today' ? 'all' : 'today')}
                className={`w-full p-2 text-xs rounded-lg border text-center ${
                  availabilityFilter === 'today'
                    ? 'border-[#49283F] bg-[#F1E5EA] text-[#49283F] font-bold'
                    : 'border-[#E6DDE2] text-[#716873]'
                }`}
              >
                Show Only Available Today
              </button>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="w-full py-2 text-xs text-[#991B1B] font-semibold text-center border border-[#FECACA] rounded-lg bg-[#FEE2E2]/40"
              >
                Reset All Filters
              </button>
            )}
          </div>
        )}

        {/* Results Grid */}
        {filteredConsultants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConsultants.map((consultant) => (
              <ConsultantCard
                key={consultant.id}
                consultant={consultant}
                onViewProfile={onViewConsultant}
                onBookNow={onViewConsultant}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto border border-[#E6DDE2] space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-[#F1E5EA] flex items-center justify-center mx-auto text-[#49283F]">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#282329]">No consultants found</h3>
            <p className="text-sm text-[#716873] leading-relaxed">
              We couldn't find an expert matching your exact search filters. Try clearing your filters or searching with broader keywords.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] transition-colors cursor-pointer text-sm"
            >
              Reset Filters & Show All Experts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
