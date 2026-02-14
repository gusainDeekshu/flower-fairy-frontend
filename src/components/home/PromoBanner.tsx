// src/components/home/PromoBanner.tsx
import { Badge } from "@/components/ui/badge";

export function PromoBanner({ title, badge }: { title: string; badge: string }) {
  return (
    <div className="relative w-full rounded-[40px] overflow-hidden bg-[#F4D7E1] p-6 min-h-[180px] flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img 
          src="/promo-bg.png" 
          alt="Promotion" 
          className="h-full w-full object-cover opacity-60 mix-blend-multiply"
        />
      </div>
      
      <div className="relative z-10 max-w-[60%] space-y-2">
        <Badge className="bg-[#FF6B6B] hover:bg-[#FF6B6B] rounded-full px-3">
          {badge}
        </Badge>
        <h3 className="serif-font text-xl font-bold text-[#5A2A5F] leading-tight">
          {title}
        </h3>
        <p className="text-[10px] text-[#5A2A5F]/70 font-medium">
          Freshness Handpicked for your loved ones
        </p>
      </div>
    </div>
  );
}