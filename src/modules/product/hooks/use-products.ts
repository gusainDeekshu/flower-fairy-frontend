"use client";

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api'; 
import { ProductSchema } from '@/lib/schema';
import { z } from 'zod';

export const productKeys = {
  all: ['products'] as const,
  byCategory: (cat: string) => [...productKeys.all, { cat }] as const,
};

export function useProducts(category?: string) {
  return useQuery({
    queryKey: category ? productKeys.byCategory(category) : productKeys.all,
    queryFn: async () => {
      // Ensure your backend is running on the URL defined in lib/api.ts
      const { data } = await api.get('/products', { params: { category } });
      return z.array(ProductSchema).parse(data);
    },
    staleTime: 1000 * 60 * 5,
  });
}