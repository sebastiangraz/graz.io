import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    <ScrollRestorationManager>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </ScrollRestorationManager>
  </React.StrictMode>,
);

// Custom component to handle scroll restoration
function ScrollRestorationManager({ children }: { children: React.ReactNode }) {
  const SCROLL_KEY = "last_scroll_pos";

  // Save scroll position before unload
  React.useEffect(() => {
    // Force browser's native scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    // Prevent any default scroll behaviors from the app
    // Save scroll position on various events
    const saveScrollPosition = () => {
      const scrollY = window.scrollY.toString();
      document.documentElement.style.setProperty("--last-scroll-y", scrollY);
      localStorage.setItem(SCROLL_KEY, scrollY);
    };

    // Save scroll position before page unloads
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restore scroll position on component mount
  React.useEffect(() => {
    // Check if this is a page reload
    const perfEntries = performance.getEntriesByType("navigation");
    const isReload = perfEntries.length > 0 && (perfEntries[0] as PerformanceNavigationTiming).type === "reload";

    if (isReload) {
      const savedPosition = localStorage.getItem(SCROLL_KEY);

      if (savedPosition) {
        // Use multiple attempts to restore position
        const scrollToSavedPosition = () => {
          setTimeout(() => {
            window.scrollTo(0, Number(savedPosition));

            // Try again after a longer delay (for complex DOM layouts)
            setTimeout(() => {
              window.scrollTo(0, Number(savedPosition));
            }, 500);
          }, 100);
        };

        // Try immediately after mounting
        scrollToSavedPosition();

        // Also try after window load event
        window.addEventListener("load", scrollToSavedPosition, { once: true });
      }
    }
  }, []);

  return <>{children}</>;
}
