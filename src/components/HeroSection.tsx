'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award } from 'lucide-react';
import { STORE_INFO } from '@/data/products';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Dreamy Pastel Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffd6e0]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#cbe7ff]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#ffe4ea]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe4ea] border border-[#fbcfe8] text-[#be123c] text-xs font-bold tracking-wide uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f43f5e]" />
              <span>Freshly Baked With Love Every Morning</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2a0e19] leading-[1.15] tracking-tight">
              Mochi Donut & <br />
              <span className="inline-block pr-3 pb-1 italic font-normal bg-gradient-to-r from-[#e11d48] via-[#ec4899] to-[#be185d] bg-clip-text text-transparent">
                Artisan Handcrafted
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#61273c] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dari Ichigo Daifuku kenyal bertabur stroberi segar, viral Dubai Chewy, hingga Classic Donut lezat isi 6 pcs mulai dari 15rb. Dibuat penuh cinta setiap hari di Binjai!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5c2438] bg-[#fff5f8] border border-[#fbcfe8] px-3.5 py-1.5 rounded-xl shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5c2438] bg-[#fff5f8] border border-[#fbcfe8] px-3.5 py-1.5 rounded-xl shadow-2xs">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Bahan Impor Premium</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5c2438] bg-[#fff5f8] border border-[#fbcfe8] px-3.5 py-1.5 rounded-xl shadow-2xs">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                <span>Tanpa Pengawet</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:from-[#e11d48] hover:to-[#db2777] text-white font-bold text-sm shadow-lg shadow-[#f43f5e]/25 transition-all transform active:scale-95 hover:-translate-y-0.5"
              >
                <span>Pesan Donut Favorit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Admin%20BWL,%20saya%20mau%20tanya%20varian%20donat%20ready%20hari%20ini`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#fff0f4] border border-[#fbcfe8] text-[#5c1d33] font-bold text-sm transition-all shadow-2xs"
              >
                <span>Tanya Admin WhatsApp</span>
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:justify-start sm:gap-6 border-t border-[#fbcfe8] text-center sm:text-left">
              <div>
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#2a0e19]">4.9 / 5.0</div>
                <div className="text-[11px] sm:text-xs text-[#7e3d55]">1.200+ Ulasan</div>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-[#fbcfe8]" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#2a0e19]">10,000+</div>
                <div className="text-[11px] sm:text-xs text-[#7e3d55]">Donut Terkirim</div>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-[#fbcfe8]" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-bold text-[#2a0e19]">Fresh Daily</div>
                <div className="text-[11px] sm:text-xs text-[#7e3d55]">Dipanggang Pagi</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#f43f5e]/15 border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero.jpg"
                  alt="BWL (Baked with Love) Showcase"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#f43f5e]/90 text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs mb-1.5 shadow-md">
                    Handcrafted Daily
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-semibold leading-tight text-white/95">
                    Nikmati Sensasi Donat Mochi Kenyal & Artisan Lembut Khas BWL
                  </p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#fbcfe8] items-center gap-3 max-w-xs animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#ffe4ea] text-[#e11d48] font-bold flex items-center justify-center text-sm shrink-0">
                  🍓
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2d121c]">Ichigo Daifuku & Dubai Chewy</div>
                  <div className="text-[11px] text-[#7e3d55]">“Kenyal, lumer, dan manisnya pas banget!”</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
