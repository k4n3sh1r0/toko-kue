'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/products';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#a86c2d] bg-[#fbf2e9] px-3.5 py-1.5 rounded-full border border-[#edd5c0]">
            Pusat Informasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1f140e]">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-sm text-[#675447]">
            Semua yang perlu Anda ketahui mengenai pemesanan, pengiriman, dan bahan kue kami.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#ebdccc] bg-[#faf7f2] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-[#1f140e] hover:text-[#96551d] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8f7564] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#96551d]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#665345] leading-relaxed border-t border-[#f0e3d5] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
