// src/components/home/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col px-5 pt-10">
      <header className="mb-6 space-y-4">
        <h1 className="serif-font text-4xl font-bold leading-tight text-[#5A2A5F]">
          Deliver Smiles Across <br /> Dehradun & India 🌸
        </h1>
        <p className="text-muted-foreground text-sm">
          Premium flowers, cakes & surprise combos delivered same day.
        </p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-[10px]">⭐ 4.8 Rating</Badge>
          <Badge variant="outline" className="rounded-full px-3 py-1 text-[10px]">🚚 2-4hr Delivery</Badge>
        </div>
      </header>

      {/* Main Image - Large Rounded Frame */}
      <div className="relative mb-8 aspect-[3/4] overflow-hidden rounded-[45px] shadow-xl">
        <img src="/hero-flower-fairy.jpg" alt="Flower Fairy" className="h-full w-full object-cover" />
      </div>

      <div className="mt-auto space-y-3 pb-6">
        <Button className="h-14 w-full rounded-2xl bg-[#FF6B6B] text-lg font-bold hover:bg-[#ff5252]">
          Order Now
        </Button>
        <Button variant="outline" className="h-14 w-full rounded-2xl border-2 border-[#5A2A5F] text-[#5A2A5F] text-lg font-bold">
          WhatsApp Order
        </Button>
      </div>
    </section>
  );
}