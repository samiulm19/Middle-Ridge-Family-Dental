import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'New Patients', href: '#new-patients' },
    { label: 'Our Team', href: '#team' },
    { label: 'Location & Hours', href: '#visit' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8FC]/90 backdrop-blur-md border-b border-[#E2DAEB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Brand: Just the logo image with transparent background */}
          <a
            href="/"
            className="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#533675] rounded-xl py-1"
            aria-label="Middle Ridge Family Dental Home"
          >
            <img
              src="./images/logo-transparent.png"
              alt="Middle Ridge Family Dental"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback to logo.jpeg if needed
                (e.target as HTMLImageElement).src = './images/logo.jpeg';
              }}
            />
          </a>

          {/* Navigation Links: Short, 4 essential items */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#1F172C]" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#533675] transition-colors whitespace-nowrap cursor-pointer py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#533675] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Phone Call */}
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#1F172C] hover:text-[#533675] px-3.5 py-2 rounded-full hover:bg-white/80 transition-colors whitespace-nowrap"
              title="Call Middle Ridge Family Dental"
            >
              <Phone className="w-4 h-4 text-[#533675]" />
              <span>(07) 4659 7347</span>
            </a>

            {/* Primary Booking Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-[#533675] hover:bg-[#3D275A] active:scale-[0.98] transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1F172C] hover:text-[#533675] rounded-lg hover:bg-white/60 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2DAEB] bg-[#FAF8FC] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-4 pb-6 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-left text-sm font-medium text-[#1F172C] hover:text-[#533675] hover:bg-white rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#5C506F]" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E2DAEB] flex flex-col gap-2.5">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E2DAEB] text-sm font-semibold text-[#1F172C] bg-white hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#533675]" />
                <span>Call (07) 4659 7347</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Online Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
