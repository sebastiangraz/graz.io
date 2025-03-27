import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollRestorationWrapper } from "./components/ScrollRestorationWrapper";

// Import CSS files
import "./base.css";

const queryClient = new QueryClient();

// Enable browser's native scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "auto";
}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  // Disable router's built-in scroll restoration since we're handling it manually
  scrollRestoration: false,
});

// Register scroll restoration behavior
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollRestorationWrapper>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </ScrollRestorationWrapper>
  </React.StrictMode>,
);
