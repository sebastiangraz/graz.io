import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { ThemeProvider, Theme } from "theme-ui";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme as Theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
