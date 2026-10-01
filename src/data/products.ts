import { CakeProduct } from '@/types/bakery';

export const STORE_INFO = {
  name: 'SweetCrumb Artisan Bakery',
  tagline: 'Kelezatan Kue Premium & Pastry Segar Setiap Hari',
  whatsappNumber: '6281234567890', // Ubah dengan nomor WhatsApp toko kamu
  whatsappDisplay: '+62 812-3456-7890',
  instagram: '@sweetcrumb.patisserie',
  address: 'Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan',
  operatingHours: 'Setiap Hari: 08.00 - 21.00 WIB',
  currency: 'IDR',
};

export const CAKE_PRODUCTS: CakeProduct[] = [
  {
    id: 'truffle-noir-ganache',
    name: 'Truffle Noir Ganache Cake',
    category: 'signature',
    tagline: 'Dark Belgian Chocolate 70% dengan Gold Flakes',
    description: 'Kue cokelat legendaris dengan lapisan sponge dark chocolate moist, diisi ganache leleh Belgian Valrhona 70%, dan dilapisi chocolate glaze berkilau dengan taburan edible gold leaf 24k.',
    price: 365000,
    image: '/images/chocolate-cake.jpg',
    rating: 4.9,
    reviewCount: 184,
    badge: 'Best Seller',
    sizes: [
      { label: 'Slice Single', portion: '1 Porsi', priceMultiplier: 0.22 },
      { label: 'Diameter 16 cm', portion: '6 - 8 Porsi', priceMultiplier: 1.0 },
      { label: 'Diameter 20 cm', portion: '10 - 14 Porsi', priceMultiplier: 1.45 },
    ],
    ingredients: ['Belgian Valrhona 70%', 'French Butter Elle & Vire', 'Fresh Dairy Cream', 'Edible Gold Leaf', 'Madagascar Bourbon Vanilla'],
    shelfLife: '3 hari dalam chiller kulkas (suhu 4°C)',
  },
  {
    id: 'hokkaido-strawberry-shortcake',
    name: 'Hokkaido Strawberry Bliss',
    category: 'fruit',
    tagline: 'Sponge Lembut Selembut Awan dengan Stroberi Segar',
    description: 'Shortcake khas Jepang dengan tekstur sponge cake yang luar biasa lembut, dilapisi fresh Hokkaido whipped cream yang ringan tidak enek, dan limpahan buah stroberi manis pilihan.',
    price: 345000,
    image: '/images/strawberry-shortcake.jpg',
    rating: 5.0,
    reviewCount: 220,
    badge: 'Favorit',
    sizes: [
      { label: 'Slice Single', portion: '1 Porsi', priceMultiplier: 0.22 },
      { label: 'Diameter 16 cm', portion: '6 - 8 Porsi', priceMultiplier: 1.0 },
      { label: 'Diameter 20 cm', portion: '10 - 14 Porsi', priceMultiplier: 1.45 },
    ],
    ingredients: ['Hokkaido Fresh Cream', 'Handpicked Sweet Strawberry', 'Organic Egg Sponge', 'Mint Blossom', 'Natural Vanilla Bean'],
    shelfLife: '2 hari dalam chiller kulkas (disarankan santap segar di hari yang sama)',
  },
  {
    id: 'san-sebastian-basque-cheesecake',
    name: 'San Sebastian Basque Burnt Cheesecake',
    category: 'cheesecake',
    tagline: 'Pusat Meleleh (Molten) dengan Karamelisasi Autentik',
    description: 'Cheesecake panggang khas Basque dengan permukaan hitam terkaramelisasi aromatik dan bagian tengah yang lembut lumer meleleh. Dibuat menggunakan perpaduan cream cheese premium dan heavy cream segar.',
    price: 320000,
    image: '/images/burnt-cheesecake.jpg',
    rating: 4.9,
    reviewCount: 198,
    badge: 'Chef\'s Pick',
    sizes: [
      { label: 'Slice Single', portion: '1 Porsi', priceMultiplier: 0.22 },
      { label: 'Diameter 16 cm', portion: '6 - 8 Porsi', priceMultiplier: 1.0 },
      { label: 'Diameter 20 cm', portion: '10 - 14 Porsi', priceMultiplier: 1.45 },
    ],
    ingredients: ['Philadelphia Cream Cheese', 'French Double Cream', 'Whole Farm Eggs', 'Burnt Sugar Caramel', 'Madagascar Vanilla Pods'],
    shelfLife: '4 hari dalam chiller kulkas',
  },
  {
    id: 'royal-red-velvet',
    name: 'Royal Velvet Supreme',
    category: 'signature',
    tagline: 'Classic Red Crumb dengan Silky Mascarpone Frosting',
    description: 'Kue beludru merah klasik dengan sentuhan cokelat lembut dan buttermilk organik. Dilapisi frosting mascarpone cream cheese yang seimbang antara rasa gurih manis dan crumble renyah.',
    price: 350000,
    image: '/images/red-velvet.jpg',
    rating: 4.8,
    reviewCount: 156,
    badge: 'New Arrival',
    sizes: [
      { label: 'Slice Single', portion: '1 Porsi', priceMultiplier: 0.22 },
      { label: 'Diameter 16 cm', portion: '6 - 8 Porsi', priceMultiplier: 1.0 },
      { label: 'Diameter 20 cm', portion: '10 - 14 Porsi', priceMultiplier: 1.45 },
    ],
    ingredients: ['Authentic Cocoa Powder', 'Organic Cultured Buttermilk', 'Italian Mascarpone', 'Premium Cream Cheese', 'Red Velvet Rose Crumb'],
    shelfLife: '3-4 hari dalam chiller kulkas',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jessica Clarissa',
    role: 'Pesan Kue Ulang Tahun Mama',
    avatar: 'JC',
    rating: 5,
    comment: 'Pesan Hokkaido Strawberry Shortcake buat ultah mama, manisnya pas banget ga bikin eneg sama sekali! Krimnya ringan dan buah stroberinya seger manis. Checkout via WA langsung direspons cepat sama admin.',
  },
  {
    id: 2,
    name: 'Dimas Wicaksono',
    role: 'Pecinta Dessert & Kopi',
    avatar: 'DW',
    rating: 5,
    comment: 'Basque Burnt Cheesecake-nya gila sih, bagian tengahnya beneran molten dan lumer di mulut. Recommended banget buat temen ngopi sore. Pengiriman instan aman ga ada yang rusak.',
  },
  {
    id: 3,
    name: 'Nathalie Tan',
    role: 'Corporate Event Planner',
    avatar: 'NT',
    rating: 5,
    comment: 'Order Truffle Noir Ganache untuk hampers anniversary kantor sebanyak 12 cake. Packagingnya super mewah dengan pita satin & gold leaf di kuenya kelihatan berkelas sekali!',
  },
];

export const FAQS = [
  {
    q: 'Bagaimana cara pemesanan kue di SweetCrumb?',
    a: 'Pilih kue yang Anda inginkan, tentukan ukuran (slice atau whole cake), masukkan ke keranjang, isi data tanggal kirim dan ucapan, lalu klik "Checkout via WhatsApp". Rincian pesanan akan langsung otomatis terformat dan terkirim ke WhatsApp toko kami.',
  },
  {
    q: 'Apakah bisa pesan untuk dikirim hari ini (Same Day)?',
    a: 'Bisa! Kami selalu menyiapkan persediaan fresh ready-stock terbatas setiap pagi. Untuk pemesanan same-day, konfirmasi segera via WhatsApp sebelum pukul 14.00 WIB.',
  },
  {
    q: 'Apakah semua kue SweetCrumb halal?',
    a: 'Ya, 100% Halal. Kami hanya menggunakan bahan-bahan bersertifikasi halal, tanpa kandungan rhum/alkohol, gelatin hewani non-halal, atau bahan pengawet kimia.',
  },
  {
    q: 'Bisa request tulisan ucapan dan lilin ulang tahun?',
    a: 'Bisa dan GRATIS! Anda dapat menuliskan pesan custom untuk plakat cokelat / kartu ucapan dan memilih lilin batang atau angka saat proses checkout di keranjang belanja.',
  },
];
