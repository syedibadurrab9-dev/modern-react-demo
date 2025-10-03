import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ✅ StrictMode helps detect unsafe lifecycles & side effects in React 18
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
