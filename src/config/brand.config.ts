// src/config/brand.config.ts
import { z } from 'zod';

export const BrandConfigSchema = z.object({
  name: z.string(),
  logo: z.string(),
  whatsapp: z.string(),
  theme: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string(),
  }),
});

export const BRAND = BrandConfigSchema.parse({
  name: process.env.NEXT_PUBLIC_APP_NAME || "Flower Fairy",
  logo: process.env.NEXT_PUBLIC_LOGO_URL || "/logo.svg",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919876543210",
  theme: {
    primary: "#5A2A5F", // Brand Purple
    secondary: "#FF6B6B", // Brand Coral
    accent: "#FFF9FB", // Soft Pink BG
  },
});