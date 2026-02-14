// src/components/account/AccountProfile.tsx
import { User, LogOut, Settings, Package, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button"; //
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; //
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AccountProfile() {
  return (
    <div className="space-y-6 px-5 pt-8 pb-32">
      {/* Header Profile Section */}
      <header className="flex flex-col items-center text-center space-y-4">
        <Avatar className="h-24 w-24 border-4 border-[#F4D7E1] shadow-lg">
          <AvatarImage src="/avatar-placeholder.jpg" />
          <AvatarFallback className="bg-[#5A2A5F] text-white text-xl font-bold">JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1 className="serif-font text-2xl font-bold text-[#5A2A5F]">Jane Doe</h1>
          <p className="text-slate-500 text-sm">jane.doe@example.com</p>
        </div>
        <Button variant="outline" className="rounded-full h-8 px-4 border-[#5A2A5F] text-[#5A2A5F] text-xs font-bold">
          Edit Profile
        </Button>
      </header>

      {/* Menu Grid - Production Grade Efficiency */}
      <section className="grid grid-cols-1 gap-4">
        <AccountMenuItem icon={<Package size={20} />} label="My Orders" description="Track and view past purchases" />
        <AccountMenuItem icon={<Heart size={20} />} label="Wishlist" description="Your favorite blooms and cakes" />
        <AccountMenuItem icon={<MapPin size={20} />} label="Saved Addresses" description="Manage delivery locations" />
        <AccountMenuItem icon={<Settings size={20} />} label="Account Settings" description="Privacy and notifications" />
      </section>

      {/* Logout CTA */}
      <Button className="w-full h-12 bg-slate-50 hover:bg-red-50 text-red-500 border border-red-100 rounded-2xl font-bold flex gap-2">
        <LogOut size={18} /> Logout
      </Button>
    </div>
  );
}

function AccountMenuItem({ icon, label, description }: { icon: any, label: string, description: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm active:scale-95 transition-all">
      <div className="h-12 w-12 rounded-2xl bg-[#F4D7E1] text-[#5A2A5F] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-bold text-[#5A2A5F] text-sm">{label}</h3>
        <p className="text-[11px] text-slate-400">{description}</p>
      </div>
    </div>
  );
}