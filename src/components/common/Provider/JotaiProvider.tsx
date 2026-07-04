"use client";

import { Provider as JotaiRootProvider } from "jotai";
import type { ReactNode } from "react";

type JotaiProviderProps = {
  children: ReactNode;
};

export default function JotaiProvider({ children }: JotaiProviderProps) {
  return <JotaiRootProvider>{children}</JotaiRootProvider>;
}
