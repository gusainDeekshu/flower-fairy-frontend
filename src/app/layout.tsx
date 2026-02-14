// src/app/layout.tsx
import BottomNav from "@/components/layout/BottomNav";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <QueryProvider>
          <div className="mx-auto max-w-md bg-white min-h-screen pb-24">
            {children}
            <BottomNav />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}