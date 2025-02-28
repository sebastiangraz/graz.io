/** @jsxImportSource theme-ui */
import React, { ReactNode, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context to track which FAQ item is open
type FAQContextType = {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
};

const FAQContext = createContext<FAQContextType>({
  activeIndex: null,
  setActiveIndex: () => {},
});

// Main FAQ container
type FAQProps = {
  children: ReactNode;
  defaultOpen?: number | null;
};

export const FAQ = ({ children, defaultOpen = null }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultOpen);

  // Convert children to array and add index props
  const childrenWithProps = Array.isArray(children)
    ? children.map((child, index) => {
        if (!child) return null;
        // Clone the element to add the index prop
        return React.cloneElement(child as React.ReactElement, { index });
      })
    : children;

  return (
    <FAQContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div
        sx={{
          overflow: "hidden",
        }}
      >
        {childrenWithProps}
      </div>
    </FAQContext.Provider>
  );
};

// Question component
type QuestionProps = {
  children: ReactNode;
  title: string;
  index?: number;
};

export const Question = ({ children, title, index }: QuestionProps) => {
  const { activeIndex, setActiveIndex } = useContext(FAQContext);
  const isOpen = index !== undefined && activeIndex === index;

  const toggleOpen = () => {
    // Only toggle if index is defined
    if (index !== undefined) {
      setActiveIndex(isOpen ? null : index);
    }
  };

  return (
    <div
      sx={{
        borderBottom: "1px solid",
        borderColor: "color-mix(in srgb, var(--theme-ui-colors-text) 8%, transparent)",
      }}
    >
      <div
        onClick={toggleOpen}
        sx={{
          width: "100%",
          textAlign: "left",
          padding: "1rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: isOpen ? "var(--theme-ui-colors-text)" : "var(--theme-ui-colors-textDim)",
          "&:hover": {
            cursor: "pointer",
            color: "var(--theme-ui-colors-text)",
          },
        }}
      >
        {title}
        <div
          sx={{
            position: "relative",
            width: "12px",
            height: "12px",
          }}
        >
          {/* Horizontal line (always visible) */}
          <div
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: "1px",
              backgroundColor: "text",
              transform: "translateY(-50%)",
            }}
          />

          {/* Vertical line (only visible when closed) */}
          <motion.div
            initial={false}
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.83, 0, 0.17, 1] }}
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "1px",
              height: "100%",
              backgroundColor: "text",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.83, 0, 0.17, 1] }}
            sx={{
              overflow: "hidden",
            }}
          >
            <div
              sx={{
                padding: "0 0 16px 0",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Answer component
type AnswerProps = {
  children: ReactNode;
};

export const Answer = ({ children }: AnswerProps) => {
  return (
    <div
      sx={{
        color: "var(--theme-ui-colors-textDim)",
      }}
    >
      {children}
    </div>
  );
};

// Export Faq as an alias for FAQ to support both usages
export const Faq = FAQ;

// Export as default for import in MDX files
export default Faq;
