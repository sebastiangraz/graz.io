import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { ThemeUIProvider, Theme } from "theme-ui";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeUIProvider theme={theme as Theme}>
        <App />
      </ThemeUIProvider>
    </HelmetProvider>
  </React.StrictMode>
);
