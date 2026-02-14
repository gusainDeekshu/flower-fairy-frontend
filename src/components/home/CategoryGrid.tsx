// src/components/home/CategoryGrid.tsx
import Image from "next/image";

const categories = [
  { name: "Flowers", img: "/cat-flowers.jpg" },
  { name: "Cakes", img: "/cat-cakes.jpg" },
  { name: "Combos", img: "/cat-combos.jpg" },
  { name: "Plants", img: "/cat-plants.jpg" },
  { name: "Personalized", img: "/cat-gifts.jpg" },
  { name: "Anniversary", img: "/cat-anniv.jpg" },
];

export function CategoryGrid() {
  return (
    <section>
      <h2 className="serif-font mb-4 text-xl font-bold text-[#5A2A5F]">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => (
          <div key={cat.name} className="group relative h-24 overflow-hidden rounded-2xl">
            <Image 
              src={cat.img} 
              alt={cat.name} 
              fill 
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20" />
            <span className="absolute bottom-2 left-3 text-sm font-bold text-white uppercase tracking-wider">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}