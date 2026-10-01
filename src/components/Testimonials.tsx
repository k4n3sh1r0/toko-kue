'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-[#fff1f5] border-b border-[#fbcfe8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#be123c] bg-[#ffe4ea] px-3.5 py-1.5 rounded-full border border-[#fbcfe8]">
            Ulasan Dari Hati
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2a0e19]">
            Kisah Manis Pelanggan BWL
          </h2>
          <p className="text-sm sm:text-base text-[#6e2b44]">
            Lebih dari 10.000 donat telah menemani momen santai, kumpul keluarga, dan perayaan manis di Binjai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white border border-[#fbcfe8] shadow-2xs hover:shadow-lg hover:shadow-[#f43f5e]/10 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#4c1d2d] leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#fce7f3]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#f472b6] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#2a0e19]">{t.name}</h4>
                  <p className="text-[11px] text-[#8a425b]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
