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
      className="group relative bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Top Banner / Avatar Header */}
      <div className="p-6 pb-4 flex items-start gap-4">
        {/* Avatar with hover scale & badge */}
        <div className="relative shrink-0">
          <div className="w-18 h-18 rounded-2xl overflow-hidden border-2 border-white shadow-xs bg-slate-100">
            <img
              src={consultant.avatarUrl}
              alt={consultant.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {consultant.verified && (
            <div
              className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs"
              title="Verified Consultant"
            >
              <CheckCircle className="w-5 h-5 text-[#2563EB] fill-[#EFF6FF]" />
            </div>
          )}
        </div>

        {/* Name, Title & Rating */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-bold text-lg text-[#17202A] group-hover:text-[#2563EB] transition-colors truncate">
              {consultant.name}
            </h3>
            {consultant.badgeText && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#EFF6FF] text-[#2563EB]">
                {consultant.badgeText}
              </span>
            )}
          </div>

          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide mt-0.5">
            {consultant.title}
          </p>

          <div className="flex items-center gap-2 mt-1.5 text-xs text-[#64748B]">
            <div className="flex items-center text-[#F59E0B] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] mr-0.5" />
              <span>{consultant.rating.toFixed(1)}</span>
            </div>
            <span>•</span>
            <span>({consultant.reviewCount} reviews)</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#94A3B8]" />
              <span className="truncate max-w-[100px]">{consultant.location.split(',')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio / Value sentence */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-sm text-[#475569] line-clamp-2 leading-relaxed italic">
          "{consultant.bio}"
        </p>

        {/* Specialties Chips */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {consultant.specialties.slice(0, 3).map((spec, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCFCFA] text-[#475569] border border-[#E5E7EB]"
            >
              {spec}
            </span>
          ))}
          {consultant.specialties.length > 3 && (
            <span className="px-1.5 py-0.5 rounded-md text-xs text-[#94A3B8]">
              +{consultant.specialties.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#F1F5F9] w-full" />

      {/* Card Footer: Price, Availability, CTA */}
      <div className="p-4 px-6 bg-[#FCFCFA] flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#64748B] block">Starting from</span>
          <div className="text-base font-bold text-[#17202A]">
            ₦{consultant.startingPrice.toLocaleString()}
            <span className="text-xs font-normal text-[#64748B]"> / session</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5 text-[11px] font-medium">
            {consultant.availableToday ? (
              <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                Available today
              </span>
            ) : (
              <span className="inline-flex items-center text-[#64748B]">
                <Clock className="w-3 h-3 mr-0.5 text-[#94A3B8]" />
                Next: {consultant.nextAvailable.split(' at ')[0]}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id={`view-profile-btn-${consultant.id}`}
            onClick={() => onViewProfile(consultant)}
            className="inline-flex items-center justify-center gap-1 px-3.5 py-2 text-xs font-semibold text-[#172B4D] group-hover:text-white bg-white group-hover:bg-[#2563EB] border border-[#E5E7EB] group-hover:border-[#2563EB] rounded-xl shadow-2xs transition-all cursor-pointer whitespace-nowrap"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
