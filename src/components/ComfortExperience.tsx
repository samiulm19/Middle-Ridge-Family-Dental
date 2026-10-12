import React from 'react';
import { Tv, Sparkles, Smile, Baby, Accessibility, Clock, CheckCircle2 } from 'lucide-react';

interface ComfortExperienceProps {
  onOpenBooking: () => void;
}

export const ComfortExperience: React.FC<ComfortExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="comfort" className="py-20 lg:py-28 bg-[#FDFCFE] text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B91372] uppercase tracking-wider">
            <span>Patient-Centered Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Stress Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2A4A] tracking-tight leading-tight text-balance">
            Designed from the ground up for nervous patients and busy families.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We understand that going to the dentist can feel daunting. That is why Middle Ridge Family Dental was built around a soothing, spa-like experience where you are listened to, respected, and kept completely in control.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Ceiling-Mounted Entertainment & Soothing Chair */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6EEF9] flex items-center justify-center text-[#B91372]">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-[#7C7A9A] bg-[#F7F5FA] px-3 py-1 rounded-full">
                  Every Treatment Room
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2A4A] mb-3">
                Watch your favourite series on ceiling-mounted TVs
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Lie back in our ergonomic chair, pop on comfortable wireless audio, and lose yourself in Netflix, Disney+, or YouTube while our dental team looks after your smile. It transforms appointments into genuine downtime.
              </p>
            </div>

            {/* Authentic Clinic Chair Image */}
            <div className="rounded-xl overflow-hidden relative aspect-[16/9] bg-slate-100 mt-2 border border-slate-100">
              <img
                src="/images/clinic-chair.jpg"
                alt="Middle Ridge Family Dental treatment suite featuring ergonomic chair and ceiling display"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                Authentic Treatment Room · Southridge Clinic
              </div>
            </div>
          </div>

          {/* Card 2: Nitrous Oxide (Happy Gas) Calming Care */}
          <div className="lg:col-span-5 bg-[#2C2A4A] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#f6e1ff] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Nitrous Oxide (Happy Gas) Sedation
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                If dental anxiety makes treatment difficult, our certified dentists (Dr. Neha and Dr. Erick) offer gentle nitrous oxide. It provides quick, warm relaxation without putting you to sleep — and you can safely drive yourself home right after.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-white/90 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B91372] shrink-0" />
                  <span>Immediate calming relief from dental phobia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B91372] shrink-0" />
                  <span>Stay completely awake and responsive</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B91372] shrink-0" />
                  <span>No lasting grogginess · Safe for all ages</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60">Administered by Dr. Neha & Dr. Erick</span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#f6e1ff] hover:text-white underline cursor-pointer"
              >
                Inquire About Happy Gas
              </button>
            </div>
          </div>

          {/* Card 3: Dedicated Children’s Area & Family Warmth */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm text-left">
            <div className="w-11 h-11 rounded-xl bg-[#F0F4EE] flex items-center justify-center text-[#7B8F74] mb-5">
              <Baby className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2C2A4A] mb-2">Dedicated Kids Play Lounge</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Young children stay happy and occupied with toys, books, and activities while parents attend appointments or wait for siblings.
            </p>
            <div className="text-xs text-[#7B8F74] font-semibold">
              Bulk-Billed CDBS for eligible kids aged 2–17
            </div>
          </div>

          {/* Card 4: Plain English Communication */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm text-left">
            <div className="w-11 h-11 rounded-xl bg-[#F6EEF9] flex items-center justify-center text-[#B91372] mb-5">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2C2A4A] mb-2">Honest, Jargon-Free Care</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              We explain every procedure with intraoral cameras and clear everyday language. You will always know options, timeline, and exact costs before anything starts.
            </p>
            <div className="text-xs text-[#B91372] font-semibold">
              Zero pressure · Patient-led decisions
            </div>
          </div>

          {/* Card 5: Convenient Southridge Location & Step-Free Access */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm text-left">
            <div className="w-11 h-11 rounded-xl bg-[#F7F5FA] flex items-center justify-center text-[#2C2A4A] mb-5">
              <Accessibility className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#2C2A4A] mb-2">Pram & Wheelchair Friendly</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Step-free ground floor entry right in Southridge Centre next to FoodWorks, with wide doorways, accessible restrooms, and ample front-door parking.
            </p>
            <div className="text-xs text-slate-700 font-semibold">
              Effortless parking right at our doorstep
            </div>
          </div>

        </div>

        {/* Real Waiting Room Photo Strip */}
        <div className="mt-12 bg-[#FAF9FD] rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="md:w-1/2 space-y-3">
            <h3 className="text-2xl font-bold text-[#2C2A4A]">Experience the clinic before your visit</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Step into a bright, contemporary reception designed to feel more like a tranquil boutique than a sterile medical surgery. Ample natural light, soothing music, and a genuinely welcoming team.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#B91372] hover:bg-[#9F0F61] transition-all cursor-pointer"
              >
                Schedule Your Comfortable Visit
              </button>
            </div>
          </div>

          <div className="md:w-1/2 w-full rounded-xl overflow-hidden aspect-[16/10] bg-slate-200 border border-slate-100">
            <img
              src="/images/clinic-waiting.jpg"
              alt="Middle Ridge Family Dental Southridge reception and waiting lounge"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
