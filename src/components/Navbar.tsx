'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Cake, Menu, X, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { STORE_INFO } from '@/data/products';
import { formatRupiah } from '@/lib/utils';

export default function Navbar() {
  const { totalCount, subtotal, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fff6f8]/90 backdrop-blur-md border-b border-[#fbcfe8]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f43f5e] via-[#fb7185] to-[#f472b6] flex items-center justify-center text-white shadow-md shadow-[#f43f5e]/25 transition-transform group-hover:scale-105">
              <Cake className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2d121c] block leading-none">
                BWL
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#e11d48] font-bold mt-1 block">
                Baked With Love
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#5c2438]">
            <a href="#menu" className="hover:text-[#e11d48] transition-colors">Menu Pilihan</a>
            <a href="#keunggulan" className="hover:text-[#e11d48] transition-colors">Keunggulan</a>
            <a href="#testimoni" className="hover:text-[#e11d48] transition-colors">Ulasan Pelanggan</a>
            <a href="#faq" className="hover:text-[#e11d48] transition-colors">Tanya Jawab</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct WhatsApp Link */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Admin%20BWL,%20saya%20mau%20tanya%20seputar%20donat%20hari%20ini`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-full transition-all"
            >
              <MessageCircle className="w-4 h-4 text-rose-600 fill-rose-600/10" />
              <span>Tanya Admin</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#2d121c] hover:bg-[#481d2e] text-[#fff0f5] shadow-md transition-all active:scale-95 group"
              aria-label="Buka Keranjang Belanja"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#fbcfe8] transition-transform group-hover:scale-110" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f43f5e] text-white text-[11px] font-bold rounded-full h-5 min-w-5 px-1 flex items-center justify-center border-2 border-[#2d121c] animate-bounce">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold hidden sm:inline">
                {totalCount > 0 ? formatRupiah(subtotal) : 'Keranjang'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5c2438] hover:text-[#2d121c]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#fbcfe8] bg-[#fff6f8] px-6 py-4 space-y-3">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#5c2438] py-2 hover:text-[#e11d48]"
          >
            Menu Pilihan
          </a>
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#5c2438] py-2 hover:text-[#e11d48]"
          >
            Keunggulan
          </a>
          <a
            href="#testimoni"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#5c2438] py-2 hover:text-[#e11d48]"
          >
            Ulasan Pelanggan
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#5c2438] py-2 hover:text-[#e11d48]"
          >
            Tanya Jawab
          </a>
          <div className="pt-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Halo%20Admin%20BWL`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-rose-800 bg-rose-100/70 rounded-xl"
            >
              <MessageCircle className="w-4 h-4 text-rose-600" />
              <span>Chat WhatsApp Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
