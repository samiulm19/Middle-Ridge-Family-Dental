import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, Search, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('anxious');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'nervous', label: 'Nervous Patients' },
    { id: 'children', label: 'Kids & CDBS' },
    { id: 'fees', label: 'Health Funds & Fees' },
    { id: 'emergency', label: 'Emergencies' },
    { id: 'general', label: 'Location & Visits' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9FD] border-b border-slate-100 text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B91372] uppercase tracking-wider">
            <span>Clear Answers</span>
            <span aria-hidden="true">·</span>
            <span>No Surprises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2A4A] tracking-tight leading-tight">
            Frequently asked questions.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about our fees, anxiety relief, private health funds, and what to expect on your first visit to Southridge.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. anxiety, bulk billing, health funds, parking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B91372] focus:border-transparent transition-all shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2C2A4A] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 text-left">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Call us directly at (07) 4659 7347 and our friendly team will gladly assist you!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2C2A4A] hover:text-[#B91372] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B91372]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions? Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#2C2A4A]">Have a specific dental question or treatment worry?</h4>
            <p className="text-xs text-slate-500">Our reception team and dentists are always happy to chat on the phone.</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#2C2A4A] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B91372]" />
              <span>(07) 4659 7347</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#B91372] hover:bg-[#9F0F61] transition-colors"
            >
              Ask via Booking
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
