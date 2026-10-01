'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/products';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#be123c] bg-[#ffe4ea] px-3.5 py-1.5 rounded-full border border-[#fbcfe8]">
            Pusat Informasi
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2a0e19]">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-sm text-[#6e2b44]">
            Semua yang perlu Anda ketahui mengenai pemesanan, pengiriman, dan varian donat BWL.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#fbcfe8] bg-[#fff5f8] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-[#2a0e19] hover:text-[#e11d48] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a425b] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#e11d48]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#6e2b44] leading-relaxed border-t border-[#fce7f3] pt-3">
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
