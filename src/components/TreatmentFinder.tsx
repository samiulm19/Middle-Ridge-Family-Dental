import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface TreatmentFinderProps {
  onOpenBooking: () => void;
  onSelectServiceToBook: (serviceTitle: string) => void;
}

export const TreatmentFinder: React.FC<TreatmentFinderProps> = ({
  onOpenBooking,
  onSelectServiceToBook,
}) => {
  const [activeTab, setActiveTab] = useState<'pain' | 'straight' | 'check'>('pain');

  const tabs = [
    { id: 'pain', label: 'I have pain' },
    { id: 'straight', label: 'I want straighter teeth' },
    { id: 'check', label: 'I need a check-up' },
  ];

  return (
    <section id="finder" className="relative py-20 lg:py-28 bg-white border-b border-[#E2DAEB] overflow-hidden">
      {/* Minimal grid background overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#53367508_1px,transparent_1px),linear-gradient(to_bottom,#53367508_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-12 text-left"
        >
          <div>
            <span className="text-xs font-semibold text-[#533675] uppercase tracking-widest block mb-2">
              Treatment finder
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
              What brings you in today?
            </h2>
          </div>
          <p className="text-base text-[#5C506F] leading-relaxed max-w-xl">
            Pick the one that sounds like you. We’ll show you what the first visit looks like and the fastest way to get seen by our Toowoomba team.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-8" role="tablist" aria-label="Choose your situation">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#533675] text-white shadow-sm'
                    : 'bg-[#FAF8FC] text-[#1F172C] hover:border-[#533675] border border-[#E2DAEB]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content with Sticky Side Column */}
        <AnimatePresence mode="wait">
          {activeTab === 'pain' && (
            <motion.div
              key="pain"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FAF8FC] rounded-3xl p-6 sm:p-10 lg:p-12 text-left border border-[#E2DAEB]"
            >
              {/* Left Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#1F172C] font-normal mb-2">
                    Let’s get you out of pain, today if we can
                  </h3>
                  <p className="text-[#5C506F] text-sm sm:text-base leading-relaxed">
                    Toothache, a broken tooth, swelling or jaw pain. Call us first: we keep priority time set aside each day for dental emergencies.
                  </p>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      1
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Call (07) 4659 7347</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">Tell our Southridge reception what you are experiencing and we will allocate the earliest slot.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      2
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Diagnosis & gentle relief</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">A thorough examination and digital x-ray to pinpoint the cause, then we safely ease your pain first.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      3
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">A transparent long-term plan</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">Filling, gentle root canal, or extraction — with every cost explained before any further work starts.</span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Right: Sticky Sidebar Card */}
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 self-start">
                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#533675]" />
                    Nervous about it?
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    Ask for nitrous oxide (happy gas) to help you relax in the chair without feeling anxious.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-[#533675]" />
                    Jaw or TMJ pain?
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    Dr Anish has a special clinical interest in TMJ disorders, muscular facial ache, and custom night guards.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call for an emergency slot: (07) 4659 7347</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceToBook('Same-Day Emergency Dental')}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#533675] hover:underline cursor-pointer"
                  >
                    <span>Or request emergency slot online</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'straight' && (
            <motion.div
              key="straight"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FAF8FC] rounded-3xl p-6 sm:p-10 lg:p-12 text-left border border-[#E2DAEB]"
            >
              {/* Left Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#1F172C] font-normal mb-2">
                    Straighter teeth, without metal braces
                  </h3>
                  <p className="text-[#5C506F] text-sm sm:text-base leading-relaxed">
                    We offer three leading clear aligner systems: Invisalign, Spark, and Angel Aligners. Virtually invisible, removable for eating, and planned around your smile goals.
                  </p>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      1
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Smile consultation</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">We examine your bite, tooth alignment, and gum health to confirm if clear aligners suit you.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      2
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Digital scan & 3D preview</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">A digital simulation shows how your teeth will shift step-by-step before you commit.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      3
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Wear, swap, review</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">You change into new trays every 1–2 weeks with periodic progress checks at Middle Ridge.</span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Right: Sticky Sidebar Card */}
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 self-start">
                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#533675]" />
                    Spread the cost over time
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    Zip, Humm, and Afterpay are accepted, plus private health fund orthodontic rebates.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#533675]" />
                    Brighten your finish
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    Pair your aligners with professional teeth whitening or composite contouring for a radiant result.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectServiceToBook('Clear Aligners (Invisalign, Spark & Angel)')}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a smile consultation</span>
                  </button>

                  <a
                    href="#gallery"
                    className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#533675] hover:underline"
                  >
                    <span>View Before & After smile cases below</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'check' && (
            <motion.div
              key="check"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FAF8FC] rounded-3xl p-6 sm:p-10 lg:p-12 text-left border border-[#E2DAEB]"
            >
              {/* Left Steps */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#1F172C] font-normal mb-2">
                    A thorough check-up and clean
                  </h3>
                  <p className="text-[#5C506F] text-sm sm:text-base leading-relaxed">
                    New to our practice? The $249 new patient special covers everything you need in one visit without hidden extras.
                  </p>
                </div>

                <ol className="space-y-4 pt-2">
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      1
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Comprehensive exam</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">Teeth, gums, bite alignment, and an oral cancer check with intraoral camera preview.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      2
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Scale, clean & x-rays</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">Ultrasonic plaque removal, polishing, and low-dose digital x-rays to spot hidden decay early.</span>
                    </div>
                  </li>
                  <li className="grid grid-cols-[38px_1fr] gap-4 items-start">
                    <span className="w-9 h-9 rounded-full bg-white text-[#533675] font-bold text-sm flex items-center justify-center shadow-xs border border-[#E2DAEB]">
                      3
                    </span>
                    <div>
                      <strong className="block text-[#1F172C] text-sm sm:text-base font-semibold">Fluoride & honest advice</strong>
                      <span className="text-[#5C506F] text-xs sm:text-sm">Protective remineralising fluoride and a straightforward, pressure-free prevention plan.</span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Right: Sticky Sidebar Card */}
              <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 self-start">
                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#533675]" />
                    Bringing the kids?
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    Eligible children 2–17 are bulk-billed under Medicare CDBS (up to $1,095+). No out-of-pocket gap.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#E2DAEB] shadow-xs space-y-1">
                  <b className="text-sm font-semibold text-[#1F172C] block flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#533675]" />
                    Health fund rebates
                  </b>
                  <p className="text-xs text-[#5C506F] leading-relaxed">
                    All funds accepted. Claim immediately on the spot with electronic HICAPS.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectServiceToBook('$249 New Patient Special')}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a check-up & clean</span>
                  </button>

                  <a
                    href="#new-patients"
                    className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#533675] hover:underline"
                  >
                    <span>Read $249 new patient details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
