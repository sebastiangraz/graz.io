import * as HoverCard from "@radix-ui/react-hover-card";
import { ReactNode } from "react";
import { Box } from "theme-ui";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export const Tooltip = ({ label, children }: TooltipProps) => {
  return (
    <HoverCard.Root openDelay={200} closeDelay={100}>
      <HoverCard.Trigger asChild>
        <Box
          as="span"
          sx={{
            borderBottom: "1px dashed color-mix(in srgb, var(--theme-ui-colors-text) 24%, transparent)",
            cursor: "default",
          }}
        >
          {label}
        </Box>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          align="center"
          sideOffset={5}
          style={{
            maxWidth: "240px",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid var(--theme-ui-colors-muted)",
            zIndex: 1000,
          }}
        >
          <Box sx={{ color: "textDim", a: { color: "text" } }}>{children}</Box>

          <HoverCard.Arrow
            style={{
              fill: "#fff",
              stroke: "var(--theme-ui-colors-muted)",
              strokeWidth: "1px",
            }}
          />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
