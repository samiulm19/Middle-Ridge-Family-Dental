import React from 'react';
import { Phone, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenPitchModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPitchModal }) => {
  return (
    <footer className="py-12 pb-24 md:pb-12 bg-white border-t border-[#E2DAEB] text-xs text-[#5C506F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-[#E2DAEB]">
          {/* Logo with transparent bg only */}
          <a href="/" className="flex items-center shrink-0" aria-label="Middle Ridge Family Dental Home">
            <img
              src="/images/logo-transparent.png"
              alt="Middle Ridge Family Dental"
              className="h-10 sm:h-11 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/logo.jpeg';
              }}
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-6" aria-label="Footer navigation">
            <a href="#services" className="hover:text-[#533675] transition-colors">Services</a>
            <a href="#new-patients" className="hover:text-[#533675] transition-colors">New patients</a>
            <a href="#nervous" className="hover:text-[#533675] transition-colors">Nervous care</a>
            <a href="#team" className="hover:text-[#533675] transition-colors">Our dentists</a>
            <a href="#payment" className="hover:text-[#533675] transition-colors">Health funds</a>
            <a href="#visit" className="hover:text-[#533675] transition-colors">Location</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/middleridgefamilydental"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#533675] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/middleridgefamilydental/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#533675] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer & Pitch Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} Middle Ridge Family Dental · Your preferred Toowoomba dentist · 3/343 Mackenzie St, Middle Ridge QLD</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPitchModal}
              className="inline-flex items-center gap-1 text-[#533675] font-semibold hover:underline cursor-pointer"
            >
              <Sparkles className="w-3 h-3" /> View Design Transformation Notes
            </button>
            <span className="text-[#E2DAEB]">|</span>
            <a
              href={CLINIC_INFO.originalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C506F] hover:text-[#1F172C] inline-flex items-center gap-1"
            >
              Original Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
