import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "theme-ui";
import Balancer from "react-wrap-balancer";
import { throttle } from "lodash";

interface Props {
  children: React.ReactNode[];
  onChangeIndex?: (index: number) => void;
  ratio?: [number, number];
  heading: React.ReactNode;
}

export const Carousel = ({
  children,
  onChangeIndex,
  ratio = [16, 9],
  heading = null,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const [disableScrollUpdates, setDisableScrollUpdates] = useState(false);

  useEffect(() => {
    //throttle handleScroll

    const handleScroll = throttle(() => {
      if (parentRef.current && !disableScrollUpdates) {
        requestAnimationFrame(() => {
          if (parentRef.current) {
            const { top, height } = parentRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (top >= 0 && top + height <= viewportHeight) {
              // Calculate the percentage of the component that has scrolled through the viewport
              const scrollPercentage = Math.min(
                1 - top / (viewportHeight - height),
                1
              );
              const index = Math.min(
                Math.floor(scrollPercentage * children.length),
                children.length - 1
              );
              setActiveIndex(index);
              onChangeIndex && onChangeIndex(index);
            } else if (height > viewportHeight && top <= 0) {
              // Calculate the percentage of the component that has scrolled through the viewport
              const scrollPercentage = Math.min(
                -top / (height - viewportHeight),
                1
              );

              const index = Math.min(
                Math.floor(scrollPercentage * children.length),
                children.length - 1
              );
              setActiveIndex(index);
              onChangeIndex && onChangeIndex(index);
            }
          }
        });
      }
    }, 30);

    window.addEventListener("scroll", handleScroll, { passive: true } as any);

    return () => {
      window.removeEventListener("scroll", handleScroll, {
        passive: true,
      } as any);
    };
  }, [children.length, disableScrollUpdates, onChangeIndex]);

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
          filter:
            "drop-shadow(0px 38px 56px rgba(61, 27, 9, 0.02)) drop-shadow(0px 17.5686px 25.8905px rgba(61, 27, 9, 0.0148335)) drop-shadow(0px 10.0523px 14.814px rgba(61, 27, 9, 0.0125356)) drop-shadow(0px 6.10169px 8.99196px rgba(61, 27, 9, 0.010799)) drop-shadow(0px 3.67654px 5.41805px rgba(61, 27, 9, 0.00920104)) drop-shadow(0px 2.04733px 3.01712px rgba(61, 27, 9, 0.00746438)) drop-shadow(0px 0.880544px 1.29764px rgba(61, 27, 9, 0.00516649))",
        }}
      >
        <AnimatePresence>
          {children.map((child, i) => {
            const isCardVisible = i === activeIndex;
            return (
              <React.Fragment key={i}>
                <motion.div
                  data-index={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isCardVisible ? 1 : 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.4, 0.1, 0.01, 0.99],
                    },
                  }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: "100%",
                    height: "100%",
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
