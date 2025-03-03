import { Link as TanStackLink } from "@tanstack/react-router";
import { ReactNode } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Link = ({ to, children, className = "", activeClassName = "", onClick, style }: LinkProps) => {
  return (
    <TanStackLink
      to={to}
      activeProps={{ className: `${className} ${activeClassName}`.trim() }}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </TanStackLink>
  );
};
