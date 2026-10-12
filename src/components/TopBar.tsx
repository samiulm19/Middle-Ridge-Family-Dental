import React from 'react';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface TopBarProps {
  onOpenPitchModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenPitchModal }) => {
  return (
    <div className="bg-[#2C2A4A] text-[#F3EEF8] text-xs py-2 px-4 sm:px-6 border-b border-[#3E345D] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left: Location & Landmark */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#CBB9DE] shrink-0" />
          <span className="truncate">
            3/343 Mackenzie St, Middle Ridge · Next to FoodWorks, free parking
          </span>
        </div>

        {/* Right: Hours, Quick Call, and Concept Pitch Info */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="hidden md:flex items-center gap-1.5 text-[#E4DBED]">
            <Clock className="w-3.5 h-3.5 text-[#CBB9DE]" />
            <span>Mon–Fri 8:30–5 · Sat 8:30–12:30</span>
          </div>

          <span className="hidden md:inline text-white/30">·</span>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="font-semibold text-white hover:text-[#CBB9DE] transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#CBB9DE]" />
            <span>(07) 4659 7347</span>
          </a>

          <span className="text-white/30">·</span>

          <button
            onClick={onOpenPitchModal}
            className="inline-flex items-center gap-1 text-[#CBB9DE] hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3" /> Redesign Pitch
          </button>
        </div>
      </div>
    </div>
  );
};
