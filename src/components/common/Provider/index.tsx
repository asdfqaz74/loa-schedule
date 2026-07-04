import type { ReactNode } from "react";
import ToastProvider from "./ToastProvider";
import JotaiProvider from "./JotaiProvider";

type ProviderType = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderType) {
  return (
    <JotaiProvider>
      {children}
      <ToastProvider />
    </JotaiProvider>
  );
}
