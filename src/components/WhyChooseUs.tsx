'use client';

import React from 'react';
import { ChefHat, Truck, Award, HeartHandshake } from 'lucide-react';

const FEATURES = [
  {
    icon: Award,
    title: 'Bahan Baku Kelas Dunia',
    desc: 'Kami memakai butter impor pilihan, Belgian cocoa powder, dan Uji matcha asli untuk menjamin cita rasa istimewa di tiap gigitan.',
  },
  {
    icon: ChefHat,
    title: 'Freshly Baked Tiap Pagi',
    desc: 'Semua mochi donut & artisan donut digoreng dan dihias fresh setiap pagi dengan tekstur kenyal empuk yang bikin nagih.',
  },
  {
    icon: Truck,
    title: 'Pengantaran Aman & Rapi',
    desc: 'Dikemas dalam box cantik kokoh khusus donat sehingga topping cantik dan buah stroberi tetap mulus sampai ke tangan Anda.',
  },
  {
    icon: HeartHandshake,
    title: 'Dibuat Penuh Cinta (BWL)',
    desc: 'Setiap donat kami buat dengan dedikasi penuh cinta (Baked with Love) untuk melengkapi momen manismu di Binjai.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#be123c] bg-[#ffe4ea] px-3.5 py-1.5 rounded-full border border-[#fbcfe8]">
            Standar Kualitas Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2a0e19]">
            Mengapa Memilih BWL (Baked with Love)?
          </h2>
          <p className="text-sm sm:text-base text-[#6e2b44]">
            Komitmen kami adalah menyajikan donat berkualitas tinggi yang dibuat penuh cinta di setiap gigitan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#fff5f8] border border-[#fbcfe8] hover:border-[#f472b6] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f43f5e]/10 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#f472b6] text-white flex items-center justify-center mb-5 shadow-md shadow-[#f43f5e]/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2a0e19] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7e3d55] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
