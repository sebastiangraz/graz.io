import type { Property } from "csstype";
import style from "./Blend.module.css";

interface BlendProps {
  children: React.ReactNode;
  mode?: Property.MixBlendMode;
}

const Blend = ({ children, mode = "multiply" }: BlendProps) => (
  <div
    className={style.blend}
    style={{ "--blend-mode": mode } as React.CSSProperties}
  >
    {children}
  </div>
);

export { Blend };
