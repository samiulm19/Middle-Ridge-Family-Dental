import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

interface PaymentFundsSectionProps {
  onOpenBooking: () => void;
}

export const PaymentFundsSection: React.FC<PaymentFundsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="payment" className="py-20 lg:py-28 bg-[#FAF8FC] border-b border-[#E2DAEB]">
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
            Payment & health funds
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F172C] tracking-tight leading-tight">
            Good dental care shouldn't wait for payday
          </h2>
          <p className="text-base text-[#5C506F]">
            Maximise your private health fund rebates with on-the-spot HICAPS claims and spread treatment fees over time.
          </p>
        </motion.div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Pay Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E2DAEB] shadow-xs flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-normal text-[#1F172C]">
                Pay over time
              </h3>
              <p className="text-sm text-[#5C506F] leading-relaxed">
                Start treatment now and split the cost into manageable, interest-free payments. We also accept all major payment cards including American Express and JCB.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 items-center pt-2">
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/zip.png" alt="Zip Money" className="h-4 w-auto object-contain" />
              </div>
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/humm.jpg" alt="Humm" className="h-5 w-auto object-contain" />
              </div>
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/afterpay.png" alt="Afterpay" className="h-4 w-auto object-contain" />
              </div>
              <span className="text-xs font-semibold px-3 py-2.5 rounded-xl bg-[#FAF8FC] border border-[#E2DAEB] text-[#1F172C]">
                Amex
              </span>
              <span className="text-xs font-semibold px-3 py-2.5 rounded-xl bg-[#FAF8FC] border border-[#E2DAEB] text-[#1F172C]">
                JCB
              </span>
              <span className="text-xs font-semibold px-3 py-2.5 rounded-xl bg-[#FAF8FC] border border-[#E2DAEB] text-[#1F172C]">
                SuperCare
              </span>
            </div>
          </motion.div>

          {/* Card 2: Health Funds & Preferred Providers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E2DAEB] shadow-xs flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-normal text-[#1F172C]">
                Health funds
              </h3>
              <p className="text-sm text-[#5C506F] leading-relaxed">
                All Australian private health funds accepted, with claims processed instantly on the spot through HICAPS. We're a preferred provider for:
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 items-center pt-2">
              {/* Defence Health */}
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/defence-health.svg" alt="Defence Health" className="h-5 w-auto object-contain" />
              </div>
              {/* NIB */}
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/nib.png" alt="NIB" className="h-4 w-auto object-contain" />
              </div>
              {/* CBHS */}
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/cbhs.png" alt="CBHS" className="h-4 w-auto object-contain" />
              </div>
              {/* TUH */}
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/tuh.svg" alt="TUH" className="h-4 w-auto object-contain" />
              </div>
              {/* Smile.com.au */}
              <div className="h-11 px-3.5 bg-[#FAF8FC] border border-[#E2DAEB] rounded-xl flex items-center">
                <img src="/images/smile.png" alt="Smile.com.au" className="h-4 w-auto object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Wide Kids Bulk-Billed under CDBS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 bg-[#EBE3F2] rounded-3xl p-8 sm:p-10 border border-[#DCD1E6] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-5xl sm:text-6xl font-normal text-[#2C2A4A] leading-none shrink-0">
                $0
              </span>
              <div className="space-y-1">
                <h3 className="font-display text-2xl font-normal text-[#1F172C]">
                  Kids bulk-billed under CDBS
                </h3>
                <p className="text-sm text-[#5C506F] max-w-xl leading-relaxed">
                  Eligible children aged 2–17 are covered up to $1,095+ under the Medicare Child Dental Benefits Schedule. Department of Veterans’ Affairs (DVA) card holders are also warmly welcomed with direct billing.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="shrink-0 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-[#533675] hover:bg-[#3D275A] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book for your child</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
