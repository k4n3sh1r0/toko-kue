import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BWL (Baked with Love) | Mochi & Artisan Donut Binjai',
  description: 'BWL (Baked with Love) — Toko mochi donut, artisan donut, dan classic donut fresh baked setiap hari di Jl. Ikan Hiu No.59, Binjai, Sumatera Utara. Pesan praktis langsung via WhatsApp!',
  keywords: ['BWL', 'baked with love', 'mochi donut binjai', 'artisan donut binjai', 'toko donat binjai', 'daifuku donut', 'classic donut 85k', 'pesan donat sumatera utara'],
  openGraph: {
    title: 'BWL (Baked with Love) | Binjai',
    description: 'Pesan mochi donut dan artisan donut favoritmu langsung diantar atau ambil di Jl. Ikan Hiu No.59, Binjai.',
    images: ['/images/catalog/menu-mochi-donut.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#faf7f2] text-[#241a15] font-sans antialiased selection:bg-[#e0ad68]/30 selection:text-[#522c07]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
