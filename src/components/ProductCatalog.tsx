'use client';

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { CAKE_PRODUCTS } from '@/data/products';
import { CakeProduct, CakeCategory } from '@/types/bakery';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

const CATEGORIES: { label: string; value: CakeCategory }[] = [
  { label: 'Semua Kue', value: 'all' },
  { label: 'Signature Cake', value: 'signature' },
  { label: 'Cheesecake', value: 'cheesecake' },
  { label: 'Buah Segar', value: 'fruit' },
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<CakeProduct | null>(null);

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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e3d5] text-[#96551d] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Pilihan Terbaik</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1f140e] tracking-tight">
            Kue Spesial Untuk Momen Berharga
          </h2>

          <p className="text-sm sm:text-base text-[#675447]">
            Tiap kue dipanggang dengan cinta, tekstur selembut sutra, dan manis yang pas di lidah.
          </p>
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
              placeholder="Cari rasa atau kue favorit..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#ebdccc] focus:border-[#96551d] focus:ring-2 focus:ring-[#96551d]/15 rounded-full text-xs sm:text-sm text-[#241a15] outline-none transition-all placeholder:text-stone-400 shadow-xs"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              🍰
            </div>
            <h3 className="font-serif text-lg font-bold text-[#27180f]">Kue Tidak Ditemukan</h3>
            <p className="text-xs text-[#6e5849] mt-1 mb-4">
              Coba kata kunci lain atau pilih kategori &ldquo;Semua Kue&rdquo;.
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
    </section>
  );
}
