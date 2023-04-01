/** @jsxImportSource theme-ui */

import React from "react";
import { m } from "framer-motion";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

export const EmailLink = ({
  string,
  children,
}: {
  string: string;
  children: React.ReactNode;
}) => {
  const [copy, setCopy] = React.useState(false);
  const [count, setCount] = React.useState(0);

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
      setCopy(true);
    } catch (err) {
      console.error("Async: Could not copy text: ", err);
    } finally {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  };
  return (
    <span
      sx={{
        touchAction: "manipulation",
        cursor: "pointer",
        whiteSpace: "pre",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { textDecoration: "underline" },
      }}
      onClick={(e) => handleClick(e)}
    >
      {children}

      {copy && (
        <span
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        >
          {count > 10 ? " very copied" : " copied"}
        </span>
      )}
    </span>
  );
};
