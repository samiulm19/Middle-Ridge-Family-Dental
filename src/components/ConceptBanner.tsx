import React from 'react';
import { Sparkles, ExternalLink, Info } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ConceptBannerProps {
  onOpenPitchModal: () => void;
}

export const ConceptBanner: React.FC<ConceptBannerProps> = ({ onOpenPitchModal }) => {
  return (
    <aside aria-label="Pitch concept notice" className="bg-[#2C2A4A] text-white/90 border-b border-[#2C2A4A]/20 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#B91372] text-white uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Redesign Pitch
          </span>
          <span className="text-white/80 hidden sm:inline">
            Independent award-calibre redesign concept for <strong>Middle Ridge Family Dental</strong>
          </span>
          <span className="text-white/80 sm:hidden">
            Redesign concept for <strong>Middle Ridge Family Dental</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <button
            onClick={onOpenPitchModal}
            className="inline-flex items-center gap-1 text-white hover:text-[#f6e1ff] underline underline-offset-2 transition-colors cursor-pointer font-medium"
          >
            <Info className="w-3.5 h-3.5" /> View Pitch Strategy & Audit
          </button>
          <span className="text-white/30">|</span>
          <a
            href={CLINIC_INFO.originalWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            Original Site <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
};
