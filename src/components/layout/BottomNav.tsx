"use client"; // Required for hooks like usePathname and useRouter

import { usePathname, useRouter } from "next/navigation";
import { Home, Grid, MessageCircle, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils"; // Standard shadcn utility for cleaner classes

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { icon: <Home size={22} />, label: "Home", path: "/" },
    { icon: <Grid size={22} />, label: "Categories", path: "/categories" },
    { icon: <MessageCircle size={22} />, label: "WhatsApp", path: "/whatsapp" },
    { icon: <ShoppingCart size={22} />, label: "Cart", path: "/cart" },
    { icon: <User size={22} />, label: "Account", path: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-md justify-around items-center px-2">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={pathname === item.path}
            onClick={() => router.push(item.path)}
          />
        ))}
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 transition-colors duration-200",
        active ? "text-[#5A2A5F]" : "text-slate-400 hover:text-slate-600"
      )}
    >
      <div className={cn("transition-transform duration-200", active && "scale-110")}>
        {icon}
      </div>
      <span className={cn("text-[10px] font-semibold", active ? "opacity-100" : "opacity-80")}>
        {label}
      </span>
    </button>
  );
}