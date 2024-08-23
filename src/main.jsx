import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./config /style/font-family.css";
import "./config /style/modern-normalize.css";
import "./config /style/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
