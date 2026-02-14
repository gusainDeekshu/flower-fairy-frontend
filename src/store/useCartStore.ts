// src/store/useCartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create()(
  persist((set) => ({
    items: [],
    addItem: (item: any) => set((state: any) => ({ items: [...state.items, item] })),
  }), { name: 'cart-storage' })
);