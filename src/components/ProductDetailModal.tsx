'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShoppingBag, Clock, Sparkles } from 'lucide-react';
import { CakeProduct } from '@/types/bakery';
import { formatRupiah } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductDetailModalProps {
  product: CakeProduct | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const calculatedPrice = Math.round(product.price * currentSize.priceMultiplier);

  const handleAdd = () => {
    addToCart(product, selectedSizeIndex, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#fbcfe8] animate-in fade-in zoom-in-95 duration-200 max-h-[92dvh] flex flex-col md:block"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#5c2438] flex items-center justify-center shadow-md transition-colors border border-pink-200"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto md:overflow-visible">
          {/* Image Side */}
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px] bg-[#fff5f8] shrink-0 flex items-center justify-center p-6">
            <div className="relative w-full h-full min-h-[220px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>
            {product.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#e11d48] text-white shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5 bg-white">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-pink-400">({product.reviewCount} ulasan)</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2a0e19] leading-snug">
                {product.name}
              </h3>
              
              <p className="text-xs font-semibold text-[#e11d48] mt-0.5">
                {product.tagline}
              </p>

              <p className="text-xs text-[#6e2b44] leading-relaxed mt-3">
                {product.description}
              </p>

              {/* Shelf life info */}
              <div className="flex items-start gap-2 p-2.5 mt-3 rounded-xl bg-[#fff5f8] border border-[#fce7f3] text-[11px] text-[#7e3d55]">
                <Clock className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2d121c]">Masa Simpan: </span>
                  {product.shelfLife}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="text-xs font-bold text-[#3d1525] uppercase tracking-wider block mb-2">
                  Pilihan Varian / Kemasan:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`py-2 px-2 rounded-xl text-center border text-xs transition-all ${
                        selectedSizeIndex === idx
                          ? 'border-[#f472b6] bg-[#ffe4ea] text-[#be123c] font-bold shadow-xs'
                          : 'border-[#fbcfe8] hover:border-[#f472b6] text-[#692941]'
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="text-[10px] text-pink-500 font-normal mt-0.5">{s.portion}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ingredients tag */}
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-[#6e2b44] block mb-1">
                  Bahan Utama:
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#ffeef2] text-[#831843] font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Price + Add to cart */}
            <div className="pt-3 border-t border-[#fce7f3] flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-pink-400 block">Total Harga:</span>
                <span className="font-serif text-xl font-extrabold text-[#e11d48]">
                  {formatRupiah(calculatedPrice * quantity)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Quantity adjuster */}
                <div className="flex items-center border border-[#fbcfe8] rounded-full overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold text-[#6e2b44] hover:bg-[#fff0f4]"
                  >
                    -
                  </button>
                  <span className="w-7 text-center text-xs font-bold text-[#2a0e19]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold text-[#6e2b44] hover:bg-[#fff0f4]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:from-[#e11d48] hover:to-[#db2777] text-white text-xs font-bold shadow-md shadow-[#f43f5e]/25 transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Tambah</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
