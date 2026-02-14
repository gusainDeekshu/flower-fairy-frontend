// src/components/home/hero.tsx
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col gap-6 px-5 pt-10">
      <div className="space-y-3">
        <h1 className="serif-font text-4xl font-bold leading-tight text-[#5A2A5F]">
          Deliver Smiles Across <br /> Dehradun & India 🌸
        </h1>
        <p className="text-slate-500 text-sm">Premium flowers & cakes delivered same day.</p>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[45px] shadow-lg">
        <img src="/hero.jpg" alt="Hero" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-3">
        <Button className="h-14 rounded-2xl bg-[#FF6B6B] text-lg font-bold">Order Now</Button>
        <Button variant="outline" className="h-14 rounded-2xl border-2 border-[#5A2A5F] text-[#5A2A5F] font-bold">
          WhatsApp Order
        </Button>
      </div>
    </section>
  );
}