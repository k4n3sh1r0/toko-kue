'use client';

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatRupiah } from '@/lib/utils';

export default function FloatingCartButton() {
  const { totalCount, subtotal, openCart, isCartOpen } = useCart();

  // Only show if there are items and cart is not already open
  if (totalCount === 0 || isCartOpen) return null;

  return (
    <div className="fixed bottom-5 inset-x-4 sm:inset-x-auto sm:right-6 z-30 pointer-events-none flex justify-center sm:justify-end">
      <button
        onClick={openCart}
        className="pointer-events-auto w-full sm:w-auto max-w-sm flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#2a0e19] hover:bg-[#3d1525] text-white shadow-2xl shadow-[#f43f5e]/25 border border-[#f43f5e]/40 backdrop-blur-md transition-all transform active:scale-95 hover:-translate-y-0.5 animate-in slide-in-from-bottom-5 duration-300"
        aria-label="Lihat Keranjang Belanja"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#4a182b] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#fbcfe8]" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 bg-[#f43f5e] text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center border border-[#2a0e19]">
              {totalCount}
            </span>
          </div>
          <div className="text-left">
            <div className="text-[11px] text-pink-300 font-medium leading-none">
              {totalCount} Donut Dipilih
            </div>
            <div className="text-sm font-serif font-bold text-white mt-0.5">
              {formatRupiah(subtotal)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:from-[#e11d48] hover:to-[#db2777] px-3.5 py-1.5 rounded-xl transition-all shadow-md">
          <span>Checkout</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
}
