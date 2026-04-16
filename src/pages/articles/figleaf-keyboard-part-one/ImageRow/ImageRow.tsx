import { Children } from "react";
import style from "./ImageRow.module.css";

interface ImageRowProps {
  children: React.ReactNode;
}

const ImageRow = ({ children }: ImageRowProps) => {
  const count = Children.count(children);

  return (
    <div
      className={`${style.row} full`}
      style={{ "--image-row-count": count } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export { ImageRow };
