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
  title: 'SweetCrumb Artisan Bakery | Toko Kue Premium & Pastry Segar',
  description: 'Nikmati aneka cake artisan, Basque burnt cheesecake, strawberry shortcake, dan pastry fresh baked setiap hari. Pesan langsung dengan mudah via WhatsApp!',
  keywords: ['toko kue', 'artisan bakery', 'kue ulang tahun', 'basque burnt cheesecake', 'kue coklat premium', 'pesan kue jakarta'],
  openGraph: {
    title: 'SweetCrumb Artisan Bakery | Kelezatan Kue Premium Setiap Hari',
    description: 'Pesan kue favoritmu langsung diantar fresh ke rumah atau takeaway.',
    images: ['/images/hero.jpg'],
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
