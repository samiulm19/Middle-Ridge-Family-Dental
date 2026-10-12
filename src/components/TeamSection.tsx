import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DENTISTS, CLINICAL_ASSISTANTS } from '../data/clinicData';
import { TeamMember } from '../types';
import { Calendar, X, Check, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onSelectDoctorToBook: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctorToBook }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-[#E2DAEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-between items-end gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-semibold text-[#533675] uppercase tracking-widest block mb-2">
              Our dentists
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
              Local, family-owned, and here for the long run
            </h2>
          </div>
          <button
            onClick={() => setSelectedDoctor(DENTISTS[0])}
            className="text-xs font-semibold text-[#533675] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Meet the whole team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* 4 Dentists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DENTISTS.map((dentist, idx) => (
            <motion.article
              key={dentist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#FAF8FC] rounded-2xl overflow-hidden border border-[#E2DAEB] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Authentic Portrait Image */}
                <div className="aspect-square relative overflow-hidden bg-[#EBE3F2]">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Details */}
                <div className="p-5 space-y-1.5">
                  <h3 className="font-display text-xl font-normal text-[#1F172C]">
                    {dentist.name}
                  </h3>
                  <p className="text-xs text-[#5C506F]">
                    {dentist.role} · {dentist.credentials}
                  </p>
                  <p className="text-xs font-semibold text-[#533675] pt-1">
                    {dentist.specialInterests ? dentist.specialInterests.slice(0, 2).join(', ') : 'General Dentistry'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2 border-t border-[#E2DAEB]/60 mt-2">
                <button
                  onClick={() => setSelectedDoctor(dentist)}
                  className="py-2 px-3 text-xs font-semibold text-[#1F172C] bg-white border border-[#E2DAEB] hover:bg-slate-50 rounded-full transition-colors cursor-pointer text-center"
                >
                  Read bio
                </button>
                <button
                  onClick={() => onSelectDoctorToBook(dentist.name)}
                  className="py-2 px-3 text-xs font-semibold text-white bg-[#533675] hover:bg-[#3D275A] rounded-full transition-colors cursor-pointer text-center shadow-2xs"
                >
                  Book visit
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Nursing & Assistant Team Row */}
        <div className="mt-14 pt-10 border-t border-[#E2DAEB]">
          <h4 className="font-display text-xl font-normal text-[#1F172C] mb-2">
            Clinical Nursing & Front-of-House Team
          </h4>
          <p className="text-xs text-[#5C506F] mb-6">
            The compassionate clinical assistants who support you chairside and keep the clinic pristine.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLINICAL_ASSISTANTS.map((asst) => (
              <div key={asst.id} className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E2DAEB] flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-white shadow-xs">
                  <img src={asst.image} alt={asst.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#1F172C]">{asst.name}</h5>
                  <p className="text-[11px] text-[#533675] font-medium">{asst.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Practice Family Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-3xl overflow-hidden bg-[#FAF8FC] border border-[#E2DAEB] grid grid-cols-1 lg:grid-cols-12 shadow-sm"
          >
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-[#EBE3F2]">
              <img
                src="/images/team-all.jpg"
                alt="Middle Ridge Family Dental full team portrait"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1F172C]">
                Middle Ridge Practice Team
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-3 text-left">
              <span className="text-[11px] font-bold text-[#533675] uppercase tracking-wider bg-[#EBE3F2] px-2.5 py-0.5 rounded-md inline-block w-fit">
                Locally Owned & Operated
              </span>
              <h4 className="font-display text-2xl font-normal text-[#1F172C]">
                All together for Toowoomba families
              </h4>
              <p className="text-xs sm:text-sm text-[#5C506F] leading-relaxed">
                When you visit our clinic at Southridge Centre, you are looked after by a tight-knit, collaborative team. Every dentist and chairside assistant is committed to unhurried, reassuring dental care.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#533675]">
                <Check className="w-4 h-4 shrink-0" />
                <span>Continuity of care with your preferred clinician every visit</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Doctor Bio Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2DAEB] text-left p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-[#EBE3F2] border border-[#E2DAEB]">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#533675] uppercase tracking-wider bg-[#EBE3F2] px-2.5 py-0.5 rounded-md">
                  {selectedDoctor.credentials}
                </span>
                <h3 className="font-display text-2xl font-normal text-[#1F172C]">{selectedDoctor.name}</h3>
                <p className="text-xs text-[#5C506F]">{selectedDoctor.role}</p>
                {selectedDoctor.quote && (
                  <p className="text-xs italic text-[#533675] pt-1">
                    "{selectedDoctor.quote}"
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E2DAEB] space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F172C]">Clinical Background</h4>
                {selectedDoctor.bio.map((p, i) => (
                  <p key={i} className="text-xs sm:text-sm text-[#5C506F] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {selectedDoctor.specialInterests && (
                <div className="pt-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F172C] mb-2">Special Interests</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#1F172C]">
                    {selectedDoctor.specialInterests.map((interest, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 bg-[#FAF8FC] p-2 rounded-lg">
                        <Check className="w-3.5 h-3.5 text-[#533675] shrink-0" />
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDoctor.personalDetails && (
                <div className="p-3 bg-[#FAF8FC] rounded-xl text-xs text-[#5C506F]">
                  <strong className="block text-[#1F172C] mb-0.5">Outside of Dentistry:</strong>
                  {selectedDoctor.personalDetails}
                </div>
              )}

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E2DAEB]">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#5C506F]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedDoctor.name;
                    setSelectedDoctor(null);
                    onSelectDoctorToBook(name);
                  }}
                  className="px-6 py-2.5 rounded-full font-semibold text-xs text-white bg-[#533675] hover:bg-[#3D275A] transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {selectedDoctor.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
