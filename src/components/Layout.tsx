/** @jsxImportSource theme-ui */
import "@/base.css";
import { ReactNode } from "react";
import { ThemeUIProvider, Theme } from "theme-ui";
import theme from "@/theme";
import { Helmet } from "react-helmet-async";
import { getSiteUrl } from "@/utils/siteUrl";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeUIProvider theme={theme as Theme}>
      <Helmet>
        <link rel="alternate" type="application/rss+xml" title="Sebastian Graz's Blog RSS Feed" href="/rss.xml" />
        <meta property="og:image" content={`${getSiteUrl()}/og.png`} />
      </Helmet>
      <div
        sx={{
          "--margin": ["minmax(0rem, 1fr)"],
          "--max-width": ["1800px"],
          "--columnSize": "calc(var(--max-width) / 12)",
          display: "grid",
          gridTemplateColumns: `
            [bleedstart] 
              var(--margin) 
                [start] 
                  repeat( 12, minmax(0, var(--columnSize)))
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
