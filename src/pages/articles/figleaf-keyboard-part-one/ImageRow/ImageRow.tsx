import { Children } from "react";
import style from "./ImageRow.module.css";

interface ImageRowProps {
  children: React.ReactNode;
  gap: React.CSSProperties["gap"];
}

const ImageRow = ({ children, gap = "1rlh" }: ImageRowProps) => {
  const count = Children.count(children);

  return (
    <div
      className={`${style.row} full`}
      style={{ "--image-row-count": count, "--image-row-gap": gap } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export { ImageRow };
