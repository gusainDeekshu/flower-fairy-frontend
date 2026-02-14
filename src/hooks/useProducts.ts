// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  rating: z.number().optional(),
});

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      return z.array(ProductSchema).parse(data);
    },
  });
}