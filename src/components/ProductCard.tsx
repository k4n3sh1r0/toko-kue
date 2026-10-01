'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Eye, Check } from 'lucide-react';
import { CakeProduct } from '@/types/bakery';
import { formatRupiah } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: CakeProduct;
  onOpenDetail: (product: CakeProduct) => void;
}

export default function ProductCard({ product, onOpenDetail }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const currentPrice = Math.round(product.price * currentSize.priceMultiplier);

  const handleAdd = () => {
    addToCart(product, selectedSizeIndex, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#fbcfe8] shadow-2xs hover:shadow-xl hover:shadow-[#f43f5e]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top Image area */}
      <div className="relative aspect-[4/3] w-full bg-[#fff5f8] overflow-hidden flex items-center justify-center p-3">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-108"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#e11d48] text-white shadow-md">
            {product.badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => onOpenDetail(product)}
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 text-[#9f1239] flex items-center justify-center shadow-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 hover:bg-[#ffe4ea]"
          aria-label="Lihat Detail Donut"
        >
          <Eye className="w-4 h-4 text-[#e11d48]" />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold mb-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-pink-400 text-[11px]">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-serif text-base sm:text-lg font-bold text-[#2a0e19] group-hover:text-[#e11d48] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#7e3d55] line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size Selector Pills */}
        <div>
          <div className="text-[11px] font-semibold text-[#8a425b] mb-1.5 flex justify-between">
            <span>Pilihan Varian:</span>
            <span className="text-[#e11d48] font-bold">{currentSize.portion}</span>
          </div>
          <div className="grid grid-cols-3 gap-1 bg-[#fff5f8] p-1 rounded-xl border border-[#fce7f3]">
            {product.sizes.map((s, idx) => {
              const shortLabel = s.label.includes('Slice')
                ? 'Slice'
                : s.label.includes('16')
                ? 'Ø 16cm'
                : s.label.includes('20')
                ? 'Ø 20cm'
                : s.label;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`py-1.5 px-0.5 rounded-lg text-center text-[10px] sm:text-[11px] font-semibold transition-all ${
                    selectedSizeIndex === idx
                      ? 'bg-white text-[#be123c] font-bold shadow-xs border border-[#fbcfe8]'
                      : 'text-[#7e3d55] hover:text-[#2d121c]'
                  }`}
                >
                  {shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Price & Add to Cart button */}
        <div className="pt-2 border-t border-[#fce7f3] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-pink-400 uppercase block font-medium">Harga</span>
            <span className="font-serif text-lg font-extrabold text-[#e11d48]">
              {formatRupiah(currentPrice)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-xs ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-[#2a0e19] hover:bg-[#e11d48] text-[#fff0f5]'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Masuk!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#fbcfe8]" />
                <span>Pesan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
