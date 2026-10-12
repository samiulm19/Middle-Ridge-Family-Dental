import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Check, ArrowRight, Star, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E2DAEB] bg-[#FAF8FC]">
      
      {/* 01. Base Luminous Gradient Wash */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#F5EEF9]/80 via-[#FAF8FC] to-[#F3ECF7]/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* 02. Minimal Precision Architectural Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#5336750f_1px,transparent_1px),linear-gradient(to_bottom,#5336750f_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_50%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 03. Subtle Atmospheric Clinic Photographic Texture Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.035] mix-blend-multiply pointer-events-none filter grayscale contrast-125 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
        style={{ backgroundImage: `url('/images/clinic-chair.jpg')` }}
        aria-hidden="true"
      />

      {/* 04. Ambient Luminous Atmospheric Glows */}
      <div
        className="absolute -top-32 right-[-10%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-[#764C9E]/14 via-[#A782CC]/8 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-[-8%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#EEDFD5]/60 via-[#F7EFE8]/30 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow & High-Trust Rating Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E2DAEB] text-xs font-semibold text-[#533675] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#533675] animate-pulse" />
                <span>Family Dentist</span>
                <span aria-hidden="true" className="text-[#A297B3]">·</span>
                <span>Middle Ridge, Toowoomba</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFF8] border border-[#E2DAEB]/60 text-xs font-medium text-[#1F172C]">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-semibold text-[#1F172C]">4.9</span>
                <span className="text-[#5C506F]">(115+ Google Reviews)</span>
              </div>
            </div>

            {/* Headline with Delicate Editorial Serif Italic */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal text-[#1F172C] tracking-tight leading-[1.08] text-balance">
              Creating smiles with a <em className="italic text-[#533675] font-normal">gentle touch</em>
            </h1>

            {/* Supporting Lede */}
            <p className="text-base sm:text-lg text-[#5C506F] leading-relaxed max-w-2xl font-normal">
              A family-owned practice with a calm, spa-like feel in Southridge. Gentle check-ups, kids' dentistry, clear aligners and emergency care, explained in plain language so you always feel in control.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-[#533675] hover:bg-[#3D275A] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Book online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-[#1F172C] bg-white border border-[#E2DAEB] hover:border-[#533675] hover:text-[#533675] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#533675]" />
                <span>Call (07) 4659 7347</span>
              </a>
            </div>

            {/* Trust Points */}
            <ul className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5C506F]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>All health funds, HICAPS on the spot</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>CDBS bulk-billed for eligible kids</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>Saturday mornings available</span>
              </li>
            </ul>

          </motion.div>

          {/* Right Column: Hero Media with Sculpted Arch & Floating Offer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative text-left"
          >
            {/* Ambient Halo behind Arch */}
            <div 
              className="absolute -inset-4 bg-gradient-to-tr from-[#533675]/20 via-[#A782CC]/15 to-[#F7EFE8]/30 rounded-t-[220px] rounded-b-3xl blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* Sculpted Arch Photo Container with authentic clinic operatory */}
            <div className="relative rounded-t-[180px] sm:rounded-t-[220px] rounded-b-3xl overflow-hidden aspect-[4/5] bg-[#EBE3F2] shadow-2xl border-4 border-white">
              <img
                src="/images/clinic-chair.jpg"
                alt="Inside the calm treatment room at Middle Ridge Family Dental"
                className="w-full h-full object-cover object-center"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1F172C] shadow-sm flex items-center gap-1.5 border border-[#E2DAEB]/60">
                <span className="w-2 h-2 rounded-full bg-[#533675]" />
                <span>Spa-like Surgery</span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-white text-xs">
                <span className="text-[#EBE3F2] font-medium block text-[11px] uppercase tracking-wider">Southridge Medical Suite</span>
                <span className="font-semibold text-sm">Ceiling Netflix TVs & gentle sedation</span>
              </div>
            </div>

            {/* Overlapping Floating Offer Card with Entrance Delay */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-3 sm:-left-6 sm:bottom-6 max-w-[290px] sm:max-w-[310px] bg-white rounded-2xl p-5 shadow-[0_18px_40px_-22px_rgba(44,42,74,0.35)] border border-[#E2DAEB] space-y-2 z-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#F7EFE8] text-[#865134] px-2.5 py-1 rounded-md">
                  New patient special
                </span>
                <span className="text-xs text-[#533675] font-semibold bg-[#F4EFF8] px-2 py-0.5 rounded">
                  Save $100+
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-normal text-[#2C2A4A] tabular-nums leading-none">
                  $249
                </span>
                <span className="text-xs text-[#5C506F] line-through font-medium">
                  normally $350+
                </span>
              </div>

              <p className="text-xs text-[#5C506F] leading-relaxed">
                Comprehensive check-up, gentle scale & clean, low-dose digital x-rays, and remineralising treatment.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full mt-1 py-2 px-3 rounded-xl bg-[#533675] hover:bg-[#3D275A] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Claim $249 Special</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
