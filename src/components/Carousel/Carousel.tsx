import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "theme-ui";

interface CarouselProps {
  children: React.ReactNode[];
}

const variants = (custom: number) => ({
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
});

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  let StyledCarousel = motion(Box) as any;

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;

      const { top, height } = carouselRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the height is greater than 0 to prevent division by 0
      if (height > 0) {
        const percentageScrolled = (viewportHeight - top) / height;

        console.log(percentageScrolled);

        const newIndex = Math.round(percentageScrolled * (children.length - 1));

        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselRef, children.length]);

  const handlePaginationDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderPaginationDots = () => {
    return children.map((_, index) => (
      <motion.span
        key={index}
        onClick={() => handlePaginationDotClick(index)}
        style={{
          display: "inline-block",
          margin: "0 5px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: currentIndex === index ? "black" : "gray",
          cursor: "pointer",
        }}
      />
    ));
  };
  return (
    <StyledCarousel
      ref={carouselRef}
      sx={{
        position: "relative",
        width: "100%",
        background: "#eee",
        minHeight: "720px",
        display: "grid",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false}>
        <CarouselItem
          key={currentIndex}
          custom={0}
          element={children[currentIndex]}
        />
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderPaginationDots()}
      </div>
    </StyledCarousel>
  );
};

const CarouselItem: React.FC<{
  custom: number;
  element: React.ReactNode;
}> = ({ custom, element }) => {
  let StyledCarouselItem = motion("div") as any;

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
