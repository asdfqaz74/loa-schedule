import Header from "@/components/common/Header";
import type { ReactNode } from "react";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
