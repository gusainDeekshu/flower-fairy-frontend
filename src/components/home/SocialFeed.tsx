// src/components/home/SocialFeed.tsx
import { Instagram, Youtube, Twitter } from "lucide-react";

export function SocialFeed() {
  return (
    <section className="space-y-6">
      <div className="rounded-[40px] bg-[#5A2A5F] p-6 text-white">
        <div className="mb-4 flex items-center gap-3">
          <Instagram className="h-8 w-8" />
          <h3 className="text-lg font-bold">Join Our Insta Family</h3>
        </div>
        
        <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-4">
          <div className="h-20 w-20 rounded-xl bg-white p-1">
             <img src="/qr-code.png" alt="QR" className="h-full w-full" />
          </div>
          <div>
            <p className="text-xs opacity-80">Scan to follow us for daily updates & offers</p>
            <div className="mt-2 flex gap-3">
               <Instagram size={18} />
               <Youtube size={18} />
               <Twitter size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-2xl">
            <img src={`/insta-${i}.jpg`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}