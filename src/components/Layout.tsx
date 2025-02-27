/** @jsxImportSource theme-ui */
import "@/base.css";
import { ReactNode } from "react";
import { ThemeUIProvider, Theme } from "theme-ui";
import theme from "@/theme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeUIProvider theme={theme as Theme}>
      <div
        sx={{
          "--margin": "minmax(1rem, 1fr)",
          "--max-width": ["1800px"],
          display: "grid",
          gridTemplateColumns: `
            [bleedstart] 
              var(--margin) 
                [start] 
                  repeat( 12, minmax(0, calc(var(--max-width) / 12)) )
                [end] 
              var(--margin)
            [bleedend]`,
        }}
      >
        {children}
      </div>
    </ThemeUIProvider>
  );
};
