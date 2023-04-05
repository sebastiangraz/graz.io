import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode[];
  threshold?: number;
  onChangeIndex?: (index: number) => void;
}

export const Carousel = ({
  children,
  threshold = 0.5,
  onChangeIndex,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `-${100 - threshold * 100}% 0px -${threshold * 100}% 0px`,
      threshold: [0, 1],
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isFirstLoad && onChangeIndex) {
      onChangeIndex(activeIndex);
    }
    setIsFirstLoad(false);
  }, [activeIndex, onChangeIndex, isFirstLoad]);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current && observerRef.current) {
        const { top, height } = parentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visiblePercent = Math.max(
          0,
          Math.min(1, (viewportHeight - Math.max(0, top)) / height)
        );
        const index = Math.floor(visiblePercent * children.length);
        setActiveIndex(Math.min(index, children.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [observerRef, parentRef, children]);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveIndex(parseInt(entry.target.getAttribute("data-index")!));
      }
    });
  };

  const fadeAnimation = {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  };

  return (
    <div
      ref={parentRef}
      style={{
        minHeight: "720px",
        background: "#eee",
        width: "100%",
        position: "relative",
        display: "grid",
      }}
    >
      <AnimatePresence>
        {children.map((child, i) => {
          const isCardVisible = i === activeIndex;
          return (
            <motion.div
              key={i}
              data-index={i}
              initial={fadeAnimation}
              animate={{ opacity: isCardVisible ? 1 : 0 }}
              exit={fadeAnimation}
              style={{
                width: "100%",
                gridArea: "1/1",
                scrollSnapAlign: "start",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
