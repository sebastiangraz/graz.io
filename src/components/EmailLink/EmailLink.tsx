/** @jsxImportSource theme-ui */

import React, { useEffect, useState } from "react";
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
  const [copied, setCopied] = useCopyState(false, 2000);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(string);
        setCopied(true);
      } else {
        // Fallback for browsers without clipboard API
        const success = copyTextToClipboard(string);
        if (success) {
          setCopied(true);
        } else {
          console.error("Fallback copy method failed");
        }
      }
    } catch (err) {
      console.error("Could not copy text: ", err);
    }
  };

  const copyTextToClipboard = (text: string): boolean => {
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
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      {children}
      <span
        sx={{
          fontWeight: "normal",
          position: "relative",
          overflow: "hidden",
          maxWidth: copied ? "8ch" : "0",
          transition: "max-width 0.2s ease 0.1s, opacity 0.1s ease",
          opacity: copied ? 1 : 0,
        }}
      >
        {" "}
        copied
      </span>
    </span>
  );
};

const useCopyState = (initialState: boolean, delay: number) => {
  const [copy, setCopy] = useState(initialState);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

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
      setTimer(null);
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
