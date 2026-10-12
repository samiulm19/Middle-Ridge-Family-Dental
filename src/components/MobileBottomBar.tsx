import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2DAEB] px-4 py-3 shadow-[0_-8px_30px_rgba(44,42,74,0.08)] pb-[calc(12px+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-[1fr_1.4fr] gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="py-3 px-3 rounded-full border border-[#E2DAEB] text-xs font-semibold text-[#1F172C] bg-[#FAF8FC] hover:bg-white flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#533675]" />
          <span>Call clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="py-3 px-3 rounded-full font-semibold text-xs text-white bg-[#533675] hover:bg-[#3D275A] flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book online</span>
        </button>
      </div>
    </div>
  );
};
