import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import "intersection-observer";
// import { perf, wait } from "react-performance-testing";
// import { render, fireEvent, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

//Fixes video muted in Jest https://github.com/facebook/react/pull/20087
Object.defineProperty(HTMLMediaElement.prototype, "muted", {
  set: () => {},
});

//Fixes SVG Jest
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}
