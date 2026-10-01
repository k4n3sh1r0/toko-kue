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
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to whole cake 16cm
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const currentPrice = Math.round(product.price * currentSize.priceMultiplier);

  const handleAdd = () => {
    addToCart(product, selectedSizeIndex, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#ebdccc] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top Image area */}
      <div className="relative aspect-[4/3] w-full bg-[#f8f1e9] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#1f140e]/85 backdrop-blur-xs text-[#fed7aa] shadow-md">
            {product.badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => onOpenDetail(product)}
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#4a3b32] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0"
          aria-label="Lihat Detail Kue"
        >
          <Eye className="w-4 h-4 text-[#75461c]" />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-amber-700 font-semibold mb-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-stone-400 text-[11px]">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-serif text-lg font-bold text-[#1f140e] group-hover:text-[#96551d] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#766356] line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size Selector Pills */}
        <div>
          <div className="text-[11px] font-semibold text-[#8a7667] mb-1.5 flex justify-between">
            <span>Pilihan Ukuran:</span>
            <span className="text-[#a86c2d]">{currentSize.portion}</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 bg-[#faf5ef] p-1 rounded-xl border border-[#ebdccc]">
            {product.sizes.map((s, idx) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSelectedSizeIndex(idx)}
                className={`py-1 px-1 rounded-lg text-center text-[10px] transition-all ${
                  selectedSizeIndex === idx
                    ? 'bg-white text-[#96551d] font-bold shadow-xs border border-[#e2ccbb]'
                    : 'text-[#6b584b] hover:text-[#20140c]'
                }`}
              >
                {s.label.split(' ')[0]} {s.label.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Price & Add to Cart button */}
        <div className="pt-2 border-t border-[#f0e4d7] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-stone-500 uppercase block font-medium">Mulai Dari</span>
            <span className="font-serif text-lg font-extrabold text-[#96551d]">
              {formatRupiah(currentPrice)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-xs ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-[#1f140e] hover:bg-[#3d2719] text-[#fff7ed]'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Masuk!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 text-[#f4ba6d]" />
                <span>Pesan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
