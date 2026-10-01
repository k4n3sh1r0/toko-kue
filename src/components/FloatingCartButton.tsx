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
        className="pointer-events-auto w-full sm:w-auto max-w-sm flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#1e130c] hover:bg-[#322014] text-white shadow-2xl border border-[#a86c2d]/40 backdrop-blur-md transition-all transform active:scale-95 hover:-translate-y-0.5 animate-in slide-in-from-bottom-5 duration-300"
        aria-label="Lihat Keranjang Belanja"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#3c281b] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#f4ba6d]" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 bg-[#d94a6d] text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center border border-[#1e130c]">
              {totalCount}
            </span>
          </div>
          <div className="text-left">
            <div className="text-[11px] text-stone-400 font-medium leading-none">
              {totalCount} Kue Dipilih
            </div>
            <div className="text-sm font-serif font-bold text-[#fed7aa] mt-0.5">
              {formatRupiah(subtotal)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-white bg-[#96551d] hover:bg-[#a86022] px-3.5 py-1.5 rounded-xl transition-colors">
          <span>Checkout</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
}
