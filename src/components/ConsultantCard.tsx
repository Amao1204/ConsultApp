import React from 'react';
import { Consultant } from '../types';
import { Star, CheckCircle, Clock, MapPin, ArrowRight } from 'lucide-react';

interface ConsultantCardProps {
  consultant: Consultant;
  onViewProfile: (consultant: Consultant) => void;
  onBookNow?: (consultant: Consultant) => void;
}

export const ConsultantCard: React.FC<ConsultantCardProps> = ({
  consultant,
  onViewProfile,
  onBookNow,
}) => {
  return (
    <div
      id={`consultant-card-${consultant.id}`}
      className="group relative bg-white rounded-2xl border border-[#E6DDE2] hover:border-[#D9B9C7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Top Banner / Avatar Header */}
      <div className="p-6 pb-4 flex items-start gap-4">
        {/* Avatar with subtle hover scale & badge */}
        <div className="relative shrink-0">
          <div className="w-18 h-18 rounded-2xl overflow-hidden border border-[#E6DDE2] shadow-2xs bg-[#F8F4F0]">
            <img
              src={consultant.avatarUrl}
              alt={consultant.name}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          {consultant.verified && (
            <div
              className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-2xs"
              title="Verified Identity & Track Record"
            >
              <CheckCircle className="w-5 h-5 text-[#49283F] fill-[#F1E5EA]" />
            </div>
          )}
        </div>

        {/* Name, Title & Rating */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3
              onClick={() => onViewProfile(consultant)}
              className="font-bold text-lg text-[#282329] group-hover:text-[#49283F] transition-colors truncate cursor-pointer"
            >
              {consultant.name}
            </h3>
            {consultant.badgeText && (
              <span className="text-[11px] font-semibold text-[#49283F] bg-[#F1E5EA] px-2 py-0.5 rounded-md">
                {consultant.badgeText}
              </span>
            )}
          </div>

          <p className="text-xs font-semibold text-[#49283F] mt-0.5">
            {consultant.title}
          </p>

          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[#716873]">
            <div className="flex items-center text-[#282329] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706] mr-1" />
              <span>{consultant.rating.toFixed(1)}</span>
            </div>
            <span aria-hidden="true">·</span>
            <span>({consultant.reviewCount} reviews)</span>
            <span aria-hidden="true">·</span>
            <div className="flex items-center gap-0.5 truncate">
              <MapPin className="w-3 h-3 text-[#716873]" />
              <span className="truncate">{consultant.location.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio / Value sentence */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-sm text-[#716873] line-clamp-2 leading-relaxed italic">
          "{consultant.bio}"
        </p>

        {/* Specialties (rendered cleanly with subtle soft rose background) */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          {consultant.specialties.slice(0, 3).map((spec, i) => (
            <span
              key={i}
              className="text-xs text-[#49283F] bg-[#F1E5EA]/70 px-2 py-0.5 rounded-md font-medium"
            >
              {spec}
            </span>
          ))}
          {consultant.specialties.length > 3 && (
            <span className="text-xs text-[#716873] px-1 font-medium">
              +{consultant.specialties.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Availability indicator */}
      <div className="px-6 py-2.5 bg-[#FAF7F4] border-t border-[#E6DDE2] flex items-center justify-between text-xs text-[#716873]">
        <div className="flex items-center gap-1.5 truncate">
          <Clock className="w-3.5 h-3.5 text-[#49283F] shrink-0" />
          <span className="truncate">
            {consultant.availableToday ? (
              <span className="text-[#166534] font-medium">Available Today</span>
            ) : (
              <span>Next: {consultant.nextAvailable.split('at')[0]}</span>
            )}
          </span>
        </div>
        <div className="shrink-0 font-medium text-[#716873]">
          Resp: {consultant.responseTime}
        </div>
      </div>

      {/* Footer / Pricing & Actions */}
      <div className="p-6 pt-4 bg-white border-t border-[#E6DDE2] flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] font-medium text-[#716873] uppercase tracking-wider">
            Starting from
          </span>
          <div className="text-base sm:text-lg font-bold text-[#282329]">
            ₦{consultant.startingPrice.toLocaleString()}
            <span className="text-xs font-normal text-[#716873] ml-1">/ session</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewProfile(consultant)}
            className="px-3 py-2 text-xs font-semibold text-[#49283F] hover:bg-[#F1E5EA] rounded-xl border border-[#E6DDE2] transition-colors cursor-pointer"
          >
            Profile
          </button>
          <button
            onClick={() => (onBookNow ? onBookNow(consultant) : onViewProfile(consultant))}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-[#49283F] hover:bg-[#3E2135] rounded-xl shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Book</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
