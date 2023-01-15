import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import ErrorBoundary from "./ErrorBoundary.js";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";

const errorHandler = (error, errorInfo) => {
  console.log("Loggin", error, errorInfo);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
