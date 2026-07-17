import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import CSS files
import "./base.css";

// A failed dynamic chunk load (e.g. hashed assets replaced by a new deploy
// mid-session) would otherwise leave a blank page. Reload once to pick up the
// fresh asset manifest; the sessionStorage flag prevents a reload loop.
window.addEventListener("vite:preloadError", (event) => {
  if (sessionStorage.getItem("preload-error-reloaded")) return;
  sessionStorage.setItem("preload-error-reloaded", "1");
  event.preventDefault();
  window.location.reload();
});
window.addEventListener("load", () => sessionStorage.removeItem("preload-error-reloaded"));

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
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
