import { useEffect } from "react";

interface useScrollToCaseOnMountProps {
  slug: string | undefined;
  scrollToVal: number;
}

export const useScrollToCaseOnMount = ({
  slug,
  scrollToVal,
}: useScrollToCaseOnMountProps) => {
  useEffect(() => {
    document.fonts.ready.then(function () {
      if (window.location.pathname === `/${slug}`) {
        window.scrollTo({
          top: scrollToVal,
          left: 0,
          behavior: "auto",
        });
      }
    });

    return () => {};
  }, [slug, scrollToVal]);
};
