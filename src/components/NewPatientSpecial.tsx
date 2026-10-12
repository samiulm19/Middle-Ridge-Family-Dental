import React from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface NewPatientSpecialProps {
  onOpenBooking: () => void;
}

export const NewPatientSpecial: React.FC<NewPatientSpecialProps> = ({ onOpenBooking }) => {
  return (
    <section id="new-patients" className="relative py-20 lg:py-28 bg-[#FAF8FC] border-b border-[#E2DAEB] overflow-hidden">
      {/* Minimal architectural grid background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#53367509_1px,transparent_1px),linear-gradient(to_bottom,#53367509_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 bg-[#F5EFF9] rounded-3xl overflow-hidden shadow-[0_18px_40px_-22px_rgba(44,42,74,0.3)] border border-[#E2DAEB] text-left"
        >
          {/* Authentic Reception Photo */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#EBE3F2] overflow-hidden">
            <img
              src="/images/clinic-waiting.jpg"
              alt="Reception and comfortable waiting lounge at Middle Ridge Family Dental"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#1F172C]">
              Southridge Clinic Waiting Lounge
            </div>
          </div>

          {/* Special Body */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-[#EBE3F2] text-[#533675] px-3 py-1 rounded-md mb-3">
                New patient special
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C2A4A] tracking-tight leading-tight">
                Your first visit, sorted
              </h2>
            </div>

            {/* Price Lockup */}
            <div className="flex items-baseline gap-3.5 flex-wrap">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal text-[#2C2A4A] tabular-nums leading-none">
                $249
              </span>
              <span className="text-[#5C506F] text-sm sm:text-base font-semibold line-through">
                Normally valued over $350+
              </span>
            </div>

            {/* Inclusions 2x2 Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#1F172C]">
                <span className="w-5 h-5 rounded-full bg-[#533675] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Comprehensive examination</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#1F172C]">
                <span className="w-5 h-5 rounded-full bg-[#533675] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Scale and clean</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#1F172C]">
                <span className="w-5 h-5 rounded-full bg-[#533675] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Low-dose digital x-rays</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#1F172C]">
                <span className="w-5 h-5 rounded-full bg-[#533675] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Fluoride treatment</span>
              </li>
            </ul>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-[#533675] hover:bg-[#3D275A] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Claim the $249 special</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#5C506F] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#533675]" />
                <span>Instant HICAPS rebates apply on the day</span>
              </span>
            </div>

            <p className="text-xs text-[#5C506F] leading-relaxed max-w-xl">
              New patients only, limit of one per patient. Cannot be exchanged for cash or vouchers. Upfront transparency guaranteed.
            </p>
          </div>
        </motion.article>

      </div>
    </section>
  );
};
