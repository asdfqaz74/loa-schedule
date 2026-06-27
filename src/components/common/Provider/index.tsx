import type { ReactNode } from "react";
import ToastProvider from "./ToastProvider";

type ProviderType = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderType) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
