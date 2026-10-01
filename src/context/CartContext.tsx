'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CakeProduct, CartItem } from '@/types/bakery';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: CakeProduct, sizeIndex: number, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  // Load from localStorage safely on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sweetcrumb_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem('sweetcrumb_cart', JSON.stringify(items));
    } catch {
      // Ignore quota errors
    }
  }, [items]);

  const addToCart = (product: CakeProduct, sizeIndex: number, quantity = 1) => {
    const chosenSize = product.sizes[sizeIndex] || product.sizes[0];
    const unitPrice = Math.round(product.price * chosenSize.priceMultiplier);
    const id = `${product.id}-${chosenSize.label}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id,
          productId: product.id,
          name: product.name,
          image: product.image,
          sizeLabel: chosenSize.label,
          unitPrice,
          quantity,
        },
      ];
    });

    setLastAddedName(product.name);
    setTimeout(() => setLastAddedName(null), 3000);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        lastAddedName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
