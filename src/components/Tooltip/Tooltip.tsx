import * as Popover from "@radix-ui/react-popover";
import { ReactNode, useState } from "react";
import { Box } from "theme-ui";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export const Tooltip = ({ label, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <Box
          as="button"
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "dashed",
            textDecorationColor: "color-mix(in srgb, var(--theme-ui-colors-text) 32%, transparent)",
            textDecorationThickness: "1px",
            textUnderlineOffset: "3px",
            cursor: "help",
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            color: "inherit",
            "@media (hover: none)": {
              "&:active": {
                opacity: 0.7,
              },
            },
          }}
        >
          {label}
        </Box>
      </Popover.Trigger>
      <AnimatePresence>
        {isOpen && (
          <Popover.Portal forceMount>
            <Popover.Content asChild side="top" align="center" sideOffset={11} forceMount>
              <motion.div
                initial={{ opacity: 0, y: 4, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 4, x: "-50%" }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                  exit: { duration: 0.15 },
                }}
                style={{
                  maxWidth: "320px",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05), 0 2px 2px -1px rgba(0, 0, 0, 0.02)",
                  border: "1px solid var(--theme-ui-colors-muted)",
                  zIndex: 1000,
                  left: "50%",
                  position: "relative",
                  transformOrigin: "top",
                  willChange: "transform, opacity",
                  touchAction: "none",
                }}
              >
                <Box sx={{ fontSize: 5, color: "textDim", a: { color: "text" } }}>{children}</Box>
                <Popover.Arrow
                  style={{
                    fill: "#fff",
                    stroke: "var(--theme-ui-colors-muted)",
                    strokeWidth: "1px",
                  }}
                />
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
};
