/** @jsxImportSource theme-ui */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "theme-ui";
import throttle from "lodash.throttle";
import { MouseTracker } from "../MouseTracker";

interface Props {
  children: React.ReactNode[];
  onChangeIndex?: (index: number) => void;
  ratio?: [number, number];
  heading: React.ReactNode;
  mobileBleed?: boolean;
  autoplay?: boolean;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Carousel = ({
  children,
  onChangeIndex,
  ratio = [16, 9],
  heading = null,
  mobileBleed = false,
  autoplay = false,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const [disableScrollUpdates, setDisableScrollUpdates] = useState(false);
  const [disableAutoplay, setDisableAutoplay] = useState(true);
  const [mouseTarget, setMouseTarget] = useState("");

  useEffect(() => {
    if (!disableAutoplay) {
      const autoplayInterval = setInterval(() => {
        setActiveIndex((currentIndex) => wrap(0, children.length, currentIndex + 1));
        setDisableScrollUpdates(true);
      }, 600);
      return () => {
        clearInterval(autoplayInterval);
      };
    }
  }, [children.length, disableAutoplay]);

  const handleScroll = throttle(() => {
    if (parentRef.current && autoplay) {
      const { top, height } = parentRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const inView = top + height > 0 && top < viewportHeight;
      setDisableAutoplay(!inView);
    }
    if (!disableScrollUpdates && !autoplay) {
      if (parentRef.current) {
        const { top, height } = parentRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (top >= 0 && top + height <= viewportHeight) {
          // Calculate the percentage of the component that has scrolled through the viewport
          const scrollPercentage = Math.min(1 - top / (viewportHeight - height), 1);
          const index = Math.min(Math.floor(scrollPercentage * children.length), children.length - 1);
          setActiveIndex(index);
          onChangeIndex && onChangeIndex(index);
        } else if (height > viewportHeight && top <= 0) {
          // Calculate the percentage of the component that has scrolled through the viewport
          const scrollPercentage = Math.min(-top / (height - viewportHeight), 1);

          const index = Math.min(Math.floor(scrollPercentage * children.length), children.length - 1);
          setActiveIndex(index);
          onChangeIndex && onChangeIndex(index);
        }
      }
    }
  }, 30);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true } as any);
    return () => {
      window.removeEventListener("scroll", handleScroll, {
        passive: true,
      } as any);
    };
  }, [handleScroll]);

  return (
    <>
      {mouseTarget && (
        <MouseTracker offset={{ x: 10, y: 10 }}>
          {mouseTarget} <span sx={{ opacity: 0.5 }}>/ {children.length}</span>
        </MouseTracker>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],
          rowGap: [8, 3],
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Text
          variant="lead"
          sx={{
            m: 0,
            textWrap: "balance",
            color: "var(--caseForegroundDim)",
            maxWidth: "38ch",
          }}
        >
          {heading}
        </Text>
        {children.map((child, i) => {
          const alt = (child as any).props?.src?.alt;
          const isCardVisible = i === activeIndex;
          return <React.Fragment key={i}>{isCardVisible && <ImageCaption caption={alt} />}</React.Fragment>;
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
              setDisableAutoplay(true);
            }}
          />
        ))}
      </Box>
      <Box
        ref={parentRef}
        sx={{
          aspectRatio: `${ratio[0]}/${ratio[1]}`,
          width: mobileBleed ? ["130%", "100%"] : "100%",
          maskImage: mobileBleed && [
            "linear-gradient(96deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 85%)",
            "none",
          ],
          position: "relative",
          display: "grid",
          // overflow: "hidden",
          userSelect: "none",
          cursor: "pointer",
          isolation: "isolate",
        }}
        onClick={() => {
          setActiveIndex(wrap(0, children.length, activeIndex + 1));
          setDisableScrollUpdates(true);
          setDisableAutoplay(true);
        }}
      >
        <AnimatePresence initial={false}>
          {children.map((child, i) => {
            const isCardVisible = i === activeIndex;
            return (
              <React.Fragment key={i}>
                <motion.div
                  onMouseEnter={() => setMouseTarget(`${activeIndex + 1}`)}
                  onMouseLeave={() => setMouseTarget("")}
                  data-index={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isCardVisible ? 1 : 0,
                    transition: {
                      duration: 0.2,
                      ease: [0.4, 0.1, 0.01, 0.99],
                    },
                  }}
                  exit={{ opacity: 0 }}
                  style={{
                    zIndex: isCardVisible ? 1 : 0,
                    mixBlendMode: "plus-lighter",
                    width: "100%",
                    height: "100%",
                    gridArea: "1/1",
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
const IndexIndicator: React.FC<IndexIndicatorProps> = React.memo(({ active, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      flex: 1,
      my: 3,
      pt: [3, 7],
      pb: [6, 8],
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
));

interface ImageCaptionProps {
  caption: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = React.memo(({ caption }) => (
  <Text
    variant="caps"
    sx={{
      alignSelf: [null, null, "flex-end"],
      position: ["relative", null, "absolute"],
      right: 0,
      m: 0,
      color: "var(--caseForegroundDim)",
    }}
  >
    {caption ? caption : "\u200B"}
  </Text>
));
