import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/style/font-family.css";
import "./assets/style/main.css";
import "./assets/style/modern-normalize.css";
import "./assets/style/tailwind.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>,
);
