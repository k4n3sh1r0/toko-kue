'use client';

import React from 'react';
import { Cake, MapPin, Clock, Phone, Heart, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '@/data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#210914] text-[#fce7f3] pt-16 pb-12 border-t border-[#3d1528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3d1528]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#f472b6] flex items-center justify-center text-white shadow-md shadow-[#f43f5e]/30">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                BWL
              </span>
              <span className="text-xs uppercase tracking-wider text-[#f472b6] font-semibold">
                (Baked with Love)
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#f9a8d4]/80 leading-relaxed max-w-sm">
              BWL (Baked with Love) — Tempat terbaik menikmati aneka Mochi Donut kenyal, Artisan Donut beraneka rasa, dan Classic Donut fresh baked setiap hari di Binjai.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#381324] hover:bg-[#f43f5e] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#381324] hover:bg-[#f43f5e] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Menu
            </h4>
            <ul className="space-y-2 text-xs text-[#f9a8d4]/70">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Katalog Donut Lengkap</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">Standar Kualitas</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">Ulasan Pelanggan</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Store Location & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Outlet & Layanan
            </h4>
            <div className="space-y-2.5 text-xs text-[#f9a8d4]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f472b6] shrink-0 mt-0.5" />
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {STORE_INFO.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#f472b6] shrink-0" />
                <span>{STORE_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f472b6] shrink-0" />
                <span>WhatsApp: {STORE_INFO.whatsappDisplay}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f9a8d4]/60">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {STORE_INFO.name}. Baked with</span>
            <Heart className="w-3.5 h-3.5 text-[#f43f5e] fill-[#f43f5e] inline" />
            <span>in Binjai</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
