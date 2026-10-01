'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, Calendar, Clock, MapPin, Sparkles, Check, AlertCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CheckoutForm } from '@/types/bakery';
import { formatRupiah, buildWhatsAppLink } from '@/lib/utils';
import { STORE_INFO } from '@/data/products';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, clearCart, subtotal, totalCount } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    customerName: '',
    customerPhone: '',
    deliveryDate: '',
    deliveryTime: 'Siang (12:00 - 15:00)',
    orderType: 'delivery',
    address: '',
    customGreeting: '',
    notes: '',
    includeCandles: true,
    candleNumber: 'Standard (Lilin Batang Kecil)',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (items.length === 0) {
      setErrorMsg('Keranjang belanja Anda masih kosong.');
      return;
    }

    if (!form.customerName.trim()) {
      setErrorMsg('Silakan isi Nama Pemesan terlebih dahulu.');
      return;
    }

    if (!form.customerPhone.trim()) {
      setErrorMsg('Silakan isi Nomor WhatsApp Pemesan.');
      return;
    }

    if (form.orderType === 'delivery' && !form.address.trim()) {
      setErrorMsg('Silakan isi Alamat Pengiriman lengkap untuk kurir.');
      return;
    }

    // Build URL & Open WhatsApp
    const waUrl = buildWhatsAppLink(items, form, subtotal);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#faf7f2] h-full shadow-2xl flex flex-col justify-between border-l border-[#ebdccc] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e8dcd0] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fbf2e9] text-[#96551d] flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#1f140e]">Keranjang Pesanan</h2>
              <p className="text-xs text-[#735e50]">{totalCount} item dipilih</p>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-[#f4ece3] hover:bg-[#ebdccc] text-[#4a3b32] flex items-center justify-center transition-colors"
            aria-label="Tutup Keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Item List */}
          {items.length === 0 ? (
            <div className="py-14 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0e3d5] text-[#96551d] mx-auto flex items-center justify-center text-3xl mb-3">
                🍰
              </div>
              <h3 className="font-serif text-lg font-bold text-[#20140c]">Keranjang Masih Kosong</h3>
              <p className="text-xs text-[#6e5849] mt-1 max-w-xs mx-auto mb-4">
                Pilih kue lezat favoritmu dari katalog dan klik tombol &ldquo;Pesan&rdquo;.
              </p>
              <button
                onClick={closeCart}
                className="px-5 py-2.5 rounded-full bg-[#96551d] text-white text-xs font-bold hover:bg-[#7e4514] transition-all"
              >
                Pilih Kue Sekarang
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#735e50] font-semibold">
                <span>Daftar Kue</span>
                <button
                  onClick={clearCart}
                  className="text-rose-600 hover:text-rose-700 underline text-[11px]"
                >
                  Kosongkan
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white rounded-2xl border border-[#ebdccc] shadow-xs flex gap-3 items-center"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#faf5ef] shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-bold text-[#20140c] truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#96551d] font-semibold">
                      {item.sizeLabel}
                    </p>
                    <p className="text-xs font-bold text-[#3d2719] mt-0.5">
                      {formatRupiah(item.unitPrice * item.quantity)}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 border border-[#ebdccc] rounded-full px-1.5 py-1 bg-[#faf7f2]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#5e4b3f] hover:bg-[#efe4d8]"
                      aria-label="Kurangi Jumlah"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center text-[#20140c]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#5e4b3f] hover:bg-[#efe4d8]"
                      aria-label="Tambah Jumlah"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                    aria-label="Hapus Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Form Detail Pemesan */}
          {items.length > 0 && (
            <div className="space-y-4 pt-2 border-t border-[#e8dcd0]">
              <h3 className="font-serif text-base font-bold text-[#1f140e] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#a86c2d]" />
                <span>Data Pengiriman & Ucapan</span>
              </h3>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Tipe Pemesanan: Delivery vs Pickup */}
              <div>
                <label className="text-[11px] font-bold text-[#443226] block mb-1.5 uppercase">
                  Metode Pengambilan:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, orderType: 'delivery' })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      form.orderType === 'delivery'
                        ? 'border-[#96551d] bg-[#fdf3e7] text-[#96551d] shadow-xs'
                        : 'border-[#ebdccc] bg-white text-[#584537]'
                    }`}
                  >
                    <span>🛵 Delivery (Kurir)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, orderType: 'pickup' })}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      form.orderType === 'pickup'
                        ? 'border-[#96551d] bg-[#fdf3e7] text-[#96551d] shadow-xs'
                        : 'border-[#ebdccc] bg-white text-[#584537]'
                    }`}
                  >
                    <span>🏪 Ambil di Toko</span>
                  </button>
                </div>
              </div>

              {/* Nama & No WA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#443226] block mb-1">
                    Nama Pemesan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sarah Wijaya"
                    value={form.customerName}
                    onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#443226] block mb-1">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxxx"
                    value={form.customerPhone}
                    onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none"
                  />
                </div>
              </div>

              {/* Tanggal & Waktu Kirim */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#443226] block mb-1">
                    Tanggal Pengantaran
                  </label>
                  <input
                    type="date"
                    value={form.deliveryDate}
                    onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none text-[#332216]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#443226] block mb-1">
                    Estimasi Jam
                  </label>
                  <select
                    value={form.deliveryTime}
                    onChange={(e) => setForm({ ...form, deliveryTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none text-[#332216]"
                  >
                    <option>Pagi (09:00 - 12:00)</option>
                    <option>Siang (12:00 - 15:00)</option>
                    <option>Sore (15:00 - 18:00)</option>
                    <option>Malam (18:00 - 20:30)</option>
                  </select>
                </div>
              </div>

              {/* Alamat Pengantaran jika Delivery */}
              {form.orderType === 'delivery' && (
                <div>
                  <label className="text-[11px] font-bold text-[#443226] block mb-1">
                    Alamat Lengkap Pengiriman *
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, patokan lokasi..."
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none"
                  />
                </div>
              )}

              {/* Tulisan di Atas Kue / Kartu Ucapan */}
              <div>
                <label className="text-[11px] font-bold text-[#443226] block mb-1">
                  Tulisan Custom di Kue / Kartu Ucapan (Gratis)
                </label>
                <input
                  type="text"
                  placeholder='Contoh: "Happy 25th Birthday Nadia! ❤️"'
                  value={form.customGreeting}
                  onChange={(e) => setForm({ ...form, customGreeting: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#ebdccc] rounded-xl focus:border-[#96551d] outline-none"
                />
              </div>

              {/* Free Candles Checkbox */}
              <div className="p-3 bg-[#fdf9f4] border border-[#ebdccc] rounded-xl space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.includeCandles}
                    onChange={(e) => setForm({ ...form, includeCandles: e.target.checked })}
                    className="rounded border-[#ebdccc] text-[#96551d] focus:ring-[#96551d]"
                  />
                  <span className="text-xs font-semibold text-[#3d2c20]">
                    Sertakan Lilin & Pisau Kue (Gratis)
                  </span>
                </label>

                {form.includeCandles && (
                  <input
                    type="text"
                    placeholder="Permintaan lilin angka / jumlah batang (cth: Lilin Angka 25)"
                    value={form.candleNumber}
                    onChange={(e) => setForm({ ...form, candleNumber: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#ebdccc] rounded-lg focus:border-[#96551d] outline-none"
                  />
                )}
              </div>

            </div>
          )}

        </div>

        {/* Drawer Bottom Bar: Subtotal & WhatsApp Button */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#e8dcd0] bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block">Subtotal Pesanan:</span>
                <span className="font-serif text-2xl font-extrabold text-[#96551d]">
                  {formatRupiah(subtotal)}
                </span>
              </div>
              <span className="text-[11px] text-[#786152] bg-[#fbf3eb] px-2.5 py-1 rounded-full border border-[#ebdccc]">
                {form.orderType === 'delivery' ? 'Belum termasuk ongkir kurir' : 'Pickup toko bebas ongkir'}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2.5 transition-all transform active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Checkout Pesanan via WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-stone-400">
              Format rincian kue & alamat otomatis dikirim ke admin toko via WhatsApp.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
