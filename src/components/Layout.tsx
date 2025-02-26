/** @jsxImportSource theme-ui */
import "@/base.css";
import { ReactNode } from "react";
import { ThemeUIProvider, Theme } from "theme-ui";
import theme from "@/theme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <ThemeUIProvider theme={theme as Theme}>{children}</ThemeUIProvider>;
};
