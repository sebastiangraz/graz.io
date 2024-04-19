/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ThemeUICSSObject } from "theme-ui";

export const EmailLink = ({
  string,
  children,
  ...sx
}: {
  string: string;
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
}) => {
  // const [copy, setCopy] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [copy, setCopyWithTimeout] = useCopyState(false, 2000);
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCount(count + 1);

    const copyTextToClipboard = (text: string) => {
      const textarea = document.createElement("textarea");
      textarea.style.opacity = "0";
      textarea.style.position = "fixed";
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    };

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(string);
      } else {
        const success = copyTextToClipboard(string);
        if (!success) {
          throw new Error("Fallback copy method failed");
        }
      }
      setCopyWithTimeout(true);
    } catch (err) {
      console.error("Async: Could not copy text: ", err);
    }
  };
  return (
    <span
      {...sx}
      sx={{
        touchAction: "manipulation",
        cursor: "pointer",
        whiteSpace: "pre",
        color: "inherit",
        textDecoration: "underline",
        "&:hover": { textDecoration: "none" },
      }}
      onClick={(e) => handleClick(e)}
    >
      {children}
      <AnimatePresence>
        {copy && (
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {count > 10 ? " very copied" : " copied"}
          </m.span>
        )}{" "}
      </AnimatePresence>
    </span>
  );
};

const useCopyState = (initialState: boolean, delay: number) => {
  const [copy, setCopy] = useState(initialState);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const setCopyWithTimeout = (value: boolean) => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    setCopy(value);
    if (value) {
      const newTimer = setTimeout(() => {
        setCopy(false);
      }, delay);
      setTimer(newTimer);
    }
  };

  return [copy, setCopyWithTimeout] as const;
};
