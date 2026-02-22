import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BRAND } from "@/config/brand.config";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number | string;
}

export function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <Card className="min-w-[160px] border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="relative aspect-square rounded-3xl overflow-hidden mb-2">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover"
          />
          {rating && (
            <Badge className="absolute top-2 right-2 bg-white/90 text-[#5A2A5F] text-[10px] hover:bg-white border-none">
              ⭐ {rating}
            </Badge>
          )}
        </div>
        <h3 className="text-xs font-bold text-slate-800 line-clamp-1">{name}</h3>
        <p className="font-bold text-sm" style={{ color: BRAND.theme.primary }}>
          ₹{price}
        </p>
      </CardContent>
    </Card>
  );
}