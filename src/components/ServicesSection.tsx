import React, { useState } from 'react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import { CheckCircle2, Clock, Sparkles, Calendar, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventive', label: 'Preventative & Family' },
    { id: 'restorative', label: 'Restorative & Implants' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'aligners', label: 'Clear Aligners' },
    { id: 'comfort', label: 'Comfort & TMJ' },
    { id: 'emergency', label: 'Emergency Care' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9FD] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B91372] uppercase tracking-wider">
            <span>Tailored Care for All Ages</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2A4A] tracking-tight leading-tight text-balance">
            Dental treatments tailored to you, explained in simple terms.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From routine scale and cleans to clear aligners and emergency pain relief, every procedure is carried out with gentle methods, modern technology, and total cost transparency.
          </p>
        </div>

        {/* Functional Filter Tabs (Segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2C2A4A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#2C2A4A] hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#B91372] uppercase tracking-wider bg-[#F6EEF9] px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                  {service.duration && (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {service.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#2C2A4A] mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#82957A] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-[#2C2A4A] flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> What to expect
                </button>

                <button
                  onClick={() => onSelectServiceToBook(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-[#B91372] bg-[#F6EEF9] hover:bg-[#B91372] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Prompt Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-rose-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#2C2A4A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Experiencing severe toothache or a dental emergency?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We hold same-day priority appointments each morning and afternoon for urgent dental pain relief in Toowoomba.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0746597347"
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors"
            >
              Call (07) 4659 7347
            </a>
            <button
              onClick={() => onSelectServiceToBook('Same-Day Emergency Dental')}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-xs"
            >
              Book Emergency Slot
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 text-left p-6 sm:p-8 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#B91372] uppercase tracking-wider bg-[#F6EEF9] px-2.5 py-1 rounded-md">
                {selectedService.category}
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold text-[#2C2A4A] mb-3">{selectedService.title}</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">{selectedService.fullDescription}</p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Who it’s for</h4>
                <p className="text-xs sm:text-sm text-slate-700">{selectedService.whoItsFor}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">What to expect during your visit</h4>
                <ul className="space-y-2">
                  {selectedService.whatToExpect.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#82957A] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceToBook(title);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#B91372] hover:bg-[#9F0F61] transition-all shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {selectedService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
