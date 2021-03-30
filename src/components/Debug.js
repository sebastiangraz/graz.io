import React from "react";
import { useScrollData } from "scroll-data-hook";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
const ScrollTriggerContext = React.createContext(null);
const useScrollTrigger = () => React.useContext(ScrollTriggerContext);

const Debug = React.memo(({ children }) => {
  const { position } = useScrollData();
  let scrollVal = useMotionValue(3);

  useEffect(() => {
    scrollVal.set(position.y);
  }, [position.y, scrollVal]);
  return (
    <ScrollTriggerContext.Provider value={scrollVal}>
      {children}
    </ScrollTriggerContext.Provider>
  );
});

export { Debug, useScrollTrigger };
