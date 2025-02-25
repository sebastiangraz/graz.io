import { useEffect } from "react";

// Add a flag to disable URL updates
export const useUpdateURL = (slug: string | undefined, index: number, disableUrlUpdate: boolean = false) => {
  useEffect(() => {
    // If URL updates are disabled, don't add the popstate listener
    if (disableUrlUpdate) {
      return;
    }

    const handlePopState = (event: PopStateEvent) => {
      if (index !== 0) {
        window.history.replaceState(null, "", `/${slug}`);
      } else {
        window.history.replaceState(null, "", "/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [slug, index, disableUrlUpdate]);
};
