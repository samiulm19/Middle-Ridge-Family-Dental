import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E2DAEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 space-y-2"
        >
          <span className="text-xs font-semibold text-[#533675] uppercase tracking-widest block">
            Patient reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
            What Toowoomba families say
          </h2>
          <p className="text-base text-[#5C506F]">
            Genuine testimonials from local parents, nervous visitors, and long-time patients.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Review 1: Big Lead Card (Span 5 cols, tall, soft lavender background) */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 bg-[#EBE3F2] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#DCD1E6] shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex text-[#C08A2E] text-lg tracking-wider" aria-label="5 stars">
                ★★★★★
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl text-[#1F172C] font-normal leading-snug">
                “I first took my son to see Dr Anish in 2019 and he was so good with him, that the whole family decided to change to have Dr Anish as our dentist.”
              </blockquote>
            </div>

            <figcaption className="pt-8 border-t border-[#DCD1E6] flex items-center justify-between text-sm font-semibold text-[#1F172C]">
              <span>Clinton</span>
              <span className="text-xs text-[#533675] font-medium">Toowoomba Family</span>
            </figcaption>
          </motion.figure>

          {/* Right Sub-Grid (Span 7 cols) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Review 2 */}
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#E2DAEB]"
            >
              <div className="space-y-3">
                <div className="flex text-[#C08A2E] text-base tracking-wider" aria-label="5 stars">
                  ★★★★★
                </div>
                <blockquote className="font-display text-lg text-[#1F172C] font-normal leading-relaxed">
                  “Dr Anish (and his team) are amazing! He is the first ever dentist I've had where I actually look forward to going to see him!”
                </blockquote>
              </div>
              <figcaption className="pt-4 border-t border-[#E2DAEB] flex items-center justify-between text-xs font-semibold text-[#1F172C]">
                <span>Carynn</span>
                <span className="text-slate-500 font-normal">Regular Patient</span>
              </figcaption>
            </motion.figure>

            {/* Review 3 */}
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#E2DAEB]"
            >
              <div className="space-y-3">
                <div className="flex text-[#C08A2E] text-base tracking-wider" aria-label="5 stars">
                  ★★★★★
                </div>
                <blockquote className="font-display text-lg text-[#1F172C] font-normal leading-relaxed">
                  “Haven't been to a dentist for ages, Dr Anish provides a comfortable and relaxed experience.”
                </blockquote>
              </div>
              <figcaption className="pt-4 border-t border-[#E2DAEB] flex items-center justify-between text-xs font-semibold text-[#1F172C]">
                <span>Kenny</span>
                <span className="text-slate-500 font-normal">Middle Ridge</span>
              </figcaption>
            </motion.figure>

            {/* Review 4: Wide Span Card */}
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-2 bg-[#FAF8FC] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#E2DAEB]"
            >
              <div className="space-y-3">
                <div className="flex text-[#C08A2E] text-base tracking-wider" aria-label="5 stars">
                  ★★★★★
                </div>
                <blockquote className="font-display text-xl text-[#1F172C] font-normal leading-relaxed">
                  “We were on a visit to Australia and underwent dental treatment by Dr Neha. She was extremely empathetic.”
                </blockquote>
              </div>
              <figcaption className="pt-4 border-t border-[#E2DAEB] flex items-center justify-between text-xs font-semibold text-[#1F172C]">
                <span>Bindu</span>
                <span className="text-slate-500 font-normal">Treated by Dr. Neha Kutty</span>
              </figcaption>
            </motion.figure>

          </div>

        </div>

        {/* Google Reviews Adjacency Strip */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#FAF8FC] border border-[#E2DAEB] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-white font-bold text-sm text-[#533675] flex items-center justify-center shadow-xs border border-[#E2DAEB]">
              4.9
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F172C]">
              Ranked among Toowoomba's most trusted family dental clinics on Google Business
            </span>
          </div>

          <a
            href="https://www.google.com/maps/place/Middle+Ridge+Family+Dental/@-27.6037,151.9683,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#533675] hover:underline"
          >
            Read all Google reviews →
          </a>
        </div>

      </div>
    </section>
  );
};
