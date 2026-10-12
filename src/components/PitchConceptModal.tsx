import React from 'react';
import { X, CheckCircle2, AlertTriangle, Sparkles, ExternalLink, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface PitchConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchConceptModal: React.FC<PitchConceptModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2DAEB] text-left p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close pitch modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#533675] text-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design Audit & Agency Pitch Deck</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F172C] tracking-tight">
            Middle Ridge Family Dental Redesign Strategy
          </h3>
          <p className="text-xs sm:text-sm text-[#5C506F] leading-relaxed">
            Independent creative revamp and conversion architecture prepared for Dr. Anish, Dr. Neha, and the Middle Ridge practice.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm text-[#5C506F]">
          
          {/* Section 1: The Problem with the Current Site */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
            <h4 className="font-bold text-[#1F172C] flex items-center gap-2 text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Current Website Audit Findings</span>
            </h4>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Template Placeholder Artifacts:</strong> The current HubSpot live website contains untouched Latin <em>"Lorem ipsum dolor sit amet..."</em> text in the "Our story", "Our values", "Our history", "Our culture", and "Company news" sections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Unconfigured Widgets:</strong> Unconfigured module messages like <em>"No video selected - Select a video type in the sidebar"</em> are visible on the public homepage and about page.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Missed Conversion Opportunities:</strong> The high-value $249 New Patient Special was buried in generic card styling, and booking links were scattered without a clear comfort reassurance story for nervous patients.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: How This Redesign Solves It */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-normal text-[#1F172C] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#533675]" />
              <span>What We Transformed in This Redesign</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-1.5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#1F172C]">Calm Royal Purple Palette & Editorial Type</h5>
                <p className="text-xs text-[#5C506F]">Matching the authentic brand logo's rich purple tones (`#533675` and `#2C2A4A`), delicate lavender tints (`#FAF8FC`), and berry accents (`#B91372`), paired with editorial serif display and crisp clean typography.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-1.5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#1F172C]">Genuine Human Connection</h5>
                <p className="text-xs text-[#5C506F]">Showcases real portraits of all four dentists (Dr. Anish, Dr. Neha, Dr. Pooja, Dr. Erick) and clinical assistants (Mikayla, Kiara, Jamie, Katie) with authentic biographies.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-1.5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#1F172C]">Interactive Treatment Finder & Sticky Flow</h5>
                <p className="text-xs text-[#5C506F]">Self-serve diagnosis tabs ("I have pain", "I want straighter teeth", "I need a check-up") with 3 sequential steps and a sticky side advisory card.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-1.5">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#1F172C]">Horizontal Before/After Smile Slider</h5>
                <p className="text-xs text-[#5C506F]">Interactive draggable comparison tool allowing prospective patients to slide across clear aligner, whitening, and veneer smile transformations.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Verified Evidence & Source Verification */}
          <div className="p-4 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] space-y-2 text-xs">
            <h5 className="font-bold text-[#1F172C] uppercase tracking-wider">Source Material Verification</h5>
            <p className="text-[#5C506F] leading-relaxed">
              All clinical details, pricing ($249 New Patient Special), operating hours, address (Shop 3, 343 Mackenzie St, Middle Ridge), phone numbers, health fund partnerships (Defence Health, NIB, CBHS, TUH), and patient reviews (Clinton, Carynn, Kenny, Bindu) were verified directly against Middle Ridge Family Dental's public domain.
            </p>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-[#E2DAEB] flex flex-wrap items-center justify-between gap-3">
            <a
              href={CLINIC_INFO.originalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#5C506F] hover:text-[#1F172C] underline font-medium"
            >
              <span>Inspect Original Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors cursor-pointer"
            >
              Close & Explore Redesign
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
