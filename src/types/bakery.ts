export type CakeCategory = 'all' | 'signature' | 'cheesecake' | 'fruit' | 'tart';

export interface CakeProduct {
  id: string;
  name: string;
  category: CakeCategory;
  tagline: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: 'Best Seller' | 'Chef\'s Pick' | 'New Arrival' | 'Favorit';
  sizes: {
    label: string;
    portion: string;
    priceMultiplier: number;
  }[];
  ingredients: string[];
  shelfLife: string;
}

export interface CartItem {
  id: string; // unique item key: productId + sizeLabel
  productId: string;
  name: string;
  image: string;
  sizeLabel: string;
  unitPrice: number;
  quantity: number;
}

export interface CheckoutForm {
  customerName: string;
  customerPhone: string;
  deliveryDate: string;
  deliveryTime: string;
  orderType: 'delivery' | 'pickup';
  address: string;
  customGreeting: string;
  notes: string;
  includeCandles: boolean;
  candleNumber: string;
}
