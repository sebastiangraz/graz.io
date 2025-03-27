import { type ReactNode } from "react";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

export const ScrollRestorationWrapper = ({ children }: { children: ReactNode }) => {
  useScrollRestoration();
  return <>{children}</>;
};
