import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";

interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  let StyledCarousel = motion("div") as any;

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const { top, height } = carouselRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top + height <= viewportHeight) {
        setCurrentIndex(0);
      } else if (top >= 0) {
        setCurrentIndex(children.length - 1);
      } else {
        const percentageScrolled = (viewportHeight - top) / height;
        const newIndex = Math.round(percentageScrolled * (children.length - 1));
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselRef, children.length]);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      setDirection(newDirection);
      return newIndex >= 0 && newIndex < children.length ? newIndex : prevIndex;
    });
  };

  return (
    <StyledCarousel
      ref={carouselRef}
      sx={{
        position: "relative",
        width: "100%",
        display: "grid",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <CarouselItem
          key={currentIndex}
          custom={direction}
          element={children[currentIndex]}
          paginate={paginate}
        />
      </AnimatePresence>
    </StyledCarousel>
  );
};

const CarouselItem: React.FC<{
  custom: number;
  paginate: (direction: number) => void;
  element: React.ReactNode;
}> = ({ custom, paginate, element }) => {
  let StyledCarouselItem = motion("div") as any;

  const variants = {
    enter: {
      y: custom > 0 ? 100 : -100,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: custom < 0 ? 100 : -100,
      opacity: 0,
    },
  };

  return (
    <StyledCarouselItem
      sx={{
        gridArea: "1/1",
      }}
      custom={custom}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      {element}
    </StyledCarouselItem>
  );
};
