import React from 'react';
import { motion } from 'motion/react';
import { Wind, Tv, HeartHandshake, Hand, ArrowRight } from 'lucide-react';

interface NervousCareSectionProps {
  onOpenBooking: () => void;
}

export const NervousCareSection: React.FC<NervousCareSectionProps> = ({ onOpenBooking }) => {
  const calmFeatures = [
    {
      icon: <Wind className="w-5 h-5 text-[#CBB9DE]" />,
      title: 'Nitrous oxide (happy gas)',
      description: 'A light, safe sedative you breathe through a comfortable nose mask. You stay awake but completely relaxed, and it wears off within minutes so you can safely drive yourself home.',
    },
    {
      icon: <Tv className="w-5 h-5 text-[#CBB9DE]" />,
      title: 'Ceiling TV with streaming',
      description: 'Lie back, pop on noise-reducing headphones, and watch Netflix, Disney+, or YouTube while our dental team looks after your teeth.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#CBB9DE]" />,
      title: 'A spa-like, unhurried space',
      description: 'Calm operatories, gentle hands, unhurried appointment blocks, and simple-language explanations with zero medical jargon.',
    },
    {
      icon: <Hand className="w-5 h-5 text-[#CBB9DE]" />,
      title: 'Stop any time',
      description: 'Simply raise your left hand and we pause immediately. You are in total control of the pace throughout every minute of your visit.',
    },
  ];

  return (
    <section id="nervous" className="py-20 lg:py-28 bg-[#2C2A4A] text-[#F3EEF8] relative overflow-hidden border-b border-[#3E345D]">
      {/* Decorative ambient radial glow */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#A691C0]/15 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-left">
          
          {/* Left Column: Heading & Reassuring Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-semibold text-[#CBB9DE] uppercase tracking-widest block">
              Nervous patients sanctuary
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              Haven't been in years? You're in good company.
            </h2>

            <p className="text-base sm:text-lg text-[#E4DBED] leading-relaxed">
              We know the dentist can feel daunting. We go strictly at your pace, explain everything before we start, and never judge. Many of our patients now say they actually look forward to their visits at Middle Ridge.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#2C2A4A] bg-white hover:bg-[#EBE3F2] transition-colors cursor-pointer shadow-md"
              >
                <span>Pain management & anxiety options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#E4DBED] space-y-1">
              <span className="text-white font-semibold block">Administered by certified dentists</span>
              <p>Dr. Neha Kutty and Dr. Erick Jin hold certification in conscious sedation and anxiety relief.</p>
            </div>
          </motion.div>

          {/* Right Column: Visual Clinic Operatory & Calm Features */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Operatory Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/7] sm:aspect-[16/6] bg-white/10 border border-white/20 shadow-lg group"
            >
              <img
                src="/images/clinic-chair.jpg"
                alt="Tranquil treatment suite with ceiling TV at Middle Ridge Family Dental"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-300" />
                  <span className="font-semibold text-white">Southridge Tranquil Surgery Suite</span>
                </div>
                <span className="text-[#E4DBED] text-[11px] bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                  Ceiling TV · Noise-Cancelling Headphones · Happy Gas
                </span>
              </div>
            </motion.div>

            {/* 4-Item Calm List */}
            <div className="divide-y divide-white/15">
              {calmFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E4DBED] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
