'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, CheckCircle, Info, ShoppingBag, Clock, Sparkles } from 'lucide-react';
import { CakeProduct } from '@/types/bakery';
import { formatRupiah } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductDetailModalProps {
  product: CakeProduct | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // default to whole cake 16cm
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const calculatedPrice = Math.round(product.price * currentSize.priceMultiplier);

  const handleAdd = () => {
    addToCart(product, selectedSizeIndex, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#ebdccc] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4a3b32] flex items-center justify-center shadow-md transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto min-h-[260px] md:min-h-[380px] bg-[#fdf8f4]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#a86c2d] text-white shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5 bg-white">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-stone-400">({product.reviewCount} ulasan)</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1f140e] leading-snug">
                {product.name}
              </h3>
              
              <p className="text-xs font-medium text-[#9c5921] mt-0.5">
                {product.tagline}
              </p>

              <p className="text-xs text-[#5e4b3f] leading-relaxed mt-3">
                {product.description}
              </p>

              {/* Shelf life info */}
              <div className="flex items-start gap-2 p-2.5 mt-3 rounded-xl bg-[#faf5ee] border border-[#f0e4d4] text-[11px] text-[#695446]">
                <Clock className="w-4 h-4 text-[#a86c2d] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#3d2a1d]">Masa Simpan: </span>
                  {product.shelfLife}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="text-xs font-bold text-[#322319] uppercase tracking-wider block mb-2">
                  Pilih Ukuran / Porsi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`py-2 px-2 rounded-xl text-center border text-xs transition-all ${
                        selectedSizeIndex === idx
                          ? 'border-[#9c5921] bg-[#fbf3eb] text-[#844412] font-bold shadow-xs'
                          : 'border-[#ebdccc] hover:border-[#cfb6a0] text-[#554236]'
                      }`}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="text-[10px] text-stone-500 font-normal mt-0.5">{s.portion}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ingredients tag */}
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-[#665042] block mb-1">
                  Bahan Utama:
                </span>
                <div className="flex flex-wrap gap-1">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#f1ebe3] text-[#4b3c33]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Price + Add to cart */}
            <div className="pt-3 border-t border-[#ebdccc] flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-stone-500 block">Total Harga:</span>
                <span className="font-serif text-xl font-extrabold text-[#96551d]">
                  {formatRupiah(calculatedPrice * quantity)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Quantity adjuster */}
                <div className="flex items-center border border-[#d8beaa] rounded-full overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold text-[#624b3d] hover:bg-[#f6efe7]"
                  >
                    -
                  </button>
                  <span className="w-7 text-center text-xs font-bold text-[#20140c]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold text-[#624b3d] hover:bg-[#f6efe7]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#96551d] hover:bg-[#7e4514] text-white text-xs font-bold shadow-md shadow-[#96551d]/20 transition-all active:scale-95"
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
