import React from 'react';
import { Calendar, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NewPatientOfferProps {
  onOpenBooking: () => void;
}

export const NewPatientOffer: React.FC<NewPatientOfferProps> = ({ onOpenBooking }) => {
  return (
    <section id="offer" className="py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#2C2A4A] via-[#37345B] to-[#2C2A4A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-left relative overflow-hidden shadow-xl">
          
          {/* Subtle background glow accents */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-[#B91372]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-[#A691C0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B91372] text-white">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified New Patient Welcome Package</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                New to Middle Ridge? <br />
                <span className="text-[#f6e1ff]">Start with our $249 Special.</span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Experience comprehensive, unhurried care at our Southridge practice. We take time to thoroughly evaluate your oral health, answer questions, and build a personalized plan without unexpected surprise costs.
              </p>

              {/* Inclusions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#f6e1ff] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Comprehensive Examination</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#f6e1ff] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Gentle Ultrasonic Scale & Clean</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#f6e1ff] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Diagnostic Low-Dose Digital X-rays</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#f6e1ff] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Protective Fluoride Treatment</span>
                </div>
              </div>

              <p className="text-[11px] text-white/60 leading-normal">
                *Applies to new patients only, limit of one per patient. Normally valued at over $350. Cannot be exchanged for cash or vouchers. Health fund rebates may apply via HICAPS on the day.
              </p>
            </div>

            {/* Right Card: Pricing Lockup & Direct CTA */}
            <div className="lg:col-span-5 bg-white text-[#2C2A4A] rounded-2xl p-8 sm:p-10 shadow-2xl border border-white/20 text-center flex flex-col items-center justify-center space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-[#7C7A9A]">
                Total Package Investment
              </span>

              <div className="space-y-1">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#2C2A4A] tracking-tight">
                    $249
                  </span>
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    $350+ value
                  </span>
                </div>
                <p className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full inline-block">
                  Save over $100 on your first appointment
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                Includes full mouth assessment, roof-TV comfort, plain-English advice, and time to ask any questions.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-[#B91372] hover:bg-[#9F0F61] active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your First Visit</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#82957A]" />
                <span>Zero hidden fees · Transparent pricing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
