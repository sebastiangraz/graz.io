import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeUIProvider, Theme } from "theme-ui";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeUIProvider theme={theme as Theme}>
          <RouterProvider router={router} />
        </ThemeUIProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
