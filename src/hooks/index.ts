import { useState, useCallback } from "react";
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

export const generateScaledArray = (length: number = 0, max: number = 100, bias: number = 0): number[] => {
  if (bias < -3 || bias > 3) throw new Error("bias must be between -3 and 3");

  const adjustBias = (t: number = 0, bias: number = 0): number => {
    if (bias === 0) return t; // No bias
    return bias > 0 ? Math.pow(t, 1 + bias) : 1 - Math.pow(1 - t, 1 - bias);
  };

  return Array.from({ length }, (_, i) => {
    const t = i / (length - 1);
    const adjustedT = adjustBias(t, bias);
    const value = max - adjustedT * max;
    return Number(value.toFixed(1)); // Round to integer for simplicity
  });
};

export const settings = {
  nextScrollDistance: 48,
  staggerBias: -1.75, // -3 to 3
  springOptions: {
    damping: 50,
    stiffness: 1000,
    mass: 0.1,
  },
};
