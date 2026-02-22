// src/store/use-cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  quantity: number;
  price: number;
  // ... other fields
}

export const useCart = create()(
  persist((set, get) => ({
    items: [],
    addItem: (newItem) => {
      const items = get().items;
      const existing = items.find(i => i.id === newItem.id);
      
      if (existing) {
        set({ items: items.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i) });
      } else {
        set({ items: [...items, { ...newItem, quantity: 1 }] });
      }
    },
    removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  }), { name: 'flower-fairy-cart-v1' })
);