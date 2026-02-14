// src/app/page.tsx
"use client";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { Hero } from "@/components/home/Hero";

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
});

export default function Home() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      return z.array(ProductSchema).parse(await res.json()); // Production validation
    }
  });

  return (
    <main className="min-h-screen bg-white pb-24">
      <Hero />
      <section className="px-5 mt-12">
        <h2 className="serif-font text-2xl font-bold text-[#5A2A5F]">Most Loved ❤️</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {products?.map((p) => (
            <div key={p.id} className="bg-slate-50 p-3 rounded-3xl">
              <img src={p.image} className="aspect-square rounded-2xl object-cover" />
              <h3 className="mt-2 text-sm font-semibold truncate">{p.name}</h3>
              <p className="font-bold text-[#5A2A5F]">₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}