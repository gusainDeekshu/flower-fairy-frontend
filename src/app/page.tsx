import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanner } from "@/components/home/PromoBanner";
import { WhyUs } from "@/components/home/WhyUs";
import { SocialFeed } from "@/components/home/SocialFeed";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9FB] pb-20">
      <HeroSection />
      
      <div className="space-y-12 px-5">
        <CategoryGrid />
        
        <FeaturedProducts 
          title="Most Loved in Dehradun ❤️" 
          category="popular" 
        />

        <PromoBanner 
          title="Mother's Day Surprise Edition Special 🎁"
          badge="Limited Offer"
        />

        <WhyUs />
        
        <SocialFeed />
      </div>

      <Footer />
    </main>
  );
}