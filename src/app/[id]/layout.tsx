import Header from "@/components/common/Header";
import type { ReactNode } from "react";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
