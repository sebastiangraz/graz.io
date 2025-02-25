import React from "react";
type CaseWrapperState = {
  childHeight: number[];
  childPosition: number[];
  childSum: number;
  windowHeight: number;
};
export const CaseWrapperContext = React.createContext<CaseWrapperState | null>(null);
export const useCaseWrapperContext = () => React.useContext(CaseWrapperContext) as CaseWrapperState;
