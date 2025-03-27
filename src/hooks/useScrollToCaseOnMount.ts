import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

interface useScrollToCaseOnMountProps {
  slug: string | undefined;
  scrollToVal: number;
}

export const useScrollToCaseOnMount = ({ slug, scrollToVal }: useScrollToCaseOnMountProps) => {
  const router = useRouter();

  useEffect(() => {
    document.fonts.ready.then(function () {
      // Check if we're on the case study route
      if (slug && router.state.location.pathname === `/${slug}`) {
        window.scrollTo({
          top: scrollToVal,
          left: 0,
          behavior: "auto",
        });
      }
    });

    return () => {};
  }, [slug, scrollToVal, router.state.location.pathname]);
};
