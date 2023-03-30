import { useEffect } from "react";

export const useUpdateURL = (slug: string | undefined, index: number) => {
  useEffect(() => {
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
  }, [slug, index]);
};
