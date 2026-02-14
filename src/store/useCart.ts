// src/store/useCart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create()(persist((set) => ({
  items: [],
  addItem: (product: any) => set((state: any) => ({ items: [...state.items, product] })),
}), { name: 'cart-storage' }));