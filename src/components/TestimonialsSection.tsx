import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, Quote, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#B91372] uppercase tracking-wider">
            <span>Verified Patient Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Local Community Words</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2A4A] tracking-tight leading-tight text-balance">
            Real stories from local Toowoomba families.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t make inflated claims. The most genuine reflection of our clinic is how our patients feel when they sit in our chairs and walk out smiling.
          </p>
        </div>

        {/* Testimonials 4-Card Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-[#FAF9FD] border-[#A691C0]/30 shadow-xs'
                  : 'bg-white border-slate-100 shadow-xs hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#B91372] bg-[#F6EEF9] px-2.5 py-0.5 rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg font-medium text-[#2C2A4A] leading-relaxed mb-6">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-500">{testimonial.location}</div>
                </div>

                {testimonial.doctorMentioned && (
                  <div className="text-right text-[11px] font-medium text-[#7C7A9A]">
                    Treated by <span className="text-[#2C2A4A] font-semibold">{testimonial.doctorMentioned}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Google Rating & Review Adjacency Proof */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF9FD] border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black text-amber-500 text-sm shadow-xs">
              ★ 4.9
            </div>
            <div>
              <p className="text-sm font-bold text-[#2C2A4A]">Ranked Among Toowoomba’s Most Trusted Family Dentists</p>
              <p className="text-xs text-slate-500">Based on authentic Google Business and verified patient submissions</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Middle+Ridge+Family+Dental/@-27.6037,151.9683,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#B91372] hover:underline whitespace-nowrap"
          >
            Read reviews on Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
};
