import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "theme-ui";

import theme from "./theme";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
