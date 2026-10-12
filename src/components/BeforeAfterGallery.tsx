import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Check,
  Calendar,
  Stethoscope,
  Clock,
  ShieldCheck,
  ChevronRight,
  Award,
  MoveHorizontal,
  RotateCcw,
} from 'lucide-react';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

interface CaseStudy {
  id: string;
  category: string;
  name: string;
  title: string;
  doctor: string;
  timeline: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  imageCaption: string;
  imageBadge: string;
  description: string;
  clinicalSteps: {
    stage: string;
    detail: string;
  }[];
  clinicalHighlights: string[];
  patientOutcome: string;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeCaseId, setActiveCaseId] = useState<string>('veneers');
  const [activeTab, setActiveTab] = useState<'clinical' | 'pathway'>('clinical');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const cases: Record<string, CaseStudy> = {
    veneers: {
      id: 'veneers',
      category: 'Cosmetic Dentistry',
      name: 'Porcelain Veneers',
      title: 'Smile Symmetry & Ceramic Contouring',
      doctor: 'Dr. Anish Upadhyay & Dr. Erick Jin',
      timeline: '2 gentle appointments',
      beforeImg: '/images/cases/veneers-before.jpg',
      afterImg: '/images/cases/veneers-after.jpg',
      beforeLabel: 'Before: Enamel wear, chipped incisal edges & spacing',
      afterLabel: 'After: Custom handcrafted porcelain veneers',
      imageCaption: 'Aesthetic Porcelain Veneer Transformation: Lifelike ceramic translucency and balanced midline.',
      imageBadge: 'Aesthetic Porcelain Restoration',
      description:
        'Custom hand-crafted ceramic veneers designed to correct worn edges, discoloured enamel, and slight spacing. Engineered to mirror natural tooth translucency while providing long-lasting structural strength.',
      clinicalSteps: [
        {
          stage: '1. Digital Aesthetic Design',
          detail: '3D intraoral digital impressions taken with zero messy putty trays, mapping tooth anatomy and facial midline.',
        },
        {
          stage: '2. Conservative Tooth Preparation',
          detail: 'Minimal-prep enamel contouring with gentle local anaesthesia and temporary trial veneers worn for comfort.',
        },
        {
          stage: '3. Handcrafted Bonding',
          detail: 'High-strength adhesive bonding of custom feldspathic ceramic veneers, polished to high-gloss natural luster.',
        },
      ],
      clinicalHighlights: [
        'Bleach BL2 / B1 natural vitality shade match',
        'Harmonious smile arch following natural lip curvature',
        'Stain-resistant ceramic surface with 10+ year longevity',
        'Private health fund major dental rebates applicable',
      ],
      patientOutcome: 'Flawlessly contoured anterior smile line with natural light reflection and renewed personal confidence.',
    },
    whitening: {
      id: 'whitening',
      category: 'Teeth Brightening',
      name: 'In-Chair Whitening',
      title: 'Gentle In-Chair Enamel Whitening',
      doctor: 'Dr. Erick Jin',
      timeline: 'Single 60-min in-chair session',
      beforeImg: '/images/cases/whitening-before.jpg',
      afterImg: '/images/cases/whitening-after.jpg',
      beforeLabel: 'Before: Noticeable tea & coffee enamel discoloration (Shade A3.5)',
      afterLabel: 'After: Radiant luminous shade lift (Shade B1)',
      imageCaption: 'Professional In-Chair Whitening: 6 to 8 shades lighter without enamel erosion or gingival irritation.',
      imageBadge: 'In-Chair Whitening Suite',
      description:
        'Professional in-chair whitening performed in our quiet surgical suite. We protect your gums with a gentle barrier before applying medical-grade active oxygen gel, brightened under calibrated LED activation while you watch TV.',
      clinicalSteps: [
        {
          stage: '1. Enamel Shade Calibration',
          detail: 'Comprehensive shade assessment using clinical Vita guides to record baseline tone and establish realistic goals.',
        },
        {
          stage: '2. Soft-Tissue Barrier Protection',
          detail: 'Light-cured gingival barrier shields gums and sensitive cervical margins completely from whitening agent.',
        },
        {
          stage: '3. Three 15-Minute Whitening Cycles',
          detail: 'Gentle active oxygen application with soothing remineralising mousse post-treatment to minimize tooth sensitivity.',
        },
      ],
      clinicalHighlights: [
        'Noticeable 4 to 8 shade lift in one single appointment',
        'Ceiling-mounted Netflix TV and noise-cancelling headphones',
        'Enamel-safe pH neutral formula with ACP remineraliser',
        'Includes custom take-home touch-up kit for lasting brightness',
      ],
      patientOutcome: 'Bright, radiant smile lift without damaging delicate enamel or irritating gums.',
    },
    aligners: {
      id: 'aligners',
      category: 'Orthodontics',
      name: 'Clear Aligners',
      title: 'Discreet Orthodontic Straightening',
      doctor: 'Dr. Neha Kutty & Dr. Anish Upadhyay',
      timeline: '6 – 12 months average',
      beforeImg: '/images/cases/aligners-before.jpg',
      afterImg: '/images/cases/aligners-after.jpg',
      beforeLabel: 'Before: Anterior crowding, overlapping incisors & open bite',
      afterLabel: 'After: Balanced dental arch & harmonious tooth alignment',
      imageCaption: 'Clear Orthodontic Aligner Case: Balanced aesthetic arch alignment without metal wires or brackets.',
      imageBadge: 'Digital Orthodontic Planning',
      description:
        'Straighten crowded teeth, close gaps, and balance your bite with removable, virtually invisible aligners. Every step is digitally planned so you can see your virtual before-and-after smile simulation before starting.',
      clinicalSteps: [
        {
          stage: '1. 3D Digital Scan Preview',
          detail: 'High-speed intraoral 3D scanning generates an accurate digital simulation of your tooth movement journey.',
        },
        {
          stage: '2. Custom Clear Trays Fabricated',
          detail: 'Medical-grade BPA-free transparent aligners custom manufactured to shift teeth with gentle, continuous force.',
        },
        {
          stage: '3. Regular Progress Monitoring',
          detail: 'Short check-ins every 6–8 weeks to confirm movements, supply new trays, and ensure comfortable tooth progression.',
        },
      ],
      clinicalHighlights: [
        'Zero metal brackets or uncomfortable archwires',
        'Fully removable for effortless eating, brushing, and flossing',
        'Virtually undetectable during everyday work and social conversations',
        'Interest-free payment plans available (Afterpay, Zip, Humm)',
      ],
      patientOutcome: 'Straight, evenly aligned teeth with balanced functional occlusion and lifelong oral health benefits.',
    },
  };

  const currentCase = cases[activeCaseId];

  // Dragging interaction for split before/after slider
  const handleMove = useCallback((clientX: number) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#FAF8FC] border-b border-[#E2DAEB] overflow-hidden">
      {/* Minimal grid background overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#53367509_1px,transparent_1px),linear-gradient(to_bottom,#53367509_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Staggered Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3F2] text-[#533675] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Excellence & Smile Results</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
            Real outcomes from our Middle Ridge surgery
          </h2>
          <p className="text-base text-[#5C506F] leading-relaxed">
            Drag the slider to compare real patient transformations before and after clinical care. Explore how our Toowoomba dental team delivers gentle, predictable aesthetic results.
          </p>

          {/* Horizontal Case Switcher Tabs */}
          <div className="pt-4 flex flex-wrap gap-2.5" role="tablist" aria-label="Select clinical case study">
            {Object.values(cases).map((c) => {
              const isActive = activeCaseId === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCaseId(c.id);
                    setSliderPos(50);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#533675] text-white shadow-sm'
                      : 'bg-white text-[#1F172C] border border-[#E2DAEB] hover:border-[#533675] hover:bg-[#FAF8FC]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-[#533675]'}`} />
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2-Column Responsive Layout: Interactive Before & After Visuals & Clinical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Interactive Before/After Comparison Showcase */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Visual Photography Container with Interactive Split Slider */}
            <div
              ref={imageContainerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchMove={handleTouchMove}
              className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-[0_18px_40px_-22px_rgba(44,42,74,0.25)] border-4 border-white aspect-[16/11] select-none cursor-ew-resize group"
            >
              {/* Layer 1: AFTER image (full background base) */}
              <img
                src={currentCase.afterImg}
                alt={currentCase.afterLabel}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
              />

              {/* Layer 2: BEFORE image (clipped dynamically by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={currentCase.beforeImg}
                  alt={currentCase.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Top Floating Badge: Treatment Category */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
                <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#533675] shadow-sm tracking-wide">
                  {currentCase.imageBadge}
                </span>
              </div>

              {/* Doctor Tag */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1.5 shadow-sm">
                  <Stethoscope className="w-3.5 h-3.5 text-[#EBE3F2]" />
                  <span>{currentCase.doctor}</span>
                </span>
              </div>

              {/* Floating Pill Badges: BEFORE & AFTER indicators */}
              <div className="absolute top-14 left-4 z-20 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-white/20">
                  Before
                </span>
              </div>
              <div className="absolute top-14 right-4 z-20 pointer-events-none">
                <span className="bg-[#533675]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border border-white/20">
                  After
                </span>
              </div>

              {/* Interactive Divider Line and Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.7)] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Draggable Circular Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#533675] shadow-xl border-2 border-[#533675] flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95">
                  <MoveHorizontal className="w-4 h-4 text-[#533675]" />
                </div>
              </div>

              {/* Bottom Scrim Caption & Verified Label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-10 pb-4 px-5 text-white pointer-events-none z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#f5e3ff] mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Clinical Case · Middle Ridge Surgery</span>
                </div>
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {currentCase.imageCaption}
                </p>
              </div>
            </div>

            {/* Slider Controls & Quick Preset Jump Buttons */}
            <div className="bg-white rounded-2xl p-3 border border-[#E2DAEB] flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  sliderPos === 100
                    ? 'bg-[#533675] text-white border-[#533675]'
                    : 'bg-white text-[#5C506F] border-[#E2DAEB] hover:text-[#1F172C] hover:bg-[#FAF8FC]'
                }`}
              >
                Show 100% Before
              </button>

              <div className="flex items-center gap-2.5 flex-1 min-w-[180px] px-2">
                <span className="text-[11px] font-semibold text-[#5C506F] whitespace-nowrap">
                  Slide: {Math.round(sliderPos)}%
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E2DAEB] rounded-lg appearance-none cursor-pointer accent-[#533675]"
                  aria-label="Before after image comparison slider"
                />
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  title="Reset to 50% split"
                  className="p-1 text-[#5C506F] hover:text-[#533675] rounded-md hover:bg-[#FAF8FC] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  sliderPos === 0
                    ? 'bg-[#533675] text-white border-[#533675]'
                    : 'bg-white text-[#5C506F] border-[#E2DAEB] hover:text-[#1F172C] hover:bg-[#FAF8FC]'
                }`}
              >
                Show 100% After
              </button>
            </div>

            {/* Individual Case Before/After Descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#865134] block mb-0.5">
                  Baseline (Before)
                </span>
                <p className="text-[#1F172C] font-medium leading-snug">
                  {currentCase.beforeLabel}
                </p>
              </div>
              <div className="bg-[#F5EFF8] border border-[#E2DAEB] rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#533675] block mb-0.5">
                  Restored Result (After)
                </span>
                <p className="text-[#1F172C] font-medium leading-snug">
                  {currentCase.afterLabel}
                </p>
              </div>
            </div>

            {/* Interactive Tab Switcher for Clinical Details vs Pathway */}
            <div className="bg-white rounded-2xl p-2 border border-[#E2DAEB] flex items-center gap-1 shadow-xs">
              <button
                onClick={() => setActiveTab('clinical')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'clinical'
                    ? 'bg-[#533675] text-white shadow-xs'
                    : 'text-[#5C506F] hover:text-[#1F172C] hover:bg-[#FAF8FC]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Clinical Highlights & Specifications</span>
              </button>
              <button
                onClick={() => setActiveTab('pathway')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'pathway'
                    ? 'bg-[#533675] text-white shadow-xs'
                    : 'text-[#5C506F] hover:text-[#1F172C] hover:bg-[#FAF8FC]'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Step-by-Step Treatment Pathway</span>
              </button>
            </div>

            {/* Tab Content Area */}
            <AnimatePresence mode="wait">
              {activeTab === 'clinical' ? (
                <motion.div
                  key="clinical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-[#E2DAEB] space-y-3"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F172C]">
                    Key Clinical Criteria Achieved
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {currentCase.clinicalHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1F172C] leading-snug">
                        <Check className="w-4 h-4 text-[#533675] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="pathway"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-[#E2DAEB] space-y-4"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F172C]">
                    Patient Treatment Protocol
                  </h4>
                  <div className="space-y-3.5 pt-1">
                    {currentCase.clinicalSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#EBE3F2] text-[#533675] text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <strong className="text-xs font-semibold text-[#1F172C] block">
                            {step.stage}
                          </strong>
                          <p className="text-xs text-[#5C506F] leading-relaxed mt-0.5">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Sticky Summary & Action Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-[#E2DAEB] shadow-[0_12px_32px_-16px_rgba(44,42,74,0.12)] space-y-6 lg:sticky lg:top-28 self-start">
            
            {/* Case Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#533675] tracking-wider uppercase bg-[#EBE3F2] px-2.5 py-1 rounded-md">
                  {currentCase.category}
                </span>
                <span className="text-xs font-medium text-[#5C506F] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentCase.timeline}</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F172C] mt-2 mb-2 leading-snug">
                {currentCase.title}
              </h3>
              
              <div className="text-xs text-[#5C506F] flex items-center gap-1.5 pt-1">
                <span>Clinical Lead:</span>
                <strong className="text-[#1F172C]">{currentCase.doctor}</strong>
              </div>
            </div>

            {/* Clinical Overview Paragraph */}
            <div className="pt-2 border-t border-[#E2DAEB]">
              <p className="text-sm text-[#5C506F] leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            {/* Outcome Callout Box */}
            <div className="bg-[#FAF8FC] rounded-2xl p-4 border border-[#E2DAEB] space-y-1">
              <span className="text-[10px] font-bold text-[#533675] uppercase tracking-wider block">
                Documented Patient Outcome
              </span>
              <p className="text-xs font-medium text-[#1F172C] leading-relaxed">
                "{currentCase.patientOutcome}"
              </p>
            </div>

            {/* Practice Guarantees */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#1F172C]">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>Zero obligation smile consultation & digital plan</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1F172C]">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>HICAPS on-the-spot health fund claims processed</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#1F172C]">
                <Check className="w-4 h-4 text-[#533675] shrink-0" />
                <span>Flexible payment terms with Afterpay, Zip & Humm</span>
              </div>
            </div>

            {/* Booking CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Smile Consultation</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
