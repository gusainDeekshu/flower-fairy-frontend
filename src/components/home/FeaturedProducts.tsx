// src/components/home/FeaturedProducts.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: string;
}

const DUMMY_PRODUCTS: Product[] = [
  { id: "1", name: "Premium Red Roses", price: 899, image: "/product-1.jpg", rating: "4.8" },
  { id: "2", name: "Classic Truffle Cake", price: 549, image: "/product-2.jpg", rating: "4.9" },
  { id: "3", name: "Elegant Lily Bouquet", price: 1299, image: "/product-3.jpg", rating: "4.7" },
];

export function FeaturedProducts({ title, category }: { title: string; category: string }) {
  return (
    <section className="py-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="serif-font text-xl font-bold text-[#5A2A5F]">{title}</h2>
        <span className="text-xs font-semibold text-[#FF6B6B]">View All</span>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5">
        {DUMMY_PRODUCTS.map((product) => (
          <Card key={product.id} className="min-w-[160px] border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-2">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
                {product.rating && (
                  <Badge className="absolute top-2 right-2 bg-white/90 text-[#5A2A5F] text-[10px] hover:bg-white">
                    ⭐ {product.rating}
                  </Badge>
                )}
              </div>
              <h3 className="text-xs font-bold text-slate-800 line-clamp-1">{product.name}</h3>
              <p className="text-[#5A2A5F] font-bold text-sm">₹{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}