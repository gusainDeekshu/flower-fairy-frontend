"use client"; // Required for TanStack Query

import { useProducts } from "@/hooks/useProducts"; // Use your existing hook
import { ProductCard } from "../ui/product-card"; // Component created in previous step
import { Skeleton } from "../ui/skeleton"; // Component created in previous step

export function FeaturedProducts({ title, category }: { title: string; category: string }) {
  const { data: products, isLoading, error } = useProducts(); 

  if (error) return null;

  return (
    <section className="py-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="serif-font text-xl font-bold text-[#5A2A5F]">{title}</h2>
        <button className="text-xs font-semibold text-[#FF6B6B]">View All</button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5">
        {isLoading ? (
          // Show 3 skeletons while loading
          [...Array(3)].map((_, i) => (
            <Skeleton key={i} className="min-w-[160px] aspect-square rounded-3xl" />
          ))
        ) : (
          products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </section>
  );
}