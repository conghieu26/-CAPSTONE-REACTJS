import React from "react";
import ReactDOM from "react-dom/client";

import "./config /style/font-family.css";
import "./config /style/main.css";
import "./config /style/modern-normalize.css";
import "./config /style/tailwind.css";

import { RouterProvider } from "react-router-dom";
import App from "./App";
import { router } from "./router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
