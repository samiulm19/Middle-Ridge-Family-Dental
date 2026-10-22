import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, HeartHandshake, Baby, Zap, Clock, ArrowRight, CheckCircle2, X, Calendar } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesBentoProps {
  onSelectServiceToBook: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectServiceToBook }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const openServiceDetails = (serviceId: string) => {
    const s = SERVICES.find((item) => item.id === serviceId);
    if (s) setActiveModalService(s);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-[#E2DAEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-between items-end gap-6 mb-12 text-left"
        >
          <div>
            <span className="text-xs font-semibold text-[#533675] uppercase tracking-widest block mb-2">
              Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
              Care for every age and every smile
            </h2>
          </div>
          <p className="text-base text-[#5C506F] leading-relaxed max-w-md">
            From a toddler's first visit to replacing a missing tooth, all under one roof with gentle clinicians.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 text-left">
          
          {/* Tile 1: Wide Tile (4 cols) — Preventive Care */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => openServiceDetails('checkup-clean')}
            className="md:col-span-4 bg-[#FAF8FC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-[#E2DAEB] cursor-pointer group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#EBE3F2] text-[#533675] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-normal text-[#1F172C] mb-2.5">
                Preventive care
              </h3>
              <p className="text-[#5C506F] text-sm sm:text-base leading-relaxed mb-6">
                Check-ups, scale and clean, digital x-rays, fluoride, and fissure sealants. The gentle everyday care that stops small issues becoming big, painful ones.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-[#1F172C] border border-[#E2DAEB]">Check-ups</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-[#1F172C] border border-[#E2DAEB]">Scale & clean</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-[#1F172C] border border-[#E2DAEB]">Digital X-rays</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white text-[#1F172C] border border-[#E2DAEB]">Sealants</span>
              </div>
            </div>
            <div className="pt-2 text-sm font-semibold text-[#533675] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Explore preventive dentistry</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Tile 2: Tall Feature Tile (2 cols, 2 rows) — Clear Aligners */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => openServiceDetails('clear-aligners')}
            className="md:col-span-2 md:row-span-2 bg-[#2C2A4A] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-[#3E345D] cursor-pointer group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-normal text-white mb-2.5">
                Clear aligners
              </h3>
              <p className="text-[#E4DBED] text-sm leading-relaxed mb-6">
                A discreet way to straighten teeth in Toowoomba. We will help you compare and select the exact system that fits your teeth, bite, and budget.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/15 text-white">Invisalign</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/15 text-white">Spark</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/15 text-white">Angel Aligners</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/15 text-sm font-semibold text-[#CBB9DE] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Explore clear aligners</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Tile 3: Restorative Care (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => openServiceDetails('root-canal')}
            className="md:col-span-2 bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-[#E2DAEB] cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBE3F2] text-[#533675] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-normal text-[#1F172C] mb-2">Restorative</h3>
              <p className="text-[#5C506F] text-xs sm:text-sm leading-relaxed mb-4">
                White fillings, crowns, bridges, inlays, root canal therapy, and custom dentures.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#533675] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Restorative care →
            </span>
          </motion.div>

          {/* Tile 4: Dental Implants (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => openServiceDetails('crowns-bridges')}
            className="md:col-span-2 bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-[#E2DAEB] cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBE3F2] text-[#533675] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-normal text-[#1F172C] mb-2">Dental implants</h3>
              <p className="text-[#5C506F] text-xs sm:text-sm leading-relaxed mb-4">
                A permanent, natural-looking replacement for missing teeth with full chewing strength.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#533675] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              About implants →
            </span>
          </motion.div>

          {/* Tile 5: Emergency Dental (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={() => openServiceDetails('emergency-dental')}
            className="md:col-span-3 bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-[#E2DAEB] cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-normal text-[#1F172C] mb-2">Emergency dental</h3>
              <p className="text-[#5C506F] text-xs sm:text-sm leading-relaxed mb-4">
                Severe toothache, swelling, a chipped or knocked-out tooth. Call and we will fit you in as fast as we can.
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Emergency care →
            </span>
          </motion.div>

          {/* Tile 6: Kids' Dentistry (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => openServiceDetails('childrens-dentistry')}
            className="md:col-span-3 bg-[#EBE3F2] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-[#DCD1E6] cursor-pointer group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white text-[#533675] flex items-center justify-center mb-4">
                <Baby className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-normal text-[#1F172C] mb-2">Kids' dentistry</h3>
              <p className="text-[#1F172C] text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                Medicare CDBS bulk-billed for eligible children aged 2–17 ($1,095+). A play area and ceiling TVs keep little ones happy.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#2C2A4A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Book for the kids →
            </span>
          </motion.div>

        </div>

        {/* Quiet Footnote */}
        <p className="mt-8 text-xs text-[#5C506F] text-left leading-relaxed">
          Also providing: in-chair teeth whitening, porcelain veneers, cosmetic contouring, wisdom teeth extraction, TMJ jaw disorder treatments, and custom sports mouthguards.
        </p>

      </div>

      {/* Service Modal Detail Drawer */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2DAEB] text-left p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-bold text-[#533675] uppercase tracking-wider bg-[#EBE3F2] px-2.5 py-1 rounded-md inline-block mb-3">
              {activeModalService.category}
            </span>

            <h3 className="font-display text-2xl font-normal text-[#1F172C] mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-[#5C506F] leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#E2DAEB]">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F172C] mb-1">Who it’s for</h4>
                <p className="text-xs text-[#5C506F]">{activeModalService.whoItsFor}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F172C] mb-2">What to expect</h4>
                <ul className="space-y-2">
                  {activeModalService.whatToExpect.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5C506F]">
                      <CheckCircle2 className="w-4 h-4 text-[#533675] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2DAEB] flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5C506F]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceToBook(title);
                }}
                className="px-6 py-2.5 rounded-full font-semibold text-xs text-white bg-[#533675] hover:bg-[#3D275A] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
