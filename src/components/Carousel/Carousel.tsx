import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "theme-ui";
import Balancer from "react-wrap-balancer";

interface Props {
  children: React.ReactNode[];
  threshold?: number;
  onChangeIndex?: (index: number) => void;
  ratio?: [number, number];
  heading: React.ReactNode;
}

export const Carousel = ({
  children,
  threshold = 0.5,
  onChangeIndex,
  ratio = [16, 9],
  heading = null,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [disableScrollUpdates, setDisableScrollUpdates] = useState(false);
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
      if (parentRef.current && !disableScrollUpdates) {
        requestAnimationFrame(() => {
          if (parentRef.current) {
            const { top, height } = parentRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (top >= 0 && top + height <= viewportHeight) {
              // Calculate the percentage of the component that has scrolled through the viewport
              const scrollPercentage = 1 - top / (viewportHeight - height);

              // Set the active index based on the scroll percentage
              const index = Math.floor(scrollPercentage * children.length);
              setActiveIndex(Math.min(index, children.length - 1));
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [observerRef, parentRef, children, disableScrollUpdates]);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveIndex(parseInt(entry.target.getAttribute("data-index")!));
      }
    });
  };

  const fadeAnimation = {
    opacity: 0,
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "minmax(min-content, 50%) auto",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Text variant="lead" sx={{ m: 0, color: "var(--caseForegroundDim)" }}>
          <Balancer>{heading}</Balancer>
        </Text>
        {children.map((child, i) => {
          const alt = (child as any).props.src.alt;
          const isCardVisible = i === activeIndex;
          return (
            <React.Fragment key={i}>
              {isCardVisible && <ImageCaption caption={alt} />}
            </React.Fragment>
          );
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {children.map((_, i) => (
          <IndexIndicator
            key={i}
            active={i === activeIndex}
            onClick={() => {
              setActiveIndex(i);
              setDisableScrollUpdates(true);
            }}
          />
        ))}
      </Box>
      <Box
        ref={parentRef}
        sx={{
          aspectRatio: `${ratio[0]}/${ratio[1]}`,
          width: "100%",
          position: "relative",
          display: "grid",
          overflow: "hidden",
          boxShadow: "capchase",
        }}
      >
        <AnimatePresence>
          {children.map((child, i) => {
            const isCardVisible = i === activeIndex;
            return (
              <React.Fragment key={i}>
                <motion.div
                  data-index={i}
                  initial={fadeAnimation}
                  animate={{
                    opacity: isCardVisible ? 1 : 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.4, 0.1, 0.01, 0.99],
                    },
                  }}
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
              </React.Fragment>
            );
          })}
        </AnimatePresence>
      </Box>
    </>
  );
};

interface IndexIndicatorProps {
  active: boolean;
  onClick: () => void;
}
const IndexIndicator: React.FC<IndexIndicatorProps> = React.memo(
  ({ active, onClick }) => (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        pt: 7,
        pb: 8,
        cursor: "pointer",
        display: "grid",
        ...(!active && {
          "&:hover": {
            "&:after": {
              opacity: 0.4,
            },
          },
        }),

        "&:after": {
          content: "''",
          gridArea: "1/1",
          width: "100%",
          height: "2px",
          transition: "0.2s ease opacity",
          borderRadius: "2px",
          opacity: active ? 1 : 0.12,
          backgroundColor: "var(--caseForegroundDim)",
        },
      }}
    />
  )
);

interface ImageCaptionProps {
  caption: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = React.memo(({ caption }) => (
  <Text
    variant="caps"
    sx={{
      m: 0,
      color: "var(--caseForegroundDim)",
    }}
  >
    {caption}
  </Text>
));
