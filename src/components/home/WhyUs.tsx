// src/components/home/WhyUs.tsx
import { Truck, Clock, ShieldCheck, Heart } from "lucide-react";

const features = [
  { icon: Truck, label: "Express Delivery" },
  { icon: Clock, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Freshness Guaranteed" },
  { icon: Heart, label: "Made with Love" },
];

export function WhyUs() {
  return (
    <section className="rounded-[40px] bg-white p-8 shadow-sm">
      <h2 className="serif-font mb-8 text-center text-xl font-bold text-[#5A2A5F]">
        Why Dehradun Trusts Flower Fairy
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center text-center space-y-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4D7E1] text-[#5A2A5F]">
              <f.icon size={24} />
            </div>
            <span className="text-xs font-medium text-[#5A2A5F]">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}