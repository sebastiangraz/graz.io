import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "theme-ui";
import { Helmet, HelmetProvider } from "react-helmet-async";

import theme from "./theme";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
