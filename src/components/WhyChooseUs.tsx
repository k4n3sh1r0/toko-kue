'use client';

import React from 'react';
import { ChefHat, Truck, Sparkles, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: Award,
    title: 'Bahan Baku Kelas Dunia',
    desc: 'Kami memakai French AOP butter, dark chocolate Belgia murni, dan heavy cream berkualitas tinggi tanpa margarin abal-abal.',
  },
  {
    icon: ChefHat,
    title: 'Freshly Baked Tiap Subuh',
    desc: 'Semua kue dipanggang di hari yang sama dengan resep autentik pastry chef untuk menjamin kesegaran & kelembutan maksimal.',
  },
  {
    icon: Truck,
    title: 'Pengiriman Aman & Rapi',
    desc: 'Dilengkapi kotak kokoh anti-guncang dan opsi ice gel pack agar kue tetap dingin dan cantik sampai di depan pintu Anda.',
  },
  {
    icon: HeartHandshake,
    title: 'Gratis Kartu & Lilin',
    desc: 'Momen ulang tahun atau perayaan makin berkesan dengan complimentary greeting card tulisan tangan dan pilihan lilin pesta.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#a86c2d] bg-[#fbf2e9] px-3.5 py-1.5 rounded-full border border-[#edd5c0]">
            Standar Kualitas Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1f140e]">
            Mengapa Memilih SweetCrumb?
          </h2>
          <p className="text-sm sm:text-base text-[#675447]">
            Komitmen kami adalah menyajikan kue yang tidak hanya memanjakan mata, tapi juga tak terlupakan di setiap suapan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#faf7f2] border border-[#ebdccc] hover:border-[#d4a373] transition-all hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#91561f] to-[#d89745] text-white flex items-center justify-center mb-5 shadow-md shadow-[#91561f]/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1f140e] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665345] leading-relaxed">
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
