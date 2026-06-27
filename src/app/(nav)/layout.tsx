import Header from "@/components/common/Header";
import type { ReactNode } from "react";

export default function NavLayout({ children }: { children: ReactNode }) {
  return (
    <body className="font-body-md text-body-md antialiased min-h-screen flex flex-col">
      <Header />
      {children}
    </body>
  );
}
