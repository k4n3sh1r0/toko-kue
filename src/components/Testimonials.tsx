'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-[#faf5ee] border-b border-[#ebdccc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#a86c2d] bg-[#f0e3d5] px-3.5 py-1.5 rounded-full">
            Ulasan Dari Hati
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1f140e]">
            Kisah Manis Pelanggan Kami
          </h2>
          <p className="text-sm sm:text-base text-[#675447]">
            Lebih dari 10.000 kue telah menemani momen perayaan berharga keluarga Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white border border-[#ebdccc] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#473528] leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#f4ece3]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#91561f] to-[#d89745] text-white flex items-center justify-center font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1f140e]">{t.name}</h4>
                  <p className="text-[11px] text-[#866e5d]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
