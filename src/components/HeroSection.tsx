'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award } from 'lucide-react';
import { STORE_INFO } from '@/data/products';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffd8a8]/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#fde2e4]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e7da] border border-[#d8beaa] text-[#844c19] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Freshly Baked Every Morning</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a110a] leading-[1.15] tracking-tight">
              Kelezatan Kue Artisan <br />
              <span className="italic font-normal bg-gradient-to-r from-[#9c5921] via-[#c67e35] to-[#884614] bg-clip-text text-transparent">
                Sempurna di Tiap Suapan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5a483e] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dibuat secara handmade dari butter Prancis pilihan, cokelat Belgia murni, dan buah-buahan segar tanpa bahan pengawet. Rayakan momen spesialmu bersama kehangatan cita rasa SweetCrumb.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#4a3a30] bg-[#fffaf5] border border-[#ebdccc] px-3 py-1.5 rounded-lg shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Halal Ingredients</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#4a3a30] bg-[#fffaf5] border border-[#ebdccc] px-3 py-1.5 rounded-lg shadow-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>French Butter AOP</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#4a3a30] bg-[#fffaf5] border border-[#ebdccc] px-3 py-1.5 rounded-lg shadow-xs">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>No Artificial Preservatives</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#96551d] hover:bg-[#804615] text-white font-semibold text-sm shadow-lg shadow-[#96551d]/25 transition-all transform active:scale-95 hover:-translate-y-0.5"
              >
                <span>Pesan Menu Favorit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Admin%20SweetCrumb,%20bisa%20konsultasi%20custom%20cake?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f6efe7] border border-[#d8beaa] text-[#4a3628] font-semibold text-sm transition-all"
              >
                <span>Konsultasi Custom Cake</span>
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 border-t border-[#ebdccc]/80">
              <div>
                <div className="font-serif text-2xl font-bold text-[#2a1b12]">4.9 / 5.0</div>
                <div className="text-xs text-[#766356]">Dari 1.200+ Ulasan</div>
              </div>
              <div className="h-8 w-[1px] bg-[#dec9b8]" />
              <div>
                <div className="font-serif text-2xl font-bold text-[#2a1b12]">10,000+</div>
                <div className="text-xs text-[#766356]">Kue Terkirim Bahagia</div>
              </div>
              <div className="h-8 w-[1px] bg-[#dec9b8]" />
              <div>
                <div className="font-serif text-2xl font-bold text-[#2a1b12]">Same-Day</div>
                <div className="text-xs text-[#766356]">Tersedia Pengiriman Cepat</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#583313]/20 border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero.jpg"
                  alt="SweetCrumb Artisan Bakery Showcase"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#c5853f]/90 text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs mb-1">
                    Signature Showcase
                  </div>
                  <p className="font-serif text-lg font-semibold leading-tight text-white/95">
                    Dipanggang Fresh Setiap Subuh dengan Resep Warisan Patisserie
                  </p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#ebdccc] items-center gap-3 max-w-xs animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#f7ebe0] text-[#96551d] font-bold flex items-center justify-center text-sm shrink-0">
                  ⭐️
                </div>
                <div>
                  <div className="text-xs font-bold text-[#20140c]">Strawberry Bliss & Ganache</div>
                  <div className="text-[11px] text-[#715d50]">“Kue terenak buat ultah, semua tamu muji!”</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
