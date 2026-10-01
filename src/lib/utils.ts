import { CartItem, CheckoutForm } from '@/types/bakery';
import { STORE_INFO } from '@/data/products';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppLink(items: CartItem[], form: CheckoutForm, subtotal: number): string {
  const orderNumber = 'BWL-' + Math.floor(100000 + Math.random() * 900000);
  
  let itemLines = '';
  items.forEach((item, index) => {
    itemLines += `${index + 1}. *${item.name}* (${item.sizeLabel})\n   └ ${item.quantity}x @ ${formatRupiah(item.unitPrice)} = *${formatRupiah(item.quantity * item.unitPrice)}*\n`;
  });

  const message = `🍩 *PESANAN BARU - ${STORE_INFO.name.toUpperCase()}* 🍩
━━━━━━━━━━━━━━━━━━━━━
*No. Pesanan:* #${orderNumber}

👤 *DATA PEMESAN:*
• Nama: ${form.customerName || '-'}
• No. WhatsApp: ${form.customerPhone || '-'}
• Tipe: ${form.orderType === 'delivery' ? '🛵 Pengantaran (Delivery)' : '🏪 Ambil di Toko (Pickup)'}
• Jadwal: ${form.deliveryDate || 'Secepatnya'} (Jam: ${form.deliveryTime || '-'})
${form.orderType === 'delivery' ? `• Alamat: ${form.address || '-'}\n` : ''}
🛒 *DETAIL PESANAN:*
${itemLines}
━━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL BELANJA:* *${formatRupiah(subtotal)}*
_(Belum termasuk ongkos kirim jika delivery)_

🎂 *REQUEST TAMBAHAN:*
• Lilin & Pisau: ${form.includeCandles ? `Ya (Nomor/Jumlah lilin: ${form.candleNumber || 'Standard'})` : 'Tidak'}
• Tulisan di Kue/Kartu: ${form.customGreeting ? `"${form.customGreeting}"` : '-'}
• Catatan Khusus: ${form.notes ? form.notes : '-'}
━━━━━━━━━━━━━━━━━━━━━
Halo Admin ${STORE_INFO.name}, saya ingin konfirmasi pesanan di atas. Mohon info ketersediaan & total ongkirnya ya. Terima kasih!`;

  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
