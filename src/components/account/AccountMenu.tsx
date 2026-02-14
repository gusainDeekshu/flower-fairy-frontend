// src/components/account/AccountMenu.tsx
import { 
  Package, Heart, MapPin, 
  Settings, HelpCircle, ChevronRight 
} from "lucide-react";

const menuItems = [
  { icon: Package, label: "My Orders", color: "#5A2A5F", desc: "Ongoing and past orders" },
  { icon: Heart, label: "Wishlist", color: "#FF6B6B", desc: "Your favorite flowers & cakes" },
  { icon: MapPin, label: "Addresses", color: "#47BDFF", desc: "Manage delivery locations" },
  { icon: HelpCircle, label: "Help Center", color: "#FFC107", desc: "FAQs and live support" },
  { icon: Settings, label: "Preferences", color: "#78909C", desc: "Notification settings" },
];

export function AccountMenu() {
  return (
    <div className="space-y-3">
      <h3 className="serif-font text-sm font-bold text-[#5A2A5F] px-2 uppercase tracking-widest opacity-60">
        Account Settings
      </h3>
      <div className="grid gap-3">
        {menuItems.map((item) => (
          <button 
            key={item.label}
            className="flex items-center gap-4 bg-white p-4 rounded-[28px] group active:scale-[0.98] transition-all shadow-sm border border-slate-50 hover:shadow-md"
          >
            <div 
              className="h-12 w-12 rounded-2xl flex items-center justify-center transition-colors shadow-inner"
              style={{ backgroundColor: `${item.color}15`, color: item.color }}
            >
              <item.icon size={22} strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 text-left">
              <p className="font-bold text-[#5A2A5F] text-sm">{item.label}</p>
              <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
            </div>

            <ChevronRight className="text-slate-300 group-hover:text-[#5A2A5F] transition-colors" size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}