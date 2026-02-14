// src/app/account/page.tsx
import { AccountProfile } from "@/components/account/AccountProfile";
import { AccountMenu } from "@/components/account/AccountMenu";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#FFF9FB] pb-32">
      {/* Decorative Brand Header */}
      <div className="h-32 bg-[#5A2A5F] rounded-b-[40px] shadow-lg flex items-end justify-center pb-6">
        <h1 className="serif-font text-white text-xl font-bold tracking-wide">My Account</h1>
      </div>

      <div className="px-5 -mt-10 space-y-6">
        {/* Profile Card Section */}
        <AccountProfile />

        {/* Navigation Menu Options */}
        <AccountMenu />

        {/* Production-Grade Logout Action */}
        <div className="pt-4">
          <Button 
            variant="ghost" 
            className="w-full h-14 rounded-3xl bg-white text-red-500 border border-red-50 font-bold flex gap-3 hover:bg-red-50 active:scale-[0.98] transition-all shadow-sm"
          >
            <LogOut size={20} />
            Sign Out
          </Button>
          <p className="text-center text-[10px] text-slate-300 mt-6 uppercase tracking-widest font-medium">
            Flower Fairy v1.0.0
          </p>
        </div>
      </div>
    </main>
  );
}