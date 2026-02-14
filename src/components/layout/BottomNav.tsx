// src/components/layout/BottomNav.tsx
import { Home, Grid, MessageCircle, ShoppingCart, User } from "lucide-react"

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white py-3 shadow-2xl">
      <div className="flex justify-around items-center px-2">
        <NavItem icon={<Home size={22} />} label="Home" active />
        <NavItem icon={<Grid size={22} />} label="Categories" />
        <NavItem icon={<MessageCircle size={22} />} label="WhatsApp" />
        <NavItem icon={<ShoppingCart size={22} />} label="Cart" />
        <NavItem icon={<User size={22} />} label="Account" />
      </div>
    </nav>
  )
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#5A2A5F]' : 'text-slate-400'}`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </div>
  )
}