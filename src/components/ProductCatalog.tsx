'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Sparkles, Image as ImageIcon, X } from 'lucide-react';
import { CAKE_PRODUCTS } from '@/data/products';
import { CakeProduct, CakeCategory } from '@/types/bakery';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

const CATEGORIES: { label: string; value: CakeCategory }[] = [
  { label: '🍩 Semua Donut', value: 'all' },
  { label: '🍡 Mochi Donut (25k)', value: 'mochi' },
  { label: '✨ Artisan Donut', value: 'artisan' },
  { label: '🍫 Classic Donut', value: 'classic' },
  { label: '🎁 Promo Box 6 Pcs', value: 'box' },
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<CakeProduct | null>(null);
  const [posterModal, setPosterModal] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return CAKE_PRODUCTS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#faf5ee] border-y border-[#ece0d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e3d5] text-[#96551d] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Harga Tertera</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1f140e] tracking-tight">
            Koleksi Mochi & Artisan Donut
          </h2>

          <p className="text-sm sm:text-base text-[#675447]">
            Dipanggang fresh setiap pagi. Pilih varian donat favoritmu, masukkan ke keranjang, dan langsung checkout ke WhatsApp!
          </p>

          {/* Poster Quick Preview Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setPosterModal('/images/catalog/menu-mochi-donut.png')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#f2e7db] text-[#824b1a] text-xs font-semibold border border-[#e2ccbb] shadow-2xs transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#a86c2d]" />
              <span>Poster Mochi Donut</span>
            </button>
            <button
              onClick={() => setPosterModal('/images/catalog/menu-classic-donut.png')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#f2e7db] text-[#824b1a] text-xs font-semibold border border-[#e2ccbb] shadow-2xs transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#a86c2d]" />
              <span>Poster Classic Donut</span>
            </button>
            <button
              onClick={() => setPosterModal('/images/catalog/menu-artisan-donut.png')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#f2e7db] text-[#824b1a] text-xs font-semibold border border-[#e2ccbb] shadow-2xs transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#a86c2d]" />
              <span>Poster Artisan Donut</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.value
                    ? 'bg-[#96551d] text-white shadow-md shadow-[#96551d]/20'
                    : 'bg-white text-[#635043] border border-[#ebdccc] hover:bg-[#f3ebe1]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari varian donat..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#ebdccc] focus:border-[#96551d] focus:ring-2 focus:ring-[#96551d]/15 rounded-full text-xs sm:text-sm text-[#241a15] outline-none transition-all placeholder:text-stone-400 shadow-xs"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#ebdccc] p-8 max-w-md mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#faefe5] flex items-center justify-center text-2xl mb-3">
              🍩
            </div>
            <h3 className="font-serif text-lg font-bold text-[#27180f]">Varian Tidak Ditemukan</h3>
            <p className="text-xs text-[#6e5849] mt-1 mb-4">
              Coba gunakan kata kunci pencarian lain atau pilih tab &ldquo;Semua Donut&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#96551d] text-white hover:bg-[#7e4514]"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Original Poster Preview Modal */}
      {posterModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setPosterModal(null)}
        >
          <div 
            className="relative max-w-sm sm:max-w-md w-full bg-white rounded-3xl p-2.5 shadow-2xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPosterModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-lg transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src={posterModal}
                alt="Poster Katalog Donut"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 450px"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
