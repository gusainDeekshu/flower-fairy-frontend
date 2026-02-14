// src/components/layout/Footer.tsx
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 space-y-8 px-5 pb-24">
      {/* Newsletter/CTA Section */}
      <div className="rounded-[40px] bg-[#5A2A5F] p-8 text-center text-white">
        <h3 className="serif-font text-2xl font-bold mb-2">Make Someone Smile Today 🌸</h3>
        <p className="text-xs opacity-80 mb-6">Join 10,000+ happy customers in Dehradun</p>
        
        <div className="space-y-3">
          <Button className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] rounded-2xl h-12 font-bold">
            Order Now
          </Button>
          <Button variant="outline" className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-2xl h-12">
            View Menu
          </Button>
        </div>
      </div>

      {/* Brand Footer */}
      <div className="text-center space-y-4">
        <div className="flex justify-center gap-6 text-[#5A2A5F] text-xs font-bold uppercase tracking-widest">
          <span>About</span>
          <span>Contact</span>
          <span>Policy</span>
          <span>Bulk Orders</span>
        </div>
        
        <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
          <span>Made with</span>
          <Heart size={10} className="fill-[#FF6B6B] text-[#FF6B6B]" />
          <span>in Dehradun for India</span>
        </div>
        
        <p className="text-[10px] text-slate-300">
          © 2024 Flower Fairy India. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}