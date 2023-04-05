import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "theme-ui";
interface Props {
  children: React.ReactNode[];
  threshold?: number;
  onChangeIndex?: (index: number) => void;
  ratio?: [number, number];
}

export const Carousel = ({
  children,
  threshold = 0.5,
  onChangeIndex,
  ratio = [16, 9],
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
    transition: {
      duration: 0.2,
    },
  };

  return (
    <>
      {children.map((child, i) => {
        const alt = (child as any).props.src.alt;
        const isCardVisible = i === activeIndex;
        return (
          <React.Fragment key={i}>
            {isCardVisible && <ImageCaption caption={alt} />}
          </React.Fragment>
        );
      })}
      <div
        ref={parentRef}
        style={{
          aspectRatio: `${ratio[0]}/${ratio[1]}`,
          width: "100%",
          position: "relative",
          display: "grid",
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
              </React.Fragment>
            );
          })}
        </AnimatePresence>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "10px",
            left: 0,
            right: 0,
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
        </div>
      </div>
    </>
  );
};

interface IndexIndicatorProps {
  active: boolean;
  onClick: () => void;
}

const IndexIndicator: React.FC<IndexIndicatorProps> = ({ active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: active ? "#333" : "#ccc",
      margin: "5px",
      cursor: "pointer",
    }}
  />
);

interface ImageCaptionProps {
  caption: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ caption }) => (
  <Text variant="label">{caption}</Text>
);
