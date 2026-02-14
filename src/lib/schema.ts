// src/lib/schema.ts
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  rating: z.number().default(4.8),
  orderCount: z.number().default(0),
});

export type Product = z.infer<typeof ProductSchema>;